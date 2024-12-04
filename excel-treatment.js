const ExcelJs = require('exceljs');

// Define workbook
const workbook = new ExcelJs.Workbook();

module.exports = class ExcelTreatment {
    static async ExtractMovieNames() {
        try {
            // Ler o arquivo
            await workbook.xlsx.readFile('data.xlsx');
            const worksheet = workbook.getWorksheet('Lista de Filmes');

            const filmList = [];

            // Pegar apenas os nomes dos filmes
            worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
                row.eachCell({ includeEmpty: false }, function (cell, colNumber) {
                    // Adicionar apenas valores que não são os cabeçalhos
                    if (rowNumber !== 1 && colNumber === 1) {
                        filmList.push(cell.value);
                    }
                });
            });

            return filmList;
        } catch (err) {
            console.error('Erro ao processar o arquivo:', err);
            throw err; // Propaga o erro para tratamento
        }
    }
};
