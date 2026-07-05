import luxeLanding from '../assets/projects/luxe/landing.png';
import luxeCategories from '../assets/projects/luxe/categories.png';
import luxeProducts from '../assets/projects/luxe/products.png';
import luxeAuth from '../assets/projects/luxe/auth-signin.png';
import luxeAdmin from '../assets/projects/luxe/admin-dashboard.png';
import luxeInventory from '../assets/projects/luxe/inventory.png';
import luxeAnalytics from '../assets/projects/luxe/analytics.png';
import cmsImage from '../assets/project-cms.svg';
import hrmsImage from '../assets/project-hrms.svg';
import gisImage from '../assets/project-gis.svg';

export const projects = [
  {
    id: 'luxe-ecommerce',
    title: 'LUXE — Enterprise E-Commerce Platform',
    description:
      'Production-grade full-stack e-commerce application with a polished storefront, Stripe checkout, and a comprehensive admin panel. Features real-time inventory management with size variants, order lifecycle tracking, sales analytics, coupon engine, and customer review moderation — deployed and running live.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TanStack Query', 'Render'],
    image: luxeLanding,
    screenshots: [
      { src: luxeLanding, label: 'Storefront Hero' },
      { src: luxeProducts, label: 'Trending Products' },
      { src: luxeCategories, label: 'Category Browse' },
      { src: luxeAuth, label: 'User Authentication' },
      { src: luxeAdmin, label: 'Admin Dashboard' },
      { src: luxeInventory, label: 'Inventory & Variants' },
      { src: luxeAnalytics, label: 'Sales Analytics' },
    ],
    github: 'https://github.com/sag030601',
    liveDemo: 'https://ecomm-may2026.onrender.com',
    featured: true,
    highlight: true,
  },
  {
    id: 'enterprise-cms',
    title: 'Enterprise CMS Platform',
    description:
      'Multi-tenant content management system for enterprise and government clients with RBAC, workflow approvals, audit trails, and modular plugin architecture for custom content types.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: cmsImage,
    github: 'https://github.com/sag030601',
    liveDemo: 'https://example.com/cms',
    featured: true,
  },
  {
    id: 'hrms-payroll',
    title: 'HRMS & Payroll Management System',
    description:
      'Full-cycle HR platform covering employee onboarding, attendance, leave management, payroll computation, tax deductions, and automated payslip generation with role-based dashboards.',
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'Redis', 'Nginx'],
    image: hrmsImage,
    github: 'https://github.com/sag030601',
    liveDemo: 'https://example.com/hrms',
    featured: true,
  },
  {
    id: 'gis-geoserver',
    title: 'GIS Mapping & GeoServer Platform',
    description:
      'Geospatial visualization platform integrating GeoServer, PostGIS, and custom REST APIs. Supports WMS/WFS layers, spatial queries, and real-time map rendering for government GIS projects.',
    technologies: ['GeoServer', 'PostGIS', 'React', 'Node.js', 'Apache'],
    image: gisImage,
    github: 'https://github.com/sag030601',
    liveDemo: 'https://example.com/gis',
    featured: true,
  },
];
