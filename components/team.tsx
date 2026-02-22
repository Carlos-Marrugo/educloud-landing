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
    name: "Carlos Marrugo",
    role: "Founder & Product Lead",
    image: "/images/team/carlos.jpg",
    github: "https://github.com/Carlos-Marrugo",
    linkedin: "https://www.linkedin.com/in/carlos-marrugo-701261283/",
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
    name: "Brayan Garcia",
    role: "Backend Developer",
    image: "/images/team/brayan.jpg",
    github: "https://github.com/brayannu123",
    linkedin: "https://www.linkedin.com/in/brayan-garcianu%C3%B1ez-960b45351/",
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
    name: "Camilo Sehuanes",
    role: "Backend Developer",
    image: "/images/team/sehuanes.jpg",
    github: "https://github.com/Camilo-ASC",
    linkedin: "https://www.linkedin.com/in/camilo-asc/",
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
    name: "Jesus Castro",
    role: "Backend Developer",
    image: "/images/team/jesus.jpg",
    github: "https://github.com/Jesus-Castro10",
    linkedin: "https://www.linkedin.com/in/jesus-castro-rodriguez",
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
    name: "Naiker Gòmez",
    role: "Frontend Lead",
    image: "/images/team/naiker.jpg",
    github: "https://github.com/Naiker12",
    linkedin: "https://www.linkedin.com/in/naiker-gomez-caraballo-a97449293/",
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
    name: "Andrès Henao",
    role: "Frontend Developer",
    image: "/images/team/andres.jpg",
    github: "https://github.com/xMajestyCz",
    linkedin: "https://www.linkedin.com/in/andres-henao-cz/",
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
    name: "Daimer Saltaren",
    role: "Frontend Developer",
    image: "/images/team/daimer.jpg",
    github: "https://github.com/Dsaltaren27",
    linkedin: "https://www.linkedin.com/in/daimer-a-saltar%C3%A9n-1a9852237/",
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
      <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-2xl border-2 border-border transition-all group-hover:border-primary/40 group-hover:shadow-lg lg:h-48 lg:w-48">
        <Image
          src={member.image}
          alt={`Foto de ${member.name}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
      <p className="mt-0.5 text-sm font-medium text-primary">{member.role}</p>
      <div className="mt-3 flex items-center gap-3">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label={`GitHub de ${member.name}`}
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label={`LinkedIn de ${member.name}`}
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function ContributionCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-md">
      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={member.image}
          alt={`Foto de ${member.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-foreground">{member.name}</h4>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
            {member.role}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {member.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {member.focus.map((item) => (
            <span
              key={item}
              className="inline-flex rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {item}
            </span>
          ))}
          <span className="ml-auto hidden text-xs text-muted-foreground sm:inline-flex">
            {member.stack}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Team() {
  return (
    <>
      {/* Team overview section */}
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

          <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {team.slice(0, 4).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 justify-items-center mx-auto max-w-3xl">
            {team.slice(4).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* What each person works on */}
      <section id="contributions" className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contribuciones
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              En que se enfoca cada quien
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Cada miembro del equipo lidera areas especificas del producto.
              Asi es como esta distribuido el trabajo.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-4">
            {team.map((member) => (
              <ContributionCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
