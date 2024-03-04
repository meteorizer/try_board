import { readCollectionData, writeCollectionData } from '../api/posts'; 
import { Article } from '../api/types';

describe('readCollectionData function', () => {
  test('should return an array of articles', () => {
    const articles: Article[] = [
      {
        id: '1',
        title: 'First Article',
        content: 'Lorem ipsum dolor sit amet',
        owner: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tag1', 'tag2'],
        category: 'Tech',
      },
      // Add more articles as needed for testing
    ];

    // Mocking the implementation of readCollectionData function
    jest.spyOn(window.localStorage, 'getItem').mockImplementation(() => JSON.stringify(articles));

    // Call the function
    const result = readCollectionData('test-collection');

    // Assertions
    expect(result).toEqual(articles);
  });
});

describe('writeCollectionData function', () => {
  test('should store the article in local storage', () => {
    const article: Article = {
      id: '1',
      title: 'First Article',
      content: 'Lorem ipsum dolor sit amet',
      owner: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: ['tag1', 'tag2'],
      category: 'Tech',
    };

    // Mocking the implementation of localStorage.setItem
    const setItemSpy = jest.spyOn(window.localStorage, 'setItem');

    // Call the function
    writeCollectionData('test-collection', article);

    // Assertions
    expect(setItemSpy).toHaveBeenCalledWith('articles', JSON.stringify([article]));
  });
});

