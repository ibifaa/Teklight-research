import darkLogo from "../assets/teklight-logo.svg";
// import lightLogo from "../assets/teklight-logo-light.svg";

export default function Logo({
  onClick,
  variant = "dark",
  width = 160,
  className = "",
}) {
  const src = variant === "light" ? lightLogo : darkLogo;

  const image = (
    <img
      src={src}
      alt="TekLight Research & Data Analysis"
      width={width}
      className={`block h-auto max-w-full object-contain ${className}`}
    />
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Go to TekLight homepage"
        className="inline-flex shrink-0 items-center border-0 bg-transparent p-0"
      >
        {image}
      </button>
    );
  }

  return image;
}