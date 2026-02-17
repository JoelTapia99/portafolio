"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiFigma,
  SiGithubactions,
  SiJavascript,
  SiPython,
  SiRedis,
  SiLinux,
  SiVercel,
  SiPrisma,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-foreground">
            Tecnologias que domino
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Mi stack tecnologico abarca desde el frontend hasta el backend,
            permitiendome crear soluciones completas y eficientes.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary/50 transition-all duration-300 cursor-default"
                    >
                      <div
                        className="p-3 rounded-xl bg-secondary/30 group-hover:scale-110 transition-transform duration-300"
                        style={{ boxShadow: `0 0 20px ${skill.color}20` }}
                      >
                        <Icon
                          className="w-8 h-8 transition-colors duration-300"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
