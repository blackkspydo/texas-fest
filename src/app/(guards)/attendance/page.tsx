import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Attendance() {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Attendance Page</h1>
      <Tabs defaultValue="day-1" className="max-w-[1000px] w-full mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="day-1">Day 1</TabsTrigger>
          <TabsTrigger value="day-2">Day 2</TabsTrigger>
          <TabsTrigger value="day-3">Day 3</TabsTrigger>
        </TabsList>
        <TabsContent value="day-1">
          <Accordion className="w-full space-y-4" collapsible type="single">
            <AccordionItem value="team-1">
              <AccordionTrigger className="font-semibold text-lg">Team 1</AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y">
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-1" />
                    <Label className="ml-2 flex-1" htmlFor="member-1">
                      John Doe
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-2" />
                    <Label className="ml-2 flex-1" htmlFor="member-2">
                      Jane Smith
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-3" />
                    <Label className="ml-2 flex-1" htmlFor="member-3">
                      Robert Johnson
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team-2">
              <AccordionTrigger className="font-semibold text-lg">Team 2</AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y">
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-4" />
                    <Label className="ml-2 flex-1" htmlFor="member-4">
                      Mary Davis
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-5" />
                    <Label className="ml-2 flex-1" htmlFor="member-5">
                      James Taylor
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-6" />
                    <Label className="ml-2 flex-1" htmlFor="member-6">
                      Patricia Brown
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="day-2">
          <Accordion className="w-full space-y-4" collapsible type="single">
            <AccordionItem value="team-1">
              <AccordionTrigger className="font-semibold text-lg">Team 1</AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y">
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-1" />
                    <Label className="ml-2 flex-1" htmlFor="member-1">
                      John Doe
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-2" />
                    <Label className="ml-2 flex-1" htmlFor="member-2">
                      Jane Smith
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-3" />
                    <Label className="ml-2 flex-1" htmlFor="member-3">
                      Robert Johnson
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="team-2">
              <AccordionTrigger className="font-semibold text-lg">baz</AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y">
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-4" />
                    <Label className="ml-2 flex-1" htmlFor="member-4">
                      Mary Davis
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-5" />
                    <Label className="ml-2 flex-1" htmlFor="member-5">
                      James Taylor
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-6" />
                    <Label className="ml-2 flex-1" htmlFor="member-6">
                      Patricia Brown
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="day-3">
          <Accordion className="w-full space-y-4" collapsible type="single">
            <AccordionItem value="team-1">
              <AccordionTrigger className="font-semibold text-lg">foo</AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y">
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-1" />
                    <Label className="ml-2 flex-1" htmlFor="member-1">
                      John Doe
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-2" />
                    <Label className="ml-2 flex-1" htmlFor="member-2">
                      Jane Smith
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-3" />
                    <Label className="ml-2 flex-1" htmlFor="member-3">
                      Robert Johnson
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="team-2">
              <AccordionTrigger className="font-semibold text-lg">bar</AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y">
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-4" />
                    <Label className="ml-2 flex-1" htmlFor="member-4">
                      Mary Davis
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-5" />
                    <Label className="ml-2 flex-1" htmlFor="member-5">
                      James Taylor
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                  <li className="flex items-center py-2">
                    <Checkbox defaultChecked disabled id="member-6" />
                    <Label className="ml-2 flex-1" htmlFor="member-6">
                      Patricia Brown
                    </Label>
                    <Button size="sm">Mark Present</Button>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
