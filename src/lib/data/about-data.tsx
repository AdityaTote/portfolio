import { Code2, Database, Zap, LucideIcon } from "lucide-react";

export interface AboutCard {
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
  hoverBorderColor: string;
  bgGradient: string;
  bgHover: string;
  title: string;
  description: string;
}

export interface AboutBio {
  mainText: string;
  secondaryText: string;
}

export const aboutCards: AboutCard[] = [
  {
    icon: Code2,
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    hoverBorderColor: "hover:border-emerald-500/40",
    bgGradient: "from-emerald-500 via-emerald-500/50",
    bgHover: "group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40",
    title: "Agent Orchestration",
    description:
      "Designing controlled multi-agent workflows with intent classification, routing, validation, and permissioned execution for reliable automation.",
  },
  {
    icon: Database,
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    hoverBorderColor: "hover:border-cyan-500/40",
    bgGradient: "from-cyan-500 via-cyan-500/50",
    bgHover: "group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40",
    title: "Distributed Backends",
    description:
      "Building asynchronous services with queue-driven execution, resilient retries, and schema-first APIs for scalable product backends.",
  },
  {
    icon: Zap,
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    hoverBorderColor: "hover:border-blue-500/40",
    bgGradient: "from-blue-500 via-blue-500/50",
    bgHover: "group-hover:bg-blue-500/20 group-hover:border-blue-500/40",
    title: "Scalable Backend Services",
    description:
      "Engineering backend APIs with authentication, authorization, audit logging, and cloud-native deployment for production-grade AI systems.",
  },
];

export const aboutBio: AboutBio = {
  mainText:
    "Backend engineer focused on production-grade services, agentic AI systems, and API infrastructure. I work across FastAPI, Hono, Express, and Go to build reliable distributed workflows.",
  secondaryText:
    "Recent work includes multi-agent finance orchestration, asynchronous AI pipelines with Celery and RabbitMQ, and ledger-based transaction systems with strict auditability.",
};

export const aboutSection = {
  sectionNumber: "01",
  sectionLabel: "ABOUT",
  title: {
    main: "$ whoami",
  },
};
