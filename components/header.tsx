"use client"

import { Button } from "@/components/ui/button"
import { Github, Star, Rocket } from "lucide-react"

export function Header() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">NL</span>
          </div>
          <span className="font-bold text-xl">Nota Livre</span>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/nota-livre/nota-livre" target="_blank" rel="noopener noreferrer">
              <Star className="w-4 h-4 mr-2" />
              Dê uma estrela no GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/nota-livre/nota-livre/contribute" target="_blank" rel="noopener noreferrer">
              <Rocket className="w-4 h-4 mr-2" />
              Contribua com o projeto
            </a>
          </Button>
          <Button onClick={scrollToForm} size="sm">
            Solicitar cidade
          </Button>
        </nav>

        <Button variant="outline" className="md:hidden" onClick={scrollToForm}>
          <Github className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
