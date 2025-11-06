import { NavLink } from "react-router-dom";
import logoIP from "../assets/brand/logoIP.jpg";
import { useState } from "react";
export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-white text-dark shadow-md fixed w-full z-20">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <img src={logoIP} className="w-auto max-h-10 md:max-h-12" />


                    {/* Menu desktop */}
                    <ul className="hidden md:flex space-x-8 font-medium">
                        <a href="#" className="block hover:text-white-400 transition">Consultorio IP</a>
                        <a href="#about" className="block hover:text-white-400 transition">Sobre nosotros</a>
                        <a href="#service" className="block hover:text-white-400 transition">Servicios</a>
                        <a href="#" className="block hover:text-white-400 transition">Contacto</a>
                        <a href="#" className="block hover:text-white-400 transition">Agendar cita</a>
                    </ul>

                    {/* Botón derecho */}
                    <div className="hidden md:block">
                        <NavLink to="/login" className={'bg-white-500 hover:bg-white-600 px-4 py-2 rounded-lg transition'}>
                            Iniciar sesión
                        </NavLink>
                        <button className="bg-purple-700 hover:bg-purple-900 px-4 py-2 text-white rounded-lg transition">
                            Registrarse
                        </button>
                    </div>

                    {/* Botón hamburguesa móvil */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden focus:outline-none"
                    >
                        {open ? (
                            // Icono X (cerrar)
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Icono hamburguesa
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>


                {open && (
                    <div className="md:hidden bg-white-800 px-6 pb-8 space-y-3">
                        <ul className="font-medium pb-10">
                            <a href="#" className="block hover:text-white-400 transition">Consultorio IP</a>
                            <a href="#" className="block hover:text-white-400 transition">Sobre nosotros</a>
                            <a href="#" className="block hover:text-white-400 transition">Servicios</a>
                            <a href="#" className="block hover:text-white-400 transition">Contacto</a>
                            <a href="#" className="block hover:text-white-400 transition">Agendar cita</a>
                        </ul>

                        <NavLink to="/login" className=" w-full bg-white-500  font-bold hover:bg-white-600 py-2 rounded-lg transition">
                        Iniciar sesión
                        </NavLink>
                        <button className="w-full text-white bg-purple-700 hover:bg-white-600 px-4 py-2 rounded-lg transition">
                            Registrarse
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}