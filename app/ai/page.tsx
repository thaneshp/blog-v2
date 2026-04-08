import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'AI',
  description: 'How I use AI on this website and in my work.',
})

export default function AIPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          AI
        </h1>
      </div>

      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
        <p>Everything on this website is written by me. I don&apos;t use AI to generate content.</p>

        <p>
          I do use AI to help catch grammatical issues and improve clarity, so I treat it as an
          editing tool rather than a writing replacement.
        </p>

        <p>
          I also use AI as part of my engineering work when it helps me learn faster, explore an
          idea, or iterate on lower-risk tasks. I still expect reviewable changes, clear intent, and
          personal judgment.
        </p>

        <p>
          Personal websites and blogs should still feel personal. The point of this site is to
          reflect my own thinking and voice, not to outsource that to a model.
        </p>

        <p>
          The existence of this page was inspired by{' '}
          <Link
            href="https://www.bydamo.la/p/ai-manifesto"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            The /ai manifesto
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
