const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills-section") as HTMLElement;
const chevrons = document.querySelectorAll(".chevron") as NodeListOf<HTMLElement>;
const contents = document.querySelectorAll(".skills-content, .education-content") as NodeListOf<HTMLElement>;


// toggleSkillsButton.addEventListener("click", ()=> {
//   if(skillsSection.style.display === "none"){
//     skillsSection.style.display = "block";
//   }else{
//     skillsSection.style.display = "none";
//   }
// });

chevrons.forEach((chevron, index) => {
  chevron.addEventListener("click", () => {
    contents[index].classList.toggle("hidden");
    chevron.classList.toggle("rotate");
  });
});

