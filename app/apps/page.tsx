import Card from '@/components/Card'
import appsData from '@/data/appsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Apps',
  description: 'A curated collection of the products and experiments I have shipped.',
})

const PlatformTag = ({ label }: { label: string }) => (
  <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:text-gray-400">
    {label}
  </span>
)

export default function Apps() {
  const hasApps = appsData.length > 0

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Apps
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A snapshot of the ideas I&apos;ve turned into shipped, usable tools.
        </p>
      </div>
      <div className="container py-12">
        {hasApps ? (
          <div className="-m-4 flex flex-wrap">
            {appsData.map(({ title, description, imgSrc, href, platforms }) => (
              <Card
                key={title}
                title={title}
                description={description}
                imgSrc={imgSrc}
                href={href}
                meta={
                  platforms && platforms.length > 0
                    ? platforms.map((platform) => <PlatformTag key={platform} label={platform} />)
                    : null
                }
              />
            ))}
          </div>
        ) : (
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I&apos;m polishing the download links and release notes. Check back soon to explore the
            apps I&apos;ve shipped.
          </p>
        )}
      </div>
    </div>
  )
}
