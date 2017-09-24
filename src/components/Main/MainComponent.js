import React from 'react';
import {
  chain,
  has,
  groupBy,
  keys,
  map,
  mapKeys,
  mapValues,
  range
} from 'lodash';
import { format, startOfDay, differenceInDays } from 'date-fns';
import { Grid, RowHeader, ColumnHeader, Row, Cell, Block } from './style';
import taskList from '../../data/taskList.json';

const CELL_WIDTH = 32;
const DAY_MS = 86400000;

const listRange = range(
  parseInt(
    format(
      startOfDay(
        chain(taskList)
          .minBy('startDate')
          .get('startDate')
          .value()
      ),
      'x'
    ),
    10
  ),
  parseInt(
    format(
      startOfDay(
        chain(taskList)
          .maxBy('dueDate')
          .get('dueDate')
          .value()
      ),
      'x'
    ),
    10
  ) + DAY_MS,
  DAY_MS
);

const dateRange = chain(listRange)
  .map(timestamp => ({
    day: format(timestamp, 'DD'),
    monthYear: format(timestamp, 'MMM YYYY'),
    timestamp
  }))
  .groupBy('monthYear')
  .value();

const _groupBy = 'assignee';
const groupData = groupBy(taskList, _groupBy);
const dataKeyList = keys(groupData);
const groupByTime = mapValues(groupData, value =>
  mapKeys(groupBy(value, 'startDate'), (value, key) =>
    format(startOfDay(parseInt(key, 10)), 'x')
  )
);

function renderCell(value, time) {
  if (has(groupByTime[value], time)) {
    return map(groupByTime[value][time], (item, index) => {
      // Add 1 to include both days
      const dayOffset = parseInt(
        differenceInDays(item.dueDate, item.startDate) + 1,
        10
      );
      return (
        <Block
          key={index}
          width={`${CELL_WIDTH * dayOffset}px`}
          title={`${item.assignee} ${item.taskTitle} ${new Date(
            item.startDate
          )} ${new Date(item.dueDate)}`}
        />
      );
    });
  }
  return null;
}

const Main = () => (
  <Grid>
    <div />
    <ColumnHeader>
      {map(dateRange, (dateList, key) => (
        <div key={key}>
          <Row justifyContent="center">{key}</Row>
          <Row>
            {map(dateList, (item, index) => (
              <Cell key={index}>{item.day}</Cell>
            ))}
          </Row>
        </div>
      ))}
    </ColumnHeader>
    <div>
      {map(dataKeyList, (value, index) => (
        <RowHeader key={index}>{value}</RowHeader>
      ))}
    </div>
    <div>
      {map(dataKeyList, (value, index) => (
        <Row key={index}>
          {map(dateRange, (dateList, key) => (
            <Row key={key}>
              {map(dateList, (item, index) => (
                <Cell key={index}>{renderCell(value, item.timestamp)}</Cell>
              ))}
            </Row>
          ))}
        </Row>
      ))}
    </div>
  </Grid>
);

export default Main;
