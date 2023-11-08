import prismadb from "@/lib/prismadb";
import { DashBoardPageProps } from "@/lib/interface";

const DashboardPage: React.FC<DashBoardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store:{store?.name}</div>;
};

export default DashboardPage;
