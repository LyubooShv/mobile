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
  const user = useSelector((state) => state.currentUser.currentUser);

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
          onRowAdd: user
            ? (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve();
                    setCreatedCar((prevState) => {
                      const cars = [...prevState, newData];
                      dispatch(
                        createCarRequest(
                          user.data.jwtToken,
                          newData,
                          user.data.user
                        )
                      );
                      return cars;
                    });
                  }, 1000);
                })
            : null,
          isEditHidden: user
            ? (row) => row.user.username !== user.data.user.username
            : null,
          onRowUpdate: user
            ? (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve();
                    setCreatedCar((prevState) => {
                      const data = [...prevState];
                      data.splice(data.indexOf(oldData), 1, newData);
                      dispatch(
                        editCarRequest(
                          user.data.jwtToken,
                          user.data.user,
                          newData
                        )
                      );
                      return data;
                    });
                  }, 1000);
                })
            : null,
          isDeleteHidden: user
            ? (row) => row.user.username !== user.data.user.username
            : null,
          onRowDelete: user
            ? (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve();
                    setCreatedCar((prevState) => {
                      const data = [...prevState];
                      data.splice(data.indexOf(oldData), 1);
                      dispatch(
                        removeCarRequest(
                          oldData.id,
                          user.data.user.id,
                          user.data.jwtToken
                        )
                      );
                      return data;
                    });
                  }, 1000);
                })
            : null,
        }}
      />
    </div>
  );
}
