import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  console.log(id);

  // Find the offer where the ID is equal to the params of the page.
  const offerInfos = "aze";

  return (
    <div className="main">
      <p>l'ID de cette offre est : {id}</p>
    </div>
  );
};

export default Offer;
