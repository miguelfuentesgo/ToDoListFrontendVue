import { defineStore } from 'pinia';


// Best practices: define store with use 
export const useTodoStore = defineStore('todo',{
    state: () => ({
        todos: [
            { text: 'Find job', completed: false },
            { text: 'Get money', completed: false},
            { text: 'Sleep', completed: false}
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

    }
})