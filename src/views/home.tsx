import { type FC, useState, Suspense } from 'react'
import DebouncedInput from '../components/DebouncedInput'
import ArticlesList from '../components/ArticleList'
import LoadingSpinner from '../components/LoadingSpinner'



export const Home: FC = () => {
    const [inputValue, setInputValue] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')

    return (
        <>
            <div className='top-0 z-40 bg-white p-10'>
                <h1 className="text-3xl font-bold underline text-blue-600 w-full text-center">
                    Hello, New York Time News!
                </h1>
                <DebouncedInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onDebouncedChange={(value) => {
                        setDebouncedValue(value)
                    }}
                    placeholder="Type something..."
                    className="mt-6 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg"
                />
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md text-gray-700 text-sm sm:text-base">
                    <p>
                        <span className="font-semibold">Search Value:</span> {debouncedValue || 'Waiting for input...'}
                    </p>
                </div>
            </div>

            <Suspense fallback={<LoadingSpinner />}>
                <ArticlesList keyword={debouncedValue} />
            </Suspense>
        </>
    )
}