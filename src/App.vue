<script setup lang="ts">
import { Ref, ref } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import Todo from "./Todo";

const todos: Ref<Array<Todo>> = ref([]);
</script>

<template>
	<h1>Todo App</h1>
	<TodoForm :todos="todos"></TodoForm>
	<TodoList :todos="todos"></TodoList>
</template>

<style scoped></style>
