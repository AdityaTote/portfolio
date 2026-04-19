import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Wrench,
  Brain,
  Shield,
} from "lucide-react";
import {
  BunIcon,
  CloudflareIcon,
  DockerIcon,
  HonoIcon,
  PostgresIcon,
  PrismaIcon,
  TSIcon,
} from "@/icons";

export const techStack = [
  { name: "TypeScript", icon: <TSIcon />, delay: 0 },
  { name: "Hono", icon: <HonoIcon />, delay: 0.1 },
  { name: "PostgreSQL", icon: <PostgresIcon />, delay: 0.12 },
  { name: "Cloudflare", icon: <CloudflareIcon />, delay: 0.14 },
  { name: "Bun", icon: <BunIcon />, delay: 0.16 },
  { name: "Prisma", icon: <PrismaIcon />, delay: 0.18 },
  { name: "Docker", icon: <DockerIcon />, delay: 0.2 },
];

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
  color: string;
  textClass: string;
  borderClass: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Golang", "TypeScript", "SQL"],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "Backend Engineering",
    icon: Layers,
    skills: [
      "REST APIs",
      "AsyncIO",
      "Background Tasks",
      "WebSockets",
      "Microservices",
      "gRPC",
      "GraphQL",
    ],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "Frameworks",
    icon: GitBranch,
    skills: ["FastAPI", "Flask", "Node.js", "Express.js", "Hono"],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "Async Processing & Messaging",
    icon: GitBranch,
    skills: [
      "Celery",
      "RabbitMQ",
      "Background Tasks",
      "Event-Driven Architecture",
    ],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "AI & LLM Systems",
    icon: Brain,
    skills: [
      "LLM Integration",
      "AI Agents",
      "Retrieval-Augmented Generation (RAG)",
      "Agent Orchestration",
      "Workflow Pipelines",
      "Embedding Pipelines",
      "Vector Search",
    ],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "AI Frameworks & Tooling",
    icon: Brain,
    skills: ["LangChain", "LangGraph", "Google Agent Development Kit"],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "ChromaDB"],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "GCP (Cloud Run, Compute Engine)",
      "AWS (S3, CloudFront)",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions)",
      "Linux",
    ],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["OAuth2", "JWT", "API Security", "Access Control"],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Postman", "Prometheus", "Grafana"],
    color: "from-emerald-500/10 to-emerald-500/5",
    textClass: "group-hover/tag:text-emerald-400",
    borderClass: "border-gray-800 group-hover/tag:border-emerald-500/40",
  },
];
