import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import TodoBody from '../components/TodoBody'

const bodyHelper = {
  template: `<todo-body :todos="todos"
  @toggleItem="toggleItem"
  @deleteItem="deleteItem"
  @editItem="editItem"></todo-body>`,
  methods: {
    toggleItem: action('toggleItem'),
    deleteItem: action('deleteItem'),
    editItem: action('editItem')
  }
}
storiesOf('Body', module)
  .addDecorator(() => ({
    template: '<section class="todoapp"><story/></section>'
  }))
  .add('none complete', () => ({
    components: { TodoBody },
    data () {
      return {
        todos: [
          { title: 'Item 1', completed: false },
          { title: 'Item 2', completed: false },
          { title: 'Item 3', completed: false }
        ]
      }
    },
    ...bodyHelper
  }))
  .add('some completed', () => ({
    components: { TodoBody },
    data () {
      return {
        todos: [
          { title: 'Item 1', completed: false },
          { title: 'Item 2', completed: true },
          { title: 'Item 3', completed: false }
        ]
      }
    },
    ...bodyHelper
  }))
  .add('all completed', () => ({
    components: { TodoBody },
    data () {
      return {
        todos: [
          { title: 'Item 1', completed: true },
          { title: 'Item 2', completed: true },
          { title: 'Item 3', completed: true }
        ]
      }
    },
    ...bodyHelper
  }))
