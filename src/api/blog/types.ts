import { Images } from '../../types/common';

export interface FetchPostsParams {
  page?: number;
  pageSize?: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  images: Images;
  createdAt: string;
}

export interface PostCollection {
  page: number;
  pagesTotal: number;
  posts: Post[];
}
