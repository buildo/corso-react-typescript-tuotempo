import { match } from "ts-pattern";
import * as styles from "./Trip.css";
import * as models from "./models";
import { DeleteTripButton } from "./DeleteTripButton";
import { useTranslation } from "react-i18next";

type Props = models.Trip;

export function Trip(props: Props) {
  const { t } = useTranslation();

  const seatNumber = match(props)
    .with({ status: "Booked" }, { status: "Requested" }, () => "")
    .with({ status: "CheckedIn" }, ({ seatNumber }) => `⋅ 💺 ${seatNumber}`)
    .exhaustive();

  return (
    <div className={`${styles.trip} ${styles.tripStatus[props.status]}`}>
      <span>
        {t("Trip.info", {
          origin: props.origin,
          destination: props.destination,
          seatNumber,
        })}
      </span>
      <span>
        {t("Trip.dates", {
          startDate: props.startDate.toLocaleDateString(),
          endDate: props.endDate.toLocaleDateString(),
        })}
      </span>
      <DeleteTripButton tripId={props.id} />
    </div>
  );
}
