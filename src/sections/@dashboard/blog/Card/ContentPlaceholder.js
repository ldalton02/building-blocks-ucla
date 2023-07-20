import * as React from "react";
import { motion,  useDeprecatedInvertedScale} from "framer-motion";

export const ContentPlaceholder = React.memo(() => {
  const inverted = useDeprecatedInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      hello fuck me
    </motion.div>
  );
});
