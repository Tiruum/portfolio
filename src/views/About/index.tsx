import MeImg from "/me.jpg";
import { Button } from "@/components/ui/button.tsx";
import React from "react";
import "./index.css";
import { StarIcon } from "@/components/icons";

export const About: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-1 md:gap-6 gap-2">
			<img
				className="col-span-2 border border-gray-300 rounded-xl img-fluid backdrop-blur-sm"
				src={MeImg}
				alt={"Me"}
				loading={"lazy"}
			/>
			<div className="col-span-3 h-full flex flex-col justify-between transition-colors gap-4 md:p-6 backdrop-blur-sm">
				<p className={"text-4xl"}>
					Я{" "}
					<b className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-600">
						веб-разработчик
					</b>{" "}
					и{" "}
					<b className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-600">
						дизайнер
					</b>
					. Специализируюсь на разработке{" "}
					<b className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-600">
						интерфейсов
					</b>
					, уделяя особое внимание написанию{" "}
					<b className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-600">
						чистого кода
					</b>{" "}
					и{" "}
					<b className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-600">
						продуманного дизайна
					</b>
					.
				</p>
				<Button
					className={
						"w-fit rounded-full text-2xl px-6 py-6 bg-black text-white border border-white hover:bg-white hover:text-black cursor-pointer space-x-2"
					}
				>
					<StarIcon className={"animate-spin-5"} color={"white hover:black"} />
					<span>Связаться</span>
					<StarIcon className={"animate-spin-5"} color={"white hover:black"} />
				</Button>
			</div>
		</div>
	);
};
