import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
    name: "Peter Messy",
    username: "cooljmessy",
  });
 
  return (
    <UserContext.Provider value={{ loggedInUser }}>{children}</UserContext.Provider>
  );
};
