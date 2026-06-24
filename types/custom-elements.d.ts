import type { DetailedHTMLProps, HTMLAttributes } from "react";

// Custom element defined by public/js/image-slot.js (customElements.define('image-slot', ...))
interface ImageSlotAttributes extends HTMLAttributes<HTMLElement> {
  shape?: string;
  fit?: string;
  src?: string;
  placeholder?: string;
  ratio?: string;
  alt?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "image-slot": DetailedHTMLProps<ImageSlotAttributes, HTMLElement>;
    }
  }
}

export {};
