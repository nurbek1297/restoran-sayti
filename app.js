const input = document.querySelector('input')
const button = document.getElementById('btn1')
const menyu = document.querySelector('.menyu')
const p = document.querySelectorAll('p')
const h2 = document.querySelector('h2')
const btn = document.getElementById('btn')
const h3 = document.querySelector('h3')
const i = document.querySelector('i')
const h4 = document.querySelector('h4')





button.addEventListener('click', () => {
    menyu.style.display = 'flex'
    input.style.display = 'none'
    button.style.display = 'none'
    h2.style.display = 'none'
    h3.style.display = 'none'
    i.style.display = 'none'

})


p.forEach((item) => {
    item.addEventListener('click', () => {
        h2.style.display = 'block'
        h3.style.display = 'none'
        btn.style.display = 'block'
        menyu.style.display = 'none'
    })
})


btn.addEventListener('click', () => {
    h3.style.display = 'block'
    h2.style.display = 'none'
    button.style.display = 'block'
    btn.style.display = 'none'
    input.style.display = 'block'
    i.style.display = 'block'
    h4.style.display = 'none'
})



const arrow = () => {
    let result = input.value.toLocaleLowerCase()
    if (result == 'osh') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'shashlik') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'jiz') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'baliq') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'sho\'rva') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'manti') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'somsa') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'beshbarmoq') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else if (result == 'steak') {
        h2.style.display = 'block'
        h4.style.display = 'none'
        input.style.display = 'none'
        i.style.display = 'none'
        btn.style.display = 'block'
        h3.style.display = 'none'
        button.style.display = 'none'
    }
    else {
        h2.style.display = 'none'
        h4.style.display = 'block'
        input.style.display = 'none'
        i.style.display = 'none' 
        btn.style.display = 'block' 
        h3.style.display = 'none'
        button.style.display = 'none'
    }


}


i.addEventListener('click', arrow)




input.addEventListener('keydown' , (event) =>{
    if(event.key === 'Enter'){
        arrow()
    }
})



