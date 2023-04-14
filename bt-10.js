let inputHovaten = document.getElementById("inputHovaten")
let inputHovaten1 = document.getElementById("inputHovaten1")

let inputEmail = document.getElementById("inputEmail")
let inputEmail1 = document.getElementById("inputEmail1")
let sendMail = document.getElementById("sendMail")

let inputDT = document.getElementById("inputDT")
let inputDT1 = document.getElementById("inputDT1")

let inputDiachi = document.getElementById("inputDiachi")
let inputDiachi1 = document.getElementById("inputDiachi1")
let inputDiachi2 = document.getElementById("inputDiachi2")

let inputNgaydat = document.getElementById("inputNgaydat")
let inputTT = document.getElementById("inputTT")
let checkBox = document.getElementById("checkBox")

let text = document.getElementById("textarea")

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

btn1.addEventListener("click", function(){
    let regexHovaten = /[A-Z]/;
    if(inputHovaten.value == "" || !regexHovaten.test(inputHovaten.value) ){
        alert("Thông tin không được bỏ trống và phải viết Hoa")
        return;
    }
    let regexEmail = /^[\w\.]+@[\w\-\.]+\.[a-z]{2,4}$/;
    if(inputEmail.value == "" || !regexEmail.test(inputEmail.value)){
        alert("Thông tin không được bỏ trống và đúng định dạng email")
        return;
    }
    let regexPhone = /^0[938]{1}\d{8}$/;
    if(inputDT.value == "" || !regexPhone.test(inputDT.value)){
        alert("Thông tin không được bỏ trống và phải đúng định dạng số điện thoại")
        return;
    }
    if(inputDiachi.value == ""){
        alert("Thông tin  không được bỏ trống")
        return;
    }
    if(inputDiachi1.value == ""){
        alert("Thông tin không được bỏ trống")
        return;
    }
    let regexNgaydat = /[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/;
    if(inputNgaydat.value == "" || !regexNgaydat.test(inputNgaydat.value)){
        alert("Thông tin không được bỏ trống và phải đúng định dạng dd-mm-yyyy")
        return;
    }
    if(inputTT.value == ""){
        alert("Thông tin không được bỏ trống")
        return;
    }
    let send = sendMail.checked;
    if(send == true){
        alert("Đặt hàng thành công, email đã giửi tói cho quý khách”")
    }else{
        alert("Đặt hàng thành công")
    }

})
checkBox.addEventListener("click", function(){
    if(this.checked){
        inputHovaten1.value = inputHovaten.value;
        inputEmail1.value = inputEmail.value;
        inputDT1.value = inputDT.value;
        inputDiachi2.value = inputDiachi.value;

        inputHovaten.value = "";
        inputEmail.value = "";
        inputDT.value = "";
        inputDiachi.value = ""; 
    }
}) 

btn2.addEventListener("click", function(){
    text.value = ""
    inputHovaten.value = ""
    inputHovaten1.value = ""
    inputEmail.value = ""
    inputEmail1.value = ""
    inputDT.value = ""
    inputDT1.value = ""
    inputDiachi.value = ""
    inputDiachi1.value = ""
    inputDiachi2.value = ""
    inputNgaydat.value = ""
    inputTT.value = ""

})