using Ardalis.Specification.EntityFrameworkCore;
using EventLogsManage.Domain.Base;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EventLogsManage.Persistence.Base
{
    public class GenericRepository<T> : RepositoryBase<T>, IGenericRepository<T> where T : BaseEntity
    {
        protected readonly DbSet<T> _dbSet;
        protected readonly DbContext _context;
        private static readonly char[] propertiesSeparator = [','];

        public GenericRepository(DbContext context) : base(context)
        {
            _dbSet = context.Set<T>();
            _context = context;
        }

        public virtual async Task<T?> FindAsync(object id, CancellationToken cancellationToken = default)
        {
            return await _dbSet.FindAsync([id], cancellationToken: cancellationToken);
        }

        protected IQueryable<T> AsQueryable()
        {
            return _dbSet.AsQueryable();
        }

        public virtual async Task EditAsync(T entity, CancellationToken cancellationToken = default)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await SaveChangesAsync(cancellationToken);
        }

        public Task<T?> FindFirstOrDefaultAsync(Expression<Func<T, bool>> predicate, string includeProperties = "", CancellationToken cancellationToken = default)
        {
            return _dbSet.FirstOrDefaultAsync(predicate, cancellationToken);
        }

        public Task<List<T>> FindByAsync(Expression<Func<T, bool>> predicate, CancellationToken cancellationToken = default)
        {
            return _dbSet.Where(predicate).ToListAsync(cancellationToken);
        }

        public Task<List<T>> FindByAsync(Expression<Func<T, bool>>? filter = null, Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null, string includeProperties = "", CancellationToken cancellationToken = default)
        {
            IQueryable<T> query = _dbSet;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split(propertiesSeparator, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return orderBy(query).ToListAsync(cancellationToken);
            }
            else
            {
                return query.ToListAsync(cancellationToken);
            }
        }
    }
}

