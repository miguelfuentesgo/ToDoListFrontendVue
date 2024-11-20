<template>
  <TodoCounter/>
  <TodoSearch />
  <TodoList>
    <TodoItem  v-for="(todo,index) in filteredTodos" :key="index"  :item="todo" :itemIndex="index" />
  </TodoList>


</template>

<script setup>

import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import { useTodoStore } from './store'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'


 

  const todoStore =  useTodoStore() 

  const { todos, filter } = storeToRefs(todoStore)

  const filteredTodos = computed(()=> {
    return todos.value.filter((item) => item.text.toLowerCase().includes( filter.value.toLowerCase().trim()))
  }) 

</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px;
  box-sizing: border-box;
}
</style>
