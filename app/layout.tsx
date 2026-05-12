import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PDF Game Creator – Interactive Games Inside PDF Documents",
  description: "Embed interactive games and elements into PDF files for presentations and documents. Visual editor, drag-drop components, export playable PDFs."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="440be303-38e8-4eeb-95d8-5e4160b46f20"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
