import { useRouter } from "next/router";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { cx } from "@/lib/utils";

import avatar from "../public/avatar.png";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <header className="py-8 flex justify-between items-center">
      <Link href="/">
        <a className="font-bold">
          <span className="flex">
            <Image
              className="rounded-md"
              src={avatar}
              width={48}
              height={48}
              alt={siteConfig.siteName}
              priority
            />
          </span>
        </a>
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {siteConfig.nav.map((item, index) => {
            const isActive = item.href === pathname;
            return (
              <li key={index}>
                <Link href={item.href}>
                  <a
                    aria-current={isActive ? "page" : undefined}
                    className={cx(
                      "text-gray-500 hover:text-gray-900",
                      "dark:text-gray-400 dark:hover:text-gray-300"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
