"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const NavMenu = (props: NavigationMenuProps) => {
  const { t } = useTranslation();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("nav.home")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("nav.projects")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("nav.blog")}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
