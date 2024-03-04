import React, { useState } from 'react';

interface Article {
	title: string;
	content: string;
}

const WriteForm: React.FC = () => {
	const [article, setArticle] = useState<Article>({ title: '', content: '' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setArticle({
			...article,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// 여기에 제출 로직을 작성하세요.
		console.log(article);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input type="text" name="title" value={article.title} onChange={handleChange} />
			</label>
			<label>
				Content:
				<input type="text" name="content" value={article.content} onChange={handleChange} />
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};

export default WriteForm;