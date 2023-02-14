import React from "react"

export const returnIconStep = ({ type, urlIcon, highlightColor }: { type: string, urlIcon?: string, highlightColor?: string }) => {
  switch (type) {
    case 'start':
      return (
        <svg
          width={20}
          height="100%"
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={10} cy={10} r={10} fill="#FF6549" />
          <line
            x1={10}
            y1={10}
            x2={10}
            y2="100%"
            stroke="#FF6549"
            strokeDasharray="5 2"
          />
        </svg>
      )
      break;

    case 'icon':
      return (
        <svg
          width={20}
          height="100%"
          viewBox="0 0 20 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1={10}
            y1='-10%'
            x2={10}
            y2="60%"
            stroke="#FF6549" 
            strokeDasharray="5 2"
          />
          <circle cx={10} cy={40} r={10} fill="#FF6549" />
          <image x={4} y={37} href={urlIcon} width="12" />

          <line
            x1={10}
            y1="50%"
            x2={10}
            y2="110%"
            stroke="#FF6549"
            strokeDasharray="5 2"
          />
        </svg>
      )
    case 'day':
      return (
        <svg
          width={20}
          height="100%"
          viewBox="0 0 20 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           <line
            x1={10}
            y1={0}
            x2={10}
            y2="110%"
            stroke="#FF6549"
            strokeDasharray="5 2"
          />
        </svg>
      )
    case 'card':
      return (
        <svg
          width={20}
          height={80}
          viewBox="0 0 20 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={10} cy={40} r={10} fill={highlightColor ? highlightColor :"#FF6549"} />
          <image x={4} y={34} href={urlIcon} width="12" />

        </svg>
      )
    case 'end':
      return (
        <svg
          width={20}
          height={80}
          viewBox="0 0 20 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           <line
            x1={10}
            y1={0}
            x2={10}
            y2="50%"
            stroke="#FF6549"
            strokeDasharray="5 2"
          />
          <circle cx={10} cy={40} r={10} fill={highlightColor ? highlightColor :"#FF6549"} />
          <image x={3} y={36} href={urlIcon} width="13" />

        </svg>
      )
    default:
      return (

        <svg
          width={20}
          height={80}
          viewBox="0 0 20 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1={10}
            y1={0}
            x2={10}
            y2={40}
            stroke="#FF6549"
            strokeDasharray="5 2"
          />
          <circle cx={10} cy={40} r={10} fill="#FF6549" />
          <line
            x1={10}
            y1={40}
            x2={10}
            y2={80}
            stroke="#FF6549"
            strokeDasharray="5 2"
          />
        </svg>
      )
  }
}