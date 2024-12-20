import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { HeroPattern } from '@/components/HeroPattern'

export const description =
  'Browse and search through our collection of web development assignments.'

function AssignmentList({ mdxFiles = [] }) {
  const [searchTerm, setSearchTerm] = useState('')

  const formatFileName = (fileName) => {
    return fileName
      .replace('.mdx', '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const filteredFiles = mdxFiles.filter((file) =>
    formatFileName(file).toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-4xl">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search assignments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 
                   text-zinc-900 shadow-sm transition-all 
                   placeholder:text-zinc-500
                   focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500
                   dark:border-gray-500 dark:bg-gray-600/50 dark:text-white 
                   dark:placeholder:text-gray-500 dark:focus:border-gray-300 dark:focus:ring-gray-200"
        />
      </div>

      {/* Assignment List */}
      <div className="mb-16 overflow-hidden rounded-lg border border-gray-200  shadow-sm dark:border-gray-500 ">
        {filteredFiles.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-500">
            {filteredFiles.map((file) => {
              const fileName = file.replace('.mdx', '')
              const title = formatFileName(file)
              return (
                <div key={fileName}>
                  <Link
                    href={`/${fileName}`}
                    className="block px-4 py-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-600/50"
                  >
                    {title}
                  </Link>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
            {searchTerm
              ? 'No assignments found matching your search.'
              : 'No assignments available at the moment.'}
          </div>
        )}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const pagesDirectory = path.join(process.cwd(), 'src', 'pages')
    const files = fs.readdirSync(pagesDirectory)

    // Filter MDX files and exclude special files
    const mdxFiles = files.filter(
      (file) =>
        file.endsWith('.mdx') &&
        !file.startsWith('_') &&
        !file.startsWith('.') &&
        file !== 'index.mdx'
    )

    console.log('Found MDX files:', mdxFiles) // Debug log

    return {
      props: {
        mdxFiles: mdxFiles.sort(),
      },
    }
  } catch (error) {
    console.error('Error reading directory:', error)
    return {
      props: {
        mdxFiles: [],
      },
    }
  }
}

export default function HomePage({ mdxFiles }) {
  return (
    <>
      <Head>
        <title>Codekaro Docs</title>
      </Head>
      <div className="min-h-screen pb-16">
        <HeroPattern />
        <div className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Assignments
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Welcome to our assignments page. Use the search bar below to find
            specific assignments or browse through the complete list.
          </p>
          <AssignmentList mdxFiles={mdxFiles} />
        </div>
      </div>
    </>
  )
}
