export const loadHome = () => {
    const contentDiv = document.getElementById("content")

    const bgImage = document.createElement("div")
    bgImage.className = "background-container"

    const restaurantName = document.createElement("div")
    restaurantName.className = "restaurant-title"
    restaurantName.innerHTML = "Pirouse"

    bgImage.appendChild(restaurantName)

    contentDiv.appendChild(bgImage);
}