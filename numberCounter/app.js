const btnAdd = document.querySelector('.add')
const btnRemove = document.querySelector('.remove')
const btnReset = document.querySelector('.reset')
const total = document.querySelector('.count')


let x = 0

btnAdd.addEventListener('click', function(){
    x += 1
    console.log(x)
    total.textContent = x
})

btnRemove.addEventListener('click', function(){
    if(x != 0){
        x -= 1
    }
    console.log(x)
    total.textContent = x
})

btnReset.addEventListener('click', function(){
    x = 0
    console.log(x)
    total.textContent = x
}) 