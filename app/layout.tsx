import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThinNavigation } from "@/components/thin-navigation"
import { SplineBackgroundFallback } from "@/components/spline-background-fallback"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Devanshu Chatterjee - AI Backend Developer",
  description:
    "Computer Science graduate specializing in AI Backend Development, Spring Boot, Cloud Engineering, and Microservices. AWS Certified with expertise in Java, Spring AI, and Cloud technologies.",
  keywords: "AI Backend Developer, Spring Boot, Java, Cloud Engineer, AI/ML, AWS, Docker, Microservices, Spring Cloud",
  authors: [{ name: "Devanshu Chatterjee" }],
  openGraph: {
    title: "Devanshu Chatterjee - AI Backend Developer",
    description:
      "Computer Science graduate specializing in AI Backend Development, Spring Boot, Cloud Engineering, and Microservices.",
    url: "https://devanshu.dev",
    siteName: "Devanshu Chatterjee Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devanshu Chatterjee - AI Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devanshu Chatterjee - AI Backend Developer",
    description:
      "Computer Science graduate specializing in AI Backend Development, Spring Boot, Cloud Engineering, and Microservices.",
    images: ["/og-image.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} ${inter.variable} bg-black overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen relative">
            {/* Spline 3D Background with Fallback */}
            <SplineBackgroundFallback />

            <ThinNavigation />
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
