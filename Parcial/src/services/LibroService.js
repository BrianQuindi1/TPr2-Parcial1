import { Libro } from "../models/Libro.js";
import { JsonRepository } from "../repository/jsonRepository.js";

export const LibroService = {
	GetAll: async () => {
		return await JsonRepository.getAll();
	},
	GetById: async (id) => {
		const libro = await JsonRepository.getById(id);
		if (!libro) return null;
		return libro;
	},
	CreateLibro: async (libro) => {
		const dataLibro = {
			...libro,
			id: crypto.randomUUID().toString(),
		};
		const modelLibro = new Libro(
			dataLibro.id,
			dataLibro.title,
			dataLibro.author,
			dataLibro.isbn,
            dataLibro.publishedDate,
            dataLibro.stock
		);

		await JsonRepository.createOne(modelLibro);

		return modelLibro;
	},
	DeleteLibro: async (id) => {
		const eliminado = await JsonRepository.deleteById(id);
		if (!eliminado) return null;
		return eliminado;
	},
	UpdateLibroById: async (id, updates) => {
		const libroActualizado = await JsonRepository.updateById(id, updates);
		if (!libroActualizado) return null;
		return libroActualizado;
	},
};
