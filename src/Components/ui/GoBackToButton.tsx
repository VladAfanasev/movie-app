import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import classnames from "classnames";
type GoBackToButtonProps = {
  url: string;
  text?: string;
  className?: string;
};

const GoBackToButton = ({ url, text, className }: GoBackToButtonProps) => {
  return (
    <Link to={url}>
      <Button variant={"ghost"} className={classnames("space-x-2", className)}>
        <ArrowLeft /> <span>{text ? text : "Go back to overview"}</span>
      </Button>
    </Link>
  );
};

export default GoBackToButton;
