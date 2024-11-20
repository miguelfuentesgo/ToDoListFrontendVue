<template>
    <div>
        <input v-model="inputSearch" class="input-miguel" type="text" placeholder="cortar cebolla" @keyup="updateFilter">
    </div>
</template>

<style  lang="scss" scoped>
    div {
        width: 100%;
    }
    input {
        padding: 1rem;
        width: 100%;
        max-width: 300px;
        border: 1px solid gray;
        border-radius: 5px;

        &:hover{
            border: 1px solid rgb(100, 119, 201);
        }

        &:hover::placeholder{
            color: rgb(100, 119, 201);
        }
    }

    input::placeholder {
        font-size: 1rem;
        color: gray;
        font-weight: 100;
    }

    
</style>

<script setup>

    import { ref } from "vue"
    import { useTodoStore } from '@/store'


    const store = useTodoStore()

    const inputSearch = ref()

    const updateFilter = () => {
        store.setFilter(inputSearch.value)
    }



</script>