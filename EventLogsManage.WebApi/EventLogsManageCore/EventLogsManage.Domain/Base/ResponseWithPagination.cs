namespace EventLogsManage.Domain.Base
{
    public class ResponseWithPagination<T>
    {
        public T? Records { get; init; }
        public Pagination? Pagination { get; init; }
    }

    public class Pagination
    {
        public short PageSize { get; init; }
        public short PageNumber { get; init; }
        public int TotalElements { get; init; }
        public int TotalPages => (TotalElements + (PageSize - 1)) / PageSize;
    }
}
