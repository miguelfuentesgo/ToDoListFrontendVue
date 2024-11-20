import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo',{
    state: () => ({
        todos: [
            { text: 'Find job', completed: false },
            { text: 'Get money', completed: false},
            { text: 'Sleep', completed: false}
        ],

        filter: ''
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
        setFilter(newFilter) {
            console.log('new filter', newFilter)
            this.filter = newFilter
        },

        updateTodo(newTodo, index){
            this.todos[index] = newTodo
        },

        removeTodo(index) {{
            console.log('index --->', index)
            console.log('todos 1', this.todos.values())
            this.todos = this.todos.filter((_,i) => {
                console.log("index for ", i)
                console.log("index ", index)
                return i != index
            } )

            console.log('todos 2', this.todos)
          
        }},

        updateCompleteTodo(index, completed) {
            this.todos[index].completed = completed
        }

    }
})