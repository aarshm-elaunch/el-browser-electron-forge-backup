import BrowserSummit from "../components/summit";
import BrowserContent from "../pages";
import { SocketProvider } from "../web-socket/socket";

const UserView = () => {
  
  return (
    <SocketProvider>
      <BrowserSummit />
      <BrowserContent />
    </SocketProvider>
  );
};

export default UserView;
