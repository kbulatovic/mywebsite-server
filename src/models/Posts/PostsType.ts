import { UsersItem } from 'models/users/UsersType';

export interface PostsTableItem {
  id: number,
  title: string,
  content: string,
  createdAt: Date,
  userId: number,
  category: string,
  shortDesc: string
}
