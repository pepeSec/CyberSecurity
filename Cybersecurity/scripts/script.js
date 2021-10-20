function modifica(n) {
    var nlink1 = document.querySelector('a#nlink1')
    var nlink2 = document.querySelector('a#nlink2')
    var nlink3 = document.querySelector('a#nlink3')
    var nlink4 = document.querySelector('a#nlink4')
    var flink = document.querySelector('a#linkhub')

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
    } else if (n == 4) {
        nlink4.style.transition = '400ms'
        nlink4.style.backgroundColor = 'gray'
        nlink4.style.color = 'white'
    } else if (n == 5) {
        flink.style.transition = '400ms'
        flink.style.backgroundColor = 'gray'
        flink.style.color = 'white'
        flink.style.font = '800 10.5pt Arial'
    }
}
function atualiza(n) {
    var flink = document.querySelector('a#linkhub')
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
    } else if (n == 4) {
        nlink4.style.transition = '400ms'
        nlink4.style.backgroundColor = 'transparent'
        nlink4.style.color = 'black'
    } else if (n == 5) {
        flink.style.transition = '400ms'
        flink.style.backgroundColor = 'transparent'
        flink.style.color = 'black'
        flink.style.font = '500 12pt Arial'
    }
}