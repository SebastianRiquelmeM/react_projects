import React from "react";

export const Paciente = () => {
	return (
		<div className="mx-3 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Nombre: {""}
				<span className="font-normal normal-case">Lulú</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Propietario: {""}
				<span className="font-normal normal-case">Sebastián</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Email: {""}
				<span className="font-normal normal-case">Seba@google.com</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Fecha de alta: {""}
				<span className="font-normal normal-case">
					10 Diciembre de 2022
				</span>
			</p>
		</div> 
	);
};
