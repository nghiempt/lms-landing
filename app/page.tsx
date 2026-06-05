import Landing from "./components/Landing";
import { getPlans } from "./components/landingApi";

// ISR — tự cập nhật nội dung từ API mỗi 60s (xem LANDING_REVALIDATE).
export const revalidate = 60;

export default async function Page() {
  const plans = await getPlans();
  return <Landing plans={plans} />;
}
