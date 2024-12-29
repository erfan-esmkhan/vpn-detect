import React from "react";
import { useVPNDetector } from "react-vpn-detector";
import "./app.css";

const App = () => {
  const { isUsingVPN, data, error } = useVPNDetector({
    apiUrl: "https://api.ipgeolocation.io/ipgeo?apiKey=d4a9845bde374e2cb25450bf6212d7ee",
  });

  if (error) {
    return (
      <div className="container error-container">
        <h1 className="error-title">Error</h1>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">VPN Detection</h1>
        <div className={`status ${isUsingVPN ? "vpn-active" : "vpn-inactive"}`}>
          <span>
            VPN Status: <strong>{isUsingVPN ? "VPN Detected" : "No VPN detected"}</strong>
          </span>
        </div>
        {data && (
          <>
            <div className="header-section">
              <div className="country-info">
                <img
                  src={data.country_flag}
                  alt={`Flag of ${data.country_name}`}
                  className="flag"
                />
                <div>
                  <h2>{data.country_name}</h2>
                  <p>{data.country_name_official}</p>
                  <p>
                    {data.city}, {data.state_prov}, {data.country_capital}
                  </p>
                </div>
              </div>
            </div>
            <div className="details">
              <table className="info-table">
                <tbody>
                  <tr>
                    <td>ISP</td>
                    <td>{data.isp}</td>
                  </tr>
                  <tr>
                    <td>Organization</td>
                    <td>{data.organization || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>Connection Type</td>
                    <td>{data.connection_type || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>Longitude</td>
                    <td>{data.longitude}</td>
                  </tr>
                  <tr>
                    <td>Latitude</td>
                    <td>{data.latitude}</td>
                  </tr>
                  <tr>
                    <td>Current Time</td>
                    <td>{data.time_zone?.current_time || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>Time Zone</td>
                    <td>
                      {data.time_zone?.name} ({data.time_zone?.offset})
                    </td>
                  </tr>
                  <tr>
                    <td>Country Code</td>
                    <td>{data.country_code2}</td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>
                      {data.currency?.name} ({data.currency?.symbol})
                    </td>
                  </tr>
                  <tr>
                    <td>District</td>
                    <td>{data.district || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>Daylight Savings Time</td>
                    <td>{data.time_zone?.is_dst ? "Active" : "Inactive"}</td>
                  </tr>
                  <tr>
                    <td>Languages</td>
                    <td>{data.languages}</td>
                  </tr>
                  <tr>
                    <td>Continent</td>
                    <td>{data.continent_name || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>Is EU?</td>
                    <td>{data.is_eu ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
