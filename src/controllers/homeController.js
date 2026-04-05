import { render } from "../config/viewEngine";

export const home = async (c) => {
  const html = await render("home", {
    title: "Dashboard Bun MVC",
    message: "Hello dari Bun + Tailwind",
    currentPath: c.req.path // Variabel ini sekarang wajib dikirim ke View
  }, c);
  
  return c.html(html);
};