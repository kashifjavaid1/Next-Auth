import mongoose from "mongoose";
export const connect = () => {
  mongoose
    .connect(process.env.CONNECTION_URL!, {
      tls: true,
    })
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.log(err));
};
