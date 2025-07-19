import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import ArticlesList from './components/ArticleList'

describe('Main Application', () => {
    let user: ReturnType<typeof userEvent.setup>

    beforeEach(() => {
        user = userEvent.setup()
    })

    it('renders the App component', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        );

        expect(screen.getByText(/Hello, New York Time News!/i)).toBeInTheDocument();

        const searchInput = screen.getByTestId('debounced-input')

        await user.type(searchInput, 'fireworks')

        expect(searchInput).toHaveValue('fireworks')
    })

    it('should display correct number of articles', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <ArticlesList keyword='' />
            </QueryClientProvider>
        )

        await waitFor(() => {
            expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
        })

        const articleItems = screen.getAllByTestId(/news-card/i)
        expect(articleItems).toHaveLength(2)
    })
})