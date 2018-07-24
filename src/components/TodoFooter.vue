<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ remaining }}</strong> {{ remaining | pluralize }} left</span>
    <ul class="filters">
      <li>
        <a :class="{ selected: visibility === 'all' }" @click="$emit('changeFilter' ,'all')">All</a>
      </li>
      <li>
        <a :class="{ selected: visibility === 'active' }" @click="$emit('changeFilter', 'active')">Active</a>
      </li>
      <li>
        <a :class="{ selected: visibility === 'completed' }" @click="$emit('changeFilter', 'completed')">Completed</a>
      </li>
    </ul>
    <button v-if="completedCount > 0" class="clear-completed" @click="$emit('removeCompleted')">Clear completed</button>
  </footer>
</template>

<script>
export default {
  props: {
    remaining: {
      type: Number
    },
    visibility: {
      type: String
    },
    completedCount: {
      type: Number
    }
  },
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  }
}
</script>
