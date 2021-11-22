window.addEventListener("DOMContentLoaded", () => {
  const card = localStorage.getItem("card");
  if (card) {
    const selectedCard = JSON.parse(card);
    const { titulo, img, description } = selectedCard;
    const cardCont = document.querySelector(".card-selection");

    //Inserta el elemento en un container predeterminado
    cardCont.innerHTML = `
            <h1>${titulo}</h1>
            <img src="${img}" width=50">
            <p>${description}</p>
        `;
  }
  const hat = localStorage.getItem("hat");
  if (hat) {
    let selectedHat = JSON.parse(hat);
    let { titulo, img } = selectedHat;
    let hatCont = document.querySelector(".hat-selection");
    hatCont.innerHTML = `
            <h1>${titulo}</h1>
            <img src="${img}">
        `;
  }

  localStorage.removeItem("hat");
  localStorage.removeItem("card");
});
