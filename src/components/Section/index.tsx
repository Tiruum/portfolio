import React, {CSSProperties, ReactNode} from 'react';
import {clsx} from "clsx";

// Типы пропсов для вашего Wrapper компонента
interface SectionProps {
    className?: string; // Необязательный пропс для класса стиля
    children?: ReactNode; // Дочерние элементы, которые будут обёрнуты
    id: string;
    style?: CSSProperties
}

export const Section: React.FC<SectionProps> = ({className, children, id, style}) => {
    return (
        <div id={id} style={style} className={clsx(`container w-full relative lg:p-12 md:p-8 p-6 mx-auto text-white`, className)}>
            {children}
        </div>
    );
};