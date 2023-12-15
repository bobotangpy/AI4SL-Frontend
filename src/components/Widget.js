import "../styles/widget.scss";

export default function Widget({ title, content, size, styleSetting }) {
  return (
    <div className={size === "half" ? "col-6" : "col-12"}>
      <div className="widget">
        <div className="border-0">
          <h4 className="header">{title}</h4>
          <div
            className="body content"
            style={
              styleSetting === "noWrap"
                ? { flexDirection: "row", flexWrap: "nowrap" }
                : {}
            }
          >
            {content}
          </div>
        </div>
      </div>
      <div className="widget-background"></div>
    </div>
  );
}
