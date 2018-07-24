<template>
  <div id="app">
    <todo :todos="todos" :visibility="visibility" @addNewItem="addNewItem"></todo>
  </div>
</template>

<script>
import Todo from './components/Todo'

export default {
  name: 'App',
  components: {
    Todo
  },
  data () {
    return {
      todos: [],
      visibility: 'all'
    }
  },
  props: {
    initTodos: {
      type: Array
    }
  },
  mounted () {
    this.todos = this.initTodos
  },
  methods: {
    addNewItem (newItem) {
      this.todos.push({
        title: newItem,
        completed: false
      })
    }
  }
}
</script>
