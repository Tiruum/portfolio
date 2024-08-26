import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import int3 from "/int3.png";
import tech231 from "/231.png";
import todo from "/todo.png";
import {
	TailwindCSSOriginalIcon,
	TypeScriptIcon,
	ReactIcon,
	NextJSIcon,
	ReduxIcon,
	ViteOriginalIcon,
	ApiIcon,
	PostgreSQLIcon,
	NestJSIcon,
	DockerIcon,
	NginxOriginalIcon,
	LetsEncryptOriginalIcon,
	SwaggerIcon,
	LinkSquareIcon,
	CubeIcon,
	GsapIcon,
	VueJSOriginalIcon
} from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#projects",
				start: "center center",
				end: "+=1000",
				scrub: true,
				pin: "#projects",
				snap: 1 / (cardsRef.current.length - 1),
				pinSpacing: true
			}
		});

		tl.addLabel("first");
		tl.fromTo(
			cardsRef.current[0],
			{
				yPercent: 0,
				scale: 1
			},
			{
				yPercent: -5,
				scale: 0.95
			},
			"first"
		);
		tl.addLabel("second");
		tl.fromTo(
			cardsRef.current[1],
			{
				yPercent: 500
			},
			{
				yPercent: -5
			},
			"first"
		);

		tl.addLabel("third");
		tl.to(cardsRef.current[1], { scale: 0.95, yPercent: -10 }), "second";
		tl.to(cardsRef.current[0], { scale: 0.9, yPercent: -10 }, "second");
		tl.fromTo(
			cardsRef.current[2],
			{
				yPercent: 500
			},
			{
				yPercent: -10
			},
			"second"
		);
	});

	return (
		<div className="relative h-[50vh]" ref={containerRef}>
			<div
				ref={(el) => (cardsRef.current[0] = el!)}
				className="bg-black border border-white rounded-xl min-h-96 absolute top-0 overflow-hidden grid md:grid-cols-3 w-full"
			>
				<ToDo />
			</div>
			<div
				ref={(el) => (cardsRef.current[1] = el!)}
				className="bg-black border border-white rounded-xl min-h-96 absolute top-10 overflow-hidden grid md:grid-cols-3 w-full"
			>
				<Tech231 />
			</div>
			<div
				ref={(el) => (cardsRef.current[2] = el!)}
				className="bg-black border border-white rounded-xl min-h-96 absolute top-20 overflow-hidden grid md:grid-cols-3 w-full"
			>
				<Int3 />
			</div>
		</div>
	);
};

const ToDo = () => (
	<>
		<img
			className="aspect-video object-cover h-full absolute z-10 mask-to-r hidden md:block"
			src={todo}
			alt="todo-vue-phi.vercel.app"
			loading="lazy"
		/>
		<div className="col-span-1"></div>
		<Card className="bg-transparent border-none z-20 col-span-2">
			<CardHeader>
				<CardTitle className="flex items-center gap-4">
					Трекер задач{" "}
					<div className="flex gap-2">
						{/* <a href="" target="_blank" className="cursor-pointer">
							<GithubIcon />
						</a> */}
						<a
							href="https://todo-vue-phi.vercel.app"
							target="_blank"
							className="cursor-pointer"
						>
							<LinkSquareIcon />
						</a>
					</div>
				</CardTitle>
				<CardDescription>Ноя — Дек 2022</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					Трекер задач с фильтром. Задачи, дедлайн которых уже подходит или
					истек, помечаются цветом. Данные о задачах содержатся в локальном
					хранилище браузера.
				</p>
			</CardContent>
			<CardFooter className="flex gap-x-3 gap-y-1.5 whitespace-nowrap flex-wrap">
				<p className={"flex items-center gap-1"}>
					<TailwindCSSOriginalIcon /> TailwindCSS
				</p>
				<p className={"flex items-center gap-1"}>
					<TypeScriptIcon /> TypeScript
				</p>
				<p className={"flex items-center gap-1"}>
					<VueJSOriginalIcon /> Vue
				</p>
				<p className={"flex items-center gap-1"}>
					<ViteOriginalIcon /> Vite
				</p>
			</CardFooter>
		</Card>
	</>
);

const Tech231 = () => (
	<>
		<img
			className="aspect-video object-cover h-full absolute z-10 mask-to-r hidden md:block"
			src={tech231}
			alt="231-tech.ru"
			loading="lazy"
		/>
		<div className="col-span-1"></div>
		<Card className="bg-transparent border-none z-20 col-span-2">
			<CardHeader>
				<CardTitle className="flex items-center gap-4">
					Студенческие сервисы{" "}
					<div className="flex gap-2">
						{/* <a href="" target="_blank" className="cursor-pointer">
							<GithubIcon />
						</a> */}
						<a
							href="https://231-tech.ru"
							target="_blank"
							className="cursor-pointer"
						>
							<LinkSquareIcon />
						</a>
					</div>
				</CardTitle>
				<CardDescription>2021 — 2023</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					Разработал полнофункциональное веб-приложение 231-tech.ru,
					предназначенное для бронирования стиральных машин и общественных
					комнат в студенческом кампусе. Приложение позволяет студентам
					бронировать стиральные машины на определенное время (2 часа) с оплатой
					30 рублей за бронь, а также резервировать общественные комнаты на
					любое удобное время через интерфейс в виде ивент-календаря.
				</p>
			</CardContent>
			<CardFooter className="flex gap-x-3 gap-y-1.5 whitespace-nowrap flex-wrap">
				<p className={"flex items-center gap-1"}>
					<TailwindCSSOriginalIcon /> TailwindCSS
				</p>
				<p className={"flex items-center gap-1"}>
					<TypeScriptIcon /> TypeScript
				</p>
				<p className={"flex items-center gap-1"}>
					<ReactIcon /> React
				</p>
				<p className={"flex items-center gap-1"}>
					<NextJSIcon /> NextJS
				</p>
				<p className={"flex items-center gap-1"}>
					<ReduxIcon color={"#593D88"} /> Redux Toolkit
				</p>
				<p className={"flex items-center gap-1"}>
					<ViteOriginalIcon /> Vite
				</p>
				<p className={"flex items-center gap-1"}>
					<ApiIcon /> REST API
				</p>
				<p className={"flex items-center gap-1"}>
					<PostgreSQLIcon /> PostgreSQL
				</p>
				<p className={"flex items-center gap-1"}>
					<NestJSIcon /> NestJS
				</p>
				<p className={"flex items-center gap-1"}>
					<DockerIcon /> Docker
				</p>
				<p className={"flex items-center gap-1"}>
					<NginxOriginalIcon /> NGINX
				</p>
				<p className={"flex items-center gap-1"}>
					<LetsEncryptOriginalIcon /> Let&apos;s Encrypt
				</p>
				<p className={"flex items-center gap-1"}>
					<SwaggerIcon /> Swagger
				</p>
				<p className={"flex items-center gap-1"}>
					<ApiIcon /> Yookassa API
				</p>
			</CardFooter>
		</Card>
	</>
);

const Int3 = () => (
	<>
		<img
			className="aspect-video object-cover h-full absolute z-10 mask-to-r hidden md:block"
			src={int3}
			alt="int3-eight.vercel.app"
			loading="lazy"
		/>
		<div className="col-span-1"></div>
		<Card className="bg-transparent border-none z-20 col-span-2">
			<CardHeader>
				<CardTitle className="flex items-center gap-4">
					Лендинг программного комплекса «ИНТЕГРАЛ»{" "}
					<div className="flex gap-2">
						{/* <a href="" target="_blank" className="cursor-pointer">
							<GithubIcon />
						</a> */}
						<a
							href="https://int3-eight.vercel.app"
							target="_blank"
							className="cursor-pointer"
						>
							<LinkSquareIcon />
						</a>
					</div>
				</CardTitle>
				<CardDescription>Ноя 2023 — Авг 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					Разработал современный лендинг для программного комплекса для
					проектирования многоспутниковых космических систем в том числе для
					форума Армия 24. В нем использовал анимации GSAP, AnimeJS и работал с
					графикой на WebGL. Валидировал формы обратной связи и настроил
					автоматическую отправку с помощью EmailJS.
				</p>
			</CardContent>
			<CardFooter className="flex gap-x-3 gap-y-1.5 whitespace-nowrap flex-wrap">
				<p className={"flex items-center gap-1"}>
					<TailwindCSSOriginalIcon /> TailwindCSS
				</p>
				<p className={"flex items-center gap-1"}>
					<TypeScriptIcon /> TypeScript
				</p>
				<p className={"flex items-center gap-1"}>
					<ReactIcon /> React
				</p>
				<p className={"flex items-center gap-1"}>
					<ViteOriginalIcon /> Vite
				</p>
				<p className={"flex items-center gap-1"}>
					<GsapIcon /> GSAP
				</p>
				<p className={"flex items-center gap-1"}>
					<CubeIcon /> WebGL
				</p>
			</CardFooter>
		</Card>
	</>
);
