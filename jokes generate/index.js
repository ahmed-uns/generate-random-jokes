const jokeCounter = document.getElementById("joke");
const btn = document.getElementById("btn");
const url= "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke =() => {
    jokeCounter.innerText=""
    fetch(url)
    .then(data =>data.json())
    .then(item =>
    {
jokeCounter.textContent=item.joke ;
   }
    );

}
btn.addEventListener("click",getJoke);
