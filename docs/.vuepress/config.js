// docs/.vuepress/config.js
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // Basic settings
  lang: 'en-US',
  title: 'Sarbast Saman Muhammed',
  description: 'Software Engineer - Professional CV',
  
  // ADD THIS LINE - This is what was missing!
  bundler: viteBundler(),
  
  // Theme
  theme: defaultTheme({
    // Navigation
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'CV', link: '/cv' },
      { text: 'Projects', link: '/projects' },
      { text: 'Contact', link: '/contact' }
    ],
    
    // Other settings
    sidebar: 'auto',
    lastUpdated: true,
    contributors: false,
  }),
  
  // Server settings
  port: 8080,
  open: true,
})