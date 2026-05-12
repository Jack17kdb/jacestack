const Footer = () => {
	return (
		<footer className="relative border-t border-white/10 overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-500/10 blur-3xl" />
			<div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
					<div className="lg:col-span-2">
						<h3 className="text-3xl font-semibold tracking-tight mb-6">JaceStack AI</h3>
						<p className="text-gray-400 leading-relaxed max-w-md mb-8">Building intelligent digital systems, AI-powered platforms, scalable web applications, and modern automation experiences.</p>
						<div className="flex items-center gap-4">
							<div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300">AI Systems</div>
							<div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300">MERN Stack</div>
						</div>
					</div>
					<div>
						<h4 className="font-semibold mb-6">Services</h4>
						<div className="space-y-4 text-gray-400">
							<p>AI Automation</p>
							<p>Web Development</p>
							<p>AI Integrations</p>
							<p>SEO Optimization</p>
							<p>Video Editing</p>
						</div>
					</div>
					<div>
						<h4 className="font-semibold mb-6">Contact</h4>
						<div className="space-y-4 text-gray-400">
							<p>Jace Kanyi</p>
							<p>0790697045</p>
							<p className="break-all">jacestack17@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-gray-500">© 2026 JaceStack AI. All rights reserved.</p>
					<div className="flex items-center gap-6 text-sm text-gray-500">
						<p>Privacy Policy</p>
						<p>Terms</p>
						<p>Contact</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
