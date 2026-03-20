import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lebanggarebantsi@gmail.com',
    pass: 'griv cwkz xdjx bger',
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

const LOGO_URL = 'https://www.cashplugloans.co.bw/trinoxor/trinoxor_logo.png';

// Gradient ring around logo using nested table cells (email-safe)
const logoCircle = (size: number) => {
  return `<img src="${LOGO_URL}" alt="Trinoxor" width="${size}" height="${size}" style="width:${size}px;height:${size}px;object-fit:cover;display:block;border-radius:50%;border:4px solid #F59E0B;outline:2px solid #8B5CF6;" />`;
};

const emailHeader = () => `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#F59E0B 0%,#D97706 30%,#1E3A8A 70%,#0F2460 100%);">
    <tr>
      <td align="center" style="padding:32px 24px 28px;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td valign="middle" style="padding-right:16px;">${logoCircle(80)}</td>
            <td valign="middle">
              <span style="color:#ffffff;font-size:26px;font-weight:900;letter-spacing:3px;font-family:'Segoe UI',Arial,sans-serif;text-shadow:0 2px 10px rgba(0,0,0,0.35);">TRINOXOR</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

const emailFooter = (year: number) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;">
    <tr>
      <td align="center" style="padding:28px 24px 14px;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td valign="middle" style="padding-right:12px;">${logoCircle(56)}</td>
            <td valign="middle">
              <span style="color:#ffffff;font-size:17px;font-weight:900;letter-spacing:3px;font-family:'Segoe UI',Arial,sans-serif;">TRINOXOR</span>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-size:13px;font-weight:700;letter-spacing:2.5px;font-family:'Segoe UI',Arial,sans-serif;color:#F59E0B;">Secure &nbsp;&#183;&nbsp; <span style="color:#A78BFA;">Scalable</span> &nbsp;&#183;&nbsp; <span style="color:#60A5FA;">Seamless</span></p>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding:12px 24px 22px;border-top:1px solid #1f2937;">
        <p style="color:#4b5563;font-size:11px;margin:0;font-family:'Segoe UI',Arial,sans-serif;">&#169; ${year} Trinoxor. All rights reserved.</p>
      </td>
    </tr>
  </table>`;

const detailRow = (accentColor: string, label: string, value: string) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
    <tr>
      <td style="background:#f8fafc;border-radius:10px;padding:13px 16px;border-left:4px solid ${accentColor};">
        <div style="font-size:10px;font-weight:700;color:${accentColor};text-transform:uppercase;letter-spacing:1.2px;font-family:'Segoe UI',Arial,sans-serif;margin-bottom:4px;">${label}</div>
        <div style="font-size:15px;font-weight:600;color:#111827;font-family:'Segoe UI',Arial,sans-serif;">${value}</div>
      </td>
    </tr>
  </table>`;

export async function sendContactEmail(formData: ContactFormData) {
  const year = new Date().getFullYear();

  try {
    // ── Email to Trinoxor ──────────────────────────────────────────────────────
    const mailOptions = {
      from: '"Trinoxor" <lebanggarebantsi@gmail.com>',
      replyTo: 'trinoxorbw@gmail.com',
      to: 'trinoxorbw@gmail.com',
      subject: `New Enquiry from ${formData.name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>New Enquiry – Trinoxor</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.10);">

          <!-- HEADER -->
          <tr><td>${emailHeader()}</td></tr>

          <!-- BODY -->
          <tr>
            <td style="padding:32px 28px;">

              <!-- Section title -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <div style="display:inline-block;background:linear-gradient(135deg,#1E3A8A,#8B5CF6);border-radius:8px;padding:6px 16px;margin-bottom:12px;">
                      <span style="color:#fff;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Contact Details</span>
                    </div>
                    <div style="height:2px;background:linear-gradient(90deg,#1E3A8A,#8B5CF6,#F59E0B);border-radius:2px;"></div>
                  </td>
                </tr>
              </table>

              <!-- Detail rows -->
              ${detailRow('#1E3A8A', 'Full Name', formData.name)}
              ${detailRow('#8B5CF6', 'Email Address', formData.email)}
              ${formData.company ? detailRow('#F59E0B', 'Company', formData.company) : ''}
              ${formData.service ? detailRow('#10B981', 'Service Interest', formData.service) : ''}
              ${formData.budget ? detailRow('#3B82F6', 'Budget Range', formData.budget) : ''}
              ${formData.timeline ? detailRow('#EC4899', 'Timeline', formData.timeline) : ''}

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td style="background:#fef9f0;border-radius:12px;border-left:4px solid #F59E0B;padding:20px 20px 20px 20px;">
                    <div style="font-size:11px;font-weight:700;color:#F59E0B;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">💬 &nbsp;Message</div>
                    <p style="color:#374151;font-size:15px;line-height:1.8;margin:0;white-space:pre-wrap;">${formData.message}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#1E3A8A,#8B5CF6);border-radius:12px;padding:20px;text-align:center;">
                    <p style="color:rgba(255,255,255,0.8);font-size:13px;margin:0 0 14px;">Reply directly to this enquiry</p>
                    <a href="mailto:${formData.email}" style="display:inline-block;background:#ffffff;color:#1E3A8A;padding:11px 28px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:0.5px;">Reply to ${formData.name}</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr><td>${emailFooter(year)}</td></tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    };

    await transporter.sendMail(mailOptions);

    // ── Auto-reply to customer ─────────────────────────────────────────────────
    const autoReplyOptions = {
      from: '"Trinoxor" <lebanggarebantsi@gmail.com>',
      replyTo: 'trinoxorbw@gmail.com',
      to: formData.email,
      subject: "We've received your message – Trinoxor",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Message Received – Trinoxor</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.10);">

          <!-- HEADER -->
          <tr><td>${emailHeader()}</td></tr>

          <!-- BODY -->
          <tr>
            <td style="padding:32px 28px;">

              <!-- Greeting -->
              <h2 style="color:#111827;font-size:22px;font-weight:800;margin:0 0 10px;">Hi ${formData.name},</h2>
              <p style="color:#6b7280;font-size:15px;line-height:1.7;margin:0 0 28px;">Thank you for reaching out to <strong style="color:#8B5CF6;">Trinoxor</strong>. We have received your message and will get back to you within <strong style="color:#1E3A8A;">24 hours</strong>.</p>

              <!-- What happens next -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <div style="display:inline-block;background:linear-gradient(135deg,#1E3A8A,#8B5CF6);border-radius:8px;padding:6px 16px;margin-bottom:12px;">
                      <span style="color:#fff;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">What Happens Next</span>
                    </div>
                    <div style="height:2px;background:linear-gradient(90deg,#1E3A8A,#8B5CF6,#F59E0B);border-radius:2px;margin-bottom:16px;"></div>
                  </td>
                </tr>
              </table>

              <!-- Steps – single column for full responsiveness -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td width="52" valign="top" style="padding-right:14px;padding-bottom:16px;">
                    <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1E3A8A,#3B82F6);text-align:center;line-height:44px;color:#fff;font-weight:800;font-size:18px;">1</div>
                  </td>
                  <td valign="middle" style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #1E3A8A;">
                    <div style="font-size:14px;font-weight:700;color:#111827;">Review &amp; Analysis</div>
                    <div style="font-size:13px;color:#6b7280;margin-top:3px;">Our team carefully reviews your enquiry within <strong>24 hours</strong>.</div>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td width="52" valign="top" style="padding-right:14px;padding-bottom:16px;">
                    <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#8B5CF6,#6D28D9);text-align:center;line-height:44px;color:#fff;font-weight:800;font-size:18px;">2</div>
                  </td>
                  <td valign="middle" style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #8B5CF6;">
                    <div style="font-size:14px;font-weight:700;color:#111827;">Personalised Response</div>
                    <div style="font-size:13px;color:#6b7280;margin-top:3px;">We prepare a detailed response tailored to your specific needs.</div>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td width="52" valign="top" style="padding-right:14px;">
                    <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#F59E0B,#D97706);text-align:center;line-height:44px;color:#fff;font-weight:800;font-size:18px;">3</div>
                  </td>
                  <td valign="middle" style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #F59E0B;">
                    <div style="font-size:14px;font-weight:700;color:#111827;">Project Discussion</div>
                    <div style="font-size:13px;color:#6b7280;margin-top:3px;">We reach out to discuss your goals and requirements in detail.</div>
                  </td>
                </tr>
              </table>

              <!-- Need immediate assistance -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#1E3A8A 0%,#8B5CF6 100%);border-radius:12px;padding:18px 20px;">
                    <p style="color:rgba(255,255,255,0.75);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 12px;">Need Immediate Assistance?</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:8px;padding-bottom:8px;">
                          <a href="mailto:trinoxorbw@gmail.com" style="display:block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:8px;padding:10px 14px;text-decoration:none;">
                            <span style="color:rgba(255,255,255,0.65);font-size:11px;display:block;margin-bottom:2px;">EMAIL</span>
                            <span style="color:#ffffff;font-size:13px;font-weight:600;">trinoxorbw@gmail.com</span>
                          </a>
                        </td>
                        <td style="padding-bottom:8px;">
                          <a href="tel:+26778080590" style="display:block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:8px;padding:10px 14px;text-decoration:none;">
                            <span style="color:rgba(255,255,255,0.65);font-size:11px;display:block;margin-bottom:2px;">PHONE</span>
                            <span style="color:#ffffff;font-size:13px;font-weight:600;">(+267) 78080590</span>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://trinoxor.com/services" style="display:inline-block;background:linear-gradient(135deg,#1E3A8A,#8B5CF6);color:#ffffff;padding:13px 32px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:0.5px;">Explore Our Services</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr><td>${emailFooter(year)}</td></tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    };

    await transporter.sendMail(autoReplyOptions);

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email' };
  }
}
