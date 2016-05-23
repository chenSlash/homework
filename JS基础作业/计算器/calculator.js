var num1 = ""; //储存第一个数
var num2 = ""; //储存第二个数
var oper; //储存运算符
var clear = true;
var orinum = document.getElementById("cal-screen");
//运算公式
function calculator(num1, num2, oper) {
    var result = 0;
    switch (oper) {
        case "＋":
            result = parseFloat((num1 + num2).toFixed(9));
            break;
        case "－":
            result = parseFloat((num1 - num2).toFixed(9));
            break;
        case "×":
            result = parseFloat((num1 * num2).toFixed(9));
            break;
        case "÷":
            if (num2 != 0) {
                result = parseFloat((num1 / num2).toFixed(9));
            } else {
                result = num1 / num2;
                alert("被除数不能为0");
            }
            break;
        default:
            result = num2;
    }
    return result;
}

//输入
function inp() {
    var display = this.innerHTML;
    switch (display) {
        case "+/-":
            clear = true;
            orinum.innerHTML = -parseFloat(orinum.innerHTML);
            break;
        case "sin":
            clear = true;
            radiansnumber = degressToRadians(Number(orinum.innerHTML));
            orinum.innerHTML = parseFloat(Math.sin(radiansnumber).toFixed(9));
            break;
        case "cos":
            clear = true;
            radiansnumber = degressToRadians(Number(orinum.innerHTML));
            orinum.innerHTML = parseFloat(Math.cos(radiansnumber).toFixed(9));
            break;
        case "tan":
            clear = true;
            radiansnumber = degressToRadians(Number(orinum.innerHTML));
            orinum.innerHTML = parseFloat(Math.tan(radiansnumber).toFixed(9));
            break;
        case "＝": //等号
            clear = true;
            num2 = orinum.innerHTML;
            orinum.innerHTML = calculator(parseFloat(num1), parseFloat(num2), oper);
            num1 = 0;
            oper = "";
            break;
        case "＋": //四则运算
        case "－":
        case "×":
        case "÷":
            clear = true;
            if (num1.length != 0) {
                orinum.innerHTML = calculator(parseFloat(num1), parseFloat(orinum.innerHTML), oper);
            };
            num1 = orinum.innerHTML;
            oper = display;
            break;
        case "C": //清屏
            num1 = 0;
            oper = "";
            orinum.innerHTML = "0";
            clear = true;
            break;
        case ".": //小数点
            for (var i = 0; i < orinum.innerHTML.length; i++) { //判断是否已经有一个点号 
                if (orinum.innerHTML.substr(i, 1) == ".") { //如果有则不再插入 
                    return false;
                };
            }
            orinum.innerHTML = orinum.innerHTML + display;
            clear = false;
            break;
        case "0":
        case "00":
            if (orinum.innerHTML === "0") {
                orinum.innerHTML = 0;
            } else if (clear) {
                orinum.innerHTML = display;
                clear = false;
            } else {
                orinum.innerHTML = orinum.innerHTML + display;
            };
            break;
        case "del": //删除
            if (orinum.innerHTML.length == 1) {
                orinum.innerHTML = 0;
                clear = true;
            } else {
                orinum.innerHTML = orinum.innerHTML.slice(0, orinum.innerHTML.length - 1);
            }
            break;
        default: //输入数字
            if (clear) {
                orinum.innerHTML = display;
                clear = false;
            } else {
                orinum.innerHTML = orinum.innerHTML + display;
            }
    }

}


function degressToRadians(degress) //将角度值转为弧度值
{
    return (degress * Math.PI / 180)
}

function radiansToDegress(radians) //将弧度值转为角度值
{
    return (radians * 180 / Math.PI)
}


//获取按钮内容对象，为点击添加active类
window.onload = function() {
    var cli = document.getElementsByTagName("li");
    for (var i = 0; i < cli.length; i++) {
        cli[i].onmousedown = inp;
        cli[i].addEventListener("mousedown", function() { //为点击li添加active类
            this.className = "active";
        });
        cli[i].addEventListener("mouseup", function() { //移出active类
            this.className = "";
        });
    }
}

//显示时间
function showtimes() {
    var curtimes = new Date();
    var week; //周
    switch (curtimes.getDay()) {
        case 0:
            week = "星期日";
            break;
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
    }

    var year = curtimes.getFullYear(); //年

    var month = curtimes.getMonth() + 1; //月
    if (month < 10) {
        month = "0" + month;
    }

    var day = curtimes.getDate(); //日
    if (day < 10) {
        day = "0" + day;
    }

    var hours = curtimes.getHours(); //时
    if (hours < 10) {
        hours = "0" + hour;
    }

    var minutes = curtimes.getMinutes(); //分
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var seconds = curtimes.getSeconds(); //秒
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var datestr = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;

    document.getElementById("showtimes").innerHTML = datestr;
}

//每隔一秒刷新一次
showtimes();
setInterval("showtimes()", 1000);
