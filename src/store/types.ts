export type ResponseTypes<T> = {
  readonly code: number;
  readonly message?: string;
  readonly errors?: string[];
  readonly result: T;
};
