
export default function Tooltip({tip, children}) {
  return (
    <div className="tooltip">
        {children}
        <span className="tooltip__text">
            {tip}
        </span>
    </div>
  )
}
