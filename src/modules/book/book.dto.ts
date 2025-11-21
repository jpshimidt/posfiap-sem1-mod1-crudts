export interface CreateBookDTO {
  title: string;
  author: string;
  isbn: string;
  publicationDate: string;
  publisherId: number;
}

export interface UpdateBookDTO {
  title?: string;
  author?: string;
  isbn?: string;
  publicationDate?: string;
  publisherId?: number;
}
