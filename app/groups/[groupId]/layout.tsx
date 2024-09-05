import { groupNames } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {
  params: {
    groupId: string;
  };
};

export async function generateMetadata({
  params: { groupId },
}: Props): Promise<Metadata> {
  const groupName = groupNames.find((group) => group === groupId);

  return {
    title: {
      default: groupName ?? "",
      template: `%s · ${groupName} · App`,
    },
  };
}

export default async function GroupLayout({
  children,
  params: { groupId },
}: PropsWithChildren<Props>) {
  const basePath = `/groups/${groupId}`;
  const groupName = groupNames.find((group) => group === groupId);

  if (!groupName) return <p>Group not found!</p>;

  return (
    <section className="grid gap-6 bg-blue-100 rounded-md">
      <div className="grid gap-2">
        <Link
          href={`${basePath}/expenses`}
          className="mx-auto block h-auto w-min px-2 py-1 text-4xl font-bold"
        >
          {groupName}
        </Link>

        <p className="scroll text-center text-default-500">
          Effortlessly track expenses and view balances.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-2 justify-items-center bg-gray-100 p-1 rounded-lg">
          {["expenses", "balances", "stats"].map((path) => (
            <Link
              className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-center w-full"
              key={path}
              scroll={true}
              href={`/groups/${groupId}/${path}`}
            >
              {path}
            </Link>
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}
