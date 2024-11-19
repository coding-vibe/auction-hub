import Image from "next/image";
import { format, parseISO } from "date-fns";
import { baseUrl, auctionListEndpoint } from "@/constants/apiEndpoints";
import styles from "./list.module.scss";

interface Props {
  className?: string;
}

const columns = ["ID", "Name", "Image", "Start At"];
const IMAGE_DIMENSIONS = {
  height: 200,
  width: 200,
};

export default async function AuctionListPage({ className }: Props) {
  const data = await fetch(`${baseUrl}${auctionListEndpoint}`);

  const auctionData = await data.json();
  const { results } = auctionData;

  return (
    <section className={className}>
      <h1 className={styles.title}>Auction List</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th className={styles.head} key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((item) => {
            const lot = item.lot || {};
            const startAt = lot.start_at;
            const formattedDate = startAt
              ? format(parseISO(startAt), "MMMM dd, yyyy, HH:mm:ss OOOO")
              : "No start date";

            return (
              <tr key={item.id || lot.id}>
                <td>{lot.id || "No ID"}</td>
                <td>{lot.name || "No Name"}</td>
                <td>
                  {lot.image ? (
                    <Image
                      priority
                      alt={lot.name || "Auction Image"}
                      src={lot.image}
                      height={IMAGE_DIMENSIONS.height}
                      width={IMAGE_DIMENSIONS.width}
                    />
                  ) : (
                    "No image"
                  )}
                </td>
                <td>{formattedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
