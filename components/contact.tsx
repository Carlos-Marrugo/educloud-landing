import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

const LINKEDIN_URL =
  "https://www.linkedin.com/company/educloud-system/?viewAsMember=true"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-3xl border border-border bg-card p-12 md:p-16">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageCircle className="h-7 w-7" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hablemos sobre tu institucion
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            EduCloud esta en desarrollo activo. Si eres parte de una
            universidad o colegio y quieres conocer mas sobre lo que estamos
            construyendo, nos encantaria conversar.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                Solicitar Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
