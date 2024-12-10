declare module 'class-variance-authority' {
    export function cva(
      base?: string,
      config?: {
        variants?: Record<string, Record<string, string>>;
        defaultVariants?: Record<string, string>;
        compoundVariants?: Array<Record<string, string>>;
      }
    ): (...classes: Array<string | undefined>) => string;
  }
  