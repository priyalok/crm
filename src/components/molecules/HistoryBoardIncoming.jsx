import { useMemo } from "react";
import "../atoms/HistoryBoardIncoming.css";

const HistoryBoardIncoming = ({
  propBackgroundColor,
  propPadding,
  propBackgroundColor1,
  propPadding1,
  propPadding2,
}) => {
  const historyBoardIncomingStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const noAnswerButton1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const noAnswerButton2Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className="history-board-incoming1" style={historyBoardIncomingStyle}>
      <div className="history-board-incoming-item" style={rectangleDiv1Style} />
      <div className="more-vert-frame">
        <img className="more-vert-icon4" alt="" src="/more-vert.svg" />
      </div>
      <div className="frame-parent4">
        <div className="pm-wrapper2">
          <div className="pm4">20 -12-2003 02:02 PM</div>
        </div>
        <div className="no-answer-button-wrapper2">
          <div className="no-answer-button8" style={noAnswerButton1Style}>
            <div className="no-answer-button-child3" />
            <div className="incoming">Incoming</div>
          </div>
        </div>
        <div className="wrapper6">
          <div className="div8">7890864534</div>
        </div>
        <div className="no-answer-button-wrapper3">
          <div className="no-answer-button9" style={noAnswerButton2Style}>
            <div className="no-answer-button-child4" />
            <div className="answered">Answered</div>
          </div>
        </div>
      </div>
      <div className="wrapper7">
        <div className="div9">
          <p className="p1">84</p>
        </div>
      </div>
      <div className="name-frame">
        <div className="name4">{`Name `}</div>
      </div>
    </div>
  );
};

export default HistoryBoardIncoming;
