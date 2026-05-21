import { getAssetUrl } from '../utils/assets.js'

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Service' },
  { id: 'work', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { label: 'Projects Done', value: 240, suffix: '+' },
  { label: 'Happy Clients', value: 180, suffix: '+' },
  { label: 'Years Experience', value: 8, suffix: '+' },
]

export const skills = [
  { name: 'Portrait Direction', level: 92 },
  { name: 'Commercial Retouching', level: 86 },
  { name: 'Lighting Control', level: 90 },
]

export const services = [
  {
    id: '01',
    title: 'Graphics Design',
    text: 'I have been providing web design services with great success for years.',
    icon: getAssetUrl('assets/images/c1.png'),
  },
  {
    id: '02',
    title: 'Web Design',
    text: 'Sapiente corrupti duis ipsum a faucibus vero varius nulla for modern launches.',
    icon: getAssetUrl('assets/images/c2.png'),
  },
  {
    id: '03',
    title: 'Trendy Work',
    text: 'Eligendi vivamus sagittis alias magna reiciendis nunc with strong art direction.',
    icon: getAssetUrl('assets/images/c3.png'),
  },
  {
    id: '04',
    title: 'Easy To Customize',
    text: 'Dignissimos nobis dignissim tristique sequi occaecat cum auctor facilis interdum.',
    icon: getAssetUrl('assets/images/c1.png'),
  },
  {
    id: '05',
    title: 'Adobe Photoshop',
    text: 'Nascetur luctus vitae quam with fast-turn social cuts and gallery delivery.',
    icon: getAssetUrl('assets/images/c2.png'),
  },
  {
    id: '06',
    title: 'Web Development',
    text: 'Pulvinar tenetur tempor ibendum quod and campaign-ready image systems.',
    icon: getAssetUrl('assets/images/c3.png'),
  },
]

export const projects = [
  { name: '01. Creative Frame', image: getAssetUrl('assets/images/blog1.jpg'), tag: 'UI Design' },
  { name: '02. Creative Frame', image: getAssetUrl('assets/images/blog2.jpg'), tag: 'Web Development' },
  { name: '03. Creative Frame', image: getAssetUrl('assets/images/blog1.jpg'), tag: 'Graphic Design' },
  { name: '04. Creative Frame', image: getAssetUrl('assets/images/blog2.jpg'), tag: 'Wordpress' },
  { name: '05. Creative Frame', image: getAssetUrl('assets/images/blog1.jpg'), tag: 'Illustration' },
  { name: '06. Creative Frame', image: getAssetUrl('assets/images/blog2.jpg'), tag: 'UI Design' },
]

export const blogPosts = [
  {
    date: 'May 2026',
    title: 'How to Prepare for a Personal Branding Shoot',
    image: getAssetUrl('assets/images/blog1.jpg'),
  },
  {
    date: 'April 2026',
    title: 'Lighting Frameworks I Use for Editorial Portraits',
    image: getAssetUrl('assets/images/blog2.jpg'),
  },
]

export const clientLogos = [
  getAssetUrl('assets/images/c1.png'),
  getAssetUrl('assets/images/c2.png'),
  getAssetUrl('assets/images/c3.png'),
  getAssetUrl('assets/images/c1.png'),
  getAssetUrl('assets/images/c2.png'),
  getAssetUrl('assets/images/c3.png'),
]

export const testimonials = [
  {
    quote:
      'The shoot direction was clear, fast, and premium. The final edits elevated our whole campaign.',
    name: 'Nora Blake',
    role: 'Brand Manager',
    avatar: getAssetUrl('assets/images/client1.png'),
  },
  {
    quote:
      'Exactly the visual language we needed. Strong mood, sharp composition, and smooth delivery.',
    name: 'Victor Hale',
    role: 'Creative Lead',
    avatar: getAssetUrl('assets/images/client2.png'),
  },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/harryjasonstudio' },
  { label: 'Behance', href: 'https://behance.net/harryjasonstudio' },
  { label: 'Twitter', href: 'https://x.com/harryjasonstudio' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harryjasonstudio' },
]

export const pricingPlans = [
  {
    title: 'Silver',
    price: '$30',
    icon: getAssetUrl('assets/images/p1.png'),
    features: ['1 Home Page', '2 Home Page Design', 'Unlimited Inner Page', '50 Elements', 'Support'],
  },
  {
    title: 'Enterprise',
    price: '$50',
    icon: getAssetUrl('assets/images/3.png'),
    features: ['3 Home HTML', '5 Home Page Design', 'Unlimited Inner Page', '50 Elements', 'Support'],
  },
  {
    title: 'Golden',
    price: '$60',
    icon: getAssetUrl('assets/images/p2.png'),
    features: ['1 Home Page', '2 Home Page Design', 'Unlimited Inner Page', '50 Elements', 'Support'],
  },
]

export const contactDetails = {
  phone: '+435 6477 3728',
  email: 'apoyoxo@gmail.com',
  address: 'FA - 154 Careon Street',
}

export const parallaxHighlights = [
  { icon: getAssetUrl('assets/images/c1.png'), label: 'Year of Experience', value: '20' },
  { icon: getAssetUrl('assets/images/c2.png'), label: 'Global Working Client', value: '20' },
  { icon: getAssetUrl('assets/images/c3.png'), label: 'Awards Win', value: '20' },
]
