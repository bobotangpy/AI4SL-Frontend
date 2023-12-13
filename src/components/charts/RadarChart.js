import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale
} from 'chart.js';

import { Radar } from 'react-chartjs-2'

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale
)

export default function RadarChart ({}) {
    return (
        <div style={{width: '500px', padding: '20px'}}>
            <Radar
                  options={{
                    scales: {
                      radialLinear: {
                        angleLines: {
                          display: false, // Hide radial lines
                        },
                        suggestedMin: 0, // Minimum value for the scale
                        suggestedMax: 10, // Maximum value for the scale
                        pointLabels: {
                          display: false
                        },
                      },
                    },
                  }}
                  data={{
                    labels: ["pH_H2O", "OC", "EC", "CaCO3", "P", "N", "K"],
                    datasets: [{
                      label: ['Weekdays'],
                      data: [2,2,3,4,5, 6,7],
                      backgroundColor: 'aqua',
                      borderColor: 'black'
                    }]
                  }}
            ></Radar>

        </div>
    ) 
}