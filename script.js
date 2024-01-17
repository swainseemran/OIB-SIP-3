document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    window.addTask = function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn" onclick="removeTask(this)"><i class="fas fa-trash-alt"></i></button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    window.removeTask = function(button) {
        const taskItem = button.parentNode;
        taskList.removeChild(taskItem);
    }

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
