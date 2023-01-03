import React from "react";

export const Formulario = () => {
	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">
				Seguimiento pacientes
			</h2>
			<p className="text-lg mt-5 text-center mb-10">
				Añade Pacientes y {""}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>
			<form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					></input>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					></input>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block text-gray-700 uppercase font-bold"
					>
						email
					</label>
					<input
						id="email"
						type="email "
						placeholder="Email Contacto Propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					></input>
				</div>
				<div className="mb-5">
					<label
						htmlFor="date"
						className="block text-gray-700 uppercase font-bold"
					>
						Alta
					</label>
					<input
						id="date"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					></input>
				</div>
				<div className="mb-5">
					<label
						htmlFor="date"
						className="block text-gray-700 uppercase font-bold"
					>
						Alta
					</label>
					<textarea
						id="Sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los Síntomas"
					></textarea>
				</div>
				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
					hover:bg-indigo-700 rounded-md cursor-pointer transition-all"
					value="Agregar Paciente"
				></input>
			</form>
		</div>
	);
};
