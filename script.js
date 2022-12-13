const heroImageDiv = document.getElementById("heroImage");

const SUPERHERO_TOKEN = "10229313811334353"
const BASE_URL = "https://superheroapi.com/api.php"

const getRandomSuperHero = (heroID) => {
  fetch(`${BASE_URL}/${SUPERHERO_TOKEN}/${heroID}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    heroImageDiv.innerHTML += `<img src="${json.image.url}" alt="">`
  })
}

const searchSuperHero = (heroName) => {
  fetch(`${BASE_URL}/${SUPERHERO_TOKEN}/search/${heroName}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    const hero = json.results[0]
    heroImageDiv.innerHTML += `<img src="${hero.image.url}" alt="">`
  })
  .catch(error => {
    console.log(error)
    alert("Error: " + error.message.charAt(0).toUpperCase() + error.message.slice(1))
  })
}
const randomID = () => {
  return Math.ceil(Math.random() * 731)
}
const searchHeroInput = document.getElementById("searchHeroInput")

const randomHeroBtn = document.getElementById("randomHeroBtn")
const searchHeroBtn = document.getElementById("searchHeroBtn")

randomHeroBtn.addEventListener("click", () => getRandomSuperHero(randomID()))
searchHeroBtn.addEventListener("click", () => searchSuperHero(searchHeroInput.value))
searchHeroInput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchHeroBtn.click();
    }
});


