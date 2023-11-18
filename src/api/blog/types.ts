import { Image } from '../../types/common';

export interface PostResponseDto {
  id: number;
  title: string;
  content: string;
  images: Image[];
  createdAt: string;
}

export interface PostsResponseDto {
  page: number;
  pagesTotal: number;
  posts: PostResponseDto[];
}

export interface CreateRequestDto {
  title: string;
  content: string;
  images: Image[];
}

export interface FetchPostsParams {
  page?: number;
  pageSize?: number;
}
