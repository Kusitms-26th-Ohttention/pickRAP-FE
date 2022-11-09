export interface Logout {
  ok: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SNSLoginRequest {
  code: string;
  provider: string;
  state?: string;
}

export interface SNSLoginResponse {
  code: number;
  data: Record<string, unknown>;
  message: string;
}
