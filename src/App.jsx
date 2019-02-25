import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'global.css';

import Layout from 'components/Layout';
import Card from 'components/Card';
import Add from 'components/Add';
import { updatePosition, addCard } from 'actions/cards';

const App = ({ items, update, add }) => {
  const updateStore = (id, { x, y }) => {
    update(id, { x, y });
  };
  return (
    <Layout>
      {items.map(i => (
        <Card
          key={i.id}
          updateStore={updateStore}
          card={i}
        >
          {i.content}
        </Card>
      ))}
      <Add add={add} />
    </Layout>
  );
};

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  update: (id, pos) => dispatch(updatePosition(id, pos)),
  add: (card) => dispatch(addCard(card)),
});

App.propTypes = {
  items: PropTypes.array,
  update: PropTypes.func,
  add: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
