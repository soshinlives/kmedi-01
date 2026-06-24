"use client";

import { useEffect } from "react";

interface PageScriptsProps {
  /** external page-specific scripts (e.g. /js/pss-state.js) */
  pageSrc?: string[];
  /** page-specific inline scripts, kept verbatim from the original site */
  pageInline?: string[];
}

// fetched-once cache for external script source text
const srcCache = new Map<string, Promise<string>>();
function fetchText(url: string): Promise<string> {
  let p = srcCache.get(url);
  if (!p) {
    p = fetch(url).then((r) => (r.ok ? r.text() : ""));
    srcCache.set(url, p);
  }
  return p;
}

/**
 * Runs the per-page JavaScript on every mount and tears down its global side
 * effects on unmount.
 *
 * The original site relied on full page reloads, so its DOM-query based scripts
 * (app.js + page inline scripts) re-ran on each navigation. With client-side
 * navigation there is no reload, so we re-execute those scripts here whenever a
 * page mounts. Element-level listeners die with the per-page chrome when it
 * unmounts, but window/document listeners, intervals and IntersectionObservers
 * would otherwise accumulate — so we patch the relevant globals during execution,
 * record what each run registers, and clean it up when the page unmounts.
 *
 * image-slot.js (custom-element definition) and contact-popup.js (one-time FAB
 * injection) are loaded once in the root layout instead — they must NOT re-run.
 */
export default function PageScripts({ pageSrc = [], pageInline = [] }: PageScriptsProps) {
  useEffect(() => {
    let disposed = false;

    // things to undo on unmount
    const winListeners: [string, EventListenerOrEventListenerObject, unknown][] = [];
    const docListeners: [string, EventListenerOrEventListenerObject, unknown][] = [];
    const intervals: number[] = [];
    const observers: { disconnect: () => void }[] = [];

    const run = async () => {
      // load external sources (app.js first, then any page-specific src), then inline
      const srcs = ["/js/app.js", ...pageSrc];
      const texts = await Promise.all(srcs.map(fetchText));
      if (disposed) return;

      // ---- install global patches (synchronous window only) ----
      const win = window as unknown as Record<string, unknown>;
      const origWinAdd = window.addEventListener.bind(window);
      const origDocAdd = document.addEventListener.bind(document);
      const origSetInterval = window.setInterval.bind(window);
      const OrigIO = window.IntersectionObserver;

      window.addEventListener = ((type: string, h: EventListenerOrEventListenerObject, o?: unknown) => {
        winListeners.push([type, h, o]);
        return origWinAdd(type as keyof WindowEventMap, h as EventListener, o as boolean | AddEventListenerOptions);
      }) as typeof window.addEventListener;

      document.addEventListener = ((type: string, h: EventListenerOrEventListenerObject, o?: unknown) => {
        docListeners.push([type, h, o]);
        return origDocAdd(type as keyof DocumentEventMap, h as EventListener, o as boolean | AddEventListenerOptions);
      }) as typeof document.addEventListener;

      window.setInterval = ((...args: Parameters<typeof setInterval>) => {
        const id = origSetInterval(...args) as unknown as number;
        intervals.push(id);
        return id;
      }) as typeof window.setInterval;

      window.IntersectionObserver = function (this: unknown, ...args: ConstructorParameters<typeof IntersectionObserver>) {
        const inst = new OrigIO(...args);
        observers.push(inst);
        return inst;
      } as unknown as typeof IntersectionObserver;
      (window.IntersectionObserver as unknown as { prototype: unknown }).prototype = OrigIO.prototype;

      // ---- execute scripts verbatim, synchronously, in original order ----
      try {
        const codes = [...texts, ...pageInline];
        for (const code of codes) {
          if (!code) continue;
          try {
            // eslint-disable-next-line no-new-func
            new Function(code)();
          } catch (err) {
            // keep going; surface in console like the original would
            console.error("[PageScripts] script error:", err);
          }
        }
      } finally {
        // ---- restore globals so React/Next internals are unaffected ----
        window.addEventListener = origWinAdd as typeof window.addEventListener;
        document.addEventListener = origDocAdd as typeof document.addEventListener;
        window.setInterval = origSetInterval as typeof window.setInterval;
        window.IntersectionObserver = OrigIO;
        void win;
      }
    };

    run();

    return () => {
      disposed = true;
      winListeners.forEach(([t, h, o]) => window.removeEventListener(t, h as EventListener, o as boolean | EventListenerOptions));
      docListeners.forEach(([t, h, o]) => document.removeEventListener(t, h as EventListener, o as boolean | EventListenerOptions));
      intervals.forEach((id) => clearInterval(id));
      observers.forEach((ob) => {
        try {
          ob.disconnect();
        } catch {
          /* noop */
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
