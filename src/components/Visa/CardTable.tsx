import { TableBody, TableCell, TableRow } from "../ui/table";

interface CardData {
  cardholderName: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  brand: string;
  cvc: string;
}

interface CardTableProps {
  cardData: CardData | null;
}

const CardTable = ({ cardData }: CardTableProps) => {
  if (!cardData) return null;

  return (
    <div className="w-full max-w-md mx-auto mt-10 ">
      <TableBody >
        <TableRow>
          <TableCell className="font-semibold w-1/2">Card Number</TableCell>
          <TableCell>
            <span className="text-sm tracking-widest flex ">
              <span className="font-bold text-xs tracking-widest me-1"> ....  ....  .... </span>
              {cardData.last4}
            </span>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Cvv</TableCell>
          <TableCell>
            <span className="tracking-widest ">...</span>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Expiry Date</TableCell>
          <TableCell>
            {cardData.expiryMonth}/{cardData.expiryYear}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Brand</TableCell>
          <TableCell>
            {cardData.brand} <i className="ms-1 text-2xl fa-brands fa-cc-visa"></i>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Status</TableCell>
          <TableCell>
            <p className="border border-black w-fit p-1 px-3">
              Active
            </p>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Cardholder</TableCell>
          <TableCell>{cardData.cardholderName}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Card Type</TableCell>
          <TableCell>Virtual</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Created At</TableCell>
          <TableCell>Nov 15, 2023, 9:32 PM</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-semibold">Billing Address</TableCell>
          <TableCell>123 Main Street</TableCell>
        </TableRow>

        <TableRow>
          <TableCell></TableCell>
          <TableCell>San Francisco, CA, 94111, US</TableCell>
        </TableRow>
      </TableBody>

    </div>
  );
};

export default CardTable;
