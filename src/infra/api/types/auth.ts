export interface Logout {
  ok: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}
export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
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

export interface ReIssueRequest {
  retry?: boolean;
}
