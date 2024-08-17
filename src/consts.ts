import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Fyve Studio",
  DESCRIPTION: "Fyve Studio ofrece servicios integrales de fotografía, videografía, streaming en vivo y diseño web en Málaga.",
  AUTHOR: "Fyve Studio",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Nuestros proyectos y trabajos recientes.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Artículos sobre temas apasionantes y tendencias en el sector.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Proyectos recientes en los que hemos trabajado.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Buscar todos los posts y proyectos por palabra clave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contacto@fystudio.com",
    HREF: "mailto:contacto@fystudio.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "fyve-studio",
    HREF: "https://github.com/fyve-studio",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "fyve-studio",
    HREF: "https://www.linkedin.com/company/fyve-studio/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "fyve_studio",
    HREF: "https://twitter.com/fyve_studio",
  },
]
