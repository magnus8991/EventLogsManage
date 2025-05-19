import { Routes } from "@angular/router";
import {IDENTITIES, EVENTS} from "./routes.constants";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./identity/identity.module").then((m) => m.IdentityModule),
  },
  {
    path: IDENTITIES.NAME,
    loadChildren: () => import("./identity/identity.module").then((m) => m.IdentityModule),
  },
  {
    path: EVENTS.NAME,
    loadChildren: () => import("./subject/event.module").then((m) => m.SubjectModule),
  },
];
