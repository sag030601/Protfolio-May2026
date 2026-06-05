import cmsImage from '../assets/project-cms.svg';
import hrmsImage from '../assets/project-hrms.svg';
import gisImage from '../assets/project-gis.svg';

export const projects = [
  {
    id: 'enterprise-cms',
    title: 'Enterprise CMS Platform',
    description:
      'Multi-tenant content management system for enterprise and government clients with RBAC, workflow approvals, audit trails, and modular plugin architecture for custom content types.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: cmsImage,
    github: 'https://github.com/sagarsingh',
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
    github: 'https://github.com/sagarsingh',
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
    github: 'https://github.com/sagarsingh',
    liveDemo: 'https://example.com/gis',
    featured: true,
  },
];
