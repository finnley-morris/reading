import WordSearch from "../components/gameMats/WordSearch";

import SearchIcon from "@mui/icons-material/Search";
import AbcIcon from "@mui/icons-material/Abc";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const activitiesObj = {
  wordSearch: {
    title: "Popit Word Search",
    icon: <SearchIcon />,
    matElement: <WordSearch />,
    description: "Find the hidden words in the Popit mat.",
    defaultSettings: {
      wordLength: 3,
      gridSize: 2
    },
    settings: {
      wordLength: {
        label: "Word Length",
        icon: <AbcIcon />,
        options: [
          { label: "3", value: 3 },
          { label: "4", value: 4 },
          { label: "5", value: 5 }
        ]
      },
      gridSize: {
        label: "Mat Size",
        icon: <AspectRatioIcon />,
        options: [
          { label: "Small", value: 2 },
          { label: "Medium", value: 3 },
          { label: "Large", value: 4 }
        ]
      }
    }
  }
};
export default activitiesObj;
