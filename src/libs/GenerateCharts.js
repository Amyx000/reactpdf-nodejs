import { createChart } from "../utils/createChart";

const GenerateChart=async(jsonData)=>{
    try {
        const doughnutChart = await createChart('doughnut', jsonData.composition);
        const phylumChart = await createChart('pie', jsonData.phylumAbundance);
        const genusChart = await createChart('pie', jsonData.genusAbundance);
        const bacteriaChart = await createChart('pie', jsonData.topSpeciesBacteria);
        const fungiChart = await createChart('pie', jsonData.topSpeciesFungi);
        const archaeaChart = await createChart('pie', jsonData.topSpeciesArchaea);
    
        return {
          doughnutChart,
          phylumChart,
          genusChart,
          bacteriaChart,
          fungiChart,
          archaeaChart,
        };
      } catch (error) {
        throw new Error('Failed to generate the charts.');
      }
}

export default GenerateChart
