// var img4=document.querySelector('#images a:nth-child(4)');
// var img4=document.getElementById('images').children[4];
// var img4=document.getElementsByClassName('hiddenImg')[3];
// var img4=document.getElementsByClassName('a')[4];
// // console.log(img4);
// img4.style.display="block";
//--------获取相关元素---------
//获取一组超链接图像
var imagesA=document.getElementById("images").children;
//获取一组li文本
var txtList = document.querySelector(".txt-box").children;





// sliderDiv.addEventListener('mouseover', stopChange);
// sliderDiv.addEventListener('mouseover', function () {    window.clearInterval(timer);  });

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
const nodeLength = 8;

function changeImg(){

    for (var i = 0; i < nodeLength; i++) {
        // 同类图片透明度0（.hiddenImg)
        imagesA[i].className = "hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className = "txtItem normalColor";
    }
imagesA[currentNo].className="displayImg";
txtList[currentNo].className="txtItem heighlightColor";
}
function leftImg(){
   
    if(currentNo>0){
        currentNo--;
    }
    else{currentNo=7;
    }
}
function rightImg() {
    if (currentNo < 7) { currentNo++; }
    else {
        currentNo = 0;
    }  
}

// console.log(currentNo);


var timer =window.setInterval(changeImg,1000);

//鼠标移出后移除定时器
function stopChange() {
    window.clearInterval(timer);
    // console.log('father');
}
//鼠标移入后重设定时器
function startChange() {
    timer = window.setInterval(rightImgGo, 1000);
}

//获取sliderDIV以注册移入移出事件
var sliderDiv = document.querySelector(".slider");
//console.log(imagesDiv);
//为sliderDIV注册移入移出事件
sliderDiv.addEventListener('mouseover', function stopChange() {
    window.clearInterval(timer);
    // console.log('father');
});
sliderDiv.addEventListener('mouseout', function startChange() {
    timer = window.setInterval(rightImgGo, 1000);
});


// console.log(imagesDiv);



// 为所有文本Li注册鼠标移入事件
for (var i = 0; i < txtList.length; i++) {
    txtList[i].addEventListener('mouseover', gotoImg);
    //添加自定义属性no 记录当前li的编号
    txtList[i].no = i;
    //    console.log( txtList[i].no);

}
function gotoImg(){
    // console.log(txtList[i]);
    console.log(this.no);
    currentNo=this.no;
    changeImg();
}
var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');

leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);
function leftImgGo(){
    leftImg();
    changeImg();
}

function rightImgGo(){
    rightImg();
    changeImg();
}

