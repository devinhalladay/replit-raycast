export const headers = {
  accept: "*/*",
  "Content-Type": "application/json",
  Accept: "application/json",
  // Connection: "keep-alive",
  // DNT: "1",
  Origin: "https://replit.com",
  "X-Requested-With": "wow",
  Cookie:
    "__cf_bm=cInb3ryFezH0EdX5_cilKj9OYtkMUGqWp9_0qCmPIhM-1685023682-0-AbuMvwk/XHGc4Qa2zkxmIKF1cgSScRIC3EyPyHRUcE2D6V/TXvMKwquQ5lpy5bO38UmqhmNojYxb15EPCkdmd9U=; _cfuvid=WQPXb84vpSG6JNTavipPqi_4QqnjBJ3O1thKfAniCWE-1685023682901-0-604800000; connect.sid=s%3A2WLQWPefL1VYhOpTxvsNTm7h-suYxyMW.jZn7A1OBTLm9%2FIRnsV0FtQFqV1OmgTqsDtE4ApmdI%2B8",
  credentials: "include"
};

// Categories
export type TemplateCategory = {
  title: string;
  id: number;
};

export type TemplateCategoriesResults = {
  templateCategories: {
    __typename: "TemplateCategoriesResults";
    results: (TemplateCategory & { slug?: string })[];
  };
};

// Repls
export type TemplateRepl = {
  id: string;
  title: string;
  imageUrl: string | null;
  iconUrl: string;
  templateCategories: TemplateCategory[];
};

export type TemplateReplsForCategory = {
  templateRepls2: {
    __typename: "TemplateReplSearchConnection";
    category: number;
    items: TemplateRepl[];
  };
};
