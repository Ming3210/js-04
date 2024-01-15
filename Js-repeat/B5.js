let ramdonN = 4
let count = 0
let a = +prompt("Đoán 1 số(1-10)")
count++
while(a!==4){
    a = +prompt("Đoán 1 số(1-10")
    count++
    if(a<4) alert("Số cần tìm lớn hơn")
    else if(a>4) alert('Số cần tìm bé hơn')
    
    
}
alert("Bạn đã nhập đúng")
alert("Số lần nhập: "+ count)
