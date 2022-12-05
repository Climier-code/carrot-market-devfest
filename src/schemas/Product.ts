export interface UserOtherProductInterface {
  name: string;
  img: string;
  price: number;
}

export interface UserInterface {
  profileImg: string;
  userName: string;
  rating: number;
  userID: number;
  location: string;
  other: UserOtherProductInterface[];
}

export interface ProductInterface {
  views: number;
  userID: number;
  img: string;
  dates: string;
  info: string;
  favorites: number;
  id: number;
  name: string;
  price: number;
  category: string;
  chats: number;
  location: string;
}
