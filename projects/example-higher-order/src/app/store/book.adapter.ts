import { Book } from '../../../../shared/book';
import { createApiAdapter } from '../api-adapter/api-adapter';


export const booksApiAdapter = createApiAdapter<string, Book[]>('[Book] Load Books', 'books', []);
export const authorsApiAdapter = createApiAdapter<string, string[]>('[Book] Load Authors', 'authors', []);
export const thumbnailsApiAdapter = createApiAdapter<string, string[]>('[Book] Load Thumbnails', 'thumbnails', []);

