import type { NYTDocument } from '../types/article'
import NewsCard from './NewsCard'
import { useArticles } from '../hooks/useArticles'

interface ArticleListProps {
    keyword: string
}

const ArticlesList = ({ keyword }: ArticleListProps) => {
    const { data: articles } = useArticles(keyword);

    return (
        <ul>
            {articles.response.docs.map((article: NYTDocument) => (
                <div key={article._id}>
                    <NewsCard article={article} />
                </div>
            ))}
        </ul>
    );
};

export default ArticlesList