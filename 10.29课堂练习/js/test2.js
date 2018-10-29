var img4=document.querySelector('#images a:nth-child(4)');
var img4=document.getElementById('images').children[4];
var img4=document.getElementsByClassName('hiddenImg')[3];
var img4=document.getElementsByClassName('a')[4];
// console.log(img4);
// img4.style.display="block";

//获取一组超链接图像
var imagesA=document.getElementById("images").children;
// console.log(imagesA);
// var imagesA=document.getElementById('images').children[4];
// imagesA[0].style.display="none";
// imagesA[4].style.display="block";

//通过更换
// console.log(imagesA[4].className);
// imagesA[0].className="hiddenImg";
// imagesA[4].className="displayImg";
//利用计算器时间间隔1s，显示1图像，其余图像隐藏
var currentNo=0;
function changeImg(){
for(var i=0;i<imagesA.length;i++){
    imagesA[i].className="hiddenImg";
    console.log(imagesA[i]);
}

imagesA[currentNo].className="displayImg";

if(currentNo<7) {currentNo++;}
else{
    currentNo=0;
}
// console.log(currentNo);
}

var timer =window.setInterval(changeImg,1000);

function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
    timer =window.setInterval(changeImg,1000);
}

var imagesDiv=document.getElementById("images");
// console.log(imagesDiv);
//为按钮添加鼠标移出事件
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout',startChange);
