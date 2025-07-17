import { useSuspenseQuery, type UseSuspenseQueryOptions } from '@tanstack/react-query'
import { api } from '../services/api'
import { type NYTResponse } from '../types/article'


export const articleKeys = {
    all: ['articles'] as const,
    lists: (keyword: string) => [...articleKeys.all, keyword] as const
}

export const useArticles = (
    keyword: string,
    options?: Omit<UseSuspenseQueryOptions<NYTResponse, Error>, 'queryKey' | 'queryFn'>
) => {
    return useSuspenseQuery({
        queryKey: articleKeys.lists(keyword),
        queryFn: () => api.getArticles(keyword),
        staleTime: 10 * 60 * 1000, // 10 minutes
        ...options,
    })
}