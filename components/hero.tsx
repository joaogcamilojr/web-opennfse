"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, Code } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Emita suas notas fiscais de serviço <span className="text-primary">gratuitamente</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Nota Livre é um emissor de NFS-e gratuito, open-source e voltado para pequenas empresas e profissionais
              autônomos
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToForm} className="text-lg px-8">
              Quero testar na minha cidade
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8">
              <a href="https://github.com/nota-livre/nota-livre" target="_blank" rel="noopener noreferrer">
                <Code className="w-5 h-5 mr-2" />
                Ver no GitHub
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">100% Gratuito</h3>
              <p className="text-sm text-muted-foreground text-center">
                Sem taxas, sem mensalidades. Completamente gratuito para sempre.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Open Source</h3>
              <p className="text-sm text-muted-foreground text-center">
                Código aberto, transparente e construído pela comunidade.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Colaborativo</h3>
              <p className="text-sm text-muted-foreground text-center">
                Feito por desenvolvedores para desenvolvedores e empreendedores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
