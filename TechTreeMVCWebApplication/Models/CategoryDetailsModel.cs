using System.Collections.Generic;
using TechTreeMVCWebApplication.Entities;

namespace TechTreeMVCWebApplication.Models
{
    public class CategoryDetailsModel
    {
        public IEnumerable<GroupedCategoryItemsByCategoryModel> GroupedCategoryItemsByCategoryModels { get; set; }
        public IEnumerable<Category> Categories { get; set; }

    }
}
