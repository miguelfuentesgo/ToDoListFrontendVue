<template>
    <div>
        Ha completado {{completedTodos}} de {{totalTodos}} TODOs
    </div>
</template>

<script setup>

import { useTodoStore } from '@/store';
import { storeToRefs } from 'pinia';

    const todoStore = useTodoStore();


    const { completedTodos, totalTodos } = storeToRefs(todoStore);



</script>