import { useState } from 'react'
import { useEffect } from 'react'
import { readCollectionData, writeCollectionData } from './api/posts'
import ListOfArticles from './components/list_articles'

import './App.css'
import { Article } from './api/types'

const article0 = {
      id: '1',
      title: 'First Article',
      content: 'Lorem ipsum dolor sit amet',
      owner: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: ['tag1', 'tag2'],
      category: 'Tech',
    }


function App() {
  const [message, setMessage] = useState('Hello World!')
  const [articles, setArticles] = useState<Article[]>([])
  console.log(articles)

  useEffect(() => {
    setArticles(readCollectionData('articles'))
    if (articles.length == 0) {
      articles.push(article0)
      writeCollectionData('articles', articles)
    }
  }, [])

  return (
    <>
      <div>{message}</div>
      <div>
        <ListOfArticles articles={articles} />
      </div>
    </>
  )
}

export default App
