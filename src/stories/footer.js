import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import TodoFooter from '../components/TodoFooter'

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
  .add('no completed exists, none remaining', () => ({
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
