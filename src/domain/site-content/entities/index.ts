export interface Stat {
  id: string
  value: number
  suffix?: string
  label: string
  sublabel?: string
}

export interface Program {
  id: string
  category: string
  categoryId: string
  title: string
  abbreviation?: string
  description?: string
  icon?: string
}

export interface ProgramCategory {
  id: string
  label: string
}

export interface Activity {
  id: string
  tag: string
  title: string
  description: string
  icon: string
}

export interface ActivityStat {
  value: string
  label: string
}

export interface Event {
  id: string
  day: number
  month: string
  badge: string
  title: string
  location: string
  time: string
}

export interface FacultyMember {
  id: string
  initials: string
  name: string
  role: string
  department: string
}

export interface GalleryItem {
  id: string
  icon: string
  variant: number
}

export interface Testimonial {
  id: string
  text: string
  initials: string
  name: string
  role: string
}

export interface NewsArticle {
  id: string
  tag: string
  title: string
  excerpt: string
  date: string
  readTime: string
  icon: string
  featured?: boolean
}

export interface AboutFeature {
  icon: string
  title: string
  description: string
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export interface HomePageContent {
  hero: {
    pill: string
    title: string
    titleAccent: string
    subtitle: string
    floatCards: { label: string; value: string; detail?: string }[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    features: AboutFeature[]
  }
  programs: {
    eyebrow: string
    title: string
    linkLabel: string
  }
  activities: {
    eyebrow: string
    title: string
    linkLabel: string
  }
  events: {
    eyebrow: string
    title: string
    linkLabel: string
  }
  faculty: {
    eyebrow: string
    title: string
    linkLabel: string
  }
  gallery: {
    eyebrow: string
    title: string
  }
  testimonials: {
    eyebrow: string
    title: string
  }
  news: {
    eyebrow: string
    title: string
    linkLabel: string
  }
  cta: {
    title: string
    subtitle: string
    primaryLabel: string
    secondaryLabel: string
  }
  footer: {
    description: string
    columns: FooterColumn[]
    copyright: string
    social: { label: string; href: string }[]
  }
}
