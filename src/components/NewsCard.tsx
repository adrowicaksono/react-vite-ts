import type { NYTDocument, NYTKeyword } from '../types/article'
import { parseAndFormatDate } from '../utils/CommonUtils'
import { DEFAULT_NO_IMAGE_URL } from '../constants/CommonConstants'
import { noImageHandler } from '../utils/CommonUtils'

interface NewsCardProps {
    article: NYTDocument
}

const NewsCard = ({ article }: NewsCardProps) => {
    const {
        headline,
        abstract,
        snippet,
        byline,
        web_url,
        keywords,
        multimedia,
        pub_date
    } = article

    const mainHeadline = headline?.main || ''
    const originalByline = byline?.original || ''
    const imageUrl = multimedia?.default?.url || DEFAULT_NO_IMAGE_URL
    const imageCaption = multimedia?.caption || ''

    return (
        <div data-testid={`news-card-${article._id}`} className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl w-full mx-auto my-8 transform transition-transform duration-300 hover:scale-[1.01]">
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={mainHeadline || 'Article Image'}
                    className="w-full h-64 object-cover object-center rounded-t-xl"
                    onError={noImageHandler}
                />
                {imageCaption && (
                    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2">
                        {imageCaption}
                    </p>
                )}
            </div>

            <div className="p-6 md:p-8">
                <h2 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-3 leading-tight">
                    {mainHeadline}
                </h2>
                {originalByline && (
                    <p className="text-sm text-gray-600 mb-4 italic">
                        {originalByline}
                        <br />
                        {parseAndFormatDate(pub_date)}
                    </p>
                )}
                <p className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">
                    <span className="font-semibold">Abstract:</span> {abstract}
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                    <span className="font-semibold">Snippet:</span> {snippet}
                </p>
                {keywords && keywords.length > 0 && (
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 text-lg mb-3">Keywords:</h3>
                        <div className="flex flex-wrap gap-2">
                            {keywords.map((keyword: NYTKeyword, index: number) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm transition-colors duration-200 hover:bg-blue-200"
                                >
                                    {keyword.name}: {keyword.value}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {web_url && (
                    <div className="text-center mt-6">
                        <a
                            href={web_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            Read Full Article
                            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NewsCard