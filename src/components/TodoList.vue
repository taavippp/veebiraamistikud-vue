<script setup lang="ts">
import Todo from "../Todo";

const props = defineProps<{
	todos: Array<Todo>;
}>();

function onTableButtonClick(index: number) {
	props.todos.splice(index, 1);
}
</script>

<template>
	<h2>Todo List</h2>
	<p v-if="todos.length == 0">Todo list is currently empty.</p>
	<table v-else>
		<thead>
			<th>Task</th>
			<th>Due</th>
			<th></th>
		</thead>
		<tbody>
			<tr v-for="(todo, index) in todos">
				<td>{{ todo.task }}</td>
				<td>{{ todo.due.toString() }}</td>
				<td>
					<button @click="onTableButtonClick(index)">
						Mark as done
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
td,
th {
	border: 1px solid gray;
	padding: 0.4rem;
}
</style>
