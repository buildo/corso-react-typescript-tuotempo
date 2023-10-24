import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrip } from "./api";
import { AsyncButton } from "design-system/AsyncButton";
import { useTranslation } from "react-i18next";

interface DeleteTripButtonProps {
  tripId: string;
}

export function DeleteTripButton({ tripId }: DeleteTripButtonProps) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const deleteTripMutation = useMutation({
    mutationKey: ["deleteTrip", tripId],
    mutationFn: deleteTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
  });

  return (
    <AsyncButton
      action={() => deleteTripMutation.mutateAsync(tripId)}
      variant="negative"
      labels={{
        error: t("Trips.deleteButton.error"),
        pending: t("Trips.deleteButton.pending"),
        success: t("Trips.deleteButton.success"),
        idle: t("Trips.deleteButton.idle"),
      }}
    />
  );
}
