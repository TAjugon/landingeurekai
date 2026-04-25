"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightIcon, ChevronDown, Clock, Instagram, Linkedin, Menu, X } from "lucide-react"

const WHATSAPP =
  "https://wa.me/573150564078?text=Hola%20EurekAI,%20quiero%20informacion%20sobre%20los%20programas"

const marketingFaq = [
  {
    q: "¿Cuál es el nivel de experiencia requerido?",
    a: "Los programas están pensados para perfiles de negocio y liderazgo. No necesitas ser experto en IA: partimos de casos concretos y te guiamos con herramientas y plantillas listas para usar.",
  },
  {
    q: "¿Qué pasa después del curso?",
    a: "Recibes entregables accionables, acceso a recursos de implementación y, según el programa, comunidad o soporte para seguir aplicando lo aprendido en tu contexto.",
  },
  {
    q: "¿Puedo hacer el curso en mi horario?",
    a: "Cada programa define su modalidad (intensivo de un día, formato extendido, etc.). Te compartimos el calendario oficial al inscribirte para que organices tu tiempo con claridad.",
  },
  {
    q: "¿Qué entregables recibo?",
    a: "Frameworks, roadmaps, plantillas y, cuando aplica, prototipos o planes de implementación (30–90 días) alineados a un caso real de tu organización o sector.",
  },
  {
    q: "¿Hay opciones de pago?",
    a: "Sí. Puedes pagar de forma segura por nuestra pasarela y, si tu empresa requiere facturación o condiciones especiales, escríbenos por WhatsApp y te orientamos.",
  },
  {
    q: "¿Qué pasa si no puedo asistir a una sesión?",
    a: "Depende del formato del programa. En cohortes presenciales la asistencia es clave; si tienes un imprevisto, contáctanos con tiempo para ver alternativas según políticas del curso.",
  },
]

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
            <Link href="#facilitadores" className={navLinkClass}>
              Facilitadores
            </Link>
            <Link href="#preguntas" className={navLinkClass}>
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
              <Link href="#facilitadores" className="py-2 text-lg font-medium text-slate-800" onClick={() => setMenuOpen(false)}>
                Facilitadores
              </Link>
              <Link href="#preguntas" className="py-2 text-lg font-medium text-slate-800" onClick={() => setMenuOpen(false)}>
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

      {/* Implementación — bento */}
      <section id="implementacion" className="scroll-mt-24 border-t border-slate-200/80 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Implementación</h2>
            <p className="mt-3 text-base text-slate-600 md:text-lg">Plantillas, GPTs y agentes listos para usar</p>
          </div>

          <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch">
            <div className="flex flex-1 flex-col gap-4">
              <article className="relative min-h-[380px] flex-1 overflow-hidden rounded-2xl bg-slate-900 shadow-lg lg:min-h-[420px]">
                <Image src="/ejecutivos.png" alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent md:from-white/90 md:via-white/50" />
                <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-end p-8 md:max-w-[58%] lg:min-h-[420px]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Plantillas</p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">Frameworks de trabajo probados</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">Estructuras listas para adaptar a tu contexto</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                    >
                      Descargar
                    </button>
                    <button
                      type="button"
                      className="rounded-full border-2 border-slate-800/80 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900/5"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </article>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-900 shadow-md">
                  <Image src="/vectorgerentes.jpeg" alt="" fill className="object-cover opacity-95" sizes="(max-width: 640px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-6">
                    <h3 className="text-lg font-bold text-white">Gobernanza ligera</h3>
                    <p className="mt-1 text-sm text-white/85">Priorización clara sin burocracia</p>
                    <button
                      type="button"
                      className="mt-4 w-fit rounded-full border border-white/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Ver más
                    </button>
                  </div>
                </article>
                <article className="relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-900 shadow-md">
                  <Image src="/vectorlideres.png" alt="" fill className="object-cover opacity-95" sizes="(max-width: 640px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-6">
                    <h3 className="text-lg font-bold text-white">Guía de stakeholders</h3>
                    <p className="mt-1 text-sm text-white/85">Alineación rápida con tu equipo</p>
                    <button
                      type="button"
                      className="mt-4 w-fit rounded-full border border-white/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Ver más
                    </button>
                  </div>
                </article>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 lg:max-w-[min(100%,480px)] lg:flex-none lg:basis-[42%]">
              <article className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl bg-slate-900 shadow-lg lg:min-h-[220px]">
                <Image src="/disenado_banner.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent" />
                <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end p-6 lg:min-h-[220px]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Roadmap</p>
                  <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">Roadmap ejecutivo</h3>
                  <p className="mt-2 text-sm text-white/90">Plan de implementación a 30, 60 y 90 días, con hitos claros</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      Descargar
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </article>
              <article className="relative min-h-[320px] flex-1 overflow-hidden rounded-2xl bg-slate-900 shadow-lg lg:min-h-[360px]">
                <Image src="/early_bird.png" alt="" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-slate-900/20" />
                <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-6 lg:min-h-[360px]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Reservado para el…</p>
                  <h3 className="mt-1 text-xl font-bold leading-snug text-white md:text-2xl">Sandbox de asistentes y agentes de IA</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    Automatizaciones que te facilitarán el discovery, el diseño y la implementación
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      Descargar
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Networking con valor real */}
      <section id="networking" className="scroll-mt-24 border-t border-slate-200/80 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Networking con valor real</h2>
            <p className="mt-3 text-base text-slate-600 md:text-lg">Conexiones que perduran dentro y fuera de las clases</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:gap-5">
            <article className="relative min-h-[380px] overflow-hidden rounded-2xl bg-slate-200 shadow-lg lg:col-span-7 lg:min-h-[440px]">
              <Image src="/andres.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:from-white md:via-white/70" />
              <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-center p-8 md:max-w-[85%] lg:min-h-[440px] lg:max-w-[78%]">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Mentores</p>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-slate-900 md:text-3xl">
                  Conexiones que perduran que siguen creando valor dentro y fuera de las clases
                </h3>
                <button
                  type="button"
                  className="mt-8 w-fit rounded-full border-2 border-slate-800 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900/5"
                >
                  Descargar
                </button>
              </div>
            </article>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <article className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl bg-slate-900 shadow-md lg:min-h-[210px]">
                <Image src="/vectorlideres.jpeg" alt="" fill className="object-cover opacity-90" sizes="(max-width: 1024px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end p-6 lg:min-h-[210px]">
                  <p className="text-xs text-white/75">Priorización clara sin burocracia</p>
                  <h3 className="mt-2 text-lg font-bold text-white md:text-xl">Egresados en tu industria</h3>
                  <button
                    type="button"
                    className="mt-4 w-fit rounded-full border border-white px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Ver más
                  </button>
                </div>
              </article>
              <article className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl bg-slate-900 shadow-md lg:min-h-[210px]">
                <Image src="/banner.jpg" alt="" fill className="object-cover opacity-90" sizes="(max-width: 1024px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end p-6 lg:min-h-[210px]">
                  <p className="text-xs text-white/75">Priorización clara sin burocracia</p>
                  <h3 className="mt-2 text-lg font-bold text-white md:text-xl">Colaboraciones y proyectos conjuntos</h3>
                  <button
                    type="button"
                    className="mt-4 w-fit rounded-full border border-white px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Ver más
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitadores */}
      <section id="facilitadores" className="scroll-mt-24 border-t border-slate-200/80 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Equipo</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Facilitadores</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-slate-600 md:text-lg">
            Profesionales con experiencia en transformación digital
          </p>

          <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-52 w-52 overflow-hidden rounded-full bg-slate-200 shadow-xl ring-4 ring-white md:h-60 md:w-60">
                <Image src="/andres.jpg" alt="Andrés Rubiano" fill className="object-cover grayscale" sizes="240px" />
              </div>
              <div className="mt-4 flex items-center gap-3" aria-label="Redes sociales">
                <span className="rounded-full border border-slate-300 bg-white p-3 shadow-sm" title="Instagram">
                  <Instagram className="h-4 w-4 text-slate-700" aria-hidden />
                </span>
                <a
                  href="https://linkedin.com/in/andresrubiano32"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-slate-300 bg-white p-3 shadow-sm transition hover:bg-slate-50"
                  aria-label="LinkedIn de Andrés Rubiano"
                >
                  <Linkedin className="h-4 w-4 text-slate-700" />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">Andrés Rubiano</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                CEO EKI, experto en innovación corporativa. Ha implementado sistemas en 60+ empresas.{" "}
                <span className="italic text-slate-500">&ldquo;El método detrás de la locura&rdquo;.</span>
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative h-52 w-52 overflow-hidden rounded-full bg-slate-200 shadow-xl ring-4 ring-white md:h-60 md:w-60">
                <Image src="/cersar.png" alt="César Trujillo" fill className="object-cover grayscale" sizes="240px" />
              </div>
              <div className="mt-4 flex items-center gap-3" aria-label="Redes sociales">
                <span className="rounded-full border border-slate-300 bg-white p-3 shadow-sm" title="Instagram">
                  <Instagram className="h-4 w-4 text-slate-700" aria-hidden />
                </span>
                <a
                  href="https://linkedin.com/in/cesartrujillo"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-slate-300 bg-white p-3 shadow-sm transition hover:bg-slate-50"
                  aria-label="LinkedIn de César Trujillo"
                >
                  <Linkedin className="h-4 w-4 text-slate-700" />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">César Trujillo</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                Socio Fundador Superminds, 30 años en tecnología y humanidades. Candidato a Doctor en IA y Machine Learning.{" "}
                <span className="italic text-slate-500">&ldquo;La conexión entre la IA y los negocios&rdquo;.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="scroll-mt-24 border-t border-slate-200/80 bg-[#ececed] py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#061634] md:text-4xl">Preguntas</h2>
            <p className="mt-3 text-base text-slate-600 md:text-lg">Respuestas a lo que importa</p>
          </div>

          <div className="mt-10 space-y-3">
            {marketingFaq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-slate-900">
                  <span>{item.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition group-open:-rotate-180" aria-hidden />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600 md:text-base">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#fd7914] px-8 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[#e26b0e]"
            >
              ¿Tienes más dudas?
            </a>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#5a5a5d] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem]">Tu siguiente paso empieza hoy</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Aplica ahora y únete a la próxima cohorte de líderes transformando sus organizaciones con IA
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="#programas"
              className="inline-flex items-center gap-2 rounded-full bg-[#fd7914] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#e26b0e]"
            >
              Explorar cursos
              <ArrowRightIcon className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/bootcamp#reserva-middle"
              className="inline-flex items-center rounded-full border-2 border-white/90 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Aplicar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer ampliado */}
      <footer className="bg-[#061634] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="text-lg font-bold">Mantente informado</h3>
              <p className="mt-2 text-sm text-white/70">Recibe actualizaciones sobre nuevas cohortes</p>
            </div>
            <form className="w-full max-w-md lg:max-w-lg" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
              <div className="flex overflow-hidden rounded-full border border-white/20 bg-white/5 shadow-inner">
                <label htmlFor="newsletter-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Tu correo aquí"
                  className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#fd7914]/50"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-[#fd7914] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e26b0e]"
                >
                  Suscríbete
                </button>
              </div>
              <p className="mt-2 text-[11px] text-white/45">Al suscribirte aceptas nuestra política de privacidad.</p>
            </form>
          </div>

          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-bold text-white">Programas</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="#programas" className="transition hover:text-white">
                    Explorar cursos
                  </Link>
                </li>
                <li>
                  <Link href="/bootcamp#reserva-middle" className="transition hover:text-white">
                    Aplicar ahora
                  </Link>
                </li>
                <li>
                  <Link href="#implementacion" className="transition hover:text-white">
                    Metodología
                  </Link>
                </li>
                <li>
                  <Link href="#networking" className="transition hover:text-white">
                    Comunidad
                  </Link>
                </li>
                <li>
                  <Link href="#facilitadores" className="transition hover:text-white">
                    Equipo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Contacto</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="transition hover:text-white">
                    Háblanos
                  </a>
                </li>
              </ul>
              <p className="mt-8 text-sm font-bold text-white">Recursos</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="#preguntas" className="transition hover:text-white">
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Empresa</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <Link href="#inicio" className="transition hover:text-white">
                    Sobre EurekAI
                  </Link>
                </li>
                <li>
                  <Link href="#facilitadores" className="transition hover:text-white">
                    Nuestro equipo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Legal</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li>
                  <span className="cursor-not-allowed text-white/50">Términos de servicio</span>
                </li>
                <li>
                  <span className="cursor-not-allowed text-white/50">Política de privacidad</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/LogoEurekai-WTH.png" alt="EurekAI" width={140} height={42} className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-center text-sm text-white/60 sm:text-right">© {new Date().getFullYear()} EurekAI. Todos los derechos reservados.</p>
          </div>
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
