import { booksApiAdapter, authorsApiAdapter, thumbnailsApiAdapter } from './book.adapter';


export const booksActions = booksApiAdapter.getActions();
export const authorsActions = authorsApiAdapter.getActions();
export const thumbnailsActions = thumbnailsApiAdapter.getActions();
