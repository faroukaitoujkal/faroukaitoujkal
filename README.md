# Ait Oujkal Farouk - Portfolio

Welcome to my professional developer portfolio repository. This project is a complete, modern web application built to showcase my skills, projects, and professional background as a Software Developer.

## 🌟 Overview

This portfolio is designed with a focus on clean code architecture, smooth user experience, and modern web standards. It features full internationalization (English & French), dynamic theming (Dark & Light modes), and a fully responsive layout.

### 🔗 Live Demo
[farouk-aitoujkal.vercel.app](https://farouk-aitoujkal.vercel.app/)

## 🛠️ Built With

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid)
- **Icons:** Lucide React
- **Form Handling:** EmailJS
- **Analytics:** Vercel Analytics

## ✨ Key Features

- **Component-Driven Architecture:** Clean, reusable React components following modular design patterns.
- **Custom Context Providers:** Lightweight state management for Theme and Language preferences without heavy dependencies.
- **Internationalization (i18n):** Complete translation support seamlessly integrated across all components.
- **Dynamic Theming:** Built-in Light and Dark modes using CSS variables and Context API.
- **Smooth Animations:** Integrated with Framer Motion for elegant scroll effects, page transitions, and interactive elements.
- **Fully Responsive:** Mobile-first approach ensuring a flawless experience on smartphones, tablets, and desktops.
- **Contact Integration:** Functional contact form powered by EmailJS.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/faroukaitoujkal/my-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Copy the `.env.example` file and rename it to `.env`.
   - Fill in your EmailJS credentials:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
     ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

Create an optimized production build:
```bash
npm run build
```
The compiled assets will be output to the `dist` folder, ready for deployment.

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Hero, Projects, Navbar, etc.)
├── context/        # React Context providers (Language, Theme)
├── pages/          # Full page views (Legal, Privacy)
├── utils/          # Helper functions and static data (Translations, Animations)
├── App.jsx         # Main application routing and layout
└── index.css       # Global styles and CSS variables
public/
└── assets/         # Static files (images, documents)
```

## 📬 Contact

**Ait Oujkal Farouk** - Software Developer  
Email: [faroukaitoujkal@gmail.com](mailto:faroukaitoujkal@gmail.com)  
LinkedIn: [linkedin.com/in/farouk-aitoujkal](https://www.linkedin.com/in/farouk-aitoujkal/)  
GitHub: [github.com/faroukaitoujkal](https://github.com/faroukaitoujkal)
