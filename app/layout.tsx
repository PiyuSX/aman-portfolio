import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/Sidebar"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { CustomLoader } from "@/components/CustomLoader"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aman Shah | jrAman | MERN Stack & Next.js Developer",
  description:
    "Portfolio of Aman Shah (jrAman), a skilled MERN Stack and Next.js Developer from Nepal. Arniko coder specializing in web development.",
  keywords: [
    "Aman Shah",
    "jrAman",
    "Aman",
    "Aman Coder",
    "Aman shah from Nepal",
    "Aman shah from arniko",
    "Arniko",
    "Arniko coder",
    "MERN Stack",
    "Next.js",
    "Web Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amanshah.com",
    site_name: "Aman Shah Portfolio",
    title: "Aman Shah | jrAman | MERN Stack & Next.js Developer",
    description:
      "Portfolio of Aman Shah (jrAman), a skilled MERN Stack and Next.js Developer from Nepal. Arniko coder specializing in web development.",
    images: [
      {
        url: "https://www.amanshah.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aman Shah - Web Developer",
      },
    ],
  },
  twitter: {
    handle: "@jrAman",
    site: "@jrAman",
    cardType: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen w-full bg-background text-foreground">
            <CustomLoader />
            <Sidebar />
            <main className="w-full md:ml-20">{children}</main>
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

