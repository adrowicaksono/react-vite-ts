import { type FC } from 'react'

const LoadingSpinner: FC<{ message?: string }> = ({
    message = 'Loading...'
}) => {
    return (
        <div data-testid="loading" className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></div>
            <span className="text-gray-600">{message}</span>
        </div>
    );
};

export default LoadingSpinner