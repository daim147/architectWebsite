const hamBurger = document.querySelector('.hamBurger-menue')
const container = document.querySelector('.container')
const scrollBtn = document.querySelector('.scroll-btn')

hamBurger.addEventListener('click', ()=>{
    container.classList.toggle('change')
})

// scrollBtn.addEventListener('click', ()=>{
//     document.querySelector('html').style.scrollBehavior = 'smooth'
//     setTimeout(()=>{
//         document.querySelector('html').style.scrollBehavior = 'unset'
//     },1000)
// })

window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector('body').classList.add('display')
    },4000)
}