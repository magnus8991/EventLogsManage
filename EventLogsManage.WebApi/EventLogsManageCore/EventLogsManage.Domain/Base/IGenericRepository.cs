using Ardalis.Specification;
using System.Linq.Expressions;

namespace EventLogsManage.Domain.Base
{
    public interface IGenericRepository<T> : IRepositoryBase<T> where T : BaseEntity
    {
        [Obsolete("Use the GetByIdAsync method instead")]
        Task<T?> FindAsync(object id, CancellationToken cancellationToken = default);

        [Obsolete("Use the UpdateAsync method instead")]
        Task EditAsync(T entity, CancellationToken cancellationToken = default);

        [Obsolete("Use the FirstOrDefaultAsync method instead")]
        Task<T?> FindFirstOrDefaultAsync(Expression<Func<T, bool>> predicate, string includeProperties = "", CancellationToken cancellationToken = default);

        [Obsolete("Use the ListAsync method instead")]
        Task<List<T>> FindByAsync(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken = default);

        [Obsolete("Use the ListAsync method instead")]
        Task<List<T>> FindByAsync(
            Expression<Func<T, bool>>? filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
            string includeProperties = "",
            CancellationToken cancellationToken = default
        );
    }
}
