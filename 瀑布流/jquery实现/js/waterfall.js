
$(window).on('load', function(){
	imgLocation();
	var dataInt={"data":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'},{"src":'11.jpg'},{"src":'12.jpg'},{"src":'13.jpg'},{"src":'14.jpg'},{"src":'15.jpg'}]}
	$(window).on('scroll', function(){
		if(checkScrollSlide()){
			$.each(dataInt.data, function(key,value){
				var oBox=$('<div>').addClass('box').appendTo('#wrap');
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				//这里的value是js的原生对象，也不能应用jquery方法
				$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
			})
			imgLocation();
		};
	})
})
$(window).resize(function(){
	$(this).trigger('load');
})
function imgLocation(){
	var boxs=$('#wrap .box');
	var w=boxs.eq(0).outerWidth(); //获取每个图片box的outer宽度
	var cols=Math.floor($(window).width()/w);  //计算当前浏览器宽度下能承载多少列
	$('#wrap').width(cols*w).css('margin', '0 auto');  //设置wrap容器宽度刚好包裹所有列，并居中
	var hArr=[];  //存储每列的高度
	boxs.each(function(index,value){
		var h=boxs.eq(index).outerHeight();  //获取每个图片块的outer高度
		if(index<cols){
			hArr[index]=h; //添加到数组
			$(value).css({
				'position': 'absolute',
				'left': index*w+'px',
				'top': 0,
				'opacity': 1,
				'margin-left': 0
			})
		}else{
			var minH=Math.min.apply(null,hArr);  //获取数组中最小高度的元素
			var minHIndex=$.inArray(minH,hArr);  //获取数组中最小高度元素的索引值
			//DOM对象是不能应用任何jquery方法的，这里boxs的每个元素都是DOM对象需要变成jquery对象,即在value前面加个$符号
			getStyle(value, minH, minHIndex*w, index);		
			hArr[minHIndex]+=boxs.eq(index).outerHeight();  //更新最小高度元素所在列添加图片后的列高
		}

	})
}
var getStartNum=0;
function getStyle(box, top, left, index){
	if (getStartNum>=index){
		$(box).css({  //定义下一行第一张图片定位在最小高度元素的下面
				'position':'absolute',
				'top': top+'px',
				'left': left+'px',
				'margin-left': 0
			})
	}else{
	$(box).css({  //定义下一行第一张图片定位在最小高度元素的下面
				'position':'absolute',
				'top': top+'px',
				'left': left+'px',
				'opacity': '0',
				'margin-left': 0
			})
			$(box).stop().delay(500).animate({
				'opacity': '1'
			}, 500);
			getStartNum = index;
			};
}

function checkScrollSlide(){
	var lastBox=$('#wrap .box').last();
	var lastBoxDis=lastBox.offset().top+lastBox.innerHeight();
	var scrollTop=$(window).scrollTop();  //滚动高度
	var screenH=$(window).height();  //浏览器高度
	return (scrollTop+screenH>=lastBoxDis)?true:false;
};
