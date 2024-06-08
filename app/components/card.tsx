"use client"

import {Bookmark, BookmarkCheck, Star} from "lucide-react";
import {useEffect, useState} from "react";
import {useFavorito} from '@/app/hooks/useFavorito';


interface CardProps {
    filme: Filme
}
export function Card({filme}: CardProps){

    const {carregarFavoritos, favorito, desfavoritar, favoritar} = useFavorito(filme)

    useEffect(() =>carregarFavoritos(),[])

    return(
        <div className="flex flex-col gap-2 items-center justify-between w-40 relative">
            {favorito?
            <BookmarkCheck onClick={desfavoritar} className="absolute right-2 top-4 cursor-pointer text-amber-400" />:
            <Bookmark onClick={favoritar} className="absolute right-2 top-4" />
            }
            <img className="rounded" src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} alt="Poster do filme"/>
            <span className="line-clamp-1">{filme.title}</span>
            <div className="flex items-center gap-2">
            <Star className="text-amber-400"/>
            <span className="opacity-80 gap-2 py-2 justify-between items-center">{filme.vote_average.toFixed(1)}</span>
            </div>
            <a href={"/Filme/" + filme.id} className="bg-blue-700 py-1 px-6 rounded">Detalhes</a>
        </div>
    )
}