import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient.ts'

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
        expect(screen.getByTestId('loading')).toBeInTheDocument()
    })
});