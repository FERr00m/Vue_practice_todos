<template>
  <ul>
    <todo-item
        v-for="(todo, idx) in todos"
        :todo="todo"
        :idx="idx"
        :key="todo.id"
        @removeTodo="removeTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id)
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>