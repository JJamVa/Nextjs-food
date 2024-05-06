import { getMeals } from "@/lib/meals";
import MealsGrid from "../components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "모든 음식들",
  decription: "커뮤니티에 맛있는 음식 공유를 검색"
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>레시피와 음식을 골라주세요!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">가장 좋아하는 레시피를 공유</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
