import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Input } from "@nextui-org/react";
import { ArrowLeft, MagnifyingGlass } from "@phosphor-icons/react";

import Layout from "@/components/layout";
import Card from "@/components/card";

export default function FilterCategory({ meals }) {
  const [searchMeal, setSearchMeal] = useState("");
  const router = useRouter();
  const { name } = router.query;

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchMeal.toLowerCase()),
  );

  return (
    <Layout className="pt-16">
      <section className="grid gap-8">
        <Button
          variant="bordered"
          color="default"
          startContent={<ArrowLeft weight="bold" size={16} />}
          onClick={() => router.push("/")}
          className="w-max font-semibold"
        >
          Kembali
        </Button>

        <div className="text-center text-[36px] font-extrabold capitalize text-default-900">
          {name} Meals
        </div>

        <div className="grid gap-4">
          <Input
            variant="flat"
            color="default"
            startContent={
              <MagnifyingGlass
                weight="bold"
                size={16}
                className="text-default-500"
              />
            }
            placeholder="Search meals by name..."
            labelPlacement="outside"
            value={searchMeal}
            onChange={(e) => setSearchMeal(e.target.value)}
            className="max-w-[500px]"
          />

          {filteredMeals.length ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-8 gap-y-4">
              {filteredMeals.map((meal, index) => (
                <Card
                  key={index}
                  path={`/category/${name}/${meal.idMeal}`}
                  image={meal.strMealThumb}
                  text={meal.strMeal}
                />
              ))}
            </div>
          ) : (
            <div className="flex h-[200px] items-center justify-center rounded-xl bg-white shadow-medium">
              <p className="text-[18px] font-semibold italic text-default-900">
                Meal Not Found...
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const categoryName = params.name;

  try {
    const response = await axios.get(
      `http://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
    );
    const meals = response.data.meals;

    return {
      props: {
        meals,
      },
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}
