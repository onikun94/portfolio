import { supabase } from './supabaseClient';

import { SupaDataList, SupaList } from '@/types/BlogType';

export async function getAllData(offset: number, limit: number): Promise<SupaList> {
  const { data, error, count } = await supabase
    .from<SupaDataList>('onikunBlog')
    .select(
      `
      *
    `,
      { count: 'exact' },
    )
    .range(offset, limit)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }
  return { data: data, count: count };
}

export async function getDetailData(id: string) {
  const { data, error } = await supabase
    .from<SupaDataList>('onikunBlog')
    .select(
      `
      *
        )
      )
    `,
    )
    .eq('id', Number(id))
    .single();

  if (error) {
    throw error;
  }
  return data;
}
