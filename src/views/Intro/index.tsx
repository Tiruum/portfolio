import { gsap } from "gsap";

gsap.registerPlugin({ Text });
import React, { useEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import "./index.css";
import TextPlugin from "gsap/TextPlugin";
import ScrambleText from "../../components/ScrambleText";

import { Canvas, Euler, GroupProps, Vector3 } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Float, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";
import {
	BehanceIcon,
	FigmaIcon,
	GithubIcon,
	MouseScrollIcon,
	TelegramIcon
} from "@/components/icons";

gsap.registerPlugin(TextPlugin);

export const Intro = () => {
	return (
		<div className={"relative text-6xl"}>
			<MouseScrollIcon
				className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 animate-move z-10"
				width={36}
				height={36}
			/>
			<React3d className={"absolute top-0"} />
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 absolute top-1/2 -translate-y-1/2">
				<div
					className={"flex flex-col justify-center items-center gap-4 px-16"}
				>
					<div className="text-base">
						<span className="animate-wiggle">👋</span> Привет! Я
					</div>
					<Developer />
					<Designer />
					<Engineer />

					<div className="mt-auto flex gap-4">
						<a href="https://github.com/Tiruum" target="_blank">
							<GithubIcon className="cursor-pointer" />
						</a>
						<a href="https://t.me/umpaoflumpia" target="_blank">
							<TelegramIcon className="cursor-pointer" />
						</a>
						<a href="https://www.behance.net/umpa_of_lumpia" target="_blank">
							<BehanceIcon className="cursor-pointer" />
						</a>
						<a href="https://figma.com/@tiruum" target="_blank">
							<FigmaIcon className="cursor-pointer" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const Developer = ({ className }: { className?: string }) => {
	return (
		<div className={clsx("jetbrains-mono-400 tracking-tight", className)}>
			<ScrambleText
				text="&#123;Разработчик&#125;"
				duration={3000}
				interval={100}
				chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{}/><?!"
				revealOrder="leftToRight"
				case="uppercase"
				repeat={-1} // бесконечный повтор
				repeatDelay={3000} // 1 секунда задержки между повторами
			/>
		</div>
	);
};

const Designer = ({ className }: { className?: string }) => {
	const designerRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(designerRef.current?.offsetWidth);
	const [height, setHeight] = useState(designerRef.current?.offsetHeight);
	useEffect(() => {
		if (designerRef.current) {
			gsap.fromTo(
				designerRef.current,
				{
					letterSpacing: "0.005em"
				},
				{
					letterSpacing: "-0.025em",
					delay: 2,
					duration: 1,
					repeat: -1,
					repeatDelay: 3,
					yoyo: true,
					ease: "power1.inOut",
					onUpdate: () => {
						if (designerRef.current) {
							setWidth(designerRef.current.offsetWidth);
							setHeight(designerRef.current.offsetHeight);
						}
					}
				}
			);
		}
	}, []);
	return (
		<div
			className={clsx(
				"relative mx-2 border-2 border-gray-500 px-4 py-2 w-fit",
				className
			)}
			ref={designerRef}
		>
			<span className={"merriweather-regular"}>дизайнер</span>
			<div
				className="absolute left-0 top-0 z-10 aspect-square h-3 w-3 -translate-x-2
              -translate-y-2 border-2 border-white bg-black"
			></div>
			<div className="absolute right-0 top-0 z-10 aspect-square h-3 w-3 translate-x-2 -translate-y-2 border-2 border-white bg-black"></div>
			<div className="absolute left-0 bottom-0 z-10 aspect-square h-3 w-3 -translate-x-2 translate-y-2 border-2 border-white bg-black"></div>
			<div className="absolute right-0 bottom-0 z-10 aspect-square h-3 w-3 translate-x-2 translate-y-2 border-2 border-white bg-black"></div>

			{designerRef.current && (
				<span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-gray-500 px-1 py-0.5 text-sm text-white tracking-normal">
					{width}x{height}
				</span>
			)}
		</div>
	);
};

const Engineer = ({ className }: { className?: string }) => {
	const engineerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (engineerRef.current) {
			gsap.fromTo(
				engineerRef.current,
				{
					left: "-5%"
				},
				{
					left: "80%",
					delay: 3,
					duration: 1,
					repeat: -1,
					repeatDelay: 3,
					yoyo: true,
					ease: "power1.inOut"
				}
			);
		}
	}, []);
	return (
		<div className={clsx("relative font-bold", className)}>
			<span>инженер</span>
			<div
				ref={engineerRef}
				className="absolute top-1/3 -translate-y-1/4 bg-white/10 aspect-square h-full rounded-full outline outline-1 outline-offset-4 outline-neutral-500 backdrop-blur-sm"
			></div>
		</div>
	);
};

const React3d: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<Canvas
			camera={{ position: [0, 0, 10], fov: 50 }}
			shadows={true}
			className={className}
			style={{ height: "100vh" }}
		>
			<color attach={"background"} args={["black"]} />
			<Stars saturation={0} count={1000} speed={1} />
			<ambientLight intensity={0.5} />
			<directionalLight
				position={[5, 5, 5]}
				intensity={2}
				castShadow={true}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
			/>
			<Float
				speed={4}
				rotationIntensity={2}
				floatIntensity={2}
				position={[3, 0, 0]}
			>
				<Atom />
			</Float>
			<EffectComposer>
				<Bloom mipmapBlur luminanceThreshold={1} radius={0.8} />
			</EffectComposer>
		</Canvas>
	);
};

const Atom = (props: GroupProps) => {
	return (
		<group {...props} rotation={[-0.7, -0.5, -0.15]} position={[0, 0, 0]}>
			<Tube rotation={[Math.PI / 2, 0, 0]} />
			<Tube rotation={[Math.PI / 3, Math.PI / 6, Math.PI / 4]} />
			<Tube rotation={[Math.PI / 3, -Math.PI / 6, -Math.PI / 4]} />
			<Sphere args={[0.55, 64, 64]} castShadow receiveShadow>
				<meshStandardMaterial emissive={"#00ff00"} emissiveIntensity={5} />
				{/*61DAFB*/}
			</Sphere>
		</group>
	);
};

const Tube = ({
	rotation = [0, 0, 0],
	position = [0, 0, 0]
}: {
	rotation?: Euler;
	position?: Vector3;
}) => {
	const tubeGeometry = useMemo(() => {
		const points = new THREE.EllipseCurve(
			0,
			0,
			3,
			1.15,
			0,
			2 * Math.PI,
			false,
			0
		).getPoints(100);
		const curve = new THREE.CatmullRomCurve3(
			points.map((p) => new THREE.Vector3(p.x, p.y, 0))
		);
		return new THREE.TubeGeometry(curve, 100, 0.2, 16, true);
	}, []);
	return (
		<mesh
			geometry={tubeGeometry}
			rotation={rotation}
			position={position}
			castShadow
			receiveShadow
		>
			<meshStandardMaterial emissive={"#00ff00"} emissiveIntensity={0.5} />
		</mesh>
	);
};
