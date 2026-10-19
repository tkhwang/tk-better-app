import { Fragment } from "react";

/**
 * Renders `*emphasised*` spans of a translated string as <em>, so a headline
 * can carry its accent word in either language without separate keys.
 */
export const withEmphasis = (text: string) => {
  const parts = text.split("*");

  return parts.map((part, index) =>
    index % 2 === 1 ? <em key={index}>{part}</em> : <Fragment key={index}>{part}</Fragment>,
  );
};
