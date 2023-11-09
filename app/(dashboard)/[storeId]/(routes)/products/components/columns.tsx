"use client";
import { ColumnDef } from "@tanstack/react-table";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import { ProductColumn } from "@/lib/interface";

import { CellAction } from "./cell-action";

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
    cell: ({ row }) => (
      <div className="flex items-center ml-5">
        {row.original.isArchived ? (
          <AiFillCheckCircle className="h-4 w-4 fill-green-600" />
        ) : (
          <AiFillCloseCircle className="h-4 w-4 fill-red-600" />
        )}
      </div>
    ),
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
    cell: ({ row }) => (
      <div className="flex items-center ml-5">
        {row.original.isFeatured ? (
          <AiFillCheckCircle className="h-4 w-4 fill-green-600" />
        ) : (
          <AiFillCloseCircle className="h-4 w-4 fill-red-600" />
        )}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }}></div>
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
