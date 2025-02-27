import { defineStore } from 'pinia';


// Best practices: define store with use 
export const useTodoStore = defineStore('todo',{
    state: () => ({
        todos: [
        ],
    }),
    getters: {
        completedTodos: (state) => {
            return state.todos.filter((todo) => todo.completed).length
        },

        totalTodos: (state) => {
            return state.todos.length
        }
    },

    actions: {
        setTodos(todos) {
            this.todos = todos;
        },
    }
})