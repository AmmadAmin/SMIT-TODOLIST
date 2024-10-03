function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();  // Delete task when button clicked

    // Add click event to toggle completion
    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Add the new list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }