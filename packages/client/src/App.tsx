import React, { useState } from "react";
import styles from "./App.module.sass";

interface ResponseInterface {
  greeting: string;
}

const URL = "http://localhost:4000";

const loadData = async (url: string): Promise<ResponseInterface> => {
  return fetch(url).then(
    (response: Response): Promise<ResponseInterface> => response.json()
  );
};

const App: React.FC = () => {
  let [data, setData] = useState<ResponseInterface>({ greeting: "" });
  loadData(URL).then((value: ResponseInterface) => setData(value));
  return <h1 className={styles.App}>{data.greeting}</h1>;
};

export default App;
