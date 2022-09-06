﻿using System.ComponentModel.DataAnnotations;

namespace TechTreeMVCWebApplication.Models
{
    public class LoginModel
    {
        [Required]
        [StringLength(100,MinimumLength = 2)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 2)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember Me")]
        public bool RememberMe { get; set; }

        public string LoginInValid { get; set; }
    }
}
