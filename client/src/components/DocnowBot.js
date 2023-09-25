import React from "react";
import Layout from "./Layout"
const DocnowBot = () => {
  return (
    <Layout>
      <iframe
        src="https://docnow-bot.vercel.app/"
        title="Bot Chat"
        className="w-full h-[500px] border-none"
      ></iframe>
    </Layout>
  );
};

export default DocnowBot;
