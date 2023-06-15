import helloworld from "../../assets/img/helloworld.png";

export function HomePage() {
  return (
    <>
      <div className="d-flex">
        <img src={helloworld} alt="hello world" />
      </div>
    </>
  );
}
