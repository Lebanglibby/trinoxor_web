import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lebanggarebantsi@gmail.com',
    pass: 'griv cwkz xdjx bger', // App password
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

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Email to Trinoxor
    const mailOptions = {
      from: 'lebanggarebantsi@gmail.com',
      to: 'trinoxorbw@gmail.com',
      subject: `New Contact Form Submission - ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission - Trinoxor</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
          <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #7C3AED 0%, #EC4899 35%, #F59E0B 70%, #FBBF24 100%); padding: 40px 30px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'); opacity: 0.3;"></div>
              <div style="position: relative; z-index: 2;">
                <div style="display: inline-flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                  <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3);">
                    <span style="color: white; font-weight: 900; font-size: 28px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">T</span>
                  </div>
                  <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">TRINOXOR</h1>
                </div>
                <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: 18px; font-weight: 500;">🚀 New Contact Form Submission</p>
                <div style="width: 60px; height: 3px; background: rgba(255,255,255,0.4); margin: 20px auto 0; border-radius: 2px;"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 5px solid #7C3AED;">
                <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px; font-weight: 700; display: flex; align-items: center; gap: 10px;">
                  <span style="background: #7C3AED; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 16px;">👤</span>
                  Contact Details
                </h2>
                
                <div style="display: grid; gap: 18px;">
                  <div style="display: flex; align-items: center; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="background: linear-gradient(135deg, #7C3AED, #EC4899); color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: 600;">N</div>
                    <div>
                      <div style="font-weight: 600; color: #7C3AED; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</div>
                      <div style="color: #374151; font-size: 16px; font-weight: 500;">${formData.name}</div>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: center; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="background: linear-gradient(135deg, #10B981, #059669); color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: 600;">@</div>
                    <div>
                      <div style="font-weight: 600; color: #10B981; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</div>
                      <div style="color: #374151; font-size: 16px; font-weight: 500;">${formData.email}</div>
                    </div>
                  </div>
                  
                  ${formData.company ? `
                  <div style="display: flex; align-items: center; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="background: linear-gradient(135deg, #F59E0B, #D97706); color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: 600;">🏢</div>
                    <div>
                      <div style="font-weight: 600; color: #F59E0B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company</div>
                      <div style="color: #374151; font-size: 16px; font-weight: 500;">${formData.company}</div>
                    </div>
                  </div>
                  ` : ''}
                  
                  ${formData.service ? `
                  <div style="display: flex; align-items: center; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="background: linear-gradient(135deg, #EC4899, #BE185D); color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: 600;">⚡</div>
                    <div>
                      <div style="font-weight: 600; color: #EC4899; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Service Interest</div>
                      <div style="color: #374151; font-size: 16px; font-weight: 500;">${formData.service}</div>
                    </div>
                  </div>
                  ` : ''}
                  
                  ${formData.budget ? `
                  <div style="display: flex; align-items: center; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="background: linear-gradient(135deg, #1E3A8A, #1E40AF); color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: 600;">💰</div>
                    <div>
                      <div style="font-weight: 600; color: #1E3A8A; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Budget Range</div>
                      <div style="color: #374151; font-size: 16px; font-weight: 500;">${formData.budget}</div>
                    </div>
                  </div>
                  ` : ''}
                  
                  ${formData.timeline ? `
                  <div style="display: flex; align-items: center; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="background: linear-gradient(135deg, #059669, #047857); color: white; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: 600;">⏰</div>
                    <div>
                      <div style="font-weight: 600; color: #059669; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Timeline</div>
                      <div style="color: #374151; font-size: 16px; font-weight: 500;">${formData.timeline}</div>
                    </div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              <!-- Message Section -->
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #F59E0B; margin-bottom: 30px;">
                <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 20px; font-weight: 700; display: flex; align-items: center; gap: 10px;">
                  <span style="background: #F59E0B; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 16px;">💬</span>
                  Project Message
                </h3>
                <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border: 1px solid #fbbf24;">
                  <p style="color: #374151; line-height: 1.8; margin: 0; font-size: 16px; white-space: pre-wrap;">${formData.message}</p>
                </div>
              </div>
              
              <!-- Action Section -->
              <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 25px; border-radius: 12px; text-align: center; border: 1px solid #60a5fa;">
                <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">📧 Next Steps</h3>
                <p style="color: #1e40af; margin: 0 0 20px 0; font-size: 14px;">Reply directly to: <strong style="background: white; padding: 4px 8px; border-radius: 4px; color: #7C3AED;">${formData.email}</strong></p>
                <div style="display: inline-flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                  <a href="mailto:${formData.email}" style="background: linear-gradient(135deg, #7C3AED, #EC4899); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);">📧 Reply to Client</a>
                  <a href="tel:+26778080590" style="background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">📞 Call Client</a>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #1f2937; padding: 30px; text-align: center;">
              <div style="margin-bottom: 20px;">
                <div style="display: inline-flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #7C3AED 0%, #EC4899 35%, #F59E0B 70%, #FBBF24 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-weight: 800; font-size: 18px;">T</span>
                  </div>
                  <span style="color: white; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">TRINOXOR</span>
                </div>
                <p style="color: #9ca3af; margin: 0; font-size: 14px; font-style: italic;">Secure • Scalable • Seamless</p>
              </div>
              
              <div style="border-top: 1px solid #374151; padding-top: 20px;">
                <p style="color: #6b7280; margin: 0; font-size: 12px;">This email was automatically generated from the Trinoxor website contact form.</p>
                <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">© ${new Date().getFullYear()} Trinoxor. All rights reserved.</p>
              </div>
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Auto-reply to customer
    const autoReplyOptions = {
      from: 'lebanggarebantsi@gmail.com',
      to: formData.email,
      subject: 'Thank you for contacting Trinoxor - We\'ll be in touch soon!',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Trinoxor</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
          <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #7C3AED 0%, #EC4899 35%, #F59E0B 70%, #FBBF24 100%); padding: 40px 30px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'); opacity: 0.3;"></div>
              <div style="position: relative; z-index: 2;">
                <div style="display: inline-flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                  <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3);">
                    <span style="color: white; font-weight: 900; font-size: 28px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">T</span>
                  </div>
                  <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">TRINOXOR</h1>
                </div>
                <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: 18px; font-weight: 500;">🎉 Thank you for reaching out!</p>
                <div style="width: 60px; height: 3px; background: rgba(255,255,255,0.4); margin: 20px auto 0; border-radius: 2px;"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <!-- Welcome Message -->
              <div style="text-align: center; margin-bottom: 35px;">
                <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);">
                  <span style="font-size: 36px;">🚀</span>
                </div>
                <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 28px; font-weight: 700;">Hi ${formData.name}!</h2>
                <p style="color: #64748b; font-size: 18px; margin: 0; line-height: 1.6;">Thank you for contacting <strong style="color: #7C3AED;">Trinoxor</strong>! We've received your message and our team is excited to help bring your vision to life.</p>
              </div>
              
              <!-- What's Next Section -->
              <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 30px; border-radius: 16px; margin-bottom: 30px; border: 1px solid #bbf7d0;">
                <h3 style="color: #166534; margin: 0 0 20px 0; font-size: 22px; font-weight: 700; display: flex; align-items: center; gap: 12px;">
                  <div style="background: #10B981; color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px;">✨</div>
                  What happens next?
                </h3>
                
                <div style="display: grid; gap: 20px;">
                  <div style="display: flex; align-items: center; gap: 15px; padding: 18px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 4px solid #10B981;">
                    <div style="background: linear-gradient(135deg, #3B82F6, #1D4ED8); color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 18px;">1</div>
                    <div>
                      <div style="font-weight: 600; color: #1e293b; font-size: 16px; margin-bottom: 4px;">Review & Analysis</div>
                      <div style="color: #64748b; font-size: 14px;">Our team will carefully review your inquiry within <strong>24 hours</strong></div>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: center; gap: 15px; padding: 18px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 4px solid #F59E0B;">
                    <div style="background: linear-gradient(135deg, #F59E0B, #D97706); color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 18px;">2</div>
                    <div>
                      <div style="font-weight: 600; color: #1e293b; font-size: 16px; margin-bottom: 4px;">Personalized Response</div>
                      <div style="color: #64748b; font-size: 14px;">We'll prepare a detailed response tailored to your specific needs</div>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: center; gap: 15px; padding: 18px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 4px solid #EC4899;">
                    <div style="background: linear-gradient(135deg, #EC4899, #BE185D); color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 18px;">3</div>
                    <div>
                      <div style="font-weight: 600; color: #1e293b; font-size: 16px; margin-bottom: 4px;">Project Discussion</div>
                      <div style="color: #64748b; font-size: 14px;">We'll reach out to discuss your project goals and requirements in detail</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #fbbf24;">
                <h3 style="color: #92400e; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; text-align: center;">📞 Need immediate assistance?</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; text-align: center;">
                  <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <div style="color: #7C3AED; font-size: 24px; margin-bottom: 8px;">📧</div>
                    <div style="font-weight: 600; color: #7C3AED; font-size: 14px; margin-bottom: 4px;">EMAIL US</div>
                    <a href="mailto:info@trinoxor.com" style="color: #374151; text-decoration: none; font-size: 14px; font-weight: 500;">info@trinoxor.com</a>
                  </div>
                  <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <div style="color: #10B981; font-size: 24px; margin-bottom: 8px;">📞</div>
                    <div style="font-weight: 600; color: #10B981; font-size: 14px; margin-bottom: 4px;">CALL US</div>
                    <a href="tel:+26778080590" style="color: #374151; text-decoration: none; font-size: 14px; font-weight: 500;">(+267) 78080590</a>
                  </div>
                </div>
              </div>
              
              <!-- CTA Section -->
              <div style="text-align: center; margin-bottom: 30px;">
                <p style="color: #64748b; margin: 0 0 25px 0; font-size: 16px;">While you wait, explore our services and recent work:</p>
                <div style="display: inline-flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                  <a href="https://trinoxor.com/services" style="background: linear-gradient(135deg, #7C3AED, #EC4899); color: white; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3); transition: all 0.3s ease;">🚀 Our Services</a>
                  <a href="https://trinoxor.com/portfolio" style="background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); transition: all 0.3s ease;">🎨 Portfolio</a>
                </div>
              </div>
              
              <!-- Trust Indicators -->
              <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 25px; border-radius: 12px; text-align: center;">
                <h4 style="color: #334155; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Why choose Trinoxor?</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
                  <div>
                    <div style="color: #7C3AED; font-size: 28px; margin-bottom: 8px;">🔒</div>
                    <div style="font-weight: 600; color: #334155; font-size: 14px;">Secure</div>
                  </div>
                  <div>
                    <div style="color: #10B981; font-size: 28px; margin-bottom: 8px;">📈</div>
                    <div style="font-weight: 600; color: #334155; font-size: 14px;">Scalable</div>
                  </div>
                  <div>
                    <div style="color: #F59E0B; font-size: 28px; margin-bottom: 8px;">✨</div>
                    <div style="font-weight: 600; color: #334155; font-size: 14px;">Seamless</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #1f2937; padding: 30px; text-align: center;">
              <div style="margin-bottom: 20px;">
                <div style="display: inline-flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #7C3AED 0%, #EC4899 35%, #F59E0B 70%, #FBBF24 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-weight: 800; font-size: 18px;">T</span>
                  </div>
                  <span style="color: white; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">TRINOXOR</span>
                </div>
                <p style="color: #9ca3af; margin: 0; font-size: 14px; font-style: italic;">Secure • Scalable • Seamless</p>
              </div>
              
              <div style="border-top: 1px solid #374151; padding-top: 20px;">
                <p style="color: #6b7280; margin: 0; font-size: 12px;">Best regards, <strong style="color: #7C3AED;">The Trinoxor Team</strong></p>
                <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">© ${new Date().getFullYear()} Trinoxor. All rights reserved.</p>
              </div>
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);
    
    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email' };
  }
}