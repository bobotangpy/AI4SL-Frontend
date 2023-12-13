import BulletChart from "./BulletChart";

export default function BulletChartList({
  category,
  data,
  standardRanges,
  valueRanges,
}) {
  function render() {
    return Object.keys(data).map((attribute) => {
      const attributeData = data[attribute];
      if (
        attributeData?.info?.category === category &&
        attributeData.hasOwnProperty("out_of_standard")
      ) {
        const { info, value, out_of_standard } = attributeData;
        const standardRange = standardRanges[attribute];
        const valueRange = valueRanges[attribute];
        return (
          <div style={{ textAlign: "center" }}>
            <div>{attribute}</div>
            <BulletChart
              key={value}
              attribute={attribute}
              value={value}
              standardRange={standardRange}
              valueRange={valueRange}
            />
            <div>{value.toFixed(2)}</div>
            <div>{info.unit}</div>
          </div>
        );
      }
      return null;
    });
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>{render()}</div>
  );
}
