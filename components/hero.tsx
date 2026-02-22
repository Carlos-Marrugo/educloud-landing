import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="EduCloud System logo"
            width={120}
            height={120}
            className="h-28 w-28 object-contain md:h-32 md:w-32"
            priority
          />
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Gestion educativa{" "}
          <span className="text-primary">simplificada</span>{" "}
          en la nube
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          EduCloud System es la plataforma que ayuda a universidades y colegios
          a digitalizar toda su operacion academica: desde matriculas y
          calificaciones hasta pagos, asistencia y aulas virtuales.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#features">
              Conoce el producto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#team">Nuestro equipo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
