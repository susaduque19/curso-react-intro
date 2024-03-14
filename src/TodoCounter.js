import './TodoCounter.css'
function TodoCounter({ total, completed }) {
  return (
    completed === total ? 
    <h1>
     Felicidades, has completado todas las tareas!!
    </h1> :
     <h1>
     Has completado {completed} de {total} TODOS
   </h1>
  );
}

export { TodoCounter };
