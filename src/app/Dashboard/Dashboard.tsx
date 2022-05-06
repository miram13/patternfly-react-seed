import * as React from 'react';

import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { string } from 'prop-types';
import axios from 'axios';
import { PageSection } from '@patternfly/react-core';

const Dashboard: React.FunctionComponent = () => {
const [lists, setLists] = React.useState([])

const listtable = {
  name: 'name',
  id: 'id'
};


  React.useEffect(() => {
    const getUsers = async () => {
        const response = await axios.get(`https://api.github.com/users`);
        setLists(response.data);
    };
    getUsers();
    
  }, []);
console.log(lists)
return(
  <PageSection>
    <TableComposable
        aria-label="Simple table"
      
      >
      <Caption>Table</Caption>
      <Thead>
      
            <Tr>
            <Th>{listtable.name}</Th>
            <Th>{listtable.id}</Th>
            </Tr>
            
      </Thead>
        
      <Tbody>
          {lists.map(repo => {
            return(
              <Tr>
              <Td dataLabel={listtable.name}>{repo.login}</Td>
              <Td dataLabel={listtable.id}>{repo.id}</Td>
            </Tr>
            )
            
})}
        </Tbody>
         
</TableComposable>
  </PageSection>
)

};
export { Dashboard };
