import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image src="" alt="Photo by Drew Beamer" fill className="object-cover rounded-md" />
    </AspectRatio>
  )
}
