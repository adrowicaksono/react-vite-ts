import React, { Component, type ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state so the next render shows the fallback UI.
        return { hasError: true, error: error, errorInfo: null }; // errorInfo will be populated by componentDidCatch
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.error('Uncaught error:', error, errorInfo);
        this.setState({ errorInfo: errorInfo }); // Store errorInfo for display or logging
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div data-testid="error">
                    <h1>Something went wrong.</h1>
                    {this.state.error && <p>Error: {this.state.error.message}</p>}
                    {this.state.errorInfo && (
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.errorInfo.componentStack}
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;