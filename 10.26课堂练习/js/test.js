// var timer=window.setInterval(changeNum,1000);

var timer;//设计定时器变量
//启动定时器函数定义--若在启动定时器时有很多附加操作可以一起写入该函数。
//若启动定时器动作单一，可以直接调用window定时器
// function startTimer(speed){
//     timer=window.setInterval(changeNum,speed);
// }
timer=window.setInterval(changeNum,1000);
//调用定时器，使程序从一开始就执行变化
// startTimer(100);

//获取H2标签
var h2Obj=document.querySelector('h2');
var imgObj=document.querySelector('h2>img');
console.log(h2Obj);
var currentNo=1;//设置当前变化的号码变量及初值
// var flag=true;
function changeNum(){
    // innerHTML（显示currentNo中的内容）     textContent(显示currentNo的文本内容)
if(currentNo<8) //定义变化数字函数
currentNo++;
else currentNo=1;
h2Obj.innerHTML='<ing src="images/0'+currentNo+'.jpg"alt=""></img>';
// h2Obj.textContent=currentNo;
// else flag=false;
// }
// else{
//     if (currentNo>0)
// currentNo--;
// else flag=true;
// }
// console.log(currentNo);
}
var btnObj=document.getElementById('btnObj')//获取控制按钮
// console.log(btnObj);
//定义启动定时器函数，函数功能为启动定时器的同时改变按钮  显示文本
function startChange(){
    startTimer(500);
    btnObj.textContent="停止";
}
function stopChange(){
    window,clearInterval(timer);
        btnObj.textContent="启动"
}
//为按钮添加鼠标移出事件
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);
