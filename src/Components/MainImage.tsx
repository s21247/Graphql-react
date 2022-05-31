import React from "react";

const MainImage = () => {
  const imageName: string =
    "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/slider-pendant-lighting.jpg";
  return (
    <div>
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: "max-width:1600px",
          height: " 42rem",
          backgroundImage: "url(" + imageName + ")",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
            <h1 className="text-white text-2xl my-4">
              Contemporary Pendant <br />
              Lightning
            </h1>
            <a
              className="text-white text-xl inline-block underline border-gray-600 leading-relaxed hover:text-yellow "
              href="/"
            >
              products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainImage;
