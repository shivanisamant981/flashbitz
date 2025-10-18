import React from 'react'

export default function Button({label, onclick}) {
  return (
    <div>
        <Button onclick={onclick}
        className="h-full w-full bg-blue-500 ">
        {label}
        </Button>
    </div>
  )
}
