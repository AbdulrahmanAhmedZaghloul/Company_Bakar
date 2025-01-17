// import CardInfo from "./components/Card";
// import TransactionList from "./components/TransactionList";


// function App() {
//   return (
//       <div className="mx-auto container ">
//         <CardInfo />
//         <TransactionList />
//       </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import CardInfo from "./components/Card";
import TransactionList from "./components/TransactionList";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetching delay (يمكنك استبداله بطلب API حقيقي)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mx-auto container">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="text-lg font-semibold">Loading . . .</span>
        </div>
      ) : (
        <>
          <CardInfo />
          <TransactionList />
        </>
      )}
    </div>
  );
}

export default App;
