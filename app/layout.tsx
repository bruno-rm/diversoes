import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
// import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "divers_es eletr_nicas",
  description: "VyFjpFvr2VQrCdRvrJ0ubw==",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="w-fit mx-auto">
          <div className="pt-2">
            <h1 className="text-7xl font-bold text-center">
              divers_es eletr_nicas
            </h1>
          </div>

          <div className="flex justify-between pt-4 text-2xl mx-6">
            <Link href="/ouca">
              <h2>ouça</h2>
            </Link>

            <Link href="/bio">
              <h2>bio</h2>
            </Link>

            <Link href="/contato">
              <h2>contato</h2>
            </Link>

            <Link href="/">
              <h2>home</h2>
            </Link>
          </div>
        </div>
        <div className=" bg-white">
          {children}
          {/* Vercel Analytics */}
          {/* <Analytics /> */}
        </div>
      </body>
    </html>
  );
}

{
  /* <div className="pt-2">
          <h1 className="text-7xl font-bold text-center">
            diverss_es eletr_nicas
          </h1>
        </div>
        <div className="flex justify-between lg:mx-99 pt-4 text-2xl">
          <div >
            <Link href="/ouca">
              <h2>ouça</h2>
            </Link>
          </div>
          <div>
            <Link href="/bio">
              <h2>bio</h2>
            </Link>
          </div>
          <div>
            {" "}
            <Link href="/contato">
              <h2>contato</h2>
            </Link>
          </div>
          <div>
            <Link href="/">
              <h2>home</h2>
            </Link>
          </div>
        </div>
        <div className=" bg-white ">
          {children}
          
        </div> 
        */
}
