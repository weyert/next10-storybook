import { Widget, WidgetCard } from '@/components/WidgetCard'
import * as React from 'react'

const DEFAULT_WIDGET: Widget = {
  name: 'Widget',
  summary: 'Summary of the widget',
  logoUri:
    'https://images.unsplash.com/photo-1575379972263-2f15a5c78236?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
}

function IndexPage() {
  return (
    <div>
      <h1>Index Page</h1>
      <main>
        <WidgetCard widget={DEFAULT_WIDGET} />
      </main>
    </div>
  )
}

export default IndexPage
