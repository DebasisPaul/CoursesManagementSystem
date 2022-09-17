using System.Collections;
using System.Collections.Generic;
using TechTreeMVCWebApplication.Entities;

namespace TechTreeMVCWebApplication.Models
{
    public class CategoriesToUserModel
    {
        public string UserId { get; set; }

        public ICollection<Category> Categories { get; set; }

        public ICollection<Category> CategoriesSelected { get; set; }


    }
}
