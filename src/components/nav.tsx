import * as React from 'react';
import "./nav.css"

interface INavItem {
  children?: INavItem[],
  name: string,
}

export interface INavItemProps {
  navItem: INavItem
  key: string
  callback(navItem: INavItem): void
}

export interface INavComponent {
  navList: INavItem[]
}

function NavItemComponent (props: INavItemProps) {
  const change = () => {
    props.callback(props.navItem)
  }
  return (
    <li onClick={change}>
      <span>{props.navItem.name}</span>
    </li>
  );
}

class NavComponent extends React.Component {
  constructor(props: INavComponent) { 
    super(props);
    this.state = { 
      actived: '1',
    };
  }

  public handleChange(navItem: INavItem): void {
    this.setState({actived: navItem.name});
  }

  public render(): JSX.Element {
    const navList = [{
      name: 'Web前端',
      url: '/web'
    }, {
      name: 'NodeJS',
    }, {
      name: 'Mobile',
    }];
    const callback = this.handleChange.bind(this);
    return (
      <div className="nav-list">
        <ul>
        { 
          navList.map( (nav: INavItem) => {
            return <NavItemComponent key={nav.name} navItem={nav} callback={callback}/>
          })
        }
        </ul>
      </div>
    )
  }
}

export default NavComponent