async  function generateQuotes(){
    const author=document.getElementById("author")
    const quote=document.getElementById('quotes')
    const url="https://api.quotable.io/random"
    const response=await fetch(url)
    const api=await response.json()
    console.log(api)
    quote.innerHTML=api.author
    quote.innerHTML=api.content
}