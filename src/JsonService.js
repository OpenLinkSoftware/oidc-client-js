// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from "./Log.js";
import { Global } from "./Global.js";

export class JsonService {
  constructor(
    additionalContentTypes = null,
    XMLHttpRequestCtor = Global.XMLHttpRequest,
    jwtHandler = null
  ) {
    if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
      this._contentTypes = additionalContentTypes.slice();
    } else {
      this._contentTypes = [];
    }
    this._contentTypes.push("application/json");
    if (jwtHandler) {
      this._contentTypes.push("application/jwt");
    }

    this._XMLHttpRequest = XMLHttpRequestCtor;
    this._jwtHandler = jwtHandler;
  }

  async getJson(url, token) {
    if (!url) {
      Log.error("JsonService.getJson: No url passed");
      throw new Error("url");
    }

    Log.debug("JsonService.getJson, url: ", url);
    var allowedContentTypes = this._contentTypes;
    var jwtHandler = this._jwtHandler;
    var found = null;
    var options = {method: "GET", headers:{} }

    if (token) {
      options.headers["Authorization"] = "Bearer " + token
      Log.debug("JsonService.getJson: token passed, setting Authorization header");
    }

    const rc = await fetch(url, options);
    if (rc.ok && rc.status == 200) {
      const contentType = rc.headers.get("Content-Type");
      if (contentType) {
        let found = null;
        for(const item of allowedContentTypes) 
          if (contentType.startsWith(item)) {
            found = item;
            break;
          }
        if (found === "application/jwt") {
          const req = {'responseText': await rc.text()}
          const jwt = await jwtHandler(req);
          return jwt
        }
        if (found) {
          try {
            const json = await rc.json();
            return json
          } catch(ex) {
            Log.error("JsonService.getJson: Error parsing JSON response ", ex.message);
            throw(ex)
          }
        }
        throw new Error("Invalid response Content-Type: " + contentType + ", from URL: " + url)
      }
    }
    throw new Error(rc.statusText + " (" + rc.status + ")");
  }

  async postForm(url, payload, basicAuth) {
    if (!url) {
      Log.error("JsonService.postForm: No url passed");
      throw new Error("url");
    }

    Log.debug("JsonService.postForm, url: ", url);
    var allowedContentTypes = this._contentTypes;
    var options = {method: "POST", headers:{}, body: ""}
    
    options.headers["Content-Type"] = "application/x-www-form-urlencoded"
    if (basicAuth !== undefined) {
      options.headers["Authorization"] = "Basic " + btoa(basicAuth);
    }

    let body = new URLSearchParams();
    for (let key in payload) {
      body.append(key, payload[key])
    }
    options.body = body.toString();

    const rc = await fetch(url, options);
    if (rc.ok && rc.status == 200) {
      const contentType = rc.headers.get("Content-Type");
      if (contentType) {
        let found = null;
        for(const item of allowedContentTypes) 
          if (contentType.startsWith(item)) {
            found = item;
            break;
          }
        if (found) {
          try {
            const json = await rc.json();
            return json
          } catch(ex) {
            throw new Error("JsonService.postForm: Error parsing JSON response "+ex.message)
          }
        }

        throw new Error("Invalid response Content-Type: " + contentType + ", from URL: " + url)
      }
    }
    if (rc.status === 400) {
      const contentType = rc.headers.get("Content-Type");
      if (contentType) {
        let found = null;
        for(const item of allowedContentTypes) 
          if (contentType.startsWith(item)) {
            found = item;
            break;
          }

        if (found) {
          try {
            var payload = await rc.json();
            if (payload && payload.error) {
              Log.error("JsonService.postForm: Error from server: ", payload.error);
              throw new Error(payload.error);
            }
          } catch (ex) {
            const msg = "JsonService.postForm: Error parsing JSON response: ";
            Log.error(msg, ex.message);
            throw(ex);
          }
        }
      }
    }
    throw new Error(rc.statusText + " (" + rc.status + ")");
  }

}
