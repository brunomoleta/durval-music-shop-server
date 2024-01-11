import { submit } from "../../components/Login/Forms/FormSignUp/Confirmation/Confirmation.tsx";
import { user } from "../mocks/create/createUser.route.mock.ts";

describe("user", () => {
  test("Should return safe data after it's saved in the database", async () => {
    const output = await submit(user.userInput);

    expect(output).toStrictEqual(user.userOutput);
  });
});
