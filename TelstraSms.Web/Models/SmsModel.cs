using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TelstraSms.Web.Models
{
    public class SmsModel
    {
        public string PhoneNumber { get; set; }
        public string Message { get; set; }
    }
}