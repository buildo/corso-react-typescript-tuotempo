import { match } from "ts-pattern";
import { getTrips } from "./api";
import { Trip } from "./Trip";
import * as styles from "./Trips.css";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export function Trips() {
  const { t } = useTranslation();
  const tripsQuery = useQuery({
    queryKey: ["trips"],
    queryFn: getTrips,
  });

  return (
    <div className={styles.trips}>
      {match(tripsQuery)
        .with({ status: "pending" }, () => t("Trips.QueryLoading"))
        .with({ status: "error" }, () => t("Trips.QueryError"))
        .with({ status: "success" }, ({ data: trips }) =>
          trips.map((trip) => <Trip key={trip.id} {...trip} />)
        )
        .exhaustive()}
    </div>
  );
}
