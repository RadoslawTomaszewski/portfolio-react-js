export function WideBlock(props) {
  return (
    <>
      <div className="min-h-auto my-2 flex items-center justify-between rounded-md bg-green-100 p-2 ">
        <div className="flex flex-col items-stretch break-words">
          <div className="text-lg font-bold">{props.years}</div>
          <div className="text-3xl font-bold">{props.name}</div>
          <div className="text-lg font-bold">{props.city}</div>
          <div className="hidden text-lg italic lg:block">
            {props.title2}
          </div>{" "}
          <div className="hidden text-base italic lg:block">{props.title}</div>{" "}
          <div className="hidden text-base lg:block">{props.features1}</div>{" "}
          <div className="hidden text-base lg:block">{props.features2}</div>{" "}
          <div className="hidden text-base lg:block">{props.features3}</div>{" "}
        </div>
        <img
          className="hidden max-h-[11vw] border-2 border-solid border-black lg:block"
          src={props.image}
          alt={props.imageAlt}
        />
      </div>
    </>
  );
}
