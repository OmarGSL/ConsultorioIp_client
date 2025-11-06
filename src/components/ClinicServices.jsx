import amalgama from '../assets/svg/amalgama.svg'
import corona from '../assets/svg/corona.svg'
import cleaning from '../assets/svg/cleaning.svg'
import tooth from '../assets/svg/tooth.svg'
export const ClinicServices = () => {
    return (
        <div className="bg-white py-12" id='service'>
            <div className="mx-auto max-w-7xl px-6 ">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5x1">
                        Servicios que puedes solicitar
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                                    <img src={amalgama} alt="Logo Consultorio" className="w-7 h-auto invert" />
                                </div>
                                Almagamas
                            </dt>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <img src={corona} alt="Logo Consultorio" className="w-7 h-auto invert" />

                                </div>
                                Coronas
                            </dt>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <img src={cleaning} alt="Logo Consultorio" className="w-7 h-auto invert" />
                                </div>
                                Limpiezas
                            </dt>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <img src={tooth} alt="Logo Consultorio" className="w-7 h-auto invert" />
                                </div>
                                Extracciones
                            </dt>
                        </div>
                    </dl>

                    <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16 pt-5 pb-48">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                                    <img src={amalgama} alt="Logo Consultorio" className="w-7 h-auto invert" />
                                </div>
                                Almagamas
                            </dt>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <img src={corona} alt="Logo Consultorio" className="w-7 h-auto invert" />

                                </div>
                                Coronas
                            </dt>
                        </div>

                        {/* Feature 3 */}
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <img src={cleaning} alt="Logo Consultorio" className="w-7 h-auto invert" />
                                </div>
                                Limpiezas
                            </dt>
                        </div>

                        {/* Feature 4 */}
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <img src={tooth} alt="Logo Consultorio" className="w-7 h-auto invert" />
                                </div>
                                Extracciones
                            </dt>
                        </div>
                    </dl>
                    
                </div>
            </div>
        </div>


    )
}
