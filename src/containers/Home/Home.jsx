import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { tableTitleColumns } from "../../common/tableTitleColumns";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { carsRequest } from "./action";

export default function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars.data);

  useEffect(() => {
    dispatch(carsRequest());
  }, []);

  return (
    <div>
      <Header />
      <MaterialTable
        title="Simple Cars"
        columns={tableTitleColumns}
        data={cars}
        options={{
          selection: true,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // setAddCars([...addCars, newData]);
                console.log("addButton");
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataUpdate = [...data];
                // const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                // setData([...dataUpdate]);
                console.log("editButton");
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataDelete = [...data];
                // const index = oldData.tableData.id;
                // dataDelete.splice(index, 1);
                // setData([...dataDelete]);
                console.log("deleteButton");
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
