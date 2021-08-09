import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["FullStack Web Developer", "code + design + security","PowerLifter", "Austrian Trader"];

const Creator = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);

    return () => clearInterval(action);
  }, []);

  return <h2 style={{color:"yellow"}}>{result}</h2>;
};

export default Creator