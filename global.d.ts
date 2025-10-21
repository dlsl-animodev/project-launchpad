declare module '*.css';
declare module './globals.css';
declare module '*/globals.css';
declare module 'app/globals.css';
declare module './app/globals.css';

interface CSSModule {
  [className: string]: string;
}

export default CSSModule;
