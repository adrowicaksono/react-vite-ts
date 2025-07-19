import type { NYTResponse } from '../types/article'

class ApiError extends Error {
    constructor(message: string, public status: number) {
        super(message)
        this.name = 'ApiError'
    }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
        throw new ApiError(
            `API Error: ${response.status} ${response.statusText}`,
            response.status
        );
    }
    return response.json()
}

export const api = {
    getArticles: async (keyword: string): Promise<NYTResponse> => {
        const response = await fetch(`${import.meta.env.VITE_NYT_API_BASE_URL}?q=${keyword}&api-key=${import.meta.env.VITE_NYT_API_KEY}`)
        return handleResponse<NYTResponse>(response);
    },
}
