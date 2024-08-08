//Добавить и стилизовать див с событием клик, при клике увеличиваем его ширину и высоту на 15px

let step = 15

document.querySelector('.box').onclick = function(event){

    let step = 15
    const style = getComputedStyle(document.querySelector('.box'));
    console.log(parseInt(style.width) + step) +'px'

    this.style.width = (parseInt(style.width) + step) +'px'
    this.style.height = (parseInt(style.height) + step) +'px'
    
}

//Добавить див с событием двойного клика. Написать функцию, которая будет запускаться при двойном клике и выводить в консоль данные, 
//что есть внутри этого дива (написать произвольные данные внутри div)

document.querySelector('.text').ondblclick= function(){

    console.log(this.textContent)
}

//Добавить картинку и при клике по ней заменять картинку на 2

function changeImage(){
    document.querySelector('.image').src = "img/img2.jpg"
}


//Написать функцию, которая выводит в поле на странице код символа и возвращает его

    //document.querySelector('#addCode').onkeypress = function(event){
        function codeSearch (event){ 
        let a = event.charCode
        document.querySelector('#code').innerText = a
        return a
    }

    

//Написать функцию, которая выведет false, если введена цифра

document.querySelector('#addNumber').oninput = function(event){
    if(this.value == ""){
        document.querySelector('#number').innerHTML = ""
    }  
    else{
        document.querySelector('#number').innerHTML = isNaN(this.value);

    }
}