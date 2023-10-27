import { ComponentProps, useState } from "react";
import { Button } from "./Button";
import { LocalizedString } from "../models";

type Props = {
  action: () => Promise<unknown>;
  labels: {
    success: LocalizedString;
    idle: LocalizedString;
    error: LocalizedString;
    pending: LocalizedString;
  };
  variant?: ComponentProps<typeof Button>["variant"];
};

type Status = "success" | "idle" | "error" | "pending";

export function AsyncButton({ action, labels, variant }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  const onClick = async () => {
    setStatus("pending");
    try {
      await action();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 1000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Button onClick={onClick} variant={variant}>
      {labels[status]}
    </Button>
  );
}
