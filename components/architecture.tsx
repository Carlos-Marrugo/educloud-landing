import { Server, Database, Globe, Layers } from "lucide-react"

const stats = [
  { label: "Spring Boot", value: "8", detail: "servicios (44%)", icon: Server },
  { label: "NestJS", value: "10", detail: "servicios (56%)", icon: Layers },
  { label: "Compartidos", value: "11", detail: "servicios universales", icon: Globe },
  { label: "Exclusivos", value: "6", detail: "colegios + universidades", icon: Database },
]

const services = [
  { name: "API Gateway", tech: "NestJS", port: "3000" },
  { name: "Auth Service", tech: "NestJS", port: "3001" },
  { name: "Institutions Service", tech: "Spring Boot", port: "8081" },
  { name: "Academic Service", tech: "Spring Boot", port: "8082" },
  { name: "Payments Service", tech: "Spring Boot", port: "8084" },
  { name: "Virtual Classroom", tech: "Spring Boot", port: "8085" },
  { name: "User Profile Service", tech: "Spring Boot", port: "8086" },
  { name: "Document Service", tech: "NestJS", port: "3002" },
  { name: "Notification Service", tech: "NestJS", port: "3003" },
  { name: "Reporting Service", tech: "NestJS", port: "3004" },
  { name: "QR Access Service", tech: "NestJS", port: "3005" },
  { name: "University Enrollment", tech: "Spring Boot", port: "8083" },
  { name: "School Enrollment", tech: "Spring Boot", port: "8090" },
  { name: "Parents Service", tech: "NestJS", port: "3010" },
  { name: "Discipline Service", tech: "NestJS", port: "3011" },
  { name: "Grades Service", tech: "Spring Boot", port: "8091" },
  { name: "Attendance Service", tech: "NestJS", port: "3012" },
]

export function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Arquitectura
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            18 Microservicios. Una vision.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Arquitectura distribuida con Spring Boot y NestJS, disenada para
            escalar, mantener y desplegar de forma independiente.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center"
            >
              <stat.icon className="h-6 w-6 text-primary" />
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-3 border-b border-border bg-secondary/50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Servicio</span>
            <span>Stack</span>
            <span>Puerto</span>
          </div>
          <div className="divide-y divide-border">
            {services.map((service) => (
              <div
                key={service.name}
                className="grid grid-cols-3 items-center px-6 py-3 text-sm transition-colors hover:bg-secondary/30"
              >
                <span className="font-medium text-foreground">{service.name}</span>
                <span>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      service.tech === "NestJS"
                        ? "bg-accent/15 text-accent"
                        : "bg-primary/15 text-primary"
                    }`}
                  >
                    {service.tech}
                  </span>
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  :{service.port}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
