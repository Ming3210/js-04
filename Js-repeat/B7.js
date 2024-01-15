let a = +prompt("Nhập 1 số")
let sum = 0
if(isNaN(a)==false){
    for(let i =1;i<a;i++){
        if(a%i==0) sum+=i
    }
    if(sum==a) alert("Bạn vừa nhập số hoàn hảo")
    else alert("Bạn ko nhập số hoàn hảo")
}alert("Invalid Input")