const taskFactory = (title, description, priority, deadline) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getDeadline = () => deadline;

  const setTitle = (title) => { this.title = title; };
  const setDescription = (description) => { this.description = description; };
  const setPriority = (priority) => { this.priority = priority; };
  const setDeadline = (deadline) => { this.deadline = deadline; };

  return {
    title,
    description,
    priority,
    deadline,
    getTitle,
    getDescription,
    getPriority,
    getDeadline,
    setTitle,
    setDescription,
    setPriority,
    setDeadline,
  };
};

const taskMethods = {
  getTitle() {
    return this.title;
  },
  getDescription() {
    return this.description;
  },
  getPriority() {
    return this.priority;
  },
  getDeadline() {
    return this.deadline;
  },
  setTitle(title) {
    this.title = title;
  },
  setDescription(description) {
    this.description = description;
  },
  setPriority(priority) {
    this.priority = priority;
  },
  setDeadline(deadline) {
    this.deadline = deadline;
  },

};

const projectFactory = (title) => {
  const tasks = [];

  const setTitle = (title) => { this.title = title; };
  const getTitle = () => title;

  const addTask = (task) => {
    this.tasks.push(task);
  };

  const removeTask = (index) => {
    this.tasks.splice(index, 1);
  };
  const getTasks = () => this.tasks;
  return {
    title, tasks, addTask, setTitle, getTasks, getTitle, removeTask,
  };
};

const projectMethods = {
  getTitle() {
    return this.title;
  },
  getTasks() {
    return this.tasks;
  },
  addTask(task) {
    this.tasks.push(task);
  },
  removeTask(index) {
    this.tasks.splice(index, 1);
  },
  setTitle(title) {
    this.title = title;
  },
};

export {
  taskFactory,
  projectFactory,
  projectMethods,
  taskMethods,
};
