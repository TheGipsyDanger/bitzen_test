export namespace IHeader {
  export interface IView {
    label?: string;
  }
  export interface IModelProps {}
  export interface IModel extends IView {
    top: number;
    goBack: () => void;
  }
}
