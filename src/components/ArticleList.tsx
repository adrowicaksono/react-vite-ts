import type { NYTDocument } from '../types/article'
import NewsCard from './NewsCard'
import { useArticles, type SortOptions } from '../hooks/useArticles'
import Pagination from './Pagination'
import { useState } from 'react'
import SortDropdown from './SortDropDown'

interface ArticleListProps {
    keyword: string
}

const ArticlesList = ({ keyword }: ArticleListProps) => {
    const [page, setPage] = useState(1)
    const [sortValue, setSortValue] = useState<SortOptions>('newest');


    const { data: articles } = useArticles(keyword, page - 1, sortValue);


    const handleSortChange = (value: SortOptions) => {
        setSortValue(value)
    }

    return (
        <>
            <SortDropdown
                onChange={handleSortChange}
                initialValue={sortValue}
            />
            <ul>
                {articles.response.docs.map((article: NYTDocument) => (
                    <div key={article._id}>
                        <NewsCard article={article} />
                    </div>
                ))}
            </ul>
            <Pagination currentPage={page} hasMore={articles.response.docs !== null} onChange={(currentPage) => { setPage(currentPage) }} />
        </>
    );
};

export default ArticlesList