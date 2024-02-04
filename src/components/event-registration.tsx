"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadFile } from "@/lib/repositories/member";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
const FIELDS = {
  bachelorPrograms: [
    {
      label: "CSIT",
      value: "CSIT"
    },
    {
      label: "BCA",
      value: "BCA"
    },
    {
      label: "BIT",
      value: "BIT"
    },
    {
      label: "BBM",
      value: "BBM"
    },
    {
      label: "BBS",
      value: "BBS"
    },
    {
      label: "BSW",
      value: "BSW"
    },
    {
      label: "BBA",
      value: "BBA"
    },
    {
      label: "BHM",
      value: "BHM"
    },
    {
      label: "BCS",
      value: "BCS"
    }
  ],
  intermediateFaculties: [
    {
      label: "Science",
      value: "Science"
    },
    {
      label: "Management",
      value: "Management"
    },
    {
      label: "Humanities",
      value: "Humanities"
    },
    {
      label: "Law",
      value: "Law"
    }
  ],
  intermediateClasses: [
    {
      label: "11th",
      value: "11th"
    },
    {
      label: "12th",
      value: "12th"
    }
  ],
  bachelorSemesters: [
    {
      label: "1st Semester",
      value: "1"
    },
    {
      label: "2nd Semester",
      value: "2"
    },
    {
      label: "3rd Semester",
      value: "3"
    },
    {
      label: "4th Semester",
      value: "4"
    },
    {
      label: "5th Semester",
      value: "5"
    },
    {
      label: "6th Semester",
      value: "6"
    },
    {
      label: "7th Semester",
      value: "7"
    },
    {
      label: "8th Semester",
      value: "8"
    }
  ]
};

const FormSchema = z.object({
  teamName: z.string({
    required_error: "teamName is required"
  }),
  level: z.string({
    required_error: "level is required"
  }),
  faculty: z.string({
    required_error: "option is required"
  }),
  semester: z.number({
    required_error: "value is required"
  }),
  projectName: z.string({
    required_error: "projectName is required"
  }),
  email: z.string({
    required_error: "email is required"
  }),
  captainName: z.string({
    required_error: "captainName is required"
  }),
  member1Name: z.string({
    required_error: "member1Name is required"
  }),
  member2Name: z.string(),
  member3Name: z.string(),
  member4Name: z.string(),
  member5Name: z.string(),
  member6Name: z.string(),
  member1Img: z.string(),
  member2Img: z.string(),
  member3Img: z.string(),
  member4Img: z.string(),
  member5Img: z.string(),
  member6Img: z.string(),
  description: z.string({
    required_error: "description is required"
  })
});
export function EventRegistration() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamName: "",
      level: "",
      faculty: "",
      semester: "",
      projectName: "",
      email: "",
      captainName: "",
      member1Name: "",
      member2Name: "",
      member3Name: "",
      member4Name: "",
      member5Name: "",
      member6Name: "",
      member1Img: "",
      member2Img: "",
      member3Img: "",
      member4Img: "",
      member5Img: "",
      member6Img: "",
      description: ""
    }
  });

  const level = form.watch("level");

  const levelOptions = [
    { label: "Bachelors", value: "Bachelors" },
    { label: "Intermediate", value: "Intermediate" }
  ];

  const facultyOptions = level === "Bachelors" ? FIELDS.bachelorPrograms : FIELDS.intermediateFaculties;
  const semesterOptions = level === "Bachelors" ? FIELDS.bachelorSemesters : FIELDS.intermediateClasses;
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: any) => {
    if (e.target.files?.length === 0) return;
    const file = e.target.files![0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await uploadFile(formData);
        form.setValue(fieldName, res.data.url);
        console.log(form.getValues());
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="mx-auto px-5 max-w-2xl mt-[50px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register for Event</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to register for the event</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => console.log(form.getValues()))} className="space-y-6">
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5 ">
                  <Label htmlFor="team-name">Team Name</Label>
                  <Input {...field} id="team-name" placeholder="Team Name" required />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5 ">
                  <Label htmlFor="level">Level</Label>
                  <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levelOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
          </div>
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="faculty"
              disabled={!level}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5 ">
                  <Label htmlFor="faculty">Faculty</Label>
                  <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Faculty" />
                    </SelectTrigger>
                    <SelectContent>
                      {facultyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="semester"
              disabled={!level}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5 ">
                  <Label htmlFor="semester">Semester/Class</Label>
                  <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Semester/Class" />
                    </SelectTrigger>
                    <SelectContent>
                      {semesterOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
          </div>
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5 ">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input {...field} id="project-name" placeholder="Project Name" required />
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5 ">
                  <Label htmlFor="email">Email</Label>
                  <Input {...field} type="email" id="email" placeholder="email@example.com" required />
                </div>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="captainName"
            render={({ field }) => (
              <div className="flex flex-col items-start gap-5 ">
                <Label htmlFor="captain-name">Captain Name</Label>
                <Input {...field} id="captain-name" placeholder="Captain Name" required />
              </div>
            )}
          />
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="member1Name"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-name-1">Member 1</Label>
                  <Input
                    {...field}
                    id="member-name-1"
                    placeholder="Member Name"
                    required
                    className="w-[calc(100%-1rem)]"
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name={`member1Img`}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-img-1">Member 1 Image</Label>
                  <Input
                    onChange={(e) => handleFileUpload(e, "member1Img")}
                    type="file"
                    required
                    className="w-[calc(100%-1rem)]"
                  />
                  <Avatar>
                    <AvatarImage src={form.getValues().member1Img} alt="member1" className="w-20 h-20 object-cover" />
                    <AvatarFallback className="w-20 h-20">{form.getValues().member1Img ? null : ""}</AvatarFallback>
                  </Avatar>
                  <Input
                    {...field}
                    id="member-img-1"
                    type="text"
                    hidden={true}
                    required
                    className="hidden w-[calc(100%-1rem)]"
                  />
                </div>
              )}
            />
          </div>
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="member2Name"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-name-2">Member 2</Label>
                  <Input {...field} id="member-name-2" placeholder="Member Name" className="w-[calc(100%-1rem)]" />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name={`member2Img`}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-img21">Member 1 Image</Label>
                  <Input
                    onChange={(e) => handleFileUpload(e, "member2Img")}
                    type="file"
                    required
                    className="w-[calc(100%-1rem)]"
                  />
                  <Avatar>
                    <AvatarImage src={form.getValues().member2Img} alt="member2" className="w-20 h-20 object-cover" />
                    <AvatarFallback className="w-20 h-20">{form.getValues().member2Img ? null : ""}</AvatarFallback>
                  </Avatar>
                  <Input
                    {...field}
                    id="member-img-2"
                    type="text"
                    hidden={true}
                    required
                    className="hidden w-[calc(100%-1rem)]"
                  />
                </div>
              )}
            />
          </div>
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="member3Name"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-name-3">Member 3</Label>
                  <Input {...field} id="member-name-3" placeholder="Member Name" className="w-[calc(100%-1rem)]" />
                </div>
              )}
            />
            {/* img */}
            <FormField
              control={form.control}
              name={`member3Img`}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-img-3">Member 3 Image</Label>
                  <Input
                    onChange={(e) => handleFileUpload(e, "member3Img")}
                    type="file"
                    required
                    className="w-[calc(100%-1rem)]"
                  />
                  <Avatar>
                    <AvatarImage src={form.getValues().member3Img} alt="member3" className="w-20 h-20 object-cover" />
                    <AvatarFallback className="w-20 h-20">{form.getValues().member3Img ? null : ""}</AvatarFallback>
                  </Avatar>
                  <Input
                    {...field}
                    id="member-img-3"
                    type="text"
                    hidden={true}
                    required
                    className="hidden w-[calc(100%-1rem)]"
                  />
                </div>
              )}
            />
          </div>
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="member4Name"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-name-4">Member 4</Label>
                  <Input {...field} id="member-name-4" placeholder="Member Name" className="w-[calc(100%-1rem)]" />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name={`member4Img`}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-img-4">Member 4 Image</Label>
                  <Input
                    onChange={(e) => handleFileUpload(e, "member4Img")}
                    type="file"
                    required
                    className="w-[calc(100%-1rem)]"
                  />
                  <Avatar>
                    <AvatarImage src={form.getValues().member4Img} alt="member4" className="w-20 h-20 object-cover" />
                    <AvatarFallback className="w-20 h-20">{form.getValues().member4Img ? null : ""}</AvatarFallback>
                  </Avatar>
                  <Input
                    {...field}
                    id="member-img-4"
                    type="text"
                    hidden={true}
                    required
                    className="hidden w-[calc(100%-1rem)]"
                  />
                </div>
              )}
            />
          </div>
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="member5Name"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-name-5">Member 5</Label>
                  <Input {...field} id="member-name-5" placeholder="Member Name" className="w-[calc(100%-1rem)]" />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name={`member5Img`}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-img-1">Member 5 Image</Label>
                  <Input
                    onChange={(e) => handleFileUpload(e, "member5img")}
                    type="file"
                    required
                    className="w-[calc(100%-1rem)]"
                  />
                  <Avatar>
                    <AvatarImage src={form.getValues().member5Img} alt="member5" className="w-20 h-20 object-cover" />
                    <AvatarFallback className="w-20 h-20">{form.getValues().member5Img ? null : ""}</AvatarFallback>
                  </Avatar>
                  <Input
                    {...field}
                    id="member-img-5"
                    type="text"
                    hidden={true}
                    required
                    className="hidden w-[calc(100%-1rem)]"
                  />
                </div>
              )}
            />
          </div>
          <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="member6Name"
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-name-6">Member 6</Label>
                  <Input {...field} id="member-name-6" placeholder="Member Name" className="w-[calc(100%-1rem)]" />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name={`member6Img`}
              render={({ field }) => (
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="member-img-1">Member 6 Image</Label>
                  <Input
                    onChange={(e) => handleFileUpload(e, "member6Img")}
                    type="file"
                    required
                    className="w-[calc(100%-1rem)]"
                  />
                  <Avatar>
                    <AvatarImage src={form.getValues().member6Img} alt="member6" className="w-20 h-20 object-cover" />
                    <AvatarFallback className="w-20 h-20">{form.getValues().member6Img ? null : ""}</AvatarFallback>
                  </Avatar>
                  <Input
                    {...field}
                    id="member-img-6"
                    type="text"
                    hidden={true}
                    required
                    className="hidden w-[calc(100%-1rem)]"
                  />
                </div>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <div className="flex flex-col items-start gap-5 ">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  {...field}
                  id="description"
                  placeholder="Brief project description"
                  required
                  className="min-h-[100px]"
                />
              </div>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            onClick={() => {
              console.log(form.getValues());
            }}
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
}
