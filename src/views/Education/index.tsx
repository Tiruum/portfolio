import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

export const Education = () => {
	return (
		<div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
			<img
				className="col-span-2 rounded-xl filter grayscale hidden lg:block"
				src="https://static.tildacdn.com/tild6238-3166-4537-a635-306162656132/36209799410_1b2d92f4.jpg"
				alt="mipt"
			/>
			<div className="col-span-full lg:col-span-3 -mt-6 rounded-xl bg-black/50 backdrop-blur-sm">
				<div className="flex gap-4">
					<div className="p-6 pe-0 md:whitespace-nowrap">2020 — 2024</div>
					<Card className="bg-transparent border-none rounded-xl">
						<CardHeader>
							<CardTitle>
								Московский физико-технический институт (МФТИ)
							</CardTitle>
							<CardDescription>
								03.03.01 Прикладные математика и физика, бакалавриат
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div>Физтех-школа аэрокосмических технологий</div>
							<div>Базовая кафедра: Кафедра вычислительной физики</div>
							<div>ВКР: Численное моделирование доменного процесса</div>
						</CardContent>
					</Card>
				</div>
				<div className="flex gap-4">
					<div className="p-6 pe-0 md:whitespace-nowrap">2024 — 2026</div>
					<Card className="bg-transparent border-none rounded-xl">
						<CardHeader>
							<CardTitle>
								Московский физико-технический институт (МФТИ)
							</CardTitle>
							<CardDescription>
								03.04.01 Прикладные математика и физика, магистратура
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div>Физтех-школа аэрокосмических технологий</div>
							<div>Базовая кафедра: Кафедра вычислительной физики</div>
							<div>ВКР: Численное моделирование доменного процесса</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};
