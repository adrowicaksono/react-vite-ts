import { QueryClient } from '@tanstack/react-query'
import { DEFAULT_STATE_TIME, DEFAULT_GC_TIME, DEFAULT_QUERY_RETRY } from '../constants/QueryClientConstants'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: DEFAULT_STATE_TIME,
            gcTime: DEFAULT_GC_TIME,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: DEFAULT_QUERY_RETRY,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
    },
});

