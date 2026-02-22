import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, School, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
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
          En desarrollo activo &mdash; v2.0
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          La plataforma educativa{" "}
          <span className="text-primary">en la nube</span>{" "}
          que tu institucion necesita
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          EduCloud digitaliza la gestion academica de universidades y colegios.
          Matriculas, calificaciones, asistencia, aulas virtuales, pagos y mucho
          mas &mdash; todo en un solo lugar.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#features">
              Explorar Producto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#team">Conocer al Equipo</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6">
            <GraduationCap className="h-8 w-8 text-primary" />
            <p className="text-2xl font-bold text-foreground">18</p>
            <p className="text-sm text-muted-foreground">Microservicios</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6">
            <School className="h-8 w-8 text-primary" />
            <p className="text-2xl font-bold text-foreground">Multi-Tenant</p>
            <p className="text-sm text-muted-foreground">Universidades y Colegios</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6">
            <BookOpen className="h-8 w-8 text-primary" />
            <p className="text-2xl font-bold text-foreground">22</p>
            <p className="text-sm text-muted-foreground">Repositorios</p>
          </div>
        </div>
      </div>
    </section>
  )
}
