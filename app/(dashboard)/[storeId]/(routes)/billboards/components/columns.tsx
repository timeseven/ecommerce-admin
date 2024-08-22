"use client";
import { ColumnDef } from "@tanstack/react-table";

import { BillboardColumn } from "@/lib/interface";

import { CellAction } from "./cell-action";
import { CheckCircle2, XCircle } from "lucide-react";

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
    cell: ({ row }) => (
      <div className="flex items-center ml-5">
        {row.original.isFeatured ? <CheckCircle2 className="text-green-500" /> : <XCircle className="text-red-500" />}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
