import type { ImageMetadata } from "astro";

export type ProjectMedia =
  | { type: "pdf"; src: string }
  | { type: "image"; src: ImageMetadata | string; alt?: string };

export type ProjectCategory = "work" | "personal";

export type DemoCredentials = {
  label?: string;
  email: string;
  password: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  accent: string;
  icon: string;
  stack: string[];
  description: string;
  impact?: string;
  media?: ProjectMedia;
  href?: { label: string; url: string };
  demoCredentials?: DemoCredentials;
};

export const projects: Project[] = [
  {
    slug: "hourly-sales",
    title: "Hourly & Daily Sales Dashboard",
    category: "work",
    accent: "var(--color-chart-1)",
    icon: "lucide:bar-chart-3",
    stack: ["Power BI", "DAX", "SQL"],
    description:
      "Built a dashboard for company directors that breaks down sales by hour and day of the week, surfacing patterns that were previously invisible in static reports.",
    impact:
      "Directors used the insight to cut Saturday hours during the lowest-activity windows, reducing operating cost without affecting revenue.",
  },
  {
    slug: "sales-projection",
    title: "Sales Projection Dashboard",
    category: "work",
    accent: "var(--color-chart-2)",
    icon: "lucide:trending-up",
    stack: ["Power BI", "DAX", "CRM", "SQL"],
    description:
      "Connected Power BI directly to the company CRM and modelled a projection of incoming sales based on pipeline stage, deal size, and historical conversion rates.",
    impact:
      "Gave sales leadership a forward-looking view instead of relying only on closed-revenue lag metrics.",
  },
  {
    slug: "sales-vs-visits",
    title: "Sales vs. Customer Visits",
    category: "work",
    accent: "var(--color-chart-3)",
    icon: "lucide:scatter-chart",
    stack: ["Power BI", "DAX"],
    description:
      "Cross-referenced sales volume with customer visit frequency to surface which visit patterns actually convert to revenue.",
    impact:
      "Helped the commercial team prioritise high-conversion visit cadences and stop over-investing in low-yield accounts.",
  },
  {
    slug: "customer-scoring",
    title: "Customer Scoring Dashboard",
    category: "work",
    accent: "var(--color-chart-4)",
    icon: "lucide:star",
    stack: ["Power BI", "DAX", "Odoo"],
    description:
      "Rated every customer on a composite score based on purchase volume, product diversity, and on-time payment behaviour.",
    impact:
      "Gave account managers a single view to prioritise outreach and identify at-risk vs. high-value accounts.",
  },
  {
    slug: "escuela-dominical",
    title: "Escuela Dominical — Sunday School Platform",
    category: "personal",
    accent: "var(--color-chart-6)",
    icon: "lucide:graduation-cap",
    stack: [
      "React",
      "Vite",
      "Firebase",
      "Cloud Functions",
      "Tailwind CSS",
      "HeroUI",
      "Framer Motion",
      "PWA",
      "Gemini AI",
    ],
    description:
      "Full-stack PWA for managing a Sunday school: roles for admins and teachers, student records, attendance tracking, weekly Bible reading plans, reflections, weekly questions, reports, an honor roll, graduations, birthdays, and a projector view for in-class display. Push notifications via Firebase Cloud Messaging keep students and teachers in the loop.",
    impact:
      "Replaced spreadsheets and paper attendance with a single platform the entire ministry team uses every week.",
    href: {
      label: "View live app",
      url: "https://escueladominicalapp.web.app/app",
    },
    demoCredentials: {
      label: "Sign in with the visitor account",
      email: "visitas@pandevida.com",
      password: "Pandevida2026",
    },
  },
];
