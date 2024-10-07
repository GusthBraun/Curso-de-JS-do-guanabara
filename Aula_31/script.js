let num = document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')


function analise(){
    let ini = document.getElementById('txtnum')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.lenght == 0 || passo.value.length == 0){
        window.alert('Insira valores validos')
        res.innerHTML = 'Impossivel contar!'

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)   
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo Inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f){
            // contagem crescente
         for(let c = i; c<= f; c += p){
            res.innerHTML += `${c} \u{1F449}`    
            }
            
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1F3C1}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}