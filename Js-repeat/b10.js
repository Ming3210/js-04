let a = prompt("Nhập số hàng")
for(let i = 0;i<=a;i++){
    let b =""
    for(let j= 0;j<=i;j++){
        b +="*"
    }
    console.log(b)
}
for (let i = 1; i <= a; i++) {
    let b = "";
    for (let j = 1; j <= a - i; j++) {
        b += " ";
    }
    for (let k = 1; k <= i; k++) {
        b += "*";
    }
    console.log(b);
}
