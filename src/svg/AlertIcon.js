import * as React from "react"

export default function AlertIcon({width, height}) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2.4a9.6 9.6 0 100 19.2 9.6 9.6 0 000-19.2zm0 7.2a1.2 1.2 0 011.2 1.2V18a1.2 1.2 0 01-2.4 0v-7.2A1.2 1.2 0 0112 9.6zm0-4.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        fill="#FFBC25"
      />
    </svg>
  )
}