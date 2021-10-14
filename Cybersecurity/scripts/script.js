function modifica(n) {
    var nlink1 = document.querySelector('a#nlink1')
    var nlink2 = document.querySelector('a#nlink2')
    var nlink3 = document.querySelector('a#nlink3')

    if (n == 1) {
        nlink1.style.transition = '400ms'
        nlink1.style.backgroundColor = 'gray'
    } else if (n == 2) {
        nlink2.style.transition = '400ms'
        nlink2.style.backgroundColor = 'gray'
    } else if (n == 3) {
        nlink3.style.transition = '400ms'
        nlink3.style.backgroundColor = 'gray'
    }
}
function atualiza(n) {
    if (n == 1) {
        nlink1.style.transition = '400ms'
        nlink1.style.backgroundColor = 'transparent'
    } else if (n == 2) {
        nlink2.style.transition = '400ms'
        nlink2.style.backgroundColor = 'transparent'
    } else if (n == 3) {
        nlink3.style.transition = '400ms'
        nlink3.style.backgroundColor = 'transparent'
    }
}