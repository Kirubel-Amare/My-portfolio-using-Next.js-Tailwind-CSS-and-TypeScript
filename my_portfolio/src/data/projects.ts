import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and drag-and-drop functionality.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/task-app',
    liveUrl: 'https://your-task-app.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts using external APIs.',
    image: '/images/projects/weather.jpg',
    technologies: ['JavaScript', 'CSS3', 'REST API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-app.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts using external APIs.',
    image: '/images/projects/weather.jpg',
    technologies: ['JavaScript', 'CSS3', 'REST API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-app.vercel.app',
    featured: false,
  }
]