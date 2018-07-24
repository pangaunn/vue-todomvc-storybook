import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import TodoItem from '../components/TodoItem'

const itemHelper = {
  template: `<todo-item :item="item"
  @toggleItem="toggleItem"
  @deleteItem="deleteItem"
  @editItem="editItem"></todo-item>`,
  methods: {
    toggleItem: action('toggleItem'),
    deleteItem: action('deleteItem'),
    editItem: action('editItem')
  }
}
storiesOf('Item', module)
  .addDecorator(() => ({
    template: `
    <section class="todoapp">
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <story/>
        </ul>
      </section>
    </section>`
  }))
  .add('not completed', () => ({
    components: { TodoItem },
    data () {
      return {
        item: { title: 'Item 1', completed: false }
      }
    },
    ...itemHelper
  }))
  .add('completed', () => ({
    components: { TodoItem },
    data () {
      return {
        item: { title: 'Item 1', completed: true }
      }
    },
    ...itemHelper
  }))
