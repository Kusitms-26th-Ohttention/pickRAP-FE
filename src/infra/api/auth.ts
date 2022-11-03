import { instance } from '@/infra/api/instance';
import type { Login, Logout } from '@/infra/api/types/auth';

class authApi {
  logout = () => {
    return instance.post<Logout>('/mock');
  };
  login = () => {
    return instance.post<Login>('/mock');
  };
  refresh = () => {
    return this.login();
  };
}

export default new authApi();
