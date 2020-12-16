import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyComponent = (props) => (
  <div>
    <b><Text field={props.fields.heading} /></b>
	<br/>
	
	Description : <Text field={props.fields.Description} />
	
  </div>
);

export default MyComponent;
