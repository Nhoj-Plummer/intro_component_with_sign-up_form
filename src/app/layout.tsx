import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intro_component_with_sign-up_form",
  description: "FrontEnd Mentor Challenge Completed by Nhoj Plummer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
