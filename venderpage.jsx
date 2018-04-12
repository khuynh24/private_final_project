import React from 'react';
import { Grid, Header, Form } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' columns={4} centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Item</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input center label='Menu Item' placeholder='Menu Item'/>
              </Form.Group>
              <Form.TextArea label='Description' placeholder='Tell us more about this item...'/>
              <Form.Button>Add Item</Form.Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>

          <Grid.Column>





          </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
