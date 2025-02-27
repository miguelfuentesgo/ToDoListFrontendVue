<template>
    <TodoCounter/>
  <div style="display:flex; justify-content:center;">
    
  </div>
  <TodoSearch />
  <div id="loader" v-if="todosLoading">
    <v-skeleton-loader v-for="index in 4" :key="index" color="primary" type="card"></v-skeleton-loader>
  </div>
  <TodoList v-if="!todosLoading">
      <div id="empty-label" v-if = "todos.length == 0" >
        <font-awesome-icon icon="info" /> Nothing to show
      </div>
      <TodoItem   v-for="todo in todos" :key="todo.description"  :item="todo" @click="goToDetail" />
  </TodoList> 
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <NewTodoButton v-bind="activatorProps"/>
      </template>

      <v-card
        prepend-icon="mdi-account"
        title="¿What is new to do?"
      >
        <v-card-text>
          <v-card-text>
        <v-textarea label="New To Do" v-model="newTodo"></v-textarea>
    </v-card-text>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="cancelNewTodo"
          ></v-btn>

          <v-btn
            color="primary"
            text="create"
            variant="tonal"
            @click="addNewTodo"
            :loading="addingTodo"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <template>
    <v-alert
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
      title="Alert title"
      type="success"
    ></v-alert>
  </template>
</template>

<style scoped lang="scss">
.v-card {
  border: 1px solid white;
  color: white;
  background: black;

  .v-btn {
    color: white !important;
  }
}

#loader {
  margin: 20px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;;


  .v-skeleton-loader {
    border: 1px solid white;
    width: 400px;
    background: black !important;
  }
}


#empty-label {
  display: flex;
  flex-direction: column;
  row-gap:  20px;
  padding: 50px;
}
</style>


<script setup>

import TodoCounter from '@/components/TodoCounter'
import TodoSearch from '@/components/TodoSearch'
import TodoItem from '@/components/TodoItem'
import { useTodoStore } from '@/store'
import { useRouter } from 'vue-router'
import NewTodoButton from '@/components/NewTodoButton'
import { ref, onMounted, computed, defineAsyncComponent} from 'vue'

import { getTodos, createTodo } from '@/services/todoService'

const TodoList = defineAsyncComponent(() => import('@/components/TodoList'));
const dialog = ref(false)
const newTodo = ref('')
const todosLoading = ref(true)
const addingTodo = ref(false)

const todoStore =  useTodoStore() 

const todos = computed(() => {
  return todoStore.todos
})

const router = useRouter()
const goToDetail = () => {
  router.push("/detail")
}

const clearForm  = () => {
    newTodo.value = ''
  }

  const cancelNewTodo = () => {
    dialog.value = false
    clearForm()
  }

  const addNewTodo = async() => {
    addingTodo.value = true

    await createTodo({
      description: newTodo.value
    })

    await refreshTodos()
    dialog.value = false
    addingTodo.value = false
    clearForm()
    
    
  }

  const refreshTodos = async() => {
    const response = await getTodos()
    todoStore.setTodos(response.tasks)
  }

  onMounted(async () => {
    await refreshTodos()
    todosLoading.value = false
  })
</script>