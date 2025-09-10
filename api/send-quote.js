// /api/send-quote.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const {
    name,
    email,
    phone,
    company,
    location,
    serviceType,
    equipmentDetails,
    urgency,
    description,
  } = req.body;

  if (!name || !email || !phone || !serviceType || !description) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  // Configuração do transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.dondominio.com",
    port: 465, // Porta STARTTLS
    secure: true, // true se usar 465
    auth: {
      user: "orcamentos@puriflow.pt", // seu email
      pass: process.env.EMAIL_PASS, // senha do .env.local
    },
  });

  const mailOptions = {
    from: '"PURIFLOW Orçamentos" <orcamentos@puriflow.pt>', // remetente autorizado
    to: "orcamentos@puriflow.pt", // destinatário
    subject: `Novo orçamento de ${name}`,
    text: `
Nome: ${name}
Email: ${email}
Telefone: ${phone}
Empresa: ${company}
Localizaçāo: ${location}
Serviço: ${serviceType}
equipamento Detalhes: ${equipmentDetails}
Urgency: ${urgency}
Descrição: ${description}
    `,
    replyTo: email, // importante: permite responder diretamente para o visitante
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado com sucesso:", info.response);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: "Erro ao enviar email" });
  }
}
