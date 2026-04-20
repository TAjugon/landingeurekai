"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

const CARDS_PER_PAGE = 2

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const totalPages = Math.max(1, Math.ceil(testimonials.length / CARDS_PER_PAGE))
  const [page, setPage] = useState(0)

  const visibleTestimonials = useMemo(() => {
    const start = page * CARDS_PER_PAGE
    return testimonials.slice(start, start + CARDS_PER_PAGE)
  }, [page, testimonials])

  const goPrev = () => {
    setPage((current) => (current - 1 + totalPages) % totalPages)
  }

  const goNext = () => {
    setPage((current) => (current + 1) % totalPages)
  }

  return (
    <div className="relative mt-14">
      {totalPages > 1 && (
        <>
          <button
            type="button"
            aria-label="Testimonios anteriores"
            onClick={goPrev}
            className="absolute -left-12 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full p-2 text-slate-500 transition hover:text-slate-800 lg:inline-flex"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Siguientes testimonios"
            onClick={goNext}
            className="absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full p-2 text-slate-500 transition hover:text-slate-800 lg:inline-flex"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {visibleTestimonials.map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${page}-${index}`}
            className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[2rem] bg-[#061634] p-8 shadow-[0_18px_30px_rgba(2,8,23,0.2)]"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle_at_top_right,rgba(253,121,20,0.25),transparent_66%)]" />

            <Image
              src="/comillas.svg"
              alt="Comillas"
              width={44}
              height={34}
              className="absolute left-8 top-6 h-11 w-auto object-contain"
            />

            <p className="mt-12 flex-1 text-[1.05rem] italic leading-relaxed text-white/92 md:text-[1.12rem]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="text-4xl font-bold leading-tight text-white">{testimonial.name}</p>
              <p className="mt-1.5 text-xl text-white/85">
                {testimonial.role}
                {testimonial.company ? `, ${testimonial.company}` : ""}
              </p>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              aria-label={`Ir a página ${index + 1} de testimonios`}
              className={
                index === page
                  ? "h-4 w-14 rounded-full bg-black"
                  : "h-4 w-4 rounded-full bg-slate-300 transition hover:bg-slate-400"
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}
