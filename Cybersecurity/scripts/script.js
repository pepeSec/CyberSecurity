function modifica(n) {
    var nlink1 = document.querySelector('a#nlink1')
    var nlink2 = document.querySelector('a#nlink2')
    var nlink3 = document.querySelector('a#nlink3')

    if (n == 1) {
        nlink1.style.transition = '400ms'
        nlink1.style.backgroundColor = 'gray'
        nlink1.style.color = 'white'
    } else if (n == 2) {
        nlink2.style.transition = '400ms'
        nlink2.style.backgroundColor = 'gray'
        nlink2.style.color = 'white'
    } else if (n == 3) {
        nlink3.style.transition = '400ms'
        nlink3.style.backgroundColor = 'gray'
        nlink3.style.color = 'white'
    }
}
function atualiza(n) {
    if (n == 1) {
        nlink1.style.transition = '400ms'
        nlink1.style.backgroundColor = 'transparent'
        nlink1.style.color = 'black'
    } else if (n == 2) {
        nlink2.style.transition = '400ms'
        nlink2.style.backgroundColor = 'transparent'
        nlink2.style.color = 'black'
    } else if (n == 3) {
        nlink3.style.transition = '400ms'
        nlink3.style.backgroundColor = 'transparent'
        nlink3.style.color = 'black'
    }
}