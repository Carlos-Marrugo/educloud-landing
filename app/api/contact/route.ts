import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, institution } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, correo y mensaje son requeridos" },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Fluedu Contact <onboarding@resend.dev>",
      to: ["elrprogramadortutoriales@gmail.com"],
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nuevo mensaje de contacto - Fluedu</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          ${institution ? `<p><strong>Institución:</strong> ${institution}</p>` : ""}
          <hr style="border: 1px solid #e5e7eb;" />
          <h3>Mensaje:</h3>
          <p style="background: #f3f4f6; padding: 16px; border-radius: 8px;">${message}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <p style="color: #6b7280; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de Fluedu.</p>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
