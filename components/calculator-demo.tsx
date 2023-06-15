"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CalculatorDemo({ _setCalculatorSum }) {
  const [inputValue, setInputValue] = React.useState(0)

  React.useEffect(() => {
    handleInputChange()
  }, [inputValue])

  const handleSum = () => {
    _setCalculatorSum(inputValue) //function ni parent
  }

  const handleInputChange = () => {
    _setCalculatorSum(inputValue + 5)
  }

  return (
    <div className="max-w-sm m-5">
      <Label>Input a number, I will add 5</Label>
      <Input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Input a number, I will add 5"
      />
      <Button onClick={handleSum}>Add 5</Button>
    </div>
  )
}

export default CalculatorDemo
