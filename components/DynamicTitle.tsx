'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'

export const getTitle = (pathname: string) => {
  if (pathname === '/') return `${siteMetadata.headerTitle} ~:`
  const path = pathname.split('/')[1]
  return `${siteMetadata.headerTitle} ~/${path} $`
}

export default function DynamicTitle() {
  const pathname = usePathname()
  const title = getTitle(pathname)
  
  // Update document title
  if (typeof document !== 'undefined') {
    document.title = title
  }

  return null
} 