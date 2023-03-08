export function initialPageLoad(){
    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();
    const heading = document.createElement('h1')
    heading.textContent="Welcome to chaaywaalya resturant and bar";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);


    const topImage = document.createElement('img');
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/img.webp"
    topImage.alt = 'resimage';
    contentDiv.appendChild(topImage);

    const paragraph1 = document.createElement('p');
    paragraph1.classList.add('landing-page-copy');
    paragraph1.textContent= 'this is my first paragraph by dom Element';
    contentDiv.appendChild(paragraph1);

    const paragraph2 = document.createElement('p');
    paragraph2.classList.add('landing-page-copy');
    paragraph2.textContent= 'this is my second paragraph by dom Element';
    contentDiv.appendChild(paragraph2);
    
    const paragraph3 = document.createElement('p');
    paragraph3.classList.add('landing-page-copy');
    paragraph3.textContent= 'this is my third paragraph by dom Element';
    contentDiv.appendChild(paragraph3);
    
}

initialPageLoad();