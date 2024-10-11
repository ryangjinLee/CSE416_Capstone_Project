import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import EthnicityData from "../../../data/NY/EthnicityData.json";

const PartyWinBreakdownTable = () => {
  const data = EthnicityData;
  const [SMD_data_Total, setSMD_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const SMD_data_Total_response = await getData(
          "/district-party/total_Data/SMD"
        );
        setSMD_data_Total(SMD_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD2_data_Total, setMMD2_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD2_data_Total_response = await getData(
          "/district-party/total_Data/MMD2"
        );
        setMMD2_data_Total(MMD2_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD3_data_Total, setMMD3_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD3_data_Total_response = await getData(
          "/district-party/total_Data/MMD3"
        );
        setMMD3_data_Total(MMD3_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD4_data_Total, setMMD4_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD4_data_Total_response = await getData(
          "/district-party/total_Data/MMD4"
        );
        setMMD4_data_Total(MMD4_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD5_data_Total, setMMD5_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD5_data_Total_response = await getData(
          "/district-party/total_Data/MMD5"
        );
        setMMD5_data_Total(MMD5_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const getData = () => {};
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
