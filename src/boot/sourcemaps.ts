
import * as sourcemaps from "source-map-support";
import env from "../env";

if (env.name !== "production") {
  sourcemaps.install({
    hookRequire: true,
  });
}
