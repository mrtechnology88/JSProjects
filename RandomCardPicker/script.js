const cardSuits = ["♠️", "♥️", "♣️", "♦️"]
const cardValue = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
const pickCardBtn = document.querySelector("#pickCardBtn")
let chosenCard = document.querySelector("#result")

const pickCard = () => {
const cardIndex = Math.floor(Math.random() * cardValue.length)
const suitsIndex = Math.floor(Math.random() * cardSuits.length)
chosenCard.textContent = `Your chosen card is : ${cardValue[cardIndex]} of ${cardSuits[suitsIndex]}`
}

pickCardBtn.addEventListener("click", pickCard)

