import React from "react";

export const Error = ({ mensaje }) => {
	return (
		<div>
			<div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3">
				<p>{mensaje}</p>
			</div>
		</div>
	);
};
