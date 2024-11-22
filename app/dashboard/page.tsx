import { Metadata } from "next";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Dashboard Page",
};

const DashboardPage = () => {
  return (
    <div>
      <div className="flex justify-center font-[BonaNovaBold] text-2xl">
        Dashboard
      </div>
      <div className="flex justify-end">
        <Label className="font-[BonaNovaBold] text-base">Dark Mode</Label>
      </div>
      <div className="flex justify-end">
        <Switch data-state />
      </div>
      <div className="flex justify-center">
        <div className=" w-2/3">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={5}>
              <div className="w-full">
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={5} className="flex align-middle">
              <Textarea
                placeholder="Notes"
                className="font-[BonaNovaBold]"
              ></Textarea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
