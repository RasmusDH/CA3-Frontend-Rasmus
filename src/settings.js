const USER_BASE =
  "https://ditlevsoftware.com/tomcat/StartcodeCA3/api"
const INFO_BASE =
  "https://ditlevsoftware.com/tomcat/StartcodeCA3/api/info"
const BEER_BASE = "https://ditlevsoftware.com/tomcat/StartcodeCA3/api/beer"
const USER = {
  LOGIN: `${USER_BASE}/login`,
}

const INFO = {
  USER: `${INFO_BASE}/user`,
  ADMIN: `${INFO_BASE}/admin`,
  FETCH_MANY: `${INFO_BASE}/fetchMany`,
  FETCH_ONE: `${INFO_BASE}/fetchData`,
}

const BEER = {
  BUY_BEER: BEER_BASE,
  GET_BEER_FROM_USER: BEER_BASE,
  FETCH_BEER: `${BEER_BASE}/fetchbeer`

}

export {USER, INFO, BEER}
