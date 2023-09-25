import React from "react";

const DocnowBot = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="border rounded-lg overflow-hidden shadow-lg w-full md:w-3/4 lg:w-1/2">
        <iframe
          src="https://mediafiles.botpress.cloud/bc81f148-1c4b-4648-ad5a-88410ac7dc7a/webchat/bot.html"
          title="Bot Chat"
          className="w-full h-[500px] border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default DocnowBot;
