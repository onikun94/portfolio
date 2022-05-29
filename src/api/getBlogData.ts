import { BlogAllType, BlogType } from '@/types/BlogType';

export const getBlogData = async (url: string): Promise<BlogAllType> => {
  const res: Response = await fetch(url);
  const _res: BlogAllType = await res.json();
  return _res;
};

export const getOnlyBlogData = async (url: string): Promise<BlogType> => {
  const res: Response = await fetch(url);
  const _res: BlogType = await res.json();
  return _res;
};
