import React from 'react'

export default function Gradient() {
    return (
        <svg width="0" height="0">
              <linearGradient
                id="pink-orange-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#ED009C" offset="0%" />
                <stop stopColor="#FF514D" offset="100%" />
              </linearGradient>
        </svg>
    )
}