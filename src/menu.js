export const loadMenu = () => {
    const contentDiv = document.getElementById("content")

    const pageContainer = document.createElement("div")
    pageContainer.className = "page-container"

    const textContent = document.createElement('div')
    textContent.className = "text-content"

    const textHeading = document.createElement('div')
    textHeading.className = "text-heading"
    textHeading.innerHTML = "DAILY MENUS"

    const textBody = document.createElement('div')
    textBody.className = "text-body"
    textBody.innerHTML = `
      <p>Two tasting menus are offered daily: a nine-course chef's tasting menu, as well as a nine-course vegetable tasting menu. No single ingredient is ever repeated throughout the meal.</p>
      <p>New menu page coming soon.</p>
    `;

    const aboutImage = document.createElement("div")
    aboutImage.className = "menu-background-container"

    // const restaurantName = document.createElement("div")
    // restaurantName.className = "restaurant-title"
    // restaurantName.innerHTML = "Pirouse"

    // bgImage.appendChild(restaurantName)

    textContent.appendChild(textHeading)
    textContent.appendChild(textBody)

    pageContainer.appendChild(textContent)
    pageContainer.appendChild(aboutImage)

    contentDiv.appendChild(pageContainer);
}