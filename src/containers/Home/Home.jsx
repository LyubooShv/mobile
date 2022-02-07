import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { tableTitleColumns } from "../../common/tableTitleColumns";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { carsRequest } from "./action";
import { SelectCars } from "./cars.selector";

export default function Home() {
  const dispatch = useDispatch();
  const cars = useSelector(SelectCars);

  useEffect(() => {
    dispatch(carsRequest());
  }, []);

  return (
    <div>
      <Header />
      <MaterialTable
        title="Simple Cars"
        columns={tableTitleColumns}
        options={{
          selection: true,
        }}
      />
    </div>
  );
}
