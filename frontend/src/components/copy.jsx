import { useEffect } from 'react';
import { Gift, FileText, Video, Bot } from 'lucide-react';

const perks = [
	{ icon: <Bot size={18} className="text-purple-400" />, label: 'AI Smart Chatbot — full source code (RAG + LangGraph + Groq + React)' },
	{ icon: <FileText size={18} className="text-blue-400" />, label: 'PDF guide covering development, deployment, and how to showcase it' },
	{ icon: <Video size={18} className="text-cyan-400" />, label: 'Exclusive walkthrough video — every feature explained' },
];

const Subscribe = () => {
	useEffect(() => {
		const existing = document.getElementById('brevo-main-js');
		if (!existing) {
			const s = document.createElement('script');
			s.id = 'brevo-main-js';
			s.defer = true;
			s.src = 'https://sibforms.com/forms/end-form/build/main.js';
			document.body.appendChild(s);
		}
		window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
		window.LOCALE = 'en';
		window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
		window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank.';
		window.GENERIC_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
		window.INVALID_NUMBER = 'The information provided is invalid. Please review the field format and try again.';
		window.INVALID_DATE = 'Please enter a valid date';
		window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';
		window.translation = { common: { selectedList: '{quantity} list selected', selectedLists: '{quantity} lists selected', selectedOption: '{quantity} selected', selectedOptions: '{quantity} selected' } };
		window.AUTOHIDE = Boolean(0);
	}, []);

	return (
		<section id="subscribe" className="relative py-32 overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-20 items-start">

					{/* Left — offer details, mirrors Contact left column */}
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
							Join the JaceStack AI newsletter and instantly receive the complete AI Smart Chatbot — a production-ready RAG assistant that lets you upload documents and chat with them using LLaMA 3.3 70B. Open-source and deploy-ready.
						</p>

						{/* Video preview */}
						<div className="rounded-2xl overflow-hidden border border-white/10 mb-10 bg-black/40">
							<video
								src="/magnet.mp4"
								autoPlay
								muted
								loop
								playsInline
								className="w-full object-cover"
								style={{ maxHeight: '220px' }}
							/>
						</div>

						{/* Perks list */}
						<div className="space-y-4">
							{perks.map((p, i) => (
								<div key={i} className="flex items-start gap-3">
									<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
										{p.icon}
									</div>
									<p className="text-gray-300 text-sm leading-relaxed">{p.label}</p>
								</div>
							))}
						</div>
					</div>

					{/* Right — form card, identical structure to Contact */}
					<div>
						{/* Brevo status panels — IDs must stay exactly as-is */}
						<div id="error-message" className="sib-form-message-panel mb-4 px-5 py-4 rounded-2xl border border-red-500/40 bg-red-500/10 text-red-300 text-sm">
							<div className="sib-form-message-panel__text flex items-center gap-2">
								<svg viewBox="0 0 512 512" className="w-4 h-4 shrink-0 fill-current"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"/></svg>
								<span className="sib-form-message-panel__inner-text">Your subscription could not be saved. Please try again.</span>
							</div>
						</div>
						<div id="success-message" className="sib-form-message-panel mb-4 px-5 py-4 rounded-2xl border border-green-500/40 bg-green-500/10 text-green-300 text-sm">
							<div className="sib-form-message-panel__text flex items-center gap-2">
								<svg viewBox="0 0 512 512" className="w-4 h-4 shrink-0 fill-current"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"/></svg>
								<span className="sib-form-message-panel__inner-text">Subscribed! Check your inbox for the chatbot.</span>
							</div>
						</div>

						{/* Form card — same rounded-[32px] card as Contact */}
						<div id="sib-container" className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
							<form
								id="sib-form"
								method="POST"
								action="https://efec0405.sibforms.com/v2/serve/MUIFAOa9tP-F0EF6FCPBYjgVBP59jKIzKkTUhGcfQv7yC-q3I7P874kra6_gHoqYrDII6hTs7NBzzRcJM2dwmuw_hTWpxyecz38-kNSxu1QEB2MA5lrW8k5E9bzwNX-xvUeQklfB7sBlZ19Uw1TNm7H2m94mzRy7nLeJEXVAORWFoYcdfRHCB_38eLydehbmAjSYFhcjOJi0yjTpHQ=="
								data-type="subscription"
								className="space-y-6"
							>
								<div>
									<h3 className="text-2xl font-semibold mb-2">Get the AI Chatbot — Free</h3>
									<p className="text-gray-400 text-sm leading-relaxed">No spam. Just the chatbot, the PDF, and the video. Unsubscribe any time.</p>
								</div>

								<div>
									<label htmlFor="EMAIL" className="block text-sm text-gray-400 mb-3">
										Your email address
									</label>
									<input
										className="input w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-purple-500 transition placeholder:text-gray-600 text-sm"
										type="text"
										id="EMAIL"
										name="EMAIL"
										autoComplete="off"
										placeholder="you@company.com"
										data-required="true"
										required
									/>
									<label className="entry__error entry__error--primary block mt-2 text-xs text-red-400" />
									<p className="text-xs text-gray-600 mt-2">
										We will send the chatbot bundle to this address immediately after you subscribe.
									</p>
								</div>

								<button
									className="sib-form-block__button sib-form-block__button-with-loader w-full rounded-2xl bg-white text-black py-4 font-medium hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2"
									form="sib-form"
									type="submit"
								>
									<svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon w-4 h-4" viewBox="0 0 512 512">
										<path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/>
									</svg>
									Subscribe and Get the Chatbot Free
								</button>

								<input type="text" name="email_address_check" defaultValue="" className="hidden" />
								<input type="hidden" name="locale" value="en" />
							</form>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Subscribe;
