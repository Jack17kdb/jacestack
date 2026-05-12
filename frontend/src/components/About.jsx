import { Cpu, Bot, Rocket } from 'lucide-react';

const About = () => {
	return (
		<section id="about" className="relative py-32 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					<div>
						<p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4">Why JaceStack AI</p>
						<h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-8">Built for teams that move fast and need things to work</h2>
						<p className="text-lg text-gray-400 leading-relaxed mb-8">JaceStack AI is for small businesses that need a real web presence, companies wanting to automate their sites and workflows, and developers looking to upgrade their stack with AI.</p>
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400"><Cpu size={20} /></div>
								<div>
									<h3 className="text-lg font-semibold mb-2">Full-Stack and AI, Not One or the Other</h3>
									<p className="text-gray-400 leading-relaxed">React, Next.js, Node, MongoDB on one side. LangGraph, RAG pipelines, and fine-tuned ML models on the other. Every project gets both.</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400"><Bot size={20} /></div>
								<div>
									<h3 className="text-lg font-semibold mb-2">Automation That Actually Ships</h3>
									<p className="text-gray-400 leading-relaxed">n8n workflows, multi-agent pipelines, CRM integrations built to run hands-free so your team focuses on what matters.</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400"><Rocket size={20} /></div>
								<div>
									<h3 className="text-lg font-semibold mb-2">Fast Delivery, Clean Code</h3>
									<p className="text-gray-400 leading-relaxed">No bloat, no templates. Production-grade codebases with proper auth, deployment, and documentation ready to hand off or iterate on.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:grid grid-cols-2 gap-6">
						<div className="col-span-2 rounded-[32px] border border-white/10 bg-white/[0.03] p-10">
							<p className="text-gray-400 mb-4">Core Expertise</p>
							<h3 className="text-5xl font-semibold tracking-tight mb-6">AI + Full Stack</h3>
							<p className="text-gray-400 leading-relaxed">MERN engineering meets multi-agent AI, shipped together, not bolted on.</p>
						</div>
						<div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
							<p className="text-gray-400 text-sm mb-3">Who it is for</p>
							<h4 className="text-2xl font-semibold">Small Teams</h4>
						</div>
						<div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
							<p className="text-gray-400 text-sm mb-3">Specialization</p>
							<h4 className="text-2xl font-semibold">AI Systems</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;
