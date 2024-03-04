import { Article } from './types';

// Function to read collection data from local storage
const readCollectionData = (collectionName: string): Article[] => {
	const collectionData = localStorage.getItem(collectionName);
	if (collectionData) {
		return JSON.parse(collectionData);
	}
	return [];
};

// Function to write collection data to local storage
const writeCollectionData = (collectionName: string, data: Article[]): void => {
	localStorage.setItem(collectionName, JSON.stringify(data));
};

// export functions 
export { readCollectionData, writeCollectionData };