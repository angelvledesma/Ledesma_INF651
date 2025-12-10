// Time Based Greeting
function setGreeting() {
  const greeting = document.getElementById("greetingText");
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning - Welcome to Angel Pizza!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon - Welcome to Angel Pizza!";
  } else {
    greeting.textContent = "Good evening - Welcome to Angel Pizza!";
  }
}

setGreeting();
/////////////////////////////////////////////////

const pizzas = [
  { name: "Pepperoni", description: "Pepperoni, cheese, tomato sauce." },
  { name: "Margherita", description: "Mozzarella, basil, tomatoes." },
  { name: "Supreme", description: "Peppers, onions, sausage, olives." },
  { name: "Veggie", description: "Tomatoes, mushrooms, peppers, onions." },
  { name: "BBQ Chicken", description: "Chicken, BBQ sauce, onions." },
  { name: "Hawaiian", description: "Ham, pineapple, mozzarella." },
  { name: "Meat Lovers", description: "Pepperoni, sausage, beef, bacon." },
  { name: "Four Cheese", description: "Mozzarella, parmesan, ricotta, feta." },
];

function displaySpecials() {
  const container = document.getElementById("specialsContainer");

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * pizzas.length);
    let pizza = pizzas[randomIndex];

    let card = document.createElement("div");
    card.className = "special-card";

    card.innerHTML = `
            <h3>${pizza.name}</h3>
            <p class="description" style="display:none;">${pizza.description}</p>
        `;

    card.onclick = function () {
      let desc = card.querySelector(".description");
      if (desc.style.display === "none") {
        desc.style.display = "block";
      } else {
        desc.style.display = "none";
      }
    };

    container.appendChild(card);
  }
}

displaySpecials();
