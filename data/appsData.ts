interface App {
  title: string
  description: string
  href?: string
  imgSrc?: string
  platforms?: string[]
}

const appsData: App[] = [
  {
    title: 'Your App Name',
    description:
      'A concise description of what the app does, who it helps, and the value it delivers.',
    href: 'https://example.com',
    imgSrc: '/static/images/apps/your-app-name.png',
    platforms: ['iOS', 'Android'],
  },
]

export default appsData
