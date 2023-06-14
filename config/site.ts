export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GOV.PH",
  description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  sideNav: [
    {
      title: "Users",
      href: "/users",
    },
    {
      title: "Pages",
      href: "/pages",
    },
    {
      title: "Media",
      href: "/media",
      children: [
        {
          title: "Photos",
          href: "/media/photos",
        },
        {
          title: "Videos",
          href: "/media/videos",
        },
        {
          title: "Documents",
          href: "/media/documents",
        },
      ],
    },
    {
      title: "Articles",
      href: "/articles",
    },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Settings",
      href: "/settings",
      children: [
        {
          title: "Edit Profile",
          href: "/settings/edit-profile",
        },
        {
          title: "Account Management",
          href: "/settings/account-management",
        },
      ],
    },
  ],
  links: {
    egov: "https://e.gov.ph/",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
