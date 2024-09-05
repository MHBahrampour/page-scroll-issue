import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balances",
};

export default function GroupBalancesPage() {
  return (
    <div className="bg-red-100 rounded-md">
      <div className="grid gap-2">
        <h4 className="leading-none">Balances</h4>
        <p className="text-small text-default-500">View group balances.</p>
      </div>

      <div className="grid gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus cupiditate saepe, magni, autem perspiciatis facere
          voluptas blanditiis itaque voluptates commodi libero, impedit sapiente
          reiciendis optio inventore. Qui, quo a.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          praesentium similique a error excepturi optio, expedita, quisquam
          minima voluptatum ut dolore eum amet nulla. Voluptas, accusantium. Id
          et ea veritatis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
          repellendus? Maxime, aspernatur? Ut quaerat quis dolores nesciunt,
          optio laudantium recusandae ipsum dignissimos. Tenetur dolor
          explicabo, tempore autem culpa inventore nostrum!
        </p>
      </div>
    </div>
  );
}
