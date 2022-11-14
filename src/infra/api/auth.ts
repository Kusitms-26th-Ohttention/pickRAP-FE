import { instance } from '@/infra/api/instance';
import type { LoginRequest, Logout, SignUpRequest, SNSLoginRequest, SNSLoginResponse } from '@/infra/api/types/auth';

class authApi {
  logout = () => {
    return instance.post<Logout>('/mock');
  };
  login = (args: LoginRequest) => {
    return instance.post('/auth/sign-in', args);
  };
  signup = (args: SignUpRequest) => {
    return instance.post('/auth/sign-up', args);
  };
  reissue = () => {
    return instance.post('/auth/reissue');
  };
  snsLogin = (arg: SNSLoginRequest) => {
    const parameter = (Object.keys(arg) as (keyof SNSLoginRequest)[]).reduce(
      (acc, cur) => acc + (arg[cur] ? `${cur}=${arg[cur]}&` : ''),
      '?',
    );
    return instance.get<SNSLoginResponse>(`/auth/${arg.provider}${parameter.slice(0, parameter.length - 1)}`);
  };
}

export default new authApi();
