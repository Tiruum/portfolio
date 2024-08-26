import { CheckMarkBulk } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent
} from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
	const jobs = [
		{
			id: 0,
			period: "2023 — Н. В.",
			title: "Лаборатория моделирования механических систем и процессов (МФТИ)",
			description: "Frontend-разработчик",
			content: [
				"Валидация форм",
				"Анимирование с помощью GSAP",
				"Добавление функционала и редизайн",
				"Настройка CI/CD"
			]
		}
	];

	const experienceRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.to(experienceRef.current, {
			scrollTrigger: {
				trigger: experienceRef.current,
				start: "center center",
				end: () =>
					"+=" +
					(experienceRef.current!.scrollWidth - cardRef.current!.offsetWidth),
				scrub: true,
				pin: "#experience",
				snap: 1 / (jobs.length - 1)
			},
			ease: "none",
			x: () =>
				"-=" +
				(experienceRef.current!.scrollWidth - cardRef.current!.offsetWidth),
			duration: 1
		});
	}, [cardRef, experienceRef]);
	return (
		<div className="gap-4 overflow-x-hidden">
			<div className="flex pb-3" ref={experienceRef}>
				{jobs.map((job) => (
					<div
						className="border-b border-gray-800 flex-none lg:w-1/2 md:w-3/5 w-full pr-4"
						ref={cardRef}
						key={job.id}
					>
						<Card className="relative border-none rounded-xl bg-black/50 backdrop-blur-sm">
							<Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-white bg-black border-gray-800 hover:bg-gray-800 py-1 px-4">
								{job.period}
							</Badge>
							<CardHeader>
								<CardTitle>{job.title}</CardTitle>
								<CardDescription>{job.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="[&>li]:flex [&>li]:gap-1 space-y-1">
									{job.content.map((content, index) => (
										<li key={`${job.id}_${index}`}>
											<CheckMarkBulk className="text-green-500" /> {content}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
};
