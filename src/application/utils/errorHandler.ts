import axios from 'axios';

const errorHandler = (cb: (m: string) => any) => (err: unknown) => {
  if (axios.isAxiosError(err)) {
    if (err.response?.data.message) cb(err.response.data.message);
    else console.error('에러 발생! :::', err);
  }
};

export default errorHandler;
