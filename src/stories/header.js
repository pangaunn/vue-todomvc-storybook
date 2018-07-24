import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import TodoHeader from '../components/TodoHeader'

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
