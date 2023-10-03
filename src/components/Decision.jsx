import { Link } from "react-router-dom";
const Decision = ({ answer }) => {
  console.log("answer", answer);
  let decision;

  if (answer >= 4) {
    decision = "Treat yourself";
  } else {
    decision = "You should reconsider, bestie!";
  }

  return (
    <>
      <Link to="/" className="text-white absolute top-2 left-2 underline">
        Back To Categories{" "}
      </Link>
      <div class="relative group">
        <div class="absolute -inset-1 ring-4 ring-cyan-100 opacity-50 blur rounded-sm "></div>
        <div class="relative px-7 py-6 bg-yellow-300 rounded-sm  space-x-6">
          <div class="space-y-2">
            <p class="poppins font-extrabold text-gray-800 text-lg">{decision}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Decision;
