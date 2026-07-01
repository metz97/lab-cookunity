import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChefHat,
  Leaf,
  Microwave,
  Quote,
  ShoppingBag,
  Star,
  Truck,
  Utensils,
} from "lucide-react";

const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "#";

const navLinks = [
  { label: "Our chefs", href: "#chefs" },
  { label: "How it works", href: "#how" },
  { label: "This week's menu", href: "#menu" },
  { label: "Plans", href: "#plans" },
];

const pressLogos = ["The New York Times", "Forbes", "Bon Appétit", "TechCrunch", "Eater"];

const steps = [
  {
    icon: Utensils,
    title: "Pick your meals",
    body: "Browse a rotating menu of 500+ chef-crafted dishes and add the ones that make your mouth water.",
  },
  {
    icon: Truck,
    title: "We deliver fresh",
    body: "Meals arrive chilled — never frozen — in fully recyclable packaging on the day that suits you.",
  },
  {
    icon: Microwave,
    title: "Heat & enjoy",
    body: "Ready in under 4 minutes. No prep, no cleanup, just restaurant-quality food at your table.",
  },
];

const chefs = [
  {
    name: "Sofia Marin",
    cuisine: "Modern Mexican",
    city: "Los Angeles",
    emoji: "🌮",
    gradient: "from-[#F9C846] to-[#E8552B]",
  },
  {
    name: "Daniel Okafor",
    cuisine: "West-African Soul",
    city: "Brooklyn",
    emoji: "🍲",
    gradient: "from-[#E8552B] to-[#A8321C]",
  },
  {
    name: "Yuki Tanaka",
    cuisine: "Japanese Izakaya",
    city: "San Francisco",
    emoji: "🍱",
    gradient: "from-[#1F4E3D] to-[#2E7D5B]",
  },
  {
    name: "Elena Rossi",
    cuisine: "Coastal Italian",
    city: "Chicago",
    emoji: "🍝",
    gradient: "from-[#D98324] to-[#8C4A1E]",
  },
];

const meals = [
  {
    name: "Miso-Glazed Salmon",
    chef: "Yuki Tanaka",
    tags: ["High protein", "Gluten-free"],
    kcal: 540,
    emoji: "🍣",
    gradient: "from-[#FDE8D7] to-[#F6C89A]",
  },
  {
    name: "Birria Short Rib Tacos",
    chef: "Sofia Marin",
    tags: ["Chef's pick"],
    kcal: 680,
    emoji: "🌮",
    gradient: "from-[#FBE3DE] to-[#F2A88F]",
  },
  {
    name: "Jollof Rice & Suya Chicken",
    chef: "Daniel Okafor",
    tags: ["Spicy", "Dairy-free"],
    kcal: 620,
    emoji: "🍗",
    gradient: "from-[#FCEBCB] to-[#EFC07A]",
  },
  {
    name: "Lemon Ricotta Cavatelli",
    chef: "Elena Rossi",
    tags: ["Vegetarian"],
    kcal: 560,
    emoji: "🍝",
    gradient: "from-[#EAF3EC] to-[#BFE0CB]",
  },
  {
    name: "Korean Gochujang Bowl",
    chef: "Yuki Tanaka",
    tags: ["Low carb"],
    kcal: 490,
    emoji: "🥘",
    gradient: "from-[#FDE2E0] to-[#F4A5A0]",
  },
  {
    name: "Charred Veggie Mole",
    chef: "Sofia Marin",
    tags: ["Vegan", "Plant-based"],
    kcal: 450,
    emoji: "🥗",
    gradient: "from-[#EBF1DC] to-[#CADFA0]",
  },
];

const menuFilters = ["All", "High protein", "Vegan", "Gluten-free", "Low carb", "Chef's pick"];

const valueProps = [
  {
    icon: ChefHat,
    title: "Award-winning chefs",
    body: "Every dish is created by a vetted local chef — not a test kitchen — and rotated weekly.",
  },
  {
    icon: CalendarDays,
    title: "Flexible, always",
    body: "Skip a week, pause, or cancel anytime. Your plan flexes around your life, not the other way around.",
  },
  {
    icon: Leaf,
    title: "Better for the planet",
    body: "Carbon-neutral delivery and 100% recyclable or compostable packaging on every order.",
  },
];

const plans = [
  {
    name: "Taster",
    meals: "4 meals / week",
    price: "11.99",
    perks: ["Free delivery over $50", "Skip or pause anytime", "Rotating weekly menu"],
    featured: false,
  },
  {
    name: "Foodie",
    meals: "6 meals / week",
    price: "10.49",
    perks: [
      "Free delivery, always",
      "Priority access to new chefs",
      "Skip or pause anytime",
      "Personalized recommendations",
    ],
    featured: true,
  },
  {
    name: "Family",
    meals: "12 meals / week",
    price: "9.99",
    perks: [
      "Free delivery, always",
      "Largest per-meal savings",
      "Skip or pause anytime",
      "Dedicated support",
    ],
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "It genuinely tastes like takeout from my favorite restaurant — except it's healthier and waiting in my fridge.",
    name: "Priya N.",
    detail: "Member for 1 year",
  },
  {
    quote:
      "I get to eat food from chefs I'd never be able to book a table with. The variety is unreal.",
    name: "Marcus T.",
    detail: "Member for 8 months",
  },
  {
    quote:
      "Cancelling my other meal kit was easy — nothing else comes close on flavor and flexibility.",
    name: "Dana R.",
    detail: "Member for 2 years",
  },
];

const faqs = [
  {
    q: "Are the meals frozen?",
    a: "Never. Meals are prepared fresh by your chef and delivered chilled. They stay good in your fridge for several days.",
  },
  {
    q: "Can I skip a week or cancel?",
    a: "Absolutely. Manage your subscription anytime from your account — skip, pause, or cancel with no fees.",
  },
  {
    q: "Do you accommodate dietary needs?",
    a: "Yes. Filter the menu by high-protein, vegan, vegetarian, gluten-free, low-carb, and more on every order.",
  },
  {
    q: "How much does delivery cost?",
    a: "Delivery is free on the Foodie and Family plans, and free over $50 on the Taster plan.",
  },
];

const footerColumns = [
  { title: "Company", links: ["About us", "Our chefs", "Careers", "Press", "Sustainability"] },
  { title: "Support", links: ["Help center", "Contact", "Delivery areas", "Gift cards"] },
  { title: "Eat", links: ["This week's menu", "How it works", "Plans & pricing", "Reviews"] },
];

export default function CookUnityClonePage() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#1C1917] [color-scheme:light]">
      {/* Demo banner */}
      <div className="flex items-center justify-center gap-3 bg-[#1C1917] px-4 py-2 text-center text-xs text-[#FBF7F0] sm:text-sm">
        <span className="opacity-80">Portfolio lab — static landing page clone</span>
        <Link
          href={portfolioUrl}
          className="inline-flex items-center gap-1 font-semibold text-[#F9C846] underline-offset-2 hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>
      </div>

      {/* Announcement bar */}
      <div className="bg-[#E8552B] px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
        Limited offer — get 60% off your first box + free delivery for a month
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#1C1917]/10 bg-[#FBF7F0]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8552B] text-white">
              <ChefHat className="h-5 w-5" />
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              cook<span className="text-[#E8552B]">unity</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1C1917]/70 transition-colors hover:text-[#1C1917]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden text-sm font-semibold text-[#1C1917] hover:text-[#E8552B] sm:inline"
            >
              Sign in
            </a>
            <a
              href="#plans"
              className="inline-flex items-center justify-center rounded-full bg-[#1C1917] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              View plans
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F9C846]/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#E8552B]/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1C1917]/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1C1917]/70">
                <Star className="h-3.5 w-3.5 fill-[#F9C846] text-[#F9C846]" />
                4.8 / 5 from 40,000+ eaters
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                The best chefs in your city,{" "}
                <span className="text-[#E8552B]">cooking for you.</span>
              </h1>
              <p className="mt-5 max-w-md text-lg text-[#1C1917]/70">
                Fresh, chef-crafted meals delivered to your door. Ready in minutes — no
                shopping, no prep, no cleanup.
              </p>

              <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter your ZIP code"
                  aria-label="ZIP code"
                  className="h-12 flex-1 rounded-full border border-[#1C1917]/15 bg-white px-5 text-sm text-[#1C1917] outline-none ring-[#E8552B] placeholder:text-[#1C1917]/40 focus:ring-2"
                />
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E8552B] px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  See the menu
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#1C1917]/60">
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-[#1F4E3D]" /> Free first delivery
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-[#1F4E3D]" /> Skip anytime
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Leaf className="h-4 w-4 text-[#1F4E3D]" /> Carbon neutral
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-md rounded-[2rem] bg-gradient-to-br from-[#F9C846] via-[#F0934A] to-[#E8552B] p-1 shadow-2xl shadow-[#E8552B]/20">
                <div className="flex h-full w-full items-center justify-center rounded-[1.85rem] bg-[#FBF7F0]">
                  <span className="text-[10rem] leading-none drop-shadow-sm sm:text-[12rem]">
                    🍽️
                  </span>
                </div>
              </div>
              <div className="absolute -left-4 top-6 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-8">
                <p className="text-xs font-semibold text-[#1C1917]/50">Ready in</p>
                <p className="text-lg font-extrabold text-[#E8552B]">4 minutes</p>
              </div>
              <div className="absolute -right-2 bottom-8 rotate-[5deg] rounded-2xl bg-white px-4 py-3 shadow-lg sm:-right-6">
                <p className="text-xs font-semibold text-[#1C1917]/50">New dishes</p>
                <p className="text-lg font-extrabold text-[#1F4E3D]">Every week</p>
              </div>
            </div>
          </div>
        </section>

        {/* Press logos */}
        <section className="border-y border-[#1C1917]/10 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-7 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1C1917]/40">
              As seen in
            </span>
            {pressLogos.map((logo) => (
              <span
                key={logo}
                className="text-base font-bold tracking-tight text-[#1C1917]/35 sm:text-lg"
              >
                {logo}
              </span>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E8552B]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Restaurant-quality meals in three steps
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1C1917] text-white">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute right-1/2 top-0 -translate-y-1 translate-x-10 text-sm font-extrabold text-[#E8552B]">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[#1C1917]/65">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the chefs */}
        <section id="chefs" className="bg-[#1F4E3D] py-20 text-[#FBF7F0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F9C846]">
                  Meet your chefs
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Real chefs. Real kitchens. Real flavor.
                </h2>
                <p className="mt-3 max-w-xl text-[#FBF7F0]/70">
                  We partner with award-winning local chefs and give them a platform to cook
                  what they love — so you get to taste it.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#FBF7F0]/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#FBF7F0] hover:text-[#1F4E3D]"
              >
                Meet all chefs
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {chefs.map((chef) => (
                <div
                  key={chef.name}
                  className="group overflow-hidden rounded-2xl bg-[#FBF7F0] text-[#1C1917] shadow-lg"
                >
                  <div
                    className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${chef.gradient}`}
                  >
                    <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                      {chef.emoji}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#E8552B]">
                      {chef.cuisine}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{chef.name}</h3>
                    <p className="text-sm text-[#1C1917]/55">{chef.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* This week's menu */}
        <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E8552B]">
              This week&apos;s menu
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              500+ dishes, rotating weekly
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {menuFilters.map((filter, i) => (
              <button
                key={filter}
                type="button"
                className={
                  i === 0
                    ? "rounded-full bg-[#1C1917] px-4 py-2 text-sm font-semibold text-white"
                    : "rounded-full border border-[#1C1917]/15 bg-white px-4 py-2 text-sm font-medium text-[#1C1917]/70 transition-colors hover:border-[#1C1917]/40"
                }
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {meals.map((meal) => (
              <article
                key={meal.name}
                className="group overflow-hidden rounded-2xl border border-[#1C1917]/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${meal.gradient}`}
                >
                  <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                    {meal.emoji}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-[#1C1917]">
                    {meal.kcal} kcal
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {meal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#FBF7F0] px-2.5 py-0.5 text-xs font-semibold text-[#1F4E3D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-tight">{meal.name}</h3>
                  <p className="mt-1 text-sm text-[#1C1917]/55">by {meal.chef}</p>
                  <button
                    type="button"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1C1917]/15 py-2.5 text-sm font-semibold transition-colors hover:bg-[#E8552B] hover:text-white"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to box
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Value props */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              {valueProps.map((prop) => (
                <div key={prop.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8552B]/10 text-[#E8552B]">
                    <prop.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{prop.title}</h3>
                    <p className="mt-1.5 text-[#1C1917]/65">{prop.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E8552B]">Plans</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pick a plan that fits your week
            </h2>
            <p className="mt-3 text-[#1C1917]/65">
              The more meals you add, the lower the per-meal price. Change or cancel anytime.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "relative rounded-3xl bg-[#1C1917] p-8 text-[#FBF7F0] shadow-2xl lg:-mt-4 lg:pb-12"
                    : "relative rounded-3xl border border-[#1C1917]/10 bg-white p-8"
                }
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F9C846] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#1C1917]">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p
                  className={
                    plan.featured
                      ? "text-sm text-[#FBF7F0]/60"
                      : "text-sm text-[#1C1917]/55"
                  }
                >
                  {plan.meals}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span
                    className={
                      plan.featured ? "text-sm text-[#FBF7F0]/60" : "text-sm text-[#1C1917]/55"
                    }
                  >
                    / meal
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span
                        className={
                          plan.featured ? "mt-0.5 text-[#F9C846]" : "mt-0.5 text-[#1F4E3D]"
                        }
                      >
                        ✓
                      </span>
                      <span className={plan.featured ? "text-[#FBF7F0]/85" : "text-[#1C1917]/75"}>
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={
                    plan.featured
                      ? "mt-8 w-full rounded-full bg-[#E8552B] py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                      : "mt-8 w-full rounded-full bg-[#1C1917] py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  }
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#FBE3DE] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Loved by tens of thousands of eaters
              </h2>
              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#E8552B] text-[#E8552B]" />
                ))}
                <span className="ml-2 text-sm font-semibold text-[#1C1917]/70">
                  4.8 average rating
                </span>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
                >
                  <Quote className="h-7 w-7 text-[#E8552B]/30" />
                  <blockquote className="mt-3 flex-1 text-[#1C1917]/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-[#1C1917]/10 pt-4">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-[#1C1917]/55">{t.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-[#1C1917]/10 border-y border-[#1C1917]/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold">
                  {faq.q}
                  <span className="text-2xl font-light text-[#E8552B] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#1C1917]/65">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#E8552B] to-[#A8321C] px-6 py-16 text-center text-white sm:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#F9C846]/30 blur-2xl" />
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your first chef-crafted box is 60% off
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/85">
              Join today and taste why eaters everywhere are cancelling their other meal kits.
            </p>
            <a
              href="#plans"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#E8552B] transition-transform hover:scale-[1.03]"
            >
              Claim my offer
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1C1917]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8552B] text-white">
                  <ChefHat className="h-5 w-5" />
                </span>
                <span className="text-xl font-extrabold tracking-tight">
                  cook<span className="text-[#E8552B]">unity</span>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-[#1C1917]/60">
                Chef-crafted meals, delivered fresh. A static landing page clone built as a
                portfolio lab.
              </p>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-bold uppercase tracking-wide text-[#1C1917]/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[#1C1917]/70 transition-colors hover:text-[#E8552B]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#1C1917]/10 pt-6 text-sm text-[#1C1917]/50 sm:flex-row">
            <p>© {new Date().getFullYear()} CookUnity Clone — demo only, not affiliated.</p>
            <Link href={portfolioUrl} className="font-semibold text-[#E8552B] hover:underline">
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
