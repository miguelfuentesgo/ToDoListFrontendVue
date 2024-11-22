<template>
    <div>
        <p>You have completed {{completedTodos}} of {{totalTodos}} TODOs</p>
    </div>
</template>

<script setup>

import { useTodoStore } from '@/store';
import { storeToRefs } from 'pinia';

    const todoStore = useTodoStore();


    const { completedTodos, totalTodos } = storeToRefs(todoStore);



</script>

<style lang="scss" scoped>
    p {
       font-size: 1.5rem;
       color: #101bb3;
    }
</style>