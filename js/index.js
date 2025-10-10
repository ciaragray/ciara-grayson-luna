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

const messageForm = document.querySelector(`form(name="leave_message")`);
messageForm.addEventListener("submit");
event.preventDefault();

const usersName = event.target.elements["usersName"].value.trim();
const usersEmail = event.target.elements["usersEmail"].value.trim();
const usersMessage = event.target.elements["usersMessage"].value.trim();

console.log("Name:", usersName);
console.log("Email:", usersEmail);
console.log("Message:", usersMessage);

const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");

const newMessage = document.createElement("li");

newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span> — ${usersMessage}</span>
`;
messageList.appendChild(newMessage);

const removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.innerText = "remove";

removeButton.addEventListener("click", function (e) {
  const entry = e.target.parentNode; // the <li>
  entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
