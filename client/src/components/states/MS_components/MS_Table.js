import React from "react";
import { Table } from "react-bootstrap";
import EthnicityData from "../../../data/MS/EthnicityData.json";

const MSPartyWinBreakdownTable = () => {
  const data = EthnicityData;

  const calculatePercentage = (value, total) => {
    return ((value / total) * 100).toFixed(1);
  };

  return (
    <Table striped bordered hover className="text-center">
      <thead className="bg-light">
        <tr>
          <th rowSpan="2" className="align-middle">
            District
          </th>
          <th colSpan="4" className="text-center">
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
          <th>Republican</th>
          <th>Conservative</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const totalVotes =
            item.Republicans +
            item.Conservatives;
            const totalRace = 
            item.White +
            item.Hispanic +
            item.Black +
            item.Asian;
          return (
            <tr key={index}>
              <td className="font-weight-bold">{item.District}</td>
              <td>{(item.White / totalRace * 100).toFixed(1)}%</td>
              <td>{(item.Hispanic / totalRace * 100).toFixed(1)}%</td>
              <td>{(item.Black / totalRace * 100).toFixed(1)}%</td>
              <td>{(item.Asian / totalRace * 100).toFixed(1)}%</td>
              <td>{calculatePercentage(item.Republicans, totalVotes)}%</td>
              <td>{calculatePercentage(item.Conservatives, totalVotes)}%</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MSPartyWinBreakdownTable;