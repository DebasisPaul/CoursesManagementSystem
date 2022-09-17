using System.Collections.Generic;
using System.Threading.Tasks;
using TechTreeMVCWebApplication.Entities;

namespace TechTreeMVCWebApplication.Data
{
    public interface IDataFunctions
    {
        Task UpdateUserCategoryEntityAsync(List<UserCategory> userCategoryItemsToDelete, List<UserCategory> userCategoryItemsToAdd);
    }
}
