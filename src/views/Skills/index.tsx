import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card.tsx";
import {
	AdobeIllustratorIcon,
	AdobePhotoshopIcon,
	ApiIcon,
	BabelOriginalIcon,
	BlenderOriginalIcon,
	BootstrapIcon,
	CiCdIcon,
	CommentIcon,
	Css3Icon,
	CubeIcon,
	DockerIcon,
	EslintOriginalIcon,
	FigmaOriginalIcon,
	GithubIcon,
	GraphQLIcon,
	GsapIcon,
	Html5Icon,
	JavaScriptIcon,
	JestIcon,
	LetsEncryptOriginalIcon,
	MobxIcon,
	MySQLIcon,
	NestJSIcon,
	NextJSIcon,
	NginxOriginalIcon,
	NodeJSIcon,
	NuxtOriginalIcon,
	OpenFoamIcon,
	PhpIcon,
	PostgreSQLIcon,
	PrettierIcon,
	PythonOriginalIcon,
	ReactIcon,
	ReduxIcon,
	ScssIcon,
	ShadcnUiIcon,
	StorybookIcon,
	SwaggerIcon,
	TailwindCSSOriginalIcon,
	TestTubeIcon,
	TypeScriptIcon,
	ViteOriginalIcon,
	VueJSOriginalIcon,
	WebpackOriginalIcon
} from "@/components/icons";

export const Skills: React.FC = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-4">
			<Card className="col-span-1 row-span-1 lg:row-span-2 bg-black/50 backdrop-blur-sm shadow-purple-500 rounded-xl">
				<CardHeader>
					<CardTitle>Frontend</CardTitle>
					<CardDescription>Языки, фреймворки</CardDescription>
				</CardHeader>
				<CardContent className="space-y-1.5">
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<Html5Icon /> HTML5
						</p>
						<p className={"flex items-center gap-1"}>
							<Css3Icon /> CSS3
						</p>
						<p className={"flex items-center gap-1"}>
							<ScssIcon /> SASS
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<BootstrapIcon /> Bootstrap
						</p>
						<p className={"flex items-center gap-1"}>
							<TailwindCSSOriginalIcon /> TailwindCSS
						</p>
						<p className={"flex items-center gap-1"}>
							<ShadcnUiIcon /> Shadcn/ui
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<JavaScriptIcon /> JavaScript
						</p>
						<p className={"flex items-center gap-1"}>
							<TypeScriptIcon /> TypeScript
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<ReactIcon /> React
						</p>
						<p className={"flex items-center gap-1"}>
							<NextJSIcon /> NextJS
						</p>
						<p className={"flex items-center gap-1"}>
							<VueJSOriginalIcon /> Vue
						</p>
						<p className={"flex items-center gap-1"}>
							<NuxtOriginalIcon /> NuxtJS
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<JestIcon /> Jest
						</p>
						<p className={"flex items-center gap-1"}>
							<TestTubeIcon /> React Testing Library
						</p>
						<p className={"flex items-center gap-1"}>
							<StorybookIcon /> Storybook
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<ReduxIcon /> Redux
						</p>
						<p className={"flex items-center gap-1"}>
							<ReduxIcon color={"#593D88"} /> Redux Toolkit
						</p>
						<p className={"flex items-center gap-1"}>
							<MobxIcon /> MobX
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<WebpackOriginalIcon /> Webpack
						</p>
						<p className={"flex items-center gap-1"}>
							<ViteOriginalIcon /> Vite
						</p>
						<p className={"flex items-center gap-1"}>
							<EslintOriginalIcon /> ESLint
						</p>
						<p className={"flex items-center gap-1"}>
							<BabelOriginalIcon /> Babel
						</p>
						<p className={"flex items-center gap-1"}>
							<PrettierIcon /> Prettier
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<CubeIcon /> React Three
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<GsapIcon /> GSAP
						</p>
					</div>
				</CardContent>
			</Card>

			<Card className="col-span-1 row-span-1 lg:row-span-1 bg-black/50 backdrop-blur-sm shadow-indigo-500 rounded-xl">
				<CardHeader>
					<CardTitle>Дизайн</CardTitle>
					<CardDescription>Инструменты</CardDescription>
				</CardHeader>
				<CardContent className="space-y-1.5">
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<FigmaOriginalIcon /> Figma
						</p>
						<p className={"flex items-center gap-1"}>
							<AdobeIllustratorIcon /> Adobe Illustrator
						</p>
						<p className={"flex items-center gap-1"}>
							<AdobePhotoshopIcon /> Adobe Photoshop
						</p>
					</div>
				</CardContent>
			</Card>

			<Card className="col-span-1 row-span-1 lg:row-span-2 bg-black/50 backdrop-blur-sm shadow-emerald-500 rounded-xl">
				<CardHeader>
					<CardTitle>Backend и DevOps</CardTitle>
					<CardDescription>Языки, фреймворки, технологии</CardDescription>
				</CardHeader>
				<CardContent className="space-y-1.5">
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<JavaScriptIcon /> JavaScript
						</p>
						<p className={"flex items-center gap-1"}>
							<TypeScriptIcon /> TypeScript
						</p>
						<p className={"flex items-center gap-1"}>
							<PythonOriginalIcon /> Python
						</p>
						<p className={"flex items-center gap-1"}>
							<PhpIcon /> PHP
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<ApiIcon /> REST API
						</p>
						<p className={"flex items-center gap-1"}>
							<GraphQLIcon /> GraphQL
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<PostgreSQLIcon /> PostgreSQL
						</p>
						<p className={"flex items-center gap-1"}>
							<MySQLIcon /> MySQL
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<NodeJSIcon /> NodeJS
						</p>
						<p className={"flex items-center gap-1"}>
							<NestJSIcon /> NestJS
						</p>
					</div>
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
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
							<CiCdIcon /> CI/CD
						</p>
						<p className={"flex items-center gap-1"}>
							<GithubIcon /> Git
						</p>
					</div>
				</CardContent>
			</Card>

			<Card className="col-span-1 row-span-1 lg:row-span-1 bg-black/50 backdrop-blur-sm shadow-blue-500 rounded-xl">
				<CardHeader>
					<CardTitle>Разное</CardTitle>
					<CardDescription>Общие знания</CardDescription>
				</CardHeader>
				<CardContent className="space-y-1.5">
					<div className="flex gap-3 whitespace-nowrap flex-wrap">
						<p className={"flex items-center gap-1"}>
							<CommentIcon /> Английский (C1)
						</p>
						<p className={"flex items-center gap-1"}>
							<BlenderOriginalIcon /> Blender
						</p>
						<p className={"flex items-center gap-1"}>
							<OpenFoamIcon /> OpenFoam
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
