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