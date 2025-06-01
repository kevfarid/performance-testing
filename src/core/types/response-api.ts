export default interface ResponseApi<T = unknown> {
  status: number;
  data: T;
}
