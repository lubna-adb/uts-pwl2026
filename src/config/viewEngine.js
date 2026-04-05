import ejs from "ejs";
import { readFile } from "fs/promises";

export const render = async (view, data = {}, c = null) => {
  // 1. BACA FILE VIEW (Misal: home.ejs)
  const viewPath = `./src/views/${view}.ejs`;
  const viewTemplate = await readFile(viewPath, "utf-8");
  
  // 2. RENDER VIEW DULU (Jadikan ini sebagai 'content')
  const content = ejs.render(viewTemplate, data);
  
  // 3. BACA FILE LAYOUT UTAMA
  const layoutPath = `./src/views/layout.ejs`;
  const layoutTemplate = await readFile(layoutPath, "utf-8");
  
  // 4. CEK PATH (Mencegah error currentPath is not defined)
  const path = c ? c.req.path : (data.currentPath || "/");

  // 5. GABUNGKAN KEDUANYA (Masukkan 'content' ke dalam 'body' layout)
  return ejs.render(layoutTemplate, {
    ...data,
    body: content,     // <--- Di sinilah variabel body dikirimkan ke layout.ejs
    currentPath: path
  });
};