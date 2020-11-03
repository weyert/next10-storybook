import * as React from 'react'
import { WidgetCard } from './WidgetCard'

export default {
  title: 'WidgetCard',
  argTypes: { onApplicationOpen: { action: 'clicked' } },
}

const MOCK_WIDGET = {
  id: '705d9591-a3f0-482b-a88a-26ce12799c23',
  name: 'Widget Name',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan. Orci phasellus egestas tellus rutrum tellus. Interdum velit laoreet id donec ultrices tincidunt. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Mauris a diam maecenas sed enim ut sem.',
  logoUri:
    'https://images.unsplash.com/photo-1575379972263-2f15a5c78236?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
}

export const blankSlateWidgetCard = () => <WidgetCard widget={{}} />
export const widgetCard = () => <WidgetCard widget={MOCK_WIDGET} />
