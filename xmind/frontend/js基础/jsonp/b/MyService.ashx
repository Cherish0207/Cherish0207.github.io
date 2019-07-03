     public class MyService : IHttpHandler
     {
         public void ProcessRequest(HttpContext context)
         {
             //获取回调函数名
             string callback = context.Request.QueryString["callback"];
             //json数据
             string json = "{\"name\":\"chopper\",\"sex\":\"man\"}";
 
             context.Response.ContentType = "application/json";
             //输出：回调函数名(json数据)
             context.Response.Write(callback + "(" + json + ")");
         }
 
         public bool IsReusable
         {
             get
             {
                 return false;
             }
         }
     }