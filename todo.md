# TODO: Pixel-Perfect Lendora Dashboard & Home Page Cloning

This checklist ensures that both dashboard.html and home.html will match their respective sample images exactly in layout, text, color, spacing, and interactivity.

---

## General
- [ ] Use the correct font family (Inter or Poppins as in the sample).
- [ ] Use the exact color palette from the images (e.g., #6366f1 for primary blue, #f1f5ff for light blue backgrounds, #111827 for text, etc.).
- [ ] Set a consistent max page width (e.g., max-w-7xl mx-auto) for all main sections and containers.
- [ ] Remove any extra or conflicting padding/margins.
- [ ] Ensure all text content matches the sample images exactly (headings, button labels, table data, testimonials, etc.).
- [ ] Use the same icons (Font Awesome, SVG, or as in the sample) and their colors.
- [ ] Test at all breakpoints for pixel-perfect responsiveness.

---

## home.html

- [ ] **Header & Navigation**
  - Logo: "Lendora" in bold, blue (#1e40af), no icon.
  - Navigation links: Home, How It Works, Loan Options, FAQ, Contact (exact text/case).
  - Language switcher: EN | FA | TR, styled as in the sample.
  - Button: "Login / Register" (blue, rounded, right-aligned).
  - Mobile menu: All links, language switcher, and button present and styled as in desktop.

- [ ] **Hero Section**
  - Left: Headline "The Future of Decentralized Lending is Here" (bold, large, black).
  - Subtitle: "A secure, transparent, and community-driven platform to unlock the power of your crypto assets. Borrow and lend with confidence."
  - Button: "Get Started" (blue, large, rounded).
  - Right: Card titled "Instant Loan Calculator" with fields:
    - "I want to borrow" (input, placeholder 5,000, USD suffix)
    - "I want to use" (select: Bitcoin (BTC), Ethereum (ETH), USD Coin (USDC))
    - "Estimated Interest Rate: 5.25%"
    - Button: "Get Started" (blue, full width)
  - Card: white, rounded, shadow, correct spacing.

- [ ] **Stats Section**
  - Four stats, centered, with exact text and numbers:
    - "$1.2B" "Total Value Locked"
    - "50K+" "Active Users"
    - "$500M+" "Loans Originated"
    - "15+" "Supported Assets"
  - Use correct font sizes, colors, and spacing.

- [ ] **Features Section**
  - Title: "Why Choose Lendora?"
  - Subtitle: "Everything you need in a decentralized lending platform."
  - Four cards, each with icon, title, and description:
    - Bank-Grade Security: "Audited smart contracts and industry-leading security protocols."
    - Instant Liquidity: "Access loans or start earning yield in minutes, not days."
    - Competitive Rates: "Our efficient model allows us to offer some of the best rates in the market."
    - Community Governed: "Lendora is governed by its community of users."
  - Use correct icons, colors, and card layout.

- [ ] **How It Works Section**
  - Title: "Get Started in 4 Simple Steps"
  - Four steps, each with a blue number, title, and description:
    - 1: Connect Wallet - "Securely connect your favorite Web3 wallet."
    - 2: Supply Assets - "Deposit crypto to start earning passive income."
    - 3: Borrow Funds - "Use your assets as collateral to borrow."
    - 4: Repay Loan - "Repay your loan at any time to unlock your collateral."

- [ ] **Testimonials Section**
  - Title: "What Our Users Say"
  - Three cards, each with quote, avatar, name, and role:
    - Sarah J., DeFi Enthusiast: "The best DeFi lending platform I've used. Simple, secure, and great returns."
    - Michael L., Crypto Trader: "I was able to get a loan in minutes without any hassle. Highly recommended!"
    - David C., Long-term Holder: "The community governance is what sets Lendora apart. It's great to have a say in the future of the platform."
  - Use correct avatar style, card layout, and spacing.

- [ ] **Contact Section**
  - Title: "Have Questions?"
  - Subtitle: "Our team is here to help. Reach out to us via our support channels and we'll get back to you as soon as possible."
  - Button: "Contact Support" (blue, large, centered)

- [ ] **Footer**
  - Four columns: Lendora (desc), Links (About Us, Features, Contact), Legal (Terms of Service, Privacy Policy), Follow Us (Twitter, Discord, Telegram icons)
  - Bottom: "© 2025 Lendora. All rights reserved."
  - Use correct colors, spacing, and icon styles.

---

## dashboard.html

- [ ] **Sidebar**
  - Logo: Purple building icon and "Lendora" in bold.
  - Menu: Dashboard (active, blue bg/text), My Wallet, Transactions, Statistics, Settings (gray text, regular weight).
  - "Need Help?" box: "Please check our docs" and "DOCUMENTATION" button (blue, full width).
  - Logout: At the bottom, gray text, correct icon.
  - No search bar in sidebar.

- [ ] **Top Bar**
  - Search bar at the top of main content (not in sidebar).
  - Notification and mail icons (gray), user avatar (right-aligned).
  - "Connect Wallet" button (purple, rounded, top right).
  - [ ] Add a network menu beside the Connect Wallet button, as shown in the reference image. Clicking it should open a modal containing the list of networks from Tokens.ts.

- [ ] **Main Header**
  - Title: "Dashboard"

- [ ] **Wallet Alert**
  - Blue alert box: "Your wallet is not connected! Please connect your wallet to manage your funds."
  - No progress bar.

- [ ] **Main Cards**
  - Three cards, white, rounded, shadow:
    - Your Assets: "$12,345.67" with pie icon (green)
    - Available Loan: "$50,000.00" with line icon (blue)
    - Interest Rate: "5.25%" with percent icon (red)
  - Use correct font sizes, colors, and spacing.

- [ ] **Supported Assets Table**
  - Title: "Supported Assets"
  - Table: Asset (icon, name), APY (green), Wallet, Supply (green button), Borrow (blue button)
  - Assets: Bitcoin (3.5%, 0.5 BTC), Ethereum (4.2%, 10 ETH), USDC (2.1%, 5,000 USDC)
  - [ ] Hide the Borrow buttons for all assets (do not remove them, just hide for now). Supply button should remain visible.

### [جدید] Supply Modal
- [ ] با کلیک روی دکمه Supply روبروی هر کوین، یک مودال باز شود.
- [ ] داخل مودال، فرم دو مرحله‌ای مطابق تصاویر ارسالی (Approve و Register) پیاده‌سازی شود:
    - [ ] حالت اول: فرم Approve (مطابق تصویر اول)
    - [ ] پس از تایید، فرم Register (مطابق تصویر دوم)
    - [ ] استایل و رنگ‌ها مطابق نمونه و با استفاده از Bootstrap و SCSS پروژه
    - [ ] قابلیت بستن مودال و مدیریت state مراحل
    - [ ] استفاده از فونت و رنگ‌های پروژه
    - [ ] ریسپانسیو و سازگار با موبایل
- [ ] تصاویر و لینک Figma (در صورت وجود) در ابتدای فایل کامپوننت مودال مستند شود.

- [ ] **Recent Activity**
  - Title: "Recent Activity"
  - Three items:
    - Asset Deposit: +$2,000.00 (green), July 4, 2025
    - Loan Request: -$1,000.00 (red), July 3, 2025
    - Loan Repayment: +$500.00 (black), July 5, 2025
  - Use correct icons, colors, and layout.

- [ ] **How It Works**
  - Title: "How It Works"
  - Three steps, each with blue icon, title, and description:
    - Connect Wallet: "Connect your wallet to get started."
    - Request a Loan: "Request a loan against your assets."
    - Start Earning: "Earn interest on your supplied assets."

- [ ] **Testimonials**
  - Title: "Testimonials"
  - Two cards, each with quote, avatar, name, and country:
    - Sarah J., USA: "Lendora has been a game-changer for me. The platform is easy to use and the interest rates are very competitive."
    - Michael L., UK: "I've tried several lending platforms, but Lendora is by far the best. The customer support is excellent and the platform is very secure."

---

- [ ] **Final Review for Both Pages**
  - Compare every section, text, icon, and spacing to the sample images.
  - Refine all layout, colors, and content for a pixel-perfect, text-accurate match. 




