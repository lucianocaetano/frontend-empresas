const routes = [
  {
    path: "/error/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ErrorNotFound.vue") },
    ],
  },
  {
    path: "/login/",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        component: () => import("src/pages/EmpresaDetalles.vue"),
        path: "",
        name: "home",
      },
      {
        path: "operator/:pk/",
        component: () => import("src/pages/OperatorDetail.vue"),
        name: "operators-detail",
      },
    ],
  },
  {
    path: "/cuenta/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Documentos.vue"),

        name: "cuenta",
      },
    ],
  },
];

export default routes;
