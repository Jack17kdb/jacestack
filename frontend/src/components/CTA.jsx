const CTA = () => {
	return (
		<section className="relative py-40 overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
			<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
				<p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-6">Start Building</p>
				<h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
					Ready to automate, upgrade, and{" "}
					<span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
						actually ship?
					</span>
				</h2>
				<p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-12">
					Whether you need an AI-powered web app, a workflow automation, or a developer who can do both, JaceStack AI delivers it fast and clean.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a href="#contact" className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] active:scale-[0.98] transition">Start a Project</a>
					<a href="#subscribe" className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition">Get Free AI Chatbot</a>
				</div>
			</div>
		</section>
	)
}

export default CTA;
