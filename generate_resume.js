import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontMono = await pdfDoc.embedFont(StandardFonts.Courier);

  // Background
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: rgb(0.99, 0.99, 0.99),
  });

  // Top Accent Bar (Gold)
  page.drawRectangle({
    x: 0,
    y: height - 8,
    width,
    height: 8,
    color: rgb(0.85, 0.65, 0.22),
  });

  let y = height - 48;

  // Header: Name
  page.drawText("TUSHAR THAKUR", {
    x: 40,
    y,
    size: 24,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.12),
  });

  y -= 18;
  page.drawText("Computer Engineer | AI & Robotics Scholar | VIT Pune", {
    x: 40,
    y,
    size: 11,
    font: fontRegular,
    color: rgb(0.5, 0.4, 0.15),
  });

  y -= 16;
  page.drawText("Email: connect@tusharthakur.com.np  |  GitHub: github.com/thistushar24  |  LinkedIn: linkedin.com/in/tushar-thakur-429b01288", {
    x: 40,
    y,
    size: 8,
    font: fontMono,
    color: rgb(0.35, 0.35, 0.4),
  });

  y -= 12;
  page.drawLine({
    start: { x: 40, y },
    end: { x: width - 40, y },
    thickness: 1,
    color: rgb(0.88, 0.88, 0.9),
  });

  function drawSection(title) {
    y -= 22;
    page.drawText(title.toUpperCase(), {
      x: 40,
      y,
      size: 11,
      font: fontBold,
      color: rgb(0.75, 0.55, 0.15),
    });
    page.drawLine({
      start: { x: 40, y: y - 4 },
      end: { x: width - 40, y: y - 4 },
      thickness: 0.75,
      color: rgb(0.85, 0.7, 0.3),
    });
    y -= 14;
  }

  // 1. EDUCATION
  drawSection("Education");
  page.drawText("Vishwakarma Institute of Technology (VIT), Pune", {
    x: 40,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0.12, 0.12, 0.15),
  });
  page.drawText("2022 - Present", {
    x: width - 120,
    y,
    size: 9,
    font: fontRegular,
    color: rgb(0.4, 0.4, 0.4),
  });
  y -= 12;
  page.drawText("Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science", {
    x: 40,
    y,
    size: 9,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.28),
  });
  y -= 11;
  page.drawText("Focus: Computer Vision, Embedded Robotics, Neural Architectures, Inverse Kinematics", {
    x: 40,
    y,
    size: 8,
    font: fontRegular,
    color: rgb(0.45, 0.45, 0.48),
  });

  // 2. TECHNICAL EXPERTISE
  drawSection("Technical Repertoire & Skills");
  const skills = [
    ["Languages", "Python, C, C++, JavaScript, TypeScript, SQL, HTML5, CSS3"],
    ["AI & Vision", "PyTorch, OpenCV, YOLOv8, Computer Vision, Deep Learning, TensorRT, Scikit-Learn"],
    ["Hardware & IoT", "ESP32 (FreeRTOS/ESP-IDF), Arduino, Raspberry Pi, Robotics Kinematics, KiCad"],
    ["Frameworks & Tools", "React, Vite, Tailwind CSS, FastAPI, Flask, Git/GitHub, Docker, Linux"],
    ["Design & Spatial", "Figma (Design Systems), Autodesk Fusion 360 (Parametric 3D CAD), Canva"],
  ];
  skills.forEach(([cat, val]) => {
    page.drawText(`${cat}: `, {
      x: 40,
      y,
      size: 8.5,
      font: fontBold,
      color: rgb(0.15, 0.15, 0.18),
    });
    page.drawText(val, {
      x: 130,
      y,
      size: 8.5,
      font: fontRegular,
      color: rgb(0.3, 0.3, 0.35),
    });
    y -= 12;
  });

  // 3. FEATURED PROJECTS
  drawSection("Key Technical Projects");
  const projects = [
    {
      name: "Synapse Vision AI (Autonomous Edge Object Detection & Spatial Tracking)",
      tech: "Python, PyTorch, OpenCV, TensorRT, ROS2",
      bullets: [
        "Architected an INT8 quantized multi-class computer vision pipeline sustaining 60 FPS on edge hardware.",
        "Implemented Kalman spatial trajectory prediction maintaining tracking through extreme camera occlusions."
      ]
    },
    {
      name: "Aegis Hexapod 18-DOF (Bio-inspired Omnidirectional Walker)",
      tech: "ESP32, C++, Autodesk Fusion 360, Inverse Kinematics",
      bullets: [
        "Modeled parametric 3-DOF leg assemblies and derived analytical closed-form inverse kinematics at 100Hz.",
        "Engineered dual-core FreeRTOS task segregation preventing power brown-outs across 18 high-torque servos."
      ]
    },
    {
      name: "Aether OS Interface (Contextual Minimalist Knowledge Operating System)",
      tech: "React, TypeScript, Tailwind CSS, Framer Motion, Vite",
      bullets: [
        "Designed and built an avant-garde digital dossier with responsive SVG botanical Bézier generative roots.",
        "Achieved 100/100 Lighthouse performance rating with sub-second page transitions."
      ]
    }
  ];

  projects.forEach((proj) => {
    page.drawText(proj.name, {
      x: 40,
      y,
      size: 9.5,
      font: fontBold,
      color: rgb(0.12, 0.12, 0.15),
    });
    y -= 11;
    page.drawText(`Tech Stack: ${proj.tech}`, {
      x: 40,
      y,
      size: 8,
      font: fontMono,
      color: rgb(0.55, 0.42, 0.15),
    });
    y -= 10;
    proj.bullets.forEach((b) => {
      page.drawText(`•  ${b}`, {
        x: 48,
        y,
        size: 8,
        font: fontRegular,
        color: rgb(0.28, 0.28, 0.32),
      });
      y -= 10;
    });
    y -= 3;
  });

  // 4. LEADERSHIP & EXPERIENCE
  drawSection("Experience & Institutional Leadership");
  const exp = [
    {
      org: "I2IAOC - VIT Pune",
      role: "Public Relations Officer & Design Coordinator",
      period: "2023 - Present",
      desc: "Direct PR outreach and design direction for collegiate innovation summits with 3,500+ attendees."
    },
    {
      org: "The Ideators Club - VIT Pune",
      role: "Secretary",
      period: "2023 - Present",
      desc: "Lead operational governance and curate campus-wide hackathons yielding 28 functional prototypes."
    },
    {
      org: "The Robotics Forum - VIT Pune",
      role: "Graphic Designer & R&D Assistant",
      period: "2022 - 2023",
      desc: "Assisted core division in 3D CAD modeling, 3D printing chassis, and telemetry circuit debugging."
    }
  ];

  exp.forEach((e) => {
    page.drawText(`${e.role} - ${e.org}`, {
      x: 40,
      y,
      size: 9,
      font: fontBold,
      color: rgb(0.12, 0.12, 0.15),
    });
    page.drawText(e.period, {
      x: width - 110,
      y,
      size: 8,
      font: fontRegular,
      color: rgb(0.4, 0.4, 0.4),
    });
    y -= 11;
    page.drawText(e.desc, {
      x: 48,
      y,
      size: 8,
      font: fontRegular,
      color: rgb(0.3, 0.3, 0.35),
    });
    y -= 11;
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/Tushar_Thakur_Resume.pdf', pdfBytes);
  console.log("Resume generated at public/Tushar_Thakur_Resume.pdf with updated links");
}

generateResume();
