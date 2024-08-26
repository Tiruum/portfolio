import { Header, CustomCursor, Section, ThemeProvider } from "@/components";
import { About, Education, Experience, Intro, Projects, Skills } from "@/views";
import AnimatedText from "@/components/AnimatedText";
import { Button } from "./components/ui/button";
import { SVGProps } from "react";
import { ShapesArrows, StarIcon } from "./components/icons";

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="bg-black min-h-screen">
				<Header />
				<CustomCursor />
				<div id="intro" className={"mb-80 md:mb-20 w-full overflow-hidden"}>
					<Intro />
				</div>
				<Section id={"about"} className={"my-80 md:my-20"}>
					<AnimatedText
						stagger={0.05}
						className={
							"uppercase text-outline lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-6xl font-bold text-black lg:-mb-8 md:-mb-8 sm:-mb-6"
						}
					>
						Обо мне
					</AnimatedText>
					<About />
				</Section>
				<Section id={"skills"} className={"my-80 md:my-20"}>
					<AnimatedText
						stagger={0.05}
						className={
							"uppercase text-outline lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-6xl font-bold text-black lg:-mb-8 md:-mb-8 sm:-mb-6"
						}
					>
						Навыки
					</AnimatedText>
					<Skills />
				</Section>
				<Section id={"experience"} className={"my-80 md:my-20"}>
					<AnimatedText
						stagger={0.05}
						className={
							"uppercase text-outline lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-6xl font-bold text-black lg:-mb-8 md:-mb-8 sm:-mb-6"
						}
					>
						Опыт
					</AnimatedText>
					<Experience />
				</Section>
				<Section id={"projects"} className={"my-80 md:my-20"}>
					<AnimatedText
						stagger={0.05}
						className={
							"uppercase text-outline lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-6xl font-bold text-black lg:-mb-8 md:-mb-8 sm:-mb-6"
						}
					>
						Проекты
					</AnimatedText>
					<Projects />
				</Section>
				<Section id={"education"} className={"my-80 md:my-20"}>
					<AnimatedText
						stagger={0.05}
						className={
							"uppercase text-outline lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-6xl font-bold text-black lg:-mb-8 md:-mb-8 sm:-mb-6"
						}
					>
						Образование
					</AnimatedText>
					<Education />
				</Section>
				<Section
					id={"Contact"}
					className={
						"mt-80 md:mt-20 relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl grid md:grid-cols-2 grid-cols-1 gap-4 animate-gradient min-h-96 overflow-hidden"
					}
				>
					<div className="bg-grainy"></div>
					<ShapesArrows
						className="absolute -top-10 right-0 opacity-10"
						stopColor="#fff"
						width={400}
						height={400}
					/>
					<h1 className="z-10 md:text-6xl text-5xl font-bold">
						Сделаем что-нибудь крутое вместе?
					</h1>
					<div className="z-10 flex flex-col items-end">
						<Button
							className={
								"w-fit rounded-full text-2xl px-6 py-6 bg-transparent text-white border border-white hover:bg-white cursor-pointer group space-x-2 mt-auto"
							}
						>
							<StarIcon
								className={"animate-spin-5 white group-hover:text-black"}
							/>
							<span className="group-hover:text-black">Связаться</span>
							<StarIcon
								className={"animate-spin-5 white group-hover:text-black"}
							/>
						</Button>
						<span className="text-2xl text-right">
							Не нравятся кнопки? Вам на <b>selintimur@yandex.ru</b>
						</span>
					</div>
				</Section>
			</div>
		</ThemeProvider>
	);
};

export default App;
