🧠 Finpilot App – AI-Powered Personal Finance Dashboard
This is the official Web3-enabled finance dashboard for Finpilot, your personal AI co-pilot for smarter budgeting, spending, and investing.

✨ Features
🔐 Auth via Email + Solana Wallet (Phantom)
📊 Personal Budget: Track spending, income, savings
🪙 $FIN Token Integration: Earn via good habits, DAO voting
⚡ Real-time Market Intel: Gold, Oil, BTC, SOL price feeds
🤖 AI Agent Insights: Personalized recommendations and alerts
📥 CSV Import + Export
🔧 Tech Stack
Layer	Stack
Frontend	Next.js + Tailwind CSS
Backend	Supabase (Postgres + Auth)
AI	OpenAI + Finpilot Agents
Web3	Solana Wallet Adapter
Alerts	Email (MailerLite), Push
📁 Structure
.
├── components/        # UI components (Navbar, Cards, etc.)
├── pages/             # Next.js routes
├── styles/            # Global styles
├── public/            # Static assets
├── lib/               # AI tools, Web3 utils
├── .env.example       # Environment variable setup
└── README.md
⚙️ Setup
git clone https://github.com/yourusername/finpilot-app.git
cd finpilot-app
npm install
cp .env.example .env.local
npm run dev
Set up your .env.local file with your Supabase / OpenAI / Web3 credentials.

🚀 Deployment
We recommend Vercel for seamless deployment:

Deploy with Vercel

🧠 Philosophy
"Even if you earn the same, you can become wealthier by spending smarter."

📬 Contact
Website: finpilot.ai
App: app.finpilot.tools (soon)
Twitter: @finpilotapp
Discord: Coming soon...

🪙 License
MIT – Build it, use it, improve it.
