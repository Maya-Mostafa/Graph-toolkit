import * as React from 'react';
import styles from './GraphToolkit.module.scss';
import { IGraphToolkitProps } from './IGraphToolkitProps';

import { Person, PersonCard } from '@microsoft/mgt-react/dist/es6/spfx';
import { ViewType } from '@microsoft/mgt-spfx';

export default class GraphToolkit extends React.Component<IGraphToolkitProps, {}> {
  public render(): React.ReactElement<IGraphToolkitProps> {
    return (
      <div className={ styles.graphToolkit }>
        <Person personQuery="me" view={ViewType.image}></Person>
        <PersonCard personQuery="me"  />
      </div>
    );
  }
}
