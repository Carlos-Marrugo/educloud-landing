import {
  BookOpen,
  CreditCard,
  Video,
  QrCode,
  ClipboardList,
  Bell,
  FileText,
  Shield,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Gestion Academica",
    description:
      "Organiza facultades, programas, materias, grados y secciones. Adaptable tanto a universidades como a colegios de cualquier tamano.",
    tag: "Universidades y Colegios",
  },
  {
    icon: ClipboardList,
    title: "Matriculas",
    description:
      "Proceso de matricula digital: por materias y creditos en universidades, o por ano escolar completo en colegios.",
    tag: "Proceso digital",
  },
  {
    icon: CreditCard,
    title: "Pagos en Linea",
    description:
      "Pago de matriculas y mensualidades en linea, con recibos automaticos y seguimiento de estados de cuenta para padres y estudiantes.",
    tag: "Automatizado",
  },
  {
    icon: Video,
    title: "Aulas Virtuales",
    description:
      "Clases en vivo, grabaciones, materiales de estudio y entrega de tareas, todo integrado en un mismo lugar.",
    tag: "Clases en vivo",
  },
  {
    icon: QrCode,
    title: "Control de Acceso QR",
    description:
      "Cada estudiante y docente tiene un codigo QR para registrar entrada y salida de la institucion de forma rapida y segura.",
    tag: "Seguridad",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    description:
      "Correos automaticos sobre notas publicadas, ausencias, pagos pendientes y comunicados institucionales a padres y estudiantes.",
    tag: "Tiempo real",
  },
  {
    icon: FileText,
    title: "Documentos y Reportes",
    description:
      "Genera certificados, constancias de estudio, boletines de notas y reportes academicos listos para descargar en cualquier momento.",
    tag: "Descargables",
  },
  {
    icon: Shield,
    title: "Seguimiento de Convivencia",
    description:
      "Registro de incidentes, reconocimientos positivos e historial de comportamiento. Ideal para colegios con programas de convivencia.",
    tag: "Colegios",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-secondary/50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Producto
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que tu institucion necesita
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Una plataforma integral que se adapta a universidades y colegios por igual.
            Digitaliza cada proceso academico y administrativo en un solo sistema.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
