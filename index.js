window.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("hat");
  localStorage.removeItem("card");
  //Obetenemos los personajes y los guardamos en local storage con la key "card"
  const cards = document.querySelectorAll("button[data-order-caracters]");
  cards.forEach((item, i, arr) => {
    item.addEventListener("click", (event) => {
      const button = event.currentTarget;
      button.classList.toggle("colorear");
      const container = button.parentNode.parentNode;
      container.classList.add("solid");
      const img = container.querySelector("img");

      arr.forEach((button) => {
        let cardCont = button.parentNode.parentNode;
        if (!cardCont.classList.contains("solid")) {
          cardCont.classList.toggle("transparent");
          button.disabled = true;
        }
        if (!cardCont.classList.contains("transparent"))
          button.disabled = false;
        if (cardCont.classList.contains("solid"))
          cardCont.classList.remove("solid");
        if (
          button.classList.contains("colorear") &&
          button.innerText === "SELECT"
        ) {
          button.innerText = "DESELECT";
          setTimeout(() => {
            document.getElementById("gorritos").scrollIntoView();
          }, 1100);
        }
        if (!button.classList.contains("colorear")) button.innerText = "SELECT";
      });

      let carta = {
        titulo: container.querySelector(".card-title").innerText,
        img: img.getAttribute("src"),
        description: container.querySelector(".description").innerText,
        id: button.getAttribute("data-order-caracters"),
      };
      localStorage.setItem("card", JSON.stringify(carta));
    });
  });

  //Obtenemos las gorras, guardamos en localStorage y nos envia al formulario
  const hats = document.querySelectorAll("button[data-order-hat]");
  const gorras = document.querySelectorAll("button[data-order-hat]");
  hats.forEach((hat, i, hats) => {
    hat.addEventListener("click", (event) => {
      const button = event.currentTarget;
      button.classList.toggle("colorear2");
      const container = button.parentNode;
      container.classList.add("solid");
      const img = container.querySelector("img");

      const orderButton = document.createElement("div");
      orderButton.classList.add("logoflotante", "slide-in-blurred-right");
      orderButton.innerHTML = `
            <button>
                <audio src="./images/among-us-drip-theme-song-original-among-us-trap-remix-amogus-meme-music.mp3" autoplay></audio>
                <img src="./images/amongus-shhh.jpg" alt="amongus-shhh">
                <p>CLICK HERE TO GET YOUT ORDER</p>
            </button>
            `;

      hats.forEach((hat) => {
        let hatCont = hat.parentNode;
        if (!hatCont.classList.contains("solid")) {
          hatCont.classList.toggle("transparent");
          hat.disabled = true;
        }
        if (!hatCont.classList.contains("transparent")) hat.disabled = false;
        if (hatCont.classList.contains("solid"))
          hatCont.classList.remove("solid");
        if (hat.classList.contains("colorear2") && hat.innerText === "SELECT") {
          hat.innerText = "DESELECT";
          document.body.appendChild(orderButton);
        }
        if (!hat.classList.contains("colorear2")) {
          hat.innerText = "SELECT";
        }
      });

      let hat = {
        titulo: container.querySelector("p").innerText,
        img: img.getAttribute("src"),
      };
      localStorage.setItem("hat", JSON.stringify(hat));

      orderButton.addEventListener("click", () => {
        setTimeout(() => {
          const url = window.location.href.replace("index.html","order.html");
          console.log(url);
          window.location.href = url;
        }, 1000);
        //si lee esto es q si se sincroniza github pages
      });
    });
  });
});
