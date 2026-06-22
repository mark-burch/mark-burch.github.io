import ThemeToggle from "./theme-toggle";
import SocialLinks from "./social-links";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-end space-x-4">
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
