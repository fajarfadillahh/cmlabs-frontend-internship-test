import Layout from "@/components/layout";
import Card from "@/components/card";
import axios from "axios";

export default function Home({ categories }) {
  return (
    <Layout className="pt-16">
      <section className="grid gap-16">
        <div className="text-center">
          <h1 className="mx-auto mb-2 max-w-[700px] text-[42px] font-black leading-[115%] text-default-900">
            Looking for a Recipe? Just look for it at{" "}
            <span className="bg-gradient-to-tr from-yellow-400 to-green-500 bg-clip-text text-transparent">
              MADANGAN{" "}
            </span>
            😋
          </h1>
          <p className="mx-auto max-w-[680px] text-[18px] font-medium leading-[160%] text-default-500">
            Explore delicious recipes from around the world. Find, cook, and
            enjoy! Save your favorites and become the best chef in the kitchen.
            Life is sweet, and Madangan makes it even tastier! 🍽️✨
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-8 gap-y-4">
          {categories.map((category, index) => (
            <Card key={index} data={category} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    const categories = response.data.categories;

    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}
