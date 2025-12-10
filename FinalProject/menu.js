let pizzas = [
  { name: "Pepperoni", price: 10, category: "Meat" },
  { name: "Margherita", price: 8, category: "Cheese" },
  { name: "Supreme", price: 12, category: "Meat" },
  { name: "Veggie", price: 9, category: "Veggie" },
  { name: "BBQ Chicken", price: 11, category: "Meat" },
  { name: "Hawaiian", price: 10, category: "Meat" },
  { name: "Meat Lovers", price: 13, category: "Meat" },
  { name: "Four Cheese", price: 9, category: "Cheese" },
];

function displayPizzas(list) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = ""; // clear previous content

  for (let i = 0; i < list.length; i++) {
    const pizza = list[i];

    const card = document.createElement("div");
    card.className = "pizza-card";

    card.innerHTML = `
            <h3>${pizza.name}</h3>
            <p>Category: ${pizza.category}</p>
            <p>Price: $${pizza.price}</p>
            <button onclick="addToOrder('${pizza.name}', ${pizza.price})">Add to Order</button>
        `;

    container.appendChild(card);
  }
}

displayPizzas(pizzas);

const order = [];
let total = 0;

function addToOrder(name, price) {
  order.push({ name, price });
  total += price;
  updateOrder();
}

function updateOrder() {
  const orderList = document.getElementById("orderList");
  orderList.innerHTML = "";

  for (let i = 0; i < order.length; i++) {
    const item = document.createElement("li");
    item.textContent = `${order[i].name} - $${order[i].price} `;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";

    removeBtn.onclick = function () {
      total -= order[i].price;
      order.splice(i, 1);
      updateOrder();
    };

    item.appendChild(removeBtn);
    orderList.appendChild(item);
  }

  document.getElementById("orderTotal").textContent = total;
}

function filterPizzas(category) {
  if (category === "All") {
    displayPizzas(pizzas);
    return;
  }

  const filtered = [];
  for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].category === category) {
      filtered.push(pizzas[i]);
    }
  }

  displayPizzas(filtered);
}

function searchPizzas() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = [];

  for (let i = 0; i < pizzas.length; i++) {
    const pizzaName = pizzas[i].name.toLowerCase();
    if (pizzaName.includes(input)) {
      filtered.push(pizzas[i]);
    }
  }

  displayPizzas(filtered);
}
