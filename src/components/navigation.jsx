import { useHistory } from "react-router";

export default function Navigation() {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.goBack()}>
        Back
      </button>
      Navigation
    </>
  );
}
