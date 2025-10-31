import { NavLink } from "react-router-dom";
import logoIP from "../assets/brand/logoIP.jpg";
import { useState } from "react";
export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-white text-dark shadow-md fixed w-full z-20">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <img src={logoIP} className="w-auto max-h-10 md:max-h-12"/>
                    

                    {/* Menu desktop */}
                    <ul className="hidden md:flex space-x-8 font-medium">
                        <li><a href="#" className="hover:text-blue-400 transition">Citas</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Sobre el consultorio</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Servicios</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contacto</a></li>
                    </ul>

                    {/* Botón derecho */}
                    <div className="hidden md:block">
                        <button className="bg-white-500 hover:bg-white-600 px-4 py-2 rounded-lg transition">
                            Login
                        </button>
                        <button className="bg-white-500 hover:bg-white-600 px-4 py-2 rounded-lg transition">
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

                {/* Menú móvil */}
                {open && (
                    <div className="md:hidden bg-white-800 px-6 pb-4 space-y-3">
                        <a href="#" className="block hover:text-white-400 transition">Home</a>
                        <a href="#" className="block hover:text-white-400 transition">About</a>
                        <a href="#" className="block hover:text-white-400 transition">Contact</a>
                        <a href="#" className="block hover:text-white-400 transition">Services</a>
                        <button className="w-full bg-white-500 hover:bg-white-600 px-4 py-2 rounded-lg transition">
                            Login
                        </button>
                        <button className="w-full bg-white-500 hover:bg-white-600 px-4 py-2 rounded-lg transition">
                            Registrarse
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}