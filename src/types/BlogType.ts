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
  title: string | null;
  contents: string | null;
  created_at: string | null;
};

export type SupaList = {
  data: SupaDataList[] | null;
  count: number | null;
};
