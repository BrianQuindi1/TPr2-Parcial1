import { JsonHandler } from "../utils/jsonHandler.js";

export const JsonRepository = {
	deleteById: async (id) => {
		try {
			const libros = await JsonRepository.getAll();
			if (!libros) return null;

			const libroEncontrado = libros.find((libro) => libro.id === id);
			if (libroEncontrado == null) return null;

			const librosActualizados = libros.filter((libro) => libro.id !== id);

			await JsonHandler.write(librosActualizados);

			return libroEncontrado;
		} catch (error) {
			console.error(error);
			return null;
		}
	},
	updateById: async (id, cambios) => {
		try {
			const libro = await JsonRepository.getById(id);
			if (libro == null) return null;
			const libroActualizado = { ...libro, ...cambios };
			const libros = await JsonRepository.getAll();
			const librosActualizados = libros.map((libro) =>
				libro.id === id ? libroActualizado : libro,
			);

			await JsonHandler.write(librosActualizados);
			return libroActualizado;
		} catch (error) {
			console.error(error);
			return null;
		}
	},
	createOne: async (libro) => {
		try {
			const libros = await JsonRepository.getAll();
			libros.push(libro);
			await JsonHandler.write(libros);
		} catch (error) {
			console.error("Error en createOne:", error.message);
			throw error;
		}
	},
	getById: async (id) => {
		const libros = await JsonHandler.read();
		if (!libros) return null;
		const libro = libros.find((libro) => libro.id === id);
		if (!libro) return null;
		return libro;
	},
	getAll: async () => await JsonHandler.read(),
};
