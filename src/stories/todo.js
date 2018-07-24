import { storiesOf } from '@storybook/vue'
import Todo from '../components/Todo'

storiesOf('Todo', module)
  .add('initial state', () => ({
    components: { Todo },
    template: '<Todo></Todo>'
  }))
  .add('none completed', () => ({
    components: { Todo },
    data () {
      return {
        initTodos: [
          { title: 'Item 1', completed: false },
          { title: 'Item 2', completed: false },
          { title: 'Item 3', completed: false }
        ]
      }
    },
    template: '<Todo :initTodos="initTodos"></Todo>'
  }))
  .add('some completed', () => ({
    components: { Todo },
    data () {
      return {
        initTodos: [
          { title: 'Item 1', completed: false },
          { title: 'Item 2', completed: true },
          { title: 'Item 3', completed: false }
        ]
      }
    },
    template: '<Todo :initTodos="initTodos"></Todo>'
  }))
  .add('all completed', () => ({
    components: { Todo },
    data () {
      return {
        initTodos: [
          { title: 'Item 1', completed: true },
          { title: 'Item 2', completed: true },
          { title: 'Item 3', completed: true }
        ]
      }
    },
    template: '<Todo :initTodos="initTodos"></Todo>'
  }))
