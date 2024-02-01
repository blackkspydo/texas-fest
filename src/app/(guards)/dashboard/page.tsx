"use client";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import React from "react";

interface User {
  teamName: string;
  level: string;
  faculty: string;
  semester: string;
  projectName: string;
  email: string;
  captainName: string;
  members: string[];
  description: string;
}

const USERS = [
  {
    teamName: "Team Alpha",
    level: "Intermediate",
    faculty: "Computer Science",
    semester: "3",
    projectName: "Project X",
    email: "test@gmail.com",
    captainName: "John Doe",
    members: ["John Doe", "Jane Doe", "Jim Doe", "Jill Doe", "Jack Doe", "Jenny Doe"],
    description: "Working on AI-based solutions"
  },
  {
    teamName: "Team Beta",
    level: "Advanced",
    faculty: "Information Technology",
    semester: "5",
    projectName: "Project Y",
    email: "test2@gmail.com",
    captainName: "Jane Doe",
    members: ["John Doe", "Jane Doe", "Jim Doe", "Jill Doe", "Jack Doe", "Jenny Doe"],
    description: "Working on cloud-based solutions"
  },
  {
    teamName: "Team Gamma",
    level: "Beginner",
    faculty: "Software Engineering",
    semester: "2",
    projectName: "Project Z",
    email: "test3@gmail.com",
    captainName: "Jim Doe",
    members: ["John Doe", "Jane Doe", "Jim Doe", "Jill Doe"],
    description: "Working on web development"
  },
  {
    teamName: "Team Delta",
    level: "Intermediate",
    faculty: "Computer Engineering",
    semester: "4",
    projectName: "Project A",
    email: "test4@gmail.com",
    captainName: "Jill Doe",
    members: ["John Doe", "Jane Doe", "Jim Doe"],
    description: "Working on mobile applications"
  },
  {
    teamName: "Team Epsilon",
    level: "Advanced",
    faculty: "Data Science",
    semester: "6",
    projectName: "Project B",
    email: "test5@gmail.com",
    captainName: "Jack Doe",
    members: ["John Doe", "Jane Doe", "Jim Doe", "Jill Doe"],
    description: "Working on big data solutions"
  }
];

export default function Dashboard() {
  const [showUser, setShowUser] = React.useState<User | null>(null);
  return (
    <Drawer onClose={() => setShowUser(null)}>
      <div className="w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Teams Dashboard</h1>
        </div>
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team Name</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Faculty</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Project Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Captain Name</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {USERS.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>{user.teamName}</TableCell>
                  <TableCell>{user.level}</TableCell>
                  <TableCell>{user.faculty}</TableCell>
                  <TableCell>{user.semester}</TableCell>
                  <TableCell>{user.projectName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.captainName}</TableCell>
                  <TableCell>{user.members}</TableCell>
                  <TableCell>{user.description}</TableCell>
                  <TableCell>
                    <DrawerTrigger asChild>
                      <Button variant="outline" onClick={() => setShowUser(user)}>
                        VIEW DETAIL
                      </Button>
                    </DrawerTrigger>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <DrawerContent className="w-full p-5">
        <div className="">
          <DrawerHeader className="flex flex-col items-center ">
            <DrawerTitle>
              {showUser?.teamName} ({showUser?.level})
            </DrawerTitle>
            <DrawerDescription>
              {showUser?.faculty} - {showUser?.semester}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex gap-4">
            <div className="">
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Project Name</h2>
                <p className="text-sm text-muted-foreground">{showUser?.projectName}</p>
              </div>
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Email</h2>
                <p className="text-sm text-muted-foreground">{showUser?.email}</p>
              </div>
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Captain Name</h2>
                <p className="text-sm text-muted-foreground">{showUser?.captainName}</p>
              </div>
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Description</h2>
                <p className="text-sm text-muted-foreground">{showUser?.description}</p>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Members List</h2>
                <ul className="text-sm text-muted-foreground">
                  {showUser?.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              variant="destructive"
              className="h-10!"
              onClick={() => {
                setShowUser(null);
              }}
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
