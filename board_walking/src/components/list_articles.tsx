import { Article } from "../api/types"

function ListOfArticles({ articles }: { articles: Article[] }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title} {article.owner} {article.createdAt.toString()} </li>
      ))}
    </ul>
  )
}

export default ListOfArticles