<template>
    <div>
        <span>
            v
        </span>

        <p>
            {{ text }}
        </p>

        <span>
            x {{  completed }}
        </span>

    </div>
</template>

<script setup>

import { defineProps,  toRefs} from 'vue'

const props = defineProps({
    item: Object
})

const { text, completed } = toRefs(props.item);


</script>