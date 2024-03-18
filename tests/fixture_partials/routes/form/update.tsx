import { defineRoute } from "../../../../src/__OLD/server/defines.ts";
import { RouteConfig } from "$fresh/server.ts";
import { Partial } from "@fresh/runtime";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default defineRoute((req, ctx) => {
  return (
    <Partial name="slot-1">
      <p class="status-updated">it works</p>
      <p>
        <input type="text" />
      </p>
    </Partial>
  );
});
