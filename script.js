const modal = document.getElementById("propertyModal");
const addBtn = document.getElementById("addPropertyBtn");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("propertyForm");
const list = document.getElementById("propertyList");

// OPEN MODAL
addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// CLOSE MODAL
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// LOAD PROPERTIES FROM LOCALSTORAGE
let properties = JSON.parse(localStorage.getItem("properties")) || [];
renderProperties();

// SUBMIT FORM
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const imageFile = document.getElementById("image").files[0];
  const price = document.getElementById("price").value;
  const desc = document.getElementById("description").value;

  const imageURL = URL.createObjectURL(imageFile);

  const property = { imageURL, price, desc };
  properties.push(property);
  localStorage.setItem("properties", JSON.stringify(properties));

  renderProperties();
  modal.style.display = "none";
  form.reset();
});

// RENDER ALL PROPERTIES
function renderProperties() {
  list.innerHTML = ""; // clear first

  properties.forEach((property, index) => {
    addCard(property, index);
  });
}

// ADD SINGLE CARD
function addCard(property, index) {
  const card = document.createElement("div");
  card.className = "property-card";

  card.innerHTML = `
    <img src="${property.imageURL}">
    <h3>${property.price}</h3>
    <p>${property.desc}</p>

    <a href="tel:+250792633097" class="call-btn">Call Now</a>

    <button class="remove-btn" data-index="${index}">
      Mark as Sold
    </button>
  `;

  list.appendChild(card);
}

// REMOVE / MARK AS SOLD
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;

    if (confirm("Mark this property as sold?")) {
      properties.splice(index, 1);
      localStorage.setItem("properties", JSON.stringify(properties));
      renderProperties();
    }
  }
});
