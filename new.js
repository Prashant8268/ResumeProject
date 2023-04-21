
var check=document.querySelectorAll('.nav-menu a');
for(var i=0; i<check.length; i++){
  
  check[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSection=this.textContent.trim().toLowerCase();
  var targetid=document.getElementById(targetSection);
    var ji=setInterval(function(){
      var coordinates=targetid.getBoundingClientRect();
      if(coordinates.top<=0){
        clearInterval(ji);
        return ;
      }
      window.scrollBy(0,50);
      
    },50);
  });
}
//skills display animation 
var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



window.addEventListener("scroll", checkScroll);


const http=require('http');
const fs=require('fs');
const port=7000;
const webHandler=function(req,res){
  console.log(req.url);
  fs.readFile('./make_resume_responsive.html',function(err,data){
    if(err){
      console.log(err,"error");
      return ;
    }
    return res.end(data);
  });
 
}
const sever=http.createServer(webHandler);
sever.listen(port,function(err){
  if(err){
    console.log('error');
    return ;
  }
  console.log('this is running fine');
})