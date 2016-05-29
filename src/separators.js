function thousands_separators(num) {

    var numString=numToString(num);
    var stringInfo=buildNumString(numString);

    return stringInfo;
}

function numToString(num){

   return num.toString();
}

function buildNumString(numString){

    var strNum=numString.split(".");
    var intNum=strNum[0].split('');

    for(var i=intNum.length-4;i>=0;i-=3)
    {
        intNum[i]+=',';
    }
    var numbertring=intNum.join('');

    if(strNum.length===2)
    {
        var decimalNUm=strNum[1].split('').join('');
        numbertring+="."+decimalNUm;
    }

return numbertring;
}
module.exports = thousands_separators;
