import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'
export const dynamic = 'force-static'
import type { NextRequest, NextResponse } from 'next/server'

type Handler = ((req: NextRequest) => Promise<NextResponse>) | undefined
let GET: Handler, POST: Handler
if (siteMetadata.newsletter && siteMetadata.newsletter.provider) {
  const handler = NewsletterAPI({
    provider: siteMetadata.newsletter.provider,
  })
  GET = handler
  POST = handler
}

export { GET, POST }
