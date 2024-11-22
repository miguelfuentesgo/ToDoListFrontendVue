<template>
    <button class="new-todo-button"> +</button>
</template>

<style lang="scss" scoped>

    .new-todo-button {
        position: fixed;
        bottom: 60px;
        right: 60px;
        width: 50px;
        height: 50px !important;
        border-radius: 50%;
        background: red;
        color: white;
        transition: transform 0.2s ease, background 0.2s ease;

        &:hover{
            background: blue;
            transform: scale(1.1);
    }
    }
</style>
<script>
</script>