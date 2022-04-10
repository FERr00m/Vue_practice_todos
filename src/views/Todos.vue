<template>
  <div>
    <h2>Todo list</h2>
    <router-link to="/">Home</router-link>
    <add-todo-item @addTodo="addTodo"/>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">completed</option>
      <option value="not-completed">not-completed</option>
    </select>
    <loader v-if="loading"/>
    <todo-list
        v-else-if="filteredTodos.length"
        :todos="filteredTodos"
        @removeTodo="removeTodo"
    />
    <div v-else>No todos</div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodoItem from "@/components/AddTodoItem";
import Loader from "@/components/Loader";
export default {
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  name: 'App',
  components: {
    TodoList,
    AddTodoItem,
    Loader
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(newTodo) {
      this.todos.push(newTodo)
    },
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(data => {
          this.todos = data
          this.loading = false
        })
  },
  // watch: {
  //   filter(value) {
  //     console.log(value)
  //   }
  // }
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
      return this.todos
    }
  }
}
</script>