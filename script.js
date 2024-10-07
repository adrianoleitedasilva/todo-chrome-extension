document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('new-task');
  const addTaskBtn = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');
  const deleteAllBtn = document.getElementById('delete-all');

  function createTaskElement(taskText) {
      const li = document.createElement('li');
      li.className = 'task-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function () {
          li.classList.toggle('completed', checkbox.checked);
      });

      const taskContent = document.createElement('span');
      taskContent.textContent = taskText;

      const editBtn = document.createElement('button');
      editBtn.className = 'edit-task';
      editBtn.textContent = 'Editar';
      editBtn.addEventListener('click', function () {
          const newTaskText = prompt('Edite a tarefa:', taskContent.textContent);
          if (newTaskText !== null) {
              taskContent.textContent = newTaskText;
          }
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-task';
      deleteBtn.textContent = 'Excluir';
      deleteBtn.addEventListener('click', function () {
          taskList.removeChild(li);
      });

      const taskButtons = document.createElement('div');
      taskButtons.className = 'task-buttons';
      taskButtons.appendChild(editBtn);
      taskButtons.appendChild(deleteBtn);

      li.appendChild(checkbox);
      li.appendChild(taskContent);
      li.appendChild(taskButtons);

      return li;
  }

  addTaskBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          const taskElement = createTaskElement(taskText);
          taskList.appendChild(taskElement);
          taskInput.value = '';
      }
  });

  deleteAllBtn.addEventListener('click', function () {
      taskList.innerHTML = '';
  });
});
