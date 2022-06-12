export type BlogAllType = {
  count: number;
  next: string;
  previous: string;
  results: TitleBlogType[];
};

export type BlogType = {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  title?: string;
  contents?: string;
  image: string;
};

export type TitleBlogType = {
  id: number;
  updated_at: Date;
  title: string;
  image: string;
};

export type SupaDataList = {
  id: number;
  title: string;
  contents: string;
  created_at: string;
};

export type SupaList = {
  data: SupaDataList[];
  count: number | null;
};
