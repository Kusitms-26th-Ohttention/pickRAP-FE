export interface Logout {
  ok: boolean;
}

export interface Login {
  token: string;
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
