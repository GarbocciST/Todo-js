import "./js/styles.css";

import {Todo, TodoList} from "./classes";  // De esta forma busca al index por defecto.
import { crearTodoHtml } from "./js/componentes";


export const lista = new TodoList();

lista.todos.forEach(todo => { crearTodoHtml(todo)
    
});
