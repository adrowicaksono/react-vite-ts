interface PaginationProps {
    currentPage: number
    hasMore: boolean
    onChange: (currentPage: number) => void
}

const Pagination = ({ currentPage, hasMore, onChange }: PaginationProps) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (hasMore) {
            onChange(currentPage + 1);
        }
    };

    return (
        <nav className="flex items-center justify-center space-x-4 py-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                Previous
            </button>
            <span className="text-sm font-medium text-gray-700">Page {currentPage}</span>
            <button
                onClick={handleNext}
                disabled={!hasMore}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination