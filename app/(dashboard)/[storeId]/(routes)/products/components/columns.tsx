"use client";
import { ColumnDef } from "@tanstack/react-table";

import { ProductColumn } from "@/lib/interface";

import { CellAction } from "./cell-action";
import { CheckCircle2, XCircle } from "lucide-react";

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div>{row.original.category}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  // {
  //   accessorKey: "size",
  //   header: "Size",
  // },
  // {
  //   accessorKey: "color",
  //   header: "Color",
  //   cell: ({ row }) => (
  //     <div className="flex items-center gap-x-2">
  //       {row.original.color}
  //       <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }}></div>
  //     </div>
  //   ),
  // },
  {
    accessorKey: "isArchived",
    header: "Archived",
    cell: ({ row }) => (
      <div className="flex items-center ml-5">
        {row.original.isArchived ? <CheckCircle2 className="text-green-500" /> : <XCircle className="text-red-500" />}
      </div>
    ),
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
