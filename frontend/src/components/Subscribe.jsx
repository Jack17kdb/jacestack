import { useState } from 'react';
import { Gift, FileText, Video, Bot, GitHub, FileDown } from 'lucide-react';

const GITHUB_URL = 'GITHUB_REPO_PLACEHOLDER';
const PDF_URL = 'PDF_DOWNLOAD_PLACEHOLDER';

const perks = [
	{ icon: <Bot size={18} className="text-purple-400" />, label: 'AI Smart Chatbot — full source code (RAG + LangGraph + Groq + React)' },
	{ icon: <FileText size={18} className="text-blue-400" />, label: 'PDF guide covering development, deployment, and how to showcase it' },
	{ icon: <Video size={18} className="text-cyan-400" />, label: 'Exclusive walkthrough video — every feature explained' },
];

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
		setStatus('sending');
		try {
			const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/subscribe`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || 'Failed');
			setStatus('ok');
			setEmail('');
		} catch (err) {
			console.error(err.message);
			setStatus('err');
		}
	};

	return (
		<section id="subscribe" className="relative py-32 overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-20 items-start">
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
							<Gift size={15} />
							<span>Free for subscribers</span>
						</div>
						<p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">Newsletter</p>
						<h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-8">
							Subscribe and get a full AI chatbot for free.
						</h2>
						<p className="text-lg text-gray-400 leading-relaxed mb-10">
							Download my production-ready RAG Chatbot template — used in real client projects including Sentinel AI and Multi-Agent Financial Systems. Join the JaceStack AI newsletter and get the full bundle instantly.
						</p>

						<div className="rounded-2xl overflow-hidden border border-white/10 mb-10 bg-black/40">
							<img src="/magnet.gif" alt="RAG Chatbot Kit preview" className="w-full object-cover" style={{ maxHeight: '220px' }} />
						</div>

						<div className="space-y-4">
							{perks.map((p, i) => (
								<div key={i} className="flex items-start gap-3">
									<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">{p.icon}</div>
									<p className="text-gray-300 text-sm leading-relaxed">{p.label}</p>
								</div>
							))}
						</div>

						<div className="flex items-center gap-3 mt-8">
							<a
								href={GITHUB_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition text-sm font-medium"
							>
								<GitHub size={16} />
								View on GitHub
							</a>
							<a
								href={PDF_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition text-sm font-medium"
							>
								<FileDown size={16} />
								Download PDF Guide
							</a>
						</div>
					</div>

					<div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
						<h3 className="text-2xl font-semibold mb-2">Get the AI Chatbot Kit — Free</h3>
						<p className="text-gray-400 text-sm mb-8">No spam. Just the chatbot bundle and occasional updates.</p>

						<form onSubmit={handleSubmit} className="space-y-6" noValidate>
							<div>
								<label className="block text-sm text-gray-400 mb-3">Email Address</label>
								<input
									type="email"
									placeholder="john@example.com"
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
									maxLength={200}
									className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-purple-500 transition text-white placeholder:text-gray-600 text-sm"
								/>
							</div>

							{status === 'ok' && (
								<p className="text-green-400 text-sm px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20">
									Subscribed! Check your inbox — your kit is on its way.
								</p>
							)}
							{status === 'err' && (
								<p className="text-red-400 text-sm px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
									Something went wrong. Email me directly at jacestack17@gmail.com
								</p>
							)}

							<button
								type="submit"
								disabled={status === 'sending'}
								className="w-full rounded-2xl bg-white text-black py-4 font-medium hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{status === 'sending' ? 'Subscribing...' : 'Subscribe & Get Chatbot Kit'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;

