import { useRef } from "react";
import gsap from "gsap";

const MagneticButton = ({ children, className = "" }) => {
	const buttonRef = useRef(null);

	const handleMouseMove = (e) => {
		const button = buttonRef.current;
		const rect = button.getBoundingClientRect();

		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;

		gsap.to(button, {
			x: x * 0.2,
			y: y * 0.2,
			duration: 0.4,
			ease: "power3.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(buttonRef.current, {
			x: 0,
			y: 0,
			duration: 0.5,
			ease: "elastic.out(1, 0.3)",
		});
	};

	return (
		<button
			ref={buttonRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={className}
		>
			{children}
		</button>
	);
};

export default MagneticButton;
