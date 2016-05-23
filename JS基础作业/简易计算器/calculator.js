function imyeah(oper) { //计算函数 
    var result = 0;
    num1 = Number(document.calcu.num1.value); //Number()将字符转换为数字
    num2 = Number(document.calcu.num2.value);
    if (document.calcu.num1.value != "" && document.calcu.num2.value !="" && num1 !== NaN && num2 !== NaN) { //两输入框必填，且必须为数字 
        if (oper == 0) {  //加
            result = num1 + num2; 
        } else if (oper == 1) {  //减
            result = num1 - num2;
        } else if (oper == 2) {  //乘
            result = parseFloat((num1 * num2).toFixed(2));
        } else if (oper == 3) {  //除
            if (num2 == 0) {
                alert("除数不能为0");
            } else {
                result = parseFloat((num1 / num2).toFixed(2));
            }
        } else if (oper == 4) { //余
            if (num2 == 0) {
                alert("除数不能为0");
            } else {
                result = num1 % num2;
            }
        }
    } else {
        alert("请输入数字");
    }
    document.calcu.sub.value = result; //显示计算结果 
}
