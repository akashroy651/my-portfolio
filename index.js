
// BANNER SECTION ANIMATION START
const text = document.querySelector(".sec-text");
const textLoad = () =>{
  setTimeout(() =>{
    text.textContent = "Web Designer.";
  },0);
  setTimeout(() =>{
    text.textContent = "Web Developer.";
  },4000);
  setTimeout(() =>{
    text.textContent = "WordPress Expert.";
  },8000);
  setTimeout(() =>{
    text.textContent = "Freelancer.";
  },12000);
}

textLoad();
setInterval(textLoad,16000);
// BANNER SECTION ANIMATION END

