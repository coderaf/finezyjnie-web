import apiService from '../apiService';
import { FetchPostsParams } from './types';
import { Post, PostCollection } from './types';

const BLOG_API_URL = 'api/blog/post';

export const fetchPosts = async (params?: FetchPostsParams): Promise<PostCollection> => {
  const response = await apiService.get(BLOG_API_URL, { params });
  return response.data;
};

export const fetchPostById = async (postId: string): Promise<Post> => {
  const response = await apiService.get(`${BLOG_API_URL}/${postId}`);
  return response.data;
};
