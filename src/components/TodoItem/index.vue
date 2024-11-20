<template>
    <div class="todo-item">
        <div class="icon-check" @click="check">
            <font-awesome-icon icon="check" />
        </div>
        <p :class="{'checked': checked }">
            {{ props.item.text }}
        </p>

        <div class="icon-close" @click="remove">
            <font-awesome-icon icon="xmark" class="text-red-500 text-xl" />
        </div>

    </div>
</template>
<style lang="scss" scoped>
    .todo-item{
        box-sizing: border-box;
        margin-bottom: 20px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border: 2px solid rgb(100, 119, 201);
        border-radius: 5px;
        

        p {
            color: black;

            &.checked {
                text-decoration: line-through;  
            }
        }

        div {
            padding: 10px;
            
            &.icon-check{
            color: green;
        }

            &.icon-close{
                color:red;
            }
        }

        &:hover{
            border: 2px solid rgb(20, 38, 117);
            cursor: pointer;
        }
    }
</style>

<script setup>



import { defineProps, ref} from 'vue'
import  { useTodoStore } from '@/store'

const props = defineProps({
    item: Object,
    itemIndex: Number,
})



const store = useTodoStore()
const checked = ref(props.item.completed)

const check = () => {
    checked.value = !checked.value
    store.updateCompleteTodo(props.itemIndex, checked.value)
}

const remove = () => {
    if (props.itemIndex !== undefined) {
        store.removeTodo(props.itemIndex)
    } else {
        console.error('Invalid item index')
    }
    
}


</script>