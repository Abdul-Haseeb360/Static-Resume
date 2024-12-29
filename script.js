var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills-section");
var chevrons = document.querySelectorAll(".chevron");
var contents = document.querySelectorAll(".skills-content, .education-content");
// toggleSkillsButton.addEventListener("click", ()=> {
//   if(skillsSection.style.display === "none"){
//     skillsSection.style.display = "block";
//   }else{
//     skillsSection.style.display = "none";
//   }
// });
chevrons.forEach(function (chevron, index) {
    chevron.addEventListener("click", function () {
        contents[index].classList.toggle("hidden");
        chevron.classList.toggle("rotate");
    });
});
