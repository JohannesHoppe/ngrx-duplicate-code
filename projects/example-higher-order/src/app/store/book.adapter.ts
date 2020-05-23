import { createApiAdapter } from 'projects/shared/api-adapter';

import { Book } from '../../../../shared/book';


export const booksApiAdapter = createApiAdapter<string, Book[]>('[Book] Load Books', []);
export const authorsApiAdapter = createApiAdapter<string, string[]>('[Book] Load Authors', []);
export const thumbnailsApiAdapter = createApiAdapter<string, string[]>('[Book] Load Thumbnails', []);
