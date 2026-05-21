# 🚀 Smart Developer Hub

An AI-powered developer assistant built with **Angular 19** and **Google Gemini GenAI**. This tool helps developers analyze error logs, generate SQL/Regex from natural language, and review code screenshots — all powered by Gemini's AI capabilities.

## ✨ Features

### 1. 🔍 Log Analyzer
Paste an error log or stack trace, and Gemini will:
- Identify the most likely line causing the error
- Explain the root cause in plain language
- Suggest a code fix

### 2. ⚡ SQL & Regex Generator
Describe what you need in Vietnamese or English, and Gemini will generate:
- SQL queries
- Regular expressions
- Code snippets

### 3. 🖼️ Code Reviewer (Multimodal)
Upload a screenshot of your code or system diagram, and Gemini will:
- Read and understand the image
- Review for clean code practices
- Flag potential security issues

## 🏗️ Architecture

```
Browser (Angular) → Express SSR Server (server.ts) → @google/genai SDK → Google Gemini API
```

- **API Key Security**: The Gemini API key lives only on the server side (`process.env`), never exposed to the browser.
- **Server-Side Proxy**: The Angular SSR Express server doubles as the API backend, handling Gemini SDK calls at `/api/gemini/*`.

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Angular 19, RxJS, Reactive Forms    |
| Backend    | Express (via Angular SSR)           |
| AI         | Google Gemini GenAI SDK (`@google/genai`) |
| Language   | TypeScript                          |
| Styling    | SCSS                                |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)
- A [Google Gemini API Key](https://aistudio.google.com/apikey)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd smart-dev-hub

# Install dependencies
npm install
```

### Running the App

```bash
# Set your Gemini API key
set GEMINI_API_KEY=your-api-key-here

# Start the development server
ng serve
```

Open your browser at `http://localhost:4200/`.

### Building for Production

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── server.ts                  # Express server + Gemini API endpoints
├── app/
│   ├── core/
│   │   └── gemini.service.ts  # Angular service to call backend API
│   ├── app.config.ts          # App providers (HttpClient, Router, etc.)
│   ├── app.routes.ts          # Feature routing
│   └── app.component.ts       # Root component
└── styles.scss                # Global styles
```

## 🧪 Running Tests

```bash
ng test
```

## 📚 What I'm Learning

- Secure API key management (server-side only)
- AI streaming with `generateContentStream()` + RxJS
- Multimodal AI (image → text) with Gemini
- Angular Reactive Forms, Standalone Components, and lazy-loaded routes
- Building a full-stack app with Angular SSR

## 📄 License

This project is for learning purposes.
