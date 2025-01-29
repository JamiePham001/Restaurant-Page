export const loadAbout = () => {
    const contentDiv = document.getElementById("content")

    const pageContainer = document.createElement("div")
    pageContainer.className = "page-container"

    const textContent = document.createElement('div')
    textContent.className = "text-content"

    const textHeading = document.createElement('div')
    textHeading.className = "text-heading"
    textHeading.innerHTML = "RESTAURANT"

    const textBody = document.createElement('div')
    textBody.className = "text-body"
    textBody.innerHTML = `
      <p>Welcome to <strong>Pirouse</strong>, a Michelin-starred destination where fine dining meets the art of nature. Nestled in the heart of <strong>Denmark</strong>, our restaurant is a celebration of exceptional culinary craftsmanship and the finest seasonal ingredients.</p>
      <p>At <strong>Pirouse</strong>, we believe in letting nature guide our menu. Each dish is thoughtfully created using fresh, locally-sourced, and natural ingredients, reflecting the changing seasons and the beauty of their raw essence. From farm to table, we honor the journey of our ingredients, ensuring every bite is an exquisite expression of flavor, texture, and creativity.</p>
      <p>Our commitment to excellence has earned us Michelin recognition, and our passion for innovation continues to redefine the boundaries of fine dining. With an elegant ambiance and impeccable service, <strong>Pirouse</strong> offers an unforgettable experience that delights the senses and nourishes the soul.</p>
      <p>Join us for a culinary journey where every plate tells a story, and every meal becomes a memory.</p>
    `;

    const aboutImage = document.createElement("div")
    aboutImage.className = "about-background-container"

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