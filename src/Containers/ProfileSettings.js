
/* React */
import React from 'react'
import { connect } from 'react-redux'

/* Actions */
//import Actions from '../Actions/Creators'

/* Selectors */
//import { getMe } from 'boosh-react-auth'
import { getNav } from '../Selectors/SettingsSelector'

/* Components */
import { Row, Column } from 'react-foundation'
import { Portlet, Nav } from 'boosh-react-components'

/* Forms */
import ProfileSettingsForm from '../Forms/ProfileSettingsForm'

class ProfileSettings extends React.Component {

  render() {

    let { nav } = this.props;

    let title = "Profile Settings";

    return (
      <div className="page">
        <Row className="display">
          <Column small={12} medium={4} >
            <Portlet className={'portlet-nopad'} title={title} items={<Nav isVertical={true} items={nav} />} />
          </Column>
          <Column small={12} medium={8}  >
            <Portlet title={title} items={<ProfileSettingsForm/>} />
          </Column>
        </Row>
      </div>
    );

  }

}

ProfileSettings.propTypes = {
  nav: React.PropTypes.array
}

ProfileSettings.defaultProps = {
  nav: []
}

const mapStateToProps = (state, props) => {
  return {
    //me: getMe(state, props),
    nav: getNav(state, props)
  }
}

export default connect(mapStateToProps)(ProfileSettings)
