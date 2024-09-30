import useBrowser from "../hooks/useBrowser";

const WebContentPage = () => {
  const { webviewRef } = useBrowser();
  
  return (
    <webview
      style={{
        height: `100%`,
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
      ref={webviewRef}
    />
  );
};

export default WebContentPage;
