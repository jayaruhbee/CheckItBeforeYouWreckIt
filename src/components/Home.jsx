import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`questions/${category}`);
  };

  const headerStyle = {
    color: "white",
    fontSize: "54px",
  };

  return (
    <>
      <main className="h-[100vh] w-[100vw]">
       <div header-container className="mx-auto w-full">
          <h1 className="poppins text-white text-6xl text-center mt-6">
            Check It Before You Wreck It
          </h1>
       </div>

        <div className="options-container flex justify-center mt-[250px]">
          <div className="cards-container poppins flex flex-row gap-3 ">
            <button
              onClick={() => handleCategoryClick("Food")}
              className="food-card card sintony bg-yellow-300 hover:scale-110 transition-transform duration-400 transform hover:bg-yellow-300 cursor-pointer text-black text-lg p-8"
            >
              FOOD
            </button>

            <button
              onClick={() => handleCategoryClick("Retail")}
              className="retail-card card sintony bg-yellow-300 hover:scale-110 transition-transform duration-400 transform hover:bg-yellow-300 cursor-pointer text-black text-lg p-8"
            >
              RETAIL
            </button>
            <button
              onClick={() => handleCategoryClick("Service")}
              className="service-card card sintony bg-yellow-300 hover:scale-110 transition-transform duration-400 transform hover:bg-yellow-300 cursor-pointer text-black text-lg p-8"
            >
              SERVICE
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
