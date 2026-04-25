"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { ArrowLeft, ArrowRight, Clock, Menu, X } from "lucide-react"

const WHATSAPP =
  "https://wa.me/573150564078?text=Hola%20EurekAI,%20quiero%20informacion%20sobre%20los%20programas"

const diferenciaCards = [
  {
    label: "Aplicación",
    title: "Trabajas sobre casos reales de tu organización y de tu sector.",
    sub: "Problemas concretos, decisiones accionables y entregables que puedes llevar al día siguiente.",
    image: "/andres.jpg",
  },
  {
    label: "Networking real y con valor",
    title: "Comunidad y red post-curso",
    sub: "Acceso a mentores y a la red de egresados que sigue construyendo después del programa.",
    image: "/vectorlideres.jpeg",
  },
  {
    label: "Más que talleres",
    title: "Entregables accionables",
    sub: "Plan de implementación de 30 a 90 días para que lo aprendido no se quede en el aula.",
    image: "/banner.jpg",
  },
]

const programas = [
  {
    tag: "Intensivo",
    hours: "8 horas · 1 día",
    title: "Innovación potenciada por IA",
    description: "De la definición del problema correcto, al prototipo y el pitch ante mentores.",
    image: "/early_bird.png",
    highlight: false,
  },
  {
    tag: "Empresarios",
    hours: "16 horas",
    title: "IA aplicada para empresarios",
    description: "Caso de uso a prototipo funcional y plan de 30 a 90 días.",
    image: "/vectorlideres.jpeg",
    highlight: true,
  },
  {
    tag: "Liderazgo",
    hours: "16 horas",
    title: "IA para el liderazgo",
    description: "Visión estratégica, gobernanza y roadmap de transformación.",
    image: "/disenado_banner.jpg",
    highlight: false,
  },
]

export default function MarketingHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diferenciaIndex, setDiferenciaIndex] = useState(0)
  const scrollDiferencia = useCallback((dir: -1 | 1) => {
    setDiferenciaIndex((i) => {
      const next = (i + dir + diferenciaCards.length) % diferenciaCards.length
      return next
    })
  }, [])

  const navLinkClass = "text-base font-medium text-slate-800 transition-colors hover:text-slate-950"

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 px-3 py-3 backdrop-blur-md md:px-5">
        <div className="mx-auto flex w-full max-w-[1680px] items-center gap-4 md:px-2">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/placeholder-logo.png"
              alt="EurekAI"
              width={220}
              height={62}
              className="h-9 w-auto object-contain md:h-11"
              priority
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-8 lg:flex xl:gap-10">
            <Link href="#inicio" className={navLinkClass}>
              Inicio
            </Link>
            <Link href="#programas" className={navLinkClass}>
              Cursos
            </Link>
            <Link href="/bootcamp#facilitadores" className={navLinkClass}>
              Facilitadores
            </Link>
            <Link href="/bootcamp#preguntas" className={navLinkClass}>
              Preguntas
            </Link>
            <Link href="/bootcamp" className="text-base font-semibold text-[#fd7914] transition-colors hover:text-[#e26b0e]">
              Bootcamp
            </Link>
            <Link
              href="/bootcamp#reserva-middle"
              className="rounded-full bg-[#fd7914] px-8 py-2.5 text-base font-semibold text-white transition hover:bg-[#e26b0e]"
            >
              Inscríbete
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Link
              href="/bootcamp#reserva-middle"
              className="hidden rounded-full bg-[#fd7914] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#e26b0e] sm:inline-flex lg:hidden"
            >
              Inscríbete
            </Link>
            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-slate-700 lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-[1680px] flex-col gap-3">
              <Link href="#inicio" className="py-2 text-lg font-medium text-slate-800" onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="#programas" className="py-2 text-lg font-medium text-slate-800" onClick={() => setMenuOpen(false)}>
                Cursos
              </Link>
              <Link
                href="/bootcamp#facilitadores"
                className="py-2 text-lg font-medium text-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                Facilitadores
              </Link>
              <Link href="/bootcamp#preguntas" className="py-2 text-lg font-medium text-slate-800" onClick={() => setMenuOpen(false)}>
                Preguntas
              </Link>
              <Link href="/bootcamp" className="py-2 text-lg font-semibold text-[#fd7914]" onClick={() => setMenuOpen(false)}>
                Bootcamp
              </Link>
              <Link
                href="/bootcamp#reserva-middle"
                className="mt-2 rounded-full bg-[#fd7914] py-3 text-center text-lg font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Inscríbete
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero — primera maqueta */}
      <section id="inicio" className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 min-h-[520px] md:min-h-[600px]">
          <Image
            src="/banner.jpg"
            alt="Equipos colaborando"
            fill
            className="object-cover brightness-105 contrast-90"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/75" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:min-h-[600px] md:pb-20 md:pt-32 lg:pt-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white text-balance md:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
              Construcción de habilidades 3i:{" "}
              <span className="text-[#fd7914]">Innovación + IA + Impacto.</span> Resultados en tiempo récord.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Programas para líderes y equipos que quieren pasar de idea a prototipo y plan de implementación. Sin humo. Con método.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#programas"
                className="inline-flex items-center gap-2 rounded-full bg-[#fd7914] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#e26b0e]"
              >
                Explorar cursos
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="/bootcamp#reserva-middle"
                className="inline-flex items-center rounded-full border-2 border-white/90 bg-white/5 px-7 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Aplicar ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué — primera maqueta */}
      <section className="border-t border-slate-100 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Por qué</p>
          <div className="mt-8 flex justify-center">
            <Image src="/placeholder-logo.png" alt="EurekAI" width={200} height={56} className="h-12 w-auto object-contain md:h-14" />
          </div>
          <h2 className="mt-10 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[2.65rem]">
            Las habilidades que necesitas para el{" "}
            <span className="text-[#fd7914]">trabajo del futuro</span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Bootcamps y cursos cortos en la intersección de las tecnologías emergentes, el potencial humano y las industrias del mañana. Con menos teoría, más decisiones y prototipos funcionales, y entregables concretos desde el primer día.
          </p>
        </div>
      </section>

      {/* Lo que nos diferencia — segunda maqueta */}
      <section className="border-t border-slate-200/80 bg-slate-100 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Lo que nos <span className="text-[#fd7914]">diferencia</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Cada programa está diseñado para que tengas aplicación inmediata para resolver problemas concretos.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="hidden gap-6 md:grid md:grid-cols-3">
              {diferenciaCards.map((card) => (
                <article
                  key={card.title}
                  className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-xl"
                >
                  <Image src={card.image} alt="" fill className="object-cover opacity-90" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="relative z-10 p-8">
                    <p className="text-sm font-medium uppercase tracking-wide text-white/80">{card.label}</p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-white md:text-2xl">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{card.sub}</p>
                    <button
                      type="button"
                      className="mt-6 inline-flex rounded-full border border-white/80 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                      Saber más
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="md:hidden">
              <div className="overflow-hidden rounded-[1.75rem]">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${diferenciaIndex * 100}%)` }}
                >
                  {diferenciaCards.map((card) => (
                    <div key={card.title} className="w-full shrink-0 px-1">
                      <article className="relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-xl">
                        <Image src={card.image} alt="" fill className="object-cover opacity-90" sizes="100vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                        <div className="relative z-10 p-7">
                          <p className="text-sm font-medium uppercase tracking-wide text-white/80">{card.label}</p>
                          <h3 className="mt-2 text-lg font-bold leading-snug text-white">{card.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/85">{card.sub}</p>
                          <button
                            type="button"
                            className="mt-5 inline-flex rounded-full border border-white/80 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                          >
                            Saber más
                          </button>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Anterior"
                  className="rounded-full border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm"
                  onClick={() => scrollDiferencia(-1)}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {diferenciaCards.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ir a tarjeta ${i + 1}`}
                      className={
                        i === diferenciaIndex ? "h-2.5 w-8 rounded-full bg-slate-900 transition" : "h-2.5 w-2.5 rounded-full bg-slate-300"
                      }
                      onClick={() => setDiferenciaIndex(i)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Siguiente"
                  className="rounded-full border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm"
                  onClick={() => scrollDiferencia(1)}
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escoge tu camino — segunda maqueta */}
      <section id="programas" className="scroll-mt-24 border-t border-slate-200/80 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Programas listos para aplicar</p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Escoge tu <span className="text-[#fd7914]">camino</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600 md:text-lg">
            Seis programas pioneros diseñados para la economía del futuro:
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {programas.map((p) => (
              <article
                key={p.title}
                className={`flex flex-col overflow-hidden rounded-[1.5rem] border bg-white shadow-sm transition ${
                  p.highlight ? "border-2 border-[#fd7914] shadow-md ring-1 ring-[#fd7914]/20" : "border border-slate-200/90"
                }`}
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image src={p.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{p.tag}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Clock className="h-4 w-4 shrink-0" aria-hidden />
                      {p.hours}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
                  <Link
                    href="/bootcamp"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Ver contenidos
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/bootcamp"
              className="inline-flex rounded-full bg-[#fd7914] px-12 py-4 text-base font-bold text-white shadow-lg shadow-[#fd7914]/25 transition hover:bg-[#e26b0e]"
            >
              Ver todos los programas
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/LogoEurekai-WTH.png" alt="EurekAI" width={140} height={42} className="h-8 w-auto object-contain" />
          </Link>
          <p className="text-center text-sm text-white/65 sm:text-left">© {new Date().getFullYear()} EurekAI. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-[#fd7914] p-4 text-white shadow-2xl shadow-slate-950/35 transition hover:bg-[#e26b0e] md:bottom-6 md:right-6"
      >
        <Image src="/whatsapp.svg" alt="" width={28} height={28} className="h-7 w-7" />
      </a>
    </main>
  )
}
