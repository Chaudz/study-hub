import { clsx } from "clsx";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export default async function BaseLayout({ children }: Props) {
  return (
    <html lang="vi">
      <body className={clsx(inter.className, "antialiased")}>{children}</body>
    </html>
  );
}
