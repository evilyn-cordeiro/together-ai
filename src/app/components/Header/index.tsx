import Link from "next/link";
import ThemeToggle from "../Toggle";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-header fixed w-full top-0 left-0 z-10 transition-all duration-300 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/logo-default.svg"
                alt="Logo"
                width={150}
                height={100}
              />
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
