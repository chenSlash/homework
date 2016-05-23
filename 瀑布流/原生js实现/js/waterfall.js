window.onload=function(){
	waterfall('wrap','box');
	//json数据
	var dataInt={"data":[{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'},{"src":'37.jpg'},{"src":'38.jpg'},{"src":'39.jpg'},{"src":'40.jpg'},{"src":'41.jpg'},{"src":'42.jpg'},{"src":'43.jpg'},{"src":'44.jpg'},{"src":'45.jpg'},{"src":'46.jpg'},{"src":'47.jpg'},{"src":'48.jpg'},{"src":'49.jpg'},{"src":'50.jpg'},{"src":'51.jpg'},{"src":'52.jpg'},{"src":'53.jpg'},{"src":'54.jpg'},{"src":'55.jpg'},{"src":'56.jpg'},{"src":'57.png'},{"src":'58.png'},{"src":'59.jpg'}]}
	window.onscroll=function(){
		if(checkScrollSlide()){
			var oParent=document.getElementById('wrap');
			//将数据渲染到页面底部
			for(var i=0;i<dataInt.data.length;i++){
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className="pic";
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
		    waterfall('wrap','box');
		}
	}
}

function waterfall(parent,box){
	//取出所有class为box的元素
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//计算整个页面显示的列数（页面宽/box的宽）
	var oBoxW=oBoxs[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
    //设置wrap的宽
    oParent.style.cssText='width:'+oBoxW*cols+'px';
    var hArr=[];  //存储每列的高度
    for(var i=0;i<oBoxs.length;i++){
    	if(i<cols){
    		hArr.push(oBoxs[i].offsetHeight);
    	} else {
    		var minH=Math.min.apply(null,hArr); //获取高度最小的值
    		var index=getMinHIndex(hArr,minH);  //最小高度的索引
    		oBoxs[i].style.position='absolute';
    		oBoxs[i].style.top=minH+'px';
    		oBoxs[i].style.left=oBoxW*index+'px';
    		// oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
    	}
    }
}

//根据class获取元素
function getByClass(parent,clsName){
	var boxArr=new Array();  //用来存储获取到的所有class为box的元素
	oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

function getMinHIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}

//检测是否具备加载图片库的条件
function checkScrollSlide(){
	var oParent=document.getElementById('wrap');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	//在混杂模式和标准模式下获取滚动高度
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var screenHeight=document.body.clientHeight||document.documentElement.clientHeight;
	return (scrollTop+screenHeight>lastBoxH)?true:false;
}