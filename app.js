var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
app.use(express.static(__dirname + '/model'));
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/model/hat.obj',function(req,res){
  res.sendFile(path.join(__dirname+'/model/hat.obj'));
});

router.get('/model/BowlerHATFBXTest.gltf',function(req,res){
    res.sendFile(path.join(__dirname+'/model/BowlerHATFBXTest.gltf'));
});

router.get('/model/AppleBowler_Hat.obj',function(req,res){
    res.sendFile(path.join(__dirname+'/model/AppleBowler_Hat.obj'));
});

router.get('/model/AppleBowler_Hat.mtl',function(req,res){
    res.sendFile(path.join(__dirname+'/model/AppleBowler_Hat.mtl'));
});

router.get('/model/AppleBowlerTex.png',function(req,res){
    res.sendFile(path.join(__dirname+'/model/AppleBowlerTex.png'));
});
router.get('/model/EyeBall.obj',function(req,res){
    res.sendFile(path.join(__dirname+'/model/EyeBall.obj'));
});

router.get('/model/EyeBall.mtl',function(req,res){
    res.sendFile(path.join(__dirname+'/model/EyeBall.mtl'));
});

router.get('/pattern/pattern-marker.patt',function(req,res){
    res.sendFile(path.join(__dirname+'/pattern/pattern-marker.patt'));
});

router.get('/mask/MaskPattern.jpg',function(req,res){
    res.sendFile(path.join(__dirname+'/mask/MaskPattern.jpg'));
});

//add the router
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/model'));
app.use(express.static(__dirname + '/pattern'));
app.use(express.static(__dirname + '/mask'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Running at Port 3000');