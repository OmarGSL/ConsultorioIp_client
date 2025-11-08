import logoIP from "../assets/brand/logoIP-removebg.png"
import logoFb from "../assets/svg/facebook.svg"
import logoInsta from "../assets/svg/instagram.svg"
import logoWhats from "../assets/svg/whatsapp.svg"
export const Footer = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

            <div className="max-w-xl lg:max-w-lg ">

              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Consultorio Dental IP
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                “Desde limpiezas rutinarias hasta tratamientos especializados, te acompañamos en cada paso hacia tu mejor sonrisa.”
              </p>

              <div className="flex justify-center pt-10"> <img src={logoIP} className="w-20" /> </div>
            </div>

            {/* --- Right Section --- */}
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <img src={logoWhats} className="w-10 h-10 object-contain" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  WhatsApp
                </dt>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <img src={logoFb} className="w-10 h-10 object-contain" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Facebook
                </dt>
              </div>

              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <img src={logoInsta} className="w-10 h-10 object-contain" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">Instagram</dt>
              </div>
            </dl>
          </div>
        </div>
        <div className="mx-auto max-w-7xl pt-11 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">

            <div className="max-w-xl lg:max-w-lg text-white">
              
            </div>

            {/* --- Right Section --- */}
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
              <div className="flex flex-col items-start">
              </div>
              <div className="flex flex-col items-start">
              </div>

              <div className="flex flex-col items-start">
                <dt className="mt-4 text-base font-normal text-white">Calle 5 de febrero #6. San Felipe Cuauhtenco, Contla de Juan Cuamatzi. Tlaxcala</dt>
              </div>
            </dl>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-white pt-28 font-thin">Sitio web desarrolado por O.C.C</h1>
        </div>

      </section>
    </>
  )
}
