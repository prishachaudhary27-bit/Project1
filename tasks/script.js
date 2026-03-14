
const headingInput = document.querySelector('.task-heading textarea');
const descriptionInput = document.getElementById('description');
const createButton = document.querySelector('.bottom-btn:nth-of-type(2)');
const cancelButton = document.querySelector('.bottom-btn:nth-of-type(1)');
const todoList = document.getElementById('todo-list');

const detailBox = document.getElementById('task-details');
const closeButton = document.getElementById('close-details');
const detailHeading = document.getElementById('detail-heading');
const detailDescription = document.getElementById('detail-description');

function addTask() {
  const heading = headingInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!heading) return;

  const li = document.createElement('li');
  li.textContent = heading;

  li.dataset.heading = heading;
  li.dataset.description = description;

  li.addEventListener('click', function () {

    detailBox.style.display = "block";

    detailHeading.textContent = this.dataset.heading;
    detailDescription.textContent =
      this.dataset.description || "No description provided.";

  });

  todoList.appendChild(li);

  headingInput.value = '';
  descriptionInput.value = '';
  headingInput.focus();
}

function clearForm() {
  headingInput.value = '';
  descriptionInput.value = '';
  headingInput.focus();
}

createButton.addEventListener('click', addTask);
cancelButton.addEventListener('click', clearForm);

closeButton.addEventListener('click', function () {
  detailBox.style.display = "none";
});

headingInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    addTask();
  }
});

// Show welcome popup after login/signup
function showWelcomePopup(userName) {
    const popup = document.getElementById("welcome-popup");
    const message = document.getElementById("welcome-message");
    const countdownEl = document.getElementById("countdown");
    const closeBtn = document.getElementById("close-popup");

    let countdown = 5;

    message.textContent = `Welcome, ${userName}!`;
    countdownEl.textContent = `Closing in ${countdown} seconds...`;

    popup.style.display = "flex";

    // Countdown logic
    let timer = setInterval(() => {
        countdown--;
        countdownEl.textContent = `Closing in ${countdown} seconds...`;

        if (countdown <= 0) {
            clearInterval(timer);
            popup.style.display = "none";
        }
    }, 1000);

    // Manual close
    closeBtn.addEventListener("click", () => {
        clearInterval(timer);
        popup.style.display = "none";
    });
}

// Trigger popup after login/signup
document.addEventListener("DOMContentLoaded", function () {
    let currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        let user = JSON.parse(currentUser);
        showWelcomePopup(user.name);
        localStorage.removeItem("currentUser"); // clear after showing
    }
});

