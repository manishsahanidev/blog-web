import { MainNav } from "@/components/main-nav";
import LatestPosts from "@/components/home/LatestPosts";
import Container from "@/components/Container";
import TopCategories from "@/components/home/top-categories";
import PopularPosts from "@/components/home/popular-posts";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4 uppercase">Top categories</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4 uppercase">popular posts</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
