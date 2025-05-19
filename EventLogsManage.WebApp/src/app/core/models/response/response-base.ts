export interface ResponseBase<T> {
  codeId: number;
  message: string;
  data?: T;
}