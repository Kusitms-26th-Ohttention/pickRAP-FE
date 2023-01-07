import { instance } from '@/infra/api/instance';
import type { LoginRequest, Logout, ReIssueRequest, SignUpRequest, SNSLoginRequest } from '@/infra/api/types/auth';

export class AuthApi {
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
  reissue = ({ retry }: ReIssueRequest) => {
    return this.api.post('/auth/reissue', null, { headers: { retry } });
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
