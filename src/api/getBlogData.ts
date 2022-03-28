import { TitleBlogType } from '@/types/BlogType';

export const getBlogData = async (url: string): Promise<TitleBlogType[]> => {
  const res: Response = await fetch(url);
  const _res: TitleBlogType[] = await res.json();
  return _res;
};
