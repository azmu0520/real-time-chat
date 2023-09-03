import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import { data } from "../component/utilits/navbar";

const Root = () => {
  return (
    <Routes>
      {data?.map(({ path, Component, id }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
