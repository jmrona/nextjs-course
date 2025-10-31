export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  category: string
  attendees?: number
  price?: string
}

export const events: Event[] = [
  {
    id: '1',
    title: 'React Summit 2025',
    description:
      'The biggest React conference of the year featuring talks from Meta engineers, React core team members, and industry leaders. Learn about React 19, Server Components, and the future of web development.',
    date: 'November 15-16, 2025',
    time: '10:00 AM - 6:00 PM',
    location: 'Amsterdam, Netherlands',
    image: '/images/event1.png',
    category: 'Conference',
    attendees: 2500,
    price: '€599',
  },
  {
    id: '2',
    title: 'AI & Machine Learning Hackathon',
    description:
      'Build innovative AI solutions in 48 hours. Connect with fellow developers, compete for $50K in prizes, and get mentorship from OpenAI and Google AI experts.',
    date: 'December 1-3, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'San Francisco, CA',
    image: '/images/event2.png',
    category: 'Hackathon',
    attendees: 500,
    price: 'Free',
  },
  {
    id: '3',
    title: 'Next.js Conf',
    description:
      'The official Next.js conference by Vercel. Discover the latest Next.js 16 features, performance optimizations, and deployment strategies. Network with the Next.js community.',
    date: 'November 22, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'San Francisco, CA (Hybrid)',
    image: '/images/event3.png',
    category: 'Conference',
    attendees: 3000,
    price: 'Free (Virtual)',
  },
  {
    id: '4',
    title: 'DevOps & Cloud Native Summit',
    description:
      'Master Kubernetes, Docker, CI/CD pipelines, and cloud infrastructure. Hands-on workshops with AWS, Azure, and GCP experts. Perfect for platform engineers and DevOps professionals.',
    date: 'January 10-12, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Austin, TX',
    image: '/images/event4.png',
    category: 'Conference',
    attendees: 1800,
    price: '$799',
  },
  {
    id: '5',
    title: 'Web3 & Blockchain Developers Meetup',
    description:
      'Monthly meetup for blockchain developers. This month: Solidity best practices, smart contract security audits, and building DApps with Ethereum and Solana.',
    date: 'November 8, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'New York, NY',
    image: '/images/event5.png',
    category: 'Meetup',
    attendees: 150,
    price: 'Free',
  },
  {
    id: '6',
    title: 'Mobile Dev Conference',
    description:
      'Cross-platform development with React Native, Flutter, and native iOS/Android. Learn from top mobile engineers at Airbnb, Uber, and Meta about building scalable mobile apps.',
    date: 'December 15-17, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Seattle, WA',
    image: '/images/event6.png',
    category: 'Conference',
    attendees: 1200,
    price: '$549',
  },
]
