interface Article {
	id: string;
	title: string;
	content: string;
	owner: string;
	createdAt: Date;
	updatedAt: Date;
	tags: string[];
	category: string;
}

// export default Article;
export type { Article };