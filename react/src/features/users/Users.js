import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";

export const Users = () => {
  const dispatch = useDispatch();
  const usersStatus = useSelector((state) => state.users.status);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <hr />
      {usersStatus === "idle" && (
        <div className="alert alert-info" role="alert">
          Busy fetching...
        </div>
      )}
      {usersStatus === "failed" && (
        <div className="alert alert-danger" role="alert">
          Oops, something went wrong... {users.error}
        </div>
      )}
      {usersStatus === "succeeded" && (
        <div className="alert alert-success" role="alert">
          <pre>{JSON.stringify(users.users, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
