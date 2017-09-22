import React from 'react';

const grid = {
  display: 'grid',
  gridTemplateColumns: '100px auto'
};

const cell = {
  width: '32px',
  height: '24px',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
};

const block = {
  position: 'absolute',
  width: '32px',
  height: '16px',
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  top: '4px',
  left: 0
};

const row = {
  display: 'flex',
  flexDirection: 'row'
};

const time = [
  {
    assignee: 'John',
    startDate: 1506025406010,
    dueDate: 1507025608760,
    taskTitle: 'Go to home.'
  }
];

const Main = () => (
  <div style={grid}>
    <div />
    <div style={row}>
      <div style={cell}>1</div>
      <div style={cell}>2</div>
      <div style={cell}>3</div>
      <div style={cell}>4</div>
      <div style={cell}>5</div>
      <div style={cell}>6</div>
      <div style={cell}>7</div>
      <div style={cell}>8</div>
      <div style={cell}>9</div>
      <div style={cell}>10</div>
      <div style={cell}>11</div>
      <div style={cell}>12</div>
      <div style={cell}>13</div>
      <div style={cell}>14</div>
      <div style={cell}>15</div>
      <div style={cell}>16</div>
      <div style={cell}>17</div>
      <div style={cell}>18</div>
      <div style={cell}>19</div>
      <div style={cell}>20</div>
      <div style={cell}>21</div>
      <div style={cell}>22</div>
      <div style={cell}>23</div>
      <div style={cell}>24</div>
      <div style={cell}>25</div>
      <div style={cell}>26</div>
      <div style={cell}>27</div>
      <div style={cell}>28</div>
      <div style={cell}>29</div>
      <div style={cell}>30</div>
    </div>
    <div>
      <div style={cell}>First</div>
      <div style={cell}>Second</div>
    </div>
    <div>
      <div style={row}>
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell}>
          <div style={block} />
        </div>
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
      </div>
      <div style={row}>
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
        <div style={cell} />
      </div>
    </div>
  </div>
);

export default Main;
