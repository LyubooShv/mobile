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
  const newCar = useSelector((state) => state.createdCar.createdCar);

  const [createdCar, setCreatedCar] = useState(cars);
  const [newCarArr, setNewCarArr] = useState([]);
  const [rowData, setRowData] = useState(0);

  useEffect(() => {
    isEmpty(cars) && dispatch(getCarsRequest());
    isEmpty(createdCar) && setCreatedCar(cars);
    newCar && setNewCarArr([...newCarArr, newCar]);
  }, [cars, newCar]);

  const orderArr = () => {
    if (user && createdCar) {
      const currentUserCars = createdCar.filter(
        (e) => e.user.username === user.data.user.username
      );
      const notCurrentUserCars = createdCar.filter(
        (e) => e.user.username !== user.data.user.username
      );
      const orderedArr = currentUserCars.concat(notCurrentUserCars);
      return orderedArr;
    }
  };

  return (
    <div>
      <Header />
      <MaterialTable
        title="Cars List"
        columns={tableTitleColumns}
        data={orderArr()}
        options={{
          selection: true,
          headerStyle: { backgroundColor: "wheat" },
          rowStyle: { backgroundColor: "wheat" },
        }}
        editable={{
          onRowAdd: user
            ? (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve();
                    setCreatedCar((prevState) => {
                      const data = {
                        ...newData,
                        user: user.data.user,
                        rowData,
                      };
                      const cars = [data, ...prevState];
                      dispatch(
                        createCarRequest(
                          user.data.jwtToken,
                          newData,
                          user.data.user
                        )
                      );
                      setRowData(rowData + 1);
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
                      const dataWithNewId =
                        !oldData.id &&
                        oldData.rowData ===
                          createdCar.indexOf(createdCar[oldData.rowData])
                          ? { ...newData, id: newCarArr[oldData.rowData].id }
                          : { ...newData };
                      data.splice(data.indexOf(oldData), 1, dataWithNewId);
                      dispatch(
                        editCarRequest(
                          user.data.jwtToken,
                          user.data.user,
                          dataWithNewId
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
                      const dataWithNewId =
                        !oldData.id &&
                        oldData.rowData ===
                          createdCar.indexOf(createdCar[oldData.rowData])
                          ? { ...oldData, id: newCarArr[oldData.rowData].id }
                          : { ...oldData };
                      data.splice(data.indexOf(oldData), 1);
                      dispatch(
                        removeCarRequest(
                          dataWithNewId.id,
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
