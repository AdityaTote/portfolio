# ⚙️ Portfolio – Aditya Tote

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Hono](https://img.shields.io/badge/Hono-Edge%20Framework-orange?style=for-the-badge)](https://hono.dev/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare)](https://workers.cloudflare.com/)

**A modern backend-engineer-focused portfolio built with Next.js, Hono, and TypeScript — designed to showcase my work across Web2, Web3, and system design.**

[🌐 View Live](#) · [🐛 Report Issue](#) · [✨ Request Feature](#)

</div>

---

## 📖 About

This portfolio represents my journey as a **Backend Engineer** passionate about building **scalable APIs, distributed systems, and exploring blockchain technologies**.

The site is built for performance, minimalism, and type safety — with a terminal-inspired aesthetic to match my backend identity.

---

## ✨ Features

- ⚙️ **Backend-Oriented Design** – Showcases architecture and engineering work
- � **Modern UI/UX** – Tailwind CSS + shadcn for clean design
- 🌓 **Dark Mode Support** – Seamless transitions
- ⚡ **Blazing Fast** – Next.js 15 + Turbopack
- 🧩 **Component Driven** – Modular, maintainable, type-safe
- � **Animations** – Framer Motion for smooth transitions
- 📱 **Responsive Design** – Works across all screens
- � **Web3 Ready** – Integrates wallet-based interactions

---

## 🧰 Tech Stack

### Core

- **Next.js 15.5.4** – Full-stack React framework
- **TypeScript 5** – Static typing for reliability
- **Hono** – Lightweight backend framework
- **PostgreSQL** – Robust relational database
- **Cloudflare Workers** – Serverless edge deployments

### Styling & UI

- **Tailwind CSS 4** – Utility-first CSS
- **shadcn/ui** – Accessible, prebuilt UI components
- **Lucide Icons** – Clean, minimalist icons

### Dev & Tooling

- **Bun** – Fast runtime and package manager
- **ESLint + Prettier** – Code linting and formatting
- **GitHub Actions** – CI/CD automation

---

## 🚀 Getting Started

### Prerequisites

- **Node.js v18+** or **Bun**
- **Git**

### Installation

```bash
git clone https://github.com/adityatote/portfolio.git
cd portfolio
bun install
```

### Development

```bash
bun dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
bun run build
bun start
```

---

## � Folder Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # UI and section components
│   ├── lib/
│   │   ├── data/         # Data for all sections
│   │   ├── theme-config.ts
│   │   └── utils.ts
│   ├── store/            # Zustand store (state)
│   └── types/            # Type definitions
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🧩 Data Driven Setup

All content is controlled through simple, type-safe data files in:

```
src/lib/data/
│
├── hero-data.ts
├── about-data.ts
├── project-data.ts
├── experience-data.ts
└── skills-data.ts
```

Update the data — and your portfolio updates automatically.

---

## ☁️ Deployment

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adityatote/portfolio)

Also works with:

- **Cloudflare Pages**
- **Netlify**
- **Render**
- **Railway**

---

## 🤝 Contributing

Feedback and ideas are always welcome.

1. Fork this repo
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push and open a PR

---

## � License

This project is open-source under the MIT License.

---

## � Contact

**Aditya Tote**  
Backend & Web3 Engineer

- 🌐 Portfolio: [adityatote.dev](https://adityatote.dev)
- 💼 LinkedIn: [linkedin.com/in/adityatote](https://linkedin.com/in/adityatote)
- 🐙 GitHub: [github.com/AdityaTote](https://github.com/AdityaTote)
- ✉️ Email: adityatote.dev@gmail.com

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

Built with ⚡ by Aditya Tote

</div>
