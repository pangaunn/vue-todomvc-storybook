/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import Todo from '../components/Todo'
// import App from '../App'

storiesOf('Todo', module).add('to Storybook', () => ({
  components: { Todo },
  data () {
    return {
      initTodos: [
        { title: 'xxxxxxxx', completed: false }
      ]
    }
  },
  template: '<Todo :initTodos="initTodos"></Todo>'
}))
/* eslint-enable react/react-in-jsx-scope */
