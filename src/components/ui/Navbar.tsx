import { useContext } from "react";
import Link from "next/link";
import { UIContext } from "@/context/ui";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

export interface PropsNavItems {
  id: number;
  name: string;
  href: string;
}

export const Navbar = () => {
  const { sidemenuOpen, toggleSidemenu } = useContext(UIContext);

  const navItems: PropsNavItems[] = [
    {
      id: 1,
      name: "Recetas",
      href: "/recipe",
    },
    {
      id: 2,
      name: "Agrega",
      href: "/create-recipes",
    },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 text-background-three mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight">JIR</span>
          <span className="font-semibold text-xl tracking-tight text-primary-ligth">
            ARM
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleSidemenu(!sidemenuOpen)}
          className="flex items-center px-3 py-2 border rounded text-background-three hover:text-primary-ligth"
        >
          {sidemenuOpen ? (
            <CgClose className="w-6 h-6" />
          ) : (
            <CgMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          sidemenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          {navItems.map(({ id, name, href }) => (
            <Link
              key={id}
              href={href}
              className="block mt-4 lg:inline-block lg:mt-0 text-background-three hover:text-background-two mr-4"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
