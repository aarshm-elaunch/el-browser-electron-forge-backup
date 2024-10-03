import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { RootState } from "../redux/store";

const SocketContext = createContext<Socket | null>(null);

interface SocketProviderProps extends PropsWithChildren { }

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { token } = useSelector((state: RootState) => state.auth)
  useEffect(() => {
    const newSocket = io("http://localhost:4000", {
      transports: ['websocket'],
      query: {
        token: token,
      },
    });
    setSocket(newSocket);
    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
    });
    return () => {
      newSocket.disconnect();
    };
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === null) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export { SocketProvider, useSocket };
