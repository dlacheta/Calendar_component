import React from "react";

const tableGenerate = (
  month,
  year,
  availableDates,
  checkInVisible,
  pickCheckIn,
  pickCheckOut
) => {
  const table = [];
  const dayOfWeek = new Date(year, month, 1).getDay();
  const amountOfDays = new Date(year, month + 1, 0).getDate();
  const amountOfWeeks = Math.ceil((amountOfDays + dayOfWeek) / 7);
  for (let i = 0; i < amountOfWeeks; i++) {
    let children = [];
    if (dayOfWeek > 0 && i == 0) {
      children.push(<td key={0} colSpan={dayOfWeek} className="empty" />);
      for (let j = 1; j < 8 - dayOfWeek; j++) {
        children.push(
          <td
            onClick={
              availableDates.includes(
                `${j + i * 7 - dayOfWeek}/${month + 1}/${year}`
              )
                ? checkInVisible
                  ? () => {
                      const day =
                        j + i * 7 - dayOfWeek < 10
                          ? `0${j + i * 7 - dayOfWeek}`
                          : j + i * 7 - dayOfWeek;
                      return pickCheckIn(`${day}/${month + 1}/${year}`);
                    }
                  : () => {
                      const day =
                        j + i * 7 - dayOfWeek < 10
                          ? `0${j + i * 7 - dayOfWeek}`
                          : j + i * 7 - dayOfWeek;
                      return pickCheckOut(`${day}/${month + 1}/${year}`);
                    }
                : null
            }
            className={
              availableDates.includes(
                `${j + i * 7 - dayOfWeek}/${month + 1}/${year}`
              )
                ? "available"
                : null
            }
            key={j}
          >
            {i == 0 ? j : j + i * 7 - dayOfWeek}
          </td>
        );
      }
    } else {
      for (let j = 1; j < 8; j++) {
        if (j + i * 7 - dayOfWeek <= amountOfDays) {
          children.push(
            <td
              onClick={
                availableDates.includes(
                  `${j + i * 7 - dayOfWeek}/${month + 1}/${year}`
                )
                  ? checkInVisible
                    ? () => {
                        const day =
                          j + i * 7 - dayOfWeek < 10
                            ? `0${j + i * 7 - dayOfWeek}`
                            : j + i * 7 - dayOfWeek;
                        return pickCheckIn(`${day}/${month + 1}/${year}`);
                      }
                    : () => {
                        const day =
                          j + i * 7 - dayOfWeek < 10
                            ? `0${j + i * 7 - dayOfWeek}`
                            : j + i * 7 - dayOfWeek;
                        return pickCheckOut(`${day}/${month + 1}/${year}`);
                      }
                  : null
              }
              className={
                availableDates.includes(
                  `${j + i * 7 - dayOfWeek}/${month + 1}/${year}`
                )
                  ? "available"
                  : null
              }
              key={j}
            >
              {i == 0 ? j : j + i * 7 - dayOfWeek}
            </td>
          );
        }
      }
    }
    table.push(<tr key={i}>{children}</tr>);
  }
  return table;
};

export default tableGenerate;
