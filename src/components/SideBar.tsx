import { useState } from "react";
import { Button } from "./Button"
import { GenreResponseProps } from '../App';

interface SidebarProps {
  genres: GenreResponseProps[];
  selectedGenre(id: number): void;
}

export function SideBar({ genres, selectedGenre }: SidebarProps) {

  const [selectedGenreId, setSelectedGenreId ] = useState<number>(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    selectedGenre(id);
  }
  
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

    </nav>
  )
}