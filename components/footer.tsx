import { Cloud } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold text-foreground">
            Edu<span className="text-primary">Cloud</span>
          </span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Construido con Spring Boot, NestJS, Next.js y mucha dedicacion.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EduCloud. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
