import * as React from 'react'
import Image from 'next/image'

import getConfig from 'next/config'

export type Widget = {
  logoUri: string
  name: string
  summary: string
}

export interface WidgetCardProps {
  widget: any
}

/**
 * WidgetCard
 */
export function WidgetCard({ widget }: WidgetCardProps) {
  return (
    <div className="flex items-start flex-1 px-4 pt-6">
      {widget.logoUri ? (
        <Image src={widget.logoUri} width={100} height={100} alt={widget.name} />
      ) : null}
      <div>
        <h3 className="mt-2 text-lg font-semibold leading-tight">{widget.name}</h3>
        {widget.summary ? <p className="text-gray-500">{widget.summary}</p> : null}
      </div>
      <pre>{JSON.stringify(getConfig(), null, 2)}</pre>
    </div>
  )
}
