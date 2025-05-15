import { tasks } from "~/data/tasks-data";

export const filterTasks = (status: string) => {
  return tasks.filter((task) => task.status === status);
};
