import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Globe, Brain, BarChart2, ShieldCheck, Clapperboard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
	{
		icon: <Zap size={24} />,
		title: "Workflow Automation",
		desc: "Multi-agent pipelines, LangGraph workflows, and n8n automations that kill repetitive tasks and orchestrate your entire business process — hands-free.",
		color: "purple",
		gradient: "from-purple-500/10",
		border: "border-purple-500/20",
		bg: "bg-purple-500/10",
		text: "text-purple-400",
	},
	{
		icon: <Globe size={24} />,
		title: "MERN & PHP Stack Apps",
		desc: "Full-stack web platforms with React, Next.js, Node, Express, MongoDB, Postgres, Laravel, CodeIgniter — JWT auth, real-time Socket.IO, Cloudinary, Redis, and clean deployment to production.",
		color: "blue",
		gradient: "from-blue-500/10",
		border: "border-blue-500/20",
		bg: "bg-blue-500/10",
		text: "text-blue-400",
	},
	{
		icon: <Brain size={24} />,
		title: "AI & Machine Learning",
		desc: "Custom ML classifiers, NLP systems, RAG chatbots, and fine-tuned LLMs with proper MLOps — DVC, MLflow tracking, model registry, quality gates, and inference APIs.",
		color: "cyan",
		gradient: "from-cyan-500/10",
		border: "border-cyan-500/20",
		bg: "bg-cyan-500/10",
		text: "text-cyan-400",
	},
];

const Services = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const cardsRef = useRef([]);

	useGSAP(() => {
		gsap.set(cardsRef.current, { opacity: 1, y: 0 });

		gsap.from(headingRef.current.children, {
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
			y: 50,
			opacity: 0,
			duration: 1,
			stagger: 0.15,
			ease: "power3.out"
		});

		gsap.from(cardsRef.current, {
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 80%",
			},
			y: 80,
			opacity: 0,
			duration: 1,
			stagger: 0.15,
			ease: "power3.out"
		});
	}, []);

	return (
		<section id="services" ref={sectionRef} className='relative pt-40 pb-32 overflow-hidden'>
			<div className='max-w-7xl mx-auto px-6'>
				<div ref={headingRef} className='max-w-3xl mb-20'>
					<p className='text-sm uppercase tracking-[0.2em] text-purple-400 mb-4'>Services</p>
					<h2 className='text-4xl md:text-5xl font-semibold tracking-tight leading-tight'>
						From raw idea to deployed, intelligent system
					</h2>
					<p className='text-gray-400 mt-5 text-lg leading-relaxed max-w-2xl'>
						Built for small teams, growing companies, and developers who want to automate, scale, and upgrade their digital presence without the agency price tag.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{services.map((s, i) => (
						<div
							key={s.title}
							ref={(el) => (cardsRef.current[i] = el)}
							className={`group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden`}
						>
							<div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${s.gradient} to-transparent`} />
							<div className='relative z-10'>
								<div className={`w-14 h-14 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center mb-6 ${s.text}`}>
									{s.icon}
								</div>
								<h3 className='text-2xl font-semibold mb-4'>{s.title}</h3>
								<p className='text-gray-400 leading-relaxed'>{s.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services;
