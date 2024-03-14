import type { MetaFunction } from "@remix-run/node";
import { NotFoundPage } from "~/pages/404";

export const meta: MetaFunction = () => {
  return [{ title: "404: Not Found!" }, { name: "description", content: "" }];
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;