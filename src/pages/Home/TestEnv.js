import "../../comp-table/Table.css";
import { Menu } from "@headlessui/react";
export default function TestEnv() {
  return (
    <div>
      <div className="md:visible lg:visible">
        <p>I can be seen with md and lg devices!</p>
      </div>
      <div className="sm:visible md:hidden lg:hidden">
        <p>I am only seen on sm devices!</p>
      </div>
    </div>
  );
}
