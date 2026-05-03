<div align="center">
  <h1>🎁 GiftKhojAI</h1>
  <p><strong>Your AI-Powered Personal Gift Finder for Nepal 🇳🇵</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  </p>
</div>

<br />

## 📌 Project Overview

**GiftKhojAI** is an intelligent web application designed to take the stress out of gift shopping. By leveraging the power of Google's Gemini AI, the platform generates highly personalized, thoughtful gift recommendations tailored to your specific occasion, recipient, and budget constraints. 

What makes GiftKhojAI special is its **local integration**. Instead of just giving generic ideas, it automatically generates direct search links for popular Nepali e-commerce platforms like **Daraz, SastoDoko, and Kinaun**, turning inspiration into instant action.

---

## ✨ Key Features

### 🧠 Intelligent Recommendations
*   **AI-Powered Engine:** Uses Google's Gemini AI model to analyze inputs and suggest creative, context-aware gifts.
*   **Deep Personalization:** Takes into account the recipient's age, gender, relationship to you, and specific interests.
*   **Budget-Aware:** Ensures all recommendations fall strictly within your defined price range.

### 🛍️ Seamless Shopping Experience
*   **Nepali Market Integration:** Generates one-click direct search links for the exact items on top local stores.
*   **Smart Categorization:** Provides reasoning behind *why* the gift is a good match.

### 💻 Modern User Interface
*   **Interactive Multi-Step Form:** A beautiful, friction-free questionnaire experience powered by Framer Motion animations.
*   **Premium Aesthetics:** A polished, responsive design utilizing glassmorphism, dynamic gradients, and smooth transitions.
*   **Celebratory UI:** Engaging micro-interactions, including confetti drops when you find your perfect gift matches.

---

## 🛠️ Tech Stack

**Frontend:**
*   **[Next.js 14](https://nextjs.org/)** - React framework (App Router)
*   **[TypeScript](https://www.typescriptlang.org/)** - Static typing
*   **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
*   **[Framer Motion](https://www.framer.com/motion/)** - Fluid animations & layout transitions
*   **[Lucide React](https://lucide.dev/)** - Beautiful, consistent iconography

**Backend & Data:**
*   **[Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Serverless API endpoints
*   **[Google Gemini API](https://ai.google.dev/)** - Generative AI model
*   **[MongoDB](https://www.mongodb.com/)** - NoSQL Database (via Mongoose)

---

## 🚀 How It Works

1.  **Select the Occasion:** Choose why you are buying the gift (e.g., Birthday, Dashain, Anniversary).
2.  **Detail the Recipient:** Input their age, gender, and your relationship with them.
3.  **Define Constraints:** Set your budget and list a few of their hobbies or interests.
4.  **AI Analysis:** The app sends a highly engineered prompt to the Gemini API.
5.  **View & Shop:** Receive structured gift cards. Click "Daraz" or "SastoDoko" to instantly search for the product and buy it!

---

## ⚙️ Installation & Setup

Want to run GiftKhojAI locally? Follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) and Git installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/GiftKhojAI.git
cd GiftKhojAI
```

### 2. Install dependencies
```bash
npm install
# or yarn install / pnpm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and add your secret keys.

```env
# Google Gemini API Key (Get it from Google AI Studio)
GEMINI_API_KEY=your_gemini_api_key_here

# MongoDB Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/giftkhojai?retryWrites=true&w=majority
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ☁️ Deployment Instructions

GiftKhojAI is optimized for deployment on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and create a new project.
3.  Import the GitHub repository.
4.  Add your environment variables (`GEMINI_API_KEY`, `MONGODB_URI`) in the Vercel project settings.
5.  Click **Deploy**.

---

## 🔮 Future Improvements

While GiftKhojAI is fully functional, here are the roadmap items planned for future releases:

- [ ] **User Accounts & Auth:** Implement NextAuth to let users save favorite gifts and view past search histories.
- [ ] **Direct API Integration:** Partner with local vendors for real-time stock and price checking instead of search redirects.
- [ ] **Gift Reminders:** Push notifications/emails for upcoming birthdays and anniversaries.
- [ ] **Shareable Wishlists:** Allow users to create and share their own desired gifts with friends.

---

<div align="center">
  <p>Built with ❤️ by <strong>Rabin Tamang</strong></p>
</div>
