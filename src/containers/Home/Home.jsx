import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import MaterialTable from "material-table";
import Header from "../../components/Header/Header";
import { tableTitleColumns } from "../../common/tableTitleColumns";
import {
  getCarsRequest,
  createCarRequest,
  removeCarRequest,
  editCarRequest,
} from "./action";

export default function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars.data);
  const { user, jwtToken } = useSelector(
    (state) => state.currentUser.currentUser.data
  );

  const [createdCar, setCreatedCar] = useState(cars);

  useEffect(() => {
    isEmpty(cars) && dispatch(getCarsRequest());
    setCreatedCar(cars);
  }, [cars]);

  return (
    <div>
      <Header />
      <MaterialTable
        title="Simple Cars"
        columns={tableTitleColumns}
        data={createdCar}
        options={{
          selection: true,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                setCreatedCar((prevState) => {
                  const cars = [...prevState, newData];
                  dispatch(createCarRequest(jwtToken, newData, user));
                  return cars;
                });
              }, 1000);
            }),
          isEditHidden: (row) => row.user.username !== user.username,
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                setCreatedCar((prevState) => {
                  const data = [...prevState];
                  data.splice(data.indexOf(oldData), 1, newData);
                  dispatch(editCarRequest(jwtToken, user, newData));
                  return data;
                });
              }, 1000);
            }),
          isDeleteHidden: (row) => row.user.username !== user.username,
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                setCreatedCar((prevState) => {
                  const data = [...prevState];
                  data.splice(data.indexOf(oldData), 1);
                  dispatch(removeCarRequest(oldData.id, user.id, jwtToken));
                  return data;
                });
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
