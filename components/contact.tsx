import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-3xl border border-border bg-card p-12 md:p-16">
          <Cloud className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Llevemos tu institucion al siguiente nivel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            EduCloud esta en desarrollo activo. Si eres parte de una
            universidad o colegio y quieres ser parte de nuestro programa piloto,
            nos encantaria hablar contigo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="mailto:contacto@educloud.dev">
                Contactanos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
