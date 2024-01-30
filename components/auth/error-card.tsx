import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CardWrapper from "./card-wrapper";

export default function ErrorCard() {
  return (
    <CardWrapper headerLabel="Oops! Something went wrong!" backButtonHref="/auth/login" backButtonLabel="Back to Login">
      <div className="flex justify-center items-center w-full">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}
