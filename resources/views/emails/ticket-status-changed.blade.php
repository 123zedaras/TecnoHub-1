<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estado de Incidencia Actualizado</title>
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
                  <span style="background:#F59E0B;color:#FFFFFF;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;">
                    🔄 ESTADO ACTUALIZADO
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {{-- Número de ticket --}}
        <tr>
          <td style="padding:36px 40px 16px;">
            <p style="margin:0 0 4px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;">Ticket</p>
            <h1 style="margin:0 0 8px;font-size:24px;color:#4F46E5;font-weight:700;">{{ $ticket->ticket_number }}</h1>
            <p style="margin:0;color:#475569;font-size:15px;">{{ $ticket->title }}</p>
          </td>
        </tr>

        {{-- Cambio de estado --}}
        <tr>
          <td style="padding:8px 40px 32px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#F1F5F9;color:#64748B;padding:8px 18px;border-radius:20px;font-size:14px;font-weight:600;">
                  @php
                    $oldLabel = match($oldStatus) {
                      'open'       => 'Abierto',
                      'in_process' => 'En Proceso',
                      'resolved'   => 'Resuelto',
                      'closed'     => 'Cerrado',
                      default      => ucfirst($oldStatus),
                    };
                  @endphp
                  {{ $oldLabel }}
                </td>
                <td style="padding:0 12px;color:#94A3B8;font-size:18px;">→</td>
                <td style="background:#4F46E5;color:#FFFFFF;padding:8px 18px;border-radius:20px;font-size:14px;font-weight:700;">
                  {{ $ticket->status_label }}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {{-- Actualizado por --}}
        <tr>
          <td style="padding:0 40px 32px;">
            <table width="100%" cellpadding="12" cellspacing="0" style="background:#F8FAFC;border-radius:8px;border:1px solid #E2E8F0;">
              <tr>
                <td style="border-bottom:1px solid #E2E8F0;">
                  <p style="margin:0 0 2px;color:#94A3B8;font-size:11px;font-weight:600;text-transform:uppercase;">Fecha de actualización</p>
                  <p style="margin:0;color:#1E293B;font-size:14px;">{{ now()->format('d/m/Y \a \l\a\s H:i') }}</p>
                </td>
              </tr>
              @if($ticket->assignedTechnician)
              <tr>
                <td>
                  <p style="margin:0 0 2px;color:#94A3B8;font-size:11px;font-weight:600;text-transform:uppercase;">Técnico responsable</p>
                  <p style="margin:0;color:#1E293B;font-size:14px;">{{ $ticket->assignedTechnician->name }}</p>
                </td>
              </tr>
              @endif
            </table>
          </td>
        </tr>

        @if($ticket->status === 'resolved' || $ticket->status === 'closed')
        {{-- Mensaje de cierre --}}
        <tr>
          <td style="padding:0 40px 32px;">
            <div style="background:#DCFCE7;border-left:4px solid #16A34A;padding:16px;border-radius:0 8px 8px 0;">
              <p style="margin:0;color:#15803D;font-size:14px;font-weight:600;">✓ Tu incidencia ha sido {{ $ticket->status_label | lower }}.</p>
              <p style="margin:4px 0 0;color:#166534;font-size:13px;">Si el problema persiste, puedes abrir una nueva incidencia desde el panel de TecnoHub.</p>
            </div>
          </td>
        </tr>
        @endif

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
