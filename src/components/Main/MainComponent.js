import React from 'react';
import {
  assign,
  chain,
  get,
  has,
  groupBy,
  keys,
  map,
  mapValues,
  range
} from 'lodash';
import {
  addDays,
  format,
  startOfMonth,
  endOfMonth,
  getDate,
  differenceInDays
} from 'date-fns';
import { Grid, GridHeader, Row, Cell, Block } from './style';
import taskList from '../../data/taskList.json';

const CELL_WIDTH = 32;

const _groupBy = 'taskTitle';
const groupData = groupBy(taskList, _groupBy);
const dataKeyList = keys(groupData);
const groupByTime = mapValues(groupData, (value, key) =>
  groupBy(value, 'startDate')
);

const dateRange = range(getDate(endOfMonth(new Date())));

function renderCell(value, item) {
  const time = format(addDays(startOfMonth(new Date()), item), 'x');
  if (has(groupByTime[value], time)) {
    return map(groupByTime[value][time], (item, index) => {
      const dayOffset = differenceInDays(item.dueDate, item.startDate);
      return (
        <Block
          key={index}
          width={`${CELL_WIDTH * dayOffset}px`}
          title={item.assignee}
        />
      );
    });
  }
  return null;
}

const Main = () => (
  <Grid>
    <div />
    <Row>
      {map(dateRange, (day, index) => <Cell key={index}>{day + 1}</Cell>)}
    </Row>
    <div>
      {map(dataKeyList, (value, index) => (
        <GridHeader key={index}>{value}</GridHeader>
      ))}
    </div>
    <div>
      {map(dataKeyList, (value, index) => (
        <Row key={index}>
          {map(dateRange, (item, index) => (
            <Cell key={index}>{renderCell(value, item)}</Cell>
          ))}
        </Row>
      ))}
    </div>
  </Grid>
);

export default Main;
