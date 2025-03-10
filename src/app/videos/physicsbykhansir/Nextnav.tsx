import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import mediaJson from "./data/mediaJson.json";
export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NextNav() {
  return (
    <Navbar>
      <NavbarBrand>
        {mediaJson.subjects.map((subject, index) => (
          <Link key={index} href="/">
            <h1 className=" font-bold text-blue-600">{subject.name}</h1>
          </Link>
        ))}

        {/* <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <Link href="#">Login</Link> */}
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
