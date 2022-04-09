
export default function Tooltip({className="", tip="tip", children, pos="right"}) {
  return (
    <div className={"tooltip " + className}>
        {children}
        <span className={"tooltip__text " + pos}>
          {tip}
        </span>
    </div>
  )
}
