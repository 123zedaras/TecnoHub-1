<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Incidencia</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:Inter,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:32px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        {{-- Header --}}
        <tr>
          <td style="background:#1E293B;padding:28px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="color:#4F46E5;font-size:22px;font-weight:700;">⚙</span>
                  <span style="color:#F8FAFC;font-size:18px;font-weight:700;margin-left:8px;">TecnoHub Industrial</span>
                </td>
                <td align="right">
                  <span style="background:#EF4444;color:#FFFFFF;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;">
                    🎫 NUEVA INCIDENCIA
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {{-- Número de ticket --}}
        <tr>
          <td style="padding:36px 40px 8px;">
            <p style="margin:0 0 4px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Número de ticket</p>
            <h1 style="margin:0;font-size:28px;color:#4F46E5;font-weight:700;">{{ $ticket->ticket_number }}</h1>
          </td>
        </tr>

        {{-- Título --}}
        <tr>
          <td style="padding:16px 40px 24px;">
            <h2 style="margin:0;font-size:18px;color:#1E293B;font-weight:600;">{{ $ticket->title }}</h2>
          </td>
        </tr>

        {{-- Badges --}}
        <tr>
          <td style="padding:0 40px 24px;">
            <span style="background:{{ $ticket->priority_color }}22;color:{{ $ticket->priority_color }};padding:5px 14px;border-radius:20px;font-size:12px;font-weight:700;margin-right:8px;">
              ● {{ $ticket->priority_label }}
            </span>
            <span style="background:#F1F5F9;color:#475569;padding:5px 14px;border-radius:20px;font-size:12px;font-weight:600;">
              {{ $ticket->status_label }}
            </span>
          </td>
        </tr>

        {{-- Detalles --}}
        <tr>
          <td style="padding:0 40px 24px;">
            <table width="100%" cellpadding="12" cellspacing="0" style="background:#F8FAFC;border-radius:8px;border:1px solid #E2E8F0;">
              <tr>
                <td style="border-bottom:1px solid #E2E8F0;">
                  <p style="margin:0 0 2px;color:#94A3B8;font-size:11px;font-weight:600;text-transform:uppercase;">Creado por</p>
                  <p style="margin:0;color:#1E293B;font-size:14px;">{{ $ticket->user->name }}</p>
                </td>
              </tr>
              @if($ticket->machine)
              <tr>
                <td style="border-bottom:1px solid #E2E8F0;">
                  <p style="margin:0 0 2px;color:#94A3B8;font-size:11px;font-weight:600;text-transform:uppercase;">Máquina afectada</p>
                  <p style="margin:0;color:#1E293B;font-size:14px;">{{ $ticket->machine->name }}</p>
                </td>
              </tr>
              @endif
              @if($ticket->assignedTechnician)
              <tr>
                <td style="border-bottom:1px solid #E2E8F0;">
                  <p style="margin:0 0 2px;color:#94A3B8;font-size:11px;font-weight:600;text-transform:uppercase;">Técnico asignado</p>
                  <p style="margin:0;color:#1E293B;font-size:14px;">{{ $ticket->assignedTechnician->name }}</p>
                </td>
              </tr>
              @endif
              <tr>
                <td>
                  <p style="margin:0 0 2px;color:#94A3B8;font-size:11px;font-weight:600;text-transform:uppercase;">Fecha de apertura</p>
                  <p style="margin:0;color:#1E293B;font-size:14px;">{{ $ticket->created_at->format('d/m/Y \a \l\a\s H:i') }}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {{-- Descripción --}}
        <tr>
          <td style="padding:0 40px 32px;">
            <p style="margin:0 0 8px;color:#1E293B;font-size:14px;font-weight:600;">Descripción:</p>
            <div style="background:#FEF3C7;border-left:4px solid #F59E0B;padding:16px;border-radius:0 8px 8px 0;">
              <p style="margin:0;color:#92400E;font-size:14px;line-height:1.6;">{{ $ticket->description }}</p>
            </div>
          </td>
        </tr>

        {{-- Footer --}}
        <tr>
          <td style="background:#F1F5F9;padding:20px 40px;border-top:1px solid #E2E8F0;">
            <p style="margin:0;color:#94A3B8;font-size:12px;text-align:center;">
              © {{ date('Y') }} TecnoHub Industrial · Sistema de Gestión de Incidencias
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>
