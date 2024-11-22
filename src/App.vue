<template>
  <TodoCounter/>
  <TodoSearch />
  <TodoList>
    <TodoItem  v-for="(todo,index) in filteredTodos" :key="index"  :item="todo" :itemIndex="index" />
  </TodoList>
  <Dialog v-model:dialog="dialog">
      <template #activator="{ props: activatorProps }">
        <newToDoButton v-bind="activatorProps" />
      </template>
  </Dialog>
</template>

<script setup>

import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import newToDoButton from './components/newToDoButton'
import Dialog from './components/Dialog'
import { useTodoStore } from './store'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'


 const dialog = ref(false)

  const todoStore =  useTodoStore() 

  const { todos, filter } = storeToRefs(todoStore)

  const filteredTodos = computed(()=> {
    return todos.value.filter((item) => item.text.toLowerCase().includes( filter.value.toLowerCase().trim()))
  }) 

</script>


