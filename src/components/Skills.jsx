import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend Core",
    color: "#00d4aa",
    skills: [
      { name: "HTML & CSS", icon: "🌐", level: 90 },
      { name: "JavaScript (ES6+)", icon: "⚡", level: 85 },
      { name: "React.js", icon: "⚛️", level: 80 },
      { name: "Responsive Design", icon: "📱", level: 85 },
    ],
  },
  {
    title: "Styling & UI",
    color: "#00a8ff",
    skills: [
      { name: "Tailwind CSS", icon: "🎨", level: 85 },
      { name: "CSS Animations", icon: "✨", level: 80 },
      { name: "Figma (UI Design)", icon: "🖼️", level: 75 },
      { name: "Component Design", icon: "🧩", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "#f59e0b",
    skills: [
      { name: "Next.js", icon: "▲", level: 75 },
      { name: "Laravel (Blade)", icon: "🔥", level: 75 },
      { name: "Axios / Fetch API", icon: "🔄", level: 85 },
      { name: "React Router", icon: "🗺️", level: 80 },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "#a78bfa",
    skills: [
      { name: "Git / GitHub", icon: "🔀", level: 90 },
      { name: "VS Code", icon: "💻", level: 90 },
      { name: "Chrome DevTools", icon: "🧰", level: 85 },
      { name: "npm / yarn", icon: "📦", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    color: "#ec4899",
    skills: [
      { name: "REST API Integration", icon: "🔌", level: 85 },
      { name: "MySQL", icon: "🗄️", level: 80 },
      { name: "Postman", icon: "📮", level: 80 },
      { name: "Node.js (Basic)", icon: "🟢", level: 70 },
    ],
  },
  {
    title: "Performance & Deploy",
    color: "#22c55e",
    skills: [
      { name: "Web Performance", icon: "🚀", level: 80 },
      { name: "SEO Basics", icon: "🔍", level: 75 },
      { name: "Vercel / Netlify", icon: "☁️", level: 80 },
      { name: "Docker (Basic)", icon: "🐳", level: 70 },
    ],
  },
  {
    title: "Networking",
    color: "#ef4444",
    skills: [
      { name: "Cisco / Networking", icon: "🔗", level: 85 },
      { name: "LAN Cable Crimping", icon: "🔌", level: 90 },
      { name: "Fiber Optic (FTTH)", icon: "💡", level: 80 },
      { name: "Troubleshooting Network", icon: "🧰", level: 85 },
    ],
  },
  {
    title: "Server & Infrastructure",
    color: "#f59e0b",
    skills: [
      { name: "Linux / Ubuntu", icon: "🐧", level: 85 },
      { name: "Nginx / Apache", icon: "⚡", level: 80 },
      { name: "VMware / Virtualization", icon: "💠", level: 75 },
      { name: "Windows Server", icon: "🪟", level: 80 },
    ],
  },
  {
    title: "Testing & Debugging",
    color: "#6366f1",
    skills: [
      { name: "Manual Testing", icon: "🧪", level: 80 },
      { name: "Bug Tracking", icon: "🐞", level: 85 },
      { name: "Cross-browser Testing", icon: "🌍", level: 80 },
      { name: "Debugging & Troubleshooting", icon: "🛠️", level: 85 },
    ],
  },
  {
    title: "Soft Skills",
    color: "#f43f5e",
    skills: [
      { name: "Attention to Detail", icon: "🔍", level: 90 },
      { name: "Problem Solving", icon: "🧠", level: 85 },
      { name: "Kreativitas", icon: "💡", level: 85 },
      { name: "Team Collaboration", icon: "🤝", level: 90 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-center mb-16 font-bold text-white">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ title, color, skills }) => (
            <div
              key={title}
              className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
            >
              <h3 className="text-white mb-6 font-semibold">
                {title}
              </h3>

              <div className="space-y-5">
                {skills.map(({ name, icon, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2 text-sm text-white">
                      <div className="flex items-center gap-2">
                        <span>{icon}</span>
                        {name}
                      </div>
                      <span className="text-white/40">{level}%</span>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animate ? `${level}%` : "0%",
                          background: `linear-gradient(90deg, ${color}, ${color}80)`
                        }}
                      />
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}