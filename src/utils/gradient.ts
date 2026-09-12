export const BRAND_GRADIENT = 'from-orange-500 via-pink-500 to-violet-500';
export const BRAND_GRADIENT_TEXT = 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent';
export const BRAND_GRADIENT_BG = 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500';
export const BRAND_GRADIENT_BORDER = 'border-transparent';
export const BRAND_GRADIENT_HOVER = 'hover:from-orange-600 hover:via-pink-600 hover:to-violet-600';

export const gradientClasses = {
  text: BRAND_GRADIENT_TEXT,
  bg: BRAND_GRADIENT_BG,
  border: BRAND_GRADIENT_BORDER,
  hover: BRAND_GRADIENT_HOVER,
} as const;
