export const LOCAL_STORAGE_KEYS = {
  TOKEN: 'accessToken',
} as const;

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const DOMAIN = process.env.NODE_ENV === 'production' ? 'https://pickrap.vercel.app' : 'http://localhost:3000';

export const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PASSWORD_REGEXP = /^.*(?=^.{8,15}$)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

export const ERR_CODE = {
  CREATE_DUPLICATED_CATEGORY: 4004,
  MODIFY_DUPLICATED_CATEGORY: 4005,
} as const;
