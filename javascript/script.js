const classNav = document.getElementById('nav');
const openNav = document.getElementById('hamburger');
const closeNav = document.getElementById('close');
const navItem1 = document.getElementById('navItem1');
const navItem2 = document.getElementById('navItem2');
const navItem3 = document.getElementById('navItem3');
const navItem4 = document.getElementById('navItem4');
const navItem5 = document.getElementById('navItem5');

// open-nav
function showSideBar() {
  classNav.classList.add('nav');
}
// close-nav
function closeSideBar() {
  classNav.classList.remove('nav');
}

openNav.addEventListener('click', showSideBar);
closeNav.addEventListener('click', closeSideBar);
navItem1.addEventListener('click', closeSideBar);
navItem2.addEventListener('click', closeSideBar);
navItem3.addEventListener('click', closeSideBar);
navItem4.addEventListener('click', closeSideBar);
navItem5.addEventListener('click', closeSideBar);

// loadmore btn
let seeMoreBtn = document.getElementById('see-more');
let currentNoSpeaker = 2;
seeMoreBtn.onclick = () => {
  let speakerContainer = [...document.querySelectorAll('.speak-container .speakingInt .speakerInt')];
  for(let i = currentNoSpeaker; i < currentNoSpeaker + 2; i++){
    speakerContainer[i].style.display = 'flex';
  }
  currentNoSpeaker += 2;

  if(currentNoSpeaker >= speakerContainer.length){
    seeMoreBtn.style.display = 'none'; 
  }
}