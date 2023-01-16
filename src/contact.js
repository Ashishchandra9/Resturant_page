export function contact(){
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading =document.createElement("h1");
    heading.textContent = "Welcome to contact List";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const phoneImage =document.createElement("img");
    phoneImage.classList.add("image");
    phoneImage.src = "../src/assets/mail.png";
    phoneImage.alt =" image of phone";
    contentDiv.appendChild(phoneImage);

    const Phonepara = document.createElement("p")
    Phonepara.classList.add('contact-copy')
    Phonepara.textContent="Contact us";
    contentDiv.appendChild(Phonepara)
    
    const email =document.createElement("img");
    email.classList.add("image");
    email.src = "../src/assets/email.jpeg";
    email.alt =" image of email ";
    contentDiv.appendChild(email);

    const emailPara = document.createElement("p")
    emailPara.classList.add('menu-copy')
    emailPara.textContent="email";
    contentDiv.appendChild(emailPara)

    const topImage =document.createElement("img");
    topImage.classList.add("image");
    topImage.src = "../src/assets/";
    topImage.alt =" image of addresss ";
    contentDiv.appendChild(topImage);

    const addressPara = document.createElement("p")
    addressPara.classList.add('menu-copy')
    addressPara.textContent="our address";
    contentDiv.appendChild(addressPara)
}

contact();