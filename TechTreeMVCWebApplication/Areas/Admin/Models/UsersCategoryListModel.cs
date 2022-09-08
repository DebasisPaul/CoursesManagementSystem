using System.Collections;
using System.Collections.Generic;

namespace TechTreeMVCWebApplication.Areas.Admin.Models
{
    public class UsersCategoryListModel
    {
        public int CategoryId { get; set; }

        public ICollection<UserModel> Users { get; set; }

        public ICollection<UserModel> UsersSelected { get; set; }
    }
}
