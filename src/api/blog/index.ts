import apiService from '../apiService';
import { PostResponseDto, PostsResponseDto, FetchPostsParams } from './types';

const BLOG_API_URL = 'api/blog/post';

export const fetchPosts = async (params?: FetchPostsParams): Promise<PostsResponseDto> => {
  const response = await apiService.get(BLOG_API_URL, { params });
  return response.data;
};

export const fetchPostById = async (postId: string): Promise<PostResponseDto> => {
  const response = await apiService.get(`${BLOG_API_URL}/${postId}`);
  return response.data;
};
