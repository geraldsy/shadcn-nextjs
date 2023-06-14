import { LogOut, UserCog } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export function ProfileInfo() {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant="ghost">
          <Avatar className="h-7 w-7">
            <AvatarImage
              src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/279495511_10160059079478750_3057061644711264984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=pvYEXLU6jVkAX8RgREx&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfCqUPZIi-a7dg2-nApuqIFlTG2bEdWq-4IzSkqKUFyUig&oe=648E0437"
              alt="@shadcn"
            />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/279495511_10160059079478750_3057061644711264984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=pvYEXLU6jVkAX8RgREx&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfCqUPZIi-a7dg2-nApuqIFlTG2bEdWq-4IzSkqKUFyUig&oe=648E0437" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@therealgeraldsy</h4>
            <p className="text-sm">Super Administrator – created and maintained by NGP.</p>
          </div>
        </div>

        <div className="flex justify-around w-full">
          <div className="flex items-center pt-2">
            <Button variant="ghost">
              <UserCog className="w-4 h-4 mr-2 opacity-70" />
              <span className="text-xs text-muted-foreground">Edit Profile</span>
            </Button>
          </div>
          <div className="flex items-center pt-2">
            <Button variant="destructive">
              <LogOut className="w-4 h-4 mr-2 opacity-70 " />
              <span className="text-xs">Sign Out</span>
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
