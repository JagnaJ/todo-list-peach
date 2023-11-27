class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
  
    toggleCompleted() {
        this.completed = !this.completed;
    }
  }
  
  class ToDoList {
    constructor() {
        this.tasks = [];
        this.loadTasks();
    }
  
    addTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
        this.saveTasks();
        this.displayTasks();
    }
  
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.saveTasks();
        this.displayTasks();
    }
  
    removeAllTasks() {
        if (confirm('Are you sure you want to remove all tasks?')) {
            this.tasks = [];
            this.saveTasks();
            this.displayTasks();
        }
    }
  
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks).map(task => Object.assign(new Task(), task));
            this.displayTasks();
        }
    }
  
    displayTasks() {
        const listElement = document.getElementById('task-list');
        listElement.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
                <button class="remove-task">x</button>
            `;
  
            taskElement.querySelector('input').addEventListener('change', () => {
                task.toggleCompleted();
                this.displayTasks();
            });
  
            taskElement.querySelector('.remove-task').addEventListener('click', () => {
                this.removeTask(index);
            });
  
            listElement.appendChild(taskElement);
        });
  
        const removeAllButton = document.getElementById('remove-all');
        removeAllButton.disabled = this.tasks.length === 0;
    }
  }
  
  const toDoList = new ToDoList();
  
  document.getElementById('add-task').addEventListener('click', () => {
    const inputField = document.getElementById('new-task');
    if (inputField.value.trim() !== '') {
        toDoList.addTask(inputField.value.trim());
        inputField.value = '';
    }
  });
  
  document.getElementById('remove-all').addEventListener('click', () => {
    toDoList.removeAllTasks();
  });
  
  document.getElementById('new-task').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('add-task').click();
    }
  });
  
  