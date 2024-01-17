import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import { ArrowLeft } from "@phosphor-icons/react";

import Layout from "@/components/layout";

export default function DetailMeal({ meal }) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout className="pt-16">
      <section className="grid gap-12">
        <Button
          variant="bordered"
          color="default"
          startContent={<ArrowLeft weight="bold" size={16} />}
          onClick={() => router.push(`/category/${name}`)}
          className="w-max font-semibold"
        >
          Kembali
        </Button>

        <div className="mx-auto max-w-[800px] text-center text-[36px] font-extrabold capitalize leading-[115%] text-default-900">
          {meal.strMeal}
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-12">
          <Image
            src={meal.strMealThumb}
            alt={`${meal.strMeal} Image`}
            width={800}
            height={800}
            className="aspect-square rounded-2xl"
            priority
          />

          <div className="grid gap-6">
            <div>
              <h1 className="mb-1 text-[24px] font-bold text-default-900">
                Instructions
              </h1>
              <p className="font-medium leading-[160%] text-default-500">
                {meal.strInstructions}
              </p>
            </div>

            <div>
              <h1 className="mb-1 text-[24px] font-bold text-default-900">
                Recipes
              </h1>
              <ul className="ml-4 grid list-disc gap-1">
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                  (index) => {
                    const ingredient = meal[`strIngredient${index}`];
                    if (ingredient && ingredient.trim() !== "") {
                      return (
                        <li
                          key={index}
                          className="font-medium text-default-500"
                        >
                          {ingredient}
                        </li>
                      );
                    }

                    return null;
                  },
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          <h1 className="text-center text-[24px] font-bold text-default-900">
            Tutorials
          </h1>
          {meal.strYoutube && meal.strYoutube.trim() !== "" ? (
            <iframe
              allowFullScreen
              title="Youtube Video"
              src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
              className="aspect-video w-full rounded-2xl"
            />
          ) : (
            <div className="rounded-xl bg-white py-8 text-center text-[18px] text-default-900 shadow-medium">
              Video Not Found
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const mealId = params.id;

  try {
    const response = await axios.get(
      `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );
    const meal = response.data.meals[0];

    return {
      props: {
        meal,
      },
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}
