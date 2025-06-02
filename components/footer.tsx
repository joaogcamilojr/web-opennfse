import { Button } from "@/components/ui/button"
import { Github, Heart, Book, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NL</span>
              </div>
              <span className="font-bold text-lg">Nota Livre</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Emissor de NFS-e gratuito e open-source para pequenas empresas e profissionais autônomos.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Projeto</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="https://github.com/nota-livre/nota-livre" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Repositório
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href="https://github.com/nota-livre/nota-livre/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Como contribuir
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Documentação</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="https://docs.notalivre.org" target="_blank" rel="noopener noreferrer">
                  <Book className="w-4 h-4 mr-2" />
                  Documentação técnica
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="https://docs.notalivre.org/api" target="_blank" rel="noopener noreferrer">
                  <Book className="w-4 h-4 mr-2" />
                  API Reference
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Suporte</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="mailto:contato@notalivre.org">
                  <Mail className="w-4 h-4 mr-2" />
                  contato@notalivre.org
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href="https://github.com/nota-livre/nota-livre/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Discussões
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Nota Livre. Projeto open-source mantido pela comunidade.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/nota-livre/nota-livre/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Licença MIT
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/nota-livre/nota-livre/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código de Conduta
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
