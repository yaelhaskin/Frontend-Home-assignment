import LandingPage from "./landing/page";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.Main}>
      <LandingPage />
    </main>
  );
}
