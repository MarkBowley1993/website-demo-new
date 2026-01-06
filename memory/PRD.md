# Dorset Spray Plastering & Painting - Product Requirements Document

## Original Problem Statement
Build a professional website for Dorset Spray Plastering & Painting business featuring:
- Business services: MF ceilings, dry lining, spray plastering, painting & decorating
- 24 years of experience
- Contact details: 07983 643278, info@dorsetsprayplastering.com
- Complete site structure with all necessary pages
- Professional corporate design with blues, greys, and clean lines

## User Personas
1. **Homeowners**: Looking for reliable plastering and decorating services for home renovations
2. **Landlords**: Need professional contractors for property maintenance and refurbishments
3. **Commercial Clients**: Require office fit-outs and commercial plastering services
4. **Builders/Contractors**: Seeking subcontractors for ongoing projects

## Architecture & Tech Stack
- **Frontend**: React with React Router for multi-page navigation
- **Styling**: Tailwind CSS with Shadcn UI components
- **Design**: Professional corporate style (blues, greys, clean lines)
- **Images**: Curated professional images from vision_expert_agent
- **Current State**: Frontend-only with mock data

## Core Requirements (Static)
1. Multi-page website with 7 main pages + 4 service detail pages
2. Professional corporate design with blue/grey color scheme
3. Mobile-responsive layout
4. Clean navigation with sticky header
5. Contact form (frontend mock)
6. Image gallery
7. FAQ accordion
8. Testimonials section

## What's Been Implemented (January 6, 2025)

### Phase 1: Frontend Development ✅
1. **Pages Created**:
   - Home page with hero, services overview, why choose us, testimonials, CTA
   - About Us page with company info and experience
   - Services overview page
   - 4 Service detail pages (MF Ceilings, Dry Lining, Spray Plastering, Painting & Decorating)
   - Our Process page with 5-step workflow
   - Gallery page with image lightbox
   - FAQs page with accordion component
   - Contact page with form and contact information

2. **Components**:
   - Header with navigation and mobile menu
   - Footer with links and contact info
   - Reusable shadcn UI components (Button, Card, Accordion, Input, Textarea, etc.)

3. **Features**:
   - Responsive design (desktop, tablet, mobile)
   - Professional blue/grey color scheme
   - Smooth transitions and hover effects
   - Mock contact form submission with toast notifications
   - Image gallery with lightbox functionality
   - Mobile-friendly navigation menu
   - Professional images from Unsplash/Pexels

4. **Mock Data** (`/app/frontend/src/data/mock.js`):
   - Business information
   - 4 services with details
   - 3 testimonials
   - 6 gallery images
   - 6 FAQs
   - 5 process steps
   - Mock form submission handler

## Prioritized Backlog

### P0 - Critical (Future)
- Backend API development (MongoDB + FastAPI)
- Database models for contact enquiries
- Email notification system for form submissions
- Admin panel to manage enquiries

### P1 - High Priority
- Real customer testimonials integration
- Actual project photos for gallery
- SEO optimization (meta tags, sitemap, robots.txt)
- Google Analytics integration
- Contact form email delivery

### P2 - Nice to Have
- Blog section for project updates
- Before/after project showcase
- Customer portal for quotes
- Online booking system
- Live chat support
- Social media integration

## Next Tasks
1. Gather real project photos from the client
2. Collect actual customer testimonials
3. Plan backend development:
   - Contact form submission API
   - Email notification system
   - Database schema for enquiries
4. SEO optimization implementation
5. Consider adding Google Maps integration for service area
6. Performance optimization and image lazy loading

## Notes
- Frontend is fully functional with mock data
- Contact form currently shows success message but doesn't send emails
- All images are placeholders from stock photo sites
- Design follows professional corporate style with blues, greys, and clean lines
- Mobile-responsive and follows best practices
