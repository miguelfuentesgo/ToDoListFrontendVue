<template>
    <div class="todo-counter">
        Ha completado {{completedTodos}} de {{totalTodos}} TODOs
    </div>
</template>

<style scoped>
    .todo-counter {
        margin-top: 40px;
        font-size: 2rem;
     }
</style>

<script setup>

    import { useTodoStore } from '@/store';
    import { storeToRefs } from 'pinia';

    const todoStore = useTodoStore();


    const { completedTodos, totalTodos } = storeToRefs(todoStore);



</script>

