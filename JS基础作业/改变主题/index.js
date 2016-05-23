var cspan = document.getElementById("change-theme-item").children; //储存主题每个颜色块
var needchange = document.getElementById("menu-nav").children; //储存导航栏的每个li元素
var wordcolor = document.getElementsByClassName('changecolor'); //储存变更颜色的文字

//点击每个颜色块函数
window.onload = function() {
    for (var i = 0; i < cspan.length; i++) {
        cspan[i].onclick = function() {
            var colors = this.style.backgroundColor;
            changecolor(colors);
        }
    }
}
var hiscolors = localStorage.getItem("bgColor"); //查询localStoragebgColor有没有历史记录
changecolor(hiscolors); //有历史记录，则应用上次的颜色
//点击颜色块改变颜色函数
function changecolor(colors) {
    window.localStorage.setItem("bgColor", colors);
    var color = localStorage.getItem("bgColor");
    for (var j = 0; j < needchange.length; j++) {
        needchange[j].style.backgroundColor = color;
        if (wordcolor[j]) {
            wordcolor[j].style.color = color;
        };
        needchange[j].addEventListener("mouseover", function() { //鼠标经过改变颜色
            this.style.backgroundColor = "#000";
        })
        needchange[j].addEventListener("mouseout", function() { //鼠标滑出恢复颜色
            this.style.backgroundColor = colors;
        })
    }
}
