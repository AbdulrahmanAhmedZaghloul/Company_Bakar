import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { fetchCardData } from "@/lib/cardSlice";
import CardSelector from "./Visa/CardSelector";
import CardDetails from "./Visa/CardDetails";
import CardTable from "./Visa/CardTable";
import CardActions from "./Visa/CardActions";

const CardInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: cardData, loading } = useSelector(
    (state: RootState) => state.card
  );
  const [selectedOption, setSelectedOption] = useState("MohamedHazem");
  
  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  return (
    <>
      <CardSelector
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <CardDetails loading={loading} cardData={cardData} />
      <CardTable cardData={cardData} />
      <CardActions />
    </>
  );
};

export default CardInfo;