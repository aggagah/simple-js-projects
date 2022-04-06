const colors = ["#C0C0C0", "#808080", "#808080", "#808000", "#00FF00", "#00FFFF", "#008080", "#000080", "#1E90FF", " #4682B4", "#4169E1", "#0000CD", "#F8F8FF", "#FFFAFA", "#F0FFF0", "#F0FFFF"]

const btn = document.getElementById('btn')
const colorSpan = document.querySelector('.color')


btn.addEventListener('click', function(){
    // get bilangan random dari 0 - (panjang array - 1)
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    colorSpan.textContent = colors[randomNumber]
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}