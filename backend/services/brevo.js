import { BrevoClient } from '@getbrevo/brevo';

const sendWelcomeEmail = async (toEmail) => {
  const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
  });

  await brevo.transactionalEmails.sendTransacEmail({
    sender: {
      name: process.env.FROM_NAME || 'JaceStack AI',
      email: process.env.FROM_EMAIL,
    },
    to: [{ email: toEmail }],
    subject: 'Your Production-Ready RAG Chatbot Kit is Ready',
    htmlContent: `
      <div style="font-family:sans-serif;background:#0a0a0a;color:#fff;max-width:600px;margin:0 auto;padding:40px 32px;border-radius:16px;">
        <h1 style="font-size:28px;font-weight:700;margin-bottom:8px;">Welcome to JaceStack AI</h1>
        <p style="color:#9ca3af;font-size:15px;margin-bottom:32px;">Your production-ready RAG Chatbot Kit is ready.</p>
        <div style="background:rgba(168,85,247,0.08);border:1px solid rgba(168,85,247,0.2);border-radius:12px;padding:24px;margin-bottom:32px;">
          <h2 style="font-size:18px;color:#c084fc;margin:0 0 12px;">What is inside your kit</h2>
          <ul style="color:#d1d5db;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
            <li>Full RAG chatbot source code (LangGraph + Groq + React)</li>
            <li>PDF guide covering development, deployment, and showcasing</li>
            <li>Exclusive walkthrough video</li>
          </ul>
        </div>
        <div style="margin-bottom:32px;">
          <a href="https://github.com/Jack17kdb/ai-smart-chatbot" style="display:inline-block;background:#fff;color:#000;padding:14px 24px;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;margin-right:12px;">View GitHub Repo</a>
          <a href="PDF_DOWNLOAD_PLACEHOLDER" style="display:inline-block;background:transparent;color:#fff;padding:14px 24px;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;border:1px solid rgba(255,255,255,0.15);">Download PDF Guide</a>
        </div>
        <p style="color:#6b7280;font-size:13px;line-height:1.7;">This kit has been used in real client projects including Sentinel AI, Multi-Agent Financial Systems, and real-time platforms in Kenya and beyond. Reply anytime if you want to talk about applying it to your own project.</p>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:32px 0;" />
        <p style="color:#4b5563;font-size:12px;text-align:center;">JaceStack AI · jacestack17@gmail.com · +254 790 697 045</p>
      </div>
    `,
  });
};

export { sendWelcomeEmail };
