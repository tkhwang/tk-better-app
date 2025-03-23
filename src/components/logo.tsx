import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link
      to="/"
      className="text-xl font-display font-bold tracking-tight relative z-10 text-primary-foreground animate-fade-in"
    >
      <span className="text-black">tk</span>
      <span className="text-primary">Better</span>
      <span className="text-black">.app</span>
    </Link>
  );
}
