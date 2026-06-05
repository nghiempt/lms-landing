import Landing from "./components/Landing";
import { getPlans } from "./components/landingApi";

// Render động: luôn fetch data mới nhất từ API (admin sửa xong là thấy ngay).
export const dynamic = "force-dynamic";

export default async function Page() {
  const plans = await getPlans();
  return <Landing plans={plans} />;
}
