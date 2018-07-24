<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <item v-for="(todo, index) in todos"
        :key="index" :item="todo" :index="index"
        @deleteItem="$emit('deleteItem', index)"
        @toggleItem="$emit('toggleItem', index)"
        @editItem="$emit('editItem', { index, editedTitle: $event})">
      </item>
    </ul>
  </section>
</template>

<script>
import Item from './TodoItem'
export default {
  props: {
    todos: {
      type: Array,
      defaultValue: []
    }
  },
  components: {
    Item
  },
  methods: {
    editItem (index, editedItem) {
      console.log(index, editedItem)
      // this.$emit('editItem', editedItem)
    }
  }
}
</script>
