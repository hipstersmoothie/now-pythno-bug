/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface Process {
    serverHost: string;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'pwa-install': any;
  }
}
