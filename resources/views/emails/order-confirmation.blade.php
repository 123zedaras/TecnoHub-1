<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación de Pedido</title>
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
                  <span style="background:#4F46E5;color:#FFFFFF;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;">
                    ✓ PEDIDO CONFIRMADO
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {{-- Saludo --}}
        <tr>
          <td style="padding:36px 40px 24px;">
            <h1 style="margin:0 0 8px;font-size:22px;color:#1E293B;">¡Gracias por tu pedido!</h1>
            <p style="margin:0;color:#64748B;font-size:15px;">
              Hola <strong>{{ $order->user->name }}</strong>, tu pedido ha sido confirmado y está siendo procesado.
            </p>
          </td>
        </tr>

        {{-- Info del pedido --}}
        <tr>
          <td style="padding:0 40px 24px;">
            <table width="100%" cellpadding="12" cellspacing="0" style="background:#F1F5F9;border-radius:8px;">
              <tr>
                <td style="color:#64748B;font-size:12px;font-weight:600;text-transform:uppercase;border-bottom:1px solid #E2E8F0;">DETALLES DEL PEDIDO</td>
              </tr>
              <tr>
                <td>
                  <table width="100%" cellpadding="4" cellspacing="0">
                    <tr>
                      <td style="color:#64748B;font-size:13px;">Nº de pedido</td>
                      <td align="right" style="color:#1E293B;font-size:13px;font-weight:600;">#{{ $order->id }}</td>
                    </tr>
                    <tr>
                      <td style="color:#64748B;font-size:13px;">Fecha</td>
                      <td align="right" style="color:#1E293B;font-size:13px;">{{ $order->created_at->format('d/m/Y H:i') }}</td>
                    </tr>
                    <tr>
                      <td style="color:#64748B;font-size:13px;">Estado</td>
                      <td align="right">
                        <span style="background:#DCFCE7;color:#16A34A;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600;">
                          ● {{ $order->status_label }}
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {{-- Líneas del pedido --}}
        <tr>
          <td style="padding:0 40px 24px;">
            <p style="margin:0 0 12px;color:#1E293B;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Artículos</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;">
              <tr style="background:#F8FAFC;">
                <th align="left" style="padding:10px 16px;font-size:12px;color:#64748B;font-weight:600;text-transform:uppercase;">Producto</th>
                <th align="center" style="padding:10px 16px;font-size:12px;color:#64748B;font-weight:600;">Cant.</th>
                <th align="right" style="padding:10px 16px;font-size:12px;color:#64748B;font-weight:600;">Subtotal</th>
              </tr>
              @foreach($order->items as $item)
              <tr style="border-top:1px solid #E2E8F0;">
                <td style="padding:12px 16px;">
                  <span style="color:#1E293B;font-size:14px;">{{ $item->product_name }}</span>
                  @if($item->product_sku)
                  <br><span style="color:#94A3B8;font-size:12px;">REF: {{ $item->product_sku }}</span>
                  @endif
                </td>
                <td align="center" style="padding:12px 16px;color:#475569;font-size:14px;">{{ $item->quantity }}</td>
                <td align="right" style="padding:12px 16px;color:#1E293B;font-size:14px;font-weight:600;">{{ number_format($item->subtotal, 2, ',', '.') }} €</td>
              </tr>
              @endforeach
            </table>
          </td>
        </tr>

        {{-- Totales --}}
        <tr>
          <td style="padding:0 40px 32px;">
            <table width="100%" cellpadding="6" cellspacing="0">
              <tr>
                <td align="right" style="color:#64748B;font-size:14px;">Subtotal</td>
                <td align="right" width="120" style="color:#1E293B;font-size:14px;">{{ number_format($order->subtotal, 2, ',', '.') }} €</td>
              </tr>
              <tr>
                <td align="right" style="color:#64748B;font-size:14px;">IVA (21%)</td>
                <td align="right" style="color:#1E293B;font-size:14px;">{{ number_format($order->tax, 2, ',', '.') }} €</td>
              </tr>
              <tr>
                <td align="right" style="border-top:2px solid #E2E8F0;padding-top:10px;color:#1E293B;font-size:16px;font-weight:700;">TOTAL IVA incl.</td>
                <td align="right" style="border-top:2px solid #E2E8F0;padding-top:10px;color:#4F46E5;font-size:18px;font-weight:700;">{{ number_format($order->total, 2, ',', '.') }} €</td>
              </tr>
            </table>
          </td>
        </tr>

        {{-- Footer --}}
        <tr>
          <td style="background:#F1F5F9;padding:20px 40px;border-top:1px solid #E2E8F0;">
            <p style="margin:0;color:#94A3B8;font-size:12px;text-align:center;">
              © {{ date('Y') }} TecnoHub Industrial · Este email fue enviado automáticamente, no respondas a este mensaje.
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>
