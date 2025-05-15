import { downloadCsvFileService } from "../services/dataExternaServices.js";

export const getExternalData = async (req, res) => {
  try {
    const filePath = await downloadCsvFileService();
    res.status(200).json({ message: 'Archivo CSV guardado correctamente', path: filePath });
  } catch (error) {
    console.error('Error al obtener datos externos:', error.message);
    res.status(500).json({ error: 'No se pudo obtener el archivo CSV.' });
  }
};