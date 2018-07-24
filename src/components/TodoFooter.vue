<template>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ remaining }}</strong> {{ remaining | pluralize }} left</span>
    <!-- Remove this if you don't implement routing -->
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
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed">Clear completed</button>
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
    }
  },
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  }
}
</script>
