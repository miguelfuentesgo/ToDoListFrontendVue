<template>
    <div class="todo-search">
        <input type="text" placeholder="cortar cebolla">
    </div>
</template>

<style scoped lang="scss">
    .todo-search {
        
        margin: auto 100px;
        margin-top: 20px;
    }

    .todo-search > input {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 1.5rem;
        border-radius: 6px;
        color: white;
        background: transparent;
        border: 1px solid white;
        
    }

    .todo-search > input::placeholder{
        color: rgb(91, 88, 88);

    }
    
    
</style>

<script>


export default {
    name: 'TodoSearch',
}
</script>