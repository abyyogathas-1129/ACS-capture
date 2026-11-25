import facebookIcon from '../assets/icons/facebook.svg'
import instagramIcon from '../assets/icons/instagram.svg'

// Studio details used on many pages. Change them here once, and every page updates.

// Placeholder addresses until the studio gives its real social pages
export const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: instagramIcon,
  },
  { label: 'Facebook', url: 'https://www.facebook.com/', icon: facebookIcon },
]

// Mock Instagram profile for the home page. Replace with the studio's real
// handle and numbers (later these can come from Instagram through the backend).
export const instagramProfile = {
  name: 'ACS Capture',
  handle: '@acscapture',
  stats: [
    { label: 'Posts', value: '120' },
    { label: 'Followers', value: '2.4K' },
    { label: 'Following', value: '310' },
  ],
}

// Placeholder until the studio confirms its full address and hours
export const studioVisitDetails = {
  address: 'ACS Capture Studio, Mullaitivu, Sri Lanka.',
  openingHours: 'Everyday, 9 am to 10 pm.',
}
