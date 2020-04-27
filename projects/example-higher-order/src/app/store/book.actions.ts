import { booksApiAdapter, authorsApiAdapter, thumbnailsApiAdapter } from './book.adapter';

export const loadBooksActions = booksApiAdapter.getApiActions();
export const loadAuthorsActions = authorsApiAdapter.getApiActions();
export const loadThumbnailsActions = thumbnailsApiAdapter.getApiActions();
