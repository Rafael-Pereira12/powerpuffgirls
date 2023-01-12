import { CollapsibleComponent } from "./Collapsible";
import { GlobalProvider } from "../../../context/globalContext";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <GlobalProvider>
        <CollapsibleComponent number={1}>
          <div></div>
        </CollapsibleComponent>
      </GlobalProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
