export function WideBlock(props) {
  return (
    <>
      <div className="my-5 flex min-h-[13vw] items-center justify-between rounded-md bg-green-100 p-4 opacity-80 hover:opacity-100">
        <div className="flex flex-col items-stretch break-words">
          <div className="text-h4 font-bold leading-none">{props.years}</div>
          <div className="text-h2 font-bold leading-none">{props.name}</div>
          <div className="text-h4 font-bold leading-none">{props.city}</div>
          <div className="text-h6 italic leading-none">{props.title2}</div>
          <div className="text-h6 italic">{props.title}</div>
          <div className="text-h6 leading-none">{props.features1}</div>
          <div className="text-h6 leading-none">{props.features2}</div>
          <div className="text-h6 leading-none">{props.features3}</div>
        </div>
        <img
          className="max-h-[11vw] border-2 border-solid border-black"
          src={props.image}
          alt={props.imageAlt}
        />
      </div>
    </>
  );
}
