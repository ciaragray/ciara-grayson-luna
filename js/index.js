const body = document.body;

// footer
const footer = document.createElement("footer");
footer.id = "site footer";
footer.setAttribute("role", "contentInfo");

const p = document.createElement("p");
p.textContent = `© ${new Date().getFullYear()} Ciara Grayson`;

footer.append(p);
body.append(footer);

// skills
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsSection = document.querySelector("#skills");

if (skillsSection) {
  const ul = document.createElement("ul");
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  });
  skillsSection.appendChild(ul);
}
