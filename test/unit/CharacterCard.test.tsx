import { CharacterCard } from "@/ui/components/characters/character-card/CharacterCard";
import { render, screen } from "@testing-library/react";

describe("Character Card", () => {
  const characterStub = {
    id: 1,
    name: "Spiderman",
    image: "http://www.marvel.com/spiderman-picture.jpg",
  };

  test("should display character name, image and favorite button", () => {
    render(<CharacterCard character={characterStub} />);

    const characterImage = screen.getByAltText(/spiderman image/i);
    const characterName = screen.getByText(/spiderman/i);
    const favoriteButton = screen.getByRole("button", {
      name: /add to favorite/i,
    });

    expect(characterImage).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  });
});
