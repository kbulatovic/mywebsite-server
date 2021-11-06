import { PostsTableItem } from './PostsType';

class PostsEntity implements PostsTableItem {
  readonly id;
  readonly title;
  readonly content;
  readonly createdAt;
  readonly userId;
  readonly category;
  readonly shortDesc;

  constructor(payload: PostsTableItem) {
    const {
      id,
      title,
      content,
      createdAt,
      userId,
      category,
      shortDesc
    } = payload;

    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.userId = userId;
    this.category = category;
    this.shortDesc = shortDesc;
  }

  private getId(): number {
    return this.id;
  }

  private getTitle(): string {
    return this.title;
  }

  private getContent(): string {
    return this.content;
  }

  private getCreatedAt(): Date {
    return this.createdAt;
  }

  private getUserId(): number {
    return this.userId;
  }

  private getCategory(): string {
    return this.category;
  }

  private getShortDesc(): string {
    return this.shortDesc;
  }

  public getData() {
    
  }
}

export default PostsEntity;
