import MostReadWeekly from "./mostReadWeekly";
import Recents from "./recents";
import Topics from "./topics";

const routes = [
  {
    path: "/topicos",
    component: Topics,
  },
  {
    path: "/recentes",
    component: Recents,
  },
  {
    path: "/mais-lidos-da-semana",
    component: MostReadWeekly,
  },
];

export default routes;
