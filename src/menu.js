export function menu(){
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading =document.createElement("h1");
    heading.textContent = "Welcome to menu List";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const greenBeansCass =document.createElement("img");
    greenBeansCass.classList.add("image");
    greenBeansCass.src = "../src/assets/greenBeans.jpg";
    greenBeansCass.alt =" image of green Bean ";
    contentDiv.appendChild(greenBeansCass);

    const para1 = document.createElement("p")
    para1.classList.add('menu-copy')
    para1.textContent="An amazing green bean casserole";
    contentDiv.appendChild(para1)
    
    const macnCheese =document.createElement("img");
    macnCheese.classList.add("image");
    macnCheese.src = "../src/assets/macn.jpeg";
    macnCheese.alt =" image of macn cheese ";
    contentDiv.appendChild(macnCheese);

    const para2 = document.createElement("p")
    para2.classList.add('menu-copy')
    para2.textContent="An amazing macn cheese dish";
    contentDiv.appendChild(para2)
}

menu()