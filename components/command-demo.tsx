import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDemo() {
  return (
    <Command className="ml-10 border rounded-lg">
      <CommandInput placeholder="Type a command or search..." />
    </Command>
  )
}
