﻿using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TechTreeMVCWebApplication.Entities
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200,MinimumLength =2)]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public string ThumbnailImagePath { get; set; }

        [ForeignKey("CategoryId")]
        public ICollection<CategoryItem> CategoryItems { get; set; }

        [ForeignKey("CategoryId")]
        public virtual ICollection<UserCategory> UserCategroy { get; set; }
    }
}
