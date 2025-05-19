export interface ResponseWithPagination<T> {
  records?: T;
  pagination: Pagination;
}

export interface Pagination {
  pageSize: number;
  pageNumber: number;
  totalElements: number;
  totalPages: number;
}