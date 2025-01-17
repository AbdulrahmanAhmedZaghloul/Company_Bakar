import { Card, CardContent, CardHeader } from "@/components/ui/card";
import img from "../../assets/visa-svgrepo-com.svg";


interface CardData {
    cardholderName: string;
    last4: string;
    expiryMonth: number;
    expiryYear: number;
    brand: string;
    cvc: string;
  }
  
  interface CardDetailsProps {
    loading: boolean;
    cardData: CardData | null;
  }
const CardDetails = ({ loading, cardData }: CardDetailsProps) => {
  return (
    <Card className="w-full border-black rounded-none max-w-md mx-auto mt-10">
      <CardHeader className="p-0 pb-5 mb-8 flex items-start">
        <img className="w-1/4 ms-auto px-5" src={img} alt="Visa" />
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : cardData ? (
          <div className="space-y-2">
            <div className="flex items-center">
              <h1 className="text-2xl  tracking-widest flex">
               <span className="font-bold text-xl tracking-widest me-1 "> .... .... ....</span> {cardData.last4}
              </h1>
            </div>
            <div className="flex justify-between">
              <p>
                <p>Cardholder</p>
                <p> {cardData.cardholderName} </p>
              </p>
              <p>
                <p>Expiry</p> 
                <p>{cardData.expiryMonth}/{cardData.expiryYear}</p>
              </p>
              <p>
                <p>CVC</p> <p className="font-bold text-xl text-center"> ... </p>
              </p>
            </div>
          </div>
        ) : (
          <p>Error loading card data</p>
        )}
      </CardContent>
    </Card>
  );
};

export default CardDetails;
