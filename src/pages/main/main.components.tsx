import { FC, useState, useCallback, useEffect } from "react";

import { CaseBox, Button } from "../../shared/components";

import Styled from "./main.styles";
import type { CaseProps } from "./main.types";

const Main: FC = () => {
  const [showCaseBox, setShowCaseBox] = useState(false);
  const [loader, setLoader] = useState(false);
  const [caseData, setCaseData] = useState<CaseProps>();

  const getCaseData = useCallback(async () => {
    setLoader(true);

    const response = await fetch(`https://sample-rest-api.vercel.app/api/case`);

    if (
      response?.status === 401 ||
      response?.status === 402 ||
      response?.status === 403
    ) {
      console.error("Sorry something went wrong");
    }

    const jsonData = await response.json();

    if (jsonData && jsonData.message !== "Not Found") {
      setCaseData(jsonData);
    } else {
      console.log("Data does not exist");
    }
  }, []);

  useEffect(() => {
    if (caseData) {
      setLoader(false);

      setShowCaseBox(!showCaseBox);
    }
  }, [caseData]);

  return (
    <Styled.Main>
      <Button onClick={getCaseData} isLoading={loader}>
        Get case
      </Button>

      {showCaseBox && (
        <CaseBox
          isOpen={showCaseBox}
          openSetter={setShowCaseBox}
          caseData={caseData}
        />
      )}
    </Styled.Main>
  );
};

export default Main;
