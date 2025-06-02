"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Plus, Zap, Heart } from "lucide-react"

export function HowItWorks() {
  const supportedCities = [
    { name: "São Paulo", state: "SP", status: "Ativo" },
    { name: "Rio de Janeiro", state: "RJ", status: "Ativo" },
    { name: "Belo Horizonte", state: "MG", status: "Em desenvolvimento" },
    { name: "Brasília", state: "DF", status: "Em desenvolvimento" },
  ]

  const scrollToForm = () => {
    const formSection = document.getElementById("form-section")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Como funciona</h2>
            <p className="text-lg text-muted-foreground">
              Cada cidade possui suas próprias especificações para emissão de NFS-e. Nosso sistema se integra com as
              APIs municipais de forma padronizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Cidades Suportadas
                </CardTitle>
                <CardDescription>Integração ativa ou em desenvolvimento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {supportedCities.map((city, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">{city.name}</p>
                      <p className="text-sm text-muted-foreground">{city.state}</p>
                    </div>
                    <Badge variant={city.status === "Ativo" ? "default" : "secondary"}>{city.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" />
                  Adicione sua cidade
                </CardTitle>
                <CardDescription>Não encontrou sua cidade na lista?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm">Análise técnica da API municipal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-sm">Desenvolvimento colaborativo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Integração e testes locais</span>
                  </div>
                </div>
                <Button onClick={scrollToForm} className="w-full">
                  Solicitar minha cidade
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Se sua cidade ainda não está na lista, ajude-nos a adicioná-la
            </h3>
            <p className="text-muted-foreground mb-4">
              Cada nova integração fortalece o ecossistema e ajuda mais empreendedores brasileiros
            </p>
            <Button variant="outline" onClick={scrollToForm}>
              Quero contribuir
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
