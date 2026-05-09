"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Rocket, Github } from "lucide-react"

const LINKEDIN_URL = "https://www.linkedin.com/company/educloud-system/?viewAsMember=true"
const GITHUB_ORG_URL = "https://github.com/fluedu"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card/50 p-8 sm:rounded-3xl sm:p-12 md:p-16 relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-64 w-64 animate-pulse rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 animate-pulse rounded-full bg-accent/5 blur-3xl" style={{ animationDelay: "1s" }} />
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:mb-6 sm:h-16 sm:w-16"
          >
            <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.div>

          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Hablemos sobre tu colegio
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Fluedu esta en desarrollo activo y la demo llegara pronto. Si eres
            parte de un colegio y quieres conocer mas sobre lo que estamos
            construyendo, nos encantaria conversar.
          </p>

          {/* Demo coming soon badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Rocket className="h-4 w-4" />
            <span className="font-medium">Demo llegando pronto</span>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 px-4 sm:mt-8 sm:flex-row sm:gap-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                Contactanos en LinkedIn
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Developer CTA */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              {"Eres desarrollador?"}
            </p>
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>Sigue nuestra organizacion en GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
