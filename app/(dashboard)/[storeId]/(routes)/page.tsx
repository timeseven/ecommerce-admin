import prismadb from "@/lib/prismadb";
import { DashBoardPageProps } from "@/lib/interface";

const DashboardPage: React.FC<DashBoardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6"></div>
    </div>
  );
};

export default DashboardPage;
