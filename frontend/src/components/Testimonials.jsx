import { useRef } from "react";

const Testimonials = () => {
	return (
		<section className="relative py-32 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div className="max-w-3xl mb-20">
					<p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">Social Proof</p>
					<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Clients who automated, scaled, and shipped</h2>
				</div>
				<div className="grid lg:grid-cols-12 gap-6">
					<div className="lg:col-span-7 relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10">
						<div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
						<div className="relative z-10">
							<div className="text-6xl text-purple-400 mb-8">&ldquo;</div>
							<p className="text-2xl md:text-3xl leading-relaxed font-medium max-w-3xl mb-10">Jace built our entire platform - React frontend, Node backend, MongoDB - and wired in an AI matching engine in under 5 weeks. Production-grade from day one.</p>
							<div className="flex items-center gap-4">
								<div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">DM</div>
								<div>
									<h4 className="font-semibold">David Mutua</h4>
									<p className="text-gray-400 text-sm">Co-founder, CampusConnect Nairobi</p>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:col-span-5 grid gap-6">
						<div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
							<div className="text-4xl text-cyan-400 mb-4">&ldquo;</div>
							<p className="text-gray-300 leading-relaxed mb-6">We needed our n8n workflows connected to our CRM and WhatsApp. Jace had it running in two days. Zero manual data entry since.</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">AW</div>
								<div>
									<h4 className="font-semibold text-sm">Amira Wanjiru</h4>
									<p className="text-gray-400 text-xs">Operations Lead, HealthServe Kenya</p>
								</div>
							</div>
						</div>
						<div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
							<div className="text-4xl text-blue-400 mb-4">&ldquo;</div>
							<p className="text-gray-300 leading-relaxed mb-6">The loan default ML model hit 88% accuracy on first delivery. Clean notebook, proper pipeline, no shortcuts. Exactly what we needed for our fintech demo.</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">BK</div>
								<div>
									<h4 className="font-semibold text-sm">Brian Kamau</h4>
									<p className="text-gray-400 text-xs">CTO, Pesa Analytics</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials;
