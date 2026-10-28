import {
  ArrowRight,
  CircleHelp,
  Headphones,
  Lock,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Sparkles,
  Ticket,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiChat, OpenChatButton } from "@/components/home/ai-chat";
import { HomeNav } from "@/components/home/home-nav";
import { SmoothScroll } from "@/components/home/smooth-scroll";

const categories: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Account & inloggen",
    text: "Wachtwoord vergeten of geen toegang?",
    icon: Lock,
  },
  {
    title: "Betalingen & facturen",
    text: "Vragen over een betaling of factuur.",
    icon: Receipt,
  },
  {
    title: "Technische problemen",
    text: "Er werkt iets niet zoals je verwacht.",
    icon: Headphones,
  },
  {
    title: "Tickets & status",
    text: "Bekijk je meldingen en de voortgang.",
    icon: Ticket,
  },
  {
    title: "Toegang & rechten",
    text: "Hulp met rollen, teams of permissies.",
    icon: Users,
  },
  {
    title: "Overige vragen",
    text: "Staat jouw onderwerp er niet tussen?",
    icon: CircleHelp,
  },
];

const steps = [
  {
    no: "01",
    title: "Ticket aanmaken",
    text: "Beschrijf je vraag en kies een onderwerp. Zo komt je melding meteen op de juiste plek.",
  },
  {
    no: "02",
    title: "Behandeling",
    text: "We houden je ticket bij en werken het af, zodat je altijd weet waar het staat.",
  },
  {
    no: "03",
    title: "Oplossing",
    text: "Je krijgt een duidelijk antwoord en kunt de melding later terugvinden.",
  },
];

const reasons = [
  {
    title: "Alles op één plek",
    text: "Vragen, tickets en statussen blijven bij elkaar, voor jou en je team.",
    icon: Ticket,
  },
  {
    title: "Rustig overzicht",
    text: "Geen drukke schermen. Je ziet wat openstaat en wat al is opgelost.",
    icon: ShieldCheck,
  },
  {
    title: "Hulp die meedenkt",
    text: "Start met een ticket of stel je vraag aan FastTicket AI.",
    icon: Sparkles,
  },
];

const questions = [
  {
    question: "Hoe maak ik een supportticket aan?",
    answer:
      "Kies Ticket aanmaken, log in en beschrijf je vraag. Daarna kun je de melding volgen.",
  },
  {
    question: "Waar kan ik de status van mijn ticket zien?",
    answer: "Via Mijn tickets, nadat je bent ingelogd.",
  },
  {
    question: "Kan ik een ticket ook zonder account indienen?",
    answer:
      "Je logt in zodat het ticket aan jouw account blijft hangen en je de status later terugziet.",
  },
  {
    question: "Wat als mijn vraag er niet tussen staat?",
    answer: "Kies Overige vragen of open de chat. Je kunt altijd een ticket aanmaken.",
  },
];

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_24px_rgba(35,40,37,.12)] transition hover:bg-primary/90";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground shadow-sm transition hover:border-gold-ink";

export default function Home() {
  return (
    <div className="flex-1 bg-background text-foreground">
      <SmoothScroll />
      <HomeNav />
      <main>
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-gold-ink uppercase">
                FastTicketSupport
              </p>
              <h1 className="mt-4 max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Hulp nodig? Wij staan voor je klaar.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                Stel je vraag rustig. We maken er een ticket van, houden de status bij
                en helpen je verder tot het is opgelost.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/inloggen" className={primaryButton}>
                  Ticket aanmaken
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <OpenChatButton className={secondaryButton}>
                  <MessageCircle className="size-4 text-gold-ink" aria-hidden="true" />
                  Chat met AI
                </OpenChatButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_50px_rgba(35,40,37,.08)]">
                <Image
                  src="/support.jpg"
                  alt="Supportmedewerker met headset achter een laptop"
                  fill
                  priority
                  className="object-cover object-[center_42%]"
                  sizes="(min-width: 1024px) 36rem, 100vw"
                />
              </div>
              <div className="absolute bottom-20 left-4 flex max-w-[280px] gap-3 rounded-lg border border-border bg-card p-3.5 shadow-[0_14px_40px_rgba(35,40,37,.1)] sm:-bottom-4 sm:left-6">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#F6F1E4] text-gold-ink">
                  <Sparkles className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm">FastTicket AI</strong>
                  <span className="text-xs leading-5 text-muted-foreground">
                    Hoi! Waarmee kan ik je vandaag helpen?
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="onderwerpen" className="scroll-mt-8 bg-card px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <p className="text-xs font-medium tracking-[0.16em] text-gold-ink uppercase">Onderwerpen</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Waarmee kunnen we je helpen?
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Kies een onderwerp dat bij je vraag past. Dan komt je melding meteen op
                de juiste plek terecht.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.title}
                    href="/inloggen"
                    className="rounded-lg border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:border-gold-ink hover:shadow-[0_12px_30px_rgba(35,40,37,.06)]"
                  >
                    <span className="grid size-11 place-items-center rounded-lg bg-[#F6F1E4] text-gold-ink">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.text}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="zo-werkt-het" className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-gold-ink uppercase">Werkwijze</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Hoe werkt het?
              </h2>
              <p className="mt-3 max-w-sm text-base leading-7 text-muted-foreground">
                Drie rustige stappen. Geen omweg, wel een duidelijk ticket.
              </p>
              <Link href="/inloggen" className={`${primaryButton} mt-8`}>
                Ticket aanmaken
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ol className="grid gap-4">
              {steps.map((step) => (
                <li
                  key={step.no}
                  className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#F6F1E4] text-sm font-semibold text-gold-ink">
                    {step.no}
                  </span>
                  <span>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="waarom" className="scroll-mt-8 bg-card px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <p className="text-xs font-medium tracking-[0.16em] text-gold-ink uppercase">Het platform</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Waarom FastTicketSupport?
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <article key={reason.title} className="rounded-lg border border-border bg-background p-6">
                    <Icon className="size-5 text-gold-ink" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-semibold">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{reason.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="veelgestelde-vragen" className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-gold-ink uppercase">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Veelgestelde vragen
              </h2>
              <p className="mt-3 max-w-xs text-base leading-7 text-muted-foreground">
                Staat je antwoord er niet bij? Maak een ticket aan of open de chat.
              </p>
            </div>
            <div className="border-t border-border">
              {questions.map((item) => (
                <details key={item.question} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-ink [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="text-gold-ink transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mr-8 mb-5 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="hulp" className="scroll-mt-8 px-5 pb-24 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card px-8 py-10 shadow-sm sm:px-12 sm:py-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Nog hulp nodig?</h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                Leg je vraag bij ons neer. We maken er een ticket van en houden je op de hoogte.
              </p>
            </div>
            <Link href="/inloggen" className={primaryButton}>
              Ticket aanmaken
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-base font-semibold">
              FastTicket<span className="text-gold-ink">Support</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Eén plek voor je vragen, tickets en support.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Support</h2>
            <a className="mt-3 block text-sm text-muted-foreground hover:text-gold-ink" href="#onderwerpen">
              Onderwerpen
            </a>
            <a className="mt-2 block text-sm text-muted-foreground hover:text-gold-ink" href="#zo-werkt-het">
              Hoe het werkt
            </a>
            <a className="mt-2 block text-sm text-muted-foreground hover:text-gold-ink" href="#veelgestelde-vragen">
              Veelgestelde vragen
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Account</h2>
            <Link className="mt-3 block text-sm text-muted-foreground hover:text-gold-ink" href="/inloggen">
              Inloggen
            </Link>
            <Link className="mt-2 block text-sm text-muted-foreground hover:text-gold-ink" href="/registreren">
              Registreren
            </Link>
          </div>
        </div>
      </footer>
      <AiChat />
    </div>
  );
}
