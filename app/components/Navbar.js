import hackstudio from "@/public/hackstudio.svg";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const navItems = [
  {
    href: "/",
    label: "À propos",
  },
  {
    href: "/cas",
    label: "Étude de cas",
  },
  {
    href: "/methode",
    label: "Methode",
  },
  {
    href: "/changelog",
    label: "Changelog",
  },
];

const navItemsSecondary = [
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/socials",
    label: "Social",
  },
  {
    href: "https://www.petithack.com",
    label: "Petit Hack",
  },
];

export default function Navbar() {
  return (
    <div className="drawer w-auto lg:drawer-open h-full ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side h-full ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-100 lg:w-[10.5rem] rounded-lg p-4 h-full flex flex-col ">
          <div className="flex w-full relative">
            <div>
              <Link href="/" className="flex gap-2">
                <Image
                  src={hackstudio.src}
                  alt="logo HackStudio"
                  height="24"
                  width="24"
                ></Image>
                <p className="text-white">HackStudio</p>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start gap-24">
            <ul className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href} className="p-0">
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1">
              {navItemsSecondary.map((item) => (
                <li key={item.href} className="p-0">
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
