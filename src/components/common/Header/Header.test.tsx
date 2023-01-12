import { Header } from "./Header";
import { GlobalProvider } from "../../../context/globalContext";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <GlobalProvider>
        <Header title={"Boa noite, e muita saúde"}></Header>
      </GlobalProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
