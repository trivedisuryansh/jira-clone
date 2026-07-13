import { configureStore } from "@reduxjs/toolkit";

import auth from "../features/authSlice";
import workspace from "../features/workspaceSlice";
import project from "../features/projectSlice";
import tasks from "../features/tasksSlice";

export const store = configureStore({
  reducer: {
    auth,
    workspace,
    project,
    tasks,
  },
});