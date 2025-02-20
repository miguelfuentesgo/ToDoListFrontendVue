<template>
    <button class="new-todo-button"> +</button>
</template>

<style lang="scss" scoped>

    .new-todo-button {
        background: transparent;
        position: fixed;
        bottom: 60px;
        right: 60px;
        width: 50px;
        height: 50px !important;
        border-radius: 50%;
        color: white;
        border: 2px solid white;

        &:hover {

            border-color: gray;
            cursor: pointer;
        }
    }
</style>
<script>
</script>