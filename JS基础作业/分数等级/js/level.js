function concel() {
    document.form1.scores.value = "";
    document.getElementById("assessment").innerHTML = "";
}

function query() {
    var scores = document.form1.scores.value;
    switch (true) {
        case scores >= 90 && scores <= 100:
            document.getElementById("assessment").innerHTML = "一等生";
            break;
        case scores >= 80 && scores < 90:
            document.getElementById("assessment").innerHTML = "二等生";
            break;
        case scores >= 70 && scores < 80:
            document.getElementById("assessment").innerHTML = "三等生";
            break;
        case scores >= 60 && scores < 70:
            document.getElementById("assessment").innerHTML = "四等生";
            break;
        case scores >= 50 && scores < 60:
            document.getElementById("assessment").innerHTML = "五等生";
            break;
        case scores >= 40 && scores < 50:
            document.getElementById("assessment").innerHTML = "六等生";
            break;
        case scores >= 30 && scores < 40:
            document.getElementById("assessment").innerHTML = "七等生";
            break;
        case scores >= 20 && scores < 30:
            document.getElementById("assessment").innerHTML = "八等生";
            break;
        case scores >= 10 && scores < 20:
            document.getElementById("assessment").innerHTML = "九等生";
            break;
        case scores >= 0 && scores < 10:
            document.getElementById("assessment").innerHTML = "十等生";
            break;
        default:
            document.getElementById("assessment").innerHTML = "请输入0~100内的数字";
    };
}
