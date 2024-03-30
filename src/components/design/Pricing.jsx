import { lines } from "../../assets";

export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <img
        src={lines}
        alt="Lines"
        className="w-full"
        width={1480}
        height={177}
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
