
let darkmode = document.querySelector('#darkmode');
     
darkmode.onclick = () => {
    console.log(1);
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

const texts = ["Software Engineer", "Fullstack Developer", "Blockchain Developer"];  // Array of texts to type
const typingSpeed = 70;  // Speed at which the text is typed (in milliseconds)
const erasingSpeed = 100;  // Speed at which the text is erased (in milliseconds)
const pauseDuration = 1000; // Duration before starting to erase the text (in milliseconds)

let currentTextIndex = 0;  // Keeps track of which text we are typing/erasing
let i = 0;  // Index for current text
let isErasing = false;
let typedContentElement = document.getElementById('typed-content');

function typeAndErase() {
  const text = texts[currentTextIndex];  // Get the current text to type

  if (!isErasing) {
    // Typing the text
    if (i < text.length) {
      typedContentElement.textContent += text[i];
      i++;
      setTimeout(typeAndErase, typingSpeed); // Call again for the next character
    } else {
      isErasing = true;
      setTimeout(typeAndErase, pauseDuration); // Wait before erasing
    }
  } else {
    // Erasing the text
    if (i > 0) {
      typedContentElement.textContent = typedContentElement.textContent.slice(0, -1);
      i--;
      setTimeout(typeAndErase, erasingSpeed); // Call again to erase next character
    } else {
      // Move to the next text in the array
      currentTextIndex = (currentTextIndex + 1) % texts.length;  // Loop through texts array
      isErasing = false;
      setTimeout(typeAndErase, 0); // Wait before typing the next text
    }
  }
}

typeAndErase();



function view1() {
    const driveLink =
      "https://drive.google.com/file/d/16OaQDjhojF_Dsgvxtrun9GF0ox4liVK8/view?usp=drive_link"; // Replace with your actual Google Drive file link
    window.open(driveLink, "_blank");
  }
  function openDriveDocument1() {
    const driveLink =
      "https://drive.google.com/file/d/1BwuFGIyFQ2sIS9qUkXO752b3XR2T2Jhb/view?usp=drive_link"; // Replace with your actual Google Drive file link
    window.open(driveLink, "_blank");
  }
  function openDriveDocument2() {
    const driveLink =
      "https://drive.google.com/file/d/1dS1GDXF_6e2A5SOxOo7FUMB-LnzqF9d9/view?usp=drive_link"; // Replace with your actual Google Drive file link
    window.open(driveLink, "_blank");
  }
  function openDriveDocument3() {
    const driveLink =
      "https://drive.google.com/file/d/1TZK_YQw4e1JJHJyeZ7Ame_6vRh62ktlZ/view?usp=drive_link"; // Replace with your actual Google Drive file link
    window.open(driveLink, "_blank");
  }
  function openDriveDocument4() {
    const driveLink =
      "https://drive.google.com/file/d/1ZcQfoGk3FUd0F23A4IWMwC-5DjNgzk2n/view?usp=drive_link"; // Replace with your actual Google Drive file link
    window.open(driveLink, "_blank");
  }
  function openDriveDocument5() {
    const driveLink =
      "https://drive.google.com/drive/folders/1jxrtSiLiNueZ313tgDlaH2F3fhzrAcG2?usp=drive_link"; // Replace with your actual Google Drive file link
    window.open(driveLink, "_blank");
  }
  function openDriveDocument6() {
    const driveLink =
      "https://drive.google.com/file/d/1C36-aqmjj8SagicuaLaT6smIMJ3Jm3-S/view?usp=drive_link"; // Replace with your actual Google Drive file link
    window.open(driveLink, "_blank");
  }

   /*  let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    // Add shadow to header on scroll
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
        // Close navbar when scrolling (this was in `onscroll`)
        navbar.classList.remove('active');
    });

    // Toggle navbar menu on click
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }; */
  
