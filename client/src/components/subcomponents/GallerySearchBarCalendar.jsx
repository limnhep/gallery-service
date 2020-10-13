import React from 'react';
import {
  NavBarSearchExpandedCalendarModal,
  CalendarModal,
  CalendarModalMonthContainer,
  CalendarModalHeading,
  CalendarModalHeadingWeekContainer,
  CalendarModalHeadingWeek,
  CalendarModalBody,
  CalendarModalBodyDayBoxDiv,
  CalendarModalBodyDayBox,
  CalendarModalBodyDayText,
  CalendarModalButtonContainer,
  CalendarModalNavigationButton,
  CalendarAdditionDaysContainers,
  CalendarAdditionDays,
  CalendarAdditionDaysButton,
} from '../../../styled/galleryNavBar';

const GallerySearchBarCalendar = ({
  props, setMonthIndex, setCalendarDate, setExtraDays, setHoveredDate,
}) => {
  // const [hoveredDate, setHoveredDate] = useState(null);

  const {
    calendar, hoveredDate, startDate, endDate, selectedMonthIndex, extraDays, searchBarState,
  } = props;

  // Determine today's day from javascript date library.
  const currentMonth = Date().split(' ')[1];
  const currentDay = Number(Date().split(' ')[2]);
  const currentYear = Number(Date().split(' ')[3]);

  // Find index of the current Month of the calendar to populate all the days in the for loop.
  const currentMonthIndex = calendar.findIndex((month) => month[0].split(' ')[0].substring(0, 3) === currentMonth && month[0].split(' ')[1].substring(0, 4) === currentYear.toString());

  const renderCalendar = (monthIndex, left = false) => {
    const calendarDays = [];
    const [Heading, dayGap, days] = calendar[monthIndex];

    // this month and year that this function is rendering.
    const renderedMonth = Heading.split(' ')[0].substring(0, 3);
    const renderedYear = Heading.split(' ')[1];

    // Assign and destructure user selected dates from calendar, if any;
    let userSelectedYearFrom;
    let userSelectedMonthFrom;
    let userSelectedDayFrom;
    let userSelectedYearTo;
    let userSelectedMonthTo;
    let userSelectedDayTo;
    let hoveredYear;
    let hoveredMonth;
    let hoveredDay;

    // Establish a month chart value to associate a month to a value for comparison to find if the current month rendered is between the user selected dates.
    const monthMapChart = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };

    if (startDate) {
      [userSelectedYearFrom, userSelectedMonthFrom, userSelectedDayFrom] = startDate;
    }
    if (endDate) {
      [userSelectedYearTo, userSelectedMonthTo, userSelectedDayTo] = endDate;
    }
    if (hoveredDate) {
      [hoveredYear, hoveredMonth, hoveredDay] = hoveredDate;
    }

    for (let i = 0; i < dayGap + days; i += 1) {
      if (i < dayGap) {
        calendarDays.push(<CalendarModalBodyDayBox key={Math.random()} />);
      } else {
        // Calculated the day
        const renderedDay = i + 1 - dayGap;
        const firstDayOfTheMonth = i === dayGap;
        const lastDayOfTheMonth = i === (dayGap + days - 1);
        // Check VALID to see if the Day is in the PAST then it'll be rendered greyed out color; otherwise it is VALID and is USER selectable.
        const validDay = ((currentMonthIndex === monthIndex && currentDay <= renderedDay) || currentMonthIndex < monthIndex || currentYear < renderedYear);
        // Check to see if the day matches the User selected day for rendering.. 3 Conditions: On, or Between;
        let validUserSelectedDate;
        let forwardStyling;
        let backwardStyling;
        let betweenStyling;

        if (startDate) {
          // Check to see if User selected date matches with the calendar day this is current rendering.
          if (userSelectedYearFrom === renderedYear && userSelectedMonthFrom === renderedMonth && userSelectedDayFrom === renderedDay) {
            forwardStyling = true;
            validUserSelectedDate = true;
          }
        }

        if (endDate) {
          // Check to see if User selected date matches with the calendar day this is current rendering.
          if (userSelectedYearTo === renderedYear && userSelectedMonthTo === renderedMonth && userSelectedDayTo === renderedDay) {
            backwardStyling = true;
            validUserSelectedDate = true;
          }
        }

        if (startDate && endDate) {
          const userSelectedMonthFromValue = monthMapChart[userSelectedMonthFrom];
          const userSelectedMonthToValue = monthMapChart[userSelectedMonthTo];
          const renderedMonthValue = monthMapChart[renderedMonth];
          // See if the Rendered Current Year falls between user selected Year
          // UserSelectedYearFrom < renderedYear < UserSelectedYearTo

          // if (userSelectedYearFrom <= renderedYear && userSelectedYearTo >= renderedYear) {
          //   console.log('here');

          // See if the Rendered Current Month falls between user selected Month
          // Map Each month to a value for mathematical comparison
          // UserSelectedMonthFrom < renderedMonth < UserSelectedMonthTo
          if (userSelectedMonthFromValue === renderedMonthValue && userSelectedMonthToValue === renderedMonthValue) {
            if (userSelectedDayFrom < renderedDay && userSelectedDayTo > renderedDay) betweenStyling = true;
          } else if (userSelectedMonthFromValue <= renderedMonthValue && userSelectedMonthToValue >= renderedMonthValue) {
            // See if the Rendered Current Day falls between user selected Year
            // UserSelectedDayFrom < renderedDay < UserSelectedDayTo
            if (userSelectedMonthToValue > renderedMonthValue) {
              betweenStyling = true;
            } else if (userSelectedDayFrom < renderedDay && userSelectedDayTo > renderedDay) {
              betweenStyling = true;
            }
            if (userSelectedMonthFromValue === renderedMonthValue && userSelectedDayFrom >= renderedDay) {
              betweenStyling = false;
            }
            if (userSelectedMonthToValue === renderedMonthValue && userSelectedDayTo > renderedDay) {
              betweenStyling = true;
            }
          } else if (userSelectedYearFrom < userSelectedYearTo) {
            if (renderedYear > userSelectedYearFrom && renderedMonthValue === userSelectedMonthToValue && renderedDay < userSelectedDayTo) {
              betweenStyling = true;
            } else if (renderedYear > userSelectedYearTo && renderedMonthValue === userSelectedMonthFromValue && renderedDay > userSelectedDayFrom) {
              betweenStyling = true;
            } else if (renderedYear === userSelectedYearFrom && renderedMonthValue === userSelectedMonthFromValue && renderedDay > userSelectedDayFrom) {
              betweenStyling = true;
            } else if (renderedYear === userSelectedYearTo && renderedMonthValue === userSelectedMonthToValue && renderedDay < userSelectedDayTo) {
              betweenStyling = true;
            } else if (renderedYear > userSelectedYearFrom && renderedMonthValue < userSelectedMonthToValue) {
              betweenStyling = true;
            } else if (renderedYear < userSelectedYearTo && renderedMonthValue > userSelectedMonthFromValue) {
              betweenStyling = true;
            }
          }
        }

        if (startDate && !endDate) {
        // Check to see if hoveredDate matches the renderedDate and conditionally render the grey styled in between.
        // DO NOT TOUCH
        // COMPLETE // DANGEROUS
          const hoveredMonthValue = monthMapChart[hoveredMonth];
          const renderedMonthValue = monthMapChart[renderedMonth];
          const userSelectedMonthFromValue = monthMapChart[userSelectedMonthFrom];
          [userSelectedYearFrom, userSelectedMonthFrom, userSelectedDayFrom] = startDate;

          // TEST SCRIPT
          // console.log('-------------------------------------------------');
          // console.log('-------------------------------------------------');
          // console.log(`hoveredYear : ${hoveredYear}`);
          // console.log(`hoveredMonthValue : ${hoveredMonthValue}`);
          // console.log(`hoveredDay : ${hoveredDay}`);
          // console.log('-------------------------------------------------');
          // console.log(`userSelectedYearFrom : ${userSelectedYearFrom}`);
          // console.log(`userSelectedMonthFromValue : ${userSelectedMonthFromValue}`);
          // console.log(`userSelectedDayFrom : ${userSelectedDayFrom}`);
          // console.log('-------------------------------------------------');
          // console.log(`renderedYear : ${renderedYear}`);
          // console.log(`renderedMonthValue : ${renderedMonthValue}`);
          // console.log(`renderedDay : ${renderedDay}`);
          // console.log('----------------- Case 1 -----------------');

          // Check and toggle BLACK CIRCLLE for the valid dates that falls after START DATE ON HOVER.
          if (hoveredDay === renderedDay && hoveredMonthValue === renderedMonthValue && hoveredYear >= renderedYear) {
            if (hoveredYear === userSelectedYearFrom && hoveredMonthValue >= userSelectedMonthFromValue && hoveredDay >= userSelectedDayFrom) {
              validUserSelectedDate = true;
              backwardStyling = true;
            } else if (hoveredYear > userSelectedYearFrom) {
              validUserSelectedDate = true;
              backwardStyling = true;
            } else if (hoveredYear === userSelectedYearFrom && hoveredMonthValue > userSelectedMonthFromValue) {
              validUserSelectedDate = true;
              backwardStyling = true;
            }
          }

          // Check and toggle GREY BACKGROUND LOGIC for the valid dates that BETWEEN START DATE AND HOVERED DATE;
          if (renderedYear >= userSelectedYearFrom && renderedMonthValue > userSelectedMonthFromValue && renderedYear <= hoveredYear && renderedMonthValue < hoveredMonthValue) {
            betweenStyling = true;
          } else if (hoveredMonthValue === userSelectedMonthFromValue) {
            if (renderedDay > userSelectedDayFrom && renderedDay < hoveredDay && renderedMonthValue === hoveredMonthValue) {
              betweenStyling = true;
            }
          } else if (hoveredYear === userSelectedYearFrom && renderedMonthValue === userSelectedMonthFromValue) {
            if (renderedDay > userSelectedDayFrom && hoveredMonthValue >= renderedMonthValue) {
              betweenStyling = true;
            }
          } else if (hoveredYear >= userSelectedYearFrom && renderedMonthValue === hoveredMonthValue && renderedMonthValue >= userSelectedMonthFromValue) {
            if (renderedDay < hoveredDay) {
              betweenStyling = true;
            }
          } else if (userSelectedYearFrom < hoveredYear) {
            if (renderedYear === hoveredYear && renderedDay < hoveredDay && renderedMonthValue <= hoveredMonthValue) {
              betweenStyling = true;
            } else if (renderedYear === userSelectedYearFrom && renderedMonthValue > userSelectedMonthFromValue) {
              betweenStyling = true;
            } else if (renderedYear === userSelectedYearFrom && renderedMonthValue === userSelectedMonthFromValue && renderedDay > userSelectedDayFrom) {
              betweenStyling = true;
            } else if (renderedYear === hoveredYear && renderedMonthValue < hoveredMonthValue) {
              betweenStyling = true;
            }
          } else if (userSelectedYearFrom < hoveredYear && renderedMonthValue >= userSelectedMonthFromValue && renderedYear === userSelectedYearFrom) {
            betweenStyling = true;
          }
        }

        // push calendar days with styling to the calendarDays array for rendering.
        calendarDays.push(
          <CalendarModalBodyDayBoxDiv
            key={Math.random()}
            forwardStyling={forwardStyling}
            backwardStyling={backwardStyling}
            betweenStyling={betweenStyling}
            betweenStylingFirstBox={!!(firstDayOfTheMonth && betweenStyling)}
            betweenStylingLastBox={!!(lastDayOfTheMonth && betweenStyling)}
            onMouseLeave={startDate && !endDate ? () => setHoveredDate(null) : undefined}
            onMouseEnter={startDate && !endDate ? () => setHoveredDate([renderedYear, renderedMonth, renderedDay]) : undefined}
          >
            <CalendarModalBodyDayBox
              onClick={validDay ? () => setCalendarDate([renderedYear, renderedMonth, renderedDay]) : undefined}
              validDay={validDay}
              renderBackgroundBlack={validUserSelectedDate}
              betweenStyling={betweenStyling}
            >
              <CalendarModalBodyDayText
                validDay={validDay}
                renderBackgroundBlack={validUserSelectedDate}
              >
                {renderedDay}
              </CalendarModalBodyDayText>
            </CalendarModalBodyDayBox>
          </CalendarModalBodyDayBoxDiv>,

        );
      }
    }

    return (
      <CalendarModalMonthContainer>
        <CalendarModalHeading>
          {Heading}
          <CalendarModalButtonContainer left={left} onClick={left ? () => setMonthIndex(selectedMonthIndex - 1) : () => setMonthIndex(selectedMonthIndex + 1)}>
            {left ? <CalendarModalNavigationButton src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/left-arrow.png" /> : <CalendarModalNavigationButton src="https://airbnb-bougie.s3-us-west-1.amazonaws.com/icons/right-arrow.png" />}
          </CalendarModalButtonContainer>
          <CalendarModalHeadingWeekContainer>
            <CalendarModalHeadingWeek>
              Su
            </CalendarModalHeadingWeek>
            <CalendarModalHeadingWeek>
              Mo
            </CalendarModalHeadingWeek>
            <CalendarModalHeadingWeek>
              Tu
            </CalendarModalHeadingWeek>
            <CalendarModalHeadingWeek>
              We
            </CalendarModalHeadingWeek>
            <CalendarModalHeadingWeek>
              Th
            </CalendarModalHeadingWeek>
            <CalendarModalHeadingWeek>
              Fr
            </CalendarModalHeadingWeek>
            <CalendarModalHeadingWeek>
              Sa
            </CalendarModalHeadingWeek>
          </CalendarModalHeadingWeekContainer>
        </CalendarModalHeading>
        <CalendarModalBody>
          {calendarDays}
        </CalendarModalBody>
      </CalendarModalMonthContainer>
    );
  };
  return (
    <NavBarSearchExpandedCalendarModal>
      <CalendarModal extraDays={startDate && endDate && searchBarState !== 7}>
        {renderCalendar(selectedMonthIndex, true)}
        {renderCalendar(selectedMonthIndex + 1)}
      </CalendarModal>
      {(startDate && endDate && searchBarState !== 7)
      && (
      <CalendarAdditionDaysContainers>
        <CalendarAdditionDays>
          <CalendarAdditionDaysButton days={extraDays === null} onClick={() => setExtraDays(null)}>
            Exact dates
          </CalendarAdditionDaysButton>
          <CalendarAdditionDaysButton days={extraDays === '1'} onClick={() => setExtraDays('1')}>
            ±1 day
          </CalendarAdditionDaysButton>
          <CalendarAdditionDaysButton days={extraDays === '3'} onClick={() => setExtraDays('3')}>
            ±3 days
          </CalendarAdditionDaysButton>
          <CalendarAdditionDaysButton days={extraDays === '7'} onClick={() => setExtraDays('7')}>
            ±7 days
          </CalendarAdditionDaysButton>
        </CalendarAdditionDays>
      </CalendarAdditionDaysContainers>
      )}
    </NavBarSearchExpandedCalendarModal>
  );
};

export default GallerySearchBarCalendar;
