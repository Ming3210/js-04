let a = +prompt("Nhập 1 số")
console.log("Các snt")
if(isNaN(a)==false){
    for(let i=1;i<a;i++){
        let count = 0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count==2){
            console.log(i)
        }
    }
}