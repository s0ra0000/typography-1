"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const currentPath = usePathname();
  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + "/")
      ? "border-[#0378f6]"
      : "border-white";
  };
  return (
    <nav className="w-full flex items-center justify-center bg-white drop-shadow-sm">
      <div className="w-[1200px]">
        <ul className="flex items-center justify-around ">
          <Link href="/">
            <li className={isActive("/") + ` border-b-2 pb-3 pt-4`}>
              Амжилт гэж юу?
            </li>
          </Link>
          <Link href="/behavior">
            <li className={isActive("/behavior") + ` border-b-2 pb-3 pt-4`}>
              Хүчирхэг таван шинж
            </li>
          </Link>
          <Link href="/work">
            <li className={isActive("/work") + ` border-b-2 pb-3 pt-4`}>
              Би хэрхэн ажилдаг вэ?
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
