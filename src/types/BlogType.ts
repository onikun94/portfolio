export type BlogType = {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  title?: string;
  contents?: string;
};

export type TitleBlogType = {
  id: number;
  updated_at: Date;
  title: string;
};
