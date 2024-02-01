import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function Approvals() {
  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Approval Page</h1>
      </div>
      <div className="mt-6 border shadow-sm rounded-lg">
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
            <TableRow>
              <TableCell>Team Alpha</TableCell>
              <TableCell>Level 3</TableCell>
              <TableCell>Engineering</TableCell>
              <TableCell>2</TableCell>
              <TableCell>Project X</TableCell>
              <TableCell>alpha@university.com</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>5</TableCell>
              <TableCell>Working on a revolutionary AI project</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button className="text-green-500 border-green-500" size="sm" variant="outline">
                    Approve
                  </Button>
                  <Button className="text-red-500 border-red-500" size="sm" variant="outline">
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team Beta</TableCell>
              <TableCell>Level 2</TableCell>
              <TableCell>Science</TableCell>
              <TableCell>1</TableCell>
              <TableCell>Project Y</TableCell>
              <TableCell>beta@university.com</TableCell>
              <TableCell>Jane Doe</TableCell>
              <TableCell>4</TableCell>
              <TableCell>Working on a groundbreaking Physics project</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button className="text-green-500 border-green-500" size="sm" variant="outline">
                    Approve
                  </Button>
                  <Button className="text-red-500 border-red-500" size="sm" variant="outline">
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

