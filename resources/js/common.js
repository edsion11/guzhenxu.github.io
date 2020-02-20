var index=0;
var aSpan=document.getElementsByClassName("linebs");
var aListName=["item1 item","item2 item","item3 item","item4 item"];
var aLi=document.querySelectorAll(".item");
var list=document.getElementsByClassName("list")[0];
var xiugai=document.getElementsByClassName("changebutton")[0];
xiugai.addEventListener("click",function(){
            alert("修改成功");
        }
var setLineBColor=function(){
    for(var i=0;i<aSpan.length;i++){
        aSpan[i].style.background="#ccc";
    }
    aSpan[index].style.background="lightblue";
}
setLineBColor();
var nextPic = function(){//下一张图
    aListName.unshift(aListName[3]);//把数组最后一个名字复制并插入到第一个位置上
    aListName.pop();//删除最后一个值
    for(var i=0,len=aLi.length;i<len;i++){
        aLi[i].setAttribute("class",aListName[i]);
    }
    if(index==3){
        index=0;
        setLineBColor();
    }else{
        index++;
        setLineBColor();
    }
}

var prePic = function(){//上一张图
    aListName.push(aListName[0]);//将第一个值放到数组的最后一个位置
    aListName.shift();//删除第一个值
    for(var i=0,len=aLi.length;i<len;i++){
        aLi[i].setAttribute("class",aListName[i]);
    }
    if(index==0){
        index=3;
        setLineBColor();
    }else{
        index--;
        setLineBColor();
    }
}

//点击事件
list.addEventListener("click",function(ev){
    console.log(ev.target.parentNode.parentNode );
    console.log(index);
    
    
    if(ev.target.parentNode.parentNode.getAttribute("class")=="item3 item"){
        nextPic();
    }
    if(ev.target.parentNode.parentNode.getAttribute("class")=="item1 item"){
        prePic();
    }
})
window.onload=function(){
    autoMove('img','span');
}
//轮播图函数
function autoMove(tagImg,tagSpan){
    var imgs=document.getElementsByTagName(tagImg);
    var spans=document.getElementsByTagName(tagSpan);
    //每次轮播后样式
    /*轮播到哪个位置，就对哪个位置的图片样式进行设置，首先让所有的图片样式opacity变为0，然后对移动到的位置的样式进行设置opacity为1*/
    function InitMove(index){
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.opacity='0';
            spans[i].style.background='#ccc';
        }
        imgs[index].style.opacity='1';
        spans[index].style.background='red';
    }
    //第一次初始化
    InitMove(0);
    //轮播过程的变换函数
    /*前面已经初始化了图片最开始看到的效果，接着轮播的话会隐藏第一张出现第二张
     *这里count从1开始（图片的初始化位置是count为0的情况），count=1执行一次Init*Move(count),使第一张隐藏第二张出现，依次执行。当count==imgs.leghth时由于*图片最后一张的位置是imgs.length-1,所以此时把count置为0；相当于轮播图轮回
     *依次重新开始。
     */
    var count=1;
    function fMove(){
        if(count==imgs.length){
            count=0;
        }
        InitMove(count);
        count++;
    }
    //设置自动轮播定时器；
    var scollMove=setInterval(fMove,2500);

    //点击移动图片；
    /*这里就是点击左右移动的button来让图片根据用户的点击左右移动；需要注意一点就*是每次点击左移动或右移动需要首先清除定时器，等移动完了在重新添加定时器不然的*话你点击移动后图片虽然该变了，但是由于定时器还没移动到这张图片上面，所以就需*要等待定时器移动到你移动到的那张图片上面让后才开始定时轮播。比如如果你从开始
    *就点击移动图片，一直移动到最后一张那么你就要等待两个定时器的时间才能看到自动*轮播。
    */
    var btnleft=document.getElementById('btnleft');
    var btnright=document.getElementById('btnright');
    btnleft.onclick=function(){
        clearInterval(scollMove);
        if(count==0){
            count=imgs.length;
        }
        count--;
        InitMove(count);
        scollMove=setInterval(fMove,2500);
    };
    btnright.onclick=function(){
        clearInterval(scollMove);
        fMove();
        scollMove=setInterval(fMove,2500);
    }
}

var page = {
    //最关键 操作index
    index: 0,
    //定时器
    timer: null,
    //需要用到的html内的元素
    selector: {
        container   : document.querySelector('.container'),
        prev        : document.querySelector('#prev'),
        next        : document.querySelector('#next'),
        dots        : document.querySelectorAll('.dot'),
        imgs        :document.querySelectorAll('img')
    },
    //初始化函数
    init : function(){
        this.onload()
        this.event()
    },
    //加载函数
    onload: function(){
        this.slideImg()
    },
    //事件函数
    event: function(){
        var _this = this
        var imgLength = _this.selector.imgs.length
        var container = _this.selector.container
        //鼠标移入停止轮播
        container.addEventListener('mouseover', function(){
            clearInterval(_this.timer)
        })
        //鼠标移出恢复轮播
        container.addEventListener('mouseout', function(){
            _this.slideImg()
        })
        //点击上一张
        var prev = _this.selector.prev
        prev.addEventListener('click', function(){
            _this.index --
            if(_this.index < 0){
                _this.index = imgLength - 1
            }
            _this.changeImg()
        })
        //点击下一张
        var next = _this.selector.next
        next.addEventListener('click', function(){
            _this.index ++
            if(_this.index >= imgLength){
                _this.index = 0
            }
            _this.changeImg()
        })
        //点击圆点切换图片
        var dots = _this.selector.dots
        for(var i=0;i < imgLength; i++){
            // console.log(dots[i])
            dots[i].addEventListener('click',function(){
                var key = this.getAttribute('data-key')
                _this.index = key
                _this.changeImg()
                
            })
        }

    },
    //自动轮播函数
    slideImg: function(){
        var _this = this
        var imgLength = _this.selector.imgs.length

        _this.changeImg()
        this.timer = setInterval(function(){
            _this.index ++
            if(_this.index >= imgLength){
                _this.index = 0
            }
            _this.changeImg()
        },3000)
    },
    //改变图片与圆点
    changeImg: function(){
        for(var i=0,imgLen=this.selector.imgs.length;i < imgLen; i++){
            this.selector.imgs[i].style.display = 'none'
            this.selector.dots[i].classList.remove('dot-active')
        }
        this.selector.imgs[this.index].style.display = 'block'
        this.selector.dots[this.index].classList.add('dot-active')
    },
    addIndex: function(){

    }
}

page.init()


