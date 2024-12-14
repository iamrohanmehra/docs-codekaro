import { motion } from 'framer-motion'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="min-h-screen w-full">
        <Header />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
          <main className="w-full py-8 sm:py-16">
            <Prose as="article" className="mx-auto max-w-3xl px-4 sm:px-0">
              {children}
            </Prose>
          </main>
          <Footer className="mt-auto" />
        </div>
      </div>
    </SectionProvider>
  )
}
