import React from "react";
import currencies from "./utils/currencies";
import { checkStatus, json } from "./utils/fetchUtils";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      base: "USD",
      rates: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.getRatesData(this.state.base);
  }

  changeBase = (event) => {
    this.setState({ base: event.target.value });
    this.getRatesData(event.target.value);
  };

  getRatesData = (base) => {
    this.setState({ loading: true });
    fetch(`https://api.frankfurter.app/latest?from=${base}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }

        const rates = Object.keys(data.rates)
          .filter((acronym) => acronym !== base)
          .map((acronym) => ({
            acronym,
            rate: data.rates[acronym],
            name: currencies[acronym].name,
            symbol: currencies[acronym].symbol,
          }));

        this.setState({ rates, loading: false });
      })
      .catch((error) => console.error(error.message));
  };

  render() {
    const { base, rates, loading } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <form className="p-3 form-inline justify-content-center">
            <h2 className="text-center">Currency Chart</h2>
            <select
              value={base}
              onChange={this.changeBase}
              className="form-control mx-auto mb-2"
              style={{ width: "150px" }}
              disabled={loading}
            >
              {Object.keys(currencies).map((currencyAcronym) => (
                <option key={currencyAcronym} value={currencyAcronym}>
                  {currencyAcronym}
                </option>
              ))}
            </select>
          </form>

          <table className="table table-sm bg-light mt-4">
            <thead>
              <tr>
                <th scope="col">Base Currency</th>
                <th scope="col" className="text-right pr-4 py-2">
                  1.00 {base}
                </th>
              </tr>
            </thead>
            <tbody>
              {rates &&
                rates.map((currency) => (
                  <tr key={currency.acronym}>
                    <td className="pl-4 py-2">
                      {currency.name} <small>({currency.acronym})</small>
                    </td>
                    <td className="text-right pr-4 py-2">
                      <Link
                        to={`/converter?base=${base}&quote=${currency.acronym}`}
                      >
                        {currency.rate.toFixed(6)}
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Chart;
