import connection from 'config/db';
import { AbstractModelInterface } from 'models/AbstractModel';
import { PostsTableItem } from './PostsType';

class PostsMapper implements AbstractModelInterface<PostsTableItem> {
  db = connection;

  async getAll(): Promise<PostsTableItem[]> {
    try {
      return await this.db('posts')
        .select('posts.*', 'users.email as userEmail', 'users.name as userName')
        .leftJoin('users', { 'posts.id': 'users.id' })
        .orderBy('posts.id', 'desc');
    } catch (error) {
      throw error;
    }  
  }

  async get(id: number): Promise<PostsTableItem> {
    return await this.db('posts')
      .select('posts.*', 'users.email as userEmail', 'users.name as userName')
      .leftJoin('users', { 'posts.id': 'users.id' })
      .where({ 'posts.id': id })
      .first();
  }

  async create(payload: PostsTableItem): Promise<PostsTableItem> {
    await this.db('posts').insert(payload);
    return this.db('posts').max('id');
  }

  async update({ id, ...payload}: PostsTableItem): Promise<PostsTableItem> {
    await this.db('posts').where({ id }).update(payload);
    return this.get(id);
  }
}

export default PostsMapper;
