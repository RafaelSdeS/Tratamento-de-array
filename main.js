var i = 0
var sum = 0 
//Função Selecionar
function ler() {
    var seleçao = document.getElementById('seleçao').value
    if(seleçao==1) {inicio()}
    else if(seleçao==2) {fim()} 
    else if (seleçao==3) {inverter()}
    else if(seleçao==4){ordernar()}
    else if(seleçao==5){soma()}
}

//Função inicio
function inicio(){
    var p = document.getElementById("paragrafo")
    var txt = p.innerText
    var n = document.getElementById('num').value
    var array = []
    array[i] = n
    p.innerHTML = n + "," + txt
    i++
    }

//Fução fim
function fim(){
var p = document.getElementById("paragrafo")
var txt = p.innerText
var n = document.getElementById('num').value
var array = []
array[i] = n
p.innerHTML = txt + "," + n
i++
}

//Função inverter
function inverter() {
    var p = document.getElementById("paragrafo")
    var txt = p.innerText
    var spl = txt.split(",")
    var inv = spl.reverse()
    p.innerHTML = inv
}

//Função ordenar
function ordernar(){
    var p = document.getElementById("paragrafo")
    var txt = p.innerText
    var spl = txt.split(",")
    var ord = spl.sort()
    p.innerHTML = ord
}

function soma(){
    var j =  0
    var p = document.getElementById("paragrafo")
    var txt = p.innerText
    var spl = txt.split(",")  
    while (j<(spl.length)){
        if(spl[j] == "") {spl[j] = 0}
        sum = sum + parseInt(spl[j])
        j++
    }
    p.innerHTML = sum
}


