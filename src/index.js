import "./styles.css"
import { loadHome } from "./home"
import { loadAbout } from "./about"
import { loadMenu } from "./menu"
import { loadContact } from "./contact"


console.log('hello world!')

const clearContent = () => {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = ""
}

const pageNavigation = () => {
    document.getElementById('home-tab').addEventListener("click", () => {
        clearContent()
        loadHome()
    })

    document.getElementById('about-tab').addEventListener("click", () => {
        clearContent()
        loadAbout()
    })

    document.getElementById('menu-tab').addEventListener("click", () => {
        clearContent()
        loadMenu()
    })

    document.getElementById('contact-tab').addEventListener("click", () => {
        clearContent()
        loadContact()
    })
}

window.addEventListener("DOMContentLoaded", () => {
    loadHome()
    pageNavigation();
})