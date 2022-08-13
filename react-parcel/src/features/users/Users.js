import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./usersSlice";

export const Users = () => {
  const count = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};
