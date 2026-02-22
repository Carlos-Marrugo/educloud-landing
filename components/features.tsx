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
      "Administra facultades, programas, materias, grados y secciones. Compatible con universidades y colegios.",
  },
  {
    icon: ClipboardList,
    title: "Matriculas Inteligentes",
    description:
      "Matricula por materias/creditos en universidades o por ano escolar en colegios. Validacion de prerrequisitos y cupos.",
  },
  {
    icon: CreditCard,
    title: "Pagos Integrados",
    description:
      "Integracion con MercadoPago, generacion de recibos PDF, becas, descuentos y auditorias financieras completas.",
  },
  {
    icon: Video,
    title: "Aulas Virtuales",
    description:
      "Clases en vivo con WebRTC, grabacion de sesiones, materiales, tareas y control de asistencia virtual.",
  },
  {
    icon: QrCode,
    title: "Acceso por QR",
    description:
      "Codigo QR dinamico por persona, registro de entrada/salida, validacion de matricula y notificaciones a padres.",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    description:
      "Emails automaticos de notas, ausencias, pagos pendientes y circulares institucionales. Integrado con SendGrid.",
  },
  {
    icon: FileText,
    title: "Documentos y Reportes",
    description:
      "Genera certificados, constancias, boletines y reportes academicos/financieros exportables a PDF, CSV y Excel.",
  },
  {
    icon: Shield,
    title: "Control Disciplinario",
    description:
      "Registro de incidentes, clasificacion de faltas, sanciones, reconocimientos positivos e historial completo.",
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
            Una suite completa de herramientas construida con arquitectura de
            microservicios para escalar con tu institucion.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
