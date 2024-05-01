class Todo {
	task: string;
	due: Date;

	constructor(task: string, due: Date) {
		this.task = task;
		this.due = due;
	}
}

export default Todo;
