<script setup lang="ts">
import { Ref, ref } from "vue";
import Todo from "../Todo";

const props = defineProps<{
	todos: Array<Todo>;
}>();

const task: Ref<string> = ref("");
const due: Ref<Date> = ref(new Date());

function submit() {
	const todo = new Todo(task.value, due.value);
	props.todos.push(todo);
}
</script>

<template>
	<h2>Todo Form</h2>
	<div>
		<label for="task">Task</label>
		<input type="text" v-model="task" />
		<label for="due">Due date-time</label>
		<input type="datetime-local" v-model="due" />
		<button @click="submit">Submit</button>
	</div>
</template>

<style scoped>
div {
	display: flex;
	flex-direction: column;
}
</style>
