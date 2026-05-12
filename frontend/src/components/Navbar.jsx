import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({ navbarRef }) => {
	const scrollToSection = (id) => {
		gsap.to(window, {
			duration: 1.5,
			scrollTo: id,
			ease: "power3.inOut"
		});
	};

	return (
		<header ref={navbarRef} className='fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/30'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center gap-3'>
						<img src="/icon.png" alt="img" className='w-10 h-10 rounded-lg object-cover' />
						<h1 className='text-lg font-semibold tracking-tight'>
							JaceStack AI
						</h1>
					</div>

					<nav className='hidden md:flex items-center gap-8 text-sm text-gray-400'>
						<button onClick={() => scrollToSection("#services")} className='hover:text-white transition'>Services</button>
						<button onClick={() => scrollToSection("#projects")} className='hover:text-white transition'>Projects</button>
						<button onClick={() => scrollToSection("#about")} className='hover:text-white transition'>About</button>
						<button onClick={() => scrollToSection("#contact")} className='hover:text-white transition'>Contact</button>
					</nav>

					<button onClick={() => scrollToSection("#contact")} className='px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition'>
						Get Started
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navbar;
