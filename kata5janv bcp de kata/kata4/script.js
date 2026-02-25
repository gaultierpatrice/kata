function createTaskManager() {
  let tasks = [];
  let nextId = 1;

  function addTask(title, description, priority) {
    // À compléter : ajoute une tâche avec id auto-incrémenté
    const task = {
      id: nextId++,
      title,
      description,
      priority,
      status: "todo",
      dateCreated: new Date().toISOString(),
    };

    tasks.push(task);
  }

  function getTasks() {
    // À compléter : retourne toutes les tâches
    return tasks;
  }

  function updateStatus(id, newStatus) {
    // À compléter : met à jour le statut d'une tâche
    tasks[id].status = newStatus;
  }

  function getTasksByPriority(priority) {
    let tasksByPriority = [];
    // À compléter : retourne les tâches d'une priorité donnée
    tasks.forEach((task) => {
      if (task.priority === priority) {
        tasksByPriority.push(task);
      }
    });

    return tasksByPriority;
  }

  function getStats(status) {
    let tasksByStatus = [];
    // À compléter : compte les tâches par statut
    tasks.forEach((task) => {
      if (task.status === status) {
        tasksByStatus.push(task);
      }
    });

    return tasksByStatus;
  }

  return {
    addTask,
    getTasks,
    updateStatus,
    getTasksByPriority,
    getStats,
  };
}

const taskManager = createTaskManager();

const tasks = [
  {
    title: "Faire les courses",
    description: "Acheter du lait, des œufs et du pain",
    priority: "High",
  },
  {
    title: "Nettoyer la chambre",
    description: "Passer l'aspirateur et dépoussiérer",
    priority: "Medium",
  },
  {
    title: "Finish project report",
    description: "Complete the final draft of the quarterly report",
    priority: "High",
  },
  {
    title: "Grocery shopping",
    description: "Buy milk, bread, eggs, and vegetables",
    priority: "Medium",
  },
  {
    title: "Morning workout",
    description: "30 minutes of jogging or yoga",
    priority: "Low",
  },
  {
    title: "Team meeting",
    description: "Discuss project milestones and deadlines",
    priority: "High",
  },
  {
    title: "Clean kitchen",
    description: "Wash dishes, wipe counters, take out trash",
    priority: "Medium",
  },
  {
    title: "Read book",
    description: "Finish reading one chapter of current book",
    priority: "Low",
  },
  {
    title: "Pay bills",
    description: "Electricity, internet, and credit card payments",
    priority: "High",
  },
  {
    title: "Email follow-ups",
    description: "Reply to client emails and send updates",
    priority: "Medium",
  },
];

tasks.forEach((task) =>
  taskManager.addTask(task.title, task.description, task.priority)
);

taskManager.updateStatus(1, "done");
taskManager.updateStatus(2, "in progress");
taskManager.updateStatus(4, "in progress");

console.log(
  taskManager.getTasks(),

  taskManager.getTasksByPriority("High"),
  taskManager.getTasksByPriority("Medium"),
  taskManager.getTasksByPriority("Low"),

  taskManager.getStats("done"),
  taskManager.getStats("in progress")
);
