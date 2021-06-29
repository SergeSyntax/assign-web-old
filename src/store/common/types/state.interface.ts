export interface State<D> {
  loading: boolean;
  error: string | null;
  data: D;
}
