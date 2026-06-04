export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {

  if (!process.env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY manquante')
    return { statusCode: 500, body: JSON.stringify({ error: 'BREVO_API_KEY manquante' }) }
  }

  const { nom, prenom, email, telephone, message } = JSON.parse(event.body)

  if (!nom || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Champs requis manquants.' }) }
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: 'Portfolio Davisen Ellapen',
        email: 'davisen.ellapen.pro@gmail.com',
      },
      to: [{ email: 'davisen.ellapen.pro@gmail.com', name: 'Davisen Ellapen' }],
      replyTo: { email, name: `${prenom} ${nom}` },
      subject: `📩 Nouveau message de ${prenom} ${nom}`,
      htmlContent: `
        <div style="font-family: Montserrat, sans-serif; max-width: 600px; margin: auto; padding: 32px; background: #fdfcf9; border-radius: 12px; border: 1px solid #ede7d5;">
          <h2 style="color: #1a4d2e; margin-bottom: 24px;">Nouveau message depuis le portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; width: 130px;">Nom</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${prenom} ${nom}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0; font-weight: 600; color: #111;"><a href="mailto:${email}" style="color: #1a4d2e;">${email}</a></td></tr>
            ${telephone ? `<tr><td style="padding: 8px 0; color: #888;">Téléphone</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${telephone}</td></tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #ede7d5; margin: 24px 0;" />
          <p style="color: #888; margin-bottom: 8px;">Message :</p>
          <p style="color: #111; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => response.text())
    console.error('Brevo error:', JSON.stringify(error))
    return { statusCode: 500, body: JSON.stringify({ error }) }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }

  } catch (err) {
    console.error('Erreur fonction send-email:', err.message, err.stack)
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) }
  }
}
