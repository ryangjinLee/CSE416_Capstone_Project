import React from "react";
import { Table } from "react-bootstrap";
import EthnicityData from "../../../data/NY/EthnicityData.json";

const PartyWinBreakdownTable = () => {
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
            item.Conservatives +
            item.Workers +
            item.Others +
            item.Blank;
          return (
            <tr key={index}>
              <td className="font-weight-bold">{item.District}</td>
              <td>{(item.White * 100).toFixed(1)}%</td>
              <td>{(item.Hispanic * 100).toFixed(1)}%</td>
              <td>{(item.Black * 100).toFixed(1)}%</td>
              <td>{(item.Asian * 100).toFixed(1)}%</td>
              <td>{calculatePercentage(item.Republicans, totalVotes)}%</td>
              <td>{calculatePercentage(item.Conservatives, totalVotes)}%</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PartyWinBreakdownTable;