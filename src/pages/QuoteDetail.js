import { useParams } from "react-router-dom";

function QuoteDetail() {
  const params = useParams();

  return <h1>Quote Detail {params.quoteId}</h1>;
}

export default QuoteDetail;
