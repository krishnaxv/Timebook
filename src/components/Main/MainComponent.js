import React from 'react';
import { assign, has, groupBy, keys, map, mapValues, range } from 'lodash';
import {
  addDays,
  format,
  startOfMonth,
  endOfMonth,
  getDate,
  differenceInDays
} from 'date-fns';

const CELL_WIDTH = 32;

const grid = {
  display: 'grid',
  gridTemplateColumns: '196px auto'
};

const row = {
  display: 'flex',
  flexDirection: 'row'
};

const cell = {
  width: '32px',
  height: '24px',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
};

const cellHeader = {
  height: '24px',
  position: 'relative',
  alignItems: 'center',
  display: 'flex'
};

const block = {
  position: 'absolute',
  width: '32px',
  height: '16px',
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  top: '4px',
  left: 0,
  zIndex: 1
};

const data = [
  {
    assignee: 'John',
    startDate: 1504204200000,
    dueDate: 1505125608760,
    taskTitle: 'Go to home.'
  },
  {
    assignee: 'Kara',
    startDate: 1504981800000,
    dueDate: 1507025608760,
    taskTitle: 'Go to hell.'
  },
  {
    assignee: 'Ola',
    startDate: 1504204200000,
    dueDate: 1507025608760,
    taskTitle: 'Go to hell.'
  },
  {
    assignee: 'Ola',
    startDate: 1506364200000,
    dueDate: 1527025608760,
    taskTitle: 'Go to play.'
  },
  {
    assignee: 'Khola',
    startDate: 1502340006010,
    dueDate: 1507025608760,
    taskTitle: 'Go to home.'
  },
  {
    assignee: 'Jsola',
    startDate: 1506709800000,
    dueDate: 1517025608760,
    taskTitle: 'Go to home.'
  },
  {
    assignee: 'Kara',
    startDate: 1506450600000,
    dueDate: 1507025608760,
    taskTitle: 'Go to restaurant.'
  }
];

const _groupBy = 'taskTitle';
const groupData = groupBy(data, _groupBy);
const dataKeyList = keys(groupData);
const groupByTime = mapValues(groupData, (value, key) =>
  groupBy(value, 'startDate')
);

const dateRange = range(getDate(endOfMonth(new Date())));

function renderCell(value, item) {
  const time = format(addDays(startOfMonth(new Date()), item), 'x');
  if (has(groupByTime[value], time)) {
    return map(groupByTime[value][time], (item, index) => {
      const dayOffset = differenceInDays(
        new Date(item.dueDate),
        new Date(item.startDate)
      );
      return (
        <div
          key={index}
          style={assign({}, block, { width: `${CELL_WIDTH * dayOffset}px` })}
          title={item.assignee}
        />
      );
    });
  }
  return null;
}

const Main = () => (
  <div style={grid}>
    <div />
    <div style={row}>
      {map(dateRange, (day, index) => (
        <div key={index} style={cell}>
          {day + 1}
        </div>
      ))}
    </div>
    <div>
      {map(dataKeyList, (value, index) => (
        <div key={index} style={cellHeader}>
          {value}
        </div>
      ))}
    </div>
    <div>
      {map(dataKeyList, (value, index) => (
        <div key={index} style={row}>
          {map(dateRange, (item, index) => (
            <div key={index} style={cell}>
              {renderCell(value, item)}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Main;
