"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

type CalendarDemoProps = {
  onSelect: (date: Date | undefined) => void
}
export function CalendarDemo({ _setSelectedDate }: CalendarDemoProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const handleDateSelect = (selectedDate: Date | undefined) => {
    console.log(selectedDate)
    setDate(selectedDate)
    _setSelectedDate(selectedDate) //function ni parent
  }

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleDateSelect}
      className="border rounded-md"
    />
  )
}
