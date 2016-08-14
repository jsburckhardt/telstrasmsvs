using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TelstraSms.Web.Business;
using TelstraSms.Web.Models;

namespace TelstraSms.Web.Controllers
{
    public class SmsController : Controller
    {
        // GET: Sms
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Send(SmsModel model)
        {
            if (model != null)
            {
                var bl = new SmsBL();
                bl.Send(model);

                return Json("Success");
            }
            else
            {
                return Json("An Error Has occoured");
            }
        }
    }
}
