interface Props {
  className?: string;
}

const baseUrl = "http://localhost:8000/";
const auctionListEndpoint = "auctions/";

export default async function AuctionListPage({ className }: Props) {
  const data = await fetch(`${baseUrl}${auctionListEndpoint}`);
  const auctionData = await data.json();
  const { results } = auctionData;

  console.log("Log from server component");

  // console.log(auctionList);
  return (
    <section className={className}>
      <ul>
        {results.map((auctionItem) => (
          <li key={auctionItem.id}>{auctionItem.lot.name}</li>
        ))}
      </ul>
    </section>
  );
}
