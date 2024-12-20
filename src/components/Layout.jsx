import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-grow">
          <div className="relative mx-auto flex max-w-7xl flex-col px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
            <main className="w-full py-8 sm:py-16">
              <Prose as="article" className="mx-auto max-w-3xl px-4 sm:px-0">
                {children}
              </Prose>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </SectionProvider>
  )
}
