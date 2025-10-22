let products = {
  data: [
    {
      productName: "Regular white T-Shirt",
      category: "Topwear",
      price: "30",
      image: "pictures/whte-tshirt.jpeg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "pictures/short-skirt.jpeg",
    },
    {
      productName: "Sporty Smart Watch",
      category: "Watch",
      price: "99",
      image: "pictures/smartwatch.jpeg",
    },


    {
      productName: "Basic Knitted Top",
      category: "Topmwear",
      price: "59",
      image: "pictures/knitted-top.jpeg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "pictures/black-leather-jacket.jpeg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pictures/pink-trousers.jpeg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "pictures/brown-jacket.jpeg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "pictures/comfy-gray-pant.jpeg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
 }

 document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("searchInput").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide")
    } else {
      cards[index].classList.add("hide");
    }
  });
});    

 window.onload = () => {
  filterProduct("all");
};
