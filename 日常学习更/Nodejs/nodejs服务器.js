var http = require('http')
var urlLib = require('url')
var data = {
  style: `#example {
           width: 400px;
           height: 300px;
           border: solid 1px red;
           position: absolute;
           left: 300px;
           top: 300px;
           z-index: 100000;
           background-image: url('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=995743792,3206357778&fm=175&s=E6F01DC30E120EDC7B95E09B03009091&w=640&h=394&img.JPG');
       }`,
  content: `<div id="example"></div>`,
  javascript: `$("#example").click(function(){
        $("#example").html('11111111111111');
    });`
}
http
  .createServer(function(req, res) {
    //parse用于从一个字符串中解析出json对象
    var parms = urlLib.parse(req.url, true)
    //stringify()用于从一个对象解析出字符串
    var str = parms.query.callback + '(' + JSON.stringify(data) + ')'
    res.end(str)
  })
  .listen(8088)
console.log('Server running on port http://127.0.0.1:8088/')
