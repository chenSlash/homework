var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a", "m"];
var sum = {}; //存放数组arr的不重复元素及出现个数
var pos = {}; //存放数组arr中每个不同元素的出现位置index
arr.forEach(function(elem, index) {
    if (sum[elem]) {
        sum[elem]++;
        pos[elem] += "," + index;
    } else {
        sum[elem] = 1;
        pos[elem] = "" + index;
    }
});
//算出最大出现次数
var max = 0;
for (i in sum) {
    if (sum[i] > max) {
        max = sum[i];
    }
};
//算出出现次数最多的有哪些字母，可能同时有多个字母出现次数最多
var mletter = [];
for (j in sum) {
    if (sum[j] == max) {
        mletter.push(j);
    };
};

console.log(arr);
console.log("出现次数最多的字母是： " + mletter);
console.log("出现的次数： " + max);

for (var k = 0; k < mletter.length; k++) {
    console.log(mletter[k] + " 出现的位置： " + pos[mletter[k]]);
};





//下面是另一种更复杂的方式


//         var array = new Array(4, 5, 4,7, 8, 4,2,67,5,89,5,67);  
//         var count = 1;  
//         var yuansu= new Array();//存放数组array的不重复的元素比如{4,5,7,8,2,67,89,}  
//         var sum = new Array(); //存放数组array中每个不同元素的出现的次数  
//         for (var i = 0; i < array.length; i++) {   
//             for(var j=i+1;j<array.length;j++)  
//             {  
//                 if (array[i] == array[j]) {  
//                     count++;//用来计算与当前这个元素相同的个数  
//                     array.splice(j, 1); //没找到一个相同的元素，就要把它移除掉，  
//                     j--;   
//                 }  
//             }  
//             yuansu[i] = array[i];//将当前的元素存入到yuansu数组中  
//             sum[i] = count;  //并且将有多少个当前这样的元素的个数存入sum数组中  
//             count =1;  //再将count重新赋值，进入下一个元素的判断  
//         }  
//         var str = '';  
//         //算出array数组中不同的元素出现的次数  
//         for (var i = 0; i < yuansu.length; i++) {   
//            str+=yuansu[i]+"出现的次数为："+sum[i]+"<br/>";  
//         }  
//        document.write(str);  
//        //算出array数组中出现次数最多的两个元素  
//        var newsum = new Array(); //  sum;  
//        for (var item in sum) {  
//            newsum[item] = sum[item];  
//        }  
//        newsum.sort();  
//        //document.write(sum.toString()+"<br/>");  
//        //document.write(newsum.toString() + "<br/>");  
//        var first = ''; //存放出现次数最多的元素，以及个数  
//        var second = '';  //存放出现次数居第二位的元素，以及个数  
//        var fcount = 1; //计算出现次数最多的元素总共有多少个  
//        //算出出现次数最多的元素及个数  
//        document.write("<br/>");  
//        for (var i = 0; i < sum.length; i++) {  
//            if (sum[i] == newsum[newsum.length - 1]) {  
//                //document.write("出现次数最多的元素是：" + yuansu[i] + "次数为：" + sum[i] + "<br/>");  
//                first += "出现次数最多的元素是：" + yuansu[i] + "次数为：" + sum[i] + "<br/>";  
//                fcount++;  
//            }  
  
//        }  
//        //算出出现次数居第二位的元素及个数  
//        for (var i = 0; i < sum.length; i++) {  
          
//            if (sum[i] == newsum[newsum.length - fcount]) {  
//                //document.write("出现次数居第二位的元素是：" + yuansu[i] + "次数为：" + sum[i] + "<br/>");  
//                second += "出现次数居第二位的元素是：" + yuansu[i] + "次数为：" + sum[i] + "<br/>"  
//            }  
//        }  
//        document.write("出现次数最多的元素有"+(fcount-1)+"个<br/>"+first+"<br/>"+second); 