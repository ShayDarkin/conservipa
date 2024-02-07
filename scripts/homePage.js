"o que fazer?";

"1º passar as ul das img para aqui, pegando do database, para evitando dessa maneria hackers";
"2º ";

function captureAndCreateCards() {
  const ulElement = document.querySelector(".custom-ul");

  if (ulElement) {
    ulElement.querySelectorAll("li").forEach((li, index) => {
      const trail = trails[index];
      createCard(li, trail);
    });
  }
}

function createCard(liElement, trail) {
  const divElement = liElement.querySelector("div");

  // Criar elementos do card
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.src = trail.img;
  imgElement.alt = trail.title;

  const h2Element = document.createElement("h2");
  h2Element.textContent = trail.title;

  const pElement = document.createElement("p");
  pElement.textContent = trail.description;

  // Adicionar elementos ao card
  cardElement.appendChild(imgElement);
  cardElement.appendChild(h2Element);
  cardElement.appendChild(pElement);

  // Substituir a div existente pelo card
  divElement.parentNode.replaceChild(cardElement, divElement);
}

// Chamar a função para capturar e criar os cards quando necessário
captureAndCreateCards();
