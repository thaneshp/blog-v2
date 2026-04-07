import type { ReactNode } from 'react'

type CalloutVariant = 'info' | 'warning' | 'danger' | 'note'

type CalloutProps = {
  type?: CalloutVariant
  title?: string
  children: ReactNode
}

const variantClass: Record<CalloutVariant, string> = {
  info: 'callout-info',
  warning: 'callout-warning',
  danger: 'callout-danger',
  note: 'callout-note',
}

const variantTitle: Record<CalloutVariant, string> = {
  info: 'Info',
  warning: 'Warning',
  danger: 'Danger',
  note: 'Note',
}

const variantIcon: Record<CalloutVariant, ReactNode> = {
  info: (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-11.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm1.25 8.25a.75.75 0 0 0 0-1.5h-.5V9A.75.75 0 0 0 10 8.25H8.75a.75.75 0 0 0 0 1.5h.5v3.25h-.5a.75.75 0 0 0 0 1.5h2.5Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.72-1.36 3.486 0l6.518 11.59c.75 1.334-.213 2.986-1.742 2.986H3.48c-1.53 0-2.492-1.652-1.742-2.986l6.518-11.59ZM10 7.25a.75.75 0 0 0-.75.75v3.25a.75.75 0 0 0 1.5 0V8A.75.75 0 0 0 10 7.25Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.97 6.97a.75.75 0 0 0-1.06 1.06L8.94 9.06 7.91 10.09a.75.75 0 1 0 1.06 1.06l1.03-1.03 1.03 1.03a.75.75 0 0 0 1.06-1.06l-1.03-1.03 1.03-1.03a.75.75 0 1 0-1.06-1.06L10 8l-1.03-1.03Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  note: (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.5 2.75A1.75 1.75 0 0 0 3.75 4.5v11A1.75 1.75 0 0 0 5.5 17.25h9A1.75 1.75 0 0 0 16.25 15.5v-8.69a1.75 1.75 0 0 0-.513-1.237l-2.297-2.297a1.75 1.75 0 0 0-1.237-.513h-6.703Zm6.25 1.811c.163.043.315.128.435.248l2.256 2.256a.75.75 0 0 1 .159.235H12.5A.75.75 0 0 1 11.75 6.5V4.561ZM7 9.75A.75.75 0 0 1 7.75 9h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 9.75Zm0 3A.75.75 0 0 1 7.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 12.75Z"
        clipRule="evenodd"
      />
    </svg>
  ),
}

const Callout = ({ type = 'info', title, children }: CalloutProps) => {
  const resolvedTitle = title === undefined ? variantTitle[type] : title

  return (
    <div className={`callout ${variantClass[type]}`}>
      {resolvedTitle ? (
        <div className="callout-header">
          <span className="callout-icon">{variantIcon[type]}</span>
          <span className="callout-title">{resolvedTitle}</span>
        </div>
      ) : null}
      <div className="callout-content">{children}</div>
    </div>
  )
}

export default Callout
