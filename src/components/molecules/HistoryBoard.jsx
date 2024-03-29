import { useMemo } from "react";
import { Button } from "@mui/material";
import "../atoms/HistoryBoard.css";

const HistoryBoard = ({
  propBackgroundColor,
  propBackgroundColor1,
  propPadding,
}) => {
  const historyBoardStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const noAnswerButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="history-board2" style={historyBoardStyle}>
      <div className="history-board-inner" style={rectangleDivStyle} />
      <img
        className="more-vert-icon3"
        loading="lazy"
        alt=""
        src="/more-vert.svg"
      />
      <div className="frame-parent3">
        <div className="pm-wrapper1">
          <div className="pm3">20 -12-2003 02:02 PM</div>
        </div>
        <div className="no-answer-button-group">
          <Button
            className="no-answer-button6"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#f73f3f",
              fontSize: "20",
              borderColor: "#f73f3f",
              borderRadius: "15px",
              "&:hover": { borderColor: "#f73f3f" },
              width: 124,
              height: 41.3,
            }}
          >
            Inbound
          </Button>
          <div className="wrapper4">
            <div className="div6">7890864534</div>
          </div>
        </div>
        <div className="wrapper5">
          <div className="div7">102</div>
        </div>
      </div>
      <div className="name3">{`Name `}</div>
      <div className="no-answer-button7" style={noAnswerButtonStyle}>
        <div className="no-answer-button-child2" />
        <div className="no-anwser2">No Anwser</div>
      </div>
    </div>
  );
};

export default HistoryBoard;
