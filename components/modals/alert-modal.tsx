"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

import { AlertModalProps } from "@/lib/interface";

export const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, onConfirm, loading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // avoid hydration error
  if (!isMounted) {
    return null;
  }

  return (
    <Modal title="Are you sure?" description="This action cann't be undone." isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="w-full pt-6 space-x-2 flex items-center justify-end">
          <Button disabled={loading} variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={loading} variant="destructive" onClick={onConfirm}>
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
};
