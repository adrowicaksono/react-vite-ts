import { type FC } from 'react'
import { describe, it, expect } from 'vitest'
import ErrorBoundary from './ErrorBoundary'
import { render, waitFor, screen } from '@testing-library/react'

describe('Error boundary', () => {
    it('', async () => {
        const Foo: FC = () => {
            throw new Error('Oh no');
        }

        render(
            <ErrorBoundary>
                <Foo />
            </ErrorBoundary>
        )

        await waitFor(() => {
            expect(screen.getByText('Something went wrong.')).toBeVisible();
        });
    })
})