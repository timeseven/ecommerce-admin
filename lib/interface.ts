import { Billboard, Category, Size, Store } from "@prisma/client";

import { PopoverTrigger } from "@/components/ui/popover";

/*   Props Interface  */
//Modal Props
export interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

// Dashboard Props
export interface DashBoardPageProps {
  params: { storeId: string };
}

// Settings Props
export interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

export interface SettingsFormProps {
  initialData: Store;
}

// Billboard Props
export interface BillboardFormProps {
  initialData: Billboard | null;
}

export interface BillboardColumn {
  id: string;
  label: string;
  createdAt: string;
}

export interface BillboardClientProps {
  data: BillboardColumn[];
}

export interface BillboardCellActionProps {
  data: BillboardColumn;
}

// Category Props
export interface CategoryFormProps {
  initialData: Category | null;
  billboards: Billboard[];
}

export interface CategoryColumn {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
}

export interface CategoryClientProps {
  data: CategoryColumn[];
}

export interface CategoryCellActionProps {
  data: CategoryColumn;
}

// Size Props
export interface SizeFormProps {
  initialData: Size | null;
}

export interface SizeColumn {
  id: string;
  name: string;
  value: string;
  createdAt: string;
}

export interface SizeClientProps {
  data: SizeColumn[];
}

export interface SizeCellActionProps {
  data: SizeColumn;
}

// Size Component Props

// Public Components Props
type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;
export interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export interface HeadingProps {
  title: string;
  description: string;
}

export interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

export interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

// Hooks Props
export interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
