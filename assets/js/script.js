// Obtém todos os elementos de tarefa
const tasks = document.querySelectorAll('.task');

// Adiciona um ouvinte de evento para o clique no checkbox
tasks.forEach(task => {
  const checkbox = task.querySelector('input[type="checkbox"]');
  const taskId = task.getAttribute('data-id');
  const taskState = localStorage.getItem(`task-${taskId}`);
  
  if (taskState === 'completed') {
    // Se a tarefa estava marcada como concluída, marque o checkbox como "checked"
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      // Se o checkbox estiver marcado, armazene o estado da tarefa como concluído no localStorage
      localStorage.setItem(`task-${taskId}`, 'completed');
    } else {
      // Se o checkbox estiver desmarcado, remova o estado da tarefa do localStorage
      localStorage.removeItem(`task-${taskId}`);
    }
  });
});
