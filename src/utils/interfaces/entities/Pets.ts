export interface IPetListItem {
  id: number;
  name: string;
  user_id: number;
  image_url: string;
}

export interface IPet {
  id: number;
  name: string;
  color: string;
  birthdate: string;
  observation: any;
  user_id: number;
  image_url: string;
  age: string;
}

export interface IPetListItemData {
  message: string;
  data: IPetListItem[];
  token: string;
}

export interface IPetData {
  message: string;
  data: IPet;
  token: string;
}
