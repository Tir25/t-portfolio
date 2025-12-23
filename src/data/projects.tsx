import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  videoCover?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "rudri-portfolio",
    category: "Full Stack Platform",
    title: "Rudri P — Blog & Research Papers Platform",
    src: "/Portfolio Website/Screenshot 2025-12-18 104213.png",
    screenshots: [
      "Screenshot 2025-12-18 104213.png",
      "Screenshot 2025-12-18 104322.png",
      "Screenshot 2025-12-18 104352.png",
      "Screenshot 2025-12-18 104432.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://rudri-p-portfolio.vercel.app",
    github: "https://github.com/Tir25/rudri-p-portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Secure, TypeScript-first blogging and research-paper platform built
            with Next.js and Supabase
          </TypographyP>
          <TypographyP className="font-mono ">
            A full-stack web application that lets authors publish blog posts and
            upload research papers with secure storage and access policies. Built
            in TypeScript and deployed to Vercel, with the backend powered by
            Supabase (Postgres) and Row-Level Security for precise access
            control.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Frontend:</strong> Next.js, React, TypeScript
            <br />
            <strong>Backend:</strong> Supabase (Postgres, Auth, Storage),
            PLpgSQL (RLS / stored scripts)
            <br />
            <strong>Deployment:</strong> Vercel, Nixpacks, Procfile;
            deployment automation via PowerShell/Bash scripts
            <br />
            <strong>Tools:</strong> Node.js, npm, GitHub
          </p>
          <SlideShow
            images={[
              "/Portfolio Website/Screenshot 2025-12-18 104213.png",
              "/Portfolio Website/Screenshot 2025-12-18 104322.png",
              "/Portfolio Website/Screenshot 2025-12-18 104352.png",
              "/Portfolio Website/Screenshot 2025-12-18 104432.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Create, edit, and publish blog posts</li>
            <li>Upload and manage research papers with secure storage</li>
            <li>Role-based access and Row-Level Security for private data</li>
            <li>Automated deployment & CI-friendly scripts</li>
            <li>Security audit and database migration scripts included</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Security & Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Designed and implemented secure file storage and access control
            using Supabase Storage and Row-Level Security policies. The platform
            includes comprehensive security measures with RLS configured for both
            storage and database, ensuring that uploads and paper access remain
            secure and private. A complete security audit document is included
            in the repository.
          </p>
          <TypographyH3 className="my-4 mt-8">Deployment & Documentation</TypographyH3>
          <p className="font-mono mb-2">
            The project includes comprehensive deployment documentation and
            automation scripts (PowerShell/.bat scripts, Procfile, and
            Nixpacks/render configurations). Database migration scripts ensure
            reproducible schema setup, and the live app is deployed on Vercel
            with automated CI/CD workflows.
          </p>
          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              Built a full-stack Blog & Research Papers platform using Next.js
              (TypeScript) and Supabase (Postgres, Auth, Storage)
            </li>
            <li>
              Implemented Row-Level Security to protect user uploads and enforce
              access policies
            </li>
            <li>
              Deployed production app to Vercel with automated scripts and
              delivery documentation
            </li>
            <li>
              Created database migration scripts and performed a security audit
            </li>
            <li>
              TypeScript-first frontend with accessibility and responsive layout
              priorities
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "bus-tracking-system",
    category: "Real-Time PWA",
    title: "BTS — UniTrack",
    src: "/BTS-System/screenshot-1.png",
    videoCover: "/BTS-System/demo-video.mp4",
    screenshots: [
      "screenshot-1.png",
      "screenshot-2.png",
      "screenshot-3.png",
    ],
    live: "https://university-bus-tracker-app.web.app/",
    github: "https://github.com/Tir25/BTS",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A responsive single-page web app for live transit tracking and
            management — featuring a real-time map with bus position streaming,
            admin CRUD dashboard, and PWA support
          </TypographyP>
          <TypographyP className="font-mono">
            BTS is a production-oriented PWA designed to provide operators and
            riders with real-time transit data and administrative controls. The
            app streams vehicle locations to an interactive map, uses visual cues
            to indicate stale data, and offers a mobile-optimized experience so
            users can access the map offline or install it as an app.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Core:</strong> JavaScript (83.7%), CSS (15.7%), HTML (0.6%)
            <br />
            <strong>Framework:</strong> Vite, React-style modular components & hooks
            <br />
            <strong>Backend:</strong> Firebase (Firestore for real-time streaming)
            <br />
            <strong>Maps:</strong> Interactive map library with geocoding & address search
            <br />
            <strong>PWA:</strong> Service worker with navigateFallback for SPA routing
            <br />
            <strong>Deployment:</strong> Firebase Hosting
          </p>
          <SlideShow
            images={[
              "/BTS-System/screenshot-1.png",
              "/BTS-System/screenshot-2.png",
              "/BTS-System/screenshot-3.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Live tracking: buses on an interactive map with auto-updating "time ago" indicators and stale detection</li>
            <li>Real-time streaming: positions update frequently via Firestore</li>
            <li>User location: shows user location marker + accuracy circle</li>
            <li>Map features: destination management with map picker and address search/geocoding</li>
            <li>Admin dashboard: production-grade CRUD for buses, routes, schedules, analytics</li>
            <li>Scheduling: templates for recurring schedules and driver management</li>
            <li>PWA support: service worker configured for offline-first SPA routing</li>
            <li>Mobile-first: components optimized for mobile breakpoints (480px)</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Architecture & Design</TypographyH3>
          <p className="font-mono mb-2">
            Component-based SPA with modular React components (HeroSection, FeaturesSection,
            StatsBar, AnimatedBackground, BusMap, TrackingPage). Custom hooks separate
            concerns (useTimeAgo, useUserLocation), promoting reuse and testability.
            Real-time data flows from Firestore to front-end markers with PWA layers
            handling caching and offline routing.
          </p>
          <TypographyH3 className="my-4 mt-8">Challenges & Solutions</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              <strong>Streaming + SW caching:</strong> Removed Firestore from service worker
              cache and adjusted navigateFallback to index.html, ensuring live streaming
              works while preserving PWA routing
            </li>
            <li>
              <strong>Map UI reliability:</strong> Fixed flexbox height inheritance and
              refactored tracking into modular components for consistent rendering
            </li>
            <li>
              <strong>Stale data detection:</strong> Added stale-bus detection with visual
              (amber) markers and auto-refreshing time-ago indicator
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              Full-stack front-end engineer: design + implementation of modular
              landing and tracking components
            </li>
            <li>
              Built reusable Icon system and core hooks for real-time UI behavior
            </li>
            <li>
              Implemented live map UX (markers, stale detection, auto-refresh time indicators)
              and admin CRUD flows
            </li>
            <li>
              Configured PWA service worker for SPA routing and offline-first experience
            </li>
            <li>
              Optimized for mobile breakpoints and accessibility
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "vr-nextgen",
    category: "Company Website",
    title: "VR NEXTGEN — Company Website",
    src: "/VR-NEXTGEN Consultancy website/Screenshot 2025-12-18 111846.png",
    screenshots: [
      "Screenshot 2025-12-18 111846.png",
      "Screenshot 2025-12-18 111935.png",
      "Screenshot 2025-12-18 112021.png",
      "Screenshot 2025-12-18 112103.png",
      "Screenshot 2025-12-18 112137.png",
      "Screenshot 2025-12-18 112217.png",
    ],
    live: "https://vrnextgensolutions.com",
    github: "https://github.com/Tir25/VR-NEXTGEN",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Modern TypeScript + Next.js site with performance-first design and
            polished UX
          </TypographyP>
          <TypographyP className="font-mono ">
            A marketing site for VR NEXTGEN focused on fast load times,
            responsive media, and engaging UX. Built with Next.js and TypeScript,
            the site includes custom image optimization and smooth page
            transitions and is hosted on Vercel.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Frontend:</strong> Next.js + React + TypeScript
            <br />
            <strong>Styling:</strong> CSS (custom transitions & responsive
            layout)
            <br />
            <strong>Optimization:</strong> Next.js Image + custom image
            optimization components
            <br />
            <strong>Deployment:</strong> Vercel
            <br />
            <strong>Tooling:</strong> Node.js, npm/Yarn, Git, branch-based
            feature development
          </p>
          <SlideShow
            images={[
              "/VR-NEXTGEN Consultancy website/Screenshot 2025-12-18 111846.png",
              "/VR-NEXTGEN Consultancy website/Screenshot 2025-12-18 111935.png",
              "/VR-NEXTGEN Consultancy website/Screenshot 2025-12-18 112021.png",
              "/VR-NEXTGEN Consultancy website/Screenshot 2025-12-18 112103.png",
              "/VR-NEXTGEN Consultancy website/Screenshot 2025-12-18 112137.png",
              "/VR-NEXTGEN Consultancy website/Screenshot 2025-12-18 112217.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              SEO-friendly static/dynamic pages with server-side rendering or
              SSG (Next.js)
            </li>
            <li>
              Responsive images with custom optimization component for
              performance
            </li>
            <li>
              Smooth scroll prompts and animated UI elements to improve
              engagement
            </li>
            <li>
              Active code quality & TypeScript type-safety improvements
            </li>
            <li>
              Vercel-optimized configuration and deployment fixes
            </li>
            <li>
              Optimized media assets and refined UX interactions
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <p className="font-mono mb-2">
            I developed a modern, performance-first company site for VR NEXTGEN
            solutions using a TypeScript-first Next.js stack. The project
            emphasizes responsive design, optimized media assets, and refined UX
            interactions such as scroll prompts and animated transitions. I
            implemented image optimization components and resolved
            deployment-specific issues (Vercel) to ensure reliable production
            builds.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Achievements</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              Built a performance-optimized marketing website for VR NEXTGEN
              using Next.js and TypeScript
            </li>
            <li>
              Implemented responsive image optimization and UX enhancements
            </li>
            <li>
              Resolved production deployment issues (Vercel compatibility) and
              implemented component-level TypeScript fixes
            </li>
            <li>
              Created custom image optimization components (OptimizedImage,
              OptimizedWhatWeDoImage) with responsive sizes
            </li>
            <li>
              Added smooth scroll prompts, animated callouts, and improved
              section transitions for better user engagement
            </li>
            <li>
              Fixed Next.js Image usage to resolve Vercel deployment issues and
              improved build reliability
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "mantro",
    category: "Agency Website",
    title: "MANTRO — Modern Next.js App",
    src: "/MANTRO-STUDIO/Screenshot 2025-12-18 112944.png",
    screenshots: [
      "Screenshot 2025-12-18 112944.png",
      "Screenshot 2025-12-18 113049.png",
      "Screenshot 2025-12-18 113135.png",
      "Screenshot 2025-12-18 113225.png",
      "Screenshot 2025-12-18 113256.png",
    ],
    live: "https://mantro-1kmb.vercel.app",
    github: "https://github.com/Tir25/man_tro",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TypeScript-first component-driven Next.js project styled with Tailwind
            CSS and production-ready configs
          </TypographyP>
          <TypographyP className="font-mono ">
            A modular Next.js application built with TypeScript and Tailwind CSS.
            The codebase emphasizes maintainability (components, hooks, lib
            folders), production readiness (next.config.js, PostCSS), and security
            (dependency patching workflow).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Framework:</strong> Next.js (TypeScript)
            <br />
            <strong>Languages:</strong> TypeScript, JavaScript, CSS
            <br />
            <strong>Styling:</strong> Tailwind CSS + PostCSS
            <br />
            <strong>Tooling:</strong> ESLint, Node.js, npm
            <br />
            <strong>Hosting / CI:</strong> Vercel (project created from Vercel
            starter, Vercel automated PR present)
          </p>
          <SlideShow
            images={[
              "/MANTRO-STUDIO/Screenshot 2025-12-18 112944.png",
              "/MANTRO-STUDIO/Screenshot 2025-12-18 113049.png",
              "/MANTRO-STUDIO/Screenshot 2025-12-18 113135.png",
              "/MANTRO-STUDIO/Screenshot 2025-12-18 113225.png",
              "/MANTRO-STUDIO/Screenshot 2025-12-18 113256.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              TypeScript-first, component-driven architecture (app + components
              folders)
            </li>
            <li>Tailwind CSS for rapid, responsive UI development</li>
            <li>
              Modern Next.js features (app directory, optimized images & SSR/SSG
              options)
            </li>
            <li>
              Production-oriented config: next.config.js, PostCSS, Tailwind,
              linting
            </li>
            <li>
              Security-aware maintenance: automated Vercel patch for a critical RSC
              vulnerability (evidence of dependency & security hygiene)
            </li>
            <li>
              Component-based architecture with app/ and components/ folders for
              scalable structure
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <p className="font-mono mb-2">
            man_tro is a modern Next.js application developed with a
            TypeScript-first approach and Tailwind CSS for styling. The codebase
            follows a component-driven structure (app/, components/, hooks/, lib/)
            to keep UI and logic modular and maintainable. The project is prepared
            for production deployments on Vercel and includes PostCSS and ESLint
            configurations for consistent builds and code quality.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Achievements</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>
              Developed a TypeScript-first Next.js application (component-driven)
              using Tailwind CSS and PostCSS
            </li>
            <li>
              Configured production-ready builds and linting for consistent code
              quality
            </li>
            <li>
              Maintained production hygiene with dependency/security patches
              (Vercel automated PR to mitigate a React Server Components RCE
              vulnerability)
            </li>
            <li>
              Implemented component-driven architecture with proper separation of
              concerns (app/, components/, hooks/, lib/ folders)
            </li>
            <li>
              Set up Tailwind CSS and PostCSS for rapid, responsive UI development
            </li>
            <li>
              Demonstrated security-first practices by actively monitoring and
              applying critical security patches
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Security & Maintenance</TypographyH3>
          <p className="font-mono mb-2">
            The repository demonstrates active security maintenance — an automated
            Vercel patch for a React Server Components RCE vulnerability was
            generated to keep dependencies safe. This shows evidence of dependency &
            security hygiene, actively monitoring and applying patches, testing,
            and keeping dependencies up-to-date.
          </p>
        </div>
      );
    },
  },
];
export default projects;
