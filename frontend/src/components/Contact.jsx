import { useState } from 'react';
import axios from 'axios';

const BREVO_KEY = import.meta.env.VITE_BREVO_API_KEY;
const FROM_EMAIL = import.meta.env.VITE_EMAIL_ADDRESS;

const getRateData = () => {
	try {
		return JSON.parse(sessionStorage.getItem('_crl') || '{"count":0,"ts":0}');
	} catch { return { count: 0, ts: 0 }; }
};
const setRateData = (d) => sessionStorage.setItem('_crl', JSON.stringify(d));

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '', projectDescription: '', budgetTimeline: '' });
	const [status, setStatus] = useState(null);
	const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

	const sanitize = (str) => str.replace(/<[^>]*>/g, '').trim().slice(0, 2000);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const rd = getRateData();
		if (rd.count >= 3) { setStatus('rate'); return; }

		const name = sanitize(form.name);
		const email = sanitize(form.email);
		const userMessage = sanitize(form.message);
		const projectDescription = sanitize(form.projectDescription);
		if (!name || !email || !userMessage || !projectDescription) return;
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

		setStatus('sending');
		try {
			await axios.post(
				'https://api.brevo.com/v3/smtp/email',
				{
					sender: { name: 'JaceStack AI Contact', email: FROM_EMAIL },
					to: [{ email: 'jacestack17@gmail.com', name: 'Jace' }],
					replyTo: { email: email, name: name },
					subject: `New message from ${name} via JaceStack AI`,
					htmlContent: `<div style="font-family:sans-serif;color:#333;max-width:600px;padding:24px"><h2 style="margin:0 0 16px">New Project Brief</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr style="border:none;border-top:1px solid #eee;margin:20px 0"/><p><strong>Project Description:</strong></p><p style="line-height:1.7;white-space:pre-wrap">${projectDescription.replace(/\n/g,'<br/>')}</p><p><strong>Budget / Timeline:</strong> ${sanitize(form.budgetTimeline) || 'Not specified'}</p></div>`,
				},
				{
					headers: {
						'api-key': BREVO_KEY,
						'Content-Type': 'application/json',
					},
					timeout: 10000,
				}
			);
			setRateData({ count: rd.count + 1, ts: Date.now() });
			setStatus('ok');
			setForm({ name: '', email: '', message: '', projectDescription: '', budgetTimeline: '' });
		} catch (err) {
			console.error(err?.response?.data || err.message);
			setStatus('err');
		}
	};

	return (
		<section id="contact" className="relative py-32 overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-3xl" />
			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-20 items-start">
					<div>
						<p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4">Contact</p>
						<h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-8">
							Let's Build Something Powerful Together
						</h2>
						<p className="text-lg text-gray-400 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Need an AI chatbot with RAG?<br/>Want to add intelligent features to your MERN app?<br/>Need automation workflows or a full-stack AI system?` }} />
						<div className="space-y-6 text-gray-300">
							<div>
								<p className="text-sm text-gray-500 mb-1">Email</p>
								<p>jacestack17@gmail.com</p>
							</div>
							<div>
								<p className="text-sm text-gray-500 mb-1">Phone</p>
								<p>+254 790 697 045</p>
							</div>
						</div>
					</div>
					<div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
						<form onSubmit={handleSubmit} className="space-y-6" noValidate>
							<div>
								<label className="block text-sm text-gray-400 mb-3">Name</label>
								<input
									type="text"
									placeholder="John Doe"
									value={form.name}
									onChange={e => set('name', e.target.value)}
									required
									maxLength={100}
									className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-purple-500 transition text-white placeholder:text-gray-600 text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm text-gray-400 mb-3">Email</label>
								<input
									type="email"
									placeholder="john@example.com"
									value={form.email}
									onChange={e => set('email', e.target.value)}
									required
									maxLength={200}
									className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-purple-500 transition text-white placeholder:text-gray-600 text-sm"
								/>
							</div>
							<div>
								<label className="block text-sm text-gray-400 mb-3">Message</label>
								<textarea
									rows="6"
									placeholder="Tell me about your project..."
									value={form.message}
									onChange={e => set('message', e.target.value)}
									required
									maxLength={2000}
									className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-purple-500 transition resize-none text-white placeholder:text-gray-600 text-sm"
								/>
							</div>

							{status === 'ok' && (
								<p className="text-green-400 text-sm px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20">
									Message sent. I will get back to you within 24 hours.
								</p>
							)}
							{status === 'err' && (
								<p className="text-red-400 text-sm px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
									Something went wrong. Email me directly at jacestack17@gmail.com
								</p>
							)}
							{status === 'rate' && (
								<p className="text-yellow-400 text-sm px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
									Too many submissions. Please email me directly.
								</p>
							)}

							<button
								type="submit"
								disabled={status === 'sending'}
								className="w-full rounded-2xl bg-white text-black py-4 font-medium hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{status === 'sending' ? 'Sending...' : 'Send Project Brief'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
