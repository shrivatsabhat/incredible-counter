declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.css";
declare module "*.scss";

declare module "react";
declare module "react-router-dom";

declare module "vite-tsconfig-paths";
