const init = () => {
  
    const form=document.querySelector('form');
    form.addEventListener('submit',(e)=>{
e.preventDefault()
const userInput=document.querySelector('#searchByID').value
fetch(`http://localhost:3000/movies/${userInput}`)
.then(response=>response.json())
.then(data =>{
    const title=document.querySelector('#movieDetails h4:nth-of-type(1)')
    const summary=document.querySelector('#movieDetails p:nth-of-type(1)')
    title.innerHTML=data.title
    summary.innerHTML=data.summary
})
form.reset()
    })
}

document.addEventListener('DOMContentLoaded', init);