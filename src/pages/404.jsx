import Head from 'next/head'
import { HeroPattern } from '@/components/HeroPattern'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Codekaro Docs</title>
      </Head>
      <div>
        <HeroPattern />
        <div>
          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              404
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Sorry, we could&apos;t find the page you&apos;re looking for.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
