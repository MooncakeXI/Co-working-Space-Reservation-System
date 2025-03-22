import Link from "next/link";

export default function TopMenuItem( { title, pageRef} : {title: string, pageRef: string}) {
    return (
       <Link href={pageRef} className="px-3 py-1 rounded-md cursor-pointer transition duration-200 hover:drop-shadow-md hover:text-sky-900">
            {title}
       </Link>
    );
}

