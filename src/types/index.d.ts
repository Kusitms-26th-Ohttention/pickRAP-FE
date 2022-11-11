interface APIResponse<T = any> {
  code: number;
  data: T;
  message: string;
}
