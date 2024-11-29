import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import { HeartOff } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Checkbox } from "@radix-ui/react-checkbox";

const createPage = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex justify-center mt-5 rounded-lg font-[CoopBl] text-2xl">
          Create
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex mt-64 justify-around w-2/3">
          <Card className=" shadow-md transition ease-in-out delay-75 w-max hover:-translate-y-4 hover:shadow-2xl">
            <CardHeader className="flex justify-around ">
              <CardTitle className="w-max  m-0 p-0">Create Pipeline</CardTitle>
              <CardDescription className=" w-max  m-0 p-0">
                New pipeline
              </CardDescription>
            </CardHeader>
            <Label className="text-gray-500 w-max p-5">Name</Label>
            <CardContent>
              <Input />
            </CardContent>
            <CardFooter>
              <Label className="text-gray-500 w-max p-5">
                <em>Select Team: </em>
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Optional" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Mechanics</SelectItem>
                  <SelectItem value="dark">Software</SelectItem>
                  <SelectItem value="system">Managment</SelectItem>
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
          <Card className="shadow-md w-max transition ease-in-out delay-75 hover:-translate-y-4 hover:shadow-2xl">
            <CardHeader>
              <CardTitle>Create Deal</CardTitle>
              <CardDescription>New deal in existing pipeline.</CardDescription>
            </CardHeader>
            <Label className="text-gray-500 w-max p-5">Name</Label>
            <CardContent>
              <Input />
            </CardContent>
            <CardFooter>
              <Label className="text-gray-500 w-max p-5">
                <em>Choose Pipeline:</em>
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    className="placeholder-gray-400"
                    placeholder="Select"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    LG Inc. <em>ID-174738</em>
                  </SelectItem>
                  <SelectItem value="dark">
                    Indie Corp. <em>ID-849839</em>
                  </SelectItem>
                  <SelectItem value="system">
                    TTps LLC. <em>ID-739684</em>{" "}
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default createPage;
