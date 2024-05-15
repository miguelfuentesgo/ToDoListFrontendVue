<template>
  <TodoCounter/>
  <TodoSearch />
  <TodoList>
    <TodoItem  v-for="todo in todos" :key="todo.text"  :item="todo" />
  </TodoList>

</template>

<script setup>

import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import { useTodoStore } from './store'
import { storeToRefs } from 'pinia'


 

  const todoStore =  useTodoStore() 

  const { todos } = storeToRefs(todoStore)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
