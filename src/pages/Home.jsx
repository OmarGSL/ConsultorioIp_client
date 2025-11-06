import { ClinicServices } from "../components/ClinicServices"
import { AboutClinic } from "../components/AboutClinic"
export const Home = () => {
    return (
        <>
            <div>
                <div className="relative isolate px-6 pt-40 pb-36 lg:px-1 bg-purple-600">

                    <div className="mx-auto max-w-2xl sm:py-20  text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900  dark:text-white">
                            Consultorio dental

                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-semibold tracking-tight text-gray-900  dark:text-white">
                            IP
                        </h1>
                        <p className="mt-10 text-lg font-medium text-white sm:text-xl">
                            "Bienvenido a Consultorio IP, donde la salud y cuidado de nuestros pacientes es nuestra prioridad. Brindamos atención de calidad con tecnología y equipo para tu bienestar."
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                                Agendar cita
                            </a>
                            <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white">
                                Conoce mas →
                            </a>
                        </div>
                    </div>
                </div>
            </div >
            <AboutClinic/>
            <ClinicServices/>
        </>
    )
}