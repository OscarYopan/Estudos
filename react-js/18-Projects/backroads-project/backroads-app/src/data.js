import tourImage1 from './images/tour-1.jpeg'
import tourImage2 from './images/tour-2.jpeg'
import tourImage3 from './images/tour-3.jpeg'
import tourImage4 from './images/tour-4.jpeg'
import tourImage5 from './images/tour-5.jpeg'
import tourImage6 from './images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' }
]

export const socialLinks = [
  { id: 1, href: 'https://twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://twitter.com', icon: 'fab fa-squarespace' }
]

export const servicesData = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, official.'
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
  }
]

export const toursData = [
  {
    id: 1,
    image: tourImage1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    value: 2100
  },
  {
    id: 2,
    image: tourImage2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11 days',
    value: 1400
  },
  {
    id: 3,
    image: tourImage3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: '8 days',
    value: 5000
  },
  {
    id: 4,
    image: tourImage4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '20 days',
    value: 3300
  },
  {
    id: 5,
    image: tourImage5,
    date: 'March 5th, 2021',
    title: 'Africa Safari',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'South Africa',
    duration: '15 days',
    value: 4800
  },
  {
    id: 6,
    image: tourImage6,
    date: 'november 28th, 2021',
    title: 'Old World',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Asia',
    duration: '40 days',
    value: 8700
  }
]
