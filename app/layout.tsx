import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nota Livre - Emissor de NFS-e Gratuito e Open Source",
  description:
    "Emita suas notas fiscais de serviço gratuitamente. Nota Livre é um emissor de NFS-e gratuito, open-source e voltado para pequenas empresas e profissionais autônomos.",
  keywords: "NFS-e, nota fiscal, serviço, gratuito, open source, empreendedor, autônomo",
  authors: [{ name: "Comunidade Nota Livre" }],
  openGraph: {
    title: "Nota Livre - Emissor de NFS-e Gratuito",
    description: "Emita suas notas fiscais de serviço gratuitamente com nossa plataforma open-source",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
