# Mobile App UI Design Choices - Tena AI

## 1. Design Philosophy

**"Trust, Simplicity, and Accessibility"**
The mobile app is designed for users in rural communities across Africa. It must work flawlessly on low-end devices, low-bandwidth connections, and be accessible to users with varying levels of literacy.

- **Visual Style**: Clean, modern, medical-grade confidence without being sterile.
- **Interaction Model**: Familiar chat-based interfaces (like WhatsApp) to minimize the learning curve.
- **Performance**: Lightweight assets, offline-first capabilities.

## 2. Color System

Consistent with the web platform to build brand recognition.

- **Primary Brand Color**: `Ocean Blue` (#0369a1) - Used for primary actions, headers, and active states.
- **Secondary Action**: `Sky Blue` (#0ea5e9) - Used for secondary buttons, illustrations, and accents.
- **Trust/Safe Status**: `Teal/Cyan` (#06b6d4) - Used for "Safe" or "Low Risk" health indicators.
- **Warning/Critical**: `Orange/Amber` (#f59e0b) - Used for "Moderate Risk" or alerts.
- **Emergency**: `Rose Red` (#e11d48) - Used ONLY for "High Risk" or "Seek Doctor Immediately" alerts.
- **Backgrounds**: `White` (#ffffff) and `Soft Blue Gray` (#f8fafc) to reduce eye strain.

## 3. Typography

- **Headings**: **Outfit** - Friendly, geometric sans-serif. Used for screen titles and major announcements.
- **Body Text**: **Inter** - Highly readable, standard sans-serif. Used for all chat text, medical advice, and inputs.
- **Sizing**: Minimum body text size of 16px to ensure readability on small screens.

## 4. Key Interface Components

### Button Styles

- **Primary**: Full-width, pill-shaped (rounded full), Ocean Blue background, White text. Large touch targets (min 48px height).
- **Secondary**: Outline style, Ocean Blue border, Ocean Blue text.
- **Floating Action Button (FAB)**: Used for "Start New Chat" or "Emergency Help".

### Icons

- Outlined, rounded icons (using Lucide React or similar) used for navigation.
- Solid icons used for active states.
- **Voice Input Mic**: Prominent microphone icon in the chat input bar to encourage voice usage for less literate users.

## 5. Screen Descriptions

### A. Onboarding & Login

- **Goal**: Zero friction entry.
- **Visuals**: Friendly illustration of a doctor/AI helper.
- **Input**: Phone number entry (primary identity in region). OTP verification. Language selection dropdown prominent at the top.

### B. Home Dashboard

- **Layout**: Card-based grid.
- **Top Section**: User greeting and "How are you feeling today?" prompt.
- **Action Cards**:
  1.  **"Ask Tena" (AI Chat)**: Large, prominent card with Robot/Chat icon.
  2.  **"Check Symptoms"**: Secondary card for guided assessment.
  3.  **"My History"**: Quick access to past consultations.
- **Bottom Navigation**: Home, History, Profile.

### C. AI Medical Assistant (Chat Interface)

- **Layout**: Standard cohesive message bubbles.
  - **User**: Aligned right, Sky Blue bubble.
  - **AI**: Aligned left, Light Gray bubble with "Tena" avatar.
- **Features**:
  - **Quick Replies**: Pill buttons below the last AI message (e.g., "Yes", "No", "Tell me more") to save typing.
  - **Voice Mode**: Tap-to-speak button replacing the send icon when text field is empty.
  - **Media**: Support for sending photos of symptoms (e.g., skin rashes).

### D. Symptom Severity & Results

- **Visual Aid**: A "Traffic Light" system for severity.
  - 🟢 **Green**: "Home Care" - Simple advice provided.
  - 🟡 **Yellow**: "Consult Doctor" - Schedule or direct call CTA.
  - 🔴 **Red**: "Emergency" - Full screen alert with "Call Emergency Services" button.
- **Content**: Clear, bulleted steps. Avoid long paragraphs.

## 6. Accessibility & Localization Focus

- **Voice-First Design**: All critical flows should be navigatable via voice commands.
- **Text-to-Speech**: Button to read out the AI's medical advice.
- **Offline Mode**: App stores the last 10 interactions locally. "Syncing..." indicator when connection is restored.
