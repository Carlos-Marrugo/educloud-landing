import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  github: string
  linkedin: string
  description: string
  focus: string[]
  stack: string
}

const team: TeamMember[] = [
  {
    name: "Carlos",
    role: "Founder & Product Lead",
    image: "/images/team/carlos.jpg",
    github: "#",
    linkedin: "#",
    description:
      "Creador de EduCloud System. Impulsa la vision del producto, define la arquitectura general y coordina a todo el equipo. Ademas de liderar, contribuye directamente en el desarrollo de los servicios core de la plataforma.",
    focus: [
      "Vision del producto",
      "Instituciones",
      "Perfiles de usuario",
      "Matriculas",
      "Infraestructura",
    ],
    stack: "Spring Boot, JPA, PostgreSQL",
  },
  {
    name: "Brayan",
    role: "Backend Developer",
    image: "/images/team/brayan.jpg",
    github: "#",
    linkedin: "#",
    description:
      "Especialista en servicios de integracion y operaciones. Construye los servicios que mantienen la plataforma conectada: desde la puerta de entrada al sistema hasta notificaciones, control de acceso y asistencia.",
    focus: [
      "API Gateway",
      "Notificaciones",
      "Control de acceso QR",
      "Disciplina y convivencia",
      "Asistencia",
    ],
    stack: "NestJS, TypeORM, PostgreSQL",
  },
  {
    name: "Sehuanes",
    role: "Backend Developer",
    image: "/images/team/sehuanes.jpg",
    github: "#",
    linkedin: "#",
    description:
      "Responsable de la seguridad y autenticacion de toda la plataforma. Construye el sistema de roles y permisos, la generacion de documentos oficiales y el motor de reportes analiticos.",
    focus: [
      "Autenticacion y seguridad",
      "Documentos oficiales",
      "Reportes analiticos",
      "Portal de padres",
    ],
    stack: "NestJS, TypeORM, PostgreSQL",
  },
  {
    name: "Jesus",
    role: "Backend Developer",
    image: "/images/team/jesus.jpg",
    github: "#",
    linkedin: "#",
    description:
      "Desarrolla los servicios academicos y financieros criticos del sistema: el motor de calificaciones, el procesamiento de pagos y las aulas virtuales con clases en vivo.",
    focus: [
      "Modulo academico",
      "Procesamiento de pagos",
      "Aulas virtuales",
      "Motor de calificaciones",
    ],
    stack: "Spring Boot, JPA, PostgreSQL",
  },
  {
    name: "Naiker Gomez",
    role: "Frontend Lead",
    image: "/images/team/naiker.jpg",
    github: "#",
    linkedin: "#",
    description:
      "Lidera el equipo frontend y define la arquitectura de la interfaz de usuario. Responsable de la experiencia de usuario, el sistema de diseno y la integracion con todos los servicios del backend.",
    focus: [
      "Arquitectura frontend",
      "Sistema de diseno",
      "Integraciones API",
      "UX / UI",
    ],
    stack: "React, Next.js, TypeScript",
  },
  {
    name: "Andres Henao",
    role: "Frontend Developer",
    image: "/images/team/andres.jpg",
    github: "#",
    linkedin: "#",
    description:
      "Desarrollador frontend enfocado en construir las interfaces de la plataforma. Trabaja en los modulos de usuario, dashboards y las vistas academicas que conectan con los servicios del backend.",
    focus: [
      "Modulos de usuario",
      "Dashboards",
      "Vistas academicas",
    ],
    stack: "React, Next.js, TypeScript",
  },
  {
    name: "Daimer",
    role: "Frontend Developer",
    image: "/images/team/daimer.jpg",
    github: "#",
    linkedin: "#",
    description:
      "Desarrollador frontend que trabaja en los flujos transaccionales y operativos: matriculas, pagos, notificaciones y las interfaces de gestion institucional.",
    focus: [
      "Flujos de matricula",
      "Interfaz de pagos",
      "Notificaciones UI",
    ],
    stack: "React, Next.js, TypeScript",
  },
]

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative mb-3 h-28 w-28 overflow-hidden rounded-2xl border-2 border-border transition-all group-hover:border-primary/40 group-hover:shadow-lg sm:mb-4 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-48 lg:w-48">
        <Image
          src={member.image}
          alt={`Foto de ${member.name}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-base font-bold text-foreground sm:text-lg">{member.name}</h3>
      <p className="mt-0.5 text-xs font-medium text-primary sm:text-sm">{member.role}</p>
      <div className="mt-2.5 flex items-center gap-2 sm:mt-3 sm:gap-3">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:h-9 sm:w-9"
          aria-label={`GitHub de ${member.name}`}
        >
          <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:h-9 sm:w-9"
          aria-label={`LinkedIn de ${member.name}`}
        >
          <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      </div>
    </div>
  )
}

function ContributionCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md sm:flex-row sm:gap-5 sm:p-5">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl sm:h-14 sm:w-14">
        <Image
          src={member.image}
          alt={`Foto de ${member.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-semibold text-foreground">{member.name}</h4>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
            {member.role}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {member.description}
        </p>
        <div className="mt-3 flex flex-wrap items-start gap-1.5 sm:gap-2">
          {member.focus.map((item) => (
            <span
              key={item}
              className="inline-flex rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground sm:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground sm:text-xs">
          {member.stack}
        </p>
      </div>
    </div>
  )
}

export function Team() {
  return (
    <>
      {/* Team overview section */}
      <section id="team" className="bg-secondary/50 py-16 px-4 sm:py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Equipo
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Las personas detras de EduCloud
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              Un equipo de 7 personas construyendo desde cero la plataforma
              educativa que universidades y colegios necesitan.
            </p>
          </div>

          {/* First row: 4 backend members */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-16 sm:gap-10 md:grid-cols-4">
            {team.slice(0, 4).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Second row: 3 frontend members, centered */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:mt-10 sm:gap-10 md:grid-cols-3 md:max-w-3xl md:mx-auto">
            {team.slice(4).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* What each person works on */}
      <section id="contributions" className="py-16 px-4 sm:py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contribuciones
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              En que se enfoca cada quien
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              Cada miembro del equipo lidera areas especificas del producto.
              Asi es como esta distribuido el trabajo.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:mt-14 sm:gap-4">
            {team.map((member) => (
              <ContributionCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
