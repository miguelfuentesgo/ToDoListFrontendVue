<template>
    <TodoCounter/>
  <div style="display:flex; justify-content:center;">
    
  </div>
  <TodoSearch />
  <TodoList>
    <TodoItem  v-for="todo in todos" :key="todo.text"  :item="todo" @click="goToDetail" />
  </TodoList>
</template>

<style scoped>

</style>


<script setup>

import TodoCounter from '@/components/TodoCounter'
import TodoSearch from '@/components/TodoSearch'
import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'
import { useTodoStore } from '@/store'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const todoStore =  useTodoStore() 

const { todos } = storeToRefs(todoStore)

const router = useRouter()
const goToDetail = () => {
  router.push("/detail")
}
</script>