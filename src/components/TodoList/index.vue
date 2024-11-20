<template>
    <div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
</style>
<script>
export default {
    name:'TodoList',
}

</script>