/* eslint-disable react/react-in-jsx-scope */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Todo from '../components/Todo'
import TodoHeader from '../components/TodoHeader'
import TodoBody from '../components/TodoBody'
import TodoItem from '../components/TodoItem'
import TodoFooter from '../components/TodoFooter'

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

storiesOf('Header', module)
  .addDecorator(() => ({
    template: '<section class="todoapp"><story/></section>'
  }))
  .add('default', () => ({
    components: { TodoHeader },
    template: '<todo-header @addNewItem="addNewItem"></todo-header>',
    methods: {
      addNewItem: action('addNewItem')
    }
  }))

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

const footerHelper = {
  template: `<todo-footer :remaining="remaining"
  :visibility="visibility"
  :completedCount="completedCount"
  @changeFilter="changeFilter"
  @removeCompleted="removeCompleted"></todo-footer>`,
  methods: {
    changeFilter: action('changeFilter'),
    removeCompleted: action('removeCompleted')
  }
}
storiesOf('Footer', module)
  .addDecorator(() => ({
    template: '<section class="todoapp"><story/></section>'
  }))
  .add('no completedExists, none remaining', () => ({
    components: { TodoFooter },
    data () {
      return {
        remaining: 0,
        visibility: 'all',
        completedCount: 0
      }
    },
    ...footerHelper
  }))
  .add('one remaining', () => ({
    components: { TodoFooter },
    data () {
      return {
        remaining: 1,
        visibility: 'all',
        completedCount: 0
      }
    },
    ...footerHelper
  }))
  .add('multiple remaining', () => ({
    components: { TodoFooter },
    data () {
      return {
        remaining: 2,
        visibility: 'all',
        completedCount: 0
      }
    },
    ...footerHelper
  }))
  .add('completed exist', () => ({
    components: { TodoFooter },
    data () {
      return {
        remaining: 0,
        visibility: 'all',
        completedCount: 2
      }
    },
    ...footerHelper
  }))
  .add('set to Active', () => ({
    components: { TodoFooter },
    data () {
      return {
        remaining: 0,
        visibility: 'active',
        completedCount: 0
      }
    },
    ...footerHelper
  }))
  .add('set to Completed', () => ({
    components: { TodoFooter },
    data () {
      return {
        remaining: 0,
        visibility: 'completed',
        completedCount: 0
      }
    },
    ...footerHelper
  }))
/* eslint-enable react/react-in-jsx-scope */
