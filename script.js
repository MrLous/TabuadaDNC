function tabuada(){
    
    var num = Number(document.getElementById('num').value)
    var end = Number(document.getElementById('end').value)
    var res = document.getElementById('resposta')  

    if( num == 0 || end == 0){
        alert('[ERRO] - Confira os numeros')
        res.innerHTML = `Qualquer número vezes 0 é . . . 0`
    } else {
        var i = 0  
        res.innerHTML = `A tabuada do ${num} é <br>`
        do{
            res.innerHTML += `${num} x ${i} = ${(num*i)} <br>`
            i++
        } while (i <= end)

    }
}