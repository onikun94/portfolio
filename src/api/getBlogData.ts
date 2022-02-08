import { BlogResponse, TitleResponse } from '@/types/BlogType';

export const getBlogData = async (url: string): Promise<TitleResponse | BlogResponse> => {
  const res: Response = await fetch(url);
  const _res: TitleResponse | BlogResponse = await res.json();
  return _res;
};
