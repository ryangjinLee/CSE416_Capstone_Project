import React from "react";
import { Table } from "react-bootstrap";
import Table_Data from "../../../data/LA/Table_Data.json";

const PartyWinBreakdownTable = () => {
  const data = Table_Data;

  // Helper function to calculate percentage
  const calculatePercentage = (value, total) => {
    return ((value / total) * 100).toFixed(1);
  };

  // Helper function to split the data into chunks of 2
  const splitDataIntoPairs = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2)); // Create pairs of districts
    }
    return result;
  };

  const pairedData = splitDataIntoPairs(data); // Split data into pairs of two

  return (
    <Table striped bordered hover className="text-center">
      <thead className="bg-light">
        <tr>
          <th rowSpan="2" className="align-middle">
            District
          </th>
          <th colSpan="5" className="text-center">
            Race
          </th>
          <th colSpan="2" className="text-center">
            Party
          </th>
          <th rowSpan="2" className="align-middle">
            District
          </th>
          <th colSpan="5" className="text-center">
            Race
          </th>
          <th colSpan="2" className="text-center">
            Party
          </th>
        </tr>
        <tr>
          <th>White</th>
          <th>Hispanic</th>
          <th>Black</th>
          <th>Asian</th>
          <th>Other</th>
          <th>Republican</th>
          <th>Democratic</th>

          <th>White</th>
          <th>Hispanic</th>
          <th>Black</th>
          <th>Asian</th>
          <th>Other</th>
          <th>Republican</th>
          <th>Democratic</th>
        </tr>
      </thead>
      <tbody>
        {pairedData.map((pair, index) => {
          const [item1, item2] = pair; // Destructure the pair (item1 and item2)

          return (
            <tr key={index}>
              {/* First district data */}
              {item1 && (
                <>
                  <td className="font-weight-bold">{item1.District}</td>
                  <td>{(item1.White * 100).toFixed(1)}%</td>
                  <td>{(item1.Hispanic * 100).toFixed(1)}%</td>
                  <td>{(item1.Black * 100).toFixed(1)}%</td>
                  <td>{(item1.Asian * 100).toFixed(1)}%</td>
                  <td>{(item1.Other * 100).toFixed(1)}%</td>
                  <td>{calculatePercentage(item1.Republican, item1.Total_Voters)}%</td>
                  <td>{calculatePercentage(item1.Democratic, item1.Total_Voters)}%</td>
                </>
              )}

              {/* Second district data (if exists) */}
              {item2 ? (
                <>
                  <td className="font-weight-bold">{item2.District}</td>
                  <td>{(item1.White * 100).toFixed(1)}%</td>
                  <td>{(item1.Hispanic * 100).toFixed(1)}%</td>
                  <td>{(item1.Black * 100).toFixed(1)}%</td>
                  <td>{(item1.Asian * 100).toFixed(1)}%</td>
                  <td>{(item1.Other * 100).toFixed(1)}%</td>
                  <td>{calculatePercentage(item2.Republican, item2.Total_Voters)}%</td>
                  <td>{calculatePercentage(item2.Democratic, item2.Total_Voters)}%</td>
                </>
              ) : (
                // Fill empty columns for the second district if it doesn't exist
                <>
                  <td colSpan="10"></td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PartyWinBreakdownTable;
