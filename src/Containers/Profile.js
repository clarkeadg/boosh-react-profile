
/* React */
import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

/* Actions */
import { UsersActions } from 'boosh-react-users'

/* Selectors */
import { getUserByUsername } from 'boosh-react-users'
import { getMe } from 'boosh-react-auth'
import { getUsername, getSlug, getPageNumber } from '../Selectors/ProfileSelector'

/* Sagas */
//import GetUsersSaga from '../Sagas/Preloaders/GetUsersSaga'

import { ActivitiesCollection } from 'boosh-react-activity'
//import { CommentsCollection } from 'boosh-react-comments'
import { FavoritesCollection, FavoritesButton } from 'boosh-react-favorites'
//import { FollowersCollection, FollowingCollection, FollowersSuggestionsCollection, FollowersButton } from 'boosh-react-followers'
//import { FriendsCollection, FriendsButton } from 'boosh-react-friends'
//import { GroupsCollection } from 'boosh-react-groups'
import { MessageButton } from 'boosh-react-messages'
//import { ReactionsCollection, ReactionsButton } from 'boosh-react-reactions'

/* Components */
import { Row, Column, Button, Menu, MenuItem, Breakpoints, Icon } from 'react-foundation'
//import Time from 'react-time';
//import ReactDataGrid from 'react-data-grid'
import { Portlet, Nav, Gallery } from 'boosh-react-components'
import { Link } from 'react-router'
//import ProfileActions from '../Components/ProfileActions'

class Profile extends React.Component {

  getData(username) {
    this.props.dispatch(UsersActions.getUsersAttempt({ username: username }))
    //this.props.dispatch(Actions.getCommentsAttempt('profile', username))
  }

  componentDidMount() {
    let { username } = this.props;
    if (username) {
      this.getData(username);
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.username !== this.props.username) {
      this.getData(newProps.username)
    }
  }

  renderEditProfileButton() {
    let { me, user } = this.props;
    if (me.id != user.id) return false;
    return (
      <Link to={"/settings/profile"}><Button isHollow>Edit Profile</Button></Link>
    )
  }

  render() {

    let { me, user, username, slug, pageNumber } = this.props;
    console.log('RENDER PROFILE', user, username, slug, pageNumber)
    if (!user) return false

    let title = "Profile";
    let html = "";

    let UserCoverPhotoStyle = {
      backgroundImage: 'url('+user.coverphoto+')'
    }

    return (
      <div className="profile">
        <div className="UserCoverPhotoProfile" style={UserCoverPhotoStyle} ></div>
        <div className="profile-main">
          <Row className="display">
            <Column small={12}>
              <Portlet className="profile-nav-top" title={''} items={
                <Row className="display">
                  <Column small={12} medium={12} large={3}>
                    <img className="UserPhoto UserPhotoLarge" src={user.photo} />
                  </Column>
                  <Column small={12} medium={12} large={9}>
                    <Menu>
                      <MenuItem>
                        <Link activeClassName={'active'} to={"/"+user.username+"/activity"}>
                          <span className="label">Activity</span>
                          <span className="count">0</span>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link activeClassName={'active'} to={"/"+user.username+"/following"}>
                          <span className="label">Following</span>
                          <span className="count">0</span>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link activeClassName={'active'} to={"/"+user.username+"/followers"}>
                          <span className="label">Followers</span>
                          <span className="count">0</span>
                        </Link>
                      </MenuItem>
                      { /* <MenuItem>
                        <Link activeClassName={'active'} to={"/"+user.username+"/likes"}>
                          <span className="label">Likes</span>
                          <span className="count">0</span>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link activeClassName={'active'} to={"/"+user.username+"/favorites"}>
                          <span className="label">Favorites</span>
                          <span className="count">0</span>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link activeClassName={'active'} to={"/"+user.username+"/groups"}>
                          <span className="label">Groups</span>
                          <span className="count">0</span>
                        </Link>
                      </MenuItem> */ }
                    </Menu>
                    <div className="float-right">
                      { /* <ProfileActions/> */ }
                      { /*<FollowersButton user_id={me.id} follow_id={user.id}/> */ }
                      { this.renderEditProfileButton() }
                    </div>
                    <div className="clearfix"></div>
                  </Column>
                </Row>
              }/>
            </Column>
          </Row>
          <Row className="display">
            <Column small={12} medium={4} large={3}>
              <Portlet className="portlet-clear" items={
                <div>
                  <div className="profile-meta">{user.username}</div>
                  <div className="profile-meta">@{user.username}</div>
                  <div className="profile-meta">#CHANTAJE Feat. @maluma El Nuevo Sencillo / The New Single http://smarturl.it/Chantaje</div>
                  <div className="profile-meta"><Icon name="fi-map"/>Los Angeles</div>
                  <div className="profile-meta"><Icon name="fi-link"/><a href="http://www.clarkeanimation.com" target="_blank">clarkeanimation.com</a></div>
                  { /* <div className="profile-meta"><Icon name="fi-calendar"/>Joined <Time value={user.createdAt} format="MM/DD/YYYY" /></div> */ }
                  <div className="ProfileButtons">
                    { /* <MessageButton user_id={user.id}/>
                    <FriendsButton object_group={'profile'} object_id={user.username}/>
                    <FavoritesButton object_group={'profile'} object_id={user.username}/> */ }
                    <MessageButton user_id={user.id}/>
                    { /*<ReactionsButton reaction={'Favorite'} item_type={'profile'} item_id={user.id}/>*/ }
                  </div>
                  { /* <Icon name="fi-camera"/><Link to={"/"+user.username+"/media"}>5 Photos and videos</Link>
                  <Gallery items={
                    [
                      {
                        "thumb": "img/ca/portfolio/Web_JewelMintGames.jpg",
                        "imgfull": "img/ca/portfolio/Web_JewelMintGamesBig.jpg"
                      },
                      {
                        "thumb": "img/ca/portfolio/Web_JewelMintLeaderboards.jpg",
                        "imgfull": "img/ca/portfolio/Web_JewelMintLeaderboardsBig.jpg"
                      },
                      {
                        "thumb": "img/ca/portfolio/Web_JewelMintMysteryWheel.jpg",
                        "imgfull": "img/ca/portfolio/Web_JewelMintMysteryWheelBig.jpg"
                      }
                    ]
                  }/>
                  <Nav isVertical={true} items={[
                    {"title":"Friends","url":"/"+user.username+"/friends"},
                    {"title":"Journal","url":"/"+user.username+"/journal"},
                    {"title":"Discussions","url":"/"+user.username+"/discussions"},
                    {"title":"Badges","url":"/"+user.username+"/badges"}
                  ]}/> */ }
                </div>
              }/>
            </Column>
            <Column small={12} medium={8} large={9}>
              <div>
                { this.renderSection(slug, user, pageNumber) }
              </div>
            </Column>
          </Row>
        </div>
      </div>
    );
  }

  renderSection(key, user, pageNumber) {
    switch(key) {
      case 'activity':
        return (
          <div>
            <Column medium={12} large={8}>
              <ActivitiesCollection user_id={user.id} pageNumber={pageNumber}/>
            </Column>
            <Column large={4}>
              { /*<CommentsCollection item_type={'profile'} item_id={user.id}/> /* <Portlet title={'Who to follow'} items={
                <FollowersSuggestionsCollection />
              }/>
              <Portlet title={'Trends'} items={
                <FollowersSuggestionsCollection />
              }/> */ }
            </Column>
          </div>
        )
      break;
      case 'media':
        return (
          <Portlet title={'Photos'} items={
            <Gallery items={
              [
                {
                  "thumb": "img/ca/portfolio/Web_JewelMintGames.jpg",
                  "imgfull": "img/ca/portfolio/Web_JewelMintGamesBig.jpg"
                },
                {
                  "thumb": "img/ca/portfolio/Web_JewelMintLeaderboards.jpg",
                  "imgfull": "img/ca/portfolio/Web_JewelMintLeaderboardsBig.jpg"
                },
                {
                  "thumb": "img/ca/portfolio/Web_JewelMintMysteryWheel.jpg",
                  "imgfull": "img/ca/portfolio/Web_JewelMintMysteryWheelBig.jpg"
                }
              ]
            }/>
          } />
        )
      break;
      /*case 'followers':
        return (
          <Portlet className="portlet-clear" items={
            <FollowersCollection follow_id={user.id}/>
          } />
        )
      break;

      case 'following':
        return (
          <Portlet className="portlet-clear" items={
            <FollowingCollection user_id={user.id}/>
          } />
        )
      break;
      case 'favorites':
        return (
          <Portlet title={'Favorites'} items={
            <FavoritesCollection user_id={user.id}/>
          } />
        )
      break;
      case 'likes':
        return (
          <Portlet title={'Likes'} items={
            <ReactionsCollection user_id={user.id}/>
          } />
        )
      break;
      case 'groups':
        return (
          <Portlet title={'Groups'} items={
            <GroupsCollection user_id={user.id}/>
          } />
        )
      break;
      case 'friends':
        return (
          <Portlet title={'Groups'} items={
            <FriendsCollection user_id={user.id}/>
          } />
        )
      break;*/
      default:
        return (
          <div></div>
        )
      break;
    }
  }

}

Profile.propTypes = {
  me: React.PropTypes.object,
  username: React.PropTypes.string,
  slug: React.PropTypes.string,
  pageNumber: React.PropTypes.number,
  user: React.PropTypes.object
}

Profile.defaultProps = {
  me: {},
  username: 'unknown',
  slug: 'activity',
  pageNumber: 1,
  user: {}
}

const mapStateToProps = (state, props) => {
  return {
    me: getMe(state, props),
    username: getUsername(state, props),
    slug: getSlug(state, props),
    pageNumber: getPageNumber(state, props),
    user: getUserByUsername(state, props)
  }
}

/*function preload(params, req) {
  return [
    [GetUsersSaga, {}]
  ];
}
Profile.preload = preload;*/

export default connect(mapStateToProps)(Profile)

