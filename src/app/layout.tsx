import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

<<<<<<< HEAD
import { TRPCReactProvider } from "~/trpc/react";

=======
>>>>>>> fb093b3063b3c997bf8080a9f5bf033dd6df0a18
export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
<<<<<<< HEAD
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
=======
      <body>{children}</body>
>>>>>>> fb093b3063b3c997bf8080a9f5bf033dd6df0a18
    </html>
  );
}
