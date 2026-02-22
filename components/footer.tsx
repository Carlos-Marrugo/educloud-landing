import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:gap-6 md:flex-row md:text-left">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="EduCloud System logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-sm font-bold text-foreground">
            Edu<span className="text-primary">Cloud</span>{" "}
            <span className="font-normal text-muted-foreground">System</span>
          </span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Plataforma de gestion educativa para universidades y colegios.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EduCloud System. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
