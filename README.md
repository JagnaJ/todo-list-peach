# To-Do List Application

This To-Do List application is a simple JavaScript-based task manager allowing users to add, remove, and mark tasks as completed. The application is structured around the following components:

- **Task Class:** Represents a task with attributes such as a description and completion status.
- **ToDoList Class:** Manages the To-Do List functionality by performing operations like adding tasks, removing tasks, and displaying tasks in the UI.
- **localStorage:** Utilized to persist task data locally in the browser.


## Technologies & Methods Used:

- **Object-Oriented Programming (OOP):** Implemented through the Task and ToDoList classes, encapsulating data and behavior.
- **Event Handling:** Utilized for user interactions (adding tasks, removing tasks, toggling completion) through event listeners on DOM elements.
- **DOM Manipulation:** Tasks are rendered and updated in the UI through creating, modifying, and deleting DOM elements.
- **Local Storage:** The application utilizes localStorage to store and retrieve task data, ensuring persistence across page reloads.
This To-Do List application provides a simple, user-friendly interface for managing tasks, demonstrating core JavaScript concepts, event handling, and data persistence through localStorage.


## Code Analysis:

- **Task Class:** Represents a task with a description and completion status. It has a method to toggle completion status.
- **ToDoList Class:** Manages the To-Do List by handling tasks, adding, removing, and displaying tasks. It also utilizes localStorage to persist data.
- **Event Listeners:** Capture user interactions like adding tasks, removing tasks, toggling completion, etc.
- **DOM Manipulation:** Creating, updating, and removing DOM elements to display tasks.


## Contributing

Contributions are welcome! If you have any suggestions, improvements, or find any issues, please feel free to create an issue or submit a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.