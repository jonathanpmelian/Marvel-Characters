import { TopBar } from "@/ui/components/topbar/TopBar";
import { render, screen } from "@testing-library/react";

describe("TopBar component", () => {
  test("display the marvel logo", () => {
    render(<TopBar />);

    const marvelLogo = screen.getByRole("img", { name: /marvel logo/i });

    expect(marvelLogo).toBeInTheDocument();
  });

  test("display the favorite link", () => {
    render(<TopBar />);

    const favoriteLink = screen.getByLabelText(/link to favorite page/i);

    expect(favoriteLink).toBeInTheDocument();
  });
});
