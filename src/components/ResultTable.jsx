import {calculateInvestmentResults, formatter} from '../util/investment'

const ResultTable = ({ inputs }) => {
  const resultData = calculateInvestmentResults(inputs);
  const initialInvestment = inputs.initialInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInvestedCapital =
            initialInvestment + yearData.annualInvestment * yearData.year;
          const totalInterest = yearData.valueEndOfYear - totalInvestedCapital;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable