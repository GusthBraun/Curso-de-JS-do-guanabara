function tabuada(){
    let num_tab = document.getElementById('txttab')
    let tab = document.getElementById('seltab')
    
    if (num_tab.value.lengh == 0) {
        window.alert('Por favor, digite um número!')

    } else {
        let n = Number(num_tab.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}