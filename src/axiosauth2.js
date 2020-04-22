
import mconfig from "./config"
import Qs from 'qs';//用于表单提交数据格式
export function login () {
  var authorUrl = mconfig.config.userAuthorizationUri;
  authorUrl = authorUrl + ('?' + Qs.stringify({
    client_id: mconfig.config.clientId,
    response_type: mconfig.config.response_type,
    scope: mconfig.config.scope,
    state: mconfig.config.state,
    redirect_uri: mconfig.config.redirect_uri,
  }))
  window.location.href = authorUrl;
}


