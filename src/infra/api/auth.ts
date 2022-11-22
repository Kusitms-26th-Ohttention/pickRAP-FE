import { instance } from '@/infra/api/instance';
import type { LoginRequest, Logout, SignUpRequest, SNSLoginRequest } from '@/infra/api/types/auth';

class AuthApi {
  constructor(private api: typeof instance) {}
  logout = () => {
    return this.api.post<Logout>('/log-out');
  };
  login = (args: LoginRequest) => {
    return this.api.post('/auth/sign-in', args);
  };
  signup = (args: SignUpRequest) => {
    return this.api.post('/auth/sign-up', args);
  };
  reissue = () => {
    return this.api.post('/auth/reissue');
  };
  snsLogin = (arg: SNSLoginRequest) => {
    const parameter = (Object.keys(arg) as (keyof SNSLoginRequest)[]).reduce(
      (acc, cur) => acc + (arg[cur] ? `${cur}=${arg[cur]}&` : ''),
      '?',
    );
    return this.api.get(`/auth/${arg.provider}${parameter.slice(0, parameter.length - 1)}`);
  };
}

export default new AuthApi(instance);
