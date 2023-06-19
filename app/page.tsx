"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Calculator, Mail } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { ComboboxDemo } from "@/components/ui/combobox-demo"
import { AccordionDemo } from "@/components/accordion-demo"
import { AlertDemo } from "@/components/alert-demo"
import { AlertDestructive } from "@/components/alert-destructive"
import { AlertDialogDemo } from "@/components/alert-dialog"
import CalculatorDemo from "@/components/calculator-demo"
import { CalendarDemo } from "@/components/calendar-demo"
import { CardDemo } from "@/components/card-demo"
import { CardWithForm } from "@/components/card-form"
import { CheckboxWithText } from "@/components/checkbox-text"
import { CollapsibleDemo } from "@/components/collapsible-demo"

export default function IndexPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const [calculatorSum, setCalculatorSum] = useState(0)

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  return (
    <section className="grid items-center gap-6 p-5 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          GOV.PH <br className="hidden sm:inline" />
          Dashboard
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste into your apps. Free.
          Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div>
        <ComboboxDemo />
        <CollapsibleDemo />
        <CheckboxWithText />
        <CardWithForm />
        <CardDemo />
        <CalculatorDemo _setCalculatorSum={setCalculatorSum} />
        <p>The value is {calculatorSum} </p>

        <CalendarDemo _setSelectedDate={setSelectedDate} />
        <p>Selected Date: {selectedDate?.toLocaleDateString()}</p>

        <AccordionDemo />
        <AlertDemo />
        <AlertDestructive />
        <AlertDialogDemo />
        <Badge variant="destructive">Test Badge</Badge>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Click here
        </Link>
        <Button>
          <Mail className="w-4 h-4 mr-2" /> Login with Email
        </Button>
      </div>
    </section>
  )
}
