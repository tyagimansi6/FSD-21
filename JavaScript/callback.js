function sum(a,b)
{
    return a+b;
}
function sumWithMsg(clbk,msg){
    const result=clbk(5,100);
console.log(result);
}
sumWithMsg(sum, "KYA HAAL H BHAI");