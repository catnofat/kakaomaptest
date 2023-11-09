import { Suspense } from "react";

import ReservationTemplate from "./ReservationTemplate";
const ReservationPage = () => {
  return (
    <Suspense fallback={<div>로딩</div>}>
      <ReservationTemplate />;
    </Suspense>
  );
};
export default ReservationPage;
