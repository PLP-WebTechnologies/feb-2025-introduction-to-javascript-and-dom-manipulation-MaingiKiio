// 1. Change Text Content Dynamically
document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.querySelector("#about p");
    aboutText.textContent = "Welcome to my portfolio! I'm passionate about solving real-world problems through tech.";

    // 2. Modify CSS Styles
    const header = document.querySelector("header");
    header.style.backgroundColor = "#1f4068"; // Changes header background color

    // 3. Add/Remove an Element
    const newButton = document.createElement("button");
    newButton.textContent = "Toggle Secret Message";
    newButton.style.marginTop = "20px";

    const secretMessage = document.createElement("p");
    secretMessage.textContent = "Nothing exists in isolation, Let's connect!";
    secretMessage.style.color = "#28a745";
    secretMessage.style.display = "none";

    const contactSection = document.querySelector("#contact");
    contactSection.appendChild(newButton);
    contactSection.appendChild(secretMessage);

    let visible = false;

    newButton.addEventListener("click", () => {
        visible = !visible;
        secretMessage.style.display = visible ? "block" : "none";
    });
});
