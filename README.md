# Alex Wandres - Portfolio

A modern, responsive portfolio website built with Astro, showcasing full-stack development projects and AI-assisted development work.

## 🚀 Live Site

Coming soon...

## ✨ Features

### Homepage (`/`)

- **Hero Section** - Professional headshot with intro, experience highlights, and CTAs
- **What I Do** - Grid of service cards (Government Software, AI-Assisted Development, Full Stack, Creative Projects)
- **Skills & Technologies** - Interactive skill tags that filter projects
- **Featured Project Display** - Expandable project cards with:
  - Two-column layout (details left, image right)
  - **Multi-image gallery** - Clickable thumbnail gallery for projects with multiple screenshots
  - Technology stack display organized by category
  - GitHub/Live Site links
- **Projects Grid** - Filterable project cards with hover effects

### Projects Page (`/projects`)

- **Category-based organization** - Projects grouped by:
  - 🤖 AI-Assisted Development
  - 🏛️ Government Software
  - 💼 Professional & Freelance
  - 📚 Earlier Work
- **Sticky category headers** - Full-width headers with descriptions
- **Detailed project cards** - Large titles, descriptions, images, and tech stacks

### Additional Pages

- `/resume` - Resume/CV display with PDF download
- `/contact` - Contact form and information

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.16.5
- **Styling**: Scoped CSS with CSS custom properties
- **Typography**: Titillium Web (Google Fonts)
- **Deployment**: TBD

## 📁 Project Structure

```
/
├── public/
│   ├── files/
│   │   └── Alex_Wandres_Resume.pdf
│   └── images/
│       ├── headshot.jpg
│       ├── soundsgood-*.png (6 screenshots)
│       └── ... (project images)
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── projects.astro
│       ├── resume.astro
│       └── contact.astro
└── package.json
```

## 🧞 Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |

## 📝 Recent Updates

### December 2024

- **Multi-image gallery feature** - Projects can now display multiple screenshots with clickable thumbnails
  - Click any thumbnail to set it as the featured image
  - Active thumbnail highlighting with accent color
  - Hover effects with lift animation
- **SoundsGood Software showcase** - Added 6 screenshots demonstrating the platform:
  - Project Status dashboard
  - Custom Business Platform overview
  - Admin Dashboard
  - Vintage Tone Shop (store dashboard)
  - New Sale POS interface
  - Musicians browser
- **Full-width category headers** - Projects page categories now span full width
- **Inline styles for dynamic elements** - Resolved Astro CSS scoping for JavaScript-generated content

## 🎨 Design System

### Colors

- **Primary Background**: `#1a1a1a`
- **Card Background**: `#242424`
- **Accent**: `#4dffc3` (mint green)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#aaaaaa`
- **Border**: `#333333`

### Typography

- **Headings**: Titillium Web, 900 weight
- **Body**: System fonts with Titillium Web accents

## 📄 License

© 2024 Alex Wandres. All rights reserved.
