import * as firebase from "firebase";

export type User = {
  id?: string;
  name: string;
  // updatedAt: firebase.firestore.Timestamp;
  // createdAt: firebase.firestore.Timestamp;
  updateAt: firebase.default.firestore.Timestamp;
  createdAt: firebase.default.firestore.Timestamp;
};

export const initialUser: User = {
  name: "",
  // updatedAt: firebase.firestore.Timestamp.now(),
  // createdAt: firebase.firestore.Timestamp.now(),
  updateAt: firebase.default.firestore.Timestamp.now(),
  createdAt: firebase.default.firestore.Timestamp.now(),
};