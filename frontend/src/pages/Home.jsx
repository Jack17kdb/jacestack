import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import CTA from '../components/CTA.jsx'
import About from '../components/About.jsx'
import Navbar from '../components/Navbar.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Subscribe from '../components/Subscribe.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
	const navbarRef = useRef(null);
	const heroLeftRef = useRef(null);
	const visualRef = useRef(null);
	const cardOneRef = useRef(null);
	const cardTwoRef = useRef(null);
	const purpleGlowRef = useRef(null);
	const blueGlowRef = useRef(null);

	const scrollToSection = (id) => {
		gsap.to(window, {
			duration: 1.5,
			scrollTo: id,
			ease: "power3.inOut"
		});
	};

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(navbarRef.current, {
			y: -80,
			opacity: 0,
			duration: 1,
			ease: "power3.out"
		})
		.from(heroLeftRef.current.children, {
			y: 60,
			opacity: 0,
			duration: 1,
			stagger: 0.15,
			ease: "power3.out"
		}, "-=0.5")
		.from(visualRef.current, {
			scale: 0.92,
			opacity: 0,
			duration: 1.2,
			ease: "power3.out"
		}, "-=1")
		.from(cardOneRef.current, {
			x: -50,
			opacity: 0,
			duration: 1,
			ease: "power3.out"
		}, "-=0.8")
		.from(cardTwoRef.current, {
			x: 50,
			opacity: 0,
			duration: 1,
			ease: "power3.out"
		}, "-=1");

		gsap.to(cardOneRef.current, {
			y: -15,
			duration: 2.5,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut"
		});

		gsap.to(cardTwoRef.current, {
			y: 15,
			duration: 3,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut"
		});

		gsap.to(purpleGlowRef.current, {
			y: 200,
			scrollTrigger: {
				trigger: document.body, 
				start: "top top",
				end: "bottom top",
				scrub: true,				
			},
			ease: "none"
		});

		gsap.to(blueGlowRef.current, {
			y: 120,
			scrollTrigger: {
				trigger: document.body,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
			ease: "none"
		});
	}, []);

	return (
		<main className='relative min-h-screen bg-black text-white overflow-hidden'>
			<div ref={purpleGlowRef} className='absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl' />
			<div ref={blueGlowRef} className='absolute top-[-200px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl' />

			<Navbar navbarRef={navbarRef} />

			<div className='relative z-10'>
				<section className='relative min-h-screen flex items-center pt-20'>
					<div className='max-w-7xl mx-auto px-6 w-full'>
						<div className='grid lg:grid-cols-2 gap-16 items-center'>
							
							<div ref={heroLeftRef} className='flex flex-col gap-8'>
								<div className='w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300'>
									<div className='w-2 h-2 rounded-full bg-green-400' />
									AI-Powered MERN · LangGraph · RAG · Agents
								</div>

								<h1 className='text-6xl md:text-6xl font-semibold leading-[1.1] tracking-tight'>
									AI-Powered MERN Systems That{" "}
									<span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
										Actually Ship
									</span>
								</h1>

								<p className='text-lg leading-relaxed text-gray-400 max-w-xl'>
									I build, integrate, and refine production-ready AI applications for small teams, startups, and developers using MERN Stack + LangGraph + RAG + Agents.
								</p>

								<div className='flex items-center gap-4'>
									<button onClick={() => scrollToSection("#contact")} className='px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.03] active:scale-[0.98] transition'>
										Start a project
									</button>
									<button onClick={() => scrollToSection("#subscribe")} className='px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition'>
										Get Free RAG Chatbot Kit
									</button>
								</div>
								<p className='text-xs text-gray-500 leading-relaxed'>Previously delivered Sentinel AI, Multi-Agent Financial Systems, Real-time platforms in Kenya and beyond.</p>
							</div>

							<div ref={visualRef} className='hidden md:flex flex-col gap-4 w-full'>
								{/* Top row — 2 equal cards */}
								<div className='grid grid-cols-2 gap-4'>
									<div ref={cardOneRef} className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
										<p className='text-3xl font-bold text-white mb-1'>15+</p>
										<p className='text-sm text-gray-400 mb-3'>Production-Ready Systems</p>
										<div className='w-8 h-0.5 bg-purple-500/60 rounded-full' />
									</div>
									<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
										<p className='text-3xl font-bold text-white mb-1'>10+</p>
										<p className='text-sm text-gray-400 mb-3'>Automated Workflows</p>
										<div className='w-8 h-0.5 bg-blue-500/60 rounded-full' />
									</div>
								</div>
								{/* Middle — wide card */}
								<div ref={cardTwoRef} className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex items-center gap-5'>
									<div className='w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0'>
										<span className='text-xl'>⚡</span>
									</div>
									<div>
										<p className='font-semibold text-white text-sm'>n8n · CrewAI · LangGraph</p>
										<p className='text-gray-400 text-xs mt-1'>Automation pipelines running hands-free</p>
									</div>
								</div>
								{/* Bottom row — 3 tech badges */}
								<div className='grid grid-cols-3 gap-4'>
									{[
										{ icon: '🌐', label: 'MERN Stack', sub: 'React · Node · Mongo' },
										{ icon: '🤖', label: 'AI & ML', sub: 'RAG · LLMs · PyTorch' },
										{ icon: '🛡️', label: 'Security', sub: 'JWT Auth' },
									].map(item => (
										<div key={item.label} className='rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-2'>
											<span className='text-xl'>{item.icon}</span>
											<p className='text-xs font-semibold text-white leading-tight'>{item.label}</p>
											<p className='text-[10px] text-gray-500 leading-tight'>{item.sub}</p>
										</div>
									))}
								</div>
							</div>

						</div>
					</div>
				</section>

				<Services />
				<Projects />
				<About />
				<Testimonials />
				<Subscribe />
				<CTA />
				<Contact />
				<Footer />
			</div>
		</main>
	)
}

export default Home;
