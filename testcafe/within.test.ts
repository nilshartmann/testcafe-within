import { within, screen } from "@testing-library/testcafe";
import { Selector } from "testcafe";

fixture`within example`.page`http://localhost:3000`;

test("Within Example", async (t) => {
  // findByRole on Screen WORKS:
  const buttonB = screen.findByRole("button", { name: "Increase B" });
  await t.expect(buttonB.exists).ok();

  // checking for not existing element:
  await t
    .expect(screen.findByRole("button", { name: "Not Found" }).exists)
    .notOk();

  // throws Exception (as described in the docs, that's fine)
  // await t
  //   .expect(screen.getByRole("button", { name: "Not Found" }).exists)
  //   .notOk();

  const group = screen.findByRole("group", { name: "My Group" });
  await t.expect(group.exists).ok();

  /// getByRole within WORKS:
  await t
    .expect(within(group).getByRole("button", { name: "Increase B" }).exists)
    .ok();

  // does NOT work:
  //  1) Function that specifies a selector can only return a DOM node, an array of nodes, NodeList, HTMLCollection, null or undefined. Use ClientFunction to
  // return other values.
  await t
    .expect(within(group).findByRole("button", { name: "Increase B" }).exists)
    .ok();

  // also does NOT work:
  await t
    .expect(within(group).findByRole("button", { name: "Increase B" }).exists)
    .notOk();
});
