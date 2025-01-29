export const loadContact = () => {
    const contentDiv = document.getElementById("content")

    const pageContainer = document.createElement("div")
    pageContainer.className = "page-container"
    pageContainer.setAttribute("id", "contact-container")

    const mainTextContainer = document.createElement('div')
    mainTextContainer.className = "main-text-container"

    const textContent = document.createElement('div')
    textContent.className = "text-content"
    textContent.setAttribute("id", "contact-opening-hours")

    const textContent2 = document.createElement('div')
    textContent2.className = "text-content"
    textContent2.setAttribute("id", "contact-opening-hours")

    const textHeading = document.createElement('div')
    textHeading.className = "text-heading"
    textHeading.innerHTML = "OPENING HOURS"

    const contactHeading = document.createElement('div')
    contactHeading.className = "text-heading"
    contactHeading.innerHTML = "CONTACTS"

    const textBody = document.createElement('div')
    textBody.className = "text-body"
    textBody.innerHTML = `
  <ul>
    <li><strong>Monday:</strong> Closed
    <li><strong>Tuesday to Thursday:</strong> 6:00 PM - 10:30 PM</li>
    <li><strong>Friday:</strong> 6:00 PM - 11:00 PM</li>
    <li><strong>Saturday:</strong> 12:30 PM - 2:30 PM (Lunch), 6:00 PM - 11:00 PM (Dinner)</li>
    <li><strong>Sunday:</strong> 12:30 PM - 2:30 PM (Lunch), 6:00 PM - 9:30 PM (Dinner)</li>
  </ul>
  <p>Please note: Reservations are highly recommended, and we kindly request a smart casual dress code to ensure an exceptional dining experience for all guests.</p>
`;

    const textBody2 = document.createElement('div')
    textBody2.className = "text-body"
    textBody2.innerHTML = `
  <ul>
    <li><strong>Address:</strong> 123 Gourmet Lane, Culinary District, Copenhagen, Denmark</li>
    <li><strong>Phone:</strong> +45 123 456 789</li>
    <li><strong>Email:</strong> reservations@pirouse.com</li>
  </ul>
  <p>For reservations, please call or email us during our business hours. We look forward to welcoming you to Pirouse.</p>
`

    const aboutImage = document.createElement("div")
    aboutImage.className = "contact-background-container"

    textContent.appendChild(textHeading)
    textContent.appendChild(textBody)

    textContent2.appendChild(contactHeading)
    textContent2.appendChild(textBody2)

    mainTextContainer.appendChild(textContent)
    mainTextContainer.appendChild(textContent2)

    pageContainer.appendChild(aboutImage)
    pageContainer.appendChild(mainTextContainer)

    contentDiv.appendChild(pageContainer);
}