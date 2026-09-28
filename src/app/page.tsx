import Image from "next/image";
import { business, directionsUrl, whatsappUrl } from "@/config/business";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M16 .9A15.1 15.1 0 0 0 3 23.7L.9 31l7.5-2A15.1 15.1 0 1 0 16 .9Zm0 27.5a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A12.4 12.4 0 1 1 16 28.4Zm6.8-9.3c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1a10.1 10.1 0 0 1-3-1.9 11.1 11.1 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.3 3.5 1.5 3.8c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
    </svg>
  );
}

function BookingLink({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${light ? "bg-[#f8f5f0] text-[#302820] hover:bg-white" : "bg-[#a7583e] text-white hover:bg-[#8f462f]"} ${className}`}
    >
      <WhatsAppIcon className="h-[18px] w-[18px]" />
      {children}
    </a>
  );
}

const benefits = [
  {
    number: "01",
    title: "Experienced stylists",
    copy: "A considered approach to every cut, colour, and finishing touch.",
  },
  {
    number: "02",
    title: "Quality products",
    copy: "Thoughtful product choices to help your hair look and feel its best.",
  },
  {
    number: "03",
    title: "Comfortable studio",
    copy: "A calm space where you can settle in and enjoy the moment.",
  },
  {
    number: "04",
    title: "Easy booking",
    copy: "Just send us a WhatsApp message and we’ll help you find a time.",
  },
];

const reviews = [
  {
    quote:
      "Exactly the refresh I needed. The whole visit felt relaxed and my hair looked lovely.",
    name: "Aina",
    service: "Haircut",
  },
  {
    quote:
      "The colour turned out soft and natural. I would happily come back for another appointment.",
    name: "Mei Ling",
    service: "Hair Colour",
  },
  {
    quote:
      "Easy to book, welcoming from the start, and such a nice finish after my wash and blow.",
    name: "Priya",
    service: "Wash & Blow",
  },
];

const faqs = [
  {
    question: "Do you accept walk-ins?",
    answer:
      "Walk-ins are welcome when a stylist is available. Messaging us on WhatsApp first is the easiest way to avoid a wait.",
  },
  {
    question: "How do I make an appointment?",
    answer:
      "Tap any Book on WhatsApp button, tell us the service you have in mind, and share your preferred day and time.",
  },
  {
    question: "Is parking available?",
    answer:
      "Parking options vary around Cyberjaya. Ask us for the latest parking details when you book.",
  },
  {
    question: "Can I get a quote for hair colouring?",
    answer:
      "Yes. Colour starts from RM120. The final price depends on hair length, condition, and the look you want, so send us a photo for guidance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Please confirm current payment options with us on WhatsApp before your visit.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="relative z-20 border-b border-[#e8ded3] bg-[#f8f5f0]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-8 lg:px-16">
          <a
            href="#top"
            aria-label={`${business.name}, back to top`}
            className="flex shrink-0 items-center gap-2 text-[#302820] sm:gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a7583e] font-serif text-xl italic text-[#a7583e]">
              {business.name.charAt(0)}
            </span>
            <span className="text-xs font-bold tracking-[.04em] sm:text-base sm:tracking-[.08em]">
              {business.name.toUpperCase()}
            </span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm text-[#5e554e] md:flex"
          >
            <a className="hover:text-[#a7583e]" href="#services">
              Services
            </a>
            <a className="hover:text-[#a7583e]" href="#about">
              About
            </a>
            <a className="hover:text-[#a7583e]" href="#location">
              Location
            </a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-[#302820] px-3 py-2.5 text-xs font-bold transition hover:bg-[#302820] hover:text-white sm:px-5 sm:text-sm"
          >
            Book Now <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section id="top" className="overflow-hidden bg-[#f0e9e1]">
        <div className="mx-auto grid max-w-[1440px] lg:min-h-[690px] lg:grid-cols-[52%_48%]">
          <div className="soft-reveal flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-9 flex items-center gap-3 text-[#a7583e]">
              <span className="h-px w-7 bg-[#a7583e]" />
              <span className="eyebrow">Your hair, your moment</span>
            </div>
            <h1 className="display max-w-[720px] text-[clamp(3.65rem,7vw,7.9rem)] leading-[.98]">
              Feel good
              <br />
              <em className="font-normal text-[#a7583e]">in your hair.</em>
            </h1>
            <p className="mt-7 max-w-[450px] text-base leading-8 text-[#685e55] sm:text-lg">
              {business.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <BookingLink>Book on WhatsApp</BookingLink>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold underline decoration-[#b99682] underline-offset-8 transition hover:text-[#a7583e]"
              >
                View Services <ArrowIcon />
              </a>
            </div>
            <div className="mt-14 flex items-center gap-4 border-t border-[#d8cabc] pt-6 text-[13px] tracking-[.14em] text-[#756a60] uppercase sm:mt-20 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#a7583e]" />{" "}
              {business.address} <span className="h-px w-7 bg-[#c8b6a7]" /> Open
              daily
            </div>
          </div>
          <div className="relative min-h-[480px] bg-[#d7c2b0] sm:min-h-[590px] lg:min-h-full">
            <Image
              src={business.photos.hero}
              alt="Demo salon portrait showing a finished hairstyle"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[center_38%]"
            />
            <div className="absolute bottom-5 left-5 rounded-sm bg-[#f8f5f0]/95 px-5 py-4 shadow-sm sm:bottom-8 sm:left-8">
              <p className="eyebrow text-[#a7583e]">A little time for you</p>
              <p className="display mt-1 text-2xl italic">Leave glowing.</p>
            </div>
            <div className="absolute right-5 top-5 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border border-[#f8f5f0]/80 bg-[#a7583e] text-center text-[9px] font-bold uppercase leading-4 tracking-[.12em] text-white sm:right-8 sm:top-8 sm:h-24 sm:w-24">
              Good hair
              <br />
              energy
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-[#a7583e]">The menu</p>
              <h2 className="display mt-4 text-5xl leading-[1.05] sm:text-6xl">
                A little care,
                <br />
                <em>a lot of confidence.</em>
              </h2>
            </div>
            <p className="max-w-[390px] text-sm leading-7 text-[#766d64] md:justify-self-end">
              From a simple refresh to a new look, our services are designed to
              help you feel like yourself, only brighter.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {business.services.map((service) => (
              <div
                key={service.name}
                className="group flex min-h-[155px] items-start gap-5 border border-[#e4d9cd] bg-[#fffdfa] p-6 transition hover:-translate-y-0.5 hover:border-[#c5a694] hover:shadow-[0_14px_35px_rgba(48,40,32,.06)] sm:p-8"
              >
                <span className="pt-1 text-xs font-bold text-[#b48068]">
                  {service.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="display text-[1.85rem] sm:text-[2.1rem]">
                      {service.name}
                    </h3>
                    <span className="text-sm font-bold text-[#a7583e]">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#766d64]">
                    {service.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] leading-5 text-[#8a8076] sm:text-xs">
            Prices shown are for this fictional demo. Colour and treatment
            prices may vary by hair length and consultation.
          </p>
        </div>
      </section>

      <section className="bg-[#302820] px-5 py-14 text-[#f8f5f0] sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-5 sm:gap-7 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow text-[#d2a28a]">Why Glow</p>
              <h2 className="display mt-4 text-5xl sm:text-6xl">
                More than
                <br />
                <em>good hair.</em>
              </h2>
            </div>
            <p className="max-w-[390px] text-sm leading-7 text-[#c8bdb1] md:justify-self-end">
              The small things make the whole visit. Come as you are, and leave
              with a little extra glow.
            </p>
          </div>
          <div className="mt-8 grid border-t border-white/20 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="border-b border-white/20 py-5 pr-8 sm:py-7 sm:pr-10 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="text-[13px] tracking-widest text-[#d2a28a] sm:text-xs">
                  {benefit.number} / 04
                </span>
                <h3 className="display mt-3 text-[1.7rem] sm:mt-7">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#c8bdb1] sm:mt-3">
                  {benefit.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-[#a7583e]">Inside Glow</p>
              <h2 className="display mt-4 text-5xl sm:text-6xl">
                A glimpse of <em>the good stuff.</em>
              </h2>
            </div>
            <span className="max-w-[240px] text-[13px] leading-5 text-[#8a8076] sm:text-xs">
              Demo imagery. Replace with your salon and client photos before
              launch.
            </span>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {business.photos.gallery.map((photo, index) => (
              <figure
                key={photo.src}
                className={`photo-frame ${index === 1 ? "sm:mt-12" : index === 2 ? "sm:mt-24" : ""}`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#221b15]/75 to-transparent px-5 pb-5 pt-16 text-white">
                  <span className="eyebrow">0{index + 1} / Glow moments</span>
                  <p className="display mt-1 text-3xl">{photo.label}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ede3d8] px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-[#a7583e]">The experience</p>
              <h2 className="display mt-4 text-5xl sm:text-6xl">
                Kind words, <em>for the demo.</em>
              </h2>
            </div>
            <p className="max-w-[340px] text-xs leading-6 text-[#766d64]">
              The reviews below are fictional examples for this website demo.
              They are not real customer testimonials.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="bg-[#f8f5f0] p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="text-sm tracking-[.22em] text-[#a7583e]"
                >
                  ★★★★★
                </div>
                <blockquote className="display mt-8 min-h-32 text-[1.65rem] leading-[1.25]">
                  “{review.quote}”
                </blockquote>
                <div className="fine-rule my-7" />
                <p className="text-sm font-bold">
                  {review.name}{" "}
                  <span className="font-normal text-[#8a8076]">
                    · Demo review
                  </span>
                </p>
                <p className="mt-1 text-xs text-[#8a8076]">{review.service}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24">
          <div className="relative min-h-[340px] overflow-hidden bg-[#d9c5b5] sm:min-h-[460px]">
            <Image
              src={business.photos.gallery[2].src}
              alt="Demo photograph of a welcoming hair studio"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 right-6 rounded-full border border-white/80 bg-[#f8f5f0]/95 px-5 py-3 text-xs font-bold uppercase tracking-[.15em]">
              Come as you are
            </div>
          </div>
          <div>
            <p className="eyebrow text-[#a7583e]">Hello, from Glow</p>
            <h2 className="display mt-5 text-5xl leading-[1.06] sm:text-6xl">
              A welcoming space
              <br />
              for <em>your kind of beautiful.</em>
            </h2>
            <p className="mt-8 max-w-[530px] text-base leading-8 text-[#685e55]">
              {business.name} is a fictional neighbourhood salon in Cyberjaya,
              created for this demo. It imagines a relaxed place for thoughtful
              haircuts, flattering colour, and small moments of care.
            </p>
            <p className="mt-4 max-w-[530px] text-base leading-8 text-[#685e55]">
              Whether you know exactly what you want or want a little guidance,
              the goal is simple: great hair and an experience that feels easy
              from first message to final mirror check.
            </p>
            <a
              href="#location"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#a7583e] underline underline-offset-8"
            >
              Find us in Cyberjaya <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        id="location"
        className="bg-[#ece5db] px-5 py-20 sm:px-8 sm:py-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow text-[#a7583e]">Visit us</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">
              Your next good
              <br />
              <em>hair day is close.</em>
            </h2>
            <p className="mt-6 max-w-[470px] text-sm leading-7 text-[#766d64]">
              Find this demo salon in Cyberjaya. The location is intentionally
              broad until a real business address is added.
            </p>
            <div className="mt-9 grid gap-7 border-t border-[#d5c8b9] pt-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-[#a7583e]">Opening hours</p>
                <p className="mt-3 text-lg font-semibold">
                  {business.hours.days}
                </p>
                <p className="mt-1 text-sm text-[#766d64]">
                  {business.hours.time}
                </p>
              </div>
              <div>
                <p className="eyebrow text-[#a7583e]">Location</p>
                <p className="mt-3 text-lg font-semibold">{business.address}</p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#a7583e] underline underline-offset-4"
                >
                  Get directions <ArrowIcon diagonal />
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[#d8c5b3] p-8 sm:min-h-[400px] sm:p-12">
            <div className="dot-grid absolute inset-0 opacity-50" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#b99c86]/70" />
            <div className="absolute -right-8 -top-8 h-72 w-72 rounded-full border border-[#b99c86]/70" />
            <div className="absolute bottom-0 left-[45%] top-0 w-px rotate-[24deg] bg-[#b99c86]/50" />
            <div className="relative">
              <p className="eyebrow text-[#795943]">Find your way to</p>
              <p className="display mt-3 text-4xl sm:text-5xl">Cyberjaya</p>
            </div>
            <div className="relative flex items-end justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a7583e] text-white shadow-lg">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <span className="rounded-sm bg-[#f8f5f0] px-3 py-2 text-xs font-bold uppercase tracking-widest">
                Selangor, MY
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow text-[#a7583e]">Before you visit</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">
              Good to <em>know.</em>
            </h2>
            <p className="mt-6 max-w-[300px] text-sm leading-7 text-[#766d64]">
              A few quick answers before your appointment. Still wondering? Send
              us a message.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#a7583e] underline underline-offset-4"
            >
              Ask on WhatsApp <ArrowIcon />
            </a>
          </div>
          <div className="border-t border-[#d9cfc3]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[#d9cfc3] py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light text-[#a7583e] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[620px] pt-4 pr-10 text-sm leading-7 text-[#766d64]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#a7583e] px-5 py-20 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[840px]">
          <p className="eyebrow text-[#f0d1c2]">Ready when you are</p>
          <h2 className="display mt-5 text-[clamp(3rem,7vw,6rem)] leading-[1.05]">
            Let’s make it a<br />
            <em>good hair day.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[490px] text-sm leading-7 text-[#f6e4da]">
            A quick WhatsApp message is all it takes. Tell us what you have in
            mind and we’ll take it from there.
          </p>
          <BookingLink light className="mt-8">
            Book on WhatsApp
          </BookingLink>
        </div>
      </section>

      <footer className="bg-[#302820] px-5 py-12 pb-[calc(6rem+env(safe-area-inset-bottom))] text-[#f8f5f0] sm:px-8 sm:pb-12 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap justify-between gap-10">
            <div>
              <p className="display text-3xl">
                {business.name}
                <span className="text-[#d4a58c]">.</span>
              </p>
              <p className="mt-3 max-w-[270px] text-sm leading-6 text-[#c8bdb1]">
                {business.tagline}
                <br />
                {business.address}.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-3">
                <span className="eyebrow text-[#d2a28a]">Explore</span>
                <a href="#services" className="hover:text-[#d2a28a]">
                  Services
                </a>
                <a href="#about" className="hover:text-[#d2a28a]">
                  About
                </a>
                <a href="#location" className="hover:text-[#d2a28a]">
                  Location
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="eyebrow text-[#d2a28a]">Say hello</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d2a28a]"
                >
                  WhatsApp ↗
                </a>
                <a href="#faq" className="hover:text-[#d2a28a]">
                  FAQs
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-white/20 pt-6 text-[13px] text-[#a99d91] sm:text-xs">
            <span>
              © {new Date().getFullYear()} {business.name}. Fictional website
              demo.
            </span>
            <span>Made for the small moments that matter.</span>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_25px_rgba(0,0,0,.22)] transition hover:-translate-y-1 hover:bg-[#1fb85a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </main>
  );
}
