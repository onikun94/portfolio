import { BlogResponse, TitleResponse } from '@/types/BlogType';

export const getBlogData = async (url: string): Promise<TitleResponse | BlogResponse> => {
  const res = await fetch(url);
  const _res = await res.json();
  return _res;
};
