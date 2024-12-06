import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import logo from "../assets/LOGOSSERIC.svg";

type MenuItem = Required<MenuProps>["items"][number];

const Nav: React.FC = () => {
    const [current, setCurrent] = useState("home");
    const [collapsed, setCollapsed] = useState(true);

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
        setCollapsed(true);
    };

    // Función para obtener las clases de los ítems de menú
    const getItemClass = (key: string) =>
        key === current ? "text-bronze font-bold" : "font-bold text-white hover:text-bronze";

    const items: MenuItem[] = [
        {
            label: (
                <div className={getItemClass("home")}>
                    <a href="#" target="" rel="noopener noreferrer">
                        HOME
                    </a>
                </div>
            ),
            key: "home",
        },
        {
            label: (
                <div className={getItemClass("quienes-somos")}>
                    <a href="#quienesSomos" target="" rel="noopener noreferrer">
                        QUIENES SOMOS
                    </a>
                </div>
            ),
            key: "quienes-somos",
        },
        {
            key: "nuestros-servicios",
            label: (
                <div className={getItemClass("nuestros-servicios")}>
                    <a href="#services" target="" rel="noopener noreferrer">
                        NUESTROS SERVICIOS
                    </a>
                </div>
            ),
        },
        {
            key: "nuestros-trabajos",
            label: (
                <div className={getItemClass("nuestros-trabajos")}>
                    <a href="#trabajos" target="" rel="noopener noreferrer">
                        NUESTROS TRABAJOS
                    </a>
                </div>
            ),
        },
        {
            key: "contacto",
            label: (
                <div className={getItemClass("contacto")}>
                    <a href="#contacto" target="" rel="noopener noreferrer">
                        CONTACTO
                    </a>
                </div>
            ),
        },
    ];

    return (
        <div
            id="home"
            className="sticky top-0 flex flex-col md:flex-row justify-between items-center bg-black z-50"
        >
            <div className="flex justify-center md:justify-start items-center w-full md:w-auto">
                <a href="#">
                    <img
                        src={logo}
                        alt="LOGO"
                        className="w-28 h-14 ml-10 mr-10"
                    />
                </a>
            </div>

            {/* Botón del menú para dispositivos móviles */}
            <div className="block md:hidden absolute right-4 top-4">
                <button onClick={() => setCollapsed(!collapsed)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {collapsed ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menú de navegación */}
            <div
                className={`md:flex ${
                    collapsed ? "hidden" : "flex"
                } md:static absolute top-16 right-0 md:right-auto md:top-auto md:bg-transparent w-full md:w-auto flex-col md:flex-row items-end md:items-center`}
            >
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode={collapsed ? "horizontal" : "vertical"} // Cambiado a vertical para dispositivos móviles cuando el menú está desplegado
                    items={items}
                    id="nav"
                    className="items-end w-full md:w-auto bg-black"
                />
            </div>
        </div>
    );
};

export default Nav;
