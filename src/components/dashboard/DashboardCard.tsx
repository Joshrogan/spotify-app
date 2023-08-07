type Props = {
  name: string;
  genres: string[];
};

const DashboardCard = (props: Props) => {
  return (
    <div className="box-shadow-xl w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1 rounded-lg border-b-8 border-l-2 border-r-8 border-t-2 border-black bg-green-500 p-8 shadow-2xl m-0.5">
      <h2 className="mb-4 text-2xl font-bold text-white">{props.name}</h2>
      {props.genres.map((genre) => (
        <p className="text-white">{genre}</p>
      ))}
    </div>
  );
};

export default DashboardCard;
