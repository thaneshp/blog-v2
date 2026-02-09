import type { ReactNode } from 'react'

type CalloutVariant = 'info' | 'warning' | 'danger'

type CalloutProps = {
  type?: CalloutVariant
  children: ReactNode
}

const variantClass: Record<CalloutVariant, string> = {
  info: 'callout-info',
  warning: 'callout-warning',
  danger: 'callout-danger',
}

const Callout = ({ type = 'info', children }: CalloutProps) => {
  return <div className={`callout ${variantClass[type]}`}>{children}</div>
}

export default Callout
