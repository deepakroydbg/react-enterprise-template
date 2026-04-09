# 🚀 React Production Template (Vite + TypeScript + Redux + React Query)

A **production-ready React template** built with modern tools and best practices used in real-world applications.

---

# 📦 Tech Stack

* ⚛️ React 18
* ⚡ Vite
* 🟦 TypeScript
* 🧠 Redux Toolkit + Redux Persist
* 🔄 React Query (TanStack Query)
* 🎨 Tailwind CSS
* 🛣️ React Router v6
* 🧹 ESLint (code quality)
* 💅 Prettier (code formatting - check only)
* 🐶 Husky + lint-staged (pre-commit enforcement)

---

# 🎯 What This Template Provides

## ✅ Production-Ready Architecture

* Feature-based folder structure
* Scalable and maintainable codebase

## ✅ API Handling

* Centralized API layer (Axios)
* React Query for:

  * Caching
  * Background updates
  * Server state management

## ✅ State Management

* Redux Toolkit (global state)
* Redux Persist (state persistence)

## ✅ Routing

* Protected routes support
* Clean navigation structure

## ✅ Code Quality (Team Safe)

* ESLint → catches errors
* Prettier → enforces formatting (without auto changes)
* No dependency on VS Code settings

## ✅ Automated Enforcement

* Pre-commit checks using Husky
* Blocks bad code before commit

## ✅ Developer Experience

* Real-time lint errors in UI (Vite plugin)
* Path alias (`@/`) support
* Environment-based config

---

# 📁 Project Structure

```
src
├── App.tsx
├── app
│   └── store.ts
├── components
│   ├── ErrorBoundary.tsx
│   └── Navbar.tsx
├── constants
│   ├── appConfig.ts
│   ├── queryKeys.ts
│   └── routes.ts
├── features
│   └── user
│       ├── userHooks.ts
│       └── userSlice.ts
├── index.css
├── layouts
│   └── DashboardLayout.tsx
├── main.tsx
├── pages
│   ├── About.tsx
│   ├── Dashboard.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   └── Profile.tsx
├── routes
│   ├── AppRoutes.tsx
│   ├── ProtectedRoute.tsx
│   └── routeConfig.ts
├── services
│   ├── apiClient.ts
│   └── userApi.ts
├── types
│   └── user.ts
└── vite-env.d.ts
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd react-prod-template
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Initialize Husky (IMPORTANT)

```bash
npx husky init
```

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

👉 App will run on:

```
http://localhost:3000
```

---

# 🧪 Available Scripts

## 🔹 Start Dev Server

```bash
npm run dev
```

## 🔹 Build for Production

```bash
npm run build
```

## 🔹 Preview Build

```bash
npm run preview
```

## 🔹 Lint Code

```bash
npm run lint
```

## 🔹 Fix Lint Issues

```bash
npm run lint:fix
```

## 🔹 Check Formatting

```bash
npm run format:check
```

---

# 🔐 Code Quality Workflow

## ✅ While Coding

* ESLint errors shown in browser (via Vite plugin)

## ✅ While Committing

* Husky runs:

  * ESLint
  * Prettier check
* ❌ Blocks commit if issues found

## ✅ No Auto Formatting

* No unwanted changes in commit history

---

# 🌍 Environment Setup

Create `.env` files:

```
.env.development
.env.production
```

Example:

```env
VITE_API_BASE_URL=http://localhost:3000
```

---

# 🔥 Key Features

* 🚀 Fast development (Vite)
* 🧠 Smart data fetching (React Query)
* 🏗️ Scalable architecture
* 🔐 Route protection ready
* 📦 Clean API structure
* 🎯 Type-safe code
* 🧹 Strict linting rules
* 👥 Team-friendly setup

---

# ⚠️ Important Notes

* ESLint runs in **development only** (not in production build)
* Prettier does **NOT auto-format** (only checks)
* No dependency on editor settings (VS Code optional)

---

# 🧠 Best Practices Followed

* Separation of concerns
* Feature-based architecture
* Centralized configuration
* Reusable components
* Clean code principles

---

# 🚀 Future Improvements (Optional)

* ✅ Add CI/CD (GitHub Actions)
* ✅ Add testing (Jest / React Testing Library)
* ✅ Add authentication system
* ✅ Add role-based access control

---

# 🤝 Contribution

Feel free to fork and improve this template.

---

# ⭐ Final Note

This template is designed to help you build **scalable, maintainable, and production-grade React applications** — just like in top tech companies.

---

Happy Coding 🚀
