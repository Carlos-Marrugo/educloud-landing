import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Carlos",
    role: "Founder & Product Architect",
    image: "/images/team/carlos.jpg",
    description:
      "Creador de la vision de EduCloud. Lidera la arquitectura del producto, la infraestructura cloud y el diseno de los servicios core del sistema. Responsable de Institutions, User Profile, Enrollment y la infraestructura completa.",
    services: ["Institutions", "User Profile", "University Enrollment", "School Enrollment", "Infraestructura"],
    stack: "Spring Boot",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Brayan",
    role: "Backend Developer & DevOps",
    image: "/images/team/brayan.jpg",
    description:
      "Especialista en NestJS y servicios de integracion. Construye los servicios de comunicacion, acceso y control operativo que mantienen la plataforma conectada en tiempo real.",
    services: ["API Gateway", "Notifications", "QR Access", "Discipline", "Attendance"],
    stack: "NestJS",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Sehuanes",
    role: "Backend Developer & Security",
    image: "/images/team/sehuanes.jpg",
    description:
      "Experto en autenticacion, seguridad y generacion de documentos. Disenha el sistema RBAC, la integracion con Keycloak y el motor de reportes analiticos de la plataforma.",
    services: ["Auth Service", "Document Service", "Reporting", "Parents Service"],
    stack: "NestJS",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Jesus",
    role: "Backend Developer & Core Systems",
    image: "/images/team/jesus.jpg",
    description:
      "Responsable de los servicios academicos y financieros del sistema. Construye las funcionalidades criticas de pagos, aulas virtuales y el motor de calificaciones.",
    services: ["Academic", "Payments", "Virtual Classroom", "Grades"],
    stack: "Spring Boot",
    github: "#",
    linkedin: "#",
  },
]

export function Team() {
  return (
    <section id="team" className="bg-secondary/50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Equipo
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Las personas detras de EduCloud
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Un equipo de 4 desarrolladores construyendo la plataforma educativa
            del futuro con pasion y arquitectura limpia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl"
            >
              <div className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:items-start">
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-border bg-secondary/30 px-8 py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {member.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        member.stack === "NestJS"
                          ? "bg-accent/15 text-accent"
                          : "bg-primary/15 text-primary"
                      }`}
                    >
                      {member.stack}
                    </span>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
