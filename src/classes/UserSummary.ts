import { personaStateMap, SteamPlayerSummary } from '../types';

class Avatar {
  default: string;
  medium: string;
  full: string;
}

class UserSummary {
  steamId;
  avatar: Avatar;
  personaName;
  profileUrl;
  /** Could be mapped with getPersonaState method */
  personaState;
  communityVisibilityState;
  profileState;
  lastLogoff;
  commentPermission;
  realName;
  primaryClanId;
  timeCreated;
  gameId;
  gameServerIp;
  gameExtraInfo;
  locCountyCode;
  locStateCode;
  locCityId;

  constructor(playerSummary: SteamPlayerSummary) {
    this.steamId = playerSummary.steamid;
    this.avatar = {
      default: playerSummary.avatar,
      medium: playerSummary.avatarmedium,
      full: playerSummary.avatarfull,
    };
    this.commentPermission = playerSummary.commentpermission;
    this.communityVisibilityState = playerSummary.communityvisibilitystate;
    this.gameExtraInfo = playerSummary.gameextrainfo;
    this.gameId = playerSummary.gameid;
    this.gameServerIp = playerSummary.gameserverip;
    this.timeCreated = playerSummary.timecreated;
    this.realName = playerSummary.realname;
    this.profileUrl = playerSummary.profileurl;
    this.profileState = playerSummary.profilestate;
    this.primaryClanId = playerSummary.primaryclanid;
    this.personaState = playerSummary.personastate;
    this.personaName = playerSummary.personaname;
    this.locStateCode = playerSummary.locstatecode;
    this.locCountyCode = playerSummary.loccountycode;
    this.locCityId = playerSummary.loccityid;
    this.lastLogoff = playerSummary.lastlogoff;
  }

  getPersonaState(): string | undefined {
    return personaStateMap[this.personaState];
  }
}

export default UserSummary;
