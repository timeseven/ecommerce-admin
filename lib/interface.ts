import { Billboard, Category, Color, Image, OrderItem, Product, Size, Store } from "@prisma/client";

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
  parentCategories: Category[];
}

export interface CategoryColumn {
  id: string;
  name: string;
  parentName: string | null;
  billboardLabel: string | null;
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

// Color Props
export interface ColorFormProps {
  initialData: Color | null;
}

export interface ColorColumn {
  id: string;
  name: string;
  value: string;
  createdAt: string;
}

export interface ColorClientProps {
  data: ColorColumn[];
}

export interface ColorCellActionProps {
  data: ColorColumn;
}

// Product Props
export interface ProductFormProps {
  initialData: (Product & { images: Image[] }) | null;
  categories: (Category & { parent: Category | null })[];
  colors: Color[];
  sizes: Size[];
}

export interface ProductColumn {
  id: string;
  name: string;
  isFeatured: boolean;
  isArchived: boolean;
  price: string;
  category: string;
  description: string;
  // size?: string;
  // color?: string;
  createdAt: string;
}

export interface ProductClientProps {
  data: ProductColumn[];
}

export interface ProductCellActionProps {
  data: ProductColumn;
}

// Order Props
export interface OrderColumn {
  id: string;
  isPaid: boolean;
  phone: string;
  address: string;
  totalPrice: string;
  products: string;
}

export interface OrderClientProps {
  data: OrderColumn[];
}

export interface OrderCellActionProps {
  data: OrderColumn;
}

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
