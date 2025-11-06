import logoIP from '../assets/brand/logoIP.jpg'

export const AboutClinic = () => {
    return (
        <>
            <section id='about' className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-32 lg:px-8">
                {/* Fondo decorativo */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

                {/* Contenido principal */}
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img
                        src={logoIP}
                        alt="IP logo"
                        className="mx-auto h-12"
                    />

                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>
                                En Consultorio Dental IP nos especializamos en brindar atención odontológica integral.
                                Nuestro compromiso es cuidar la salud bucal de nuestros pacientes mediante tratamientos seguros, eficaces y adaptados a cada necesidad.
                                Creemos que una sonrisa saludable es reflejo de bienestar, confianza y calidad de vida.
                            </p>
                            
                            <p className='pt-14 text-2xl font-light'>Te atiende</p>
                        </blockquote>

                        <figcaption className="mt-10">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Judith Black"
                                className="mx-auto h-36 w-36 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">Iridian Pamela C.C</div>
                                <svg
                                    viewBox="0 0 2 2"
                                    width="6"
                                    height="6"
                                    aria-hidden="true"
                                    className="fill-gray-900"
                                >
                                    <circle r="1" cx="1" cy="1" />
                                </svg>
                                <div className="text-gray-600">Cirujano Dentista</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

        </>
    )
}
