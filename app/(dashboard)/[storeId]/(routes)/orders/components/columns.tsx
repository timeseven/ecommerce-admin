"use client";
import { ColumnDef } from "@tanstack/react-table";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import { OrderColumn } from "@/lib/interface";

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
    cell: ({ row }) => (
      <div className="flex items-center ml-5">
        {row.original.isPaid ? (
          <AiFillCheckCircle className="h-4 w-4 fill-green-600" />
        ) : (
          <AiFillCloseCircle className="h-4 w-4 fill-red-600" />
        )}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
