import Posts from './PostsModel';

/**
 * Get all posts
 */
export async function getAllPosts(): Promise<any> {
  try {
    const posts = await Posts.findAll();
    return posts;
  } catch (error) {
    console.error(error);
  }
}
