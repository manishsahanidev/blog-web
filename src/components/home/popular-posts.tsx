import { popularPosts } from "@/lib/placeholder-data";
import { Icons } from "../icons";

export default function PopularPosts() {
    return (
        <ul className="overflow-auto">
            {popularPosts.map((post) => (
                <li key={post.title} className="flex items-center gap-2 py-2 group cursor-pointer">
                    <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
                    <p>{post.title}</p>
                </li>
            ))}
        </ul>
    )
}