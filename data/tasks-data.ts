import { TaskTypes } from "~/types/tasks";

const todayTasks: TaskTypes[] = [
  {
    id: 1,
    headTitle: "Assignment",
    title: "Data Structures and Algorithms",
    description:
      "Write a Python program to implement a stack using a linked list and perform the following operations: push, pop and peek.",
    date: "2025-05-15",
  },
  {
    id: 2,
    headTitle: "Midterm Exam",
    title: "Computer Systems",
    description:
      "Study for the midterm exam for the Computer Systems course. Focus on the topics of CPU architecture, memory hierarchy and input/output systems.",
    date: "2025-05-16",
  },
  {
    id: 3,
    headTitle: "Project Meeting",
    title: "Software Engineering",
    description:
      "Attend the project meeting for the Software Engineering course. The meeting will cover the following topics: project progress, design decisions and implementation plans.",
    date: "2025-05-17",
  },
];

export { todayTasks };
