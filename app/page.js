import classes from "./page.module.css";
import WelcomePage from "./welcome/page";

export default function Home() {
  return (
    <main className={classes.Main}>
      <WelcomePage />
    </main>
  );
}
