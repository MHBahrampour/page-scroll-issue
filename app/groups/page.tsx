import { groupNames } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Groups",
};

export default function GroupsPage() {
  return (
    <section className="grid gap-6 bg-red-100 rounded-md">
      <div className="grid gap-2 py-16">
        <h2 className="text-4xl font-bold text-center">Your Groups</h2>
        <p className="text-center text-default-500">
          All the groups you have joined.
        </p>
      </div>

      <div className="grid gap-4">
        {groupNames.map((groupName) => (
          <Link href={`/groups/${groupName}/expenses`}>
            <div className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              <h2 className="text-2xl">{groupName}</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
