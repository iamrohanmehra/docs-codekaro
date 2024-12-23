import Head from 'next/head'
import { HeroPattern } from '@/components/HeroPattern'
import Link from 'next/link'

export default function HowToCssDay1Assignment() {
  return (
    <>
      <Head>
        <title>How to CSS: Assignment 1 | Web Development Course</title>
        <meta
          name="description"
          content="Learn CSS by cloning real-world examples using pure HTML and CSS."
        />
      </Head>

      <HeroPattern />
      <div className="relative">
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="prose dark:prose-invert">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              How to CSS: Assignment 1
            </h1>

            <p className="lead">
              Complete the following assignments using pure HTML and CSS.
            </p>

            <ol className="space-y-4">
              <li>Clone all the images as shown in the final output</li>
              <li>
                You can choose your own images, but the layout and styling
                should match the examples
              </li>
              <li className="font-semibold">
                <Link href="https://forms.gle/5FLCuzZ3EsdbroRp6">
                  Submit your assignments here.
                </Link>
              </li>
            </ol>

            <div className="mt-12 space-y-8">
              <a
                href="/images/assignments/waze-business.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/assignments/waze-business.png"
                  alt="Waze Business Development Card"
                  className="w-full"
                />
              </a>

              <a
                href="/images/assignments/google-profiles.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/assignments/google-profiles.png"
                  alt="Google Profiles Card"
                  className="w-full"
                />
              </a>

              <a
                href="/images/assignments/google-photos.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/assignments/google-photos.png"
                  alt="Google Photos Subscription Card"
                  className="w-full"
                />
              </a>

              <a
                href="/images/assignments/flodesk-login.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/assignments/flodesk-login.png"
                  alt="Flodesk Login Page"
                  className="w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
