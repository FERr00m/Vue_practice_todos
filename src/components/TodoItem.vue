<template>
  <li>
    <span :class="{done: todo.completed}">
      <input
          :checked="todo.completed"
          type="checkbox"
          @change="markComplete"
      >
      <strong> {{ idx + 1 }} </strong>
      {{ todo.title.toUpperCase() }}
    </span>
    <button @click="$emit('removeTodo', todo.id)">&times;</button>
  </li>

</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      todoLocal: this.todo
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    idx: Number
  },
  methods: {
    markComplete() {
      this.todoLocal.completed = !this.todoLocal.completed;
    },
  },
}
</script>

<style scoped lang="scss">
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  .done {
    text-decoration: line-through;
  }
</style>