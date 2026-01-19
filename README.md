<<<<<<< HEAD
Awaki Farmer mobile app
=======

# Tena AI - Healthcare Assistant for Rural Africa

Tena AI is an AI-powered healthcare assistant designed to bring quality medical information and support to rural communities across Africa, starting with Rwanda.

## Features

### 🤖 AI Medical Assistant

- 24/7 instant medical answers trained on evidence-based knowledge
- Multi-language support for accessibility
- Symptom checker and health information

### ⚠️ Severity Assessment

- Real-time symptom analysis
- Urgency ranking system
- Clear action recommendations
- Identifies when professional help is needed

### 👨‍⚕️ Doctor Dashboard

- Monitor patient health statistics
- Track patient progress and history
- Schedule follow-ups
- Direct communication with patients

### 🏥 Admin Portal

- Case management and referral system
- Critical case routing
- System analytics and monitoring
- Automated escalation to medical professionals

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js
- **Build Tool**: Vite
- **Routing**: React Router v7

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with 3D globe
│   ├── Services.tsx         # Service offerings
│   ├── Features.tsx         # Feature highlights
│   ├── DownloadCTA.tsx      # Download call-to-action
│   ├── Footer.tsx           # Footer section
│   └── ComingSoon.tsx       # Coming soon page
├── hooks/
│   └── useIntersectionObserver.ts  # Scroll animation hook
├── App.tsx                  # Main app component
├── index.css               # Global styles with blue theme
└── main.tsx                # Application entry point
```

## Design Theme

- **Color Scheme**: Ocean Blue (#0369a1) and sky blue accents
- **Animations**: Healthcare-themed with heartbeat and pulse effects
- **Typography**: Outfit (display), Inter (body), Poppins (accent)
- **Visual Style**: Modern glassmorphism with gradient backgrounds

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Healthcare Features

### For Users

- Ask health questions 24/7
- Get symptom severity assessment
- Receive recommendations for professional care
- Track health information privately

### For Doctors

- View assigned patient profiles
- Monitor health statistics
- Provide follow-up care
- Communicate with patients directly

### For Admins

- Manage system-wide referrals
- Route critical cases appropriately
- Monitor platform health
- Track impact metrics

## Deployment

The project is configured for deployment on modern hosting platforms. Build output goes to the `dist/` directory.

## Security & Privacy

- End-to-end encryption for health data
- HIPAA-compliant infrastructure (in progress)
- Offline-first capability
- Data sovereignty compliance for African markets

## Contributing

We welcome contributions to improve healthcare access across Africa. Please check our contributing guidelines.

## License

MIT License - See LICENSE file for details

## Contact & Support

- **Email**: support@tenai.health
- **Website**: https://tenai.health
- **Twitter**: @TenaAI_Health

---

**Mission**: Bringing quality healthcare to everyone, powered by AI. Starting in Rwanda, scaling across Africa.

> > > > > > > a35279b (Initial Tena AI project setup with healthcare theme, ocean blue colors, and AI assistant features)
