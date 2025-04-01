import * as React from "react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export function OSChoiceButton() {
  return (
    <div>
      <Card className="w-[670px] shadow-lg rounded-lg bg-transparent-gray">
        <CardContent className="flex justify-center space-x-4">
          <Button asChild className="h-40 w-70 bg-transparent-gray shadow-xl">
            <Link href="/macOS-linux">Johana GABA</Link>
        </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Need to handle colors (tailwind/CSS)
