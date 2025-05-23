import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
import { useAuthStore } from "./store/useAuthStore";
import ReactGA from 'react-ga';

ReactGA.initialize('G-4ST296H47W')
function App() {
  const { setAuthenticatedLocal } = useAuthStore();

  useEffect(() => {
    const prepareState = () => {
      setAuthenticatedLocal();
    };

    prepareState();
  }, [setAuthenticatedLocal]);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
