export const emailContent = (fullName) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Joining GuidEd</title>
</head>
<body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f5f9fc;">
  <!-- Header with your actual logo -->
  <div style="background: linear-gradient(135deg, #0066cc, #004080); padding: 30px 20px; text-align: center;">
    <img src="https://i.ibb.co/LzJvddFY/Guided-Logo.jpg" alt="GuidEd Logo" style="max-width: 200px; height: auto;">
    <h1 style="color: white; margin: 15px 0 0; font-size: 24px; font-weight: 600;">You're on the GuidEd Waitlist!</h1>
  </div>
  
  <!-- Main content -->
  <div style="background-color: #ffffff; padding: 25px;">
    <p style="font-size: 16px;">Hello <strong>${fullName}</strong>,</p>
    
    <p style="font-size: 15px;">Thank you for joining <strong style="color: #0066cc;">GuidEd</strong> - we're excited to have you as part of our learning revolution!</p>
    
    <div style="background-color: #f0f7ff; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <p style="margin: 0; font-size: 15px;">✨ <strong>What to expect:</strong> Early access to our innovative learning platform designed to transform education.</p>
    </div>
    
    <!-- Feature highlights -->
    <div style="margin: 25px 0;">
      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <div style="width: 40px; height: 40px; background-color: #0066cc; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
          <span style="color: white; font-size: 18px;">1</span>
        </div>
        <div>
          <h3 style="margin: 0 0 5px 0; color: #0066cc; font-size: 16px;">Personalized Learning</h3>
          <p style="margin: 0; font-size: 14px;">AI-powered recommendations tailored to your goals</p>
        </div>
      </div>
      
      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <div style="width: 40px; height: 40px; background-color: #0066cc; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
          <span style="color: white; font-size: 18px;">2</span>
        </div>
        <div>
          <h3 style="margin: 0 0 5px 0; color: #0066cc; font-size: 16px;">Collaborative Tools</h3>
          <p style="margin: 0; font-size: 14px;">Learn with peers and mentors in our interactive spaces</p>
        </div>
      </div>
    </div>
    
    <!-- CTA Button -->
    <div style="text-align: center; margin: 30px 0 20px;">
      <a href="https://guided-wailist.vercel.app/" style="background-color: #0066cc; color: white; padding: 12px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block; font-size: 15px;">Explore What's Coming</a>
    </div>
    
    <p style="font-size: 15px;">We'll notify you as soon as we launch. In the meantime, follow us for updates:</p>
    
    <!-- Social links -->
    <div style="text-align: center; margin: 20px 0;">
      <a href="https://x.com/basscotte_" style="display: inline-block; margin: 0 5px;"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" style="width: 30px;"></a>
      <a href="https://www.linkedin.com/company/guided-tech/?viewAsMember=true" style="display: inline-block; margin: 0 5px;"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 30px;"></a>
      <a href="https://www.instagram.com/guided366/" style="display: inline-block; margin: 0 5px;"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style="width: 30px;"></a>
    </div>
    
    <p style="font-size: 15px;">Best regards,<br>
    <strong>The GuidEd Team</strong></p>
  </div>
  
  <!-- Footer -->
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px; padding: 15px;">
    <p>© ${new Date().getFullYear()} GuidEd. All rights reserved.<br>
    Transforming education through innovative technology</p>
    <p style="margin-top: 10px;">
      <a href="https://guided-wailist.vercel.app/" style="color: #0066cc; text-decoration: none;">www.guidedlearning.com</a>
    </p>
  </div>
</body>
</html>`