<template>
  <TodoCounter/>
  <TodoSearch />
  <TodoList>
    <TodoItem  v-for="(todo,index) in filteredTodos" :key="index"  :item="todo" :itemIndex="index" />
  </TodoList>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <newToDoButton v-bind="activatorProps"/>
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
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script setup>

import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import newToDoButton from './components/newToDoButton'

import { useTodoStore } from './store'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'


  const dialog = ref(false)
  const newTodo = ref('')


  const todoStore =  useTodoStore() 

  const { todos, filter } = storeToRefs(todoStore)

  const filteredTodos = computed(()=> {
    return todos.value.filter((item) => item.text.toLowerCase().includes( filter.value.toLowerCase().trim()))
  }) 

  const clearForm  = () => {
    newTodo.value = ''
  }

  const cancelNewTodo = () => {
    dialog.value = false
    clearForm()
  }

  const addNewTodo = () => {
    
    todoStore.addNewTodo(newTodo.value)
    dialog.value = false
    clearForm()
  }

</script>


