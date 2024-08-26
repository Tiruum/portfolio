import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрация плагина ScrollTo
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

type HeaderProps = object;

export const Header: React.FC<HeaderProps> = () => {
	// Состояние для открытия/закрытия меню на мобильных устройствах
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [section, setSection] = useState<string>("#intro");

	interface HeaderItem {
		value: string;
		url: string;
	}

	const headerList: HeaderItem[] = [
		{
			value: "Главная",
			url: "#intro"
		},
		{
			value: "Обо мне",
			url: "#about"
		},
		{
			value: "Навыки",
			url: "#skills"
		},
		{
			value: "Опыт",
			url: "#experience"
		},
		{
			value: "Проекты",
			url: "#projects"
		},
		{
			value: "Образование",
			url: "#education"
		}
	];

	useEffect(() => {
		// Создаем триггер прокрутки для элемента с идентификатором 'triggerElement'
		gsap.to("#intro", {
			scrollTrigger: {
				trigger: "#intro",
				start: "top center",
				end: "bottom center",
				onEnter: () => setSection("#intro"),
				onLeave: () => {},
				onEnterBack: () => setSection("#intro"),
				onLeaveBack: () => {}
			}
		});

		gsap.to("#about", {
			scrollTrigger: {
				trigger: "#about",
				start: "top center",
				end: "bottom center",
				onEnter: () => setSection("#about"),
				onLeave: () => {},
				onEnterBack: () => setSection("#about"),
				onLeaveBack: () => {}
			}
		});

		gsap.to("#skills", {
			scrollTrigger: {
				trigger: "#skills",
				start: "top center",
				end: "bottom center",
				onEnter: () => setSection("#skills"),
				onLeave: () => {},
				onEnterBack: () => setSection("#skills"),
				onLeaveBack: () => {}
			}
		});

		gsap.to("#experience", {
			scrollTrigger: {
				trigger: "#experience",
				start: "top center",
				end: "bottom center",
				onEnter: () => setSection("#experience"),
				onLeave: () => {},
				onEnterBack: () => setSection("#experience"),
				onLeaveBack: () => {}
			}
		});

		gsap.to("#projects", {
			scrollTrigger: {
				trigger: "#projects",
				start: "top center",
				end: "bottom center",
				onEnter: () => setSection("#projects"),
				onLeave: () => {},
				onEnterBack: () => setSection("#projects"),
				onLeaveBack: () => {}
			}
		});

		gsap.to("#education", {
			scrollTrigger: {
				trigger: "#education",
				start: "top center",
				end: "bottom center",
				onEnter: () => setSection("#education"),
				onLeave: () => {},
				onEnterBack: () => setSection("#education"),
				onLeaveBack: () => {}
			}
		});

		// Очистка эффекта
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<header className="fixed top-0 left-0 right-0 z-40">
			<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
				{/* Логотип */}
				<a href="/public" className="text-2xl font-bold flex-none">
					<span className={"text-white"}>ТИМУР </span>
					<span className={"text-gray-500"}>СЕЛИН</span>
				</a>

				{/* Меню для мобильных устройств */}
				<div className="lg:hidden">
					{/* Иконка бургер-меню, клик по которой открывает/закрывает меню */}
					<button
						className="text-white focus:outline-none focus:text-white"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>

				{/* Навигационное меню для больших устройств */}
				<nav className="hidden lg:flex space-x-0 flex-grow-0 bg-gray-950/50 backdrop-blur-md px-1.5 py-1 rounded-full text-gray-200 jetbrains-mono-400 border border-gray-500 shadow-md">
					{headerList.map((headerItem: HeaderItem) => (
						<ScrollLink
							to={headerItem.url}
							key={headerItem.value}
							setSection={setSection}
							className={`cursor-pointer hover:text-green-500 rounded-full px-4 py-1 transition-all border ${section === headerItem.url ? "border-gray-400" : "border-transparent"}`}
						>
							{headerItem.value}
						</ScrollLink>
					))}
				</nav>

				<button className="hidden lg:flex flex-none bg-gray-950/50 backdrop-blur-md text-gray-200 jetbrains-mono-400 px-6 py-2 border border-gray-500 transition-all hover:border-gray-200 rounded-full cursor-pointer">
					<span className="border-2 border-transparent cursor-pointer">
						Связаться
					</span>
				</button>
			</div>

			{/* Выпадающее меню для мобильных устройств */}
			{isMenuOpen && (
				<div
					className={`lg:hidden fixed top-0 left-0 right-0 h-screen lg:p-24 p-0 z-50 bg-black/50 backdrop-blur-xl`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 items-center">
						{headerList.map((headerItem: HeaderItem) => (
							<ScrollLink
								to={headerItem.url}
								key={headerItem.value}
								setSection={setSection}
								className={`hover:text-green-500 rounded-full px-4 py-1.5 transition-all border ${section === headerItem.url ? "border-gray-400" : "border-transparent"}`}
							>
								{headerItem.value}
							</ScrollLink>
						))}
					</nav>
				</div>
			)}
		</header>
	);
};

interface ScrollLinkProps {
	to: string; // Селектор элемента, к которому нужно прокрутить
	className: string; // Классы для ScrollLink для кастомизации с помощью Tailwind
	children: React.ReactNode; // Содержимое ссылки
	setSection: React.Dispatch<React.SetStateAction<string>>; // Функция для управления стейтом для переключения отображения активной страницы
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className }) => {
	const scrollToSection = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		const element = document.querySelector(to);

		if (element) {
			// Получаем высоту окна просмотра
			const windowHeight = window.innerHeight;

			// Вычисляем позицию элемента и его высоту
			const elementRect = element.getBoundingClientRect();
			const elementTop = window.scrollY + elementRect.top; // Абсолютное положение элемента относительно документа
			const elementHeight = elementRect.height;

			// Вычисляем позицию прокрутки
			const scrollToPosition =
				elementTop + elementHeight / 2 - windowHeight / 2;

			// GSAP анимация прокрутки
			gsap.to(window, {
				duration: 0.5,
				scrollTo: { y: scrollToPosition, autoKill: false }
			});
		}
	};

	return (
		<a href="#" onClick={scrollToSection} className={className}>
			{children}
		</a>
	);
};
