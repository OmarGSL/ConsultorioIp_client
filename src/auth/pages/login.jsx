import { useState } from 'react';
import logoIP from '../../assets/brand/logoIP.jpg'

const dataLogin = {
    email: "",
    password: "",
  }
const Login = () => {
  const [loginForm, setLoginForm] = useState(dataLogin);


  const onChangeFormLogin = ({ target }) => {
    console.log(target.value);
    const {name, value} = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    })
  }
  const onSubmitLoginForm = (e) =>{
    e.preventDefault();
    console.log(loginForm);
  }

  return (
    <div className="flex min-h-full flex-col justify-center text-black px-10 pt-28 lg:px-8 bg-white-900">
      {/* LOGO */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src={logoIP}
          alt="Consultorio IP"
          className="mx-auto h-20 w-auto"
        />
        <h2 className='text-center text-purple-500 font-bold tracking-tight text-3xl'> Consultorio IP</h2>
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight">
          Ingresa los datos de tu cuenta
        </h2>
      </div>

      {/* FORMULARIO */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmitLoginForm}>
          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium"
            >
              Correo electronico
            </label>
            <div className="mt-2">
              <input
                onChange={onChangeFormLogin}
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium"
              >
                Contraseña
              </label>
              <div className="text-xs">
                <a
                  href="#"
                  className="font-semibold  hover:text-indigo-300"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                onChange={onChangeFormLogin}
                required
                autoComplete="current-password"
                className="block w-full rounded-lg bg-black/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* BOTÓN LOGIN */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        {/* REGISTRO / INFO */}
        <p className="mt-10 text-center text-sm text-gray-400">
          ¿No eres usuario?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Has click aqui para registrarte
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
