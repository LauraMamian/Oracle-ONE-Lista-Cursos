(() => {

    const btn = document.querySelector("[data-form-btn]");

    // Arrow function

    const createTask = (e) => {
        e.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card");
        input.value = "";

        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete());
        const titleTast = document.createElement("span");
        titleTast.classList.add("task");
        titleTast.innerText = value;

        taskContent.appendChild(titleTast);

        const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;

        task.appendChild(taskContent);
        list.appendChild(task);
    }

    btn.addEventListener("click", createTask);

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    }

    // Immediately Invoked Function Expression IIFE

    const completeTask = (e) => {
        const element = e.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    }
})();