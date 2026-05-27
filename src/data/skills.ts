export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  name: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Business Intelligence",
    items: [
      { name: "Power BI", icon: "simple-icons:powerbi" },
      { name: "DAX", icon: "lucide:function-square" },
      { name: "Data Modelling", icon: "lucide:network" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "JavaScript", icon: "simple-icons:javascript" },
      { name: "React", icon: "simple-icons:react" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "Vite", icon: "simple-icons:vite" },
      { name: "HTML & CSS", icon: "simple-icons:html5" },
    ],
  },
  {
    name: "Backend & Cloud",
    items: [
      { name: "Firebase", icon: "simple-icons:firebase" },
      { name: "Cloud Functions", icon: "simple-icons:googlecloud" },
      { name: "PWA", icon: "lucide:smartphone" },
      { name: "Generative AI", icon: "lucide:sparkles" },
    ],
  },
  {
    name: "ERP & Automation",
    items: [
      { name: "Odoo 17", icon: "simple-icons:odoo" },
      { name: "Python", icon: "simple-icons:python" },
      { name: "Inventory Automation", icon: "lucide:boxes" },
    ],
  },
  {
    name: "Data",
    items: [
      { name: "SQL", icon: "lucide:database" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    ],
  },
  {
    name: "Tooling & SEO",
    items: [
      { name: "Git & GitHub", icon: "simple-icons:github" },
      { name: "Technical SEO", icon: "lucide:search" },
      { name: "Google Analytics", icon: "simple-icons:googleanalytics" },
    ],
  },
];
