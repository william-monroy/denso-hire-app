import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Try to connect to Flask backend

    setTimeout(() => {
      setUser({
        id: "1",
        name: "William Monroy",
        email: "example@gmail.com",
        avatar: "https://avatars.githubusercontent.com/u/58092741?v=4",
        admin: true,
      });
      // console.log(user);
    }, 1500);
  }, [user]);

  // const login = () => {

  // }

  return <AuthContext.Provider value="hello">{children}</AuthContext.Provider>;
};

export default AuthContext;
