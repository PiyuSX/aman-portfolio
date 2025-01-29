import React from "react"

interface RotatedTitleProps {
  title: string
}

export function RotatedTitle({ title }: RotatedTitleProps) {
  return (
    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block">
      <h2 className="text-[130px] font-bold tracking-wider text-white/10 whitespace-nowrap transform -rotate-90 origin-left">
        {title}
      </h2>
    </div>
  )
}

