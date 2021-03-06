import React, {
  PropTypes as T,
} from 'react';
import radium from 'radium';

const styles = {
  container: {
    display: 'flex',
    boxSizing: 'border-box',
    padding: '0 0 0 200px',
  },
};

function App(props) {
  return (
    <div style={styles.container}>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: T.node,
};

export default radium(App);
