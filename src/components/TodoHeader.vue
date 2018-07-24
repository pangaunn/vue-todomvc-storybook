<template>
  <header class="header">
    <h1>Todos</h1>
    <input v-model.trim="newTodo" @keyup.enter="onEnter" class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
</template>

<script>
export default {
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    onEnter (e) {
      if (this.newTodo) {
        this.$emit('addNewItem', this.newTodo)
        this.newTodo = ''
      }
    }
  }
}
</script>
