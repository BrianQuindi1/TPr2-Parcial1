import {saveCsvFile} from "../repository/dataExternaRepository.js"
const csv_url = 'https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv';

export const downloadCsvFileService = async () => {
  const response = await fetch(csv_url);
  if (!response.ok) {
    throw new Error('Error al descargar el archivo CSV.');
  }
  const csvContent = await response.text();
  const filePath = await saveCsvFile(csvContent);
  return filePath;
};
