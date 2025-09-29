import { CodeTabs } from "C:/Users/sarba/sarbast_saman_cvv/node_modules/.pnpm/@vuepress+plugin-markdown-t_e42c042ec14b431e03bfb919212b2d2c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/sarba/sarbast_saman_cvv/node_modules/.pnpm/@vuepress+plugin-markdown-t_e42c042ec14b431e03bfb919212b2d2c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/sarba/sarbast_saman_cvv/node_modules/.pnpm/@vuepress+plugin-markdown-t_e42c042ec14b431e03bfb919212b2d2c/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
