import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../../global/mode-toggle";

interface Props {
  user?: null | User;
}

const Navigation = ({ user }: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image
          src={"/assets/logo.png"}
          width={200}
          height={200}
          alt="Pluraminati Logo"
        />
      </aside>
      <nav className="hidden md:block absolute text-xl left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8 ">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"}>Documentation</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <ModeToggle />
        <UserButton />
        <Link
          href={"/agency"}
          className="bg-blue-600 text-white p-2 px-4 rounded-md hover:bg-blue-700 "
        >
          Login
        </Link>
      </aside>
    </div>
  );
};

export default Navigation;
