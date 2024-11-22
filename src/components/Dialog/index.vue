<!-- DialogComponent.vue -->
<template>
<v-dialog v-model="internalDialog" max-width="600">
    <template #activator="{ props: activatorProps }">
    <slot v-bind="activatorProps" />
    </template>

    <v-card>
    <v-card-title>What do you need to do?</v-card-title>
    <v-card-text>
        <v-textarea label="New To Do"></v-textarea>
    </v-card-text>
    <v-card-actions>
        <v-btn text @click="closeDialog">Close</v-btn>
        <v-btn color="primary" @click="saveDialog">Save</v-btn>
    </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

// Define the event this component will emit
const emit = defineEmits(['update:dialog']); // Custom event for two-way binding

// Define the prop for v-model:dialog
const props = defineProps({
modelValue: Boolean, // This is the prop bound by `v-model:dialog`
});

// Internal state for managing dialog visibility
const internalDialog = ref(props.modelValue);

// Watch for changes in the parent’s dialog prop
watch(
() => props.modelValue,
(newValue) => {
    internalDialog.value = newValue; // Sync internal state with parent
}
);

// Emit the update event when the internal dialog state changes
watch(internalDialog, (newValue) => {
emit('update:dialog', newValue); // Emit the update event to parent
});

// Methods to control dialog visibility
const closeDialog = () => {
internalDialog.value = false;
};

const saveDialog = () => {
internalDialog.value = false;
};
</script>
