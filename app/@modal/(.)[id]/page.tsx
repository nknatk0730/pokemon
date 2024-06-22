import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getPokemon } from "@/data/pokemon"
import Link from "next/link";

export default async function Page({
  params: {id}
}: {
  params: {id: string}
}) {
  const pokemon = await getPokemon(id);

  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{pokemon.name}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button asChild variant='outline'>
            <Link href='/'>Top</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
