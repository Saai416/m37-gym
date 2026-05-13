import { useScrollReveal } from "@/hooks/useScrollReveal";
import type {
  ClassItem,
  Feature,
  MembershipTier,
  Service,
  Testimonial,
} from "@/types";
import {
  Apple,
  Award,
  Check,
  ChevronRight,
  Clock,
  Dumbbell,
  Heart,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Star,
  Users,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Classes", href: "#classes" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const GALLERY_IMAGES = [
  { src: "/assets/generated/pic1.jpg", alt: "State-of-the-art Equipment" },
  { src: "/assets/generated/pic2.jpg", alt: "Group Classes" },
  { src: "/assets/generated/pic3.jpg", alt: "Personal Training" },
  { src: "/assets/generated/pic4.jpg", alt: "Luxurious Interior" },
];

const FEATURES: Feature[] = [
  {
    icon: "dumbbell",
    title: "State-of-the-Art Equipment",
    description:
      "World-leading machines, free weights, and performance gear — everything a champion needs under one roof.",
  },
  {
    icon: "users",
    title: "Expert Certified Trainers",
    description:
      "Our certified coaches craft personalised programs backed by sports science and years of transformative experience.",
  },
  {
    icon: "monitor",
    title: "Live Online Classes",
    description:
      "Stream live workouts from anywhere. Our virtual studio brings M37Gym Fitness Club directly to your screen, daily.",
  },
  {
    icon: "heart",
    title: "Supportive Community",
    description:
      "Join a thriving family of 500+ members who celebrate every milestone and push each other to new heights.",
  },
];

const SERVICES: Service[] = [
  {
    icon: "dumbbell",
    title: "Personal Training",
    description:
      "One-on-one sessions tailored to your body and goals. Maximum results, zero guesswork.",
  },
  {
    icon: "users",
    title: "Group Classes",
    description:
      "High-energy group workouts — HIIT, Zumba, CrossFit, Yoga, and more at scheduled times.",
  },
  {
    icon: "monitor",
    title: "Online Coaching",
    description:
      "Train anywhere with our live-streamed classes and on-demand video library, curated by experts.",
  },
  {
    icon: "apple",
    title: "Nutrition Planning",
    description:
      "Custom meal plans crafted by registered dietitians to fuel your performance and accelerate recovery.",
  },
  {
    icon: "heart",
    title: "Wellness Programs",
    description:
      "Holistic wellness sessions covering mobility, stress management, and mindfulness for full-body balance.",
  },
  {
    icon: "award",
    title: "Recovery & Mobility",
    description:
      "Dedicated recovery zones with foam rolling, stretching programs, and guided cool-downs for peak longevity.",
  },
];

const CLASSES: ClassItem[] = [
  {
    time: "6:00 AM",
    name: "Morning Strength",
    trainer: "Mon / Wed / Fri",
    duration: "45 min",
    isOnline: false,
  },
  {
    time: "7:30 AM",
    name: "Power Yoga",
    trainer: "Tue / Thu / Sat",
    duration: "60 min",
    isOnline: false,
  },
  {
    time: "9:00 AM",
    name: "HIIT Blast",
    trainer: "Daily",
    duration: "30 min",
    isOnline: true,
  },
  {
    time: "11:00 AM",
    name: "Spin Cycle",
    trainer: "Mon / Wed / Fri",
    duration: "45 min",
    isOnline: false,
  },
  {
    time: "5:00 PM",
    name: "CrossFit WOD",
    trainer: "Tue / Thu / Sat",
    duration: "60 min",
    isOnline: false,
  },
  {
    time: "7:00 PM",
    name: "Live Online Bootcamp",
    trainer: "Daily",
    duration: "45 min",
    isOnline: true,
  },
];

const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: "Basic",
    price: 999,
    period: "mo",
    description:
      "Perfect for beginners — unlimited gym access with core facilities.",
    features: [
      "Unlimited gym access",
      "Locker & shower",
      "2 group classes/month",
      "Fitness assessment",
      "App access",
    ],
    ctaLabel: "Get Started",
  },
  {
    name: "Premium",
    price: 1999,
    period: "mo",
    description:
      "Our most popular plan — full access with unlimited classes and coaching.",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "4 PT sessions/month",
      "Online class access",
      "Nutrition consultation",
      "Priority booking",
    ],
    isFeatured: true,
    ctaLabel: "Join Premium",
  },
  {
    name: "Elite",
    price: 3499,
    period: "mo",
    description:
      "The ultimate transformation package — dedicated coach, full lifestyle support.",
    features: [
      "Everything in Premium",
      "Unlimited PT sessions",
      "Custom meal plan",
      "24/7 coach access",
      "Body composition scans",
      "Merchandise kit",
    ],
    ctaLabel: "Go Elite",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Kumar",
    role: "Lost 18kg in 4 months",
    quote:
      '"M37Gym Fitness Club completely transformed me. The coaches push you to your limits while keeping it safe. Best investment of my life."',
    rating: 5,
    initials: "RK",
  },
  {
    name: "Priya Nair",
    role: "Marathon runner, 3 years",
    quote:
      '"The online coaching is world-class. I trained for my first marathon entirely through M37Gym Fitness Club streams from home."',
    rating: 5,
    initials: "PN",
  },
  {
    name: "Vikram Selvan",
    role: "Competitive bodybuilder",
    quote:
      '"No other gym in Chennai comes close to this level of equipment and expertise. It\'s where serious athletes train."',
    rating: 5,
    initials: "VS",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeatureIcon({ name }: { name: string }) {
  const cls = "w-7 h-7 text-primary";
  if (name === "zap") return <Zap className={cls} />;
  if (name === "users") return <Users className={cls} />;
  if (name === "heart") return <Heart className={cls} />;
  if (name === "award") return <Award className={cls} />;
  if (name === "dumbbell") return <Dumbbell className={cls} />;
  if (name === "monitor") return <Monitor className={cls} />;
  if (name === "apple") return <Apple className={cls} />;
  return <Zap className={cls} />;
}

function RevealSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function FloatingShape({
  className,
  style,
}: { className: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none animate-float ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* ── NAVIGATION ── */}
      <header
        data-ocid="nav.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-dark shadow-glow-red border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/pic5.jpeg"
              alt="M37Gym Fitness Club Logo"
              className="h-12 w-auto object-contain rounded-full"
            />
            <span className="font-display font-bold text-xl tracking-wider text-foreground ml-2">
              M37GYM <span className="text-primary">FITNESS</span>
            </span>
          </button>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                type="button"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("#membership")}
              data-ocid="nav.join_button"
              type="button"
              className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-sm text-primary-foreground font-semibold text-sm tracking-wide transition-smooth hover:scale-105 hover:shadow-glow-red"
              style={{
                background: "linear-gradient(135deg, #d41e3a 0%, #ff4757 100%)",
              }}
            >
              Join Now <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.menu_toggle"
              type="button"
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-dark border-t border-primary/20"
              data-ocid="nav.mobile_menu"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    type="button"
                    className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("#membership")}
                  type="button"
                  data-ocid="nav.mobile_join_button"
                  className="mt-2 w-full py-3 bg-primary text-primary-foreground font-bold tracking-wide rounded-sm hover:bg-secondary transition-smooth"
                >
                  Join Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO SECTION ── */}
      <section
        id="home"
        ref={heroRef}
        data-ocid="hero.section"
        className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.18 0.08 20 / 0.6) 0%, #0a0a0a 70%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-20"
          style={{
            backgroundImage: "url(/assets/generated/hero-bg.dim_1920x1080.jpg)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <FloatingShape className="w-64 h-64 top-20 -left-20 bg-primary/10 blur-3xl" />
        <FloatingShape
          className="w-96 h-96 -top-10 right-10 bg-secondary/10 blur-3xl"
          style={{ animationDelay: "-2s" }}
        />
        <FloatingShape
          className="w-32 h-32 bottom-40 left-1/4 bg-primary/20 blur-2xl"
          style={{ animationDelay: "-4s" }}
        />

        {[
          {
            size: "w-16 h-16",
            top: "18%",
            left: "12%",
            right: undefined,
            bottom: undefined,
            delay: "0s",
          },
          {
            size: "w-10 h-10",
            top: "30%",
            left: undefined,
            right: "15%",
            bottom: undefined,
            delay: "-1.5s",
          },
          {
            size: "w-20 h-20",
            top: undefined,
            left: "8%",
            right: undefined,
            bottom: "28%",
            delay: "-3s",
          },
          {
            size: "w-12 h-12",
            top: "55%",
            left: undefined,
            right: "10%",
            bottom: undefined,
            delay: "-2s",
          },
          {
            size: "w-8 h-8",
            top: "70%",
            left: "30%",
            right: undefined,
            bottom: undefined,
            delay: "-4.5s",
          },
        ].map((orb, i) => (
          <div
            key={orb.delay}
            className={`absolute ${orb.size} rounded-sm bg-primary/15 backdrop-blur-sm border border-primary/30 animate-float pointer-events-none`}
            style={{
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
              animationDelay: orb.delay,
              transform: `rotate(${i * 15}deg)`,
            }}
            aria-hidden="true"
          />
        ))}

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-semibold tracking-[0.3em] text-sm md:text-base uppercase mb-6 animate-fade-in">
              Chennai's Premier Fitness Destination
            </p>
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter uppercase text-foreground mb-6">
              UNLEASH
              <br />
              <span
                className="text-stroke-primary"
                style={{ textShadow: "0 0 40px oklch(0.55 0.22 25 / 0.5)" }}
              >
                YOUR
              </span>{" "}
              POWER
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Transform your body and mind at Perungudi's most advanced fitness
              facility. World-class equipment, expert coaches, and a community
              that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo("#membership")}
                data-ocid="hero.primary_button"
                type="button"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-bold text-base tracking-wider uppercase transition-smooth hover:scale-105 hover:shadow-glow-red"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 25) 0%, oklch(0.58 0.25 20) 100%)",
                  color: "oklch(0.98 0 0)",
                }}
              >
                Start Training{" "}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                data-ocid="hero.secondary_button"
                type="button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-bold text-base tracking-wider uppercase border-2 border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-smooth hover:scale-105"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              ["500+", "Members"],
              ["15+", "Expert Coaches"],
              ["10+", "Class Types"],
            ].map(([val, lab]) => (
              <div key={lab} className="text-center">
                <div className="text-3xl font-display font-black text-primary">
                  {val}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {lab}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section
        id="features"
        data-ocid="features.section"
        className="py-24 bg-muted"
      >
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-[0.3em] text-xs uppercase mb-3">
                Why M37Gym Fitness Club
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Built for <span className="text-stroke-primary">Champions</span>
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <RevealSection key={f.title}>
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px oklch(0.55 0.22 25 / 0.2)",
                  }}
                  data-ocid={`features.item.${i + 1}`}
                  className="group h-full p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-smooth cursor-default shadow-sm"
                >
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-smooth">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section
        id="services"
        data-ocid="services.section"
        className="py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-[0.3em] text-xs uppercase mb-3">
                What We Offer
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Comprehensive fitness solutions — in-gym, online, and beyond —
                designed to match every goal and lifestyle.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <RevealSection key={s.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  data-ocid={`services.item.${i + 1}`}
                  className="group relative p-7 rounded-lg glass-dark border border-border hover:border-primary/60 transition-smooth overflow-hidden cursor-default"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.22 25 / 0.08) 0%, transparent 60%)",
                    }}
                  />
                  <div className="w-12 h-12 rounded-md bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-smooth">
                    <FeatureIcon name={s.icon} />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-smooth">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASS SCHEDULE ── */}
      <section
        id="classes"
        data-ocid="classes.section"
        className="py-24"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, oklch(0.1 0.03 20) 0%, #0a0a0a 70%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-[0.3em] text-xs uppercase mb-3">
                Weekly Program
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Class <span className="text-primary">Schedule</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Book your spot in advance. Online classes marked with a stream
                icon.
              </p>
            </div>
          </RevealSection>
          <div className="space-y-3">
            {CLASSES.map((c, i) => (
              <RevealSection key={c.name}>
                <motion.div
                  whileHover={{ x: 4 }}
                  data-ocid={`classes.item.${i + 1}`}
                  className="group flex items-center gap-5 p-5 rounded-lg bg-card/60 border border-border hover:border-primary/50 backdrop-blur-sm transition-smooth cursor-default"
                >
                  <div className="w-1 self-stretch rounded-full bg-primary shrink-0" />
                  <div className="w-20 shrink-0">
                    <span className="font-display font-bold text-primary text-lg">
                      {c.time}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground truncate">
                        {c.name}
                      </h4>
                      {c.isOnline && (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          <Wifi className="w-3 h-3" /> Online
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">{c.trainer}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm shrink-0">
                    <Clock className="w-4 h-4" /> {c.duration}
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PRICING ── */}
      <section
        id="membership"
        data-ocid="membership.section"
        className="py-24"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, oklch(0.08 0.03 20) 0%, #0a0a0a 70%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-[0.3em] text-xs uppercase mb-3">
                Simple Pricing
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Membership <span className="text-primary">Plans</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Transparent pricing. No hidden fees. Choose the plan that
                matches your ambition.
              </p>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {MEMBERSHIP_TIERS.map((tier, i) => (
              <RevealSection key={tier.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  data-ocid={`membership.item.${i + 1}`}
                  className={`relative flex flex-col h-full rounded-lg border-2 transition-smooth ${
                    tier.isFeatured
                      ? "border-primary bg-card scale-105"
                      : "border-border bg-card hover:border-primary/50"
                  } p-8`}
                  style={
                    tier.isFeatured
                      ? {
                          boxShadow:
                            "0 0 40px oklch(0.55 0.22 25 / 0.5), 0 0 80px oklch(0.55 0.22 25 / 0.2)",
                        }
                      : undefined
                  }
                >
                  {tier.isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-display font-black text-2xl uppercase text-foreground mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {tier.description}
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="font-display font-black text-5xl text-foreground">
                      ₹{tier.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      /{tier.period}
                    </span>
                  </div>
                  <ul className="flex-1 space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    data-ocid={`membership.cta_button.${i + 1}`}
                    onClick={() => scrollTo("#contact")}
                    className={`w-full py-3.5 rounded-sm font-bold tracking-wider uppercase text-sm transition-smooth hover:scale-105 ${
                      tier.isFeatured
                        ? "bg-primary hover:bg-secondary text-primary-foreground hover:shadow-glow-red"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {tier.ctaLabel}
                  </button>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section
        id="gallery"
        data-ocid="gallery.section"
        className="py-24 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-[0.3em] text-xs uppercase mb-3">
                Inside The Gym
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Our <span className="text-stroke-primary">Gallery</span>
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <RevealSection
                key={img.src}
                className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative rounded-lg overflow-hidden border border-border/50 bg-black flex items-center justify-center cursor-pointer h-64 sm:h-80 md:h-96"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 pointer-events-none">
                    <p className="text-foreground font-display font-bold text-xl uppercase tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {img.alt}
                    </p>
                    <div className="w-8 h-1 bg-primary mt-2 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section data-ocid="testimonials.section" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-[0.3em] text-xs uppercase mb-3">
                Member Stories
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-foreground">
                Real <span className="text-primary">Results</span>
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <RevealSection key={t.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  data-ocid={`testimonials.item.${i + 1}`}
                  className="flex flex-col h-full p-8 rounded-lg glass-dark border border-border hover:border-primary/40 transition-smooth"
                >
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }, (_, si) => (
                      <Star
                        key={`star-${t.name}-${si}`}
                        className="w-4 h-4 fill-current"
                        style={{ color: "#ffd700" }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {t.name}
                      </div>
                      <div className="text-primary text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        id="contact"
        data-ocid="footer.section"
        className="bg-card border-t border-border"
      >
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6 justify-center">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value:
                    "31, anna nedunsalai, Perunthalaivar Kamarajar Nagar, Perungudi, Chennai, Tamil Nadu 600096",
                },
                { icon: Phone, label: "Phone", value: "098411 12404" },
                { icon: Mail, label: "Email", value: "info@m37gym.in" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="text-foreground font-medium text-sm">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-64 rounded-lg overflow-hidden border border-border/50 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=M37Gym%20Fitness%20Club,%20Perungudi,%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) contrast(85%)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/generated/pic5.jpeg"
                alt="M37Gym Fitness Club Logo"
                className="h-12 w-auto object-contain rounded-full"
              />
              <span className="font-display font-bold text-xl tracking-wider">
                M37GYM <span className="text-primary">FITNESS</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Chennai's premier fitness destination. Empowering over 500 members
              to unlock their peak performance since 2018.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-4 text-foreground">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon–Fri: 5:00 AM – 11:00 PM</li>
              <li>Saturday: 6:00 AM – 10:00 PM</li>
              <li>Sunday: 7:00 AM – 8:00 PM</li>
              <li className="text-primary font-medium">Online 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>
              © {new Date().getFullYear()} M37Gym Fitness Club, Perungudi,
              Chennai. All rights reserved.
            </span>
            <span>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/919841112404?text=Hi%20M37Gym%20Fitness%20Club%2C%20I'm%20interested%20in%20joining!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}
