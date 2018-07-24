<template>
  <div>
    <section class="todoapp">
      <todo-header @addNewItem="addNewItem"></todo-header>
      <todo-body :todos="filteredTodos"
        @toggleItem="toggleItem"
        @deleteItem="deleteItem"
        @editItem="editItem"></todo-body>
      <todo-footer :remaining="remaining"
        :visibility="visibility"
        :completedCount="completedCount"
        @changeFilter="changeFilter"
        @removeCompleted="removeCompleted"></todo-footer>
    </section>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody'
import TodoFooter from './TodoFooter'

const filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

export default {
  name: 'Todo',
  props: {
    initTodos: {
      type: Array
    }
  },
  data () {
    return {
      todos: [],
      visibility: 'all'
    }
  },
  created () {
    this.todos = this.initTodos || []
  },
  computed: {
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return filters.active(this.todos).length
    },
    completedCount () {
      return filters.completed(this.todos).length
    }
  },
  methods: {
    addNewItem (newItem) {
      this.todos.push({
        title: newItem,
        completed: false
      })
    },
    deleteItem (index) {
      this.todos.splice(index, 1)
    },
    editItem ({ index, editedTitle }) {
      this.todos[index].title = editedTitle
    },
    toggleItem (index) {
      this.todos[index].completed = !this.todos[index].completed
    },
    changeFilter (filter) {
      this.visibility = filter
    },
    removeCompleted () {
      this.todos = filters.active(this.todos)
    }
  },
  components: {
    TodoHeader,
    TodoBody,
    TodoFooter
  }
}
</script>
