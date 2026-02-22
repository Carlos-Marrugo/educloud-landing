import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

const LINKEDIN_URL =
  "https://www.linkedin.com/company/educloud-system/?viewAsMember=true"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-2xl border border-border bg-card p-8 sm:rounded-3xl sm:p-12 md:p-16">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:mb-6 sm:h-14 sm:w-14">
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Hablemos sobre tu institucion
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            EduCloud esta en desarrollo activo. Si eres parte de una
            universidad o colegio y quieres conocer mas sobre lo que estamos
            construyendo, nos encantaria conversar.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 px-4 sm:mt-8 sm:flex-row sm:px-0">
            <Button size="lg" className="w-full sm:w-auto" asChild>
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
