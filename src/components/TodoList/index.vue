<template>
    <div class="todo-list">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<style scoped lang="scss">

.todo-list {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 20px 0px;
    padding: 0px 20px;
    text-decoration: none;
}

.todo-list > ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 0;
}
</style>

<script>
export default {
    name:'TodoList',
}

</script>