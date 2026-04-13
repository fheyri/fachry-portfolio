
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Quality Assurance & Testing",
    color: "#00d4aa",
    skills: [
      { name: "Manual Testing", icon: "🧪", level: 85 },
      { name: "Test Case Writing", icon: "📝", level: 80 },
      { name: "Bug Reporting & Tracking", icon: "🐞", level: 85 },
      { name: "Debugging & Troubleshooting", icon: "🛠️", level: 85 },
    ],
  },
  {
    title: "Web Development",
    color: "#00a8ff",
    skills: [
      { name: "HTML, CSS, JavaScript", icon: "🌐", level: 85 },
      { name: "React.js", icon: "⚛️", level: 80 },
      { name: "Laravel", icon: "🔥", level: 75 },
      { name: "MySQL", icon: "🗄️", level: 85 },
    ],
  },
  {
    title: "API & Tools",
    color: "#f59e0b",
    skills: [
      { name: "Postman (API Testing)", icon: "📮", level: 80 },
      { name: "Git / GitHub", icon: "🔀", level: 90 },
      { name: "Chrome DevTools", icon: "🧰", level: 85 },
      { name: "Basic Automation Testing", icon: "🤖", level: 70 },
    ],
  },
  {
    title: "Infrastructure & System",
    color: "#ec4899",
    skills: [
      { name: "Linux / Ubuntu", icon: "🐧", level: 90 },
      { name: "Windows Server", icon: "🪟", level: 85 },
      { name: "VMware / Virtualization", icon: "💠", level: 80 },
      { name: "Docker (Basic)", icon: "🐳", level: 75 },
    ],
  },
  {
    title: "Networking",
    color: "#ef4444",
    skills: [
      { name: "Cisco / Networking", icon: "🔗", level: 85 },
      { name: "Network Infrastructure", icon: "🌐", level: 85 },
      { name: "Nginx / Apache", icon: "⚡", level: 80 },
      { name: "Troubleshooting Network", icon: "🧰", level: 85 },
    ],
  },
  {
    title: "Network Cabling",
    color: "#22c55e",
    skills: [
      { name: "LAN Cable Crimping", icon: "🔌", level: 90 },
      { name: "Fiber Optic (FTTH)", icon: "🌐", level: 80 },
      { name: "Network Installation", icon: "🛠️", level: 85 },
      { name: "Cable Troubleshooting", icon: "🧰", level: 85 },
    ],
  },
  {
    title: "Tools & Monitoring",
    color: "#a78bfa",
    skills: [
      { name: "Grafana", icon: "📊", level: 80 },
      { name: "Prometheus", icon: "🔥", level: 75 },
      { name: "Ansible", icon: "🤖", level: 75 },
      { name: "Git Workflow", icon: "🔀", level: 90 },
    ],
  },
  {
    title: "Soft Skills",
    color: "#f43f5e",
    skills: [
      { name: "Attention to Detail", icon: "🔍", level: 90 },
      { name: "Problem Solving", icon: "🧠", level: 85 },
      { name: "Analytical Thinking", icon: "📈", level: 85 },
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
      { threshold: 0.3 } // muncul 30% di layar
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
