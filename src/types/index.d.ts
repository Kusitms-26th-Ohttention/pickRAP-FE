interface APIResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
