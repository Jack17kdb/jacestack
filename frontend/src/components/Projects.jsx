import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, MapPin, Bot, Landmark, MessageSquareCode, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		id: "featured",
		label: "Cybersecurity · AI · MERN Stack",
		labelColor: "text-purple-400",
		icon: <ShieldAlert size={28} className="text-purple-400" />,
		iconBg: "bg-purple-500/10 border-purple-500/20",
		title: "Sentinel AI — Autonomous Threat Detection Platform",
		desc: "A self-learning cybersecurity platform that monitors live network traffic, detects anomalies with LSTM and Isolation Forest models, auto-blocks attacker IPs, and streams everything to a real-time MERN dashboard via Socket.IO.",
		tags: ["PyTorch", "Node.js", "React", "Docker", "MongoDB", "Socket.IO"],
		gradient: "from-purple-500/10 via-transparent to-blue-500/10",
		span: "lg:col-span-12",
		min: "min-h-[320px]",
	},
	{
		id: "kinap",
		label: "MERN Stack · Real-Time · Socket.IO",
		labelColor: "text-cyan-400",
		icon: <MapPin size={24} className="text-cyan-400" />,
		iconBg: "bg-cyan-500/10 border-cyan-500/20",
		title: "Campus Lost & Found Platform",
		desc: "Full-stack platform with smart item-similarity matching, real-time chat, Cloudinary uploads, Redis rate limiting, JWT auth, and a live admin dashboard.",
		tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Redis"],
		gradient: "from-cyan-500/10 to-transparent",
		span: "lg:col-span-6",
		min: "min-h-[240px]",
	},
	{
		id: "kenyajobs",
		label: "LangGraph · FastAPI · RAG",
		labelColor: "text-blue-400",
		icon: <Bot size={24} className="text-blue-400" />,
		iconBg: "bg-blue-500/10 border-blue-500/20",
		title: "Kenya Jobs AI — Agentic Job Aggregator",
		desc: "LangGraph-powered agent that scrapes live Kenyan job listings, summarises opportunities with Groq LLM, and serves them through a FastAPI REST backend deployed on HuggingFace Spaces.",
		tags: ["LangGraph", "FastAPI", "Groq", "BeautifulSoup"],
		gradient: "from-blue-500/10 to-transparent",
		span: "lg:col-span-6",
		min: "min-h-[240px]",
	},
	{
		id: "research",
		label: "Multi-Agent · LangGraph · Finance",
		labelColor: "text-pink-400",
		icon: <Brain size={24} className="text-pink-400" />,
		iconBg: "bg-pink-500/10 border-pink-500/20",
		title: "Multi-Agent Financial Research System",
		desc: "Three-agent LangGraph pipeline — Researcher fetches live stock data and news, Writer generates financial newsletters, Reviewer enforces quality and feedback loops before publishing.",
		tags: ["LangGraph", "OpenAI", "GNews API", "Yahoo Finance"],
		gradient: "from-pink-500/10 to-transparent",
		span: "lg:col-span-12",
		min: "min-h-[200px]",
	},
];

const Projects = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const cardRefs = useRef([]);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			gsap.from(headingRef.current.children, {
				scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
				y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
			});
			cardRefs.current.forEach((el, i) => {
				if (!el) return;
				gsap.from(el, {
					scrollTrigger: { trigger: el, start: "top 85%", once: true },
					y: 80, opacity: 0, scale: 0.97, duration: 1.1, delay: (i % 2) * 0.1, ease: "power3.out"
				});
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div ref={headingRef} className="max-w-3xl mb-20">
					<p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-4">Featured Projects</p>
					<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
						Real systems. Real problems solved.
					</h2>
					<p className="text-gray-400 mt-5 text-lg leading-relaxed">
						Every project below combines MERN engineering with real AI — not wrappers, not templates.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					{projects.map((p, i) => (
						<div
							key={p.id}
							ref={(el) => (cardRefs.current[i] = el)}
							className={`${p.span} group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] ${p.min}`}
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition duration-700`} />
							<div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
								<div>
									<div className="flex items-center gap-3 mb-4">
										<div className={`w-11 h-11 rounded-xl ${p.iconBg} border flex items-center justify-center shrink-0`}>
											{p.icon}
										</div>
										<p className={`text-sm ${p.labelColor} font-medium`}>{p.label}</p>
									</div>
									<h3 className={`font-semibold leading-tight mb-4 ${p.span === "lg:col-span-12" ? "text-3xl md:text-4xl max-w-3xl" : "text-2xl"}`}>
										{p.title}
									</h3>
									<p className="text-gray-400 leading-relaxed max-w-2xl">{p.desc}</p>
								</div>
								<div className="flex flex-wrap gap-2 mt-5">
									{p.tags.map(t => (
										<span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
