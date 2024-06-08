import {FilmIcon} from "lucide-react";
import Link from "next/link";

export function NavBar(){
    return (
        <nav className="flex justify-between bg-600 w-full p-4">
            <div className="flex items-center gap-2 ">
                <FilmIcon className="text-blue-100"/>
                <Link href="/"><h1 className="text-neutral-50 text-2xl font-bold uppercase ">from VHS</h1>
                </Link>
            </div>
            <Link href="/Sobre">Sobre</Link>
        </nav>
    )
}