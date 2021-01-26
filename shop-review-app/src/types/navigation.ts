import { Shop } from "./shop";
import { User } from './user';

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Shop: { shop: Shop };
  User: undefined;
  Search: undefined;
  CreateReview: { shop: Shop };
  Chat: { user: User };
  ChatUsers: undefined;
};
