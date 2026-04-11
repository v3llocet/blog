import type {PropsWithChildren, ReactNode} from 'react'

type TerminalFrameProps = PropsWithChildren<{
  title?: string
  prompt?: ReactNode
}>

export default function TerminalFrame({
  children,
  title = 'terminal',
  prompt = '$',
}: TerminalFrameProps) {
  return (
    <div className="terminal-frame">
      <div className="terminal-frame__header">
        <span className="terminal-frame__lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="terminal-frame__title">{title}</span>
      </div>
      <div className="terminal-frame__body">
        <div className="terminal-frame__promptLine">
          <span className="terminal-frame__prompt">{prompt}</span>
          <span className="terminal-frame__caret" aria-hidden="true" />
        </div>
        <div className="terminal-frame__content">{children}</div>
      </div>
    </div>
  )
}
