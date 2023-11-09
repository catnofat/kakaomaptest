import { Suspense } from "react";
import { GeneralErrorBoundary } from "../components/atoms/GeneralErrorBoundary";
import { useNavigate } from "react-router-dom";

import ReservationTemplate from "./ReservationTemplate";
const ReservationPage = () => {
  const navigate = useNavigate();
  return (
    <GeneralErrorBoundary navigate={navigate}>
      <Suspense fallback={<div>로딩</div>}>
        <ReservationTemplate />;
      </Suspense>
    </GeneralErrorBoundary>
  );
};
export default ReservationPage;
