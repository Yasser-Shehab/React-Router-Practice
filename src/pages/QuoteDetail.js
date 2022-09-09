import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

function QuoteDetail() {
  const params = useParams();
  console.log(params);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  const commentsUrl = `/quotes/${params.quoteId}/comments`;

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={commentsUrl}>
            View Comments
          </Link>
        </div>
      </Route>
      <Route path={commentsUrl}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
