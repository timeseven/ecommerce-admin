"use client";

import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { AlertModal } from "@/components/modals/alert-modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { ColorFormProps } from "@/lib/interface";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const formSchema = z.object({
  name: z.string().min(1),
  value: z.string().min(1).regex(/^#/, {
    message: "String must be a valid hex code",
  }),
});

export const ColorForm: React.FC<ColorFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useColor(initialData?.value || "#333333");
  const [cpVisible, setCpVisible] = useState(false); // color picker visible

  const title = initialData ? "Edit color" : "Create color";
  const description = initialData ? "Edit the color" : "Create a new color";
  const toastMessage = initialData ? "Color updated" : "Color created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || { name: "", value: "#333333" },
  });

  // create or update color
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/${params.storeId}/colors/${params.colorId}`, values);
      } else {
        await axios.post(`/api/${params.storeId}/colors`, values);
      }
      router.refresh();
      router.push(`/${params.storeId}/colors`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error(error?.response?.data || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // delete color
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/colors/${params.colorId}`);
      router.refresh();
      router.push(`/${params.storeId}/colors`);
      toast.success("Color deleted.");
    } catch (error) {
      toast.error("Make sure you removed all products using this color first.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  // handle color picker
  const handleColorPicker = async () => {
    setCpVisible(!cpVisible);
  };

  // listen to color picker
  const listenColorPicker = async (e: any) => {
    console.log("33333", cpVisible, e.target, e.target.compareDocumentPosition(document.getElementById("colorPick")));
    if (cpVisible && e.target.compareDocumentPosition(document.getElementById("colorPick")) !== 10) {
      setCpVisible(false);
      document.removeEventListener("click", listenColorPicker);
    }
  };

  // change color
  const onChangeColor = (color: any) => {
    setColor(color);
    form.setValue("value", color.hex);
  };

  useEffect(() => {
    if (cpVisible) {
      document.addEventListener("click", listenColorPicker);
    }
  }, [cpVisible]);

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} loading={loading} onConfirm={() => onDelete()} />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button variant="destructive" size="icon" onClick={() => setOpen(true)}>
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Color name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-x-4">
                      <Input className="w-[100px]" disabled={true} placeholder="Color value" {...field} />
                      <FormMessage />
                      <div className="relative">
                        <div
                          className="border p-4 rounded-full cursor-pointer"
                          style={{ backgroundColor: field.value }}
                          onClick={handleColorPicker}
                        />

                        <div
                          id="colorPick"
                          className={`${cpVisible ? "inline-block" : "hidden"} absolute top-0 left-10 z-10`}
                        >
                          <ColorPicker color={color} onChange={onChangeColor} hideInput={["rgb", "hsv"]} />
                        </div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
