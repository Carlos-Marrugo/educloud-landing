import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
  contributions: string[]
  stack: string
  github: string
  linkedin: string
}

const backendTeam: TeamMember[] = [
  {
    name: "Carlos",
    role: "Founder & Product Lead",
    image: "/images/team/carlos.jpg",
    description:
      "Creador de EduCloud. Impulsa la vision del producto, define la arquitectura general del sistema y coordina al equipo. Ademas de liderar, contribuye directamente en el desarrollo de los servicios core de la plataforma.",
    contributions: [
      "Vision del producto",
      "Instituciones",
      "Perfiles de usuario",
      "Matriculas",
      "Infraestructura",
    ],
    stack: "Spring Boot + JPA",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Brayan",
    role: "Backend Developer & DevOps",
    image: "/images/team/brayan.jpg",
    description:
      "Especialista en servicios de integracion y operaciones. Construye los servicios que mantienen la plataforma conectada: desde la puerta de entrada al sistema hasta notificaciones, control de acceso y asistencia.",
    contributions: [
      "API Gateway",
      "Notificaciones",
      "Acceso QR",
      "Disciplina",
      "Asistencia",
    ],
    stack: "NestJS + TypeORM",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Sehuanes",
    role: "Backend Developer & Security",
    image: "/images/team/sehuanes.jpg",
    description:
      "Responsable de la seguridad y autenticacion de toda la plataforma. Construye el sistema de roles y permisos, la generacion de documentos oficiales y el motor de reportes analiticos.",
    contributions: [
      "Autenticacion",
      "Documentos",
      "Reportes",
      "Portal de padres",
    ],
    stack: "NestJS + TypeORM",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Jesus",
    role: "Backend Developer & Core Systems",
    image: "/images/team/jesus.jpg",
    description:
      "Desarrolla los servicios academicos y financieros criticos del sistema: el motor de calificaciones, el procesamiento de pagos y las aulas virtuales con clases en vivo.",
    contributions: [
      "Academico",
      "Pagos",
      "Aulas virtuales",
      "Calificaciones",
    ],
    stack: "Spring Boot + JPA",
    github: "#",
    linkedin: "#",
  },
]

const frontendTeam: TeamMember[] = [
  {
    name: "Naiker Gomez",
    role: "Frontend Lead",
    image: "/images/team/naiker.jpg",
    description:
      "Lidera el equipo frontend y define la arquitectura de la interfaz de usuario. Responsable de la experiencia de usuario, el sistema de diseno y la integracion con los servicios backend.",
    contributions: [
      "Arquitectura frontend",
      "Sistema de diseno",
      "Integraciones API",
      "UX/UI",
    ],
    stack: "React + Next.js",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Andres Henao",
    role: "Frontend Developer",
    image: "/images/team/andres.jpg",
    description:
      "Desarrollador frontend enfocado en construir las interfaces de la plataforma. Trabaja en los modulos de usuario, dashboards y vistas academicas que conectan con los servicios del backend.",
    contributions: [
      "Modulos de usuario",
      "Dashboards",
      "Vistas academicas",
    ],
    stack: "React + Next.js",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Daimer",
    role: "Frontend Developer",
    image: "/images/team/daimer.jpg",
    description:
      "Desarrollador frontend que trabaja en los flujos transaccionales y operativos de la plataforma: matriculas, pagos, notificaciones y las interfaces de gestion institucional.",
    contributions: [
      "Flujos de matricula",
      "Interfaz de pagos",
      "Notificaciones UI",
    ],
    stack: "React + Next.js",
    github: "#",
    linkedin: "#",
  },
]

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl">
      <div className="flex flex-col items-center gap-5 p-7 sm:flex-row sm:items-start">
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
          <Image
            src={member.image}
            alt={`Foto de ${member.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-foreground">
            {member.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-primary">
            {member.role}
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            {member.description}
          </p>
        </div>
      </div>

      <div className="border-t border-border bg-secondary/30 px-7 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {member.contributions.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
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
  )
}

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
            Un equipo de 7 personas construyendo desde cero la plataforma
            educativa que universidades y colegios necesitan.
          </p>
        </div>

        {/* Backend Team */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Backend & Infraestructura
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {backendTeam.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Frontend Team */}
        <div className="mt-14">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Frontend
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frontendTeam.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
