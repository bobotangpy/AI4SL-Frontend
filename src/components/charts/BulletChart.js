// BulletChart.jsx
import React from 'react';
import { ChartBullet, ChartThemeColor } from '@patternfly/react-charts';

function isValueWithinRange(value, min, max) {
    // Check if the value is within the specified range, considering cases where min or max might be undefined
    return (min === undefined || value >= min) && (max === undefined || value <= max);
  }

export default function BulletChart({ attribute, value, standardRange, valueRange }) {
  // Use optional chaining to avoid undefined errors
  value = value.toFixed(2)
  let valueMin = valueRange?.min;
  let valueMax = valueRange?.max;
  let standardMin = standardRange?.min;
  let standardMax = standardRange?.max ? standardRange?.max : valueRange?.max;



  return (
    <div>
      <ChartBullet
        ariaDesc="Storage capacity"
        ariaTitle="Bullet chart example"
        comparativeWarningMeasureData={[{ name: 'Upper Standard', y: standardMin}, { name: 'Lower Standard', y: standardMax }]}
        constrainToVisibleArea
        horizontal={false}
        labels={({ datum }) => `${datum.name}: ${datum.y}`}
        minDomain={{ y: valueMin }}
        maxDomain={{ y: valueMax }}
        name={attribute}
        primarySegmentedMeasureData={[{ name: 'Measure', y: value }]}
        qualitativeRangeData={[{ name: '< Standard', y: standardMin }, { name: 'Within Standard', y: standardMax }, { name: '> Standard', y: valueMax }]}
        themeColor={isValueWithinRange(value, standardMin, standardMax)?ChartThemeColor.green:ChartThemeColor.gold}
        padding={10}
      />
    </div>
  );
}
