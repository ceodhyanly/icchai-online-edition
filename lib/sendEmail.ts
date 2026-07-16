export async function sendConfirmationEmail(user: {
  firstName: string
  email: string
  registrationNumber: string
  attendance: string
  ischtMembershipNumber?: string | null
}, pdfBytes: Uint8Array, membershipCardBytes?: Uint8Array | null): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return // Email is optional — add RESEND_API_KEY to enable

  const attLabel =
    user.attendance === 'both' ? 'Both Days (October 22 & 23, 2026)' :
    user.attendance === 'day1' ? 'Day 1 Only (October 22, 2026)' :
    'Day 2 Only (October 23, 2026)'

  const html = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:24px;background:#F5F1EE;font-family:Arial,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e8e2df;">

  <div style="background:#16040A;padding:32px 40px 28px;">
    <div style="font-size:30px;font-weight:900;color:#fff;letter-spacing:-0.02em;">
      ICCHAI <span style="color:#A41C30;">2026</span>
    </div>
    <div style="font-size:10px;color:rgba(228,220,212,0.50);margin-top:5px;letter-spacing:0.06em;text-transform:uppercase;">
      International Conference on Contemplative HealthTech and AI
    </div>
  </div>

  <div style="padding:40px 40px 32px;border-bottom:1px solid #ede8e5;">
    <p style="font-size:21px;font-weight:800;color:#1a0a0a;margin:0 0 10px;">
      Congratulations, ${user.firstName}!
    </p>
    <p style="font-size:14px;color:#6b5f5a;line-height:1.75;margin:0 0 28px;">
      Your registration for ICCHAI 2026 is confirmed. We are delighted to welcome you to the first international gathering at the intersection of contemplative science, AI, and digital health.
    </p>

    <div style="background:#F7F4F2;border:1px solid #e8e2df;border-top:3px solid #A41C30;border-radius:6px;padding:24px 28px;margin-bottom:28px;">
      <div style="font-size:9px;font-weight:700;letter-spacing:0.12em;color:#9a8a84;text-transform:uppercase;margin-bottom:8px;">Registration Number</div>
      <div style="font-size:28px;font-weight:900;color:#A41C30;letter-spacing:0.02em;">${user.registrationNumber}</div>
    </div>

    <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:28px;">
      <tr>
        <td style="padding:11px 0;border-bottom:1px solid #ede8e5;color:#9a8a84;width:38%;">Attendance</td>
        <td style="padding:11px 0;border-bottom:1px solid #ede8e5;font-weight:600;color:#1a0a0a;">${attLabel}</td>
      </tr>
      <tr>
        <td style="padding:11px 0;border-bottom:1px solid #ede8e5;color:#9a8a84;">Dates</td>
        <td style="padding:11px 0;border-bottom:1px solid #ede8e5;font-weight:600;color:#1a0a0a;">October 22–23, 2026</td>
      </tr>
      <tr>
        <td style="padding:11px 0;border-bottom:1px solid #ede8e5;color:#9a8a84;">Format</td>
        <td style="padding:11px 0;border-bottom:1px solid #ede8e5;font-weight:600;color:#1a0a0a;">Fully Online, Worldwide</td>
      </tr>
      <tr>
        <td style="padding:11px 0;color:#9a8a84;">Time</td>
        <td style="padding:11px 0;font-weight:600;color:#1a0a0a;">18:30–22:30 IST</td>
      </tr>
    </table>

    <p style="font-size:13px;color:#6b5f5a;line-height:1.75;margin:0 0 10px;">
      Your registration pass (PDF) is attached to this email — keep it for your records.
    </p>
    <p style="font-size:13px;color:#6b5f5a;line-height:1.75;margin:0 0 ${user.ischtMembershipNumber ? '18' : '0'}px;">
      You are now subscribed to ICCHAI 2026 updates. We will send the online session link before the event.
    </p>
    ${user.ischtMembershipNumber ? `
    <div style="background:#F7F4F2;border:1px solid #e8e2df;border-top:3px solid #C69232;border-radius:6px;padding:20px 24px;">
      <div style="font-size:9px;font-weight:700;letter-spacing:0.12em;color:#9a8a84;text-transform:uppercase;margin-bottom:6px;">ISCHT Founding Membership</div>
      <div style="font-size:13px;color:#1a0a0a;line-height:1.7;margin-bottom:10px;">You're in as a founding member of the International Society for Contemplative HealthTech. Your membership card (PDF) is attached separately.</div>
      <div style="font-size:20px;font-weight:900;color:#C69232;letter-spacing:0.02em;">${user.ischtMembershipNumber}</div>
    </div>` : ''}
  </div>

  <div style="padding:24px 40px;background:#F7F4F2;">
    <p style="font-size:11px;color:#9a8a84;margin:0;line-height:1.8;">
      Organised by YogaXBiofeedback Pvt Ltd (Dhyanly) &amp; The India Center, UCF<br>
      Questions: <a href="mailto:ceodhyanly@gmail.com" style="color:#A41C30;">ceodhyanly@gmail.com</a> &nbsp;·&nbsp;
      <a href="https://icchai.com" style="color:#A41C30;">icchai.com</a>
    </p>
  </div>

</div>
</body>
</html>`

  const b64 = Buffer.from(pdfBytes).toString('base64')
  const attachments = [{
    filename: `ICCHAI-2026-Pass-${user.registrationNumber}.pdf`,
    content: b64,
  }]
  if (membershipCardBytes && user.ischtMembershipNumber) {
    attachments.push({
      filename: `ISCHT-Membership-Card-${user.ischtMembershipNumber}.pdf`,
      content: Buffer.from(membershipCardBytes).toString('base64'),
    })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'ICCHAI 2026 <registrations@icchai.com>',
      reply_to: 'ceodhyanly@gmail.com',
      to: user.email,
      subject: `Registration Confirmed — ICCHAI 2026 (${user.registrationNumber})`,
      html,
      attachments,
    }),
  })

  if (!res.ok) {
    console.error('Resend email failed', res.status, await res.text().catch(() => ''))
  }
}

export async function sendVerificationCodeEmail(email: string, code: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('Email sending is not configured (missing RESEND_API_KEY)')

  const html = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:24px;background:#F5F1EE;font-family:Arial,sans-serif;">
<div style="max-width:480px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e8e2df;">

  <div style="background:#16040A;padding:28px 36px 24px;">
    <div style="font-size:26px;font-weight:900;color:#fff;letter-spacing:-0.02em;">
      ICCHAI <span style="color:#A41C30;">2026</span>
    </div>
  </div>

  <div style="padding:36px;">
    <p style="font-size:15px;color:#1a0a0a;margin:0 0 20px;">Your verification code is:</p>
    <div style="text-align:center;background:#F7F4F2;border:1px solid #e8e2df;border-top:3px solid #A41C30;border-radius:6px;padding:24px;margin-bottom:20px;">
      <span style="font-size:36px;font-weight:900;letter-spacing:0.18em;color:#A41C30;">${code}</span>
    </div>
    <p style="font-size:13px;color:#6b5f5a;line-height:1.7;margin:0;">
      This code expires in 10 minutes. If you didn't request this, you can safely ignore this email.
    </p>
  </div>

</div>
</body>
</html>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'ICCHAI 2026 <registrations@icchai.com>',
      reply_to: 'ceodhyanly@gmail.com',
      to: email,
      subject: `Your ICCHAI 2026 verification code: ${code}`,
      html,
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.error('Resend verification email failed', res.status, body)
    throw new Error('Failed to send verification email')
  }
}
