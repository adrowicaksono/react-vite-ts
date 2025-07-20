import { useSuspenseQuery, type UseSuspenseQueryOptions } from '@tanstack/react-query'
import { api } from '../services/api'
import { type NYTResponse } from '../types/article'
import { DEFAULT_STATE_TIME } from '../constants/QueryClientConstants'

export type SortOptions = 'best' | 'newest' | 'oldest' | 'relevance'

export const articleKeys = {
    all: ['articles'] as const,
    lists: (keyword: string, page: number, sort: SortOptions) => [...articleKeys.all, keyword, page, sort] as const
}

export const useArticles = (
    keyword: string,
    page: number,
    sort: SortOptions,
    options?: Omit<UseSuspenseQueryOptions<NYTResponse, Error>, 'queryKey' | 'queryFn'>
) => {
    return useSuspenseQuery({
        queryKey: articleKeys.lists(keyword, page, sort),
        queryFn: () => api.getArticles(keyword, page, sort),
        staleTime: DEFAULT_STATE_TIME,
        ...options,
    })
}