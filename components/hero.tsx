import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, School } from "lucide-react"

const LINKEDIN_URL =
  "https://www.linkedin.com/company/educloud-system/?viewAsMember=true"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          En desarrollo activo
        </div>

        <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-7xl">
          Gestion educativa{" "}
          <span className="text-primary">simplificada</span>{" "}
          en la nube
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
          EduCloud System es la plataforma que ayuda a universidades y colegios
          a digitalizar toda su operacion academica: desde matriculas y
          calificaciones hasta pagos, asistencia y aulas virtuales.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground sm:mt-8 sm:gap-6 sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            Universidades
          </span>
          <span className="h-4 w-px bg-border" />
          <span className="inline-flex items-center gap-2">
            <School className="h-4 w-4 text-primary" />
            Colegios
          </span>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="#team">Conoce al equipo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
