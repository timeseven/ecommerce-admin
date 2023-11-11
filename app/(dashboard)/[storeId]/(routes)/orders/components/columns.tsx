"use client";
import { ColumnDef } from "@tanstack/react-table";

import { OrderColumn } from "@/lib/interface";
import { CheckCircle2, XCircle } from "lucide-react";

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
      <div className="flex items-center ml-1">
        {row.original.isPaid ? <CheckCircle2 className="text-green-500" /> : <XCircle className="text-red-500" />}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
