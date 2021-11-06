import { PostsTableItem } from './PostsType';
import PostsMapper from './PostsMapper';

class PostsService {
  
  mapper = new PostsMapper();

  async create(payload: PostsTableItem): Promise<PostsTableItem> {
    return await this.mapper.create(payload);
  }

  async getAll(): Promise<PostsTableItem[]> {
    return await this.mapper.getAll(); 
  }

  async get(id: number): Promise<PostsTableItem> {
    return await this.mapper.get(id);
  }

  async update(payload: PostsTableItem): Promise<PostsTableItem> {
    return this.mapper.update(payload);
  }
}

export default PostsService;
