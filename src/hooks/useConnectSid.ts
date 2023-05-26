import { useExec } from "@raycast/utils";
import React from "react";
import * as crypto from "crypto";

function resolveConnectSid(connectSidHex: string, browserKeyHex: string) {
  const encryptedValueWithoutHeader = Buffer.from(connectSidHex, "hex").slice(3);

  const pass = Buffer.from(browserKeyHex, "hex");

  const salt = Buffer.from("saltysalt");
  const iv = Buffer.alloc(16, " "); // An empty initialization vector
  const keyLength = 16;

  const iterations = 1003;
  const key = crypto.pbkdf2Sync(pass, salt, iterations, keyLength, "sha1");

  const cipher = crypto.createDecipheriv("aes-128-cbc", key, iv);

  const decrypted = cipher.update(encryptedValueWithoutHeader);
  return decrypted.toString("ascii") + cipher.final("ascii");
}

function useBrowserKeyHex() {
  const res = useExec(`security find-generic-password -s "Arc Safe Storage" -g -w`, { shell: true });

  if (res.isLoading) {
    return {
      isLoading: true,
    };
  }

  if (res.error) {
    return {
      isLoading: false,
      error: res.error,
    };
  }

  const browserKey = res.data;

  if (!browserKey) {
    throw new Error("No browser key found");
  }

  return {
    isLoading: false,
    browserKeyHex: Buffer.from(browserKey).toString("hex"),
  };
}

function useConnectSidHex() {
  const res = useExec(
    `sqlite3 ~/Library/Application\\ Support/Arc/User\\ Data/Default/Cookies "select hex(encrypted_value) from cookies where host_key='replit.com' and name='connect.sid'"`,
    { shell: true }
  );

  if (res.isLoading) {
    return {
      isLoading: true,
    };
  }

  if (res.error) {
    return {
      isLoading: false,
      error: res.error,
    };
  }

  const connectSidHex = res.data;

  if (!connectSidHex) {
    return {
      isLoading: false,
      error: "No connect.sid found",
    };
  }

  return {
    isLoading: false,
    connectSidHex: connectSidHex,
  };
}

export default function useConnectSid() {
  const { browserKeyHex } = useBrowserKeyHex();
  const { connectSidHex } = useConnectSidHex();

  const connectSid = React.useMemo(() => {
    if (!connectSidHex || !browserKeyHex) {
      return;
    }
    return resolveConnectSid(connectSidHex, browserKeyHex);
  }, [connectSidHex, browserKeyHex]);

  return connectSid;
}
