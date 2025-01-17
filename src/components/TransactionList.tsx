
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
interface CardData {
  amount: number;
  currency: string;
  cardholder: string;
  Created: string;
  status: string;
}
//downloadPDF

declare module "jspdf" {
  interface jsPDF {
    autoTable: (
      options: {
        head: string[][];  
        body: string[][]; 
        startY: number;    
        styles?: { fontSize: number };  
      }
    ) => void;
  }
}

// api json
const TRANSACTIONS_URL = "https://abdulrahmanahmedzaghloul.github.io/host_api/raect.json";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true); // حالة التحميل

  const transactionsPerPage = 10;
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const downloadPDF = () => {
    if (transactions.length === 0) return;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Transactions Report", 14, 15);
    const tableColumn = ["Amount", "Currency", "Cardholder", "Status", "Created"];
    const tableRows = transactions.map(tx => [
      tx.amount.toString(),
      tx.currency,
      tx.cardholder,
      tx.status,
      tx.Created
    ]);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      styles: { fontSize: 12 }
    });
    doc.save("transactions.pdf");
  };
 
  useEffect(() => {
    setLoading(true); // بدء التحميل
    axios
      .get<CardData[]>(TRANSACTIONS_URL)
      .then(response => setTransactions(response.data))
      .catch(error => console.error("Error fetching data:", error))
      .finally(() => setLoading(false)); // إيقاف التحميل عند انتهاء الجلب
  }, []);
  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center w-[40%] border-e-4 border-s-4 p-4 h-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-400">Transactions</h2>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Issued cards</h3>
        </div>
        <div className="flex justify-around items-center">
          <button onClick={downloadPDF}
              className="me-6 text-gray-700 text-center mx-auto p-2 w-full my-4 border-2 border-gray-400 tracking-widest font-medium">
            Download
          </button>
          <button className="text-center text-gray-700 mx-auto p-2 w-full my-4 border-2 border-gray-400 tracking-widest font-medium">
            Filter
          </button>
        </div>
      </div>
      <Table className="border border-t border-b border-s-0 border-e-0">
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-400">Amount</TableHead>
            <TableHead className="text-gray-400">Currency</TableHead>
            <TableHead className="text-gray-400">Cardholder</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
            <TableHead className="text-gray-400">Created</TableHead>
          </TableRow>
        </TableHeader>
        {loading?(
        <div className="text-center py-10 text-gray-700 font-semibold text-lg">Loading ....</div>
        ):(
           <TableBody>
          {currentTransactions.map((tx, index) => (
            <TableRow key={index}>
              <TableCell className="text-gray-700 font-medium">{tx.amount}</TableCell>
              <TableCell className="text-gray-700 font-medium">{tx.currency}</TableCell>
              <TableCell className="text-gray-700 font-medium">{tx.cardholder}</TableCell>
              <TableCell className="text-gray-700">
                <span className="border p-1.5 font-medium px-3 border-black w-fit">{tx.status}</span>
              </TableCell>
              <TableCell className="text-gray-700 font-medium">{tx.Created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        )}
       

      </Table>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-lg font-semibold text-gray-400">
          Viewing {indexOfFirstTransaction + 1}-{Math.min(indexOfLastTransaction, transactions.length)} of {transactions.length} results
        </h2>
        <div className="flex justify-around items-center">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="me-6 text-gray-700 text-center mx-auto p-2 w-full my-4 border-2 border-gray-400 tracking-widest font-medium disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(prev => (indexOfLastTransaction < transactions.length ? prev + 1 : prev))}
            disabled={indexOfLastTransaction >= transactions.length}
            className="text-center text-gray-700 mx-auto p-2 w-full my-4 border-2 border-gray-400 tracking-widest font-medium disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;