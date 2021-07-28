import React from 'react'
import { TimelineItems } from './TimelineItems'

const Timeline = (props) => {
  return (
    <div className="timeline-row text-center">
      <svg width="1000" height="130">
        <line
          x1="0"
          y1="70"
          x2="1800"
          y2="70"
          stroke="black"
          stroke-width="1"
        ></line>

        {TimelineItems.map((item, index) => {
          return (
            <>
              <circle
                cx={item.xAxis}
                cy="70"
                r="10"
                stroke="#f8f9fa"
                stroke-width="6"
                fill="#546DF5"
              ></circle>

              <text text-anchor="middle" x={item.xAxis} y="110" fill="black">
                {item.period}
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x={item.xAxis}
                y="10"
                fill="#808080"
              >
                {item.firm}
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x={item.xAxis}
                y="30"
                fill="black"
              >
                {item.role}
              </text>
              <text
                font-size="13"
                text-anchor="middle"
                x={item.xAxis}
                y="50"
                fill="black"
              >
                {item.role_add}
              </text>
            </>
          )
        })}
      </svg>
    </div>
  )
}

export default Timeline
