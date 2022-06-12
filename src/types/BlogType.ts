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
