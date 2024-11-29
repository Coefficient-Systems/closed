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
import { Input } from "@/components/ui/input";
import trollface from "../../public/assets/Trollface.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Notes = "One day, this will be an mySQL ref, I think";
const customersPage = () => {
  return (
    <div>
      <div className="flex justify-center font-[BonaNovaBold] text-2xl">
        Customers
      </div>
      <div className="flex justify-center">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Picture</TableHead>
              <TableHead className="w-min">Name</TableHead>
              <TableHead className="w-min">Deals</TableHead>
              <TableHead className="w-min">Phone Number</TableHead>
              <TableHead className="w-min">Email</TableHead>
              <TableHead className="w-min">Notes</TableHead>
              <TableHead className="text-right">Estimated Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src={trollface.src} />
                  <AvatarFallback>404</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">James Jasperson</TableCell>
              <TableCell>5</TableCell>
              <TableCell>208-995-3465</TableCell>
              <TableCell>rasperberry1997</TableCell>
              <TableCell>
                <p>{Notes}</p>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default customersPage;
