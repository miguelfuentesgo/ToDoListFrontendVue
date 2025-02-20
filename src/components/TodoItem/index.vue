<template>
    <div class="todo-item">
        <div :style="checkIconStyle" @mouseover=" hoverCheckIcon = true" @mouseleave=" hoverCheckIcon = false" >
            <font-awesome-icon icon="check" />
        </div>
        

        <p>
            {{ text }}
        </p>
        <div :style="closeIconStyle" @mouseover=" hoverCloseIcon = true" @mouseleave=" hoverCloseIcon = false" >
            <font-awesome-icon icon="xmark" />
        </div>

    </div>
</template>

<style scoped lang="scss">
.todo-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 400px;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        border-color: gray;
    }
  }

  .icon-check{
    color: green;
  }

  .icon-close {
    color: red;
  }
</style>

<script setup>

import { defineProps, computed, toRefs, ref} from 'vue'

const props = defineProps({
    item: Object
})

const hoverCheckIcon = ref(false)
const hoverCloseIcon = ref(false)

const { text } = toRefs(props.item);


const checkIconStyle  = computed( () => {
    return {
        color: hoverCheckIcon.value ? 'green': ''
    }
})

const closeIconStyle  = computed( () => {
    return {
        color: hoverCloseIcon.value ? 'red': ''
    }
})

</script>