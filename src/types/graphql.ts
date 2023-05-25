export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  FlagValueType: any;
  JSON: any;
  SequelizeJSON: any;
  StringNumberBoolean: any;
};

export type AbandonBountyInput = {
  bountyId: Scalars['Int'];
};

export type AbandonBountyOutput =
  | Bounty
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type AcceptInvoiceOutput =
  | Invoice
  | NotFoundError
  | UnauthorizedError
  | UserError;

/** A user's storage utilization summary. */
export type AccountStorageUtilization = {
  __typename: 'AccountStorageUtilization';
  /** Storage utilization broken out by Repl. */
  perRepl: Array<ReplStorageUtilization>;
  /** Total bytes of storage used by the account. Represented as a string because GiB can easily exceed int32. */
  total: Scalars['String'];
};

export type AccountStorageUtilizationOutput =
  | AccountStorageUtilization
  | ServiceUnavailable
  | UnauthorizedError;

export type AddReplIdentityAllowedRepl =
  | NotFoundError
  | Repl
  | UnauthorizedError;

export type AddReplIdentityAllowedReplInput = {
  replId: Scalars['String'];
};

/** An object for fields restricted to admins */
export type Admin = {
  __typename: 'Admin';
  boardTrendingAlgorithmSettings: BoardTrendingAlgorithmSettings;
  user: User;
};

export type AdminCliAppEnvMutation = {
  __typename: 'AdminCliAppEnvMutation';
  /** Append a value to an app-wide list variable */
  append?: Maybe<CluiOutput>;
  /** Remove a value from an app-wide list variable */
  remove?: Maybe<CluiOutput>;
  /** Set an app-wide variable */
  set?: Maybe<CluiOutput>;
  /** Unset an app-wide variable */
  unset?: Maybe<CluiOutput>;
};

export type AdminCliAppEnvMutationAppendArgs = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AdminCliAppEnvMutationRemoveArgs = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AdminCliAppEnvMutationSetArgs = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AdminCliAppEnvMutationUnsetArgs = {
  key: Scalars['String'];
};

export type AdminCliAppEnvQuery = {
  __typename: 'AdminCliAppEnvQuery';
  /** List app environment variables */
  list?: Maybe<CluiOutput>;
};

export type AdminCliBannersMutation = {
  __typename: 'AdminCliBannersMutation';
  /** Adds a site-wide banner */
  add?: Maybe<CluiOutput>;
  /** Removes the site-wide banner */
  remove?: Maybe<CluiOutput>;
};

export type AdminCliBannersMutationAddArgs = {
  message: Scalars['String'];
};

export type AdminCliBannersQuery = {
  __typename: 'AdminCliBannersQuery';
  /** View latest unresolved banner */
  view?: Maybe<CluiOutput>;
};

export type AdminCliBillingOrgsMutation = {
  __typename: 'AdminCliBillingOrgsMutation';
  /** Add or remove an admin from the org. */
  addRemoveAdmin?: Maybe<CluiOutput>;
  /** Provision an organization */
  provision?: Maybe<CluiOutput>;
  /** Verify or reject teachers */
  verifyTeacher?: Maybe<CluiOutput>;
};

export type AdminCliBillingOrgsMutationAddRemoveAdminArgs = {
  orgId: Scalars['Int'];
  remove?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export type AdminCliBillingOrgsMutationProvisionArgs = {
  customDeal?: InputMaybe<Scalars['Boolean']>;
  interval?: InputMaybe<CluiTeamOrganizationBillingInterval>;
  name: Scalars['String'];
  owner: Scalars['String'];
  plan: CluiTeamOrganizationPlanPrefix;
  seatCount?: InputMaybe<Scalars['Int']>;
  teamName?: InputMaybe<Scalars['String']>;
  timeExpired?: InputMaybe<Scalars['String']>;
  trialEnd?: InputMaybe<Scalars['String']>;
};

export type AdminCliBillingOrgsMutationVerifyTeacherArgs = {
  action: Action;
  userIds: Scalars['String'];
};

export type AdminCliBillingOrgsQuery = {
  __typename: 'AdminCliBillingOrgsQuery';
  /** Show all organizations a user is a member of and all members of those organizations. */
  view?: Maybe<CluiOutput>;
};

export type AdminCliBillingOrgsQueryViewArgs = {
  teamOrUserName: Scalars['String'];
};

export type AdminCliCommuniyQuery = {
  __typename: 'AdminCliCommuniyQuery';
  /** Edit trending algorithm */
  algorithm?: Maybe<CluiOutput>;
};

export type AdminCliExtensionMutation = {
  __typename: 'AdminCliExtensionMutation';
  /** This deletes an extension by its id. Remember to inform the extension creator why we are deleting their extension, and post in the #p_extensions channel */
  delete?: Maybe<CluiOutput>;
  /** This updates an extension by its id. Remember to inform the extension creator what we are changing, and post in the #p_extensions channel */
  update?: Maybe<CluiOutput>;
};

export type AdminCliExtensionMutationDeleteArgs = {
  extensionId: Scalars['String'];
};

export type AdminCliExtensionMutationUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  extensionId: Scalars['String'];
  isBlessed?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type AdminCliExtensionQuery = {
  __typename: 'AdminCliExtensionQuery';
  /** View extensions people have created. Returns all extensions by default */
  view?: Maybe<CluiOutput>;
};

export type AdminCliExtensionQueryViewArgs = {
  creator?: InputMaybe<Scalars['String']>;
};

export type AdminCliHostingDeploymentsMutation = {
  __typename: 'AdminCliHostingDeploymentsMutation';
  /** Delete a Hosting Deployment. */
  delete?: Maybe<CluiOutput>;
};

export type AdminCliHostingDeploymentsMutationDeleteArgs = {
  replId: Scalars['String'];
};

export type AdminCliReplMutation = {
  __typename: 'AdminCliReplMutation';
  /** Removes the poison status from the target Repl and all its forks recursively. This moves all those repls back to the appropriate cluster. For heavily forked repls (>20k), this job might time out. In that case you should run the script/cleasneReplTree script locally against production. */
  cleanse?: Maybe<CluiOutput>;
  /** Delete a Repl (will appear in the user's trash) */
  delete?: Maybe<CluiOutput>;
  /** Poison a Repl. Transfers the Repl and all forks (recursively) to the tarpit. */
  poison?: Maybe<CluiOutput>;
  /** Takedown a Repl (if the Repl is deleted but still running) */
  takedown?: Maybe<CluiOutput>;
};

export type AdminCliReplMutationCleanseArgs = {
  repl: Scalars['String'];
};

export type AdminCliReplMutationDeleteArgs = {
  repl: Scalars['String'];
};

export type AdminCliReplMutationPoisonArgs = {
  disableForking?: InputMaybe<Scalars['Boolean']>;
  repl: Scalars['String'];
};

export type AdminCliReplMutationTakedownArgs = {
  repl: Scalars['String'];
};

export type AdminCliRolesMutation = {
  __typename: 'AdminCliRolesMutation';
  /** Adds role to user */
  add?: Maybe<CluiOutput>;
  /** Removes role from user */
  remove?: Maybe<CluiOutput>;
};

export type AdminCliRolesMutationAddArgs = {
  role: UserRoles;
  user: Scalars['String'];
};

export type AdminCliRolesMutationRemoveArgs = {
  role: UserRoles;
  user: Scalars['String'];
};

export type AdminCliRolesQuery = {
  __typename: 'AdminCliRolesQuery';
  /** View roles for a user */
  view?: Maybe<CluiOutput>;
};

export type AdminCliRolesQueryViewArgs = {
  user: Scalars['String'];
};

export type AdminCliSiteMutation = {
  __typename: 'AdminCliSiteMutation';
  /** Anyone who loaded the client before the set date will be asked to reload */
  setLastUpdateTime?: Maybe<CluiOutput>;
};

export type AdminCliSiteMutationSetLastUpdateTimeArgs = {
  date?: InputMaybe<Scalars['Int']>;
};

export type AdminCliSiteQuery = {
  __typename: 'AdminCliSiteQuery';
  /** Anyone who loaded the client before the set date will be asked to reload */
  getLastUpdateTime?: Maybe<CluiOutput>;
  /** Gets the Heroku slug commit version */
  version?: Maybe<CluiOutput>;
};

export type AdminCliSubscriptionsMutation = {
  __typename: 'AdminCliSubscriptionsMutation';
  /** Override subscriptions (leave blank to view overrides) */
  override?: Maybe<CluiOutput>;
};

export type AdminCliSubscriptionsMutationOverrideArgs = {
  ignoreExpiration?: InputMaybe<OverrideBehaviorEnum>;
  ignoreQuantity?: InputMaybe<OverrideBehaviorEnum>;
  orgId?: InputMaybe<Scalars['Int']>;
  overrideExpiration?: InputMaybe<Scalars['String']>;
  overrideQuantity?: InputMaybe<Scalars['Int']>;
  reason?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type AdminCliSubscriptionsQuery = {
  __typename: 'AdminCliSubscriptionsQuery';
  /** View subscriptions by username or organization ID */
  view?: Maybe<CluiOutput>;
};

export type AdminCliSubscriptionsQueryViewArgs = {
  orgId?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type AdminCliSupportQuery = {
  __typename: 'AdminCliSupportQuery';
  /** View user and Repl data for debugging (and tickets) */
  info?: Maybe<CluiOutput>;
  /** send emails to all unverified users */
  verifyEduUsers?: Maybe<CluiOutput>;
};

export type AdminCliSupportQueryInfoArgs = {
  isUserId?: InputMaybe<Scalars['Boolean']>;
  userOrRepl: Scalars['String'];
};

export type AdminCliTemplatesCategoriesMutation = {
  __typename: 'AdminCliTemplatesCategoriesMutation';
  /** Add or edit a template category. */
  addOrUpdate?: Maybe<CluiOutput>;
  /** Delete a template category. */
  delete?: Maybe<CluiOutput>;
};

export type AdminCliTemplatesCategoriesMutationAddOrUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  updateTemplateId?: InputMaybe<Scalars['Int']>;
};

export type AdminCliTemplatesCategoriesMutationDeleteArgs = {
  id: Scalars['Int'];
};

export type AdminCliTemplatesCategoriesQuery = {
  __typename: 'AdminCliTemplatesCategoriesQuery';
  /** Assign template categories to Template Repls. */
  assign?: Maybe<CluiOutput>;
  /** Add or edit a template category. */
  view?: Maybe<CluiOutput>;
};

export type AdminCliTemplatesMutation = {
  __typename: 'AdminCliTemplatesMutation';
  /** View and manage template categories */
  categories2?: Maybe<AdminCliTemplatesCategoriesMutation>;
  /** Unpublish a template. */
  unpublish?: Maybe<CluiOutput>;
};

export type AdminCliTemplatesMutationUnpublishArgs = {
  replId: Scalars['String'];
};

export type AdminCliTemplatesQuery = {
  __typename: 'AdminCliTemplatesQuery';
  /** View and update beta templates */
  beta?: Maybe<CluiOutput>;
  /** View and update template Repl categories */
  categories?: Maybe<CluiOutput>;
  /** View and manage template categories */
  categories2?: Maybe<AdminCliTemplatesCategoriesQuery>;
  /** View and update associations between languages and template repls */
  languages?: Maybe<CluiOutput>;
  /** Approve Template Repl submissions. */
  submissions?: Maybe<CluiOutput>;
};

export type AdminCliToursMutation = {
  __typename: 'AdminCliToursMutation';
  /** Updates whether a tour has been seen for a user. */
  updateTourSeen?: Maybe<CluiOutput>;
};

export type AdminCliToursMutationUpdateTourSeenArgs = {
  shouldBeMarkedAsSeen?: InputMaybe<Scalars['Boolean']>;
  tourName: Scalars['String'];
  user: Scalars['String'];
};

export type AdminCliUserCyclesCashOutMutation = {
  __typename: 'AdminCliUserCyclesCashOutMutation';
  /** Resolve the cash out process by recording a wallet's pledged Cycles as paid. */
  paid?: Maybe<CluiOutput>;
  /** Pledge Cycles to be cashed out for a user. */
  pledge?: Maybe<CluiOutput>;
  /** Resolve the cash out process by refunding a user their pledged Cycles. */
  refund?: Maybe<CluiOutput>;
};

export type AdminCliUserCyclesCashOutMutationPaidArgs = {
  user: Scalars['String'];
};

export type AdminCliUserCyclesCashOutMutationPledgeArgs = {
  cycles: Scalars['Int'];
  feePercent: CashOutFeePercentEnum;
  user: Scalars['String'];
};

export type AdminCliUserCyclesCashOutMutationRefundArgs = {
  user: Scalars['String'];
};

export type AdminCliUserCyclesMutation = {
  __typename: 'AdminCliUserCyclesMutation';
  /** Manage a user's Cycles for cash out */
  cashOut?: Maybe<AdminCliUserCyclesCashOutMutation>;
  /** Grant cycles to a user. Please read these guidelines first: https://replit.com/@util/handbook#cycles/clui_rules.md */
  grant?: Maybe<CluiOutput>;
  /** Retire cycles from a user. Please read these guidelines first: https://replit.com/@util/handbook#cycles/clui_rules.md */
  retire?: Maybe<CluiOutput>;
};

export type AdminCliUserCyclesMutationGrantArgs = {
  cycles: Scalars['Int'];
  internalComment: Scalars['String'];
  target: Scalars['String'];
};

export type AdminCliUserCyclesMutationRetireArgs = {
  cycles: Scalars['Int'];
  internalComment: Scalars['String'];
  username: Scalars['String'];
};

export type AdminCliUserCyclesQuery = {
  __typename: 'AdminCliUserCyclesQuery';
  /** Get a user's Cycles balance. */
  balance?: Maybe<CluiOutput>;
};

export type AdminCliUserCyclesQueryBalanceArgs = {
  username: Scalars['String'];
};

export type AdminCliUserIapMutation = {
  __typename: 'AdminCliUserIAPMutation';
  /** Create an IAP subscription for a user (if one doesn't exist yet). 1 month duration. */
  createIAPSubscription?: Maybe<CluiOutput>;
  /** Expire an IAP subscription for a user (if one exists). */
  expireIAPSubscriptions?: Maybe<CluiOutput>;
};

export type AdminCliUserIapMutationCreateIapSubscriptionArgs = {
  planId?: InputMaybe<Scalars['String']>;
  providerName?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type AdminCliUserIapMutationExpireIapSubscriptionsArgs = {
  user: Scalars['String'];
};

export type AdminCliUserMutation = {
  __typename: 'AdminCliUserMutation';
  /** This does terrible things to a user's account. This is not a Repl Talk ban, this is a SITE WIDE BAN. All their Repls go poof and they will no longer be able to access their account. */
  ban?: Maybe<CluiOutput>;
  /** Change a users email */
  changeEmail?: Maybe<CluiOutput>;
  /** Change a users username */
  changeUsername?: Maybe<CluiOutput>;
  /** Override a user's default cluster */
  cluster?: Maybe<CluiOutput>;
  /** View and manage users' Cycles balances */
  cycles?: Maybe<AdminCliUserCyclesMutation>;
  /** Expires a user subscription */
  deprovision?: Maybe<CluiOutput>;
  /** Reconcile or reset a user's egress for the current month */
  egress?: Maybe<CluiOutput>;
  /** View and manage users' IAP subscriptions */
  iap?: Maybe<AdminCliUserIapMutation>;
  /** Impersonate a user (username, email, or repl url) */
  impersonate?: Maybe<CluiOutput>;
  /** View and manage users' PowerUps */
  powerUps?: Maybe<AdminCliUserPowerUpsMutation>;
  /** Provisions a trial subscription for a set amount of time */
  provision?: Maybe<CluiOutput>;
  /** Restore a users account and their repls */
  restore?: Maybe<CluiOutput>;
  /** Modify a user's trust level */
  trust?: Maybe<CluiOutput>;
  /** This makes everything better again. This is not a repl talk unban, this is a SITE WIDE UNBAN. All their repls come back and they will have to access their account again. */
  unban?: Maybe<CluiOutput>;
  /** Mark the user as email verified */
  verify?: Maybe<CluiOutput>;
};

export type AdminCliUserMutationBanArgs = {
  reason: Scalars['String'];
  user: Scalars['String'];
};

export type AdminCliUserMutationChangeEmailArgs = {
  email: Scalars['String'];
  user: Scalars['String'];
};

export type AdminCliUserMutationChangeUsernameArgs = {
  user: Scalars['String'];
  username: Scalars['String'];
};

export type AdminCliUserMutationClusterArgs = {
  cluster?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type AdminCliUserMutationDeprovisionArgs = {
  username: Scalars['String'];
};

export type AdminCliUserMutationEgressArgs = {
  method: EgressUsageMethod;
  user: Scalars['String'];
};

export type AdminCliUserMutationImpersonateArgs = {
  user: Scalars['String'];
};

export type AdminCliUserMutationProvisionArgs = {
  months: Scalars['Int'];
  planPrefix: CluiIndividualPlanPrefix;
  username: Scalars['String'];
};

export type AdminCliUserMutationRestoreArgs = {
  time?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type AdminCliUserMutationTrustArgs = {
  level?: InputMaybe<UserTrustEnum>;
  user: Scalars['String'];
};

export type AdminCliUserMutationUnbanArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  time?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type AdminCliUserMutationVerifyArgs = {
  username: Scalars['String'];
};

export type AdminCliUserPowerUpsMutation = {
  __typename: 'AdminCliUserPowerUpsMutation';
  /** Create a Power Ups trial for a user (assuming one doesn't exist yet) */
  createTrial?: Maybe<CluiOutput>;
  /** Edit Power Ups trials for a user (assumes one exists) */
  editTrial?: Maybe<CluiOutput>;
};

export type AdminCliUserPowerUpsMutationCreateTrialArgs = {
  expiry: Scalars['String'];
  powerUp: PowerUpTrialTypeEnumType;
  user: Scalars['String'];
};

export type AdminCliUserPowerUpsMutationEditTrialArgs = {
  expiry: Scalars['String'];
  powerUp: PowerUpTrialTypeEnumType;
  user: Scalars['String'];
};

export type AdminCliUserQuery = {
  __typename: 'AdminCliUserQuery';
  /** View and manage users' Cycles balances */
  cycles?: Maybe<AdminCliUserCyclesQuery>;
  /** View user info */
  view?: Maybe<CluiOutput>;
};

export type AdminCliUserQueryViewArgs = {
  user: Scalars['String'];
};

export type AdminCluiMutation = {
  __typename: 'AdminCluiMutation';
  /** Set app wide key/value */
  appEnv?: Maybe<AdminCliAppEnvMutation>;
  /** Manage site banner */
  banners?: Maybe<AdminCliBannersMutation>;
  /** View and update manually curated content for trending */
  curation?: Maybe<ManualCurationMutation>;
  /** View and publish curriculum hub content */
  curriculum?: Maybe<AdminCurriculumHubMutation>;
  /** View and manage extensions on Replit */
  extension?: Maybe<AdminCliExtensionMutation>;
  /** Delete, etc. */
  hostingDeployment?: Maybe<AdminCliHostingDeploymentsMutation>;
  /** Configure organizations */
  org?: Maybe<AdminCliBillingOrgsMutation>;
  /** Poison, cleanse, etc. */
  repl?: Maybe<AdminCliReplMutation>;
  /** Manage user roles */
  roles?: Maybe<AdminCliRolesMutation>;
  /** Manage site settings */
  site?: Maybe<AdminCliSiteMutation>;
  /** Configure subscriptions */
  subscriptions?: Maybe<AdminCliSubscriptionsMutation>;
  /** Provision a team */
  team?: Maybe<AdminTeamMutation>;
  /** Configure templates */
  templates?: Maybe<AdminCliTemplatesMutation>;
  /** Configure tours */
  tours?: Maybe<AdminCliToursMutation>;
  /** View, impersonate, ban, etc. */
  user?: Maybe<AdminCliUserMutation>;
};

export type AdminCluiQuery = {
  __typename: 'AdminCluiQuery';
  /** Set app wide key/value */
  appEnv?: Maybe<AdminCliAppEnvQuery>;
  /** Manage site banner */
  banners?: Maybe<AdminCliBannersQuery>;
  /** Configure community */
  community?: Maybe<AdminCliCommuniyQuery>;
  /** View and update manually curated content for trending */
  curation?: Maybe<ManualCurationQuery>;
  /** View and publish curriculum hub content */
  curriculum?: Maybe<AdminCurriculumHubQuery>;
  /** View and manage extensions on Replit */
  extension?: Maybe<AdminCliExtensionQuery>;
  /** Configure organizations */
  org?: Maybe<AdminCliBillingOrgsQuery>;
  /** Manage user roles */
  roles?: Maybe<AdminCliRolesQuery>;
  /** Manage site settings */
  site?: Maybe<AdminCliSiteQuery>;
  /** Configure subscriptions */
  subscriptions?: Maybe<AdminCliSubscriptionsQuery>;
  /** Support tools */
  support?: Maybe<AdminCliSupportQuery>;
  /** View a team organization */
  team?: Maybe<AdminTeamOrgQuery>;
  /** Configure templates */
  templates?: Maybe<AdminCliTemplatesQuery>;
  /** View, impersonate, ban, etc. */
  user?: Maybe<AdminCliUserQuery>;
};

export type AdminCurriculumHubMutation = {
  __typename: 'AdminCurriculumHubMutation';
  /** Export a team as curriculum */
  changeCurriculumStatus?: Maybe<CluiOutput>;
  /** Export a team as curriculum */
  exportCurriculum?: Maybe<CluiOutput>;
};

export type AdminCurriculumHubMutationChangeCurriculumStatusArgs = {
  status: CurriculumVersionStatus;
  versionId: Scalars['Int'];
};

export type AdminCurriculumHubMutationExportCurriculumArgs = {
  team: Scalars['String'];
};

export type AdminCurriculumHubQuery = {
  __typename: 'AdminCurriculumHubQuery';
  /** View curriculum */
  viewCurriculum?: Maybe<CluiOutput>;
};

export type AdminCurriculumHubQueryViewCurriculumArgs = {
  slug?: InputMaybe<Scalars['String']>;
};

export type AdminRemoveReplIconOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type AdminRemoveUserImageOutput =
  | NotFoundError
  | UnauthorizedError
  | User
  | UserError;

export type AdminTeamMutation = {
  __typename: 'AdminTeamMutation';
  /** Add or remove team member */
  addRemoveTeamMember?: Maybe<CluiOutput>;
  /** Moves team to destination org. */
  moveTeamToOrg?: Maybe<CluiOutput>;
};

export type AdminTeamMutationAddRemoveTeamMemberArgs = {
  permissions?: InputMaybe<TeamPermission>;
  remove?: InputMaybe<Scalars['Boolean']>;
  team: Scalars['String'];
  user: Scalars['String'];
};

export type AdminTeamMutationMoveTeamToOrgArgs = {
  orgId: Scalars['Int'];
  team: Scalars['String'];
};

export type AdminTeamOrgQuery = {
  __typename: 'AdminTeamOrgQuery';
  /** View team members */
  viewTeamMembers?: Maybe<CluiOutput>;
};

export type AdminTeamOrgQueryViewTeamMembersArgs = {
  team: Scalars['String'];
};

export type AllowedReplIdentityRepls =
  | AllowedReplIdentityReplsOutput
  | UnauthorizedError;

export type AllowedReplIdentityReplsOutput = {
  __typename: 'AllowedReplIdentityReplsOutput';
  repls: Array<Repl>;
};

/** A single Annotation Anchor */
export type AnnotationAnchor = {
  __typename: 'AnnotationAnchor';
  currentUserIsAuthor: Scalars['Boolean'];
  id: Scalars['String'];
  indexEnd?: Maybe<Scalars['Int']>;
  indexStart?: Maybe<Scalars['Int']>;
  isGeneral: Scalars['Boolean'];
  /** Whether the annotation is resolved */
  isResolved: Scalars['Boolean'];
  /** The number of messages in the thread */
  messageCount: Scalars['Int'];
  /** The messages attached to the Annotation Anchor */
  messages: Array<AnnotationMessage>;
  otVersion?: Maybe<Scalars['Int']>;
  /** The users participating in the thread */
  participants: Array<User>;
  path?: Maybe<Scalars['String']>;
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  unreadCount: Scalars['Int'];
  user?: Maybe<User>;
};

export type AnnotationAnchorChangesInput = {
  indexEnd?: InputMaybe<Scalars['Int']>;
  indexStart?: InputMaybe<Scalars['Int']>;
  isResolved?: InputMaybe<Scalars['Boolean']>;
  otVersion?: InputMaybe<Scalars['Int']>;
  path?: InputMaybe<Scalars['String']>;
};

export type AnnotationAnchorInput = {
  id: Scalars['String'];
  indexEnd?: InputMaybe<Scalars['Int']>;
  indexStart?: InputMaybe<Scalars['Int']>;
  isGeneral?: InputMaybe<Scalars['Boolean']>;
  isResolved?: InputMaybe<Scalars['Boolean']>;
  otVersion?: InputMaybe<Scalars['Int']>;
  path?: InputMaybe<Scalars['String']>;
  replId: Scalars['String'];
};

export type AnnotationHighlightInput = {
  code?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
  precode?: InputMaybe<Scalars['String']>;
};

/** A single Annotation Message */
export type AnnotationMessage = {
  __typename: 'AnnotationMessage';
  anchor?: Maybe<AnnotationAnchor>;
  content: MessageContentType;
  currentUserIsAuthor: Scalars['Boolean'];
  id: Scalars['String'];
  seen?: Maybe<Scalars['Boolean']>;
  /** @deprecated Superseded by content */
  text: Scalars['String'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type AnnotationMessageInput = {
  anchorId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  mentions?: InputMaybe<Array<Scalars['String']>>;
  text: Scalars['String'];
};

export type AnnotationMessageList = {
  __typename: 'AnnotationMessageList';
  messages: Array<AnnotationMessage>;
};

/** Notification for when a user receives an annotation */
export type AnnotationNotification = {
  __typename: 'AnnotationNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type AnnotationQueryOutput = AnnotationAnchor | UserError;

export type AnonymousFlagInput = {
  default?: InputMaybe<Scalars['FlagValueType']>;
  id: Scalars['String'];
  type: UserFlagValueType;
  /** The anonymous ID (user key) to use to flag the user. It's optional: if you don't provide one, the normal gating ID will be used. */
  userKey?: InputMaybe<Scalars['String']>;
};

export type AnonymousFlagOutput = Flag | UserError;

/** Notification for when a user's comment was marked as the answer */
export type AnswerAcceptedNotification = {
  __typename: 'AnswerAcceptedNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  post?: Maybe<Post>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type AppStoreCustomerOutput =
  | AppStoreCustomerResult
  | UnauthorizedError
  | UserError;

export type AppStoreCustomerResult = {
  __typename: 'AppStoreCustomerResult';
  appAccountToken: Scalars['String'];
};

export type ArchiveTeamInput = {
  teamId: Scalars['Int'];
};

export type ArchviveTeamInput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | UserError;

export type ArrangeStackInput = {
  /** Desired order with in the user profile */
  order: Scalars['Int'];
  stackId: Scalars['Int'];
};

export type ArrangeStackItemInput = {
  /** Desired order in the stack. */
  order: Scalars['Int'];
  /** Stack the Repl previously belonged to. */
  previousStackId?: InputMaybe<Scalars['Int']>;
  /** Repl in the stack. */
  replId: Scalars['String'];
  /** Stack the Repl belongs to. Set to 0 to ungroup the Repl from its existing stack. */
  stackId: Scalars['Int'];
};

export type ArrangeStackItemOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | User
  | UserError;

export type ArrangeStackOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | User
  | UserError;

export type AsanaSupportRequestClientSideInput = {
  browser?: InputMaybe<Scalars['String']>;
  device?: InputMaybe<Scalars['String']>;
  pageUrl?: InputMaybe<Scalars['String']>;
};

export type AsanaSupportRequestInput = {
  attachments?: InputMaybe<Array<Scalars['Int']>>;
  body: Scalars['String'];
  clientInformation?: InputMaybe<AsanaSupportRequestClientSideInput>;
  projects?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type AsanaSupportRequestOutput =
  | AsanaSupportRequestSuccess
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type AsanaSupportRequestSuccess = {
  __typename: 'AsanaSupportRequestSuccess';
  asanaTaskGID: Scalars['String'];
  attachments?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
  tagsAttached?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AvailableReplTitleInput = {
  /** The team id if checking for the availability of a team Repl title */
  teamId?: InputMaybe<Scalars['Int']>;
  /** The Repl title to check availability of */
  title: Scalars['String'];
};

export type AvailableReplTitleOutput =
  | AvailableReplTitleResult
  | UnauthorizedError;

export type AvailableReplTitleResult = {
  __typename: 'AvailableReplTitleResult';
  isAvailable: Scalars['Boolean'];
};

export type BanCommunityUserOutput = BannedBoardUser | UserError;

/** Users who are banned from social boards */
export type BannedBoardUser = {
  __typename: 'BannedBoardUser';
  creator?: Maybe<User>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  reason: Scalars['String'];
  timeCreated: Scalars['Date'];
  timeExpired?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

/** A site banner */
export type Banner = {
  __typename: 'Banner';
  id: Scalars['Int'];
  message: Scalars['String'];
};

/** Represents a bounty event */
export type BasicBountyEvent = {
  __typename: 'BasicBountyEvent';
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int'];
  timeCreated: Scalars['Date'];
};

/** The default Replit Notification type */
export type BasicNotification = {
  __typename: 'BasicNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** A user's billing info */
export type BillingInfo = {
  __typename: 'BillingInfo';
  expiration?: Maybe<Scalars['DateTime']>;
  planInfo?: Maybe<PlanInfo>;
};

/** A board to post repls to */
export type Board = {
  __typename: 'Board';
  bodyCta?: Maybe<Scalars['String']>;
  buttonCta?: Maybe<Scalars['String']>;
  canPost: Scalars['Boolean'];
  color?: Maybe<Scalars['String']>;
  cta?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isAnswerable: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  replRequired: Scalars['Boolean'];
  slug: Scalars['String'];
  template?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  titleCta?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A report on a post or comment */
export type BoardReport = {
  __typename: 'BoardReport';
  bounty?: Maybe<Bounty>;
  bountyApplication?: Maybe<BountyApplication>;
  comment?: Maybe<Comment>;
  creator?: Maybe<User>;
  customTheme?: Maybe<CustomTheme>;
  id: Scalars['Int'];
  isEscalated?: Maybe<Scalars['Boolean']>;
  post?: Maybe<Post>;
  reason?: Maybe<Scalars['String']>;
  repl?: Maybe<Repl>;
  replComment?: Maybe<ReplComment>;
  reportedUser?: Maybe<User>;
  reportedUserId?: Maybe<Scalars['Int']>;
  resolved: Scalars['Boolean'];
  timeCreated: Scalars['Date'];
  type: Scalars['String'];
};

/** A connection to a list of BoardReports. */
export type BoardReportConnection = {
  __typename: 'BoardReportConnection';
  /** A list of BoardReports. */
  items: Array<BoardReport>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BoardReports = BoardReportConnection | UnauthorizedError;

/** Input type for board reports query */
export type BoardReportsInputType = {
  after?: InputMaybe<Scalars['Int']>;
  escalated?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<BoardReportsOrderType>;
  reporter?: InputMaybe<Scalars['Int']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  target?: InputMaybe<BoardReportsTargetType>;
};

export enum BoardReportsOrderType {
  Newest = 'newest',
  Oldest = 'oldest',
}

export enum BoardReportsTargetType {
  Bounty = 'bounty',
  BountyApplication = 'bountyApplication',
  Comment = 'comment',
  CustomTheme = 'customTheme',
  Post = 'post',
  Repl = 'repl',
  ReplComment = 'replComment',
  ReportedUser = 'reportedUser',
}

/** Settings for post + comment trending algorithm */
export type BoardTrendingAlgorithmSettings = {
  __typename: 'BoardTrendingAlgorithmSettings';
  commentsExponent: Scalars['Float'];
  id: Scalars['String'];
  postsCommentWeight: Scalars['Float'];
  postsExponent: Scalars['Float'];
};

/** State of the Boost Power Up */
export type BoostPowerUpType = {
  __typename: 'BoostPowerUpType';
  /** If active, the explanation for how the Power Up was created */
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  /** Resources (vCPU, RAM) provided by the Power Up */
  sku: BoostSkuEnum;
};

export type BoostRepl2Input = {
  /** Expected Cycles cost for the Boost. Will prevent the mutation from Boosting if the actual Cycles cost is greater than expected. */
  expectedCyclesCost?: InputMaybe<Scalars['Int']>;
  replId: Scalars['String'];
  /** The SKU of the Boost to use or off to turn off Boost. */
  setting: BoostSettingEnum;
};

export type BoostRepl2Output =
  | BoostRepl2Result
  | PaymentError
  | UnauthorizedError
  | UserError;

export type BoostRepl2Result = {
  __typename: 'BoostRepl2Result';
  currentUser: CurrentUser;
  repl: Repl;
};

export enum BoostSkuEnum {
  Boost_2cpu_2ram = 'boost_2cpu_2ram',
  Boost_4cpu_4ram = 'boost_4cpu_4ram',
  Boost_8cpu_8ram = 'boost_8cpu_8ram',
  Boost_16cpu_16ram = 'boost_16cpu_16ram',
  Off = 'off',
}

export enum BoostSettingEnum {
  Boost_2cpu_2ram = 'boost_2cpu_2ram',
  Boost_4cpu_4ram = 'boost_4cpu_4ram',
  Boost_8cpu_8ram = 'boost_8cpu_8ram',
  Boost_16cpu_16ram = 'boost_16cpu_16ram',
  Off = 'off',
}

/** Represents a request for work in exchange for cycles */
export type Bounty = {
  __typename: 'Bounty';
  acceptedApplication?: Maybe<BountyApplication>;
  /** Count of applications that are publicly visible (i.e. those not awaiting moderation) */
  applicationCount: Scalars['Int'];
  /** If it exists, review of the hunter for completing this Bounty */
  bountyHunterReview?: Maybe<BountyHunterReview>;
  canCurrentUserCancel: Scalars['Boolean'];
  contactInfo?: Maybe<Scalars['String']>;
  contactMethod?: Maybe<BountyContactMethod>;
  /** The current user application for this bounty, if it exists */
  currentUserApplication?: Maybe<BountyApplication>;
  cycles: Scalars['Int'];
  deadline: Scalars['Date'];
  description: Scalars['String'];
  /** A preview of the Bounty's description with all markdown syntax stripped away */
  descriptionPreview: Scalars['String'];
  events?: Maybe<BountyEventConnection>;
  fee: Scalars['Int'];
  hasCurrentUserApplied: Scalars['Boolean'];
  id: Scalars['Int'];
  isCurrentUserBountyPoster: Scalars['Boolean'];
  isCurrentUserBountySolver: Scalars['Boolean'];
  isUnlisted: Scalars['Boolean'];
  latestSubmission?: Maybe<BountySubmission>;
  slug: Scalars['String'];
  solver?: Maybe<User>;
  solverPayout: Scalars['Int'];
  status: BountiesstatusEnumType;
  submissions: Array<BountySubmission>;
  timeCreated: Scalars['Date'];
  title: Scalars['String'];
  user?: Maybe<User>;
  walletId?: Maybe<Scalars['String']>;
};

/** Represents a request for work in exchange for cycles */
export type BountyEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** Represents an application to work on a Bounty */
export type BountyApplication = {
  __typename: 'BountyApplication';
  /** The Bounty that this application is for */
  bounty?: Maybe<Bounty>;
  /** True if the current user can remove this application */
  canCurrentUserRemoveApplication: Scalars['Boolean'];
  /** True if the current user can send a chat message, false otherwise */
  canCurrentUserSendChatMessage: Scalars['Boolean'];
  /** True if the current user can view the chat for this bounty application */
  canCurrentUserViewChat: Scalars['Boolean'];
  /** The applicant's contact info, which is only viewable by the Bounty poster and the applicant */
  contactInfo?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  id: Scalars['Int'];
  /** True if the current user is the user who created this application */
  isCurrentUserApplicant: Scalars['Boolean'];
  status: Bounty_ApplicationsstatusEnumType;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  /** The number of unread chat messages for this bounty application */
  unreadChatMessageCount: Scalars['Int'];
  /** The user who created this application */
  user?: Maybe<User>;
};

export type BountyApplicationByIdInput = {
  id: Scalars['Int'];
};

export type BountyApplicationByIdOutput =
  | BountyApplication
  | NotFoundError
  | UnauthorizedError;

/** A connection to a list of BountyApplications. */
export type BountyApplicationConnection = {
  __typename: 'BountyApplicationConnection';
  /** A list of BountyApplications. */
  items: Array<BountyApplication>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An event for when a bounty application is reviewed. currently only fired when application is accepted */
export type BountyApplicationReviewedEvent = {
  __typename: 'BountyApplicationReviewedEvent';
  bounty?: Maybe<Bounty>;
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int'];
  isAccepted: Scalars['Boolean'];
  timeCreated: Scalars['Date'];
  user?: Maybe<User>;
};

/** The poster has reviewed an application */
export type BountyApplicationReviewedNotification = {
  __typename: 'BountyApplicationReviewedNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type BountyApplicationSearchInput = {
  after?: InputMaybe<Scalars['String']>;
  bountyId?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<BountyApplicationSearchOrder>;
  status?: InputMaybe<BountyApplicationSearchStatus>;
};

export enum BountyApplicationSearchOrder {
  ApplicationDateAscending = 'applicationDateAscending',
  ApplicationDateDescending = 'applicationDateDescending',
  CompletedBountiesDescending = 'completedBountiesDescending',
  Recommended = 'recommended',
}

export type BountyApplicationSearchOutput =
  | BountyApplicationConnection
  | UserError;

export enum BountyApplicationSearchStatus {
  Accepted = 'accepted',
  All = 'all',
  AwaitingModeration = 'awaitingModeration',
  NotReviewed = 'notReviewed',
  Rejected = 'rejected',
  RejectedAndNotReviewed = 'rejectedAndNotReviewed',
}

export type BountyByIdInput = {
  id: Scalars['Int'];
};

export type BountyByIdOutput = Bounty | NotFoundError | UnauthorizedError;

export type BountyByUrlInput = {
  slug: Scalars['String'];
  username: Scalars['String'];
};

export type BountyByUrlOutput = Bounty | NotFoundError | UnauthorizedError;

/** Represents a message in a Bounty chat */
export type BountyChatMessage = {
  __typename: 'BountyChatMessage';
  /** The BountyApplication that this message is for */
  bountyApplication?: Maybe<BountyApplication>;
  id: Scalars['Int'];
  message: Scalars['String'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  /** The User that sent this message */
  user?: Maybe<User>;
};

/** A connection to a list of BountyChatMessages. */
export type BountyChatMessageConnection = {
  __typename: 'BountyChatMessageConnection';
  /** A list of BountyChatMessages. */
  items: Array<BountyChatMessage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A user has sent a message or messages in a bounty chat */
export type BountyChatMessageNotification = {
  __typename: 'BountyChatMessageNotification';
  bounty?: Maybe<Bounty>;
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  message?: Maybe<BountyChatMessage>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  unreadCount?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};

export type BountyChatSearchInput = {
  /** provide this param to load newer messages in history. */
  after?: InputMaybe<Scalars['String']>;
  /** provide this param to load older messages in history. */
  before?: InputMaybe<Scalars['String']>;
  bountyApplicationId: Scalars['Int'];
  count?: InputMaybe<Scalars['Int']>;
};

export type BountyChatSearchOutput =
  | BountyChatMessageConnection
  | NotFoundError
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export enum BountyContactMethod {
  Discord = 'discord',
  Email = 'email',
}

/** Represents an event that happened to a Bounty */
export type BountyEvent =
  | BasicBountyEvent
  | BountyApplicationReviewedEvent
  | BountyStateChangeEvent
  | BountyUpdatesEvent
  | BountyWorkReviewedEvent
  | BountyWorkSubmittedEvent;

/** A connection to a list of BountyEvents. */
export type BountyEventConnection = {
  __typename: 'BountyEventConnection';
  /** A list of BountyEvents. */
  items: Array<BountyEvent>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BountyHunterEarnings = {
  __typename: 'BountyHunterEarnings';
  /** Approximate earnings in Cycles */
  approximateCyclesEarned: Scalars['Int'];
};

/** A review of a Bounty hunter by a Bounty Poster */
export type BountyHunterReview = {
  __typename: 'BountyHunterReview';
  bounty?: Maybe<Bounty>;
  communicationRating: Scalars['Int'];
  id: Scalars['Int'];
  qualityRating: Scalars['Int'];
  reviewText?: Maybe<Scalars['String']>;
  reviewedUser?: Maybe<User>;
  reviewingUser?: Maybe<User>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  timelinessRating: Scalars['Int'];
};

/** A connection to a list of BountyHunterReviews. */
export type BountyHunterReviewConnection = {
  __typename: 'BountyHunterReviewConnection';
  /** A list of BountyHunterReviews. */
  items: Array<BountyHunterReview>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BountyHunterReviewsOutput =
  | BountyHunterReviewConnection
  | UnauthorizedError
  | UserError;

/** A service that is offered by a Bounty Hunter */
export type BountyHunterService = {
  __typename: 'BountyHunterService';
  /** Cycles that it costs to buy this service */
  cycles: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  /** Cover image for this service */
  imageUrl: Scalars['String'];
  /** Whether or not this service is available to be purchased currently */
  isAvailable: Scalars['Boolean'];
  /** Whether or not this service is publicly listed */
  isUnlisted: Scalars['Boolean'];
  /** Time to complete this service in seconds */
  timeToComplete: Scalars['Int'];
  title: Scalars['String'];
  /** User who is providing this service */
  user?: Maybe<User>;
};

export type BountyHunterServiceByIdInput = {
  id: Scalars['Int'];
};

export type BountyHunterServiceByIdOutput =
  | BountyHunterService
  | NotFoundError
  | UnauthorizedError
  | UserError;

/** A connection to a list of BountyHunterServices. */
export type BountyHunterServiceConnection = {
  __typename: 'BountyHunterServiceConnection';
  /** A list of BountyHunterServices. */
  items: Array<BountyHunterService>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BountyHunterServiceSearchInput = {
  /** Unused, but setting API up for pagination */
  after?: InputMaybe<Scalars['String']>;
  /** Unused, but setting API up for pagination */
  count?: InputMaybe<Scalars['Int']>;
};

export type BountyHunterServiceSearchOutput =
  | BountyHunterServiceConnection
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

/** Information about a user's activity in Bounties */
export type BountyInfo = {
  __typename: 'BountyInfo';
  /** How much a user has earned in Cycles */
  hunterEarnings: BountyHunterEarnings;
  /** Bounty reviews for a given user */
  hunterReviews: BountyHunterReviewsOutput;
  /** How much a user has spent on Bounties in Cycles */
  posterSpending: BountyPosterSpending;
  /** Stats about a user's activity in Bounties */
  stats: BountyUserStats;
};

/** Information about a user's activity in Bounties */
export type BountyInfoHunterReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** A user applied to a bounty */
export type BountyNewApplicationNotification = {
  __typename: 'BountyNewApplicationNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** A new submission was made for a bounty */
export type BountyNewSubmissionNotification = {
  __typename: 'BountyNewSubmissionNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type BountyPosterSpending = {
  __typename: 'BountyPosterSpending';
  /** Approximate amount spent on Bounties in Cycles */
  approximateCyclesSpent: Scalars['Int'];
};

/** A connection to a list of Bounties */
export type BountySearchConnection = {
  __typename: 'BountySearchConnection';
  items: Array<Bounty>;
  pageInfo: PageInfo;
};

export type BountySearchInput = {
  /** Controls which page of results to fetch */
  after?: InputMaybe<Scalars['String']>;
  /** How many Bounties to fetch in this page of results */
  count?: InputMaybe<Scalars['Int']>;
  /** Filters applied to the Bounty's reward */
  cycles?: InputMaybe<BountySearchInputCyclesFilter>;
  /** The ID of a Bounty Hunter to use to filter results */
  hunterId?: InputMaybe<Scalars['Int']>;
  /** Filters applied based on Bounty's listing state */
  listingState?: InputMaybe<BountySearchListingStateFilter>;
  /** The order to use when sorting the results */
  order?: InputMaybe<BountySearchOrder>;
  /** The ID of a Bounty Poster to use to filter results */
  posterId?: InputMaybe<Scalars['Int']>;
  /** The query to use to filter results */
  searchQuery?: InputMaybe<Scalars['String']>;
  /** Use statuses filter instead */
  status?: InputMaybe<BountySearchStatusFilter>;
  /** The statuses to include when searching for Bounties, if none are specified, this will include Bounties with any status */
  statuses?: InputMaybe<Array<BountySearchStatus>>;
  /** Filters applied to the Bounty's time created */
  timeCreated?: InputMaybe<BountySearchInputTimeCreatedFilter>;
};

export type BountySearchInputCyclesFilter = {
  /** Filters Bounties to those with cycles greater than or equal to this amount */
  gte: Scalars['Int'];
};

export type BountySearchInputTimeCreatedFilter = {
  /** Filters Bounties to those created at or after this date time */
  lte: Scalars['DateTime'];
};

export enum BountySearchListingStateFilter {
  All = 'all',
  Listed = 'listed',
  Unlisted = 'unlisted',
}

export enum BountySearchOrder {
  /** Sort Bounties with the lowest applications to the top */
  ApplicationCountAscending = 'applicationCountAscending',
  /** Sort Bounties created most recently to the top */
  CreationDateDescending = 'creationDateDescending',
  /** Sort Bounties with the highest reward to the top */
  CyclesDescending = 'cyclesDescending',
  /** Sort Bounties updated most recently to the top */
  LastUpdatedDateDescending = 'lastUpdatedDateDescending',
  /** The default recommended sort */
  Recommended = 'recommended',
}

export type BountySearchOutput =
  | BountySearchConnection
  | UnauthorizedError
  | UserError;

export enum BountySearchStatus {
  Canceled = 'canceled',
  Completed = 'completed',
  InProgress = 'inProgress',
  Open = 'open',
}

export enum BountySearchStatusFilter {
  All = 'all',
  Canceled = 'canceled',
  Completed = 'completed',
  InProgress = 'inProgress',
  Open = 'open',
}

/** Represents a bounty changing between open, in progress, closed */
export type BountyStateChangeEvent = {
  __typename: 'BountyStateChangeEvent';
  bounty?: Maybe<Bounty>;
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int'];
  newStatus: Scalars['String'];
  /** null if this is the first state change (bounty opened) */
  oldStatus?: Maybe<Scalars['String']>;
  timeCreated: Scalars['Date'];
};

/** Represents a submission for a Bounty */
export type BountySubmission = {
  __typename: 'BountySubmission';
  bounty?: Maybe<Bounty>;
  content: Scalars['String'];
  id: Scalars['Int'];
  repls: Array<Repl>;
  review?: Maybe<BountySubmissionReview>;
  user?: Maybe<User>;
};

/** Represents a review of a Bounty submission */
export type BountySubmissionReview = {
  __typename: 'BountySubmissionReview';
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isAccepted: Scalars['Boolean'];
  submission?: Maybe<BountySubmission>;
};

/** Bounty poster has reviewed a submission */
export type BountySubmissionReviewedNotification = {
  __typename: 'BountySubmissionReviewedNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type BountyUpdate = {
  __typename: 'BountyUpdate';
  contactInfo?: Maybe<Scalars['String']>;
  cycles: Scalars['Int'];
  deadline: Scalars['Date'];
  description: Scalars['String'];
  title: Scalars['String'];
};

/** Represents an update to a bounty */
export type BountyUpdatesEvent = {
  __typename: 'BountyUpdatesEvent';
  after: BountyUpdate;
  before: BountyUpdate;
  bounty?: Maybe<Bounty>;
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int'];
  timeCreated: Scalars['Date'];
};

/** Bounty-related stats for a user */
export type BountyUserStats = {
  __typename: 'BountyUserStats';
  averageHunterRating: Scalars['Float'];
  completedBountiesCount: Scalars['Int'];
  inProgressBountiesCount: Scalars['Int'];
  numHunterReviews: Scalars['Int'];
  postedBountiesCount: Scalars['Int'];
};

/** Represents a bounty submission being reviewed */
export type BountyWorkReviewedEvent = {
  __typename: 'BountyWorkReviewedEvent';
  bounty?: Maybe<Bounty>;
  content: Scalars['String'];
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int'];
  isAccepted: Scalars['Boolean'];
  timeCreated: Scalars['Date'];
};

/** Represents someone submitting work for a bounty */
export type BountyWorkSubmittedEvent = {
  __typename: 'BountyWorkSubmittedEvent';
  bounty?: Maybe<Bounty>;
  /** @deprecated use event field directly instead of querying this type */
  bountySubmission?: Maybe<BountySubmission>;
  content: Scalars['String'];
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int'];
  repls: Array<Repl>;
  timeCreated: Scalars['Date'];
  user?: Maybe<User>;
};

export enum BulkModerateAction {
  BanCommunityUser = 'banCommunityUser',
  BanUser = 'banUser',
  DeleteRepl = 'deleteRepl',
  HideComment = 'hideComment',
  HidePost = 'hidePost',
  PoisonRepl = 'poisonRepl',
  ReportRepl = 'reportRepl',
  ReportReplComment = 'reportReplComment',
}

export type BulkModerateInputArg = {
  action: BulkModerateAction;
  /** The ids of the comments for comment moderation actions */
  commentIds?: InputMaybe<Array<Scalars['Int']>>;
  /** The ids of the posts for post moderation actions */
  postIds?: InputMaybe<Array<Scalars['Int']>>;
  /** The reason for moderating the repls, comments, users, etc. */
  reason: Scalars['String'];
  /** The ids of the repls, comments, users as string */
  replIds?: InputMaybe<Array<Scalars['String']>>;
  userIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type BulkModerateOutput =
  | BulkModerateResult
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type BulkModerateResult = {
  __typename: 'BulkModerateResult';
  /** The moderation action taken */
  action: Scalars['String'];
  /** The success message */
  message: Scalars['String'];
  /** The reason for moderating the repls, comments, users, etc. */
  reason: Scalars['String'];
};

export enum CluiIndividualPlanPrefix {
  Hacker = 'hacker',
  HackerPro = 'hacker_pro',
}

export enum CluiTeamOrganizationBillingInterval {
  Annual = 'annual',
  Monthly = 'monthly',
}

export enum CluiTeamOrganizationPlanPrefix {
  TeamsPro = 'teams_pro',
}

export type CsvFileInput = {
  content: Scalars['String'];
  teamId: Scalars['Int'];
};

export type CancelBountyAsStaffInput = {
  bountyId: Scalars['Int'];
  reason: Scalars['String'];
};

export type CancelBountyAsStaffOutput =
  | Bounty
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type CancelBountyInput = {
  id: Scalars['Int'];
};

export type CancelBountyOutput =
  | Bounty
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type CancelInvoiceOutput =
  | Invoice
  | NotFoundError
  | UnauthorizedError
  | UserError;

export enum CashOutFeePercentEnum {
  Default = 'default',
  Fifteen = 'fifteen',
}

export enum CategoryEnumType {
  Adjustments = 'adjustments',
  Credits = 'credits',
  Earnings = 'earnings',
  Marketplace = 'marketplace',
  PowerUps = 'power_ups',
  Uncategorized = 'uncategorized',
}

export enum CategorySubTypeEnumType {
  AlwaysOn = 'always_on',
  Boost = 'boost',
  Bounty = 'bounty',
  CashedOut = 'cashed_out',
  Earned = 'earned',
  Egress = 'egress',
  FeeCharged = 'fee_charged',
  Ghostwriter = 'ghostwriter',
  Gpu = 'gpu',
  Granted = 'granted',
  HostingTier = 'hosting_tier',
  PrivateRepl = 'private_repl',
  Purchased = 'purchased',
  Redeemed = 'redeemed',
  Retired = 'retired',
  Tips = 'tips',
  Transferred = 'transferred',
  Uncategorized = 'uncategorized',
}

export type ChangeLanguagetoNixOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type ChangeSubscriptionInput = {
  /** The plan period of the subscription type to change the users current subscription to */
  newPlanPeriod: SelectableSubscriptionPeriodTypesEnum;
  /** The plan prefix of the subscription type to change the users current subscription to */
  newPlanPrefix: SelectableSubscriptionPrefixTypesEnum;
};

export type ChangeSubscriptionOutput =
  | ChangeSubscriptionResult
  | PaymentError
  | UnauthorizedError
  | UserError;

export type ChangeSubscriptionResult = {
  __typename: 'ChangeSubscriptionResult';
  currentUser: CurrentUser;
  hostedInvoiceUrl?: Maybe<Scalars['String']>;
  paymentIntentStatus?: Maybe<UpdateSubscriptionResultPaymentIntentStatus>;
};

export type CheckDomain2 = DomainStatus2 | NotFoundError | ServiceUnavailable;

/** The status of a Replit Checkout Session */
export enum CheckoutSessionStatus {
  /** The checkout session has succeeded but provisioning of cycles has failed (terminal) */
  CyclesProvisioningFailed = 'cycles_provisioning_failed',
  /** Payment for the checkout session has failed (terminal) */
  PaymentFailed = 'payment_failed',
  /** The checkout session has succeeded but provisioning of the product has failed (terminal) */
  ProductProvisioningFailed = 'product_provisioning_failed',
  /** The checkout session is provisioning cycles */
  ProvisioningCycles = 'provisioning_cycles',
  /** The checkout session is provisioning a product */
  ProvisioningProduct = 'provisioning_product',
  /** The checkout session has been started */
  Started = 'started',
  /** The checkout session has succeeded and has been successfully provisioned (terminal) */
  Succeeded = 'succeeded',
}

export type CluiComponentOutput = {
  __typename: 'CluiComponentOutput';
  component: Scalars['String'];
};

export type CluiErrorOutput = {
  __typename: 'CluiErrorOutput';
  error: Scalars['String'];
  json?: Maybe<Scalars['JSON']>;
};

export type CluiMarkdownOutput = {
  __typename: 'CluiMarkdownOutput';
  markdown: Scalars['String'];
};

export type CluiMutation = {
  __typename: 'CluiMutation';
  /** Manage your account */
  account?: Maybe<UserCliAccountMutation>;
  /** Admin CLUI operations */
  admin?: Maybe<AdminCluiMutation>;
  /** View and manage extensions you've made */
  extension?: Maybe<ExtensionMutation>;
  /** Moderator CLUI operations */
  moderator?: Maybe<ModeratorCluiMutation>;
  /** View and manage your teams */
  team?: Maybe<TeamMutation>;
  /** List and restore deleted repls and folders */
  trash?: Maybe<TrashMutation>;
};

export type CluiOutput =
  | CluiComponentOutput
  | CluiErrorOutput
  | CluiMarkdownOutput
  | CluiSuccessOutput
  | CluiTableOutput;

export type CluiQuery = {
  __typename: 'CluiQuery';
  /** Manage your account */
  account?: Maybe<UserCliAccountQuery>;
  /** Admin CLUI operations */
  admin?: Maybe<AdminCluiQuery>;
  /** View and manage extensions you've made */
  extension?: Maybe<ExtensionQuery>;
  /** Moderator CLUI operations */
  moderator?: Maybe<ModeratorCluiQuery>;
  /** Staff CLUI operations */
  staff?: Maybe<StaffCluiQuery>;
  /** View and manage your teams */
  team?: Maybe<TeamQuery>;
  /** List and restore deleted repls and folders */
  trash?: Maybe<TrashQuery>;
};

export type CluiSuccessOutput = {
  __typename: 'CluiSuccessOutput';
  json?: Maybe<Scalars['JSON']>;
  message: Scalars['String'];
};

export type CluiTableColumn = {
  __typename: 'CluiTableColumn';
  key: Scalars['String'];
  label: Scalars['String'];
};

export type CluiTableOutput = {
  __typename: 'CluiTableOutput';
  columns: Array<CluiTableColumn>;
  rows: Array<Scalars['JSON']>;
};

/** An object containing the metadata for a cluster */
export type ClusterMetadata = {
  conmanURL: Scalars['String'];
  gurl: Scalars['String'];
  id: Scalars['String'];
};

export type CodexFeedback2 = {
  __typename: 'CodexFeedback2';
  feedback: CodexFeedbackEnum;
  id: Scalars['String'];
};

export enum CodexFeedback2CodexInferenceClassEnum {
  Chat = 'chat',
  Explanation = 'explanation',
  Generation = 'generation',
  Transformation = 'transformation',
}

export type CodexFeedback2Input = {
  feedback: CodexFeedbackEnum;
  inferenceClass: CodexFeedback2CodexInferenceClassEnum;
  inferenceId: Scalars['String'];
};

export type CodexFeedback2Output =
  | CodexFeedback2
  | NotFoundError
  | UnauthorizedError;

export enum CodexFeedbackEnum {
  No = 'no',
  Yes = 'yes',
}

/** A comment on a post or another comment */
export type Comment = {
  __typename: 'Comment';
  body: Scalars['String'];
  canComment: Scalars['Boolean'];
  canEdit: Scalars['Boolean'];
  canReport: Scalars['Boolean'];
  canSelectAsAnswer: Scalars['Boolean'];
  canUnselectAsAnswer: Scalars['Boolean'];
  canVote: Scalars['Boolean'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  hasReported: Scalars['Boolean'];
  hasVoted: Scalars['Boolean'];
  id: Scalars['Int'];
  isAnswer: Scalars['Boolean'];
  isAuthor: Scalars['Boolean'];
  parentComment?: Maybe<Comment>;
  post?: Maybe<Post>;
  preview: Scalars['String'];
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
  user?: Maybe<User>;
  voteCount: Scalars['Int'];
};

/** A comment on a post or another comment */
export type CommentPreviewArgs = {
  length?: InputMaybe<Scalars['Int']>;
  removeMarkdown?: InputMaybe<Scalars['Boolean']>;
};

/** A connection to a list of Comments. */
export type CommentConnection = {
  __typename: 'CommentConnection';
  /** A list of Comments. */
  items: Array<Comment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CompleteUserCourseLessonInput = {
  /** The numeric ID for the UserCourseLesson to update. */
  userLessonId: Scalars['Int'];
};

export type ConfirmInvoiceOutput =
  | Invoice
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ConnectGoogleClassroomInput = {
  courseId: Scalars['String'];
  courseName: Scalars['String'];
  students: Array<InputMaybe<ConnectGoogleClassroomStudentInput>>;
  teamId: Scalars['Int'];
};

export type ConnectGoogleClassroomOutput =
  | GoogleClassroom
  | NotFoundError
  | UserError;

export type ConnectGoogleClassroomStudentInput = {
  /** Google profile email of user */
  email: Scalars['String'];
  /** Google profile ID of user */
  id: Scalars['String'];
};

export type CopyStacksToTeamInput = {
  /** Destination team to copy to */
  destinationTeamId: Scalars['Int'];
  /** Source team to copy from */
  sourceTeamId: Scalars['Int'];
  /** Stacks and Template IDs selected for copying */
  stacks: Array<Stacks>;
};

export type CopyStacksToTeamOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | User
  | UserError;

export type CopyTeamTemplateInput = {
  /** Destination stack in team (optional) */
  destinationStackId?: InputMaybe<Scalars['Int']>;
  /** Destination team */
  destinationTeamId: Scalars['Int'];
  /** Team project to copy */
  templateId: Scalars['Int'];
};

export type CopyTeamTemplateOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | User
  | UserError;

/** A subscription coupon */
export type Coupon = {
  __typename: 'Coupon';
  /** Amount (in dollars) that will be taken off the subtotal of any invoices for this customer. */
  amountOff?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  /** Describes the coupon */
  message?: Maybe<Scalars['String']>;
  /** If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once */
  months?: Maybe<Scalars['Int']>;
  /** Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a $100 invoice $50 instead. */
  percentOff?: Maybe<Scalars['Float']>;
  /** Weather or not the coupon repeats. */
  repeating: Scalars['Boolean'];
};

export type CouponQueryOutput = Coupon | UserError;

export type CourseLessonsRepls = {
  __typename: 'CourseLessonsRepls';
  /** A list of lesson identifier / repl pairs */
  results: Array<LessonRepl>;
};

export type CourseLessonsReplsOutput = CourseLessonsRepls | NotFoundError;

export type CoverImage = {
  __typename: 'CoverImage';
  offsetY: Scalars['Int'];
  url: Scalars['String'];
};

export type CreateAnnotationAnchorOutput = AnnotationAnchor | UserError;

export type CreateAnnotationMessageOutput = AnnotationAnchor | UserError;

export type CreateAsanaFeedbackTaskBodyInput = {
  currentUser: CreateAsanaFeedbackTaskUser;
  description: Scalars['String'];
  loomUrl?: InputMaybe<Scalars['String']>;
  pageUrl: Scalars['String'];
  replitVersion?: InputMaybe<Scalars['String']>;
  userAgent: Scalars['String'];
};

export type CreateAsanaFeedbackTaskBodyInputReturnGid = {
  currentUser: CreateAsanaFeedbackTaskUserReturnGid;
  description: Scalars['String'];
  loomUrl?: InputMaybe<Scalars['String']>;
  pageUrl: Scalars['String'];
  replitVersion?: InputMaybe<Scalars['String']>;
  userAgent: Scalars['String'];
};

export type CreateAsanaFeedbackTaskInput = {
  body: CreateAsanaFeedbackTaskBodyInput;
  membership: CreateAsanaFeedbackTaskMembership;
  project: Scalars['String'];
  title: Scalars['String'];
};

export type CreateAsanaFeedbackTaskInputReturnGid = {
  body: CreateAsanaFeedbackTaskBodyInputReturnGid;
  membership: CreateAsanaFeedbackTaskMembershipReturnGid;
  project: Scalars['String'];
  title: Scalars['String'];
};

export type CreateAsanaFeedbackTaskMembership = {
  project: Scalars['String'];
  section: Scalars['String'];
};

export type CreateAsanaFeedbackTaskMembershipReturnGid = {
  project: Scalars['String'];
  section: Scalars['String'];
};

export type CreateAsanaFeedbackTaskOutput =
  | CreateAsanaFeedbackTaskSuccess
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type CreateAsanaFeedbackTaskOutputReturnGid =
  | CreateAsanaFeedbackTaskSuccessReturnGid
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type CreateAsanaFeedbackTaskSuccess = {
  __typename: 'CreateAsanaFeedbackTaskSuccess';
  isSuccess: Scalars['Boolean'];
};

export type CreateAsanaFeedbackTaskSuccessReturnGid = {
  __typename: 'CreateAsanaFeedbackTaskSuccessReturnGID';
  asanaGID: Scalars['String'];
  isSuccess: Scalars['Boolean'];
};

export type CreateAsanaFeedbackTaskUser = {
  daysSinceSignup: Scalars['Int'];
  email: Scalars['String'];
  isExplorer: Scalars['Boolean'];
  isHacker: Scalars['Boolean'];
  isTeacher: Scalars['Boolean'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type CreateAsanaFeedbackTaskUserReturnGid = {
  daysSinceSignup: Scalars['Int'];
  email: Scalars['String'];
  isExplorer: Scalars['Boolean'];
  isHacker: Scalars['Boolean'];
  isTeacher: Scalars['Boolean'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type CreateAsanaSupportTaskBodyInput = {
  currentUser: CreateAsanaSupportTaskUser;
  loomUrl?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pageUrl: Scalars['String'];
  userAgent: Scalars['String'];
};

export type CreateAsanaSupportTaskInput = {
  board: Scalars['String'];
  body: CreateAsanaSupportTaskBodyInput;
  title: Scalars['String'];
};

export type CreateAsanaSupportTaskOutput =
  | CreateAsanaSupportTaskSuccess
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type CreateAsanaSupportTaskSuccess = {
  __typename: 'CreateAsanaSupportTaskSuccess';
  isSuccess: Scalars['Boolean'];
};

export type CreateAsanaSupportTaskUser = {
  daysSinceSignup: Scalars['Int'];
  email: Scalars['String'];
  isExplorer: Scalars['Boolean'];
  isHacker: Scalars['Boolean'];
  isTeacher: Scalars['Boolean'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type CreateBountyApplicationInput = {
  bountyId: Scalars['Int'];
  contactInfo: Scalars['String'];
  content: Scalars['String'];
  hcaptchaResponse?: InputMaybe<Scalars['String']>;
  hcaptchaSiteKey?: InputMaybe<Scalars['String']>;
};

export type CreateBountyApplicationOutput =
  | BountyApplication
  | NotFoundError
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type CreateBountyInput = {
  contactInfo: Scalars['String'];
  contactMethod: BountyContactMethod;
  cycles: Scalars['Int'];
  deadline: Scalars['DateTime'];
  description: Scalars['String'];
  isUnlisted?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type CreateBountyOutput =
  | Bounty
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type CreateBountySubmissionInput = {
  bountyId: Scalars['Int'];
  /** The text content of the submission */
  content: Scalars['String'];
  /** Repls that should be part of this submission and shared with the Bounty poster */
  replIds?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateBountySubmissionOutput =
  | BountySubmission
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type CreateBountySubmissionReviewInput = {
  bountySubmissionId: Scalars['Int'];
  content?: InputMaybe<Scalars['String']>;
  isAccepted: Scalars['Boolean'];
};

export type CreateBountySubmissionReviewOutput =
  | BountySubmissionReview
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type CreateCyclesStripeCheckoutSessionInput = {
  purchaseType: CyclesPurchaseType;
  quantity: Scalars['Int'];
  redirectDestination?: InputMaybe<CyclesRedirectDestinationType>;
  /** Title of a Repl if redirectDestination is to the Workspace */
  redirectReplTitle?: InputMaybe<Scalars['String']>;
  redirectTipSurface?: InputMaybe<CyclesCheckoutRedirectTipSurface>;
};

export type CreateCyclesStripeCheckoutSessionResult = {
  __typename: 'CreateCyclesStripeCheckoutSessionResult';
  sessionUrl: Scalars['String'];
};

export type CreateExtensionOutput =
  | Extension
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type CreateGithubAccessTokenInput = {
  /** The owner of the repository to create an access token for. */
  owner: Scalars['String'];
  /** The name of the repository this token will be scoped to. */
  repository: Scalars['String'];
};

export type CreateGithubAccessTokenOutput =
  | CreateGithubAccessTokenResult
  | ServiceUnavailable
  | UnauthorizedError
  | UserError;

export type CreateGithubAccessTokenResult = {
  __typename: 'CreateGithubAccessTokenResult';
  /** The token for this repository. Tokens last 1hr and are only valid for use with the repository they were created for. */
  token: Scalars['String'];
};

export type CreateGithubRepoInput = {
  description?: InputMaybe<Scalars['String']>;
  homepage?: InputMaybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  ownerType: GithubRepoOwnerType;
};

export type CreateGithubRepoOutput =
  | CreateGithubRepoResult
  | UnauthorizedError
  | UserError;

export type CreateGithubRepoResult = {
  __typename: 'CreateGithubRepoResult';
  remoteUrl: Scalars['String'];
};

export type CreateInvoiceOutput = Invoice | UnauthorizedError | UserError;

export type CreateLanguageConnectionMetadataOutput = GovalMetadata | UserError;

export type CreateNeonDatabaseInput = {
  replId: Scalars['String'];
};

export type CreateNeonDatabaseOutput =
  | CreateNeonDatabaseResult
  | UnauthorizedError
  | UserError;

export type CreateNeonDatabaseResult = {
  __typename: 'CreateNeonDatabaseResult';
  connectionString: Scalars['String'];
  databaseId: Scalars['Int'];
  databaseName: Scalars['String'];
  isFrozen: Scalars['Boolean'];
  projectId: Scalars['String'];
};

export type CreateNewTeamsEduOrganizationInput = {
  orgName: Scalars['String'];
};

export type CreateNewTeamsEduOrganizationOutput =
  | TeamOrganization
  | UnauthorizedError
  | UserError;

export type CreateReplAsTemplateInput = {
  allowSelfGrouping?: InputMaybe<Scalars['Boolean']>;
  availableEndDate?: InputMaybe<Scalars['String']>;
  availableStartDate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isGroupProject?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  originId?: InputMaybe<Scalars['String']>;
  replReleaseId?: InputMaybe<Scalars['String']>;
  restrictAfterSubmit?: InputMaybe<Scalars['Boolean']>;
  selfGroupSize?: InputMaybe<Scalars['Int']>;
  stackId?: InputMaybe<Scalars['Int']>;
  teamId: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateReplAsTemplateOutput = ReplTemplate | UserError;

export type CreateReplCommentInput = {
  body: Scalars['String'];
  replId: Scalars['String'];
};

export type CreateReplCommentOutput =
  | ReplComment
  | UnauthorizedError
  | UserError;

export type CreateReplCommentReplyInput = {
  body: Scalars['String'];
  replCommentId: Scalars['Int'];
};

export type CreateReplCommentReplyOutput =
  | ReplComment
  | UnauthorizedError
  | UserError;

export type CreateReplDeployemntInput = {
  description: Scalars['String'];
  iconUrl: Scalars['String'];
  replId: Scalars['String'];
};

export type CreateReplDeployemntOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type CreateReplInput = {
  description?: InputMaybe<Scalars['String']>;
  folderId?: InputMaybe<Scalars['String']>;
  forkToPersonal?: InputMaybe<Scalars['Boolean']>;
  gitRemoteUrl?: InputMaybe<Scalars['String']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  originId?: InputMaybe<Scalars['String']>;
  replReleaseId?: InputMaybe<Scalars['String']>;
  stackId?: InputMaybe<Scalars['Int']>;
  teamId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** A group of template repls or languages */
export type CreateReplOptionGroup = {
  __typename: 'CreateReplOptionGroup';
  /** The name of the group */
  name: Scalars['String'];
  /** A list of template repls or languages */
  options: Array<CreateReplOptions>;
};

export type CreateReplOptions = Language | Repl;

export type CreateReplOutput = Repl | UserError;

export type CreateReplPost2Input = {
  body?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  replId: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateReplPost2Output =
  | NotFoundError
  | Post
  | UnauthorizedError
  | UserError;

export type CreateReplReleaseInput = {
  description: Scalars['String'];
  replId: Scalars['String'];
};

export type CreateReplReleaseOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type CreateReplRunOutput = NotFoundError | Repl | UserError;

export type CreateReplSubmissionGroupInput = {
  teamId: Scalars['Int'];
  templateId: Scalars['Int'];
};

export type CreateReplSubmissionGroupOutput =
  | NotFoundError
  | ReplSubmission
  | ServiceUnavailable
  | UnauthorizedError
  | UserError;

export type CreateReplSubmissionOutput = Repl | UserError;

export type CreateReplTemplateInput = {
  dueDate?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  replId: Scalars['String'];
};

export type CreateReplTemplateModelSolutionForkInput = {
  solutionId: Scalars['Int'];
  teamId: Scalars['Int'];
};

export type CreateReplTemplateModelSolutionForkOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type CreateReplTemplateModelSolutionInput = {
  teamId: Scalars['Int'];
  templateId: Scalars['Int'];
  visibleAfterDueDate?: InputMaybe<Scalars['Boolean']>;
  visibleAfterPassingTests?: InputMaybe<Scalars['Boolean']>;
  visibleAfterSubmitting?: InputMaybe<Scalars['Boolean']>;
};

export type CreateReplTemplateModelSolutionOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type CreateReplTemplateOutput = ReplTemplate | UserError;

export type CreateReplUnitTestInput = {
  code: Scalars['String'];
  failureMessage?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  replId: Scalars['String'];
};

export type CreateReplUnitTestMetaInput = {
  imports?: InputMaybe<Scalars['String']>;
  initialization?: InputMaybe<Scalars['String']>;
  replId: Scalars['String'];
  setup?: InputMaybe<Scalars['String']>;
  tearDown?: InputMaybe<Scalars['String']>;
};

export type CreateReplitOneTimeCheckoutSessionInput = {
  /** If specified, update the user's Auto-Refill configuration */
  cyclesAutoRefillConfiguration?: InputMaybe<UpdateCyclesAutoRefillConfigurationInput>;
  /** The number of Cycles to purchase */
  cyclesQuantity: Scalars['Int'];
  /** The PowerUp to apply after the Cycles purchase */
  postPurchasePowerUp?: InputMaybe<PostPurchasePowerUp>;
};

export type CreateReplitOneTimeCheckoutSessionOutput =
  | CreateReplitOneTimeCheckoutSessionResult
  | PaymentError
  | UnauthorizedError
  | UserError;

export type CreateReplitOneTimeCheckoutSessionResult = {
  __typename: 'CreateReplitOneTimeCheckoutSessionResult';
  checkoutSession: ReplitCheckoutSession;
  clientSecret: Scalars['String'];
  /** The current user, can be used to refetch Auto-Refill configuration or payment method to update the client cache */
  currentUser: CurrentUser;
};

export type CreateReplitPlanCheckoutSessionInput = {
  /** The plan period of the subscription type to change the users current subscription to */
  planPeriod: SelectableSubscriptionPeriodTypesEnum;
  /** The plan prefix of the subscription type to change the users current subscription to */
  planPrefix: SelectableSubscriptionPrefixTypesEnum;
};

export type CreateReplitPlanCheckoutSessionOutput =
  | CreateReplitPlanCheckoutSessionResult
  | UnauthorizedError
  | UserError;

export type CreateReplitPlanCheckoutSessionResult = {
  __typename: 'CreateReplitPlanCheckoutSessionResult';
  checkoutSession: ReplitCheckoutSession;
  clientSecret: Scalars['String'];
  currentUser: CurrentUser;
};

export type CreateSetupIntentOutput =
  | CreateSetupIntentResult
  | UnauthorizedError
  | UserError;

export type CreateSetupIntentResult = {
  __typename: 'CreateSetupIntentResult';
  clientSecret: Scalars['String'];
};

export type CreateStackInput = {
  /** Description of the stack */
  description?: InputMaybe<Scalars['String']>;
  /** Title of the stack */
  title: Scalars['String'];
  /** Owner of the stack */
  userId: Scalars['Int'];
};

export type CreateStackOutput = Team | UnauthorizedError | User | UserError;

export type CreateTeacherVerificationResponseInput = {
  howManyLearners: Scalars['String'];
  orgNames: Scalars['String'];
  referringEmailOrName?: InputMaybe<Scalars['String']>;
  useCase: Scalars['String'];
  website: Scalars['String'];
};

export type CreateTeacherVerificationResponseOutput =
  | TeacherVerification
  | UnauthorizedError
  | UserError;

export type CreateTeamInviteInput = {
  teamId: Scalars['Int'];
  usernameOrEmail: Scalars['String'];
};

export type CreateTeamInviteLinkOutput = Team | UserError;

export type CreateTeamInviteOutput = Team | UserError;

export type CreateTeamOrgInviteInput = {
  orgId: Scalars['Int'];
  usernameOrEmail: Scalars['String'];
};

export type CreateTeamOrgInviteLinkOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError
  | UserError;

export type CreateTeamOrgInviteOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError
  | UserError;

export type CreateTeamV2Input = {
  displayName?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Int']>;
  privacyInvite?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type CreateTeamV2Output = Team | UnauthorizedError | UserError;

export type CreateTemplateTestInput = {
  input: Scalars['String'];
  name: Scalars['String'];
  output: Scalars['String'];
  templateId: Scalars['Int'];
  type: ReplTemplateTestType;
};

export type CreateThemeInput = {
  colorScheme: CustomThemeColorScheme;
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type CreateUserCourseInput = {
  /** The course to start. */
  courseSlug: Scalars['String'];
};

export type CreateUserCourseLessonInput = {
  /** The lesson being created. */
  lessonSlug: Scalars['String'];
  /** The locale for which we want to create the lesson. If not provided, defaults to "en-US". */
  locale?: InputMaybe<Scalars['String']>;
  /** Deprecated. The server handles Repl forking now. */
  replId?: InputMaybe<Scalars['String']>;
  /** The UserCourse associated with the lesson. This id is an integer. */
  userCourseId: Scalars['Int'];
};

export type CreateUserCourseLessonOutput =
  | NotFoundError
  | UnauthorizedError
  | UserCourseLessonResult
  | UserError;

export type CreateUserCourseOutput =
  | NotFoundError
  | UnauthorizedError
  | UserCourseResult
  | UserError;

/** Authenticated user */
export type CurrentUser = {
  __typename: 'CurrentUser';
  /** The User's active custom theme */
  activeThemeVersion?: Maybe<ThemeVersion>;
  allFlags: Array<Flag>;
  /** @deprecated No longer supported. Use currentUser.allFlags instead */
  allGates: Array<UserGate>;
  auth?: Maybe<UserAuth>;
  /** Returns the themes authored by the current user */
  authoredThemes: CurrentUserAuthoredThemesOutput;
  /** If banned, this is the reason why they were banned. */
  bannedFromBoardsReason?: Maybe<Scalars['String']>;
  /** The current user's billing info */
  billingInfo?: Maybe<BillingInfo>;
  bio?: Maybe<Scalars['String']>;
  /**
   * Whether or not the user is allowed to be a Bounty solver
   * @deprecated No longer needed to gate access to applying - anyone can apply
   */
  canBeBountySolver: Scalars['Boolean'];
  /** Returns true if a user has boost remaining, false otherwise */
  canBoost: Scalars['Boolean'];
  canCreateNewFreeTeam: Scalars['Boolean'];
  canUpdate: Scalars['Boolean'];
  cannySSOToken: Scalars['String'];
  /** Subscription capabilities for the user */
  capabilities?: Maybe<SubscriptionCapabilities>;
  clui: Scalars['JSON'];
  /** Fetches a course by slug for the authed user. */
  course: UserCourseOutput;
  /** Fetches courses for the authed user. */
  courses: Array<UserCourse>;
  /** User profile cover image */
  coverImage?: Maybe<CoverImage>;
  /** A list of groups of template repls or langauges */
  createReplOptions: Array<CreateReplOptionGroup>;
  /** The current user's customer entity */
  customer?: Maybe<Customer>;
  /** Cycles state for the user */
  cycles: Cycles;
  cyclesAutoRefillConfiguration?: Maybe<UserCyclesAutoRefillConfigurationOutput>;
  daysSinceSignup: Scalars['Int'];
  displayName: Scalars['String'];
  /** User's editor preferences */
  editorPreferences: EditorPreferences;
  /** Returns information about the current user's egress consumption. */
  egress: CurrentUserEgressOutput;
  email: Scalars['String'];
  emailNotifications: Scalars['Boolean'];
  /** A list of the users favorite template repls or langauges */
  favoriteCreateReplOptions: Array<CreateReplOptions>;
  firstName?: Maybe<Scalars['String']>;
  flag: Flag;
  followCount: Scalars['Int'];
  followerCount: Scalars['Int'];
  followers: UserConnection;
  follows: UserConnection;
  /** List of teams without a subscription */
  freeTeams: Array<Team>;
  fullName: Scalars['String'];
  gate: Scalars['Boolean'];
  gateVariation?: Maybe<Scalars['String']>;
  /** GitHub specific information for a GitHub authed user */
  gitHubInfo?: Maybe<GitHubInfo>;
  /** Teams that are connected to a Google Classroom */
  googleClassroomTeams: Array<Team>;
  /**
   * If a user qualifies for apps onboarding
   * @deprecated This experiment is done
   */
  hasAppsOnboarding: Scalars['Boolean'];
  /**
   * Whether the user has access to generate code, explain code, and transform code.
   * @deprecated Support for contextual AI features alone is a legacy feature. Use currentUser.powerUpsByType.ghostwriter.active instead
   */
  hasContextualAIFeatures: Scalars['Boolean'];
  /** Whether the user has authorized Replit to access their Google Classroom data */
  hasGoogleClassroomScope: Scalars['Boolean'];
  /**
   * If a user qualifies for onboarding
   * @deprecated This experiment is done
   */
  hasOnboarding: Scalars['Boolean'];
  hasPrivacyRole: Scalars['Boolean'];
  /** If a user should see a privacy update */
  hasPrivacyUpdate: Scalars['Boolean'];
  hasProfileImage: Scalars['Boolean'];
  hasRepl: Scalars['Boolean'];
  hasRole: Scalars['Boolean'];
  id: Scalars['Int'];
  image: Scalars['String'];
  /** Returns the current user's installed custom themes */
  installedThemes: CurrentUserInstalledThemesOutput;
  /** Determines whether a user is banned from talk/canny */
  isBannedFromBoards: Scalars['Boolean'];
  /** Determines wether user is currently in firewall mode or not */
  isFirewallMode: Scalars['Boolean'];
  /**
   * Determines whether a user has a hacker plan
   * @deprecated Use `subscriptionIsType` or `userSubscriptionType` instead
   */
  isHacker: Scalars['Boolean'];
  isImpersonated: Scalars['Boolean'];
  isLoggedIn: Scalars['Boolean'];
  isSubscribed: Scalars['Boolean'];
  isVerified?: Maybe<Scalars['Boolean']>;
  keybindings: Keybindings;
  /** A list of languages the current user has coded in, and optionally the languages they have selected as interested in */
  languages: Array<Language>;
  lastName?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  /** Finds the current user's notification count */
  notificationCount: Scalars['Int'];
  paginatedReplSearch: ReplConnection;
  paymentMethod?: Maybe<UserPaymentMethod>;
  /** @deprecated Use userPowerUpsByType instead */
  powerUpCosts: UserPowerUpCost;
  /** @deprecated 2022 Repricing is over */
  pricesUpdate: CurrentUserPricesUpdateOptionOutput;
  /** Searches repls a user can publish */
  publishableReplSearch: Array<Repl>;
  /** A fast, approximate count of how many "Recent Repls" entries the user has, used to render directionally correct loading states. */
  recentReplsCount: Scalars['Int'];
  /** The Goval continent of the user */
  replContinent: ReplContinent;
  /** Finds a folder based on id */
  replFolder?: Maybe<ReplFolder>;
  /** Finds a folder based on path */
  replFolderByPath?: Maybe<ReplFolder>;
  /** Fetches the lesson details for the authed user, given a repl ID, if any. */
  replLesson?: Maybe<UserCourseLessonOutput>;
  /** Repl Power Ups summary */
  replPowerUps: Array<ReplPowerUpDescriptionType>;
  /** All active Repl Power Ups for the current user */
  replPowerUpsByMethodOfPayment: CurrentUserReplPowerUpsByMethodOfPaymentOutput;
  replSearch: Array<Repl>;
  repositories?: Maybe<RepositoriesOutput>;
  roles: Array<UserRole>;
  search: UserSearchResults;
  /** Determines whether to show the user's presence on the site */
  showPresence: Scalars['Boolean'];
  /** Determines wether user has completed edu verification form */
  showVerifyTeacherBanner: Scalars['Boolean'];
  sidebarClosed: Scalars['Boolean'];
  signupMethod?: Maybe<Scalars['String']>;
  socialSignup: Scalars['Boolean'];
  socials: Array<UserSocial>;
  state?: Maybe<UserState>;
  /** Storage information for the user */
  storageInfo: StorageInfo;
  /** Checks if the user has an active subscription of the given type */
  subscriptionIsType: Scalars['Boolean'];
  teamOrganizations: Array<TeamOrganization>;
  /** List of teams the user is a member of */
  teams: Array<Team>;
  /** How many teams is the user part of */
  teamsCount: Scalars['Int'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  tourSeen: Scalars['Boolean'];
  toursSeen: Array<TourSeen>;
  url: Scalars['String'];
  /**
   * User Power Ups summary
   * @deprecated Use userPowerUpsByType instead
   */
  userPowerUps: Array<UserPowerUpDescriptionType>;
  /** State of user-scoped Power Ups, by key */
  userPowerUpsByType: UserPowerUpsTypesOutput;
  /** Returns the type of plan, if the user has a plan from the Hacker family of plans. */
  userSubscriptionType?: Maybe<UserSubscriptionTypeEnum>;
  username: Scalars['String'];
  /** A Repl with slug matching the user's username */
  usernameRepl?: Maybe<Repl>;
  /** Finds the user's warnings */
  warnings?: Maybe<Array<Maybe<Warning>>>;
};

/** Authenticated user */
export type CurrentUserAuthArgs = {
  provider: UserAuthProviders;
};

/** Authenticated user */
export type CurrentUserAuthoredThemesArgs = {
  input: CurrentUserAuthoredThemesInput;
};

/** Authenticated user */
export type CurrentUserCanUpdateArgs = {
  column: UserUpdateColumns;
};

/** Authenticated user */
export type CurrentUserCourseArgs = {
  slug: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserFlagArgs = {
  controlName: Scalars['String'];
  type?: InputMaybe<UserFlagValueType>;
};

/** Authenticated user */
export type CurrentUserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** Authenticated user */
export type CurrentUserFollowsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** Authenticated user */
export type CurrentUserGateArgs = {
  feature: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserGateVariationArgs = {
  feature: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserHasRoleArgs = {
  role: UserRoles;
};

/** Authenticated user */
export type CurrentUserInstalledThemesArgs = {
  input: CurrentUserInstalledThemesInput;
};

/** Authenticated user */
export type CurrentUserKeybindingsArgs = {
  environment: KeybindingsEnvironmentEnum;
  platform: KeybindingsPlatformEnum;
};

/** Authenticated user */
export type CurrentUserLanguagesArgs = {
  includeInterestedIn?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
};

/** Authenticated user */
export type CurrentUserPaginatedReplSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  excludeMultiplayer?: InputMaybe<Scalars['Boolean']>;
  excludePrivate?: InputMaybe<Scalars['Boolean']>;
  search: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserPublishableReplSearchArgs = {
  count?: InputMaybe<Scalars['Int']>;
  search: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserRecentReplsCountArgs = {
  filter?: InputMaybe<RecentReplsFilter>;
};

/** Authenticated user */
export type CurrentUserReplFolderArgs = {
  id: Scalars['String'];
  teamId?: InputMaybe<Scalars['Int']>;
};

/** Authenticated user */
export type CurrentUserReplFolderByPathArgs = {
  path: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserReplLessonArgs = {
  replId: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserReplPowerUpsByMethodOfPaymentArgs = {
  methodOfPayment?: InputMaybe<PowerUpMethodOfPayment>;
};

/** Authenticated user */
export type CurrentUserReplSearchArgs = {
  count?: InputMaybe<Scalars['Int']>;
  excludeMultiplayer?: InputMaybe<Scalars['Boolean']>;
  excludePrivate?: InputMaybe<Scalars['Boolean']>;
  search: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  count: Scalars['Int'];
  privacy?: InputMaybe<RepositoryPrivacy>;
};

/** Authenticated user */
export type CurrentUserRolesArgs = {
  only?: InputMaybe<Array<UserRoles>>;
};

/** Authenticated user */
export type CurrentUserSubscriptionIsTypeArgs = {
  subscriptionType: UserSubscriptionTypeEnum;
};

/** Authenticated user */
export type CurrentUserTeamOrganizationsArgs = {
  subscriptionType?: InputMaybe<TeamOrganizationSubscriptionTypeEnum>;
};

/** Authenticated user */
export type CurrentUserTourSeenArgs = {
  name: Scalars['String'];
};

/** Authenticated user */
export type CurrentUserToursSeenArgs = {
  tours: Array<Scalars['String']>;
};

export type CurrentUserActiveCyclesSubscription =
  | CyclesSubscription
  | NotFoundError;

/** Input for the current user authored themes query. If passed in, after must be a string representing a valid positive integer and count must be an integer between 0 and 100 */
export type CurrentUserAuthoredThemesInput = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

export type CurrentUserAuthoredThemesOutput =
  | CustomThemeConnection
  | UnauthorizedError
  | UserError;

export type CurrentUserEgressOutput =
  | UnauthorizedError
  | UserEgressSummary
  | UserError;

/** Input for the current user installed themes query. If passed in, after must be a string representing a valid positive integer and count must be an integer between 0 and 100 */
export type CurrentUserInstalledThemesInput = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

export type CurrentUserInstalledThemesOutput =
  | InstalledThemeConnection
  | UnauthorizedError
  | UserError;

export enum CurrentUserPricesUpdateOption {
  General = 'general',
  LegacyCycles = 'legacy_cycles',
  LegacyHacker = 'legacy_hacker',
}

export type CurrentUserPricesUpdateOptionOutput =
  | CurrentUserPricesUpdateOptionOutputObject
  | UnauthorizedError
  | UserError;

export type CurrentUserPricesUpdateOptionOutputObject = {
  __typename: 'CurrentUserPricesUpdateOptionOutputObject';
  option?: Maybe<CurrentUserPricesUpdateOption>;
};

export type CurrentUserReplPowerUpsByMethodOfPaymentOutput =
  | CurrentUserReplPowerUpsByMethodOfPaymentSuccess
  | UnauthorizedError;

export type CurrentUserReplPowerUpsByMethodOfPaymentSuccess = {
  __typename: 'CurrentUserReplPowerUpsByMethodOfPaymentSuccess';
  powerUps: Array<RenderedPowerUpType>;
};

/** Education content created for Teams */
export type Curriculum = {
  __typename: 'Curriculum';
  /** Stacks containing the lessons as repls in. Returns the latest curriculum version; otherwise, provide a specific curriculum version. */
  contents: CurriculumContentOutput;
  coverPhotoUrl?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  isFeatured?: Maybe<Scalars['Boolean']>;
  /** Languages used in curriculum projects */
  languages: Array<Maybe<Language>>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

/** Education content created for Teams */
export type CurriculumContentsArgs = {
  versionNumber?: InputMaybe<Scalars['Int']>;
};

export type CurriculumBySlugOutput =
  | Curriculum
  | NotFoundError
  | UnauthorizedError;

export type CurriculumContent = {
  __typename: 'CurriculumContent';
  units: Array<Stack>;
  versionNumber: Scalars['Int'];
};

export type CurriculumContentOutput =
  | CurriculumContent
  | NotFoundError
  | UnauthorizedError
  | UserError;

export enum CurriculumVersionStatus {
  Draft = 'draft',
  InReview = 'in_review',
  Published = 'published',
}

/** The root type for a custom theme */
export type CustomTheme = {
  __typename: 'CustomTheme';
  author?: Maybe<User>;
  /** Whether current user has the theme installed and can upgrade to a new version of the theme. This will always be false for theme authors because they are always on the latest version. This will also be false for users without the theme installed. */
  canCurrentUserInstallUpdate: Scalars['Boolean'];
  colorScheme: CustomThemeColorScheme;
  /** Returns the version of a theme that the current user has installed, or null if the theme is not installed by the current user. If the user is the author, they will get the draft version if one exists, or the latest release version. */
  currentUserInstalledThemeVersion?: Maybe<ThemeVersion>;
  /** Total tips received by this theme from a given user (by ID), inclusive of fees (if any), in cycles. Null if user is not logged in. */
  currentUserTotalTips?: Maybe<Scalars['Int']>;
  draftThemeVersion?: Maybe<ThemeVersion>;
  /** The URL for a given theme's edit page. Returns null if the author was deleted or banned. */
  editPageUrl?: Maybe<Scalars['String']>;
  /** Whether the custom theme has unpublished changes. This field will always resolve to false if the current user is not the theme author */
  hasUnpublishedChanges: Scalars['Boolean'];
  id: Scalars['Int'];
  /** Whether current user is author of the theme */
  isCurrentUserThemeAuthor: Scalars['Boolean'];
  /** Whether current user has the theme installed. It is important to note that a Theme is considered installed if the current user is the theme author even though there is no InstalledThemes entry. */
  isInstalledByCurrentUser: Scalars['Boolean'];
  latestThemeVersion?: Maybe<ThemeVersion>;
  /** The number of users that have installed the theme. */
  numInstalls: Scalars['Int'];
  slug: Scalars['String'];
  status: CustomThemeStatus;
  title: Scalars['String'];
  /** Users who have tipped this Theme the most */
  topTippers: Array<TipperUser>;
  /** Total tips received by this theme, inclusive of fees (if any), in cycles */
  totalCyclesTips: Scalars['Int'];
  /** The URL for a given theme. Useful for linking to the cover page for that theme. Returns null if the author was deleted or banned. */
  url?: Maybe<Scalars['String']>;
};

export type CustomThemeByIdInput = {
  themeId: Scalars['Int'];
};

export type CustomThemeByIdOutput = CustomTheme | NotFoundError;

export enum CustomThemeColorScheme {
  Dark = 'dark',
  Light = 'light',
}

/** A connection to a list of CustomThemes. */
export type CustomThemeConnection = {
  __typename: 'CustomThemeConnection';
  /** A list of CustomThemes. */
  items: Array<CustomTheme>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export enum CustomThemeStatus {
  Deleted = 'deleted',
  Hidden = 'hidden',
  Public = 'public',
}

/** Customer billing information; all subscriptions are parented to this entity. */
export type Customer = {
  __typename: 'Customer';
  id: Scalars['Int'];
  paymentMethod?: Maybe<CustomerspaymentMethodEnumType>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  timeCreated: Scalars['Date'];
  timeDeleted?: Maybe<Scalars['Date']>;
  timeUpdated?: Maybe<Scalars['Date']>;
};

/** Information about Cycles related entities for the current user */
export type Cycles = {
  __typename: 'Cycles';
  /** Cycles balance */
  balance: CyclesBalanceOutput;
  /** Forecasts for a user's cycles */
  forecast: CyclesForecastOutput;
  /** True if the user has a Cycles subscription */
  hasSubscription: Scalars['Boolean'];
  /** The user's active Cycles Subscription, if they have one */
  subscription?: Maybe<CurrentUserActiveCyclesSubscription>;
  /** Paginated transactions for the current user */
  transactions?: Maybe<CyclesTransactionConnection>;
};

/** Information about Cycles related entities for the current user */
export type CyclesForecastArgs = {
  daysFromNow: Scalars['Int'];
};

/** Information about Cycles related entities for the current user */
export type CyclesTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** Cycles Auto-Refill configuration for a user */
export type CyclesAutoRefillConfiguration = {
  __typename: 'CyclesAutoRefillConfiguration';
  enabled: Scalars['Boolean'];
  id: Scalars['Int'];
  monthlyBudget?: Maybe<Scalars['Int']>;
  refillAmount: Scalars['Int'];
};

export type CyclesBalance = {
  __typename: 'CyclesBalance';
  cycles: Scalars['Float'];
  lastUpdated: Scalars['DateTime'];
};

export type CyclesBalanceOutput =
  | CyclesBalance
  | ServiceUnavailable
  | UnauthorizedError;

/** Power Up to purchase after a successful checkout */
export enum CyclesCheckoutPurchasePowerUpType {
  Ghostwriter = 'ghostwriter',
}

/** Tip surface to redirect to, if redirectDestination is tipSurface */
export type CyclesCheckoutRedirectTipSurface = {
  /** Amount of Cycles the user intended to tip */
  desiredAmount: Scalars['Int'];
  /** Slug of the tip surface */
  slug: Scalars['String'];
  /** Type of tip surface */
  surfaceType: CyclesCheckoutTippableSurfaceType;
  /** Username of the tip surface owner */
  username: Scalars['String'];
};

/** Type of tip surface */
export enum CyclesCheckoutTippableSurfaceType {
  Repl = 'repl',
  Theme = 'theme',
}

export type CyclesForecast = {
  __typename: 'CyclesForecast';
  /** The amount of Cycles that would be spent according to the forecast */
  estimatedCyclesSpend: Scalars['Int'];
  /** Indicates if the user's current Cycles balance is enough to fulfill their currently active Power Ups up to and including the specified date */
  hasSufficientCycles: Scalars['Boolean'];
};

export type CyclesForecastOutput =
  | CyclesForecast
  | ServiceUnavailable
  | UnauthorizedError
  | UserError;

/** The type of purchase (one-time payment or subscription) */
export enum CyclesPurchaseType {
  OneTime = 'oneTime',
  /** @deprecated Cycles subscriptions are deprecated. Please set up Auto-Refill instead: replit.com/cycles/set-up-auto-refill */
  RecurringChargeNow = 'recurringChargeNow',
}

/** Destination in Replit app to redirect the user to after successful checkout */
export enum CyclesRedirectDestinationType {
  Account = 'account',
  Bounties = 'bounties',
  CyclesPage = 'cyclesPage',
  NewReplModal = 'newReplModal',
  Profile = 'profile',
  TipSurface = 'tipSurface',
  Workspace = 'workspace',
}

/** A user's subscription for recurring Cycles purchases */
export type CyclesSubscription = {
  __typename: 'CyclesSubscription';
  cycles: Scalars['Int'];
  id: Scalars['Int'];
  /** The next time the subscription will be fulfilled if the subscription is active */
  nextRefillDate?: Maybe<Scalars['DateTime']>;
};

export type CyclesTransaction = {
  __typename: 'CyclesTransaction';
  /** Category the transaction falls under */
  category?: Maybe<CategoryEnumType>;
  /** What the transaction is used for on the product */
  category_sub_type?: Maybe<CategorySubTypeEnumType>;
  /** Number of cycles */
  cycles: Scalars['Int'];
  /** Transaction ID */
  id: Scalars['String'];
  /** Contextual information about the transaction: transaction group, assosciated repl, database table */
  metadata?: Maybe<Metadata>;
  /** User ID for the party whose balance is affected by the transaction */
  principal_user_id: Scalars['Int'];
  /** When the transaction was created */
  time_created?: Maybe<Scalars['DateTime']>;
  /** The type of transaction (e.g. purchased, granted, retired, redeemed) */
  type: CyclesTransactionTypeEnumType;
};

/** A connection to a list of CyclesTransactions. */
export type CyclesTransactionConnection = {
  __typename: 'CyclesTransactionConnection';
  /** A list of CyclesTransactions. */
  items: Array<CyclesTransaction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export enum CyclesTransactionTypeEnumType {
  CashedOut = 'cashed_out',
  Earned = 'earned',
  FeeCharged = 'fee_charged',
  Granted = 'granted',
  Purchased = 'purchased',
  Redeemed = 'redeemed',
  Retired = 'retired',
  Transferred = 'transferred',
}

export type DashboardItem = Repl | ReplFolder;

/** A repl-specific key-value database */
export type Database = {
  __typename: 'Database';
  id: Scalars['ID'];
  /** @deprecated Clients should no longer use a JWT to talk directly to kv.repl.it. Use sibling fields on Database instead. */
  jwt: Scalars['String'];
  keysCount?: Maybe<Scalars['Int']>;
  sizeMB?: Maybe<Scalars['Float']>;
};

export type DeleteMultiplayerInviteLink = Repl | UserError;

export type DeleteNeonDatabaseInput = {
  databaseId: Scalars['Int'];
  replId: Scalars['String'];
};

export type DeleteNeonDatabaseOutput =
  | DeleteNeonDatabaseResult
  | UnauthorizedError
  | UserError;

export type DeleteNeonDatabaseResult = {
  __typename: 'DeleteNeonDatabaseResult';
  success: Scalars['Boolean'];
};

export type DeleteReplDeploymentInput = {
  replId: Scalars['String'];
};

export type DeleteReplDeploymentOutput = NotFoundError | Repl | UserError;

export type DeleteReplIdentityAllowedRepl =
  | NotFoundError
  | Repl
  | UnauthorizedError;

export type DeleteReplIdentityAllowedReplInput = {
  replId: Scalars['String'];
};

export type DeleteReplTemplateOutput = ReplTemplate | UserError;

export type DeleteStackOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | User
  | UserError;

export type DeleteTeamInput = {
  cancelationReason?: InputMaybe<Scalars['String']>;
  teamId: Scalars['Int'];
};

export type DeleteTeamInviteInput = {
  inviteId?: InputMaybe<Scalars['Int']>;
  teamId: Scalars['Int'];
  usernameOrEmail?: InputMaybe<Scalars['String']>;
};

export type DeleteTeamInviteLinkOutput = Team | UserError;

export type DeleteTeamInviteOutput = Team | UserError;

export type DeleteTeamOrgInviteInput = {
  inviteId: Scalars['Int'];
  orgId: Scalars['Int'];
};

export type DeleteTeamOrgInviteLinkOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError;

export type DeleteTeamOrgInviteOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError
  | UserError;

export type DeleteTeamOrganizationInput = {
  orgId: Scalars['Int'];
};

export type DeleteTeamOrganizationMemberInput = {
  memberId: Scalars['Int'];
  orgId: Scalars['Int'];
  retainTeamAccess?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteTeamOrganizationMemberOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError;

export type DeleteTeamOrganizationOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError;

export type DeleteThemeInput = {
  themeId: Scalars['Int'];
};

export type DeleteThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type DeleteThreadMessageOutput = AnnotationAnchor | UserError;

export type DeletedProjectAndSubmissionOutput = Team | UserError;

export type DenyInvoiceOutput =
  | Invoice
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type DeployExtensionOutput =
  | Extension
  | TooManyRequestsError
  | UserError;

export type DeployHostingBuild2Commands = {
  build?: InputMaybe<Scalars['String']>;
  run: Scalars['String'];
};

export type DeployHostingBuild2EnvVar = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type DeployHostingBuild2Input = {
  appType?: InputMaybe<DeployHostingBuildAppType>;
  commands: DeployHostingBuild2Commands;
  envVars?: InputMaybe<Array<DeployHostingBuild2EnvVar>>;
  provider?: InputMaybe<HostingBuildProvider>;
  replId: Scalars['String'];
  /** The subdomain to use with replit.app. If none is provided, we use slug-username. */
  subdomain?: InputMaybe<Scalars['String']>;
  /** Target deployment for build. If null build is treated as first build and new deployment will be created if none already exist. */
  targetDeploymentId?: InputMaybe<Scalars['String']>;
};

export type DeployHostingBuild2Output =
  | DeployHostingBuild2Result
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type DeployHostingBuild2Result = {
  __typename: 'DeployHostingBuild2Result';
  build: HostingBuild;
  targetDeployment: HostingDeployment;
};

export enum DeployHostingBuildAppType {
  CloudRun = 'cloud_run',
  Server = 'server',
  Static = 'static',
  Worker = 'worker',
}

export type DisconnectGoogleClassroomInput = {
  teamId: Scalars['Int'];
};

export type DisconnectGoogleClassroomOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | UserError;

export type DiscountInfo = {
  __typename: 'DiscountInfo';
  amount?: Maybe<Scalars['Int']>;
  endAt?: Maybe<Scalars['DateTime']>;
  percent?: Maybe<Scalars['Int']>;
};

/** A domain linked to a repl. */
export type Domain = {
  __typename: 'Domain';
  domain: Scalars['String'];
  hosting_deployment_id?: Maybe<Scalars['String']>;
  state: Scalars['String'];
};

/** Checks if CNAME is correctly configued for a given domain to be linked. */
export type DomainStatus2 = {
  __typename: 'DomainStatus2';
  records?: Maybe<DomainStatusRecords>;
  retry: Scalars['Boolean'];
  status?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

/** DNS records that were obtained as part of a domain link check. */
export type DomainStatusRecords = {
  __typename: 'DomainStatusRecords';
  A?: Maybe<Array<Scalars['String']>>;
  CNAME?: Maybe<Array<Scalars['String']>>;
  TXT?: Maybe<Array<Scalars['String']>>;
};

export type EditBountyInput = {
  bountyId: Scalars['Int'];
  contactInfo?: InputMaybe<Scalars['String']>;
  cycles?: InputMaybe<Scalars['Int']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditBountyOutput =
  | Bounty
  | NotFoundError
  | UnauthorizedError
  | UserError;

/** A request to edit a repl */
export type EditRequest = {
  __typename: 'EditRequest';
  id: Scalars['Int'];
  repl?: Maybe<Repl>;
  requester?: Maybe<User>;
  status?: Maybe<EditRequestStatus>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
};

/** A user accepted an edit request */
export type EditRequestAcceptedNotification = {
  __typename: 'EditRequestAcceptedNotification';
  creator?: Maybe<User>;
  editRequest?: Maybe<EditRequest>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** A user has requested to edit a repl */
export type EditRequestCreatedNotification = {
  __typename: 'EditRequestCreatedNotification';
  creator?: Maybe<User>;
  editRequest?: Maybe<EditRequest>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum EditRequestStatus {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Pending = 'PENDING',
}

/** A user's editor preferences */
export type EditorPreferences = {
  __typename: 'EditorPreferences';
  accessibleTerminal: Scalars['Boolean'];
  chatEngine?: Maybe<Scalars['String']>;
  codeIntelligence: Scalars['Boolean'];
  codeSuggestion: Scalars['Boolean'];
  completeCodeEngine?: Maybe<Scalars['String']>;
  enableGpu: Scalars['Boolean'];
  extraDelight: Scalars['Boolean'];
  fontSize: Scalars['Int'];
  indentIsSpaces: Scalars['Boolean'];
  indentSize: Scalars['Int'];
  isLayoutStacked: Scalars['Boolean'];
  keyboardHandler?: Maybe<Scalars['String']>;
  minimapDisplay: Scalars['String'];
  multiselectModifierKey: Scalars['String'];
  theme: Scalars['String'];
  webviewAutoOpenOnPortOpened: Scalars['Boolean'];
  wrapping: Scalars['Boolean'];
};

export enum EgressAddOnSku {
  EgressGoval_10Gib = 'egress_goval_10_gib',
  EgressGoval_50Gib = 'egress_goval_50_gib',
  EgressGoval_100Gib = 'egress_goval_100_gib',
  EgressGoval_500Gib = 'egress_goval_500_gib',
  EgressGoval_1000Gib = 'egress_goval_1000_gib',
}

export type EgressLimitAddOnInput = {
  /** The SKU of the requested add-on. */
  sku: EgressAddOnSku;
};

export type EgressLimitAddOnOutput =
  | EgressLimitAddOnResult
  | PaymentError
  | UnauthorizedError
  | UserError;

export type EgressLimitAddOnResult = {
  __typename: 'EgressLimitAddOnResult';
  currentUser: CurrentUser;
};

/** A user is notified when they are approaching or have reached their monthly egress limit. */
export type EgressLimitNotification = {
  __typename: 'EgressLimitNotification';
  id: Scalars['Int'];
  limitGib: Scalars['Float'];
  percentage: Scalars['Float'];
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
  variant?: Maybe<NotificationsvariantEnumType>;
};

/** State of the Egress Power Up */
export type EgressPowerUpType = UserPowerUpDescriptionByType & {
  __typename: 'EgressPowerUpType';
  /** What call-to-action to present to the user, if any. Note that some of this information can be derived through other fields on this type, but only partially so (e.g. you wouldn't be able to tell whether the user has already had a trial or not without using this field). */
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  /** Whether the Power Up is active (irrespective of whether it is being paid for or a trial). Note that this is distinct from the "active" field on a cycles_users_orders entry, which itself denote whether the order is set to renew. */
  active: Scalars['Boolean'];
  /** The Cycles cost that the user would incur upon purchasing the Power Up with Cycles */
  cost?: Maybe<UserPowerUpCostDetailType>;
  /** If active, whether the user's access is due to a trial (rather than a paid subscription) */
  isTrial: Scalars['Boolean'];
  /** How the user is paying for this Power Up, if they are paying for it (null if they are not) */
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  /** The SKU associated with the Power Up */
  sku?: Maybe<EgressAddOnSku>;
  /** Which paid upgrade path to suggest for getting access to the power up. */
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']>;
  timeLastFulfilled?: Maybe<Scalars['Date']>;
  /** The time at which the user purchased the Power Up */
  timePurchased?: Maybe<Scalars['DateTime']>;
  /** If the user has (or has had) a trial, the expiry date thereof */
  timeTrialExpiry?: Maybe<Scalars['DateTime']>;
  /** Whether the Power Up will renew (and typically result in a charge for the user) */
  willRenew: Scalars['Boolean'];
};

export enum EgressUsageMethod {
  Reconcile = 'reconcile',
  Reset = 'reset',
}

export type EscalateBoardUserOutput =
  | BoardReport
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ExplainCodeOutput =
  | ExplainCodeResult
  | UnauthorizedError
  | UserError;

export type ExplainCodeResult = {
  __typename: 'ExplainCodeResult';
  explanation: Scalars['String'];
  id: Scalars['String'];
};

export type ExportProjectsOverviewInput = {
  teamName: Scalars['String'];
  templateIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type ExportProjectsOverviewOutput =
  | CurrentUser
  | NotFoundError
  | UnauthorizedError;

export type ExportTeamSubmissionsOutput =
  | ExportTeamSubmissionsResult
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ExportTeamSubmissionsResult = {
  __typename: 'ExportTeamSubmissionsResult';
  folderPath: Scalars['String'];
};

export type Extension = {
  __typename: 'Extension';
  description: Scalars['String'];
  id: Scalars['String'];
  installCount: Scalars['String'];
  installation?: Maybe<ExtensionInstallation>;
  isBlessed: Scalars['Boolean'];
  manifest?: Maybe<ExtensionManifestResult>;
  name: Scalars['String'];
  timeCreated: Scalars['Date'];
  timeUpdated?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  user: User;
};

export type ExtensionInstallationArgs = {
  replId?: InputMaybe<Scalars['String']>;
};

export type ExtensionCoverImage = {
  __typename: 'ExtensionCoverImage';
  label: Scalars['String'];
  path: Scalars['String'];
  url: Scalars['String'];
};

export type ExtensionFileHandler = {
  __typename: 'ExtensionFileHandler';
  glob: Scalars['String'];
  handler: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ExtensionInstallation = {
  __typename: 'ExtensionInstallation';
  extension?: Maybe<Extension>;
  id: Scalars['String'];
  /** The user who installed the extension */
  installer?: Maybe<User>;
  /** The repl to which the extension is installed */
  repl?: Maybe<Repl>;
  timeCreated: Scalars['Date'];
  timeUpdated?: Maybe<Scalars['Date']>;
  /** A signed JWT that an extension can use to authenticate a user */
  token?: Maybe<Scalars['String']>;
  /** The user to whom the extension is installed */
  user?: Maybe<User>;
};

export type ExtensionInstallationByIdOutput =
  | ExtensionInstallation
  | NotFoundError;

export type ExtensionInstallationList = {
  __typename: 'ExtensionInstallationList';
  installations: Array<ExtensionInstallation>;
};

export type ExtensionInstallationsOutput =
  | ExtensionInstallationList
  | NotFoundError
  | UnauthorizedError;

export type ExtensionManifest = {
  __typename: 'ExtensionManifest';
  coverImages?: Maybe<Array<ExtensionCoverImage>>;
  description: Scalars['String'];
  fileHandlers?: Maybe<Array<ExtensionFileHandler>>;
  icon?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  scopes?: Maybe<Array<ExtensionScope>>;
  supportEmail?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tools?: Maybe<Array<ExtensionTool>>;
  version: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type ExtensionManifestError = {
  __typename: 'ExtensionManifestError';
  message: Scalars['String'];
};

export type ExtensionManifestResult =
  | ExtensionManifest
  | ExtensionManifestError;

export type ExtensionMutation = {
  __typename: 'ExtensionMutation';
  /** Create a new extension */
  create?: Maybe<CluiOutput>;
  /** Delete an extension */
  delete?: Maybe<CluiOutput>;
  /** Update an extension */
  update?: Maybe<CluiOutput>;
};

export type ExtensionMutationCreateArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type ExtensionMutationDeleteArgs = {
  extensionId: Scalars['String'];
};

export type ExtensionMutationUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  extensionId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ExtensionOutput = Extension | NotFoundError;

export type ExtensionQuery = {
  __typename: 'ExtensionQuery';
  /** View extensions you have created */
  view?: Maybe<CluiOutput>;
};

export type ExtensionScope = {
  __typename: 'ExtensionScope';
  name: Scalars['String'];
  reason: Scalars['String'];
};

export type ExtensionTool = {
  __typename: 'ExtensionTool';
  handler: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FailHostingBuildInput = {
  buildId: Scalars['String'];
  targetDeploymentId: Scalars['String'];
};

export type FailHostingBuildOutput =
  | FailHostingBuildResult
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type FailHostingBuildResult = {
  __typename: 'FailHostingBuildResult';
  activityLog: HostingActivityLog;
  build: HostingBuild;
  deployment: HostingDeployment;
};

/** A feature flag */
export type Flag = {
  __typename: 'Flag';
  id: Scalars['String'];
  type: UserFlagValueType;
  value: Scalars['FlagValueType'];
};

export type FollowResult = {
  __typename: 'FollowResult';
  targetUser?: Maybe<User>;
  user?: Maybe<User>;
};

export type ForceSolverToAbandonBountyAsStaffInput = {
  bountyId: Scalars['Int'];
  reason: Scalars['String'];
};

export type ForceSolverToAbandonBountyAsStaffOutput =
  | Bounty
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type FreePlan = {
  __typename: 'FreePlan';
  displayName: Scalars['String'];
  items: Array<SubscriptionPlanItem>;
};

export type FreezeNeonDatabaseInput = {
  neonProjectId: Scalars['String'];
  replId: Scalars['String'];
};

export type FreezeNeonDatabaseOutput =
  | FreezeNeonDatabaseResult
  | UnauthorizedError
  | UserError;

export type FreezeNeonDatabaseResult = {
  __typename: 'FreezeNeonDatabaseResult';
  success: Scalars['Boolean'];
};

export type GenerateCodeInput = {
  /** The programming language to generate code in */
  language: Scalars['String'];
  /** The user-provided prompt for the code to generate */
  prompt: Scalars['String'];
  /** The ID of the Repl in which the code generation is requested. Used for analytics only */
  replId: Scalars['String'];
};

export type GenerateCodeOutput =
  | GenerateCodeResult
  | UnauthorizedError
  | UserError;

export type GenerateCodeResult = {
  __typename: 'GenerateCodeResult';
  code: Scalars['String'];
  id: Scalars['String'];
  metadata: Scalars['String'];
};

export type GetBannedBoardUserOutput =
  | BannedBoardUser
  | NotFoundError
  | UnauthorizedError;

export type GetGoogleClassroomCoursesOutput =
  | GoogleClassroomCourseOutput
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type GetGoogleClassroomStudentsOutput =
  | GoogleClassroomStudentOutput
  | UnauthorizedError
  | UserError;

export type GetNeonDatabasesInput = {
  replId: Scalars['String'];
};

export type GetNeonDatabasesOutput =
  | GetNeonDatabasesResult
  | UnauthorizedError
  | UserError;

export type GetNeonDatabasesResult = {
  __typename: 'GetNeonDatabasesResult';
  databases: Array<NeonDatabase>;
};

export type GetRecommendedBountiesForUserInput = {
  /** How many recommended Bounties to attempt to find */
  count?: InputMaybe<Scalars['Int']>;
};

export type GetRecommendedBountiesForUserOutput =
  | GetRecommendedBountiesForUserResult
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type GetRecommendedBountiesForUserResult = {
  __typename: 'GetRecommendedBountiesForUserResult';
  /** List of recommended Bounties */
  results: Array<Bounty>;
};

export type GetReplitCheckoutSessionInput = {
  /** Checkout session ID */
  id: Scalars['String'];
};

export type GetReplitCheckoutSessionOutput =
  | NotFoundError
  | ReplitCheckoutSession
  | UnauthorizedError;

export type GetUserReplCommentsInput = {
  userId: Scalars['Int'];
};

export type GetUserReplCommentsOutput =
  | UnauthorizedError
  | UserReplCommentsOutput;

/** State of the Ghostwriter Chat Metered Trial */
export type GhostwriterChatMeteredTrialStatus = {
  __typename: 'GhostwriterChatMeteredTrialStatus';
  cap: Scalars['Int'];
  hasAccessToMeteredTrial: Scalars['Boolean'];
  messagesSentInPeriod: Scalars['Int'];
};

/** State of the Ghostwriter Power Up */
export type GhostwriterPowerUpType = UserPowerUpDescriptionByType & {
  __typename: 'GhostwriterPowerUpType';
  /** What call-to-action to present to the user, if any. Note that some of this information can be derived through other fields on this type, but only partially so (e.g. you wouldn't be able to tell whether the user has already had a trial or not without using this field). */
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  /** Whether the Power Up is active (irrespective of whether it is being paid for or a trial). Note that this is distinct from the "active" field on a cycles_users_orders entry, which itself denote whether the order is set to renew. */
  active: Scalars['Boolean'];
  /** The Cycles cost that the user would incur upon purchasing the Power Up with Cycles */
  cost?: Maybe<UserPowerUpCostDetailType>;
  /** If active, whether the user's access is due to a trial (rather than a paid subscription) */
  isTrial: Scalars['Boolean'];
  /** State of the Ghostwriter Chat metered trial */
  meteredTrial?: Maybe<GhostwriterChatMeteredTrialStatus>;
  /** How the user is paying for this Power Up, if they are paying for it (null if they are not) */
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  /** Which paid upgrade path to suggest for getting access to the power up. */
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']>;
  timeLastFulfilled?: Maybe<Scalars['Date']>;
  /** If the user has (or has had) a trial, the expiry date thereof */
  timeTrialExpiry?: Maybe<Scalars['DateTime']>;
  /** Whether the Power Up will renew (and typically result in a charge for the user) */
  willRenew: Scalars['Boolean'];
};

export type GitHubInfo = {
  __typename: 'GitHubInfo';
  accessToken?: Maybe<Scalars['String']>;
  installations?: Maybe<Array<GitHubUserInstallations>>;
  userInfo?: Maybe<GitHubUserInfo>;
};

/** A GitHub language */
export type GitHubLanguage = {
  __typename: 'GitHubLanguage';
  color?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GitHubUserInfo = {
  __typename: 'GitHubUserInfo';
  avatarUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type GitHubUserInstallations = {
  __typename: 'GitHubUserInstallations';
  avatarUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: Scalars['String'];
};

/** The owner type of a GitHub repository */
export enum GithubRepoOwnerType {
  Organization = 'organization',
  User = 'user',
}

/** Google Classroom entry point */
export type GoogleClassroom = {
  __typename: 'GoogleClassroom';
  courseId: Scalars['String'];
  id: Scalars['Int'];
  /** Google Classroom students invites to Replit */
  members: Array<Maybe<GoogleClassroomMember>>;
  name: Scalars['String'];
};

export type GoogleClassroomCourseInfo = {
  __typename: 'GoogleClassroomCourseInfo';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GoogleClassroomCourseOutput = {
  __typename: 'GoogleClassroomCourseOutput';
  courses: Array<Maybe<GoogleClassroomCourseInfo>>;
};

export type GoogleClassroomMember = {
  __typename: 'GoogleClassroomMember';
  externalId: Scalars['String'];
  id: Scalars['Int'];
  invite?: Maybe<TeamInvite>;
  user?: Maybe<User>;
};

export type GoogleClassroomStudentInfo = {
  __typename: 'GoogleClassroomStudentInfo';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
};

export type GoogleClassroomStudentOutput = {
  __typename: 'GoogleClassroomStudentOutput';
  students: Array<Maybe<GoogleClassroomStudentInfo>>;
};

/** An object containing the connection metadata for a repl */
export type GovalMetadata = {
  __typename: 'GovalMetadata';
  conmanURL: Scalars['String'];
  gurl: Scalars['String'];
  token: Scalars['String'];
};

export type GraphQlGitHubApiFile = {
  path: Scalars['String'];
  type: GraphQlGitHubApiFileType;
};

export enum GraphQlGitHubApiFileType {
  Dir = 'dir',
  File = 'file',
}

export type HireBountyHunterServiceInput = {
  bountyHunterServiceId: Scalars['Int'];
  email: Scalars['String'];
};

export type HireBountyHunterServiceOutput =
  | HireBountyHunterServiceSuccess
  | NotFoundError
  | ServiceUnavailable
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type HireBountyHunterServiceSuccess = {
  __typename: 'HireBountyHunterServiceSuccess';
  bountyHunterService: BountyHunterService;
  hireRequestId: Scalars['String'];
};

/** Logs of activity for a hosting deployment, only accessible by users with write access to target Repl */
export type HostingActivityLog = {
  __typename: 'HostingActivityLog';
  /** The hosting build associated with this activity log */
  build: HostingBuild;
  /** The hosting deployment associated with this activity log */
  deployment: HostingDeployment;
  id: Scalars['Int'];
  timeCreated: Scalars['Date'];
  /** The type of activity log */
  type: HostingActivityLogType;
  /** The user who initiated the action */
  user: User;
};

/** A connection to a list of HostingActivityLogs. */
export type HostingActivityLogConnection = {
  __typename: 'HostingActivityLogConnection';
  /** A list of HostingActivityLogs. */
  items: Array<HostingActivityLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export enum HostingActivityLogType {
  Deploy = 'deploy',
  Fail = 'fail',
  Rollback = 'rollback',
}

/** A hosting build to be used in a hosting deployment, only accessible by users with write access to target Repl */
export type HostingBuild = {
  __typename: 'HostingBuild';
  description: Scalars['String'];
  /** The hosting builds environment variables */
  envVars: Array<HostingBuild2EnvVar>;
  /** Does the hosting build have an image tag assigned to it */
  hasImageTag: Scalars['Boolean'];
  id: Scalars['String'];
  /** The status of this hosting build */
  provider: HostingBuildProvider;
  /** The canonical repl for this deployment */
  repl: Repl;
  /** The status of this hosting build */
  status: HostingBuildStatus;
  timeCreated: Scalars['Date'];
  timeUpdated?: Maybe<Scalars['Date']>;
  /** The user who created this build */
  user: User;
};

export type HostingBuild2EnvVar = {
  __typename: 'HostingBuild2EnvVar';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type HostingBuildDeployActionHistoryInput = {
  buildId: Scalars['String'];
};

export type HostingBuildDeployActionHistoryOutput =
  | HostingBuildDeployActionHistoryResults
  | NotFoundError
  | UnauthorizedError;

/** Hosting build deploy action history */
export type HostingBuildDeployActionHistoryResults = {
  __typename: 'HostingBuildDeployActionHistoryResults';
  results?: Maybe<Array<HostingBuildDeployActionUpdateEvent>>;
};

/** A hosting deploy action update event */
export type HostingBuildDeployActionUpdateEvent =
  | HostingBuildDeployLogAction
  | HostingBuildDeployStatusAction;

export type HostingBuildDeployActionUpdatesInput = {
  buildId: Scalars['String'];
};

export type HostingBuildDeployLogAction = {
  __typename: 'HostingBuildDeployLogAction';
  log: Scalars['String'];
};

export type HostingBuildDeployStatusAction = {
  __typename: 'HostingBuildDeployStatusAction';
  message?: Maybe<Scalars['String']>;
  status: HostingBuildStatus;
};

export enum HostingBuildProvider {
  CloudRun = 'cloud_run',
  Gce = 'gce',
  Goval = 'goval',
  Static = 'static',
}

export enum HostingBuildStatus {
  Building = 'building',
  Failed = 'failed',
  Pending = 'pending',
  Promoting = 'promoting',
  Resuming = 'resuming',
  Running = 'running',
  Success = 'success',
  Suspended = 'suspended',
  Suspending = 'suspending',
  UpdatingTier = 'updating_tier',
}

/** A hosting deployment for a repl, only accessible by users with write access to target Repl */
export type HostingDeployment = {
  __typename: 'HostingDeployment';
  /** The activity logs for this deployment, for initial deployments an activity log can be of type "rollback" or "deploy" */
  activityLogs: HostingActivityLogConnection;
  /** The latest build attached to this deployment, for initial deployments this could be in "building" or "failed" or "success" status */
  currentBuild: HostingBuild;
  id: Scalars['String'];
  /** If a deployment has an actively deploying hosting build */
  inProgressBuild?: Maybe<HostingBuild>;
  /** The canonical repl for this deployment */
  repl: Repl;
  replitAppSubdomain?: Maybe<Scalars['String']>;
  timeCreated: Scalars['Date'];
  timeUpdated?: Maybe<Scalars['Date']>;
};

/** A hosting deployment for a repl, only accessible by users with write access to target Repl */
export type HostingDeploymentActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  direction?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
};

export enum HostingTierPowerUpSku {
  HostingTierE2Medium = 'hosting_tier_e2_medium',
  HostingTierE2Micro = 'hosting_tier_e2_micro',
  HostingTierE2Small = 'hosting_tier_e2_small',
  HostingTierE2Standard_2 = 'hosting_tier_e2_standard_2',
  HostingTierE2Standard_4 = 'hosting_tier_e2_standard_4',
  HostingTierN1Custom_1_4 = 'hosting_tier_n1_custom_1_4',
}

/** State of the Hosting Tier Power Up */
export type HostingTierPowerUpType = {
  __typename: 'HostingTierPowerUpType';
  /** If active, the explanation for how the Power Up was created */
  methodOfPayment: PowerUpMethodOfPayment;
  /** Hosting tier machine type (vCPU, RAM) provided by the Power Up */
  sku: HostingTierPowerUpSku;
};

/** The result of an IO test being run on a repl */
export type IoTestResult = {
  __typename: 'IOTestResult';
  /** A unique ID for the result type */
  id: Scalars['ID'];
  /** The output of the program when the test was executed. */
  output: Scalars['String'];
  /** The repl which the test the result belongs to was executed on for this result. */
  repl: IoTestResultReplType;
  /** The status of the test that was executed. */
  status: IoTestResultStatus;
  /** The test which was executed to get the result */
  test: IoTestResultTestType;
};

/** An input type for telling the server the results of an IO test. */
export type IoTestResultInput = {
  /** The output of the program when the test was executed. */
  output: Scalars['String'];
  /** The status of the test that was executed. */
  status: IoTestResultStatus;
  /** The ID of the test which was executed on the repl. */
  testId: Scalars['Int'];
};

export type IoTestResultReplType = NotFoundError | Repl;

/** The status of a result of an IO test. */
export enum IoTestResultStatus {
  /** The IO tests failed. */
  Failed = 'failed',
  /** The IO tests passed. */
  Passed = 'passed',
}

export type IoTestResultTestType = NotFoundError | ReplTemplateTest;

export type ImageScan = {
  __typename: 'ImageScan';
  /** User who uploaded the image */
  creator: User;
  /** Image scan classification ID */
  id: Scalars['Int'];
  /** ID of the image that corresponds to the scan */
  image_id: Scalars['Int'];
  /** URL to the image */
  image_url: Scalars['String'];
  /** Whether the image scan has been resolved */
  resolved: Scalars['Boolean'];
  /** Score associated to the image by the scanning model */
  score: Scalars['Float'];
  /** When the image was uploaded */
  time_image_uploaded?: Maybe<Scalars['DateTime']>;
  /** When the image scan was completed */
  time_scan_results_obtained?: Maybe<Scalars['DateTime']>;
  /** Context in which the image was uploaded */
  upload_context: Scalars['String'];
};

/** A connection to a list of ImageScans. */
export type ImageScanConnection = {
  __typename: 'ImageScanConnection';
  /** A list of ImageScans. */
  items: Array<ImageScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageScanType = ImageScan | UnauthorizedError | UserError;

export type ImageScansOutput =
  | ImageScanConnection
  | UnauthorizedError
  | UserError;

export type ImportCurriculumInput = {
  curriculumId: Scalars['Int'];
  teamId: Scalars['Int'];
  versionNumber: Scalars['Int'];
};

export type ImportCurriculumOutput = NotFoundError | Team | UnauthorizedError;

export type ImportGithubRepoInput = {
  activeReplReleaseId?: InputMaybe<Scalars['String']>;
  folderId?: InputMaybe<Scalars['String']>;
  forkToPersonal?: InputMaybe<Scalars['Boolean']>;
  githubRepoUrl: Scalars['String'];
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  originId: Scalars['String'];
  teamId?: InputMaybe<Scalars['Int']>;
};

export type ImportGithubRepoOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type InstallExtensionOutput =
  | ExtensionInstallation
  | UnauthorizedError
  | UserError;

export type InstallThemeInput = {
  themeId: Scalars['Int'];
};

export type InstallThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

/** The root type for an installed theme */
export type InstalledTheme = {
  __typename: 'InstalledTheme';
  customTheme: CustomTheme;
  id: Scalars['Int'];
  themeVersion: ThemeVersion;
  user: User;
};

/** A connection to a list of InstalledThemes. */
export type InstalledThemeConnection = {
  __typename: 'InstalledThemeConnection';
  /** A list of InstalledThemes. */
  items: Array<InstalledTheme>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type InstantGitHubImportInput = {
  repository: Scalars['String'];
  username: Scalars['String'];
};

export type InstantGitHubImportOutput =
  | InstantGitHubImportResult
  | NotFoundError
  | UserError;

export type InstantGitHubImportResult = {
  __typename: 'InstantGitHubImportResult';
  isPrivate: Scalars['Boolean'];
  language: Scalars['String'];
  templateId: Scalars['String'];
};

export enum Intent {
  IntentBusiness = 'INTENT_BUSINESS',
  IntentPersonal = 'INTENT_PERSONAL',
  IntentStudent = 'INTENT_STUDENT',
  IntentTeacher = 'INTENT_TEACHER',
}

export type Invoice = {
  __typename: 'Invoice';
  amount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** The user who issued the invoice.  Null if the user was deleted. */
  issuer?: Maybe<User>;
  /** The user the invoice was issued to.  Null if the user was deleted. */
  recipient?: Maybe<User>;
  redirectUrl?: Maybe<Scalars['String']>;
  /** The status of the invoice */
  status: InvoiceStatus;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  title: Scalars['String'];
};

export type InvoiceOutput = Invoice | NotFoundError | UnauthorizedError;

export enum InvoiceStatus {
  /** The charge has been approved but needs to be confirmed by the application. */
  Approved = 'APPROVED',
  /** The transaction was cancelled by the application. */
  Cancelled = 'CANCELLED',
  /** The invoice has been confirmed and cycles have been issued. */
  Completed = 'COMPLETED',
  /** The transaction was denied by the user. */
  Denied = 'DENIED',
  /** The invoice is pending approval. */
  Pending = 'PENDING',
}

export type JoinReplSubmissionGroupInput = {
  submissionId: Scalars['Int'];
  teamId: Scalars['Int'];
};

export type JoinReplSubmissionGroupOutput =
  | NotFoundError
  | ReplSubmission
  | UnauthorizedError
  | UserError;

export type JoinTeamAsOrgAdminOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | UserError;

export type Keybindings = {
  __typename: 'Keybindings';
  keybindings?: Maybe<Scalars['JSON']>;
};

export enum KeybindingsEnvironmentEnum {
  DesktopApp = 'desktop_app',
  DesktopWeb = 'desktop_web',
  MobileApp = 'mobile_app',
  MobileWeb = 'mobile_web',
}

export enum KeybindingsPlatformEnum {
  Linux = 'linux',
  Mac = 'mac',
  Windows = 'windows',
}

/** A Repl language */
export type Language = {
  __typename: 'Language';
  aliases?: Maybe<Array<LanguageAlias>>;
  betaTemplateRepl?: Maybe<Repl>;
  canUseShellRunner: Scalars['Boolean'];
  category: Scalars['String'];
  displayName: Scalars['String'];
  engine?: Maybe<Scalars['String']>;
  examples?: Maybe<Array<LanguageExample>>;
  hasDAP: Scalars['Boolean'];
  hasGit: Scalars['Boolean'];
  hasLibSearch: Scalars['Boolean'];
  hasReplboxUrlBar: Scalars['Boolean'];
  hasReplboxWebview: Scalars['Boolean'];
  hasUPM: Scalars['Boolean'];
  header?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** @deprecated We're migrating languages on the fly, never deprecating them */
  isDeprecated: Scalars['Boolean'];
  isNew?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  mainFile: Scalars['String'];
  nixTemplateRepl?: Maybe<Repl>;
  recentReplsCreatedCount: Scalars['Int'];
  supportsGit: Scalars['Boolean'];
  /** @deprecated all languages support multi files now */
  supportsMultiFiles: Scalars['Boolean'];
  supportsPackager3: Scalars['Boolean'];
  tagName: Scalars['String'];
  tagline: Scalars['String'];
  templateRepl?: Maybe<Repl>;
  usesInterpreter: Scalars['Boolean'];
  /** @deprecated all languages use terminal2 now */
  usesTerminal2: Scalars['Boolean'];
};

/** Example code for a language */
export type LanguageAlias = {
  __typename: 'LanguageAlias';
  category: Scalars['String'];
  displayName: Scalars['String'];
  icon: Scalars['String'];
  tagline: Scalars['String'];
};

/** Example code for a language */
export type LanguageExample = {
  __typename: 'LanguageExample';
  code: Scalars['String'];
  mainFile: Scalars['String'];
  name: Scalars['String'];
};

export type LatestBountyChatMessageInput = {
  bountyApplicationId: Scalars['Int'];
};

/** A leaderboard of users who have received the most tips */
export type LeaderboardTopTippersResult = {
  __typename: 'LeaderboardTopTippersResult';
  leaderboard: Array<TipperUser>;
};

export type LeaveTeamOutput = Team | UserError;

/** A lesson / repl pair */
export type LessonRepl = {
  __typename: 'LessonRepl';
  lessonSlug: Scalars['String'];
  repl: Repl;
};

export type LinkReplDomain2 =
  | NotFoundError
  | Repl
  | ServiceUnavailable
  | UnauthorizedError;

/** A stack to copied when a share link is used */
export type LinkStack = {
  __typename: 'LinkStack';
  /** The id of the stack to be copied */
  id: Scalars['Int'];
  /** A list of ids of the templates within the stack to be copied */
  templates: Array<Scalars['Int']>;
  /** The title of the stack to be copied */
  title?: Maybe<Scalars['String']>;
};

export type ManualCurationMutation = {
  __typename: 'ManualCurationMutation';
  /** Make a Repl trend in the community */
  add?: Maybe<CluiOutput>;
  /** reset the redis cache for trending items manually (add & remove do this automatically) */
  refresh?: Maybe<CluiOutput>;
  /** remove a selected Repl from the curated homepage picks */
  remove?: Maybe<CluiOutput>;
};

export type ManualCurationMutationAddArgs = {
  url: Scalars['String'];
};

export type ManualCurationMutationRemoveArgs = {
  url: Scalars['String'];
};

export type ManualCurationQuery = {
  __typename: 'ManualCurationQuery';
  /** View Trending Repl picks */
  list?: Maybe<CluiOutput>;
};

export type MarkBountyChatReadInput = {
  bountyApplicationId: Scalars['Int'];
};

export type MarkBountyChatReadOutput =
  | BountyChatMessage
  | NotFoundError
  | UnauthorizedError;

export type MarkMessagesAsSeenOutput = AnnotationMessageList | UserError;

/** Notification for when a user is at-metioned in a comment */
export type MentionedInCommentNotification = {
  __typename: 'MentionedInCommentNotification';
  comment?: Maybe<Comment>;
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** Notification for when a user is at-metioned in a post */
export type MentionedInPostNotification = {
  __typename: 'MentionedInPostNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  post?: Maybe<Post>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type MessageContentType =
  | PreviewMessageContentType
  | StatusMessageContentType
  | TextMessageContentType;

export type Metadata = {
  __typename: 'Metadata';
  relation?: Maybe<MetadataRelationEnumType>;
  system?: Maybe<MetadataSystemEnumType>;
};

export enum MetadataRelationEnumType {
  Bounties = 'bounties',
  ExternalTransactions = 'external_transactions',
  ReplOrder = 'repl_order',
  Tips = 'tips',
  UserOrder = 'user_order',
}

export enum MetadataSystemEnumType {
  WebPostgres = 'web_postgres',
}

export type MigrateTeamToStacksOutput = NotFoundError | Team | UserError;

export enum ModerateBountyApplicationAction {
  Approve = 'approve',
  Delete = 'delete',
}

export type ModerateBountyApplicationInput = {
  action: ModerateBountyApplicationAction;
  bountyApplicationId: Scalars['Int'];
  notifyApplicant?: InputMaybe<Scalars['Boolean']>;
  reason?: InputMaybe<Scalars['String']>;
};

export type ModerateBountyApplicationOutput =
  | BountyApplication
  | NotFoundError
  | UnauthorizedError
  | UserError;

export enum ModeratorAuditActionType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE',
}

/** A moderator audit log entry. */
export type ModeratorAuditLog = {
  __typename: 'ModeratorAuditLog';
  bannedUser?: Maybe<User>;
  boardReport?: Maybe<BoardReport>;
  bountyApplication?: Maybe<BountyApplication>;
  comment?: Maybe<ReplComment>;
  customTheme?: Maybe<CustomTheme>;
  id: Scalars['Int'];
  model: Moderator_Action_RecordmodelEnumType;
  moderator?: Maybe<User>;
  notification?: Maybe<BasicNotification>;
  post?: Maybe<Post>;
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  type: Moderator_Action_RecordtypeEnumType;
  updateBody?: Maybe<Scalars['String']>;
  warnedUser?: Maybe<User>;
};

/** A connection to a list of ModeratorAuditLogs. */
export type ModeratorAuditLogConnection = {
  __typename: 'ModeratorAuditLogConnection';
  /** A list of ModeratorAuditLogs. */
  items: Array<ModeratorAuditLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Additional options for pagination and filtering audit log */
export type ModeratorAuditLogInputType = {
  after?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<ModeratorAuditLogModel>;
  moderator?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModeratorAuditLogOrder>;
  replId?: InputMaybe<Scalars['String']>;
  targetId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<ModeratorAuditLogType>;
};

export enum ModeratorAuditLogModel {
  BannedBoardUsers = 'bannedBoardUsers',
  BoardReports = 'boardReports',
  Boards = 'boards',
  BountyApplications = 'bountyApplications',
  Comments = 'comments',
  CustomThemes = 'customThemes',
  Notifications = 'notifications',
  Posts = 'posts',
  Repls = 'repls',
  Warning = 'warning',
}

export enum ModeratorAuditLogOrder {
  Newest = 'newest',
  Oldest = 'oldest',
}

export type ModeratorAuditLogOutput =
  | ModeratorAuditLogConnection
  | UnauthorizedError;

export enum ModeratorAuditLogType {
  Create = 'create',
  Delete = 'delete',
  Update = 'update',
}

/** The accessible models for the moderator audit. */
export enum ModeratorAuditModels {
  BannedBoardUsers = 'BannedBoardUsers',
  BoardReports = 'BoardReports',
  Comments = 'Comments',
  Posts = 'Posts',
  Warning = 'Warning',
}

export enum ModeratorAuditSorting {
  /** Sort newest to oldest */
  Newest = 'NEWEST',
  /** Sort oldest to newest */
  Oldest = 'OLDEST',
}

export type ModeratorCliAuditQuery = {
  __typename: 'ModeratorCliAuditQuery';
  /** View the moderator audit log. */
  viewAudit?: Maybe<CluiOutput>;
  /** View the moderator audit log. */
  viewItem?: Maybe<CluiOutput>;
};

export type ModeratorCliAuditQueryViewAuditArgs = {
  actionType?: InputMaybe<ModeratorAuditActionType>;
  creator?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<ModeratorAuditModels>;
  order?: InputMaybe<ModeratorAuditSorting>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ModeratorCliAuditQueryViewItemArgs = {
  id: Scalars['Int'];
};

export type ModeratorCliPostQuery = {
  __typename: 'ModeratorCliPostQuery';
  /** View a post/comments voters. */
  showVotes?: Maybe<CluiOutput>;
};

export type ModeratorCliPostQueryShowVotesArgs = {
  commentId?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
};

export type ModeratorCliUserMutation = {
  __typename: 'ModeratorCliUserMutation';
  /** Ban a user from Repl Talk. */
  ban?: Maybe<CluiOutput>;
  /** Remove a warning by its id. */
  removeWarn?: Maybe<CluiOutput>;
  /** Warn a user. */
  warn?: Maybe<CluiOutput>;
};

export type ModeratorCliUserMutationBanArgs = {
  reason?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type ModeratorCliUserMutationRemoveWarnArgs = {
  user: Scalars['String'];
  warnId: Scalars['Int'];
};

export type ModeratorCliUserMutationWarnArgs = {
  reason: Scalars['String'];
  user: Scalars['String'];
};

export type ModeratorCliUserQuery = {
  __typename: 'ModeratorCliUserQuery';
  /** View a users warnings. */
  viewWarns?: Maybe<CluiOutput>;
};

export type ModeratorCliUserQueryViewWarnsArgs = {
  user: Scalars['String'];
};

export type ModeratorCluiMutation = {
  __typename: 'ModeratorCluiMutation';
  /** Remove a tag on Apps */
  removeTag?: Maybe<CluiOutput>;
  /** Unpublish a repl */
  unpublish?: Maybe<CluiOutput>;
  /** Ban, warn, view-warns, etc. */
  user?: Maybe<ModeratorCliUserMutation>;
};

export type ModeratorCluiMutationRemoveTagArgs = {
  banTag: Scalars['Boolean'];
  reason: Scalars['String'];
  tag: Scalars['String'];
};

export type ModeratorCluiMutationUnpublishArgs = {
  reason: Scalars['String'];
  replUrl: Scalars['String'];
};

export type ModeratorCluiQuery = {
  __typename: 'ModeratorCluiQuery';
  /** View moderator audits */
  audit?: Maybe<ModeratorCliAuditQuery>;
  /** Manage a post. */
  post?: Maybe<ModeratorCliPostQuery>;
  /** Ban, warn, view-warns, etc. */
  user?: Maybe<ModeratorCliUserQuery>;
  /** View Repl Talk bans */
  viewBans?: Maybe<CluiOutput>;
};

export type ModeratorNotificationInput = {
  text: Scalars['String'];
  url: Scalars['String'];
  username: Scalars['String'];
};

export type ModeratorNotificationOutput =
  | AnnotationNotification
  | AnswerAcceptedNotification
  | BasicNotification
  | BountyApplicationReviewedNotification
  | BountyChatMessageNotification
  | BountyNewApplicationNotification
  | BountyNewSubmissionNotification
  | BountySubmissionReviewedNotification
  | EditRequestAcceptedNotification
  | EditRequestCreatedNotification
  | EgressLimitNotification
  | MentionedInCommentNotification
  | MentionedInPostNotification
  | MultiplayerInvitedNotification
  | MultiplayerJoinedEmailNotification
  | MultiplayerJoinedLinkNotification
  | MultiplayerOverlimitNotification
  | NewFollowerNotification
  | NotFoundError
  | ReplCommentCreatedNotification
  | ReplCommentMentionNotification
  | ReplCommentReplyCreatedNotification
  | RepliedToCommentNotification
  | RepliedToPostNotification
  | TeamInviteNotification
  | TeamOrganizationInviteNotification
  | TeamTemplateReviewedStatusNotification
  | TeamTemplateSubmittedNotification
  | ThreadNotification
  | TipReceivedNotification
  | UnauthorizedError
  | WarningNotification;

export type ModeratorUnpublishInput = {
  reason: Scalars['String'];
  replId: Scalars['String'];
};

export type ModeratorUnpublishOutput = NotFoundError | Repl | UnauthorizedError;

/** Summary of monthly egress consumption, at account and Repl levels. */
export type MonthlyEgressSummary = {
  __typename: 'MonthlyEgressSummary';
  /** Whether the limit is currently enforced. */
  isEnforced: Scalars['Boolean'];
  /** Whether egress is currently throttled. */
  isThrottled: Scalars['Boolean'];
  /** The number of bytes allotted to the account for this month. Represented as a string because GiB can easily exceed int32. */
  limit: Scalars['String'];
  /** Egress consumption for this month broken out by Repl. */
  perRepl: Array<ReplEgressSummary>;
  /** The date on which the limit resets */
  resets: Scalars['String'];
  /** Whether the user should be prompted to upgrade. */
  showUpgrade: Scalars['Boolean'];
  /** Beginning of the month captured by the summary */
  start: Scalars['DateTime'];
  /** The number of bytes used by the account for this month. Represented as a string because GiB can easily exceed int32. */
  usage: Scalars['String'];
};

/** An emailed invite to join Replit multiplayer */
export type MultiplayerInvite = {
  __typename: 'MultiplayerInvite';
  email: Scalars['String'];
  repl?: Maybe<Repl>;
  replId: Scalars['String'];
  type: Multiplayer_InvitestypeEnumType;
};

export type MultiplayerInviteOutput =
  | MultiplayerInvite
  | ReplPermission
  | UserError;

/** Notification for when a user gets an invite to collab on a multiplayer repl */
export type MultiplayerInvitedNotification = {
  __typename: 'MultiplayerInvitedNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** Notification for when a user joined a multiplayer session via email invite */
export type MultiplayerJoinedEmailNotification = {
  __typename: 'MultiplayerJoinedEmailNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** Notification for when a user joined a multiplayer session via email link */
export type MultiplayerJoinedLinkNotification = {
  __typename: 'MultiplayerJoinedLinkNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** Notification for when a user tried to join a multiplayer session but couldnt due to limits */
export type MultiplayerOverlimitNotification = {
  __typename: 'MultiplayerOverlimitNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type NeonDatabase = {
  __typename: 'NeonDatabase';
  connectionString: Scalars['String'];
  databaseId: Scalars['Int'];
  databaseName: Scalars['String'];
  isFrozen: Scalars['Boolean'];
  projectId: Scalars['String'];
};

/** State of the Neon Database Preview Power Up */
export type NeonDatabasePreviewPowerUpType = UserPowerUpDescriptionByType & {
  __typename: 'NeonDatabasePreviewPowerUpType';
  /** What call-to-action to present to the user, if any. Note that some of this information can be derived through other fields on this type, but only partially so (e.g. you wouldn't be able to tell whether the user has already had a trial or not without using this field). */
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  /** Whether the Power Up is active (irrespective of whether it is being paid for or a trial). Note that this is distinct from the "active" field on a cycles_users_orders entry, which itself denote whether the order is set to renew. */
  active: Scalars['Boolean'];
  connectedRepls: Array<Repl>;
  /** The cost that the user would incur upon purchasing the Power Up */
  cost?: Maybe<UserPowerUpCostDetailType>;
  /** If active, whether the user's access is due to a trial (rather than a paid subscription) */
  isTrial: Scalars['Boolean'];
  /** How the user is paying for this Power Up, if they are paying for it (null if they are not) */
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  neonDatabaseName: Scalars['String'];
  /** Which paid upgrade path to suggest for getting access to the power up. */
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']>;
  timeLastFulfilled?: Maybe<Scalars['Date']>;
  /** If the user has (or has had) a trial, the expiry date thereof */
  timeTrialExpiry?: Maybe<Scalars['DateTime']>;
  /** Whether the Power Up will renew (and typically result in a charge for the user) */
  willRenew: Scalars['Boolean'];
};

/** notification for when you gain a new follower */
export type NewFollowerNotification = {
  __typename: 'NewFollowerNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** An error caused by being unable to locate a resource */
export type NotFoundError = {
  __typename: 'NotFoundError';
  message: Scalars['String'];
};

export type Notification =
  | AnnotationNotification
  | AnswerAcceptedNotification
  | BasicNotification
  | BountyApplicationReviewedNotification
  | BountyChatMessageNotification
  | BountyNewApplicationNotification
  | BountyNewSubmissionNotification
  | BountySubmissionReviewedNotification
  | EditRequestAcceptedNotification
  | EditRequestCreatedNotification
  | EgressLimitNotification
  | MentionedInCommentNotification
  | MentionedInPostNotification
  | MultiplayerInvitedNotification
  | MultiplayerJoinedEmailNotification
  | MultiplayerJoinedLinkNotification
  | MultiplayerOverlimitNotification
  | NewFollowerNotification
  | ReplCommentCreatedNotification
  | ReplCommentMentionNotification
  | ReplCommentReplyCreatedNotification
  | RepliedToCommentNotification
  | RepliedToPostNotification
  | TeamInviteNotification
  | TeamOrganizationInviteNotification
  | TeamTemplateReviewedStatusNotification
  | TeamTemplateSubmittedNotification
  | ThreadNotification
  | TipReceivedNotification
  | WarningNotification;

/** A connection to a list of Notifications. */
export type NotificationConnection = {
  __typename: 'NotificationConnection';
  /** A list of Notifications. */
  items: Array<Notification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export enum NotificationContext {
  Annotation = 'annotation',
  Board = 'board',
  Classroom = 'classroom',
  Multiplayer = 'multiplayer',
  Team = 'team',
}

export enum OfficialReplitThemeKey {
  ReplitDark = 'replitDark',
  ReplitLight = 'replitLight',
  ReplitSpooky = 'replitSpooky',
}

export enum OnboardingExperience {
  OnboardingExperienceHigh = 'ONBOARDING_EXPERIENCE_HIGH',
  OnboardingExperienceLow = 'ONBOARDING_EXPERIENCE_LOW',
  OnboardingExperienceMedium = 'ONBOARDING_EXPERIENCE_MEDIUM',
  OnboardingExperienceNone = 'ONBOARDING_EXPERIENCE_NONE',
}

export enum OverrideBehaviorEnum {
  Disabled = 'disabled',
  Enabled = 'enabled',
}

export type OwnAnonReplInput = {
  replId: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename: 'PageInfo';
  /** Next results available */
  hasNextPage: Scalars['Boolean'];
  /** Previous results available */
  hasPreviousPage: Scalars['Boolean'];
  /** Cursor to fetch next page */
  nextCursor?: Maybe<Scalars['String']>;
  /** Cursor to fetch previous page */
  previousCursor?: Maybe<Scalars['String']>;
};

/** An error of Payment Processor origin */
export type PaymentError = {
  __typename: 'PaymentError';
  message: Scalars['String'];
};

/** A payment method */
export type PaymentMethod = {
  __typename: 'PaymentMethod';
  /** The month the card expires */
  expirationMonth: Scalars['Int'];
  /** The year the card expires */
  expirationYear: Scalars['Int'];
  /** The ID of the payment method in the payment provider */
  externalId: Scalars['String'];
  /** The ID of the payment method */
  id: Scalars['Int'];
  /** Whether the payment method has been saved in our database. If false, this is a candidate card that has not been saved yet. */
  isSaved: Scalars['Boolean'];
  /** The last 4 digits of the card */
  last4: Scalars['Int'];
};

export enum PaymentProviderEnum {
  Apple = 'apple',
  Google = 'google',
  Stripe = 'stripe',
}

export type PinReplToProfileOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type PlanDetails = {
  __typename: 'PlanDetails';
  costInUsdCents: Scalars['Int'];
  googleSubscriptionId?: Maybe<Scalars['String']>;
  planId: Scalars['String'];
};

export type PlanInfo = {
  __typename: 'PlanInfo';
  /** The unit amount in cents to be charged, represented as a whole integer if possible */
  amount?: Maybe<Scalars['Int']>;
  cancelAt?: Maybe<Scalars['DateTime']>;
  coupon?: Maybe<DiscountInfo>;
  description: Scalars['String'];
  interval?: Maybe<Scalars['String']>;
  nextPaymentDue?: Maybe<Scalars['DateTime']>;
  provider: PaymentProviderEnum;
};

/** A board to post repls to */
export type Post = {
  __typename: 'Post';
  answer?: Maybe<Comment>;
  answeredBy?: Maybe<User>;
  board?: Maybe<Board>;
  body: Scalars['String'];
  canChangeBoard: Scalars['Boolean'];
  canComment: Scalars['Boolean'];
  canEdit: Scalars['Boolean'];
  canHide: Scalars['Boolean'];
  canLock: Scalars['Boolean'];
  canPin: Scalars['Boolean'];
  canReport: Scalars['Boolean'];
  canSetType: Scalars['Boolean'];
  canVote: Scalars['Boolean'];
  commentCount: Scalars['Int'];
  comments?: Maybe<CommentConnection>;
  hasReported: Scalars['Boolean'];
  hasVoted: Scalars['Boolean'];
  id: Scalars['Int'];
  isAnnouncement: Scalars['Boolean'];
  isAnswerable: Scalars['Boolean'];
  isAnswered: Scalars['Boolean'];
  isAuthor: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  isLocked?: Maybe<Scalars['Boolean']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  preview: Scalars['String'];
  recentComments?: Maybe<Array<Comment>>;
  recentReplComments?: Maybe<Array<ReplComment>>;
  repl?: Maybe<Repl>;
  replComment?: Maybe<ReplComment>;
  showHosted?: Maybe<Scalars['Boolean']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  user?: Maybe<User>;
  voteCount: Scalars['Int'];
  /** Finds a post's votes */
  votes?: Maybe<PostVoteConnection>;
};

/** A board to post repls to */
export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
};

/** A board to post repls to */
export type PostPreviewArgs = {
  length?: InputMaybe<Scalars['Int']>;
  removeMarkdown?: InputMaybe<Scalars['Boolean']>;
};

/** A board to post repls to */
export type PostRecentCommentsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

/** A board to post repls to */
export type PostVotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  direction?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of Posts. */
export type PostConnection = {
  __typename: 'PostConnection';
  /** A list of Posts. */
  items: Array<Post>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PostPurchasePowerUp = {
  replPowerUp: PostPurchaseReplPowerUp;
};

export type PostPurchaseReplPowerUp = {
  replId: Scalars['String'];
  sku: PostPurchaseReplPowerUpSkuEnumType;
  type: PostPurchaseReplPowerUpOrderTypeEnumType;
};

export enum PostPurchaseReplPowerUpOrderTypeEnumType {
  Boost = 'boost',
  HostingTier = 'hosting_tier',
}

export enum PostPurchaseReplPowerUpSkuEnumType {
  Boost_2cpu_2ram = 'boost_2cpu_2ram',
  Boost_4cpu_4ram = 'boost_4cpu_4ram',
  Boost_8cpu_8ram = 'boost_8cpu_8ram',
  Boost_16cpu_16ram = 'boost_16cpu_16ram',
  HostingTierE2Medium = 'hosting_tier_e2_medium',
  HostingTierE2Micro = 'hosting_tier_e2_micro',
  HostingTierE2Small = 'hosting_tier_e2_small',
  HostingTierE2Standard_2 = 'hosting_tier_e2_standard_2',
  HostingTierE2Standard_4 = 'hosting_tier_e2_standard_4',
  HostingTierN1Custom_1_4 = 'hosting_tier_n1_custom_1_4',
}

/** A board to post repls to */
export type PostVote = {
  __typename: 'PostVote';
  id: Scalars['Int'];
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

/** A connection to a list of PostVotes. */
export type PostVoteConnection = {
  __typename: 'PostVoteConnection';
  /** A list of PostVotes. */
  items: Array<PostVote>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A call-to-action to present to the current user */
export enum PowerUpCallToActionEnumType {
  /** The user should be prompted to activate the feature */
  Activate = 'ACTIVATE',
  /** The user has activated the feature, and an optional call-to-action can be presented to them in light of that */
  Activated = 'ACTIVATED',
  /**
   * The user should be prompted to activate the feature, however they should not be offered a trial as they already had one. We used to offer self-enrollment into Ghostwriter trials in the client. We've deprecated that feature.
   * @deprecated No longer handled by the client
   */
  ActivateAlreadyTrialed = 'ACTIVATE_ALREADY_TRIALED',
  /** The user had activated the feature in the context of a trial, and the trial has expired */
  TrialExpired = 'TRIAL_EXPIRED',
  /** The user has activated the feature in the context of a trial */
  TrialOngoing = 'TRIAL_ONGOING',
}

/** The cost associated with a given Power Up */
export type PowerUpCostDetail2Type = {
  __typename: 'PowerUpCostDetail2Type';
  cyclesCostNow: Scalars['Int'];
  cyclesCostRecurring: Scalars['Int'];
  explanation: PowerUpCostExplanationEnumType;
  methodOfPayment: PowerUpCostMethodOfPaymentEnum;
};

/** The cost associated with a given Power Up */
export type PowerUpCostDetailType = {
  __typename: 'PowerUpCostDetailType';
  cycles: Scalars['Int'];
  explanation: PowerUpCostExplanationEnumType;
};

/** The explanation for how a cost was set */
export enum PowerUpCostExplanationEnumType {
  /** Requires activation an existing order */
  ActivateExistingOrder = 'ACTIVATE_EXISTING_ORDER',
  /** Activating the power up will trigger Cycles auto-refill */
  AutoRefill = 'AUTO_REFILL',
  /** Included in a user or Repl's existing order */
  IncludedInExistingOrder = 'INCLUDED_IN_EXISTING_ORDER',
  /** Included in the user's subscription (i.e. Hacker or Teams Pro) */
  IncludedInSubscription = 'INCLUDED_IN_SUBSCRIPTION',
  /** Requires the user to buy more cycles */
  NeedsCycles = 'NEEDS_CYCLES',
  /** Requires the user to get a subscription (i.e. Hacker or Teams Pro) */
  NeedsSubscription = 'NEEDS_SUBSCRIPTION',
  /** This product is not supported for team */
  NotSupportedForTeams = 'NOT_SUPPORTED_FOR_TEAMS',
  /** Requires the user to spend cycles */
  SpendCycles = 'SPEND_CYCLES',
}

export enum PowerUpCostMethodOfPaymentEnum {
  Cycles = 'CYCLES',
  Invalid = 'INVALID',
  Subscription = 'SUBSCRIPTION',
}

export type PowerUpCostsOutput =
  | NotFoundError
  | PowerUpCostsType
  | UnauthorizedError;

/** The cost associated with various Power Ups for a given Repl */
export type PowerUpCostsType = {
  __typename: 'PowerUpCostsType';
  alwaysOn: PowerUpCostDetailType;
  boost: PowerUpCostDetailType;
  boost2cpu2ram: PowerUpCostDetail2Type;
  boost4cpu4ram: PowerUpCostDetail2Type;
  boost8cpu8ram: PowerUpCostDetail2Type;
  boost16cpu16ram: PowerUpCostDetail2Type;
  gpu: PowerUpCostDetailType;
  hostingTierE2Medium?: Maybe<PowerUpCostDetail2Type>;
  hostingTierE2Micro?: Maybe<PowerUpCostDetail2Type>;
  hostingTierE2Small?: Maybe<PowerUpCostDetail2Type>;
  hostingTierE2Standard2?: Maybe<PowerUpCostDetail2Type>;
  hostingTierE2Standard4?: Maybe<PowerUpCostDetail2Type>;
  hostingTierN1Custom1_4?: Maybe<PowerUpCostDetail2Type>;
};

export enum PowerUpMethodOfPayment {
  Cycles = 'CYCLES',
  Subscription = 'SUBSCRIPTION',
}

export enum PowerUpTrialTypeEnumType {
  Ghostwriter = 'ghostwriter',
  Private = 'private',
}

export type PreviewInvoice =
  | NotFoundError
  | PreviewInvoiceOutput
  | UnauthorizedError
  | UserError;

export type PreviewInvoiceInput = {
  orgId: Scalars['Int'];
  product: PreviewInvoiceLineItemInput;
};

export type PreviewInvoiceLineItem = {
  __typename: 'PreviewInvoiceLineItem';
  amount: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type PreviewInvoiceLineItemGroup = {
  __typename: 'PreviewInvoiceLineItemGroup';
  items: Array<PreviewInvoiceLineItem>;
  periodEnd: Scalars['DateTime'];
  periodStart: Scalars['DateTime'];
  type: Scalars['String'];
};

export type PreviewInvoiceLineItemInput = {
  /** Product ID (only if changing subscribed product) */
  id?: InputMaybe<Scalars['Int']>;
  /** Subscription quantity (only if changing quantity) */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type PreviewInvoiceOutput = {
  __typename: 'PreviewInvoiceOutput';
  balance: Scalars['Float'];
  chargeDate?: Maybe<Scalars['DateTime']>;
  currentItems: Array<PreviewInvoiceLineItemGroup>;
  total: Scalars['Float'];
  upcomingItems: Array<PreviewInvoiceLineItemGroup>;
};

/** A thread message previewing a message. It may or may not have text. */
export type PreviewMessageContentType = {
  __typename: 'PreviewMessageContentType';
  preview?: Maybe<Scalars['String']>;
};

export type PreviewProrationInput = {
  /** The plan period of the subscription type to change the users current subscription to */
  newPlanPeriod: SelectableSubscriptionPeriodTypesEnum;
  /** The plan prefix of the subscription type to change the users current subscription to */
  newPlanPrefix: SelectableSubscriptionPrefixTypesEnum;
};

export type PreviewProrationOutput =
  | PaymentError
  | PreviewProrationResult
  | UnauthorizedError
  | UserError;

export type PreviewProrationResult = {
  __typename: 'PreviewProrationResult';
  /** Whether the invoice preview is for a change from a free trial to a paid subscription */
  isTrialToPaid: Scalars['Boolean'];
  /** The total amount of the proration in cents */
  prorationTotalInCents: Scalars['Int'];
};

/** State of the Private Repls Power Up */
export type PrivateReplsPowerUpType = UserPowerUpDescriptionByType & {
  __typename: 'PrivateReplsPowerUpType';
  /** What call-to-action to present to the user, if any. Note that some of this information can be derived through other fields on this type, but only partially so (e.g. you wouldn't be able to tell whether the user has already had a trial or not without using this field). */
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  /** Whether the Power Up is active (irrespective of whether it is being paid for or a trial). Note that this is distinct from the "active" field on a cycles_users_orders entry, which itself denote whether the order is set to renew. */
  active: Scalars['Boolean'];
  /** The Cycles cost that the user would incur upon purchasing the Power Up with Cycles */
  cost?: Maybe<UserPowerUpCostDetailType>;
  /** If active, whether the user's access is due to a trial (rather than a paid subscription) */
  isTrial: Scalars['Boolean'];
  /** How the user is paying for this Power Up, if they are paying for it (null if they are not) */
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  /** Which paid upgrade path to suggest for getting access to the power up. */
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']>;
  timeLastFulfilled?: Maybe<Scalars['Date']>;
  /** If the user has (or has had) a trial, the expiry date thereof */
  timeTrialExpiry?: Maybe<Scalars['DateTime']>;
  /** Whether the Power Up will renew (and typically result in a charge for the user) */
  willRenew: Scalars['Boolean'];
};

export type Product = {
  __typename: 'Product';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  planPrefix: Scalars['String'];
  planVariant: Scalars['String'];
  planVersion: Scalars['String'];
};

/** Web protocols */
export enum Protocols {
  Https = 'HTTPS',
  Wss = 'WSS',
}

export type ProviderPlanDetails = {
  __typename: 'ProviderPlanDetails';
  monthlyPlanDetails: PlanDetails;
  yearlyPlanDetails: PlanDetails;
};

export type PublishThemeInput = {
  /** Description for the version of the theme to be published */
  description?: InputMaybe<Scalars['String']>;
  themeId: Scalars['Int'];
};

export type PublishThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export enum PublishedReplKind {
  App = 'App',
  RegularRepl = 'RegularRepl',
  Template = 'Template',
}

/** The token type for push notifications */
export enum PushNotificationTokenType {
  Expo = 'expo',
  Web = 'web',
}

export enum RecentReplsFilter {
  Multiplayer = 'multiplayer',
  Own = 'own',
}

export type RegisterPushDeviceSessionInput = {
  deviceId: Scalars['String'];
  token: Scalars['String'];
  tokenType: PushNotificationTokenType;
};

export type RegisterPushDeviceSessionOutput =
  | RegisterPushDeviceSessionResult
  | UnauthorizedError
  | UserError;

export type RegisterPushDeviceSessionResult = {
  __typename: 'RegisterPushDeviceSessionResult';
  deviceId?: Maybe<Scalars['String']>;
};

/** A group of related repls */
export type RelatedReplsGroup = {
  __typename: 'RelatedReplsGroup';
  /** The name of the group */
  name: Scalars['String'];
  /** A list of repls */
  repls: Array<Repl>;
};

export type RemoveBountyApplicationAsApplicantInput = {
  bountyApplicationId: Scalars['Int'];
};

export type RemoveBountyApplicationAsApplicantOutput =
  | BountyApplication
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type RemoveBountyApplicationAsModeratorInput = {
  bountyApplicationId: Scalars['Int'];
  reason: Scalars['String'];
};

export type RemoveBountyApplicationAsModeratorOutput =
  | BountyApplication
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type RemoveBountyHunterReviewAsStaffInput = {
  bountyHunterReviewId: Scalars['Int'];
  reason: Scalars['String'];
};

export type RemoveBountyHunterReviewAsStaffOutput =
  | BountyHunterReview
  | NotFoundError
  | UnauthorizedError
  | UserError;

/** The event called when there are no longer any connections to a Repl. */
export type RemoveReplConnectionsEvent = {
  __typename: 'RemoveReplConnectionsEvent';
  /** The time when the data was returned */
  epoch: Scalars['DateTime'];
  replId: Scalars['String'];
};

export type RemoveTeamMemberInput = {
  memberId: Scalars['Int'];
  teamId: Scalars['Int'];
};

export type RemoveTeamMemberOutput = Team | UserError;

export type RemoveWarnOutput = UserError | Warning;

export type RenderedPowerUpType = {
  __typename: 'RenderedPowerUpType';
  methodOfPayment: PowerUpMethodOfPayment;
  powerUpType: ReplPowerUpTypeEnumType;
  repl: Repl;
  sku: ReplPowerUpSkuEnumType;
};

/** A repl */
export type Repl = {
  __typename: 'Repl';
  /** The top n Repl analytics field values for a given time period */
  analyticsPageViews: ReplAnalyticsPageViewsOutput;
  /** Repl metric values, broken out by hour, inside of a given time period. */
  analyticsTimeSeries: ReplAnalyticsTimeSeriesOutput;
  /** The top n Repl analytics field values for a given time period */
  analyticsTopList: ReplAnalyticsTopListOutput;
  analyticsUrl?: Maybe<Scalars['String']>;
  annotationAnchors: Array<AnnotationAnchor>;
  /** Address for the apex domain proxy for apex domain linking. */
  apexProxy: Scalars['String'];
  /** Files stored in the db that are associated with this Repl (non-container files) */
  attachments: Array<ReplAttachment>;
  betaTemplateRepl?: Maybe<Repl>;
  /** A Repl's used storage */
  bytesUsed: ReplBytesUsedOutput;
  checkDomain2?: Maybe<CheckDomain2>;
  /** The comment count for a repl */
  commentCount: Scalars['Int'];
  commentSettings?: Maybe<ReplCommentSetting>;
  comments: ReplCommentConnection;
  config: ReplConfig;
  /** If the current has liked this repl */
  currentUserDidLike: Scalars['Boolean'];
  /** Can the requester edit the repl title, description, and public status, also if can they delete it and move it between folders */
  currentUserPermissions: ReplUpdatePermissions;
  /** Total tips received by this repl from a given user (by ID), inclusive of fees (if any), in cycles. Null if user is not logged in. */
  currentUserTotalTips?: Maybe<Scalars['Int']>;
  database?: Maybe<Database>;
  /** Deployment for this repl */
  deployment?: Maybe<ReplDeployment>;
  deprecatedLanguageConfig: Language;
  /** Returns apps derived from this Repl if it's a template */
  derivedApps?: Maybe<ReplConnection>;
  /** Return's a repl's description */
  description?: Maybe<Scalars['String']>;
  /** All domains associated with this repl. */
  domains?: Maybe<Array<Maybe<Domain>>>;
  /** Examples of a repl */
  examples: Array<Repl>;
  folderId?: Maybe<Scalars['String']>;
  gateOnOwner: Scalars['Boolean'];
  /**
   * What is the guaranteed provisioning SKU of this repl?
   * @deprecated Use repl.powerUps.boost.sku instead
   */
  guaranteedProvisioningSku: Sku;
  /** Does this repl have a GPU enabled? */
  hasGpu: Scalars['Boolean'];
  hostedUrl: Scalars['String'];
  hostingDeployment?: Maybe<ReplHostingDeployment>;
  /** Returns the last 1000 log lines for a hosting deployment Repl */
  hostingDeploymentLogs: ReplLogsOutput;
  hostingDeploymentPermissions: ReplHostingDeploymentPermissions;
  /** The icon url for a repl */
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  inviteUrl?: Maybe<Scalars['String']>;
  /** Results for when IO tests where executed most recently on the repl, only for edu repls. */
  ioTestResults?: Maybe<Array<IoTestResult>>;
  ioTests: Array<ReplTemplateTest>;
  isAlwaysOn: Scalars['Boolean'];
  isBoosted: Scalars['Boolean'];
  isModelSolution: Scalars['Boolean'];
  isModelSolutionFork: Scalars['Boolean'];
  isOwner: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  isProject: Scalars['Boolean'];
  isProjectFork: Scalars['Boolean'];
  isRenamed?: Maybe<Scalars['Boolean']>;
  isStarred: Scalars['Boolean'];
  isTutorial: Scalars['Boolean'];
  lang: Language;
  language: Scalars['String'];
  /** @deprecated User legacyLanguageConfig.examples */
  languageExamples?: Maybe<Array<LanguageExample>>;
  /** When the repl was last published */
  lastPublishedAt?: Maybe<Scalars['DateTime']>;
  /** The Repl's layout for the current user */
  layoutState?: Maybe<Scalars['JSON']>;
  /** The Repl owner's course lesson state */
  lesson?: Maybe<UserCourseLesson>;
  /** The like count for a repl */
  likeCount: Scalars['Int'];
  multiplayerInvites: Array<MultiplayerInvite>;
  /** Multiplayers of this Repl */
  multiplayers: Array<User>;
  nextPagePathname: Scalars['String'];
  /** The language this nix template Repl is replacing */
  nixedLanguage?: Maybe<Scalars['String']>;
  origin?: Maybe<Repl>;
  owner?: Maybe<ReplOwner>;
  /** @deprecated Use multiplayers field */
  permissions: Array<ReplPermission>;
  pinnedToProfile: Scalars['Boolean'];
  posts: PostConnection;
  powerUpCosts: PowerUpCostsOutput;
  /** State of repl-scoped Power Ups, by key */
  powerUps: ReplPowerUpTypesOutput;
  /** Count of public forks of this repl */
  publicForkCount: Scalars['Int'];
  /** Public forks of this repl */
  publicForks: ReplConnection;
  /**
   * The count of ALL repls forked from one of this repl's releases (currently misnamed, not public only)
   * @deprecated Use releasesForkCount instead
   */
  publicReleasesForkCount: Scalars['Int'];
  /** Returns how this repl was published or null if unpublished */
  publishedAs?: Maybe<PublishedReplKind>;
  recentComments: Array<ReplComment>;
  recentForks: Array<Repl>;
  /** A list of groups of repls */
  relatedRepls: Array<RelatedReplsGroup>;
  /** Releases of this repl */
  releases: ReplReleaseConnection;
  /** The count of all repls forked from all of this repl's releases */
  releasesForkCount: Scalars['Int'];
  replViewSettings?: Maybe<ReplViewSettings>;
  rootOriginReplUrl?: Maybe<Scalars['String']>;
  /** Number of times this repl has been run */
  runCount: Scalars['Int'];
  /**
   * Sum of size (in bytes) of all files in this repl
   * @deprecated Repl size is no longer available in the GraphQL API
   */
  size: Scalars['Float'];
  slug: Scalars['String'];
  /** Return's a repl's source */
  source?: Maybe<ReplSource>;
  /**
   * The storage capacity of the Repl
   * @deprecated This field is part of an experimental feature and will change in the future.It should not be depended upon.
   */
  storageCapacity: StorageCapacityOutputType;
  submission?: Maybe<ReplSubmission>;
  /** Tags on this repl */
  tags: Array<Tag>;
  template?: Maybe<ReplTemplate>;
  /** The template categories for a template repl */
  templateCategories: Array<Maybe<TemplateCategory>>;
  /**
   * The category of the template if the Repl is one
   * @deprecated Deprecated in favour of repl.templateCategories field
   */
  templateCategory?: Maybe<Scalars['String']>;
  /** Information about a Repl's template. For Repls that don't have a template, returns information about the canonical language Repl */
  templateInfo: ReplTemplateInfo;
  /** The template label for a repl */
  templateLabel: Scalars['String'];
  /** The template label for a repl */
  templateReview?: Maybe<TemplateReview>;
  /** @deprecated Terminal hosting no longer supported */
  terminalUrl: Scalars['String'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  title: Scalars['String'];
  /** Users who have tipped this Repl the most */
  topTippers: Array<TipperUser>;
  /** Total tips received by this repl, inclusive of fees (if any), in cycles */
  totalCyclesTips: Scalars['Int'];
  unitTestResults?: Maybe<Array<ReplUnitTestResultsOutput>>;
  unitTests?: Maybe<ReplUnitTestsWithMeta>;
  url: Scalars['String'];
  user?: Maybe<User>;
  /** Whether or not this Repl was posted to Talk/Community */
  wasPosted: Scalars['Boolean'];
  /** Whether or not this Repl was published to Apps */
  wasPublished: Scalars['Boolean'];
  workspaceCta: ReplWorkspaceCta;
};

/** A repl */
export type ReplAnalyticsPageViewsArgs = {
  input?: InputMaybe<ReplAnalyticsPageViewsInput>;
};

/** A repl */
export type ReplAnalyticsTimeSeriesArgs = {
  input?: InputMaybe<ReplAnalyticsTimeSeriesInput>;
};

/** A repl */
export type ReplAnalyticsTopListArgs = {
  input?: InputMaybe<ReplAnalyticsTopInput>;
};

/** A repl */
export type ReplAttachmentsArgs = {
  fileName?: InputMaybe<Scalars['String']>;
};

/** A repl */
export type ReplCheckDomain2Args = {
  domain: Scalars['String'];
};

/** A repl */
export type ReplCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** A repl */
export type ReplDeprecatedLanguageConfigArgs = {
  asText?: InputMaybe<Scalars['Boolean']>;
};

/** A repl */
export type ReplDerivedAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** A repl */
export type ReplDescriptionArgs = {
  plainText?: InputMaybe<Scalars['Boolean']>;
};

/** A repl */
export type ReplGateOnOwnerArgs = {
  feature: Scalars['String'];
};

/** A repl */
export type ReplHostedUrlArgs = {
  dev?: InputMaybe<Scalars['Boolean']>;
  dotty?: InputMaybe<Scalars['Boolean']>;
  protocol?: InputMaybe<Protocols>;
};

/** A repl */
export type ReplHostingDeploymentLogsArgs = {
  deploymentId: Scalars['String'];
};

/** A repl */
export type ReplIsOwnerArgs = {
  canWrite?: InputMaybe<Scalars['Boolean']>;
};

/** A repl */
export type ReplLanguageExamplesArgs = {
  asText?: InputMaybe<Scalars['Boolean']>;
};

/** A repl */
export type ReplPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** A repl */
export type ReplPublicForksArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

/** A repl */
export type ReplRecentForksArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

/** A repl */
export type ReplRelatedReplsArgs = {
  limitPerGroup?: InputMaybe<Scalars['Int']>;
};

/** A repl */
export type ReplReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** A repl */
export type ReplTemplateLabelArgs = {
  disableFallbackToTitle?: InputMaybe<Scalars['Boolean']>;
};

/** A repl */
export type ReplUrlArgs = {
  lite?: InputMaybe<Scalars['Boolean']>;
};

/** A summary of a Repl's page views */
export type ReplAnalyticsPageViews = {
  __typename: 'ReplAnalyticsPageViews';
  /** Hourly page views for the Repl */
  results: Array<ReplAnalyticsPageViewsData>;
  /** The number of unique users across the reporting period. */
  uniques: Scalars['Int'];
};

/** An hourly timestamp and the number of page views during that period. */
export type ReplAnalyticsPageViewsData = {
  __typename: 'ReplAnalyticsPageViewsData';
  failure: Scalars['Int'];
  success: Scalars['Int'];
  timestamp: Scalars['DateTime'];
};

export type ReplAnalyticsPageViewsInput = {
  /** Return results for the associated deployment Repl. Defaults to false. */
  deployment?: InputMaybe<Scalars['Boolean']>;
  /** Number of consecutive hours for which we want results. Max 168. */
  hours: Scalars['Int'];
  /** Localized start for the window where the want the page view data. */
  start: Scalars['DateTime'];
};

export type ReplAnalyticsPageViewsOutput =
  | NotFoundError
  | ReplAnalyticsPageViews
  | UserError;

/** Time series data for a metric across a given period. */
export type ReplAnalyticsTimeSeries = {
  __typename: 'ReplAnalyticsTimeSeries';
  /** Hourly metric data for the Repl */
  results: Array<ReplAnalyticsTimeSeriesData>;
};

/** An hourly timestamp, the metric value, and the count of value occurrences during the period. */
export type ReplAnalyticsTimeSeriesData = {
  __typename: 'ReplAnalyticsTimeSeriesData';
  count: Scalars['Int'];
  timestamp: Scalars['DateTime'];
  value: Scalars['String'];
};

export type ReplAnalyticsTimeSeriesInput = {
  /** Return results for the associated deployment Repl. Defaults to false. */
  deployment?: InputMaybe<Scalars['Boolean']>;
  /** Number of consecutive hours for which we want results. Max 168. */
  hours: Scalars['Int'];
  /** The metric for which we want time series data */
  metric: Scalars['String'];
  /** Localized start for the window where the want the time series data. */
  start: Scalars['DateTime'];
};

export type ReplAnalyticsTimeSeriesOutput =
  | NotFoundError
  | ReplAnalyticsTimeSeries
  | UserError;

export type ReplAnalyticsTopInput = {
  /** Number of top items to return. Defaults to 10, max 100. */
  count?: InputMaybe<Scalars['Int']>;
  /** Return results for the associated deployment Repl. Defaults to false. */
  deployment?: InputMaybe<Scalars['Boolean']>;
  /** Number of consecutive hours for which we want results. Max 168. */
  hours: Scalars['Int'];
  /** Analytics field for which we want the top results */
  metric: Scalars['String'];
  /** Localized start for the window where the want the metrics */
  start: Scalars['DateTime'];
};

/** A list of top Repl analytics results */
export type ReplAnalyticsTopList = {
  __typename: 'ReplAnalyticsTopList';
  results: Array<ReplAnalyticsTopResult>;
};

export type ReplAnalyticsTopListOutput =
  | NotFoundError
  | ReplAnalyticsTopList
  | UserError;

/** A metric name and value pair */
export type ReplAnalyticsTopResult = {
  __typename: 'ReplAnalyticsTopResult';
  count: Scalars['Int'];
  value: Scalars['String'];
};

export type ReplAttachment = {
  __typename: 'ReplAttachment';
  /** File contents */
  contents: Scalars['String'];
  fileName: Scalars['String'];
  id: Scalars['Int'];
  mimeType: Scalars['String'];
  timeCreated: Scalars['Date'];
  timeUpdated?: Maybe<Scalars['Date']>;
};

/** A repl status. */
export type ReplBootStatus = {
  __typename: 'ReplBootStatus';
  repl: Repl;
  status: ReplBootStatusValue;
  timestamp: Scalars['DateTime'];
};

export type ReplBootStatusConnection = {
  __typename: 'ReplBootStatusConnection';
  /** A list of repl status */
  items: Array<ReplBootStatus>;
  pageInfo: PageInfo;
};

/** A repl status event. */
export type ReplBootStatusEvent = {
  __typename: 'ReplBootStatusEvent';
  status: ReplBootStatusValue;
  timestamp: Scalars['DateTime'];
};

export type ReplBootStatusHistoryConnection = {
  __typename: 'ReplBootStatusHistoryConnection';
  /** A list of repl status history events */
  items: Array<ReplBootStatusEvent>;
  pageInfo: PageInfo;
};

export type ReplBootStatusHistoryInput = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  replId: Scalars['String'];
};

export type ReplBootStatusHistoryOutput =
  | ReplBootStatusHistoryConnection
  | UnauthorizedError
  | UserError;

export type ReplBootStatusInput = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ReplBootStatusSort>;
};

export type ReplBootStatusOutput =
  | ReplBootStatusConnection
  | UnauthorizedError
  | UserError;

export enum ReplBootStatusSort {
  LatestActivity = 'latestActivity',
  StatusDescending = 'statusDescending',
}

export type ReplBootStatusStopRepl =
  | ReplBootStatusStopReplSuccess
  | UnauthorizedError
  | UserError;

/** Successfully stopped repl */
export type ReplBootStatusStopReplSuccess = {
  __typename: 'ReplBootStatusStopReplSuccess';
  message: Scalars['String'];
};

/** A repl status update event. */
export type ReplBootStatusUpdateEvent = {
  __typename: 'ReplBootStatusUpdateEvent';
  repl: Repl;
  /** Type of repl boot event (stopped, starting, started, or stopping). */
  status: ReplBootStatusValue;
  timestamp: Scalars['DateTime'];
};

export type ReplBootStatusUpdatesInput = {
  /** Optional list of repl IDs to filter/fetch by. */
  replIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ReplBootStatusValue {
  AlwaysOn = 'alwaysOn',
  Asleep = 'asleep',
  Awake = 'awake',
  Limited = 'limited',
}

/** A Repl's used storage */
export type ReplBytesUsed = {
  __typename: 'ReplBytesUsed';
  /** Total bytes of storage used by the Repl. Represented as a string because GiB can easily exceed int32. */
  value: Scalars['String'];
};

export type ReplBytesUsedOutput =
  | NotFoundError
  | ReplBytesUsed
  | ServiceUnavailable
  | UnauthorizedError;

export enum ReplChangeAlwaysOnPermission {
  Allowed = 'Allowed',
  Disallowed = 'Disallowed',
  /** @deprecated We no longer use permissions as a proxy for subscription status */
  SubscriptionRequired = 'SubscriptionRequired',
}

export enum ReplChangePrivacyPermission {
  Allowed = 'Allowed',
  Disallowed = 'Disallowed',
  /** @deprecated We no longer use permissions as a proxy for subscription status */
  SubscriptionRequired = 'SubscriptionRequired',
}

/** A comment on a post or another comment */
export type ReplComment = {
  __typename: 'ReplComment';
  body: Scalars['String'];
  canComment: Scalars['Boolean'];
  /** @deprecated Use currentUserPermissions.edit */
  canEdit: Scalars['Boolean'];
  currentUserPermissions?: Maybe<ReplCommentPermissions>;
  id: Scalars['Int'];
  isHidden?: Maybe<Scalars['Boolean']>;
  parentComment?: Maybe<ReplComment>;
  post?: Maybe<Post>;
  repl?: Maybe<Repl>;
  replies: Array<ReplComment>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  user?: Maybe<User>;
};

/** A comment on a post or another comment */
export type ReplCommentBodyArgs = {
  removeMarkdown?: InputMaybe<Scalars['Boolean']>;
};

/** A connection to a list of ReplComments. */
export type ReplCommentConnection = {
  __typename: 'ReplCommentConnection';
  /** A list of ReplComments. */
  items: Array<ReplComment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A comment was made on a repl */
export type ReplCommentCreatedNotification = {
  __typename: 'ReplCommentCreatedNotification';
  creator?: Maybe<User>;
  id: Scalars['Int'];
  replComment?: Maybe<ReplComment>;
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** A user was mentioned in a Repl comment or reply */
export type ReplCommentMentionNotification = {
  __typename: 'ReplCommentMentionNotification';
  creator?: Maybe<User>;
  id: Scalars['Int'];
  replComment?: Maybe<ReplComment>;
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ReplCommentOutput = ReplComment | UserError;

/** Allowed actions to be taken by the user viewing a comment */
export type ReplCommentPermissions = {
  __typename: 'ReplCommentPermissions';
  banAuthor: Scalars['Boolean'];
  canHideComment: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  edit: Scalars['Boolean'];
  id: Scalars['Int'];
  report: Scalars['Boolean'];
};

/** A comment was replied to */
export type ReplCommentReplyCreatedNotification = {
  __typename: 'ReplCommentReplyCreatedNotification';
  creator?: Maybe<User>;
  id: Scalars['Int'];
  replComment?: Maybe<ReplComment>;
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** comment related settings for a repl */
export type ReplCommentSetting = {
  __typename: 'ReplCommentSetting';
  enabled: Scalars['Boolean'];
  id: Scalars['Int'];
};

export type ReplConfig = {
  __typename: 'ReplConfig';
  /** @deprecated Superseded by repl.isAlwaysOn */
  alwaysOn?: Maybe<Scalars['Boolean']>;
  doClone?: Maybe<Scalars['Boolean']>;
  /** @deprecated Superseded by repl.domains */
  domain?: Maybe<Scalars['String']>;
  gitRemoteUrl?: Maybe<Scalars['String']>;
  isServer?: Maybe<Scalars['Boolean']>;
  isVnc?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of Repls. */
export type ReplConnection = {
  __typename: 'ReplConnection';
  /** A list of Repls. */
  items: Array<Repl>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A Repl and the connections to it */
export type ReplConnections = {
  __typename: 'ReplConnections';
  /** The time when the data was returned */
  epoch: Scalars['DateTime'];
  /** The Repl which users are connected to */
  repl: Repl;
  /** The users that are connected to the Repl */
  users: Array<User>;
};

export type ReplContinent = {
  __typename: 'ReplContinent';
  /** The continent ID */
  id: ReplContinentId;
  /** The continent's name */
  name: Scalars['String'];
};

export enum ReplContinentId {
  Asia = 'ASIA',
  Na = 'NA',
}

export type ReplContinents = ReplContinentsOutput | UnauthorizedError;

export type ReplContinentsOutput = {
  __typename: 'ReplContinentsOutput';
  continents: Array<ReplContinent>;
};

/** A repl deployment */
export type ReplDeployment = {
  __typename: 'ReplDeployment';
  activeRelease?: Maybe<ReplRelease>;
  domain?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
};

/** Summary of a Repl's monthly egress consumption. */
export type ReplEgressSummary = {
  __typename: 'ReplEgressSummary';
  /** Percentage of usage consumed by this Repl. */
  percentage: Scalars['Float'];
  /** The Repl for which we are reporting monthly egress. */
  repl: Repl;
  /** The number of bytes used by the Repl for this month. Represented as a string because GiB can easily exceed int32. */
  usage: Scalars['String'];
};

export type ReplFileChange = {
  __typename: 'ReplFileChange';
  changeType: ReplFileChangeType;
  fileName: Scalars['String'];
};

export enum ReplFileChangeType {
  DeletedFile = 'DeletedFile',
  ModfiedFile = 'ModfiedFile',
  NewFile = 'NewFile',
}

/** A folder of repls */
export type ReplFolder = {
  __typename: 'ReplFolder';
  canCreateSubFolders: Scalars['Boolean'];
  canEdit: Scalars['Boolean'];
  folderType?: Maybe<ReplFolderTypes>;
  folders: Array<ReplFolder>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<ReplFolder>;
  parentId?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  pathnames: Array<Scalars['String']>;
  repls: ReplConnection;
  replsCount?: Maybe<Scalars['Int']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

/** A folder of repls */
export type ReplFolderFoldersArgs = {
  search?: InputMaybe<Scalars['String']>;
};

/** A folder of repls */
export type ReplFolderReplsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  languages?: InputMaybe<Array<Scalars['String']>>;
  order?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  starred?: InputMaybe<Scalars['Boolean']>;
};

export enum ReplFolderTypes {
  AllTeams = 'ALL_TEAMS',
  AlwaysOn = 'ALWAYS_ON',
  Boosts = 'BOOSTS',
  Default = 'DEFAULT',
  Multiplayer = 'MULTIPLAYER',
  Team = 'TEAM',
  Virtual = 'VIRTUAL',
}

export type ReplHostingDeployment =
  | HostingDeployment
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ReplHostingDeploymentPermissions = {
  __typename: 'ReplHostingDeploymentPermissions';
  canDeploy: Scalars['Boolean'];
};

export type ReplLog = {
  __typename: 'ReplLog';
  line: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export type ReplLogs = {
  __typename: 'ReplLogs';
  result: Array<ReplLog>;
};

export type ReplLogsOutput = ReplLogs;

export type ReplOutput = Repl | UserError;

export type ReplOwner = Team | User;

/** Access permissions for a repl */
export type ReplPermission = {
  __typename: 'ReplPermission';
  id: Scalars['Int'];
  repl?: Maybe<Repl>;
  replId: Scalars['String'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  type: Repl_PermissionstypeEnumType;
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export enum ReplPostsOrder {
  Hot = 'Hot',
  New = 'New',
  Top = 'Top',
}

export type ReplPostsQueryOptions = {
  after?: InputMaybe<Scalars['String']>;
  boardSlugs?: InputMaybe<Array<Scalars['String']>>;
  count?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReplPostsOrder>;
  searchQuery?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type ReplPowerUpDescriptionType = {
  __typename: 'ReplPowerUpDescriptionType';
  /** Whether the Power Up is active */
  active: Scalars['Boolean'];
  /** Power Up ID */
  id: Scalars['Int'];
  /** The Repl to which the Power Up relates */
  repl: Repl;
  /** The SKU of the Power Up */
  sku: ReplPowerUpSkuEnumType;
  /** When the Power Up will be fulfilled next */
  time_fulfillment_due?: Maybe<Scalars['DateTime']>;
  /** When the Power Up was last fulfilled */
  time_last_fulfilled?: Maybe<Scalars['DateTime']>;
  /** The type of Power Up (e.g. boost, always on, private) */
  type: ReplPowerUpTypeEnumType;
};

export enum ReplPowerUpSkuEnumType {
  AlwaysOn = 'alwaysOn',
  AlwaysOnLegacy = 'alwaysOn_legacy',
  Boost_2cpu_2ram = 'boost_2cpu_2ram',
  Boost_4cpu_4ram = 'boost_4cpu_4ram',
  Boost_8cpu_8ram = 'boost_8cpu_8ram',
  Boost_16cpu_16ram = 'boost_16cpu_16ram',
  BoostLegacy = 'boost_legacy',
  GpuK80 = 'gpu_k80',
  HostingTierE2Medium = 'hosting_tier_e2_medium',
  HostingTierE2Micro = 'hosting_tier_e2_micro',
  HostingTierE2Small = 'hosting_tier_e2_small',
  HostingTierE2Standard_2 = 'hosting_tier_e2_standard_2',
  HostingTierE2Standard_4 = 'hosting_tier_e2_standard_4',
  HostingTierN1Custom_1_4 = 'hosting_tier_n1_custom_1_4',
  Unknown = 'unknown',
}

export enum ReplPowerUpTypeEnumType {
  AlwaysOn = 'alwaysOn',
  Boost = 'boost',
  Gpu = 'gpu',
  HostingTier = 'hosting_tier',
}

/** State of user-scoped Power Ups */
export type ReplPowerUpTypes = {
  __typename: 'ReplPowerUpTypes';
  boost: BoostPowerUpType;
  hostingTier?: Maybe<HostingTierPowerUpType>;
};

export type ReplPowerUpTypesOutput =
  | NotFoundError
  | ReplPowerUpTypes
  | UnauthorizedError
  | UserError;

export type ReplQueryOutput = Repl | ReplRedirect | SubscriptionExpiredError;

/** User events triggered by current user's following users. */
export type ReplReaction = {
  __typename: 'ReplReaction';
  id: Scalars['Int'];
  reactionType: Repl_ReactionsreactionTypeEnumType;
  repl?: Maybe<Repl>;
  userId: Scalars['Int'];
};

/** Redirect information for a Repl that has been renamed or owned by user */
export type ReplRedirect = {
  __typename: 'ReplRedirect';
  repl?: Maybe<Repl>;
  replUrl: Scalars['String'];
};

/** A Repl release */
export type ReplRelease = {
  __typename: 'ReplRelease';
  description: Scalars['String'];
  hostedUrl: Scalars['String'];
  id: Scalars['String'];
  pending: Scalars['Boolean'];
  /** Returns a summary of changes between the repl's current files and this release's files. */
  pendingChanges: Array<ReplFileChange>;
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  user?: Maybe<User>;
};

/** A connection to a list of ReplReleases. */
export type ReplReleaseConnection = {
  __typename: 'ReplReleaseConnection';
  /** A list of ReplReleases. */
  items: Array<ReplRelease>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A source points to a specific release of a repl */
export type ReplSource = {
  __typename: 'ReplSource';
  deployment?: Maybe<ReplDeployment>;
  release?: Maybe<ReplRelease>;
};

export enum ReplStorageCapacity {
  EightGigs = 'EightGigs',
  FourGigs = 'FourGigs',
  SixteenGigs = 'SixteenGigs',
  SixtyFourGigs = 'SixtyFourGigs',
  Standard = 'Standard',
  ThirtyTwoGigs = 'ThirtyTwoGigs',
  TwoGigs = 'TwoGigs',
}

/** Summary of a Repl's storage utilization. */
export type ReplStorageUtilization = {
  __typename: 'ReplStorageUtilization';
  /** Percentage of usage consumed by this Repl. */
  percentage: Scalars['Float'];
  /** The Repl for which we are reporting storage utilization. */
  repl: Repl;
  /** The number of bytes used by the Repl for this month. Represented as a string because GiB can easily exceed int32. */
  usage: Scalars['String'];
};

/** A submission for template repls */
export type ReplSubmission = {
  __typename: 'ReplSubmission';
  author?: Maybe<User>;
  id: Scalars['Int'];
  isGroupSubmission: Scalars['Boolean'];
  repl?: Maybe<Repl>;
  submissionGroup?: Maybe<ReplSubmissionGroup>;
  timeLastReviewed?: Maybe<Scalars['Date']>;
  timeSubmitted?: Maybe<Scalars['Date']>;
};

/** A submission for template repls */
export type ReplSubmissionGroup = {
  __typename: 'ReplSubmissionGroup';
  submission?: Maybe<ReplSubmission>;
  users: Array<Maybe<User>>;
};

/** A template for repls */
export type ReplTemplate = {
  __typename: 'ReplTemplate';
  allowSelfGrouping: Scalars['Boolean'];
  author: User;
  availableEndDate?: Maybe<Scalars['Date']>;
  availableStartDate?: Maybe<Scalars['Date']>;
  dueDate?: Maybe<Scalars['Date']>;
  hoverImageUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  isGroupProject: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  modelSolution?: Maybe<ReplTemplateModelSolution>;
  order?: Maybe<Scalars['Int']>;
  repl: Repl;
  restrictAfterSubmit: Scalars['Boolean'];
  selfGroupSize?: Maybe<Scalars['Int']>;
  /** Returns all project submission groups. Only applies to group projects. */
  submissionGroups: Array<ReplSubmissionGroup>;
  submissionInfo?: Maybe<ReplTemplateSubmissionInfo>;
  /** Returns the submissions the user has permission to access. */
  submissions: Array<ReplSubmission>;
  team?: Maybe<Team>;
  tests: Array<ReplTemplateTest>;
  url: Scalars['String'];
  userSubmissionGroup?: Maybe<ReplSubmissionGroup>;
};

/** The template info for a repl */
export type ReplTemplateInfo = {
  __typename: 'ReplTemplateInfo';
  iconUrl: Scalars['String'];
  label: Scalars['String'];
  replId?: Maybe<Scalars['String']>;
};

/** A model submission for a Repl template */
export type ReplTemplateModelSolution = {
  __typename: 'ReplTemplateModelSolution';
  /** Can the current user fork the model solution. Determined by the rules of the model solution */
  canStudentFork: Scalars['Boolean'];
  id: Scalars['Int'];
  /** Repl containing the solution files */
  repl: Repl;
  /** Student fork of the model solution. Student only view the model solution via a fork. */
  studentFork?: Maybe<Repl>;
  visibleAfterDueDate: Scalars['Boolean'];
  visibleAfterPassingTests: Scalars['Boolean'];
  visibleAfterSubmitting: Scalars['Boolean'];
};

export type ReplTemplateOutput =
  | NotFoundError
  | ReplTemplate
  | UnauthorizedError;

export type ReplTemplateSubmissionInfo = {
  __typename: 'ReplTemplateSubmissionInfo';
  startedCount: Scalars['Int'];
  submittedCount: Scalars['Int'];
};

/** A test for a template repl */
export type ReplTemplateTest = {
  __typename: 'ReplTemplateTest';
  id: Scalars['Int'];
  input: Scalars['String'];
  name: Scalars['String'];
  output: Scalars['String'];
  template: ReplTemplate;
  timeCreated: Scalars['Date'];
  type: ReplTemplateTestType;
};

export enum ReplTemplateTestType {
  Compatibility = 'compatibility',
  Exact = 'exact',
  Match = 'match',
  Regex = 'regex',
}

/** A unit test for a Repl Repl */
export type ReplUnitTest = {
  __typename: 'ReplUnitTest';
  code?: Maybe<Scalars['String']>;
  failureMessage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastRun?: Maybe<ReplUnitTestLastRunOutput>;
  name: Scalars['String'];
  repl: Repl;
};

/** A unit test for a Repl Repl */
export type ReplUnitTestLastRunArgs = {
  replId: Scalars['String'];
};

export type ReplUnitTestLastRun = {
  __typename: 'ReplUnitTestLastRun';
  status?: Maybe<ReplUnitTestLastRunStatus>;
};

export type ReplUnitTestLastRunOutput = ReplUnitTestLastRun | UserError;

export enum ReplUnitTestLastRunStatus {
  Failed = 'FAILED',
  None = 'NONE',
  Passed = 'PASSED',
}

/** Metadata for a Repl unit test */
export type ReplUnitTestMeta = {
  __typename: 'ReplUnitTestMeta';
  id: Scalars['Int'];
  imports?: Maybe<Scalars['String']>;
  initialization?: Maybe<Scalars['String']>;
  setup?: Maybe<Scalars['String']>;
  tearDown?: Maybe<Scalars['String']>;
};

export type ReplUnitTestMetaOutput = ReplUnitTestMeta | UserError;

export type ReplUnitTestOutput = ReplUnitTest | UserError;

export type ReplUnitTestResultsOutput = {
  __typename: 'ReplUnitTestResultsOutput';
  id: Scalars['Int'];
  status?: Maybe<ReplUnitTestLastRunStatus>;
};

/** a suite of unit tests with included metadata */
export type ReplUnitTestsWithMeta = {
  __typename: 'ReplUnitTestsWithMeta';
  meta?: Maybe<ReplUnitTestMeta>;
  tests: Array<ReplUnitTest>;
};

/** Allowed actions to be taken by the requesting user */
export type ReplUpdatePermissions = {
  __typename: 'ReplUpdatePermissions';
  changeAlwaysOn: ReplChangeAlwaysOnPermission;
  changeCommentSettings: Scalars['Boolean'];
  changeConfig: Scalars['Boolean'];
  changeDescription: Scalars['Boolean'];
  changeIconUrl: Scalars['Boolean'];
  changeImageUrl: Scalars['Boolean'];
  changeLanguage: Scalars['Boolean'];
  changePrivacy: ReplChangePrivacyPermission;
  changeTemplateLabel: Scalars['Boolean'];
  changeTitle: Scalars['Boolean'];
  containerAttach: Scalars['Boolean'];
  containerWrite: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  editMultiplayers: Scalars['Boolean'];
  fork: Scalars['Boolean'];
  inviteGuests: Scalars['Boolean'];
  leaveMultiplayer: Scalars['Boolean'];
  linkDomain: Scalars['Boolean'];
  move: Scalars['Boolean'];
  pin: Scalars['Boolean'];
  publish: Scalars['Boolean'];
  star: Scalars['Boolean'];
  viewHistory: Scalars['Boolean'];
  writeTests: Scalars['Boolean'];
};

/** settings related to viewing a Repl outside of the workspace */
export type ReplViewSettings = {
  __typename: 'ReplViewSettings';
  defaultView: Repl_View_SettingsdefaultViewEnumType;
  id: Scalars['Int'];
  repl: Repl;
  replFile?: Maybe<Scalars['String']>;
  replImage?: Maybe<Scalars['String']>;
};

export enum ReplViewSettingsDefaultView {
  ReplFile = 'repl_file',
  ReplImage = 'repl_image',
}

export enum ReplWorkspaceCta {
  Auth = 'Auth',
  CreateTemplate = 'CreateTemplate',
  EditTemplate = 'EditTemplate',
  PublishTemplate = 'PublishTemplate',
  Resubmit = 'Resubmit',
  ReviewSubmission = 'ReviewSubmission',
  Share = 'Share',
  ShareUpgrade = 'ShareUpgrade',
  Submit = 'Submit',
  UpdateModelSolution = 'UpdateModelSolution',
}

/** Notification for when a user's comment has been replied to */
export type RepliedToCommentNotification = {
  __typename: 'RepliedToCommentNotification';
  comment?: Maybe<Comment>;
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** Notification for when a user's post is commented on */
export type RepliedToPostNotification = {
  __typename: 'RepliedToPostNotification';
  comment?: Maybe<Comment>;
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ReplitAppSubdomainAvailabilityOutput =
  | ReplitAppSubdomainAvailabilityResult
  | UserError;

export type ReplitAppSubdomainAvailabilityResult = {
  __typename: 'ReplitAppSubdomainAvailabilityResult';
  /** Whether the subdomain is available for use */
  available: Scalars['Boolean'];
  /** Additional context about the availability */
  message?: Maybe<Scalars['String']>;
};

/** A Replit checkout session. Basically a wrapper around a Stripe Payment Intent and provisioning of Replit products. */
export type ReplitCheckoutSession = {
  __typename: 'ReplitCheckoutSession';
  id: Scalars['String'];
  status: CheckoutSessionStatus;
};

export type ReportBountyApplicationOutput =
  | BoardReport
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ReportBountyOutput =
  | BoardReport
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ReportCustomThemeOutput =
  | BoardReport
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ReportReplCommentOutput =
  | BoardReport
  | UnauthorizedError
  | UserError;

/** Possible results when querying currentUser.repositories */
export type RepositoriesOutput = RepositoryConnection | UserAuthProviderError;

/** A user repository */
export type Repository = {
  __typename: 'Repository';
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  gitUrl: Scalars['String'];
  id: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  nameWithOwner: Scalars['String'];
  ownerName: Scalars['String'];
  primaryLanguage?: Maybe<GitHubLanguage>;
  provider: Scalars['String'];
  repls?: Maybe<Array<Repl>>;
  starCount: Scalars['Int'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

/** A connection to a list of Repositorys. */
export type RepositoryConnection = {
  __typename: 'RepositoryConnection';
  /** Number of repostories requested per installation */
  count?: Maybe<Scalars['Int']>;
  /** A list of Repositorys. */
  items: Array<Repository>;
};

export enum RepositoryPrivacy {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type ResetPrivacyStudentPasswordOutput =
  | ResetPrivacyStudentPasswordSuccess
  | UserError;

export type ResetPrivacyStudentPasswordSuccess = {
  __typename: 'ResetPrivacyStudentPasswordSuccess';
  success: Scalars['Boolean'];
};

export type RestartUserCourseLessonInput = {
  /** The locale for which we want the user to restart their lesson. If not provided, defaults to "en-US" */
  locale?: InputMaybe<Scalars['String']>;
  /** The ID for the lesson to be restarted. */
  userLessonId: Scalars['Int'];
};

export type RestartUserCourseLessonOutput =
  | NotFoundError
  | UnauthorizedError
  | UserCourseLessonResult
  | UserError;

export type RevertReplReleaseInput = {
  releaseId: Scalars['String'];
  replId: Scalars['String'];
};

export type RevertReplReleaseOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type ReviewBountyApplicationInput = {
  bountyApplicationId: Scalars['Int'];
  status: ReviewBountyApplicationStatus;
};

export type ReviewBountyApplicationOutput =
  | BountyApplication
  | NotFoundError
  | UnauthorizedError
  | UserError;

export enum ReviewBountyApplicationStatus {
  Accepted = 'accepted',
  NotReviewed = 'notReviewed',
  Rejected = 'rejected',
}

export type ReviewBountyHunter =
  | BountyHunterReview
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type ReviewBountyHunterInput = {
  bountyId: Scalars['Int'];
  communicationRating: Scalars['Int'];
  qualityRating: Scalars['Int'];
  reviewText?: InputMaybe<Scalars['String']>;
  timelinessRating: Scalars['Int'];
  userToReviewId: Scalars['Int'];
};

export type ReviewReplOutput = Repl | UserError;

export type ReviewTemplateInput = {
  /** URL slug for template landing page */
  landingPageSlug?: InputMaybe<Scalars['String']>;
  /** Template Repl to promote or demote */
  replId: Scalars['String'];
  /** True to promote, false to demote */
  shouldPromote: Scalars['Boolean'];
};

export type ReviewTemplateOutput =
  | TemplateReview
  | UnauthorizedError
  | UserError;

/** The top level entry point for mutating the graph */
export type RootMutationType = {
  __typename: 'RootMutationType';
  /** Allows a Bounty hunter to abandon a Bounty for which they have been accepted */
  abandonBounty: AbandonBountyOutput;
  /** Pays an invoice */
  acceptInvoice: AcceptInvoiceOutput;
  addMultiplayerUser: ReplPermission;
  /** Add a Repl that can authorize as its owner using Repl Identity */
  addReplIdentityAllowedRepl: AddReplIdentityAllowedRepl;
  /** Remove a repl's icon image as an administrator. */
  adminRemoveReplIcon: AdminRemoveReplIconOutput;
  /** Remove a user's  profile picture or cover image */
  adminRemoveUserImage: AdminRemoveUserImageOutput;
  archiveTeam: ArchviveTeamInput;
  arrangeStack: ArrangeStackOutput;
  arrangeStackItem?: Maybe<ArrangeStackItemOutput>;
  asanaSupportRequest: AsanaSupportRequestOutput;
  /** Ban a user from community. */
  banCommunityUser: BanCommunityUserOutput;
  /** Boost a Repl */
  boostRepl2: BoostRepl2Output;
  bulkModerate?: Maybe<BulkModerateOutput>;
  /** Cancels a Bounty by refunding the poster, marking the status as closed and unlisting the bounty */
  cancelBounty: CancelBountyOutput;
  cancelBountyAsStaff: CancelBountyAsStaffOutput;
  /** Cancel an invoice. */
  cancelInvoice: CancelInvoiceOutput;
  /** Changes a repls language to Nix, does not do any migrations, only updates metadata */
  changeLanguageToNix: ChangeLanguagetoNixOutput;
  /** Change the user's subscription */
  changeSubscription: ChangeSubscriptionOutput;
  /** ClUI root command */
  clui?: Maybe<CluiMutation>;
  completeUserCourseLesson?: Maybe<UpdateUserCourseLessonOutput>;
  /** Confirm an approved invoice & finalize transaction. */
  confirmInvoice: ConfirmInvoiceOutput;
  connectGoogleClassroom?: Maybe<ConnectGoogleClassroomOutput>;
  copyStacksToTeam: CopyStacksToTeamOutput;
  copyTeamTemplate: CopyTeamTemplateOutput;
  createAnnotationAnchor?: Maybe<CreateAnnotationAnchorOutput>;
  createAnnotationMessage?: Maybe<CreateAnnotationMessageOutput>;
  createAsanaFeedbackTask: CreateAsanaFeedbackTaskOutput;
  createAsanaFeedbackTaskReturnGID: CreateAsanaFeedbackTaskOutputReturnGid;
  createAsanaSupportTask?: Maybe<CreateAsanaSupportTaskOutput>;
  createBoardReport: BoardReport;
  createBounty: CreateBountyOutput;
  createBountyApplication: CreateBountyApplicationOutput;
  createBountySubmission: CreateBountySubmissionOutput;
  createBountySubmissionReview: CreateBountySubmissionReviewOutput;
  /** Creates a hosted Stripe checkout session for a Cycles purchase which the caller can redirect the user to */
  createCyclesStripeCheckoutSession?: Maybe<CreateCyclesStripeCheckoutSession>;
  /** Creates a new extension */
  createExtension: CreateExtensionOutput;
  /** Creates an access token for client GitHub interactions. The token lasts for 1hr after which using it will result in a 401. If the token is still needed, this mutation must be called again to create another. */
  createGithubAccessToken: CreateGithubAccessTokenOutput;
  /** Creates a Repository on GitHub */
  createGithubRepo: CreateGithubRepoOutput;
  /** Create an invoice addressed to a user. */
  createInvoice: CreateInvoiceOutput;
  /** Creates goval connection metadata with limited capabilities. Notably no network access and reduced CPU and memory. */
  createLanguageConnectionMetadata: CreateLanguageConnectionMetadataOutput;
  createMultiplayerInvite2: MultiplayerInviteOutput;
  /** Creates a Neon database for the given user and repl */
  createNeonDatabase: CreateNeonDatabaseOutput;
  createNewTeamsEduOrganization: CreateNewTeamsEduOrganizationOutput;
  createRepl: CreateReplOutput;
  createReplAsTemplate: CreateReplAsTemplateOutput;
  createReplComment: CreateReplCommentOutput;
  createReplCommentReply: CreateReplCommentReplyOutput;
  /** Creates a deployment and release */
  createReplDeployment: CreateReplDeployemntOutput;
  createReplFolder: ReplFolder;
  createReplPost2: CreateReplPost2Output;
  createReplRelease: CreateReplReleaseOutput;
  createReplRun: CreateReplRunOutput;
  /** The mutation used to fork a project. */
  createReplSubmission: CreateReplSubmissionOutput;
  /** Creates a group project submission */
  createReplSubmissionGroup: CreateReplSubmissionGroupOutput;
  createReplTemplate: CreateReplTemplateOutput;
  /** Creates a model solution for a project */
  createReplTemplateModelSolution: CreateReplTemplateModelSolutionOutput;
  /** Creates a model solution fork for students to view and edit */
  createReplTemplateModelSolutionFork: CreateReplTemplateModelSolutionForkOutput;
  createReplUnitTest: ReplUnitTestOutput;
  createReplUnitTestMeta: ReplUnitTestMetaOutput;
  /** Create a Replit Checkout Session for a one-time purchase. The clientSecret must be used to submit to Stripe using stripe.js to complete the purchase. One side effect of this mutation is that it will update the user's payment method to the one that is currently saved in Stripe if they haven't saved a payment method in Replit. */
  createReplitOneTimeCheckoutSession: CreateReplitOneTimeCheckoutSessionOutput;
  /** Create a Replit Checkout Session for a plan subscription. The clientSecret must be used to submit to Stripe using stripe.js to complete the purchase. One side effect of this mutation is that it will update the user's payment method to the one that is currently saved in Stripe if they haven't saved a payment method in Replit. */
  createReplitPlanCheckoutSession: CreateReplitPlanCheckoutSessionOutput;
  /** Create a setup intent for the requesting user. Use this to save a payment method for future use. */
  createSetupIntent: CreateSetupIntentOutput;
  createStack?: Maybe<CreateStackOutput>;
  createTeacherVerificationResponse: CreateTeacherVerificationResponseOutput;
  createTeamInvite: CreateTeamInviteOutput;
  createTeamInviteLink: CreateTeamInviteLinkOutput;
  createTeamInvitesFromCSV: TeamOutput;
  createTeamOrgInviteLink: CreateTeamOrgInviteLinkOutput;
  createTeamOrganizationInvite: CreateTeamOrgInviteOutput;
  /** Adds a new team to the organization, or adds a new free team if not associated with org. */
  createTeamV2: CreateTeamV2Output;
  createTemplateShareLink: Team;
  createTemplateTest: TemplateTestOutput;
  createTheme: CreateThemeOutput;
  createUserCourse?: Maybe<CreateUserCourseOutput>;
  createUserCourseLesson?: Maybe<CreateUserCourseLessonOutput>;
  /** Deletes a user's account */
  deleteAccount: Scalars['Boolean'];
  deleteMultiplayerInvite: MultiplayerInviteOutput;
  deleteMultiplayerInviteLink: DeleteMultiplayerInviteLink;
  /** Deletes a Neon database */
  deleteNeonDatabase: DeleteNeonDatabaseOutput;
  deleteProjectAndSubmissions: DeletedProjectAndSubmissionOutput;
  /** Deletes a repl */
  deleteRepl: Repl;
  deleteReplComment: ReplCommentOutput;
  deleteReplDeployment: DeleteReplDeploymentOutput;
  deleteReplFolder: ReplFolder;
  /** Remove an authorized Repl so it can no longer authorize as its owner using Repl Identity */
  deleteReplIdentityAllowedRepl: DeleteReplIdentityAllowedRepl;
  deleteReplUnitTest: ReplUnitTestOutput;
  deleteStack: DeleteStackOutput;
  deleteTeam: TeamOutput;
  deleteTeamInvite: DeleteTeamInviteOutput;
  deleteTeamInviteLink: DeleteTeamInviteLinkOutput;
  deleteTeamOrgInviteLink: DeleteTeamOrgInviteLinkOutput;
  deleteTeamOrganization: DeleteTeamOrganizationOutput;
  deleteTeamOrganizationInvite: DeleteTeamOrgInviteOutput;
  deleteTeamOrganizationMember: DeleteTeamOrganizationMemberOutput;
  /** The mutation used to delete a team's template share link */
  deleteTemplateShareLink?: Maybe<Team>;
  deleteTemplateTest: DeleteReplTemplateOutput;
  deleteTheme: DeleteThemeOutput;
  deleteThreadMessage?: Maybe<DeleteThreadMessageOutput>;
  /** Decline an invoice (called by invoice recipient) */
  denyInvoice: DenyInvoiceOutput;
  deployExtension: DeployExtensionOutput;
  deployHostingBuild2?: Maybe<DeployHostingBuild2Output>;
  disconnectAuthProvider: CurrentUser;
  disconnectGoogleClassroom: DisconnectGoogleClassroomOutput;
  editBounty: EditBountyOutput;
  /** Increase account-level egress with an add-on */
  egressLimitAddOn: EgressLimitAddOnOutput;
  /** Escalate a report for admins to review. */
  escalateBoardReport: EscalateBoardUserOutput;
  exportProjectsOverview: ExportProjectsOverviewOutput;
  exportTeamSubmissions: ExportTeamSubmissionsOutput;
  failHostingBuild?: Maybe<FailHostingBuildOutput>;
  forceSolverToAbandonBountyAsStaff: ForceSolverToAbandonBountyAsStaffOutput;
  /** Freezes a Neon database */
  freezeNeonDatabase: FreezeNeonDatabaseOutput;
  /** Stores the ID for an App Store transaction if one doesn't already exist */
  getOrCreateAppStoreCustomer: AppStoreCustomerOutput;
  giveCodexFeedback2: CodexFeedback2Output;
  hireBountyHunterService: HireBountyHunterServiceOutput;
  importCurriculum: ImportCurriculumOutput;
  importGithubRepo: ImportGithubRepoOutput;
  /** Install an extension. If replId is not provided, the extension will be installed to the user */
  installExtension: InstallExtensionOutput;
  installTheme: InstallThemeOutput;
  /** Creates a group project submission */
  joinReplSubmissionGroup?: Maybe<JoinReplSubmissionGroupOutput>;
  joinTeamAsOrgAdmin: JoinTeamAsOrgAdminOutput;
  leaveTeam: LeaveTeamOutput;
  /** Link a custom domain name to a repl */
  linkReplDomain2: LinkReplDomain2;
  /** Marks all notifications as seen */
  markAllNotificationsAsSeen: CurrentUser;
  markBountyChatRead: MarkBountyChatReadOutput;
  /** Marks all messages in thread as read */
  markMessagesAsSeen?: Maybe<MarkMessagesAsSeenOutput>;
  /** Marks all notifications of a certain type as seen */
  markNotificationsAsSeen: Scalars['Int'];
  /** Marks a tour as seen */
  markTourAsSeen: TourSeen;
  /** Migrates team from old hacky collections to stacks */
  migrateTeamToStacks?: Maybe<MigrateTeamToStacksOutput>;
  moderateBountyApplication: ModerateBountyApplicationOutput;
  /** Sends a user an in-app notification from a moderator or an admin. */
  moderatorNotification: ModeratorNotificationOutput;
  /** Unpublish a user's repl from the community and notify the user. */
  moderatorUnpublish: ModeratorUnpublishOutput;
  moveItemsToFolder: Array<DashboardItem>;
  ownAnonRepl: ReplOutput;
  pinReplToProfile2: PinReplToProfileOutput;
  publishTheme: PublishThemeOutput;
  /** Refreshes a multiplayer invite link */
  refreshMultiplayerInviteLink: Repl;
  registerPushDeviceSession: RegisterPushDeviceSessionOutput;
  removeBountyApplicationAsApplicant: RemoveBountyApplicationAsApplicantOutput;
  removeBountyApplicationAsModerator: RemoveBountyApplicationAsModeratorOutput;
  removeBountyHunterReviewAsStaff: RemoveBountyHunterReviewAsStaffOutput;
  removeMultiplayerUser: ReplPermission;
  /** Unshares a shared repl with the current user */
  removeSharedRepl: Repl;
  removeTeamMember: RemoveTeamMemberOutput;
  /** Remove a warning from a user */
  removeWarn: RemoveWarnOutput;
  /** Takedown a repl and prevent it waking up via proxy but still available via the workspace. */
  replBootStatusStopRepl: ReplBootStatusStopRepl;
  reportBounty: ReportBountyOutput;
  reportBountyApplication: ReportBountyApplicationOutput;
  reportCustomTheme: ReportCustomThemeOutput;
  reportReplComment: ReportReplCommentOutput;
  resetPrivacyStudentPassword: ResetPrivacyStudentPasswordOutput;
  resolveBoardReport: BoardReport;
  /** Resolves an image scan. */
  resolveImageScan: ImageScanType;
  restartUserCourseLesson?: Maybe<RestartUserCourseLessonOutput>;
  revertReplRelease: RevertReplReleaseOutput;
  reviewBountyApplication: ReviewBountyApplicationOutput;
  reviewBountyHunter: ReviewBountyHunter;
  /** Mark a submission reviewed */
  reviewRepl: ReviewReplOutput;
  /** Review a Template to either promote or demote it from the create Repl form */
  reviewTemplate: ReviewTemplateOutput;
  saveIOTestResults?: Maybe<SaveIoTestResultOutput>;
  /** Updates the current user's continent if allowed */
  selectReplContinent: SelectReplContinent;
  sendBountyChat: SendBountyChatOutput;
  /** Send a deployment lifecycle command */
  sendDeploymentLifecycleCommand: SendDeploymentLifecycleCommandOutput;
  /** Send a push notification to all staff users */
  sendPushToStaff: SendPushToStaff;
  sendTip: SendTipOutput;
  setActiveTheme?: Maybe<SetActiveThemeOutput>;
  setAlwaysOn: SetAlwaysOnOutput;
  setBetaTemplateRepl?: Maybe<SetBetaTemplateOutput>;
  setBlocking2: SetBlocking2;
  setBountyUnlisted: SetBountyUnlistedOutput;
  setFollowing?: Maybe<SetFollowing>;
  setGpu: SetGpuOutput;
  /** Set a Repls Hosting Tier */
  setHostingTier: SetHostingTierOutput;
  setLanguageTemplateRepl: SetLanguageTemplateOutput;
  setOnboardingExperience: SetOnboardingExperienceOutput;
  setOnboardingIntent: SetOnboardingIntentOutput;
  setReplCommentSettings: ReplOutput;
  setReplExamples: SetReplExamplesOutput;
  setReplLayoutState: SetReplLayoutStateOutput;
  setReplTags: SetReplTagsOutput;
  /** Sets the settings that control the repl view outside the workspace. */
  setReplViewSettings: SetReplViewSettingsOutput;
  setStorageCapacity: SetStorageCapacityOutput;
  setTemplateCategoryRepl?: Maybe<SetTemplateCategoryReplOutput>;
  setTemplateReplCategory: SetTemplateCategoryOutput;
  setUserCoverImage: SetUserCoverImageOutput;
  setUserKeybindings: SetUserKeybindingsOutput;
  setUserSocials: SetUserSocialsOutput;
  setUserStorageQuota: SetUserStorageQuotaOutput;
  /** ... */
  submitRepl: SubmitReplOutput;
  /** Creates a test event for graphql subscriptions */
  testSubscription?: Maybe<Scalars['Boolean']>;
  toggleHiddenComment: ToggleHiddenCommentOutput;
  toggleHiddenPost: ToggleHiddenPostOutput;
  toggleReplLike: ToggleReplLikeOutput;
  /** Marks a tour as seen */
  toursSeen: ToursSeenMuationResult;
  unarchiveTeam: UnarchiveTeamOutput;
  /** Deletes all community bans on a user. */
  unbanCommunityUser: UnbanCommunityUserOutput;
  /** Unfreezes a Neon database */
  unfreezeNeonDatabase: UnfreezeNeonDatabaseOutput;
  /** Remove an extension installation */
  uninstallExtension: UninstallExtensionOutput;
  uninstallTheme: UninstallThemeOutput;
  unpinReplFromProfile2: UnpinReplFromProfileOutput;
  unpublishReplFromCommunity: UnpublishReplFromCommunityOutput;
  unpublishTheme: UnpublishThemeOutput;
  unpublishThemeAsModerator: UnpublishThemeAsModeratorOutput;
  unregisterPushDeviceSession: UnregisterPushDeviceSessionOutput;
  unresolveBoardReport: BoardReport;
  unsetTemplateCategoryRepl?: Maybe<UnsetTemplateCategoryReplOutput>;
  /** Lets a teacher unsubmit a Repl submission */
  unsubmitRepl: UnsubmitReplOutput;
  updateAnnotationAnchor?: Maybe<UpdateAnnotationAnchorOutput>;
  updateBoardTrendingAlgorithmSettings: BoardTrendingAlgorithmSettings;
  updateCurrentUser?: Maybe<CurrentUser>;
  /** Update the Auto-Refill configuration for the requesting user. */
  updateCyclesAutoRefillConfiguration: UpdateCyclesAutoRefillConfigurationOutput;
  updateEditorPreferences: CurrentUser;
  /** Updates the current user's email if allowed */
  updateEmail?: Maybe<UpdateUserOutput>;
  /** When `active` is true, either find and update an existing order or charge the user and create a new one. When `active` is false, either update an existing order or return an error if none is found */
  updateGhostwriterPowerUp: UpdateGhostwriterPowerUpOutput;
  /** Updates the current user's password if allowed */
  updatePassword?: Maybe<UpdateUserOutput>;
  /** Updates a Post */
  updatePost: UpdatePostPayload;
  /** When `active` is true, either find and update an existing order or charge the user and create a new one. When `active` is false, either update an existing order or return an error if none is found.This mutation is maintained for backwards compatibility with themobile app, prefer updatePrivatePowerUp2 instead for new implementations. */
  updatePrivatePowerUp: UpdatePrivatePowerUpOutput;
  /** When `active` is true, either find and update an existing order or charge the user and create a new one. When `active` is false, either update an existing order or return an error if none is found.Unlike its legacy equivalent, returns a currentUser type so thatclients can fetch updated balance, power ups, etc as part of the mutation. */
  updatePrivatePowerUp2: UpdatePrivatePowerUp2Output;
  /** Updates a Repl */
  updateRepl: UpdateReplPayload;
  updateReplComment: ReplCommentOutput;
  updateReplFolder: ReplFolder;
  updateReplTemplate: UpdateReplTemplateOutputType;
  /** Creates a model solution for a project */
  updateReplTemplateModelSolution: UpdateReplTemplateModelSolutionOutput;
  /** Updates time_updated of a repl */
  updateReplTimeUpdated: UpdateReplTimeUpdatedOutput;
  updateReplUnitTest: ReplUnitTestOutput;
  updateReplUnitTestLastRun?: Maybe<UpdateReplUnitTestLastRunOutput>;
  updateReplUnitTestMeta: ReplUnitTestMetaOutput;
  /** Updates the current user's email if allowed */
  updateRole?: Maybe<UpdateUserOutput>;
  updateStack: UpdateStackOutput;
  updateSubscription: UpdateSubscription;
  updateTeam: TeamOutput;
  updateTeamInviteLinkEduSignup: UpdateTeamInviteLinkEduSignupOutput;
  /** Updates a team member's nickname */
  updateTeamMember: UpdateTeamMemberOutput;
  updateTeamOrganization: UpdateTeamOrganizationOutput;
  updateTeamOrganizationMember: UpdateTeamOrganizationMemberOutput;
  updateTeamUserPermissions: UpdateTeamUserPermissionsOutput;
  /** The mutation used to update a template share link for a team */
  updateTemplateShareLink: TeamTemplateShareLink;
  updateTemplateTest: TemplateTestOutput;
  updateTheme: UpdateThemeOutput;
  /** Change conversation message preview in response to user input */
  updateThreadPreview?: Maybe<Scalars['Boolean']>;
  updateUserPrivacyPreferences: UpdateUserPrivacyPreferencesOutput;
  updateUserSitePresence: UpdateUserSitePresenceOutput;
  upgradeTheme: UpgradeThemeOutput;
  uploadReplAttachment?: Maybe<UploadReplAttachmentOutput>;
  /** The mutation used to get the templates from another team via the code of a template share link */
  useTemplateShareLink: Scalars['Int'];
  /** Warn a user */
  warnUser: WarnUserOutput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeAbandonBountyArgs = {
  input: AbandonBountyInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeAcceptInvoiceArgs = {
  id: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeAddMultiplayerUserArgs = {
  replId: Scalars['String'];
  type: Scalars['String'];
  username: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeAddReplIdentityAllowedReplArgs = {
  input: AddReplIdentityAllowedReplInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeAdminRemoveReplIconArgs = {
  reason: Scalars['String'];
  replUrl: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeAdminRemoveUserImageArgs = {
  deleteCoverImage?: InputMaybe<Scalars['Boolean']>;
  deleteProfilePicture?: InputMaybe<Scalars['Boolean']>;
  reason: Scalars['String'];
  username: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeArchiveTeamArgs = {
  input: ArchiveTeamInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeArrangeStackArgs = {
  input: ArrangeStackInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeArrangeStackItemArgs = {
  input: ArrangeStackItemInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeAsanaSupportRequestArgs = {
  input: AsanaSupportRequestInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeBanCommunityUserArgs = {
  reason: Scalars['String'];
  timeExpired?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeBoostRepl2Args = {
  input: BoostRepl2Input;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeBulkModerateArgs = {
  input: BulkModerateInputArg;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCancelBountyArgs = {
  input: CancelBountyInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCancelBountyAsStaffArgs = {
  input: CancelBountyAsStaffInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCancelInvoiceArgs = {
  id: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeChangeLanguageToNixArgs = {
  id: Scalars['String'];
  lang: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeChangeSubscriptionArgs = {
  input: ChangeSubscriptionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCompleteUserCourseLessonArgs = {
  input: CompleteUserCourseLessonInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeConfirmInvoiceArgs = {
  id: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeConnectGoogleClassroomArgs = {
  input: ConnectGoogleClassroomInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCopyStacksToTeamArgs = {
  input: CopyStacksToTeamInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCopyTeamTemplateArgs = {
  input: CopyTeamTemplateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateAnnotationAnchorArgs = {
  annotationAnchor: AnnotationAnchorInput;
  annotationMessage?: InputMaybe<AnnotationMessageInput>;
  highlight?: InputMaybe<AnnotationHighlightInput>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateAnnotationMessageArgs = {
  anchorId: Scalars['String'];
  annotationMessage: AnnotationMessageInput;
  highlight?: InputMaybe<AnnotationHighlightInput>;
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateAsanaFeedbackTaskArgs = {
  input: CreateAsanaFeedbackTaskInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateAsanaFeedbackTaskReturnGidArgs = {
  input: CreateAsanaFeedbackTaskInputReturnGid;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateAsanaSupportTaskArgs = {
  input: CreateAsanaSupportTaskInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateBoardReportArgs = {
  commentId?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  reason: Scalars['String'];
  replId?: InputMaybe<Scalars['String']>;
  reportedUserId?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateBountyArgs = {
  input: CreateBountyInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateBountyApplicationArgs = {
  input: CreateBountyApplicationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateBountySubmissionArgs = {
  input: CreateBountySubmissionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateBountySubmissionReviewArgs = {
  input: CreateBountySubmissionReviewInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateCyclesStripeCheckoutSessionArgs = {
  input: CreateCyclesStripeCheckoutSessionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateExtensionArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateGithubAccessTokenArgs = {
  input: CreateGithubAccessTokenInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateGithubRepoArgs = {
  input: CreateGithubRepoInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateInvoiceArgs = {
  amount: Scalars['Int'];
  description: Scalars['String'];
  redirectUrl?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  userId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateLanguageConnectionMetadataArgs = {
  language: Scalars['String'];
  overrideClusterMetadata?: InputMaybe<ClusterMetadata>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateMultiplayerInvite2Args = {
  email: Scalars['String'];
  replId: Scalars['String'];
  type: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateNeonDatabaseArgs = {
  input: CreateNeonDatabaseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateNewTeamsEduOrganizationArgs = {
  input: CreateNewTeamsEduOrganizationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplArgs = {
  input: CreateReplInput;
  isTitleAutoGenerated?: InputMaybe<Scalars['Boolean']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplAsTemplateArgs = {
  input: CreateReplAsTemplateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplCommentArgs = {
  input: CreateReplCommentInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplCommentReplyArgs = {
  input: CreateReplCommentReplyInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplDeploymentArgs = {
  input: CreateReplDeployemntInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplFolderArgs = {
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplPost2Args = {
  input: CreateReplPost2Input;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplReleaseArgs = {
  input: CreateReplReleaseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplRunArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplSubmissionArgs = {
  templateId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplSubmissionGroupArgs = {
  input: CreateReplSubmissionGroupInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplTemplateArgs = {
  input: CreateReplTemplateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplTemplateModelSolutionArgs = {
  input: CreateReplTemplateModelSolutionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplTemplateModelSolutionForkArgs = {
  input: CreateReplTemplateModelSolutionForkInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplUnitTestArgs = {
  input: CreateReplUnitTestInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplUnitTestMetaArgs = {
  input: CreateReplUnitTestMetaInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplitOneTimeCheckoutSessionArgs = {
  input: CreateReplitOneTimeCheckoutSessionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateReplitPlanCheckoutSessionArgs = {
  input: CreateReplitPlanCheckoutSessionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateStackArgs = {
  input: CreateStackInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTeacherVerificationResponseArgs = {
  input: CreateTeacherVerificationResponseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTeamInviteArgs = {
  input: CreateTeamInviteInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTeamInviteLinkArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTeamInvitesFromCsvArgs = {
  input: CsvFileInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTeamOrgInviteLinkArgs = {
  orgId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTeamOrganizationInviteArgs = {
  input: CreateTeamOrgInviteInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTeamV2Args = {
  input: CreateTeamV2Input;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTemplateShareLinkArgs = {
  teamId: Scalars['Int'];
  templateIds: Array<Scalars['Int']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateTemplateTestArgs = {
  input: CreateTemplateTestInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateThemeArgs = {
  input: CreateThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateUserCourseArgs = {
  input: CreateUserCourseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeCreateUserCourseLessonArgs = {
  input: CreateUserCourseLessonInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteMultiplayerInviteArgs = {
  email: Scalars['String'];
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteMultiplayerInviteLinkArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteNeonDatabaseArgs = {
  input: DeleteNeonDatabaseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteProjectAndSubmissionsArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteReplArgs = {
  id: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteReplCommentArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteReplDeploymentArgs = {
  input: DeleteReplDeploymentInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteReplFolderArgs = {
  folderId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteReplIdentityAllowedReplArgs = {
  input: DeleteReplIdentityAllowedReplInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteReplUnitTestArgs = {
  testId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteStackArgs = {
  stackId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTeamArgs = {
  input: DeleteTeamInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTeamInviteArgs = {
  input: DeleteTeamInviteInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTeamInviteLinkArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTeamOrgInviteLinkArgs = {
  orgId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTeamOrganizationArgs = {
  input: DeleteTeamOrganizationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTeamOrganizationInviteArgs = {
  input: DeleteTeamOrgInviteInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTeamOrganizationMemberArgs = {
  input: DeleteTeamOrganizationMemberInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTemplateShareLinkArgs = {
  linkId: Scalars['Int'];
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteTemplateTestArgs = {
  testId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteThemeArgs = {
  input: DeleteThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeleteThreadMessageArgs = {
  messageId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDenyInvoiceArgs = {
  id: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeployExtensionArgs = {
  extensionId: Scalars['String'];
  outputDirectory: Scalars['String'];
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDeployHostingBuild2Args = {
  input: DeployHostingBuild2Input;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDisconnectAuthProviderArgs = {
  provider: UserAuthProviders;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeDisconnectGoogleClassroomArgs = {
  input: DisconnectGoogleClassroomInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeEditBountyArgs = {
  input: EditBountyInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeEgressLimitAddOnArgs = {
  input: EgressLimitAddOnInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeEscalateBoardReportArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeExportProjectsOverviewArgs = {
  input: ExportProjectsOverviewInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeExportTeamSubmissionsArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeFailHostingBuildArgs = {
  input: FailHostingBuildInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeForceSolverToAbandonBountyAsStaffArgs = {
  input: ForceSolverToAbandonBountyAsStaffInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeFreezeNeonDatabaseArgs = {
  input: FreezeNeonDatabaseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeGiveCodexFeedback2Args = {
  input: CodexFeedback2Input;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeHireBountyHunterServiceArgs = {
  input: HireBountyHunterServiceInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeImportCurriculumArgs = {
  input: ImportCurriculumInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeImportGithubRepoArgs = {
  input: ImportGithubRepoInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeInstallExtensionArgs = {
  extensionId: Scalars['String'];
  replId?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeInstallThemeArgs = {
  input: InstallThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeJoinReplSubmissionGroupArgs = {
  input: JoinReplSubmissionGroupInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeJoinTeamAsOrgAdminArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeLeaveTeamArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeLinkReplDomain2Args = {
  deploymentId?: InputMaybe<Scalars['String']>;
  domain: Scalars['String'];
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeMarkBountyChatReadArgs = {
  input: MarkBountyChatReadInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeMarkMessagesAsSeenArgs = {
  messageIds?: InputMaybe<Array<Scalars['String']>>;
  replId: Scalars['String'];
  threadId?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeMarkNotificationsAsSeenArgs = {
  context?: InputMaybe<NotificationContext>;
  id?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  url?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeMarkTourAsSeenArgs = {
  name: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeMigrateTeamToStacksArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeModerateBountyApplicationArgs = {
  input: ModerateBountyApplicationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeModeratorNotificationArgs = {
  input: ModeratorNotificationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeModeratorUnpublishArgs = {
  input: ModeratorUnpublishInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeMoveItemsToFolderArgs = {
  destFolderId: Scalars['String'];
  folderIds: Array<InputMaybe<Scalars['String']>>;
  replIds: Array<InputMaybe<Scalars['String']>>;
  teamId?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeOwnAnonReplArgs = {
  input: OwnAnonReplInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypePinReplToProfile2Args = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypePublishThemeArgs = {
  input: PublishThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRefreshMultiplayerInviteLinkArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRegisterPushDeviceSessionArgs = {
  input: RegisterPushDeviceSessionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRemoveBountyApplicationAsApplicantArgs = {
  input: RemoveBountyApplicationAsApplicantInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRemoveBountyApplicationAsModeratorArgs = {
  input: RemoveBountyApplicationAsModeratorInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRemoveBountyHunterReviewAsStaffArgs = {
  input: RemoveBountyHunterReviewAsStaffInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRemoveMultiplayerUserArgs = {
  replId: Scalars['String'];
  username: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRemoveSharedReplArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRemoveTeamMemberArgs = {
  input: RemoveTeamMemberInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRemoveWarnArgs = {
  username: Scalars['String'];
  warnId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReplBootStatusStopReplArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReportBountyArgs = {
  bountyId: Scalars['Int'];
  reason: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReportBountyApplicationArgs = {
  bountyApplicationId: Scalars['Int'];
  reason: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReportCustomThemeArgs = {
  customThemeId: Scalars['Int'];
  customThemeVersionId: Scalars['Int'];
  reason: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReportReplCommentArgs = {
  reason: Scalars['String'];
  replCommentId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeResetPrivacyStudentPasswordArgs = {
  password: Scalars['String'];
  teamId: Scalars['Int'];
  userId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeResolveBoardReportArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeResolveImageScanArgs = {
  imageScanClassificationId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRestartUserCourseLessonArgs = {
  input: RestartUserCourseLessonInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeRevertReplReleaseArgs = {
  input: RevertReplReleaseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReviewBountyApplicationArgs = {
  input: ReviewBountyApplicationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReviewBountyHunterArgs = {
  input: ReviewBountyHunterInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReviewReplArgs = {
  replId: Scalars['String'];
  status: Scalars['Boolean'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeReviewTemplateArgs = {
  input: ReviewTemplateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSaveIoTestResultsArgs = {
  replId: Scalars['String'];
  results: Array<IoTestResultInput>;
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSelectReplContinentArgs = {
  input: SelectReplContinentInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSendBountyChatArgs = {
  input: SendBountyChatInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSendDeploymentLifecycleCommandArgs = {
  input: SendDeploymentLifecycleCommandInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSendPushToStaffArgs = {
  input: SendPushToStaffInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSendTipArgs = {
  input: SendTipInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetActiveThemeArgs = {
  input: SetActiveThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetAlwaysOnArgs = {
  enabled: Scalars['Boolean'];
  replId: Scalars['ID'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetBetaTemplateReplArgs = {
  input: SetBetaTemplateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetBlocking2Args = {
  input: SetBlocking2Input;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetBountyUnlistedArgs = {
  bountyId: Scalars['Int'];
  isUnlisted: Scalars['Boolean'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetFollowingArgs = {
  input: SetFollowingInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetGpuArgs = {
  enabled: Scalars['Boolean'];
  replId: Scalars['ID'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetHostingTierArgs = {
  input: SetHostingTierInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetLanguageTemplateReplArgs = {
  input: SetLanguageTemplateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetOnboardingExperienceArgs = {
  role: OnboardingExperience;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetOnboardingIntentArgs = {
  role: Intent;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetReplCommentSettingsArgs = {
  input: SetReplCommentSettingsInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetReplExamplesArgs = {
  input: SetReplExamplesInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetReplLayoutStateArgs = {
  input: SetReplLayoutStateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetReplTagsArgs = {
  input: SetReplTagsInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetReplViewSettingsArgs = {
  input: SetReplViewSettingsInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetStorageCapacityArgs = {
  input: SetStorageCapacityInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetTemplateCategoryReplArgs = {
  input: SetTemplateCategoryReplInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetTemplateReplCategoryArgs = {
  input: SetTemplateReplCategoryInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetUserCoverImageArgs = {
  input: SetUserCoverImageInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetUserKeybindingsArgs = {
  input: SetUserKeybindingsInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSetUserSocialsArgs = {
  input: SetUserSocialsInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeSubmitReplArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeToggleHiddenCommentArgs = {
  commentId: Scalars['Int'];
  isHidden: Scalars['Boolean'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeToggleHiddenPostArgs = {
  isHidden: Scalars['Boolean'];
  postId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeToggleReplLikeArgs = {
  input: ToggleReplLikeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeToursSeenArgs = {
  name: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnarchiveTeamArgs = {
  input: UnarchiveTeamInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnbanCommunityUserArgs = {
  input: UnbanCommunityUserInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnfreezeNeonDatabaseArgs = {
  input: UnfreezeNeonDatabaseInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUninstallExtensionArgs = {
  installationId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUninstallThemeArgs = {
  input: UninstallThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnpinReplFromProfile2Args = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnpublishReplFromCommunityArgs = {
  input: UnpublishReplFromCommunityInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnpublishThemeArgs = {
  input: UnpublishThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnpublishThemeAsModeratorArgs = {
  input: UnpublishThemeAsModeratorInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnregisterPushDeviceSessionArgs = {
  input: UnregisterPushDeviceSessionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnresolveBoardReportArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnsetTemplateCategoryReplArgs = {
  input: UnsetTemplateCategoryReplInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUnsubmitReplArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateAnnotationAnchorArgs = {
  changes: AnnotationAnchorChangesInput;
  id: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateBoardTrendingAlgorithmSettingsArgs = {
  input: UpdateBoardTrendingAlgorithmSettingsInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateCurrentUserArgs = {
  input: UpdateCurrentUserInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateCyclesAutoRefillConfigurationArgs = {
  input: UpdateCyclesAutoRefillConfigurationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateEditorPreferencesArgs = {
  input: UpdateEditorPreferencesInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateGhostwriterPowerUpArgs = {
  input: UpdateGhostwriterPowerUpInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdatePostArgs = {
  input: UpdatePostInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdatePrivatePowerUpArgs = {
  active: Scalars['Boolean'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdatePrivatePowerUp2Args = {
  active: Scalars['Boolean'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplArgs = {
  input: UpdateReplInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplCommentArgs = {
  input: UpdateReplCommentInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplFolderArgs = {
  folderId: Scalars['String'];
  name: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplTemplateArgs = {
  input: UpdateReplTemplateInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplTemplateModelSolutionArgs = {
  input: UpdateReplTemplateModelSolutionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplTimeUpdatedArgs = {
  id: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplUnitTestArgs = {
  input: UpdateReplUnitTestInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplUnitTestLastRunArgs = {
  input: UpdateReplUnitTestLastRunInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateReplUnitTestMetaArgs = {
  input: UpdateReplUnitTestMetaInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateRoleArgs = {
  flag: Scalars['Boolean'];
  role: UserRoles;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateStackArgs = {
  input: UpdateStackInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTeamArgs = {
  input: UpdateTeamInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTeamInviteLinkEduSignupArgs = {
  enabled: Scalars['Boolean'];
  teamId: Scalars['Int'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTeamOrganizationArgs = {
  input: UpdateTeamOrganizationInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTeamOrganizationMemberArgs = {
  input: UpdateTeamOrganizationMemberInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTeamUserPermissionsArgs = {
  input: UpdateTeamUserPermissionsInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTemplateShareLinkArgs = {
  linkId: Scalars['Int'];
  teamId: Scalars['Int'];
  templateIds: Array<Scalars['Int']>;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateTemplateTestArgs = {
  input: UpdateTemplateTestInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateThemeArgs = {
  input: UpdateThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateThreadPreviewArgs = {
  message?: InputMaybe<Scalars['String']>;
  messageId: Scalars['String'];
  threadId: Scalars['String'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpdateUserPrivacyPreferencesArgs = {
  input: UpdateUserPrivacyPreferencesInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUpgradeThemeArgs = {
  input: UpgradeThemeInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUploadReplAttachmentArgs = {
  input: UploadReplAttachmentInput;
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeUseTemplateShareLinkArgs = {
  code: Scalars['String'];
  content: Array<Scalars['Int']>;
  teamId: Scalars['Int'];
  withDates: Scalars['Boolean'];
};

/** The top level entry point for mutating the graph */
export type RootMutationTypeWarnUserArgs = {
  reason: Scalars['String'];
  username: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryType = {
  __typename: 'RootQueryType';
  /** Admin object */
  admin?: Maybe<Admin>;
  /** Get Repls that a user has permitted to use Repl Identity to authenticate as them */
  allowedReplIdentityRepls: AllowedReplIdentityRepls;
  /** Find an annotationAnchor by id */
  annotationAnchor: AnnotationQueryOutput;
  /** Resolve an anonymous feature flag */
  anonymousFlag: AnonymousFlagOutput;
  /** App env value */
  appEnvValue?: Maybe<Scalars['String']>;
  /** Returns whether or not a given title is available for a repl */
  availableReplTitle: AvailableReplTitleOutput;
  betaTemplateRepls: Array<Repl>;
  /** A Board */
  board?: Maybe<Board>;
  /** Finds all reports on repls, posts, bounties, bounty applications and custom themes. */
  boardReports: BoardReports;
  /** Finds a board by slug */
  boards: Array<Board>;
  /** Returns a BountyApplication found via ID */
  bountyApplicationById: BountyApplicationByIdOutput;
  /** Returns Bounty applications for a given Bounty */
  bountyApplicationSearch: BountyApplicationSearchOutput;
  /** Returns a Bounty found via ID */
  bountyById: BountyByIdOutput;
  /** Returns a Bounty found via its URL, the username and slug */
  bountyByUrl: BountyByUrlOutput;
  /** Returns Bounty chat messages for a given Bounty application */
  bountyChatSearch: BountyChatSearchOutput;
  /** Find a Bounty service by ID */
  bountyHunterServiceById: BountyHunterServiceByIdOutput;
  /** Bounty services */
  bountyHunterServiceSearch: BountyHunterServiceSearchOutput;
  /** Returns a Bounty found via ID */
  bountySearch: BountySearchOutput;
  /** ClUI root command */
  clui?: Maybe<CluiQuery>;
  /** A Comment */
  comment?: Maybe<Comment>;
  /** Returns the user's country code */
  country?: Maybe<Scalars['String']>;
  /** Gets a coupon by id */
  coupon: CouponQueryOutput;
  /** Finds the Repls associated with a course's lessons */
  courseLessonsRepls?: Maybe<CourseLessonsReplsOutput>;
  currentUser?: Maybe<CurrentUser>;
  /** Returns published curriculum for Teams */
  curricula: Array<Curriculum>;
  curriculumBySlug: CurriculumBySlugOutput;
  /** Returns a Custom Theme found via its ID */
  customThemeById: CustomThemeByIdOutput;
  explainCode: ExplainCodeOutput;
  extension?: Maybe<ExtensionOutput>;
  /** Returns all extension installations for the user (and optionally scoped to a repl) */
  extensionInstallationById: ExtensionInstallationByIdOutput;
  /** Returns all extension installations available to the current user in the provided repl */
  extensionInstallations: ExtensionInstallationsOutput;
  extensionList: Array<Extension>;
  generateCode: GenerateCodeOutput;
  /** Get a community-banned user by their ID */
  getBannedBoardUser?: Maybe<GetBannedBoardUserOutput>;
  /** Google Classrooms associated with this user's Google account */
  getGoogleClassroomCourses?: Maybe<GetGoogleClassroomCoursesOutput>;
  /** Google Classroom students fetched from the API */
  getGoogleClassroomStudents?: Maybe<GetGoogleClassroomStudentsOutput>;
  /** Returns the Neon databases for a given user or repl */
  getNeonDatabases: GetNeonDatabasesOutput;
  /** Returns a set of recommended Bounties for a user, which can be displayed on the home page */
  getRecommendedBountiesForUser: GetRecommendedBountiesForUserOutput;
  /** Returns a Replit Checkout Session */
  getReplitCheckoutSession: GetReplitCheckoutSessionOutput;
  /** Returns information about connections to repls which belong to the team with the id provided */
  getTeamConnections: Array<ReplConnections>;
  /** Get paginated list of user events for current user. */
  getUserEventsFeed?: Maybe<UserEventConnection>;
  /** Get all comments of a user */
  getUserReplComments?: Maybe<GetUserReplCommentsOutput>;
  /** Returns hosting deploy build action history. */
  hostingBuildDeployActionHistory: HostingBuildDeployActionHistoryOutput;
  /** Paginated image scan results */
  imageScans?: Maybe<ImageScansOutput>;
  instantGitHubImport: InstantGitHubImportOutput;
  /** Load an invoice by ID. */
  invoiceById: InvoiceOutput;
  /** Replit language */
  language?: Maybe<Language>;
  /** @deprecated Use templateRepl2 to search for templates instead */
  languageTemplateRepls: Array<Repl>;
  /** Replit languages */
  languages: Array<Language>;
  /** The moderator audit logs */
  moderatorAuditLog: ModeratorAuditLogOutput;
  /** Finds the current user's notifications */
  notifications: NotificationConnection;
  /** Finds all pinned posts */
  pinnedPosts: Array<Post>;
  /** A Post */
  post?: Maybe<Post>;
  previewInvoice?: Maybe<PreviewInvoice>;
  /** Preview a change to a users subscription, to see what the proration would be */
  previewProration: PreviewProrationOutput;
  /** Finds recently edited repls */
  recentRepls: Array<Repl>;
  /** Find a Repl by id or url */
  repl: ReplQueryOutput;
  /** Returns all recently active repl boot status for current users repls */
  replBootStatus: ReplBootStatusOutput;
  /** Returns the boot status history for a given repl */
  replBootStatusHistory: ReplBootStatusHistoryOutput;
  /** Find a Repl comment */
  replComment: ReplCommentOutput;
  /** Returns the available Goval continents */
  replContinents: ReplContinents;
  /** Finds a folder from its ID */
  replFolderByPath?: Maybe<ReplFolder>;
  /** Finds all posts */
  replPosts: PostConnection;
  replTemplateById?: Maybe<ReplTemplateOutput>;
  /** Returns a unique Repl title for the logged in user */
  replTitle: Scalars['String'];
  /** Returns whether a replit.app subdomain is available for use. */
  replitAppSubdomainAvailability: ReplitAppSubdomainAvailabilityOutput;
  /** Search */
  search: SearchQueryOutput;
  /** Find comments with spam */
  searchSpamComments: Array<ReplComment>;
  /** A site-wide banner message */
  siteBanner?: Maybe<Banner>;
  studentsSubmissions?: Maybe<StudentsSubmissionsOutput>;
  /** Returns a list of subscription plans supported */
  subscriptionPlans: SubscriptionPlansOutput;
  /** Replit Support Asset Upload */
  supportAssetUpload: SupportAssetUrls;
  /** Finds a single tag via a unique identifier */
  tag?: Maybe<Tag>;
  /** Returns tags in official and community groups */
  tagGroups: TagGroups;
  /** Returns existing tags in the order provided */
  tags: Array<Tag>;
  /** Finds a single user via a unique identifier */
  team?: Maybe<Team>;
  /** A team by username */
  teamByUsername: TeamOutput;
  /** Fetches a team organization by id */
  teamOrganization: TeamOrganizationOutput;
  /** The query used to fetch a template share link by its code */
  teamTemplateShareLink: TeamTemplateShareLink;
  /** Returns existing template categories. */
  templateCategories?: Maybe<TemplateCategoriesOutput>;
  /** Return a template category via its slug */
  templateCategoryBySlug: TemplateCategoryBySlugOutput;
  /** Return list of all templates that have landing pages */
  templateLandingPages: Array<TemplateReview>;
  /** Return a template repl via its landing page slug */
  templateReplBySlug: TemplateReplBySlugOutput;
  /**
   * Returns Repl templates and repls published as templates
   * @deprecated Use templateRepls2
   */
  templateRepls: Array<TemplateReplObject>;
  /** Returns Repl templates and Repls published as templates */
  templateRepls2: TemplateRepls2Output;
  /**
   * Gets the viewer's theme
   * @deprecated Use CurrentUser.editorPreferences.theme
   */
  theme: Scalars['String'];
  /** Returns an array of themes for a given search query */
  themesSearch: ThemesSearchOutput;
  threadsByFile?: Maybe<ThreadsByFileOutput>;
  /** Creates a URL for embedding the Tipalti Payee iFrame */
  tipaltiIframeUrl: TipaltiIframeUrl;
  /** Users who tipped the most on Replit */
  topGlobalTippers: TopGlobalTippersOutput;
  /** Total value value in cycles of all available bounties from a given user; if not specified, returns the total value of all available bounties. */
  totalBountiesCyclesValue: Scalars['Int'];
  /** Finds the curent user's seen state of a tour. */
  toursSeen: ToursSeenQueryResult;
  transformCode: TransformCodeOutput;
  /** Finds trending posts with repls */
  trendingReplPosts: Array<Post>;
  /** Get a list of tutorial Repls, optionally filtered by category */
  tutorialRepls?: Maybe<TutorialReplsOutput>;
  unverifiedEduUsers: Array<TeacherVerification>;
  /** Finds a single user via a unique identifier */
  user?: Maybe<User>;
  /** A user's profile */
  userByUsername?: Maybe<User>;
  /** Finds users whose usernames start with a given query */
  usernameSearch: Array<User>;
  /** Finds users based on id (with a hard max) */
  usersByIds: Array<User>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeAnnotationAnchorArgs = {
  id: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeAnonymousFlagArgs = {
  input: AnonymousFlagInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeAppEnvValueArgs = {
  key: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeAvailableReplTitleArgs = {
  input: AvailableReplTitleInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBoardArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBoardReportsArgs = {
  input: BoardReportsInputType;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBoardsArgs = {
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountyApplicationByIdArgs = {
  input: BountyApplicationByIdInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountyApplicationSearchArgs = {
  input: BountyApplicationSearchInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountyByIdArgs = {
  input: BountyByIdInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountyByUrlArgs = {
  input: BountyByUrlInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountyChatSearchArgs = {
  input: BountyChatSearchInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountyHunterServiceByIdArgs = {
  input: BountyHunterServiceByIdInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountyHunterServiceSearchArgs = {
  input: BountyHunterServiceSearchInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeBountySearchArgs = {
  input: BountySearchInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeCommentArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeCouponArgs = {
  id: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeCourseLessonsReplsArgs = {
  courseSlug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeCurriculumBySlugArgs = {
  slug: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeCustomThemeByIdArgs = {
  input: CustomThemeByIdInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeExplainCodeArgs = {
  code: Scalars['String'];
  language: Scalars['String'];
  replId?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeExtensionArgs = {
  id: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeExtensionInstallationByIdArgs = {
  id: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeExtensionInstallationsArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeExtensionListArgs = {
  includeNonBlessed?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGenerateCodeArgs = {
  input: GenerateCodeInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetBannedBoardUserArgs = {
  userId: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetGoogleClassroomStudentsArgs = {
  courseId: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetNeonDatabasesArgs = {
  input: GetNeonDatabasesInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetRecommendedBountiesForUserArgs = {
  input: GetRecommendedBountiesForUserInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetReplitCheckoutSessionArgs = {
  input: GetReplitCheckoutSessionInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetTeamConnectionsArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetUserEventsFeedArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeGetUserReplCommentsArgs = {
  input: GetUserReplCommentsInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeHostingBuildDeployActionHistoryArgs = {
  input: HostingBuildDeployActionHistoryInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeImageScansArgs = {
  after?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  threshold: Scalars['Float'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeInstantGitHubImportArgs = {
  input: InstantGitHubImportInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeInvoiceByIdArgs = {
  id: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeLanguageArgs = {
  id: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeLanguagesArgs = {
  getAll?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeModeratorAuditLogArgs = {
  input: ModeratorAuditLogInputType;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  seen?: InputMaybe<Scalars['Boolean']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypePostArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypePreviewInvoiceArgs = {
  input: PreviewInvoiceInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypePreviewProrationArgs = {
  input: PreviewProrationInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeRecentReplsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<RecentReplsFilter>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplArgs = {
  id?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplBootStatusArgs = {
  input?: InputMaybe<ReplBootStatusInput>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplBootStatusHistoryArgs = {
  input: ReplBootStatusHistoryInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplCommentArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplFolderByPathArgs = {
  path: Scalars['String'];
  teamName?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplPostsArgs = {
  options?: InputMaybe<ReplPostsQueryOptions>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplTemplateByIdArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplTitleArgs = {
  teamId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeReplitAppSubdomainAvailabilityArgs = {
  deploymentId?: InputMaybe<Scalars['String']>;
  subdomain: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeSearchArgs = {
  options: SearchQueryOptions;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeSearchSpamCommentsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  dateMax?: InputMaybe<Scalars['DateTime']>;
  dateMin?: InputMaybe<Scalars['DateTime']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  isRegex?: InputMaybe<Scalars['Boolean']>;
  pattern: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeStudentsSubmissionsArgs = {
  input: StudentsSubmissionsInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeSupportAssetUploadArgs = {
  filename: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTagArgs = {
  id: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTagsArgs = {
  tags: Array<Scalars['String']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTeamArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTeamByUsernameArgs = {
  username: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTeamOrganizationArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTeamTemplateShareLinkArgs = {
  code: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTemplateCategoriesArgs = {
  input?: InputMaybe<TemplateCategoriesInput>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTemplateCategoryBySlugArgs = {
  input: TemplateCategoryBySlugInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTemplateReplBySlugArgs = {
  input: TemplateReplBySlugInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTemplateReplsArgs = {
  includeLanguages?: InputMaybe<Scalars['Boolean']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTemplateRepls2Args = {
  options: TemplateRepls2QueryOptions;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeThemesSearchArgs = {
  input: ThemesSearchInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeThreadsByFileArgs = {
  path: Scalars['String'];
  replId: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTopGlobalTippersArgs = {
  limit: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTotalBountiesCyclesValueArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeToursSeenArgs = {
  name: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTransformCodeArgs = {
  input: TransformCodeInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTrendingReplPostsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  minVoteCount?: InputMaybe<Scalars['Int']>;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeTutorialReplsArgs = {
  input: TutorialReplsInput;
};

/** The top level entry point for querying the graph */
export type RootQueryTypeUserArgs = {
  id: Scalars['Int'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeUserByUsernameArgs = {
  username: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeUsernameSearchArgs = {
  includeCurrentUser?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};

/** The top level entry point for querying the graph */
export type RootQueryTypeUsersByIdsArgs = {
  ids: Array<Scalars['Int']>;
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionType = {
  __typename: 'RootSubscriptionType';
  /** Updates to annotations in a given repl. Returns the updated annotation */
  annotationUpdatesByRepl?: Maybe<AnnotationAnchor>;
  /** Updates to the current user's write permissions for a given repl. */
  currentUserCanWrite: Scalars['Boolean'];
  /** Returns repl hosting deploy action updates. */
  hostingBuildDeployActionUpdates: HostingBuildDeployActionUpdateEvent;
  latestBountyChatMessage?: Maybe<BountyChatMessage>;
  /** Streams the notification count to current user */
  notificationCount: Scalars['Int'];
  /** Returns live repl status events. */
  replBootStatusUpdates: ReplBootStatusUpdateEvent;
  /** The subscription used to register a connection to a repl. */
  replConnection?: Maybe<Scalars['Boolean']>;
  /** A subscription to events regarding changes to the online status of repls in a team */
  teamReplConnections: TeamConnectionEvent;
  /** A subscriptions test */
  testSubscription?: Maybe<SubscriptionTestObject>;
  threadPreview?: Maybe<ThreadPreview>;
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeAnnotationUpdatesByReplArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeCurrentUserCanWriteArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeHostingBuildDeployActionUpdatesArgs = {
  input: HostingBuildDeployActionUpdatesInput;
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeLatestBountyChatMessageArgs = {
  input: LatestBountyChatMessageInput;
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeReplBootStatusUpdatesArgs = {
  input?: InputMaybe<ReplBootStatusUpdatesInput>;
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeReplConnectionArgs = {
  replId: Scalars['String'];
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeTeamReplConnectionsArgs = {
  teamId: Scalars['Int'];
};

/** The top level entry point for subscribing to graph events */
export type RootSubscriptionTypeThreadPreviewArgs = {
  threadId: Scalars['String'];
};

export enum Sku {
  Boosted_1 = 'boosted_1',
  Boosted_2 = 'boosted_2',
  Boosted_3 = 'boosted_3',
  Boosted_4 = 'boosted_4',
  Standard = 'standard',
}

export type SaveIoTestResultOutput = NotFoundError | UserError;

export type SearchCategorySettings = {
  docs?: InputMaybe<SearchQueryDocsSearchSettings>;
  files?: InputMaybe<SearchQueryFilesSearchSettings>;
  posts?: InputMaybe<SearchQueryPostsSearchSettings>;
  repls?: InputMaybe<SearchQueryReplsSearchSettings>;
  tags?: InputMaybe<SearchQueryTagsSearchSettings>;
  templates?: InputMaybe<SearchQueryTemplatesSearchSettings>;
  users?: InputMaybe<SearchQueryUsersSearchSettings>;
};

export enum SearchQueryCategory {
  Docs = 'Docs',
  Files = 'Files',
  Posts = 'Posts',
  Repls = 'Repls',
  Tags = 'Tags',
  Templates = 'Templates',
  Users = 'Users',
}

export type SearchQueryDateFilter = {
  gte: Scalars['DateTime'];
};

export type SearchQueryDocsSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  section?: InputMaybe<Scalars['String']>;
};

export enum SearchQueryFileSort {
  RecentlyModified = 'RecentlyModified',
  Relevant = 'Relevant',
}

export type SearchQueryFilesSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']>;
  fileExtension?: InputMaybe<Scalars['String']>;
  myCode?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  sort?: InputMaybe<SearchQueryFileSort>;
};

/** Information about how many hits there were for a search */
export type SearchQueryHitInfo = {
  __typename: 'SearchQueryHitInfo';
  totalHits: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SearchQueryOptions = {
  categories: Array<SearchQueryCategory>;
  categorySettings?: InputMaybe<SearchCategorySettings>;
  onlyCalculateHits?: InputMaybe<Scalars['Boolean']>;
  query: Scalars['String'];
};

export type SearchQueryOutput =
  | SearchQueryResults
  | UnauthorizedError
  | UserError;

/** Filter to set the page number (via after) and how many results should be fetched (via first) */
export type SearchQueryPageFilter = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export enum SearchQueryPostSort {
  MostComments = 'MostComments',
  MostVotes = 'MostVotes',
  RecentlyCreated = 'RecentlyCreated',
  Relevant = 'Relevant',
  Trending = 'Trending',
}

export type SearchQueryPostsSearchSettings = {
  dateCreated?: InputMaybe<SearchQueryDateFilter>;
  exactMatch?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  sort?: InputMaybe<SearchQueryPostSort>;
};

export enum SearchQueryReplSort {
  MostForks = 'MostForks',
  MostLikes = 'MostLikes',
  MostRuns = 'MostRuns',
  RecentlyCreated = 'RecentlyCreated',
  RecentlyModified = 'RecentlyModified',
  Relevant = 'Relevant',
  Trending = 'Trending',
}

export type SearchQueryReplsSearchSettings = {
  dateCreated?: InputMaybe<SearchQueryDateFilter>;
  dateModified?: InputMaybe<SearchQueryDateFilter>;
  exactMatch?: InputMaybe<Scalars['Boolean']>;
  ownerId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  sort?: InputMaybe<SearchQueryReplSort>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type SearchQueryResults = {
  __typename: 'SearchQueryResults';
  docResults: SearchQueryResultsDocs;
  fileResults: SearchQueryResultsFiles;
  postResults: SearchQueryResultsPosts;
  replResults: SearchQueryResultsRepls;
  tagResults: SearchQueryResultsTags;
  templateResults: SearchQueryResultsTemplates;
  userResults: SearchQueryResultsUsers;
};

export type SearchQueryResultsDocs = {
  __typename: 'SearchQueryResultsDocs';
  hitInfo: SearchQueryHitInfo;
  results: SearchResultIndexedDocConnection;
};

export type SearchQueryResultsFiles = {
  __typename: 'SearchQueryResultsFiles';
  hitInfo: SearchQueryHitInfo;
  results: SearchResultIndexedFileConnection;
};

export type SearchQueryResultsPosts = {
  __typename: 'SearchQueryResultsPosts';
  hitInfo: SearchQueryHitInfo;
  results: PostConnection;
};

export type SearchQueryResultsRepls = {
  __typename: 'SearchQueryResultsRepls';
  hitInfo: SearchQueryHitInfo;
  results: ReplConnection;
};

export type SearchQueryResultsTags = {
  __typename: 'SearchQueryResultsTags';
  hitInfo: SearchQueryHitInfo;
  results: SearchResultTagConnection;
};

export type SearchQueryResultsTemplates = {
  __typename: 'SearchQueryResultsTemplates';
  hitInfo: SearchQueryHitInfo;
  results: ReplConnection;
};

export type SearchQueryResultsUsers = {
  __typename: 'SearchQueryResultsUsers';
  hitInfo: SearchQueryHitInfo;
  results: UserConnection;
};

export type SearchQueryTagsSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<SearchQueryPageFilter>;
};

export enum SearchQueryTemplateStatus {
  All = 'All',
  Community = 'Community',
  Official = 'Official',
}

export type SearchQueryTemplatesSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']>;
  ownerId?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  status?: InputMaybe<SearchQueryTemplateStatus>;
};

export type SearchQueryUsersSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<SearchQueryPageFilter>;
};

/** An indexed doc returned from doc search */
export type SearchResultIndexedDoc = {
  __typename: 'SearchResultIndexedDoc';
  contentMatches: Array<SearchResultIndexedFileMatches>;
  contents: Scalars['String'];
  path: Scalars['String'];
  section: Scalars['String'];
};

/** A connection to a list of SearchResultIndexedDocs. */
export type SearchResultIndexedDocConnection = {
  __typename: 'SearchResultIndexedDocConnection';
  /** A list of SearchResultIndexedDocs. */
  items: Array<SearchResultIndexedDoc>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An indexed file returned from file search */
export type SearchResultIndexedFile = {
  __typename: 'SearchResultIndexedFile';
  fileContentMatches: Array<SearchResultIndexedFileMatches>;
  fileContents: Scalars['String'];
  filePath: Scalars['String'];
  repl: Repl;
};

/** A connection to a list of SearchResultIndexedFiles. */
export type SearchResultIndexedFileConnection = {
  __typename: 'SearchResultIndexedFileConnection';
  /** A list of SearchResultIndexedFiles. */
  items: Array<SearchResultIndexedFile>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** The location of a match in a SearchResultIndexedFile's fileContents */
export type SearchResultIndexedFileMatches = {
  __typename: 'SearchResultIndexedFileMatches';
  length: Scalars['Int'];
  start: Scalars['Int'];
};

/** An indexed tag returned from tag search */
export type SearchResultTag = {
  __typename: 'SearchResultTag';
  numReplsTotal: Scalars['Int'];
  tag: Tag;
  timeLastUsed: Scalars['DateTime'];
};

/** A connection to a list of SearchResultTags. */
export type SearchResultTagConnection = {
  __typename: 'SearchResultTagConnection';
  /** A list of SearchResultTags. */
  items: Array<SearchResultTag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SelectReplContinent =
  | CurrentUser
  | NotFoundError
  | ServiceUnavailable
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

/** Input for the selectReplContinent mutation. */
export type SelectReplContinentInput = {
  continent: ReplContinentId;
};

export enum SelectableSubscriptionPeriodTypesEnum {
  Monthly = 'monthly',
  Yearly = 'yearly',
}

export enum SelectableSubscriptionPrefixTypesEnum {
  Hacker = 'hacker',
  HackerPro = 'hacker_pro',
}

export type SendBountyChatInput = {
  bountyApplicationId: Scalars['Int'];
  message: Scalars['String'];
};

export type SendBountyChatOutput =
  | BountyChatMessage
  | NotFoundError
  | ServiceUnavailable
  | TooManyRequestsError
  | UnauthorizedError
  | UserError;

export type SendDeploymentLifecycleCommandInput = {
  buildId?: InputMaybe<Scalars['String']>;
  /** The desired lifecycle command to be sent. */
  command: SendDeploymentLifecycleCommandType;
  replId: Scalars['String'];
};

export type SendDeploymentLifecycleCommandOutput =
  | NotFoundError
  | SendDeploymentLifecycleCommandResult
  | UnauthorizedError
  | UserError;

export type SendDeploymentLifecycleCommandResult = {
  __typename: 'SendDeploymentLifecycleCommandResult';
  currentUser: CurrentUser;
  repl: Repl;
};

export enum SendDeploymentLifecycleCommandType {
  Destroy = 'destroy',
  Resume = 'resume',
  Suspend = 'suspend',
}

export type SendPushToStaff = SendPushToStaffResult | UnauthorizedError;

export type SendPushToStaffInput = {
  messageBody: Scalars['String'];
  messageTitle: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

/** If the notification was sent successfully */
export type SendPushToStaffResult = {
  __typename: 'SendPushToStaffResult';
  success: Scalars['Boolean'];
};

export type SendTipInput = {
  amount: Scalars['Int'];
  replId?: InputMaybe<Scalars['String']>;
  themeId?: InputMaybe<Scalars['Int']>;
};

export type SendTipOutput =
  | NotFoundError
  | SendTipResult
  | UnauthorizedError
  | UserError;

export type SendTipResult = {
  __typename: 'SendTipResult';
  currentUser: CurrentUser;
  repl?: Maybe<Repl>;
  theme?: Maybe<CustomTheme>;
};

/** An error caused by a service being unavailable */
export type ServiceUnavailable = {
  __typename: 'ServiceUnavailable';
  message: Scalars['String'];
};

/** Input for the setActiveTheme mutation. Passing in a null themeId indicates that the custom theme the user has active is cleared in favor of an official theme. Passing in a non-null officialThemeKey sets the official theme to the Replit theme with that key (ignored if themeId is non-null) */
export type SetActiveThemeInput = {
  officialThemeKey?: InputMaybe<OfficialReplitThemeKey>;
  themeId?: InputMaybe<Scalars['Int']>;
};

export type SetActiveThemeOutput = CustomTheme | NotFoundError | UserError;

export type SetAlwaysOnOutput = Repl | UserError;

export type SetBetaTemplateInput = {
  betaReplUrlOrId?: InputMaybe<Scalars['String']>;
  replUrlOrId?: InputMaybe<Scalars['String']>;
};

export type SetBetaTemplateOutput = Repl | UnauthorizedError | UserError;

export type SetBlocking2 =
  | NotFoundError
  | SetBlocking2Result
  | UnauthorizedError;

export type SetBlocking2Input = {
  shouldBlock: Scalars['Boolean'];
  targetUserId: Scalars['Int'];
};

export type SetBlocking2Result = {
  __typename: 'SetBlocking2Result';
  currentUser: CurrentUser;
  isBlocked: Scalars['Boolean'];
  targetUser: User;
};

export type SetBountyUnlistedOutput = Bounty | UnauthorizedError | UserError;

export type SetGpuOutput = Repl | UnauthorizedError | UserError;

export type SetHostingTierInput = {
  replId: Scalars['String'];
  /** The desired SKU of the hosting tier or whether to suspend it. */
  sku: HostingTierPowerUpSku;
};

export type SetHostingTierOutput =
  | PaymentError
  | SetHostingTierResult
  | UnauthorizedError
  | UserError;

export type SetHostingTierResult = {
  __typename: 'SetHostingTierResult';
  currentUser: CurrentUser;
  repl: Repl;
};

export type SetLanguageTemplateInput = {
  betaReplId?: InputMaybe<Scalars['String']>;
  language: Scalars['String'];
  replId?: InputMaybe<Scalars['String']>;
};

export type SetLanguageTemplateOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type SetOnboardingExperienceOutput =
  | CurrentUser
  | UnauthorizedError
  | UserError;

export type SetOnboardingIntentOutput =
  | CurrentUser
  | UnauthorizedError
  | UserError;

export type SetReplCommentSettingsInput = {
  enabled: Scalars['Boolean'];
  replId: Scalars['String'];
};

export type SetReplExamplesInput = {
  exampleReplIds: Array<Scalars['String']>;
  replId: Scalars['String'];
};

export type SetReplExamplesOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type SetReplLayoutStateInput = {
  replId: Scalars['String'];
  state: Scalars['JSON'];
};

export type SetReplLayoutStateOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type SetReplTagsInput = {
  replId: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type SetReplTagsOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type SetReplViewSettingsInput = {
  defaultView?: InputMaybe<ReplViewSettingsDefaultView>;
  /** The file used, if the defaultView is repl_file */
  replFile?: InputMaybe<Scalars['String']>;
  replId: Scalars['String'];
  /** The image used, if the defaultView is repl_image */
  replImage?: InputMaybe<Scalars['String']>;
};

export type SetReplViewSettingsOutput =
  | NotFoundError
  | ReplViewSettings
  | UnauthorizedError
  | UserError;

export type SetStorageCapacityInput = {
  /** The ID of the Repl to update */
  replId: Scalars['ID'];
  /** The desired storage capacity for the targeted Repl */
  storageCapacity: ReplStorageCapacity;
};

export type SetStorageCapacityOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type SetTemplateCategoryOutput = NotFoundError | Repl;

export type SetTemplateCategoryReplInput = {
  /** The associated repl id. */
  replId: Scalars['String'];
  /** The target template category id. */
  templateCategoryId: Scalars['Int'];
};

export type SetTemplateCategoryReplOutput =
  | NotFoundError
  | TemplateCategoryReplResult
  | UnauthorizedError
  | UserError;

export type SetTemplateReplCategoryInput = {
  category: Scalars['String'];
  replId: Scalars['String'];
};

export type SetUserCoverImageInput = {
  /** Image ID to set as the cover image */
  imageId?: InputMaybe<Scalars['Int']>;
  /** Y position offset for adjusting image viewport area */
  offsetY?: InputMaybe<Scalars['Int']>;
  /** Remove the cover image */
  remove?: InputMaybe<Scalars['Boolean']>;
};

export type SetUserCoverImageOutput =
  | CurrentUser
  | UnauthorizedError
  | UserError;

export type SetUserKeybindingsInput = {
  environment: KeybindingsEnvironmentEnum;
  keybindings: Scalars['JSON'];
  platform: KeybindingsPlatformEnum;
};

export type SetUserKeybindingsOutput =
  | Keybindings
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type SetUserSocialInput = {
  type: UserSocialEnum;
  url?: InputMaybe<Scalars['String']>;
};

export type SetUserSocialsInput = {
  socials: Array<SetUserSocialInput>;
};

export type SetUserSocialsOutput = CurrentUser | UnauthorizedError | UserError;

export type SetUserStorageQuotaOutput =
  | ServiceUnavailable
  | SetUserStorageQuotaSuccess
  | UnauthorizedError;

export type SetUserStorageQuotaSuccess = {
  __typename: 'SetUserStorageQuotaSuccess';
  /** The new quota in bytes. */
  quota: Scalars['String'];
};

/** List of ordered repls */
export type Stack = {
  __typename: 'Stack';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** ReplTemplates that belong to the stack */
  replTemplates: Array<ReplTemplate>;
  /** Repls that belong to the stack */
  repls: Array<Repl>;
  /** Number of repls in the stack */
  replsCount: Scalars['Int'];
  title: Scalars['String'];
};

export type StaffBountiesQuery = {
  __typename: 'StaffBountiesQuery';
  /** Review a list of Bounty Applications that need to be moderated */
  applicationReviewQueue?: Maybe<CluiOutput>;
  /** Export the HTML body of the bounties email reminder to send to Hunters */
  emailReminderExport?: Maybe<CluiOutput>;
};

export type StaffCluiQuery = {
  __typename: 'StaffCluiQuery';
  /** Manage bounties and bounty-related data */
  bounties?: Maybe<StaffBountiesQuery>;
};

/** A thread message indicating a status change. */
export type StatusMessageContentType = {
  __typename: 'StatusMessageContentType';
  status: Scalars['String'];
};

export type StorageCapacity = {
  __typename: 'StorageCapacity';
  /** The value of the storage capacity of the Repl */
  value: ReplStorageCapacity;
};

export type StorageCapacityOutputType = StorageCapacity | UnauthorizedError;

/** Information related to a user's storage utilization. */
export type StorageInfo = {
  __typename: 'StorageInfo';
  /** A user's storage utilization summary. */
  accountStorageUtilization: AccountStorageUtilizationOutput;
  /** A user's storage quota. */
  storageQuota: StorageQuotaOutput;
  /**
   * A user's storage quota status.
   * @deprecated If errors are thrown in this resolver the upstream UI may not be able to handle them. Use storageQuotaStatus2 instead.
   */
  storageQuotaStatus: StorageQuotaEnum;
  /** A user's storage quota status. */
  storageQuotaStatus2: StorageQuotaStatusOutput;
};

/** A user's storage quota. */
export type StorageQuota = {
  __typename: 'StorageQuota';
  /** Total bytes in the user's quota. Represented as a string to get around GraphQL's max int size. Returns "0" if not set. */
  quota: Scalars['String'];
};

export enum StorageQuotaEnum {
  ApproachingQuota = 'ApproachingQuota',
  ExceedingQuota = 'ExceedingQuota',
  UnderQuota = 'UnderQuota',
}

export type StorageQuotaOutput = ServiceUnavailable | StorageQuota;

/** A user's storage quota status */
export type StorageQuotaStatus = {
  __typename: 'StorageQuotaStatus';
  /** Whether a user is under, approaching, or exceeding their storage quota */
  status: StorageQuotaEnum;
};

export type StorageQuotaStatusOutput = ServiceUnavailable | StorageQuotaStatus;

export type StripePlanDetails = {
  __typename: 'StripePlanDetails';
  costInUsdCents: Scalars['Int'];
};

export type StripeProviderPlanDetails = {
  __typename: 'StripeProviderPlanDetails';
  monthlyPlanDetails: StripePlanDetails;
  yearlyPlanDetails: StripePlanDetails;
};

export type StudentSubmissions = {
  __typename: 'StudentSubmissions';
  templateSubmissions: Array<TemplateSubmission>;
  userId: Scalars['Int'];
};

/** Given sets of student and template IDs, return a list of student submisssions */
export type StudentsSubmissionsInput = {
  /** Student User IDs for which we want submissions */
  studentIds: Array<Scalars['Int']>;
  teamId: Scalars['Int'];
  /** Template IDs for which we want submissions */
  templateIds: Array<Scalars['Int']>;
};

export type StudentsSubmissionsOutput =
  | StudentsSubmissionsResults
  | UnauthorizedError
  | UserError;

export type StudentsSubmissionsResults = {
  __typename: 'StudentsSubmissionsResults';
  /** A list of student submissions, preserving the order from input.studentIds */
  results: Array<StudentSubmissions>;
};

export type SubmissionGroupInput = {
  submissionId?: InputMaybe<Scalars['Int']>;
  userIds: Array<InputMaybe<Scalars['Int']>>;
};

export type SubmitReplOutput = Repl | UserError;

export type Subscription = {
  __typename: 'Subscription';
  id: Scalars['Int'];
  isGift: Scalars['Boolean'];
  isTrial: Scalars['Boolean'];
  product: Product;
  quantity: Scalars['Int'];
  status?: Maybe<Scalars['String']>;
  timeActivated: Scalars['Date'];
  timeCreated: Scalars['Date'];
  timeDeleted?: Maybe<Scalars['Date']>;
  timeExpired: Scalars['Date'];
  timeUpdated: Scalars['Date'];
};

/** Capabilities for subscriptions and users on subscriptions */
export type SubscriptionCapabilities = {
  __typename: 'SubscriptionCapabilities';
  associatedUserIds: Array<Maybe<Scalars['Int']>>;
  availableSeats: Scalars['Int'];
  canAddEducationTeam: Scalars['Boolean'];
  canBoost: Scalars['Boolean'];
  /** Whether or not the current user can create an edu trial */
  canCreateEduTrial: Scalars['Boolean'];
  canCreateNewTeam: Scalars['Boolean'];
  canCreatePrivateRepl: Scalars['Boolean'];
  canViewOwnPrivateRepl: Scalars['Boolean'];
  hasValidSubscription: Scalars['Boolean'];
  isBusinessPlan: Scalars['Boolean'];
  isEducationPlan: Scalars['Boolean'];
  isExpiring: Scalars['Boolean'];
  isFlatPlan: Scalars['Boolean'];
  isPerSeatPlan: Scalars['Boolean'];
  isTrial: Scalars['Boolean'];
  memberCount: Scalars['Int'];
};

/** Capabilities for subscriptions and users on subscriptions */
export type SubscriptionCapabilitiesIsExpiringArgs = {
  daysFromNow: Scalars['Int'];
};

/** A user can no longer access their Repl because it is private and they are no longer subscribed  */
export type SubscriptionExpiredError = {
  __typename: 'SubscriptionExpiredError';
  isOwner: Scalars['Boolean'];
  replId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type SubscriptionPlan = {
  __typename: 'SubscriptionPlan';
  apple: ProviderPlanDetails;
  displayName: Scalars['String'];
  google: ProviderPlanDetails;
  items: Array<SubscriptionPlanItem>;
  stripe: StripeProviderPlanDetails;
};

export type SubscriptionPlanItem = {
  __typename: 'SubscriptionPlanItem';
  code: SubscriptionPlanItemEnumType;
  description: Scalars['String'];
  details?: Maybe<Scalars['String']>;
  learnMoreLink?: Maybe<Scalars['String']>;
  pillText?: Maybe<Scalars['String']>;
  showOnMobile: Scalars['Boolean'];
};

export enum SubscriptionPlanItemEnumType {
  AccountStorage = 'accountStorage',
  AlwaysOnRepl = 'alwaysOnRepl',
  BoostedRepl = 'boostedRepl',
  DataTransfer = 'dataTransfer',
  Ghostwriter = 'ghostwriter',
  PrivateRepls = 'privateRepls',
  SshCapability = 'sshCapability',
  WorkspaceSpeed = 'workspaceSpeed',
}

export type SubscriptionPlansOutput = {
  __typename: 'SubscriptionPlansOutput';
  free: FreePlan;
  hacker: SubscriptionPlan;
  pro: SubscriptionPlan;
};

export type SubscriptionTestObject = {
  __typename: 'SubscriptionTestObject';
  timestamp?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** An object with upload and download URLs for support assets */
export type SupportAssetUrls = {
  __typename: 'SupportAssetUrls';
  contentType: Scalars['String'];
  downloadUrl: Scalars['String'];
  uploadUrl: Scalars['String'];
};

/** A tag */
export type Tag = {
  __typename: 'Tag';
  id: Scalars['String'];
  isOfficial: Scalars['Boolean'];
};

export type TagGroups = {
  __typename: 'TagGroups';
  community: Array<Tag>;
  official: Array<Tag>;
};

export type TagGroupsCommunityArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type TagGroupsOfficialArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

/** Teacher verification information */
export type TeacherVerification = {
  __typename: 'TeacherVerification';
  /** email of the user that submitted the verification request */
  email: Scalars['String'];
  formResponses: Scalars['SequelizeJSON'];
  userId: Scalars['Int'];
  /** username of the user that submitted the verification request */
  username: Scalars['String'];
};

/** A team inside Replit */
export type Team = {
  __typename: 'Team';
  /** Whether this Team has been archived */
  archived?: Maybe<Scalars['Boolean']>;
  /** Subscription capabilities for the organization this team belongs to */
  capabilities?: Maybe<SubscriptionCapabilities>;
  /** Collections of templates */
  collections: Array<TeamCollection>;
  /** Curricula that has been impored into this team */
  curriculumImports: Array<Curriculum>;
  /** Returns a stack of repls that do not belong to any stack */
  defaultReplStack: Stack;
  /** Returns a stack of template repls that do not belong to any stack */
  defaultTemplateStack: Stack;
  /** Description of the team */
  description: Scalars['String'];
  /** Display name for the team */
  displayName: Scalars['String'];
  followerCount: Scalars['Int'];
  /** Gates applying to the team as opposed to the user */
  gate: Scalars['Boolean'];
  /** Google Classroom connected to this Team */
  googleClassroom?: Maybe<GoogleClassroom>;
  /** List of guests of the team */
  guests: Array<TeamGuest>;
  /** Whether the current user has permission to manage the team's billing or not */
  hasBillingPerms: Scalars['Boolean'];
  /** Determines if this team has invite link with edu_signup property */
  hasEduSignupInvites: Scalars['Boolean'];
  /** Determines if this team has privacy invites */
  hasPrivacyInvites: Scalars['Boolean'];
  /** Determines if this team is eligible for team templates */
  hasTemplates: Scalars['Boolean'];
  id: Scalars['Int'];
  /** Profile image for the team */
  image: Scalars['String'];
  inviteLink?: Maybe<TeamInviteLink>;
  /** Whether the current user is an admin in the team or not */
  isAdmin: Scalars['Boolean'];
  isFollowedByCurrentUser: Scalars['Boolean'];
  /** Whether the user is a member of the team or not */
  isMember: Scalars['Boolean'];
  /** Whether the current user is the team owner or not. */
  isOwner: Scalars['Boolean'];
  /** List of members of the team */
  memberCount: Scalars['Int'];
  /** List of members of the team, only visible to users in the team */
  members: Array<TeamMembership>;
  /** Returns true if this team has not been migrated to use stacks for its templates */
  needsMigrationToStacks: Scalars['Boolean'];
  /** A list of pending invites */
  openInvites: Array<Maybe<TeamInvite>>;
  /** Organization that owns this team (only for paid teams) */
  organization?: Maybe<TeamOrganization>;
  recentRepls: Array<Repl>;
  /** Stacks belonging to the team */
  stacks: Array<Stack>;
  /** Checks subscription type */
  subscriptionIsType: Scalars['Boolean'];
  /** The template share links for the team */
  templateShareLinks: Array<TeamTemplateShareLink>;
  /** Records of templates being shared */
  templateShares: Array<TeamTemplateShare>;
  /** Visible team templates based on the requesting user's role */
  templates: Array<ReplTemplate>;
  url: Scalars['String'];
  userPermissions?: Maybe<TeamUserPermissions>;
  username: Scalars['String'];
};

/** A team inside Replit */
export type TeamCollectionsArgs = {
  batchSize?: InputMaybe<Scalars['Int']>;
};

/** A team inside Replit */
export type TeamGateArgs = {
  feature: Scalars['String'];
  subscriptionType?: InputMaybe<TeamSubscriptionTypeEnum>;
};

/** A team inside Replit */
export type TeamMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  permissions?: InputMaybe<Scalars['String']>;
};

/** A team inside Replit */
export type TeamRecentReplsArgs = {
  count: Scalars['Int'];
};

/** A team inside Replit */
export type TeamSubscriptionIsTypeArgs = {
  subscriptionType?: InputMaybe<TeamSubscriptionTypeEnum>;
};

/** A team inside Replit */
export type TeamTemplatesArgs = {
  published?: InputMaybe<Scalars['Boolean']>;
};

/** Collection of team templates */
export type TeamCollection = {
  __typename: 'TeamCollection';
  /** Does the collection contain any group projects */
  hasGroupProject: Scalars['Boolean'];
  /** Templates loaded from the collection */
  templates: Array<Maybe<ReplTemplate>>;
  /** Title of the collection. Can be null if unnamed */
  title?: Maybe<Scalars['String']>;
};

/** Events used for sending information on team connections */
export type TeamConnectionEvent =
  | RemoveReplConnectionsEvent
  | UpdateReplConnectionsEvent;

/** A guest of a team */
export type TeamGuest = {
  __typename: 'TeamGuest';
  id: Scalars['Int'];
  user?: Maybe<User>;
};

/** An invite to a team */
export type TeamInvite = {
  __typename: 'TeamInvite';
  /** Whether the invitation has been accepted or not */
  accepted: Scalars['Boolean'];
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** The icon for the user the invite belongs to */
  image: Scalars['String'];
  /** The team the invite belongs to */
  team: Team;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  /** The username for the user the invite belongs to (or their email) */
  usernameOrEmail?: Maybe<Scalars['String']>;
};

/** An invite link for a team */
export type TeamInviteLink = {
  __typename: 'TeamInviteLink';
  code: Scalars['String'];
  eduSignup: Scalars['Boolean'];
  id: Scalars['Int'];
};

/** Notification for when a user is invited to a team. */
export type TeamInviteNotification = {
  __typename: 'TeamInviteNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  invite?: Maybe<TeamInvite>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** Team organization member roles */
export enum TeamMemberRoleEnumType {
  Admin = 'ADMIN',
  Owner = 'OWNER',
}

/** A member of a team */
export type TeamMembership = {
  __typename: 'TeamMembership';
  /** Team member email; only visible to team admin */
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  nickname?: Maybe<Scalars['String']>;
  /** The member's permissions for the team */
  permissions: TeamPermission;
  user?: Maybe<User>;
};

export type TeamMutation = {
  __typename: 'TeamMutation';
  /** Forks an existing Repl to create a team project */
  forkReplToProject?: Maybe<CluiOutput>;
  /** restore one of your deleted projects in a team */
  restoreProject?: Maybe<CluiOutput>;
  /** restore one of your deleted repls in a team (WARNING: use restoreEduProject command for Teams for Education projects, not this command!) */
  restoreRepl?: Maybe<CluiOutput>;
  /** transfer one of your Repls to a team */
  transferRepl?: Maybe<CluiOutput>;
  /** Update an existing team invite link */
  updateInvite?: Maybe<CluiOutput>;
};

export type TeamMutationForkReplToProjectArgs = {
  isGroupProject?: InputMaybe<Scalars['Boolean']>;
  replUrl: Scalars['String'];
  team: Scalars['String'];
};

export type TeamMutationRestoreProjectArgs = {
  project: Scalars['String'];
  submissions?: InputMaybe<Scalars['Boolean']>;
  team: Scalars['String'];
};

export type TeamMutationRestoreReplArgs = {
  team: Scalars['String'];
  title: Scalars['String'];
};

export type TeamMutationTransferReplArgs = {
  repl: Scalars['String'];
  team: Scalars['String'];
};

export type TeamMutationUpdateInviteArgs = {
  inviteLink: Scalars['String'];
  isPrivacyLink?: InputMaybe<Scalars['Boolean']>;
};

/** Owns and manages teams */
export type TeamOrganization = {
  __typename: 'TeamOrganization';
  archivedTeams: Array<Team>;
  /** Count of archived teams belonging to this org */
  archivedTeamsCount?: Maybe<Scalars['Int']>;
  canBeDeleted: Scalars['Boolean'];
  /** Subscription capabilities for the organization */
  capabilities?: Maybe<SubscriptionCapabilities>;
  customer?: Maybe<Customer>;
  id: Scalars['Int'];
  inviteLink?: Maybe<TeamOrganizationInviteLink>;
  /** Determines if the user is an admin on the organization */
  isAdmin: Scalars['Boolean'];
  /** Determines if the user owns the organizaiton */
  isOwner?: Maybe<Scalars['Boolean']>;
  isVerified: Scalars['Boolean'];
  /** List of members of the org */
  members: Array<TeamOrganizationMembership>;
  name: Scalars['String'];
  pendingInvites: Array<TeamOrganizationInvite>;
  quantity?: Maybe<Scalars['Int']>;
  /** Whether the pending verification badge is visible or not */
  showVerificationBadge: Scalars['Boolean'];
  subscription?: Maybe<TeamOrganizationSubscription>;
  teams: Array<Team>;
  /** Count of active teams belonging to this org */
  teamsCount?: Maybe<Scalars['Int']>;
  unsubscribedTeams: Array<Team>;
  unsubscribedTeamsCount?: Maybe<Scalars['Int']>;
  userPermissions?: Maybe<TeamOrganizationUserPermissions>;
};

/** An invite to a team organization */
export type TeamOrganizationInvite = {
  __typename: 'TeamOrganizationInvite';
  /** Whether the invitation has been accepted or not */
  accepted: Scalars['Boolean'];
  id: Scalars['Int'];
  /** The organization the invite belongs to */
  organization: TeamOrganization;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  /** The invited user */
  user?: Maybe<User>;
  /** The username for the user the invite belongs to (or their email) */
  usernameOrEmail?: Maybe<Scalars['String']>;
};

/** An invite link for a team organization */
export type TeamOrganizationInviteLink = {
  __typename: 'TeamOrganizationInviteLink';
  code: Scalars['String'];
  id: Scalars['Int'];
};

/** Notification for when a user is invited to an organization. */
export type TeamOrganizationInviteNotification = {
  __typename: 'TeamOrganizationInviteNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  invite?: Maybe<TeamOrganizationInvite>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** A member of an org */
export type TeamOrganizationMembership = {
  __typename: 'TeamOrganizationMembership';
  id: Scalars['Int'];
  role?: Maybe<Team_Organization_MembersroleEnumType>;
  user?: Maybe<User>;
};

export type TeamOrganizationOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError
  | UserError;

/** Team organization subscription information */
export type TeamOrganizationSubscription = {
  __typename: 'TeamOrganizationSubscription';
  canAddEducationTeam: Scalars['Boolean'];
  canCreateNewTeam: Scalars['Boolean'];
  id: Scalars['Int'];
  isBusinessPlan: Scalars['Boolean'];
  isEducationPlan: Scalars['Boolean'];
  isExpiring: Scalars['Boolean'];
  isFlatPlan: Scalars['Boolean'];
  isPerSeatPlan: Scalars['Boolean'];
  isTrial: Scalars['Boolean'];
  months?: Maybe<Scalars['Int']>;
  origin: Scalars['String'];
  planId: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  quickbooksInvoiceId?: Maybe<Scalars['String']>;
  stripeStatus?: Maybe<Team_Organization_SubscriptionsstripeStatusEnumType>;
  teamOrganization?: Maybe<TeamOrganization>;
  timeCreated: Scalars['Date'];
  timeDeleted?: Maybe<Scalars['Date']>;
  timeExpired?: Maybe<Scalars['Date']>;
  timeUpdated?: Maybe<Scalars['Date']>;
};

/** Team organization subscription information */
export type TeamOrganizationSubscriptionIsExpiringArgs = {
  daysFromNow: Scalars['Int'];
};

export enum TeamOrganizationSubscriptionTypeEnum {
  Education = 'EDUCATION',
  Pro = 'PRO',
}

/** Organization permissions that the current user has */
export type TeamOrganizationUserPermissions = {
  __typename: 'TeamOrganizationUserPermissions';
  canAddOrgAdmins: Scalars['Boolean'];
  canAddOrgOwners: Scalars['Boolean'];
  canCancelPlan: Scalars['Boolean'];
  canCreateTeamsInOrg: Scalars['Boolean'];
  canDeleteOrg: Scalars['Boolean'];
  canEditBilling: Scalars['Boolean'];
  canLeaveOrg: Scalars['Boolean'];
  canRemoveOrgAdmins: Scalars['Boolean'];
  canRemoveOrgOwners: Scalars['Boolean'];
  canViewContentsOfAllTeams: Scalars['Boolean'];
  canViewOrgSettings: Scalars['Boolean'];
  canViewTitlesOfAllTeams: Scalars['Boolean'];
};

export type TeamOutput = Team | UserError;

/** The permissions a user has for a team */
export enum TeamPermission {
  Admin = 'admin',
  BillingAdmin = 'billing_admin',
  Member = 'member',
  Owner = 'owner',
}

export type TeamQuery = {
  __typename: 'TeamQuery';
  /** View the members of your team */
  view?: Maybe<CluiOutput>;
};

export type TeamQueryViewArgs = {
  team: Scalars['String'];
};

export enum TeamSubscriptionTypeEnum {
  Education = 'EDUCATION',
  Pro = 'PRO',
}

/** Notification for when a user's Repl submission has been marked as reviewed, or marked as no longer reviewed */
export type TeamTemplateReviewedStatusNotification = {
  __typename: 'TeamTemplateReviewedStatusNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  repl?: Maybe<Repl>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** An instance where a body of templates were copied from one team to another. */
export type TeamTemplateShare = {
  __typename: 'TeamTemplateShare';
  /** The team which the templates that were copied were copied from */
  from: Team;
  id: Scalars['Int'];
  /** The templates which were copied */
  templates: Array<ReplTemplate>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  /** The team which the templates copied were copied to */
  to: Team;
};

/** A link which can be used to copy templates from one team to another. */
export type TeamTemplateShareLink = {
  __typename: 'TeamTemplateShareLink';
  code: Scalars['String'];
  /** The default stack which holds standalone templates to be copied.This value will be null if the team template share link does not contain any standalone templates */
  defaultStack?: Maybe<LinkStack>;
  id: Scalars['Int'];
  /** The stacks which should be copied when the link is used */
  stacks: Array<LinkStack>;
  /** The templates which should be copied when the link is used */
  templates: Array<ReplTemplate>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
};

/** Notification for when a user submits a project repl */
export type TeamTemplateSubmittedNotification = {
  __typename: 'TeamTemplateSubmittedNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  repl?: Maybe<Repl>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

/** Team permissions that the current user has */
export type TeamUserPermissions = {
  __typename: 'TeamUserPermissions';
  canAddGuests: Scalars['Boolean'];
  canAddTeamAdmins: Scalars['Boolean'];
  canAddTeamMembers: Scalars['Boolean'];
  canAddTeamOwners: Scalars['Boolean'];
  canArchiveTeam: Scalars['Boolean'];
  canCreateTeamRepls: Scalars['Boolean'];
  canDeleteTeam: Scalars['Boolean'];
  canDeleteTeamRepls: Scalars['Boolean'];
  canEditTeamRepls: Scalars['Boolean'];
  canLeaveTeam: Scalars['Boolean'];
  canRemoveGuests: Scalars['Boolean'];
  canRemoveTeamAdmins: Scalars['Boolean'];
  canRemoveTeamMembers: Scalars['Boolean'];
  canRenameTeam: Scalars['Boolean'];
  canSubmitProjects: Scalars['Boolean'];
};

export type TemplateCategoriesInput = {
  /** Only return set list of template categories by their ids in order improve test reliability. */
  ids: Array<Scalars['Int']>;
};

export type TemplateCategoriesOutput = TemplateCategoriesResults | UserError;

export type TemplateCategoriesResults = {
  __typename: 'TemplateCategoriesResults';
  /** A list of template categories. */
  results: Array<TemplateCategory>;
};

/** A template category. */
export type TemplateCategory = {
  __typename: 'TemplateCategory';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  timeCreated: Scalars['Date'];
  title: Scalars['String'];
};

export type TemplateCategoryBySlugInput = {
  /** unique slug associated with a template category */
  slug: Scalars['String'];
};

export type TemplateCategoryBySlugOutput =
  | NotFoundError
  | TemplateCategory
  | UserError;

export type TemplateCategoryReplResult = {
  __typename: 'TemplateCategoryReplResult';
  templateCategoryRepl: TemplateCategoryRepls;
};

/** Assign a template category to a template repl. */
export type TemplateCategoryRepls = {
  __typename: 'TemplateCategoryRepls';
  id: Scalars['Int'];
  replId: Scalars['String'];
  templateCategoryId: Scalars['Int'];
  timeCreated: Scalars['Date'];
};

export type TemplateReplBySlugInput = {
  /** unique slug for the template landing page */
  slug: Scalars['String'];
};

export type TemplateReplBySlugOutput = NotFoundError | Repl | UserError;

export type TemplateReplObject = Repl | ReplTemplate;

export type TemplateReplSearchConnection = {
  __typename: 'TemplateReplSearchConnection';
  category?: Maybe<Scalars['Int']>;
  items: Array<Repl>;
  orderBy: TemplateRepls2OrderBy;
  pageInfo: PageInfo;
  promotionStatus: TemplateRepls2PromotionStatus;
  searchQuery: Scalars['String'];
  total: Scalars['Int'];
};

export enum TemplateRepls2OrderBy {
  Forks = 'forks',
  Recent = 'recent',
  SearchRelevancy = 'searchRelevancy',
}

export type TemplateRepls2Output = TemplateReplSearchConnection | UserError;

export enum TemplateRepls2PromotionStatus {
  All = 'all',
  NotPromoted = 'notPromoted',
  Promoted = 'promoted',
}

export type TemplateRepls2QueryOptions = {
  after?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TemplateRepls2OrderBy>;
  promotionStatus?: InputMaybe<TemplateRepls2PromotionStatus>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

/** Review status of a Template */
export type TemplateReview = {
  __typename: 'TemplateReview';
  deployment?: Maybe<ReplDeployment>;
  id: Scalars['Int'];
  landingPageSlug?: Maybe<Scalars['String']>;
  promoted: Scalars['Boolean'];
  release?: Maybe<ReplRelease>;
  repl?: Maybe<Repl>;
  reviewedBy?: Maybe<User>;
  timeCreated: Scalars['Date'];
  timeDeleted?: Maybe<Scalars['Date']>;
  timeUpdated?: Maybe<Scalars['Date']>;
};

export type TemplateSubmission = {
  __typename: 'TemplateSubmission';
  submission: ReplSubmission;
  templateId: Scalars['Int'];
};

export type TemplateTestOutput = ReplTemplateTest | UserError;

/** A thread message containing text, usually from a user */
export type TextMessageContentType = {
  __typename: 'TextMessageContentType';
  text: Scalars['String'];
};

/** An object which contains CSS styles that are applied to a given set of editor tags */
export type ThemeEditorSyntaxHighlighting = {
  __typename: 'ThemeEditorSyntaxHighlighting';
  tags: Array<ThemeEditorTag>;
  values: Scalars['JSON'];
};

/** A selector for a given editor tag */
export type ThemeEditorTag = {
  __typename: 'ThemeEditorTag';
  modifiers?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
};

/** The values from a customTheme */
export type ThemeValues = {
  __typename: 'ThemeValues';
  editor: ThemeValuesEditor;
  global: ThemeValuesGlobal;
};

/** The editor Theme values */
export type ThemeValuesEditor = {
  __typename: 'ThemeValuesEditor';
  syntaxHighlighting: Array<ThemeEditorSyntaxHighlighting>;
};

/** The global Theme values */
export type ThemeValuesGlobal = {
  __typename: 'ThemeValuesGlobal';
  accentNegativeDefault: Scalars['String'];
  accentNegativeDimmer: Scalars['String'];
  accentNegativeDimmest: Scalars['String'];
  accentNegativeStronger: Scalars['String'];
  accentNegativeStrongest: Scalars['String'];
  accentPositiveDefault: Scalars['String'];
  accentPositiveDimmer: Scalars['String'];
  accentPositiveDimmest: Scalars['String'];
  accentPositiveStronger: Scalars['String'];
  accentPositiveStrongest: Scalars['String'];
  accentPrimaryDefault: Scalars['String'];
  accentPrimaryDimmer: Scalars['String'];
  accentPrimaryDimmest: Scalars['String'];
  accentPrimaryStronger: Scalars['String'];
  accentPrimaryStrongest: Scalars['String'];
  backgroundDefault: Scalars['String'];
  backgroundHigher: Scalars['String'];
  backgroundHighest: Scalars['String'];
  backgroundOverlay: Scalars['String'];
  backgroundRoot: Scalars['String'];
  black: Scalars['String'];
  blueDefault: Scalars['String'];
  blueDimmer: Scalars['String'];
  blueDimmest: Scalars['String'];
  blueStronger: Scalars['String'];
  blueStrongest: Scalars['String'];
  blurpleDefault: Scalars['String'];
  blurpleDimmer: Scalars['String'];
  blurpleDimmest: Scalars['String'];
  blurpleStronger: Scalars['String'];
  blurpleStrongest: Scalars['String'];
  brownDefault: Scalars['String'];
  brownDimmer: Scalars['String'];
  brownDimmest: Scalars['String'];
  brownStronger: Scalars['String'];
  brownStrongest: Scalars['String'];
  foregroundDefault: Scalars['String'];
  foregroundDimmer: Scalars['String'];
  foregroundDimmest: Scalars['String'];
  greenDefault: Scalars['String'];
  greenDimmer: Scalars['String'];
  greenDimmest: Scalars['String'];
  greenStronger: Scalars['String'];
  greenStrongest: Scalars['String'];
  greyDefault: Scalars['String'];
  greyDimmer: Scalars['String'];
  greyDimmest: Scalars['String'];
  greyStronger: Scalars['String'];
  greyStrongest: Scalars['String'];
  limeDefault: Scalars['String'];
  limeDimmer: Scalars['String'];
  limeDimmest: Scalars['String'];
  limeStronger: Scalars['String'];
  limeStrongest: Scalars['String'];
  magentaDefault: Scalars['String'];
  magentaDimmer: Scalars['String'];
  magentaDimmest: Scalars['String'];
  magentaStronger: Scalars['String'];
  magentaStrongest: Scalars['String'];
  orangeDefault: Scalars['String'];
  orangeDimmer: Scalars['String'];
  orangeDimmest: Scalars['String'];
  orangeStronger: Scalars['String'];
  orangeStrongest: Scalars['String'];
  outlineDefault: Scalars['String'];
  outlineDimmer: Scalars['String'];
  outlineDimmest: Scalars['String'];
  outlineStronger: Scalars['String'];
  outlineStrongest: Scalars['String'];
  pinkDefault: Scalars['String'];
  pinkDimmer: Scalars['String'];
  pinkDimmest: Scalars['String'];
  pinkStronger: Scalars['String'];
  pinkStrongest: Scalars['String'];
  purpleDefault: Scalars['String'];
  purpleDimmer: Scalars['String'];
  purpleDimmest: Scalars['String'];
  purpleStronger: Scalars['String'];
  purpleStrongest: Scalars['String'];
  redDefault: Scalars['String'];
  redDimmer: Scalars['String'];
  redDimmest: Scalars['String'];
  redStronger: Scalars['String'];
  redStrongest: Scalars['String'];
  tealDefault: Scalars['String'];
  tealDimmer: Scalars['String'];
  tealDimmest: Scalars['String'];
  tealStronger: Scalars['String'];
  tealStrongest: Scalars['String'];
  white: Scalars['String'];
  yellowDefault: Scalars['String'];
  yellowDimmer: Scalars['String'];
  yellowDimmest: Scalars['String'];
  yellowStronger: Scalars['String'];
  yellowStrongest: Scalars['String'];
};

/** A version of a custom theme */
export type ThemeVersion = {
  __typename: 'ThemeVersion';
  customTheme: CustomTheme;
  description: Scalars['String'];
  hue?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  lightness: Scalars['Float'];
  saturation: Scalars['Float'];
  timeUpdated: Scalars['DateTime'];
  values: ThemeValues;
};

export type ThemesSearchInput = {
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['Int']>;
  colorScheme?: InputMaybe<CustomThemeColorScheme>;
  colorValue?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

export type ThemesSearchOutput =
  | CustomThemeConnection
  | UnauthorizedError
  | UserError;

/** Notification for when a user receives an update on their thread */
export type ThreadNotification = {
  __typename: 'ThreadNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  participants: Array<User>;
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  thread?: Maybe<AnnotationAnchor>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ThreadPreview = {
  __typename: 'ThreadPreview';
  message?: Maybe<Scalars['String']>;
  messageId: Scalars['String'];
  userId: Scalars['Int'];
};

export type ThreadsByFileOutput =
  | NotFoundError
  | ThreadsByFileResult
  | UnauthorizedError;

export type ThreadsByFileResult = {
  __typename: 'ThreadsByFileResult';
  threads: Array<AnnotationAnchor>;
};

/** Represents a tip transaction between a tipper and a creator */
export type Tip = {
  __typename: 'Tip';
  amount: Scalars['Int'];
  fee: Scalars['Int'];
  id: Scalars['Int'];
  recipient: User;
  repl?: Maybe<Repl>;
  sender: User;
  timeCreated: Scalars['Date'];
};

/** A user is notified after having received a tip */
export type TipReceivedNotification = {
  __typename: 'TipReceivedNotification';
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  tip?: Maybe<Tip>;
  url: Scalars['String'];
};

export type TipaltiIframeUrl =
  | TipaltiIframeUrlResult
  | UnauthorizedError
  | UserError;

export type TipaltiIframeUrlResult = {
  __typename: 'TipaltiIframeUrlResult';
  iframeUrl: Scalars['String'];
};

/** A user who made a tip */
export type TipperUser = {
  __typename: 'TipperUser';
  /** The amount of tips the user has given */
  totalCyclesTipped: Scalars['Int'];
  /** The user who tipped. Can be null if such user was deleted, or got banned. */
  user?: Maybe<User>;
};

export type ToggleHiddenCommentOutput =
  | NotFoundError
  | ReplComment
  | UnauthorizedError
  | UserError;

export type ToggleHiddenPostOutput = NotFoundError | Post | UserError;

export type ToggleReplLikeInput = {
  replId: Scalars['String'];
};

export type ToggleReplLikeOutput = NotFoundError | Repl | UserError;

/** An error caused by a user making too many requests */
export type TooManyRequestsError = {
  __typename: 'TooManyRequestsError';
  message: Scalars['String'];
};

export type TopGlobalTippersOutput = LeaderboardTopTippersResult | UserError;

/** A tour and its seen status */
export type TourSeen = {
  __typename: 'TourSeen';
  id: Scalars['String'];
  seen: Scalars['Boolean'];
};

export type ToursSeenMuationResult = {
  __typename: 'ToursSeenMuationResult';
  name: Scalars['String'];
  success: Scalars['Boolean'];
};

/** If a user has seen a given tour. */
export type ToursSeenQueryResult = {
  __typename: 'ToursSeenQueryResult';
  seen: Scalars['Boolean'];
};

export type TransformCodeInput = {
  /** The code to transform */
  input: Scalars['String'];
  /** The programming language to transform code in */
  language: Scalars['String'];
  /** The user-provided prompt for the code to transform */
  prompt: Scalars['String'];
  /** The ID of the repl in which the code generation is requested. Used for analytics only */
  replId: Scalars['String'];
};

export type TransformCodeOutput =
  | ServiceUnavailable
  | TransformCodeResult
  | UnauthorizedError
  | UserError;

export type TransformCodeResult = {
  __typename: 'TransformCodeResult';
  code: Scalars['String'];
  id: Scalars['String'];
  metadata: Scalars['String'];
};

export type TrashMutation = {
  __typename: 'TrashMutation';
  /** Restore a deleted Repl folder by its name */
  restoreFolder?: Maybe<CluiOutput>;
  /** Restore a deleted Repl by its title */
  restoreRepl?: Maybe<CluiOutput>;
};

export type TrashMutationRestoreFolderArgs = {
  andRepls?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type TrashMutationRestoreReplArgs = {
  title: Scalars['String'];
};

export type TrashQuery = {
  __typename: 'TrashQuery';
  /** View your most recently deleted folders */
  viewFolders?: Maybe<CluiOutput>;
  /** View your most recently deleted repls */
  viewRepls?: Maybe<CluiOutput>;
};

export enum TutorialReplsCategory {
  All = 'all',
  Codealong = 'codealong',
  Highlighted = 'highlighted',
  Remix = 'remix',
}

export type TutorialReplsInput = {
  category: TutorialReplsCategory;
};

export type TutorialReplsOutput = TutorialReplsResults | UnauthorizedError;

export type TutorialReplsResults = {
  __typename: 'TutorialReplsResults';
  results: Array<Repl>;
};

export type UnarchiveTeamInput = {
  teamId: Scalars['Int'];
};

export type UnarchiveTeamOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | UserError;

/** An error caused by a user attempting to access a resource without authorization */
export type UnauthorizedError = {
  __typename: 'UnauthorizedError';
  message: Scalars['String'];
};

export type UnbanCommunityUserInput = {
  username: Scalars['String'];
};

export type UnbanCommunityUserOutput = User | UserError;

export type UnfreezeNeonDatabaseInput = {
  neonProjectId: Scalars['String'];
  replId: Scalars['String'];
};

export type UnfreezeNeonDatabaseOutput =
  | UnauthorizedError
  | UnfreezeNeonDatabaseResult
  | UserError;

export type UnfreezeNeonDatabaseResult = {
  __typename: 'UnfreezeNeonDatabaseResult';
  success: Scalars['Boolean'];
};

export type UninstallExtensionOutput =
  | ExtensionInstallation
  | NotFoundError
  | UserError;

export type UninstallThemeInput = {
  themeId: Scalars['Int'];
};

export type UninstallThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type UnpinReplFromProfileOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type UnpublishReplFromCommunityInput = {
  replId: Scalars['String'];
};

export type UnpublishReplFromCommunityOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError;

export type UnpublishThemeAsModeratorInput = {
  reason: Scalars['String'];
  themeId: Scalars['Int'];
};

export type UnpublishThemeAsModeratorOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type UnpublishThemeInput = {
  themeId: Scalars['Int'];
};

export type UnpublishThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type UnregisterPushDeviceSessionInput = {
  deviceId: Scalars['String'];
};

export type UnregisterPushDeviceSessionOutput =
  | NotFoundError
  | UnregisterPushDeviceSessionResult
  | UserError;

export type UnregisterPushDeviceSessionResult = {
  __typename: 'UnregisterPushDeviceSessionResult';
  success: Scalars['Boolean'];
};

export type UnsetTemplateCategoryReplInput = {
  /** The associated repl id. */
  replId: Scalars['String'];
  /** The target template category id. */
  templateCategoryId: Scalars['Int'];
};

export type UnsetTemplateCategoryReplOutput =
  | NotFoundError
  | TemplateCategoryReplResult
  | UnauthorizedError
  | UserError;

export type UnsubmitReplOutput = Repl | UserError;

export type UpdateAnnotationAnchorOutput = AnnotationAnchor | UserError;

export type UpdateBoardTrendingAlgorithmSettingsInput = {
  commentsExponent: Scalars['Float'];
  postsCommentWeight: Scalars['Float'];
  postsExponent: Scalars['Float'];
};

export type UpdateCurrentUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  emailNotifications?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  profileImageId?: InputMaybe<Scalars['Int']>;
};

export type UpdateCyclesAutoRefillConfigurationInput = {
  /** Whether Auto-Refill is enabled */
  enabled: Scalars['Boolean'];
  /** USD cents maximum purchase total per calendar month. If unspecified there is no maximum. */
  monthlyBudget?: InputMaybe<Scalars['Int']>;
};

export type UpdateCyclesAutoRefillConfigurationOutput =
  | CurrentUser
  | UnauthorizedError
  | UserError;

export type UpdateEditorPreferencesInput = {
  accessibleTerminal?: InputMaybe<Scalars['Boolean']>;
  chatEngine?: InputMaybe<Scalars['String']>;
  codeIntelligence?: InputMaybe<Scalars['Boolean']>;
  codeSuggestion?: InputMaybe<Scalars['Boolean']>;
  completeCodeEngine?: InputMaybe<Scalars['String']>;
  extraDelight?: InputMaybe<Scalars['Boolean']>;
  fontSize?: InputMaybe<Scalars['Int']>;
  indentIsSpaces?: InputMaybe<Scalars['Boolean']>;
  indentSize?: InputMaybe<Scalars['Int']>;
  isLayoutStacked?: InputMaybe<Scalars['Boolean']>;
  keyboardHandler?: InputMaybe<Scalars['String']>;
  minimapDisplay?: InputMaybe<Scalars['String']>;
  multiselectModifierKey?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  webviewAutoOpenOnPortOpened?: InputMaybe<Scalars['Boolean']>;
  wrapping?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateGhostwriterPowerUpInput = {
  active: Scalars['Boolean'];
};

export type UpdateGhostwriterPowerUpOutput =
  | CurrentUser
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type UpdatePostInput = {
  boardId?: InputMaybe<Scalars['Int']>;
  body?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  isHidden?: InputMaybe<Scalars['Boolean']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isPinned?: InputMaybe<Scalars['Boolean']>;
  postType?: InputMaybe<Scalars['String']>;
  replId?: InputMaybe<Scalars['String']>;
  showHosted?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePostPayload = {
  __typename: 'UpdatePostPayload';
  post: Post;
};

export type UpdatePrivatePowerUp2Output =
  | CurrentUser
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type UpdatePrivatePowerUpOutput =
  | NotFoundError
  | UnauthorizedError
  | UserError
  | UserPowerUpDescriptionType;

export type UpdateReplCommentInput = {
  body: Scalars['String'];
  id: Scalars['Int'];
};

/** The event sent when the list of connected users for a Repl changes or is created. */
export type UpdateReplConnectionsEvent = {
  __typename: 'UpdateReplConnectionsEvent';
  /** The time when the data was returned */
  epoch: Scalars['DateTime'];
  /** The Repl which users are connected to */
  repl: Repl;
  /** The users that are connected to the Repl */
  users: Array<User>;
};

export type UpdateReplInput = {
  description?: InputMaybe<Scalars['String']>;
  doClone?: InputMaybe<Scalars['Boolean']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  isServer?: InputMaybe<Scalars['Boolean']>;
  isStarred?: InputMaybe<Scalars['Boolean']>;
  isVnc?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  removeDomain?: InputMaybe<Scalars['String']>;
  templateLabel?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateReplPayload = {
  __typename: 'UpdateReplPayload';
  repl: Repl;
};

export type UpdateReplTemplateInput = {
  allowSelfGrouping?: InputMaybe<Scalars['Boolean']>;
  availableEndDate?: InputMaybe<Scalars['String']>;
  availableStartDate?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  selfGroupSize?: InputMaybe<Scalars['Int']>;
  submissionGroups?: InputMaybe<Array<InputMaybe<SubmissionGroupInput>>>;
};

export type UpdateReplTemplateModelSolutionInput = {
  solutionId: Scalars['Int'];
  teamId: Scalars['Int'];
  visibleAfterDueDate?: InputMaybe<Scalars['Boolean']>;
  visibleAfterPassingTests?: InputMaybe<Scalars['Boolean']>;
  visibleAfterSubmitting?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateReplTemplateModelSolutionOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

export type UpdateReplTemplateOutputType = ReplTemplate | UserError;

export type UpdateReplTimeUpdatedOutput = NotFoundError | Repl | UserError;

export type UpdateReplUnitTestInput = {
  code?: InputMaybe<Scalars['String']>;
  failureMessage?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  testId: Scalars['Int'];
};

export type UpdateReplUnitTestLastRunInput = {
  replId: Scalars['String'];
  results: Array<UpdateReplUnitTestLastRunInputResults>;
};

export type UpdateReplUnitTestLastRunInputResults = {
  didPass: Scalars['Boolean'];
  testId: Scalars['Int'];
};

export type UpdateReplUnitTestLastRunOutput =
  | UpdateReplUnitTestLastRunUpdatedTests
  | UserError;

export type UpdateReplUnitTestLastRunUpdatedTests = {
  __typename: 'UpdateReplUnitTestLastRunUpdatedTests';
  updatedTests: Array<ReplUnitTestOutput>;
};

export type UpdateReplUnitTestMetaInput = {
  imports?: InputMaybe<Scalars['String']>;
  initialization?: InputMaybe<Scalars['String']>;
  replId: Scalars['String'];
  setup?: InputMaybe<Scalars['String']>;
  tearDown?: InputMaybe<Scalars['String']>;
};

export type UpdateStackInput = {
  /** Description of the stack */
  description?: InputMaybe<Scalars['String']>;
  /** Id of the stack */
  stackId: Scalars['Int'];
  /** Title of the stack */
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateStackOutput =
  | NotFoundError
  | Team
  | UnauthorizedError
  | User
  | UserError;

export type UpdateSubscription =
  | NotFoundError
  | UnauthorizedError
  | UpdateSubscriptionOutput
  | UserError;

export type UpdateSubscriptionInput = {
  orgId: Scalars['Int'];
  product: UpdateSubscriptionLineItemInput;
};

export type UpdateSubscriptionLineItemInput = {
  /** Product ID (only if changing subscribed product) */
  id?: InputMaybe<Scalars['Int']>;
  /** Subscription quantity (only if changing quantity) */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type UpdateSubscriptionOutput = {
  __typename: 'UpdateSubscriptionOutput';
  subscriptions: Array<Subscription>;
};

export enum UpdateSubscriptionResultPaymentIntentStatus {
  RequiresAction = 'requires_action',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded',
}

export type UpdateTeamInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  profileImage?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateTeamInviteLinkEduSignupOutput = Team | UserError;

export type UpdateTeamMemberInput = {
  /** Admin assigned nickname for member. */
  nickname?: InputMaybe<Scalars['String']>;
  /** The ID of the team */
  teamId: Scalars['Int'];
  /** The user whose nickname should be changed. */
  userId: Scalars['Int'];
};

export type UpdateTeamMemberOutput = Team | UnauthorizedError | UserError;

export type UpdateTeamOrganizationInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdateTeamOrganizationMemberInput = {
  memberId: Scalars['Int'];
  orgId: Scalars['Int'];
  role: TeamMemberRoleEnumType;
};

export type UpdateTeamOrganizationMemberOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError;

export type UpdateTeamOrganizationOutput =
  | NotFoundError
  | TeamOrganization
  | UnauthorizedError;

export type UpdateTeamUserPermissionsInput = {
  /** The ID of the team */
  id: Scalars['Int'];
  /** The permissions the user should get */
  permissions: TeamPermission;
  /** The user whose permissions should be changed. */
  user: Scalars['Int'];
};

export type UpdateTeamUserPermissionsOutput = Team | UserError;

export type UpdateTemplateTestInput = {
  input?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  output?: InputMaybe<Scalars['String']>;
  testId: Scalars['Int'];
  type?: InputMaybe<ReplTemplateTestType>;
};

export type UpdateThemeInput = {
  description: Scalars['String'];
  themeId: Scalars['Int'];
  values: UpdateThemeInputThemeValues;
};

/** An object which contains CSS styles that are applied to a given set of editor tags */
export type UpdateThemeInputEditorSyntaxHighlighting = {
  tags: Array<InputMaybe<UpdateThemeInputEditorTag>>;
  values: Scalars['JSON'];
};

/** A selector for a given editor tag */
export type UpdateThemeInputEditorTag = {
  modifiers?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
};

export type UpdateThemeInputThemeValues = {
  editor: UpdateThemeInputThemeValuesEditor;
  global: UpdateThemeInputThemeValuesGlobal;
};

/** The editor Theme values */
export type UpdateThemeInputThemeValuesEditor = {
  syntaxHighlighting: Array<UpdateThemeInputEditorSyntaxHighlighting>;
};

/** The global Theme values */
export type UpdateThemeInputThemeValuesGlobal = {
  accentNegativeDefault: Scalars['String'];
  accentNegativeDimmer: Scalars['String'];
  accentNegativeDimmest: Scalars['String'];
  accentNegativeStronger: Scalars['String'];
  accentNegativeStrongest: Scalars['String'];
  accentPositiveDefault: Scalars['String'];
  accentPositiveDimmer: Scalars['String'];
  accentPositiveDimmest: Scalars['String'];
  accentPositiveStronger: Scalars['String'];
  accentPositiveStrongest: Scalars['String'];
  accentPrimaryDefault: Scalars['String'];
  accentPrimaryDimmer: Scalars['String'];
  accentPrimaryDimmest: Scalars['String'];
  accentPrimaryStronger: Scalars['String'];
  accentPrimaryStrongest: Scalars['String'];
  backgroundDefault: Scalars['String'];
  backgroundHigher: Scalars['String'];
  backgroundHighest: Scalars['String'];
  backgroundOverlay: Scalars['String'];
  backgroundRoot: Scalars['String'];
  black: Scalars['String'];
  blueDefault: Scalars['String'];
  blueDimmer: Scalars['String'];
  blueDimmest: Scalars['String'];
  blueStronger: Scalars['String'];
  blueStrongest: Scalars['String'];
  blurpleDefault: Scalars['String'];
  blurpleDimmer: Scalars['String'];
  blurpleDimmest: Scalars['String'];
  blurpleStronger: Scalars['String'];
  blurpleStrongest: Scalars['String'];
  brownDefault: Scalars['String'];
  brownDimmer: Scalars['String'];
  brownDimmest: Scalars['String'];
  brownStronger: Scalars['String'];
  brownStrongest: Scalars['String'];
  foregroundDefault: Scalars['String'];
  foregroundDimmer: Scalars['String'];
  foregroundDimmest: Scalars['String'];
  greenDefault: Scalars['String'];
  greenDimmer: Scalars['String'];
  greenDimmest: Scalars['String'];
  greenStronger: Scalars['String'];
  greenStrongest: Scalars['String'];
  greyDefault: Scalars['String'];
  greyDimmer: Scalars['String'];
  greyDimmest: Scalars['String'];
  greyStronger: Scalars['String'];
  greyStrongest: Scalars['String'];
  limeDefault: Scalars['String'];
  limeDimmer: Scalars['String'];
  limeDimmest: Scalars['String'];
  limeStronger: Scalars['String'];
  limeStrongest: Scalars['String'];
  magentaDefault: Scalars['String'];
  magentaDimmer: Scalars['String'];
  magentaDimmest: Scalars['String'];
  magentaStronger: Scalars['String'];
  magentaStrongest: Scalars['String'];
  orangeDefault: Scalars['String'];
  orangeDimmer: Scalars['String'];
  orangeDimmest: Scalars['String'];
  orangeStronger: Scalars['String'];
  orangeStrongest: Scalars['String'];
  outlineDefault: Scalars['String'];
  outlineDimmer: Scalars['String'];
  outlineDimmest: Scalars['String'];
  outlineStronger: Scalars['String'];
  outlineStrongest: Scalars['String'];
  pinkDefault: Scalars['String'];
  pinkDimmer: Scalars['String'];
  pinkDimmest: Scalars['String'];
  pinkStronger: Scalars['String'];
  pinkStrongest: Scalars['String'];
  purpleDefault: Scalars['String'];
  purpleDimmer: Scalars['String'];
  purpleDimmest: Scalars['String'];
  purpleStronger: Scalars['String'];
  purpleStrongest: Scalars['String'];
  redDefault: Scalars['String'];
  redDimmer: Scalars['String'];
  redDimmest: Scalars['String'];
  redStronger: Scalars['String'];
  redStrongest: Scalars['String'];
  tealDefault: Scalars['String'];
  tealDimmer: Scalars['String'];
  tealDimmest: Scalars['String'];
  tealStronger: Scalars['String'];
  tealStrongest: Scalars['String'];
  white: Scalars['String'];
  yellowDefault: Scalars['String'];
  yellowDimmer: Scalars['String'];
  yellowDimmest: Scalars['String'];
  yellowStronger: Scalars['String'];
  yellowStrongest: Scalars['String'];
};

export type UpdateThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type UpdateUserCourseLessonOutput =
  | NotFoundError
  | UnauthorizedError
  | UpdatedUserCourseLesson
  | UserError;

export type UpdateUserOutput = CurrentUser | UserError;

export type UpdateUserPrivacyPreferencesInput = {
  show_presence?: InputMaybe<UserPrivacyPreferenceShowPresenceOptions>;
};

export type UpdateUserPrivacyPreferencesOutput =
  | CurrentUser
  | UnauthorizedError
  | UserError;

export type UpdateUserSitePresenceOutput =
  | CurrentUser
  | ServiceUnavailable
  | UnauthorizedError;

export type UpdatedUserCourseLesson = {
  __typename: 'UpdatedUserCourseLesson';
  userCourseLesson: UserCourseLesson;
};

/** Which paid upgrade path to suggest to the user to activate the power up. */
export enum UpgradePathEnumType {
  /** The user should be prompted to buy Cycles in order to spend them on this power up to get access */
  Cycles = 'CYCLES',
  /** The user should be prompted to subscribe to Hacker to get access to this power up */
  Hacker = 'HACKER',
  /** The user should be prompted to subscribe to Pro to get access to this power up */
  HackerPro = 'HACKER_PRO',
}

export type UpgradeThemeInput = {
  themeId: Scalars['Int'];
};

export type UpgradeThemeOutput =
  | CustomTheme
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type UploadReplAttachmentInput = {
  /** File contents */
  contents: Scalars['String'];
  /** File name of attachment */
  fileName: Scalars['String'];
  /** ISO timestamp of the last modified date of the attachment */
  lastModified: Scalars['String'];
  /** Repl to own the attachment */
  replId: Scalars['String'];
};

export type UploadReplAttachmentOutput =
  | NotFoundError
  | Repl
  | UnauthorizedError
  | UserError;

/** A user of Replit */
export type User = {
  __typename: 'User';
  bio?: Maybe<Scalars['String']>;
  /** Information about a user's activity in Bounties */
  bountyInfo: BountyInfo;
  /** Stats about a user's activity in Bounties */
  bountyStats: BountyUserStats;
  /** User profile cover image */
  coverImage?: Maybe<CoverImage>;
  displayName: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  followCount: Scalars['Int'];
  followerCount: Scalars['Int'];
  followers: UserConnection;
  follows: UserConnection;
  fullName: Scalars['String'];
  /** Whether a user has a gated feature */
  gate: Scalars['Boolean'];
  hasPrivacyRole: Scalars['Boolean'];
  hasRole: Scalars['Boolean'];
  id: Scalars['Int'];
  image: Scalars['String'];
  /** Determines whether a user is banned from talk/canny */
  isBannedFromBoards: Scalars['Boolean'];
  isBlockedByCurrentUser: Scalars['Boolean'];
  isBlockingCurrentUser: Scalars['Boolean'];
  isFollowedByCurrentUser: Scalars['Boolean'];
  isFollowingCurrentUser: Scalars['Boolean'];
  /**
   * Determines whether a user has a hacker plan
   * @deprecated Use `subscriptionIsType` or `userSubscriptionType` instead.
   */
  isHacker: Scalars['Boolean'];
  isLoggedIn: Scalars['Boolean'];
  isSubscribed: Scalars['Boolean'];
  isVerified?: Maybe<Scalars['Boolean']>;
  /** A list of langauges the user has coded in */
  languages: Array<Language>;
  lastName?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  /** Repls pinned on the profile */
  pinnedRepls: Array<Repl>;
  /** Finds the user's posts */
  posts?: Maybe<PostConnection>;
  /** Gives datetime for last time this user was seenon the site and whether they should be considered online now */
  presenceStatus: UserPresenceStatus;
  /** Repls searched on the profile */
  profileRepls: ReplConnection;
  /** Finds the public repls for a user */
  publicRepls: ReplConnection;
  redirectToTeamDashboard: Scalars['Boolean'];
  roles: Array<UserRole>;
  socials: Array<UserSocial>;
  /** Checks if the user has an active subscription of the given type */
  subscriptionIsType: Scalars['Boolean'];
  teamPermissions?: Maybe<TeamPermission>;
  timeCreated: Scalars['DateTime'];
  url: Scalars['String'];
  /** Returns the type of plan, if the user has a plan from the Hacker family of plans. */
  userSubscriptionType?: Maybe<UserSubscriptionTypeEnum>;
  username: Scalars['String'];
  /** Finds the user's warnings */
  warnings?: Maybe<Array<Maybe<Warning>>>;
};

/** A user of Replit */
export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** A user of Replit */
export type UserFollowsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
};

/** A user of Replit */
export type UserGateArgs = {
  feature: Scalars['String'];
};

/** A user of Replit */
export type UserHasRoleArgs = {
  role: UserRoles;
};

/** A user of Replit */
export type UserLanguagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

/** A user of Replit */
export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  unlisted?: InputMaybe<Scalars['Boolean']>;
};

/** A user of Replit */
export type UserProfileReplsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  direction?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};

/** A user of Replit */
export type UserPublicReplsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  direction?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  pinnedReplsFirst?: InputMaybe<Scalars['Boolean']>;
  showUnnamed?: InputMaybe<Scalars['Boolean']>;
};

/** A user of Replit */
export type UserRolesArgs = {
  only?: InputMaybe<Array<UserRoles>>;
};

/** A user of Replit */
export type UserSubscriptionIsTypeArgs = {
  subscriptionType: UserSubscriptionTypeEnum;
};

/** A user of Replit */
export type UserTeamPermissionsArgs = {
  teamId: Scalars['Int'];
};

/** An object for keeping user auth from diffrent providers */
export type UserAuth = {
  __typename: 'UserAuth';
  accessToken?: Maybe<Scalars['String']>;
  provider: UserAuthProviders;
};

/** A user auth provider error */
export type UserAuthProviderError = {
  __typename: 'UserAuthProviderError';
  message: Scalars['String'];
  provider: UserAuthProviders;
};

export enum UserAuthProviders {
  Apple = 'APPLE',
  Facebook = 'FACEBOOK',
  Github = 'GITHUB',
  Google = 'GOOGLE',
}

export type UserCliAccountMutation = {
  __typename: 'UserCliAccountMutation';
  /** Change your username (this can only be done once) */
  changeUsername?: Maybe<CluiOutput>;
};

export type UserCliAccountMutationChangeUsernameArgs = {
  username: Scalars['String'];
};

export type UserCliAccountQuery = {
  __typename: 'UserCliAccountQuery';
  /** View warnings you have been issued. */
  viewWarns?: Maybe<CluiOutput>;
};

/** A connection to a list of Users. */
export type UserConnection = {
  __typename: 'UserConnection';
  /** A list of Users. */
  items: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A course started by a user. */
export type UserCourse = {
  __typename: 'UserCourse';
  courseSlug: Scalars['String'];
  id: Scalars['Int'];
  /** The course lessons the user has started. */
  lessons?: Maybe<Array<UserCourseLesson>>;
  timeCreated: Scalars['Date'];
};

/** A course lesson started by a user. */
export type UserCourseLesson = {
  __typename: 'UserCourseLesson';
  /** The course under which the lesson belongs. */
  course: UserCourse;
  id: Scalars['Int'];
  lessonSlug: Scalars['String'];
  /** The forked Repl belonging to this lesson. Nullable in case the Repl is deleted. */
  repl?: Maybe<Repl>;
  timeCompleted?: Maybe<Scalars['Date']>;
  timeCreated: Scalars['Date'];
};

export type UserCourseLessonOutput =
  | NotFoundError
  | UnauthorizedError
  | UserCourseLesson
  | UserError;

export type UserCourseLessonResult = {
  __typename: 'UserCourseLessonResult';
  userCourseLesson: UserCourseLesson;
};

export type UserCourseOutput =
  | NotFoundError
  | UnauthorizedError
  | UserCourse
  | UserError;

export type UserCourseResult = {
  __typename: 'UserCourseResult';
  userCourse: UserCourse;
};

export type UserCyclesAutoRefillConfigurationOutput =
  | CyclesAutoRefillConfiguration
  | UnauthorizedError;

/** A user's egress consumption summary. */
export type UserEgressSummary = {
  __typename: 'UserEgressSummary';
  monthly: MonthlyEgressSummary;
};

/** An error caused by a user's request being bad / invalid */
export type UserError = {
  __typename: 'UserError';
  message: Scalars['String'];
};

/** User events triggered by current user's followed users. */
export type UserEvent = {
  __typename: 'UserEvent';
  comment?: Maybe<ReplComment>;
  eventType: User_EventseventTypeEnumType;
  following?: Maybe<User>;
  id: Scalars['Int'];
  post?: Maybe<Post>;
  reaction?: Maybe<ReplReaction>;
  repl?: Maybe<Repl>;
  timeUpdated: Scalars['Date'];
  user: User;
};

/** A connection to a list of UserEvents. */
export type UserEventConnection = {
  __typename: 'UserEventConnection';
  /** A list of UserEvents. */
  items: Array<UserEvent>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export enum UserFlagValueType {
  Boolean = 'boolean',
  Json = 'json',
  Number = 'number',
  String = 'string',
}

/** A user gate (feature flag). */
export type UserGate = {
  __typename: 'UserGate';
  controlName: Scalars['String'];
  type: UserGateValueType;
  value: Scalars['StringNumberBoolean'];
};

export enum UserGateValueType {
  Boolean = 'boolean',
  Json = 'json',
  Number = 'number',
  String = 'string',
}

export type UserPaymentMethod = PaymentMethod | UnauthorizedError;

export type UserPowerUpCost =
  | UnauthorizedError
  | UserError
  | UserPowerUpCostsType;

/** The cost associated with a given Power Up */
export type UserPowerUpCostDetailType = {
  __typename: 'UserPowerUpCostDetailType';
  cycles: Scalars['Int'];
  explanation: PowerUpCostExplanationEnumType;
};

/** The cost associated with various Power Ups for the user */
export type UserPowerUpCostsType = {
  __typename: 'UserPowerUpCostsType';
  /** Cost for using Ghostwriter */
  ghostwriter: UserPowerUpCostDetailType;
  /** Cost for making repls owned by the user private */
  private: UserPowerUpCostDetailType;
};

/** Power Ups which relate to the user (as-compared-with repl-specific Power Ups) */
export type UserPowerUpDescriptionByType = {
  /** What call-to-action to present to the user, if any. Note that some of this information can be derived through other fields on this type, but only partially so (e.g. you wouldn't be able to tell whether the user has already had a trial or not without using this field). */
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  /** Whether the Power Up is active (irrespective of whether it is being paid for or a trial). Note that this is distinct from the "active" field on a cycles_users_orders entry, which itself denote whether the order is set to renew. */
  active: Scalars['Boolean'];
  /** The Cycles cost that the user would incur upon purchasing the Power Up with Cycles */
  cost?: Maybe<UserPowerUpCostDetailType>;
  /** If active, whether the user's access is due to a trial (rather than a paid subscription) */
  isTrial: Scalars['Boolean'];
  /** How the user is paying for this Power Up, if they are paying for it (null if they are not) */
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  /** Which paid upgrade path to suggest for getting access to the power up. */
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']>;
  timeLastFulfilled?: Maybe<Scalars['Date']>;
  /** If the user has (or has had) a trial, the expiry date thereof */
  timeTrialExpiry?: Maybe<Scalars['DateTime']>;
  /** Whether the Power Up will renew (and typically result in a charge for the user) */
  willRenew: Scalars['Boolean'];
};

/** Power Ups which relate to the user (as-compared-with repl-specific Power Ups) */
export type UserPowerUpDescriptionType = {
  __typename: 'UserPowerUpDescriptionType';
  /** Whether the Power Up is active */
  active: Scalars['Boolean'];
  /** Power Up ID */
  id: Scalars['Int'];
  /** When the Power Up will be fulfilled next */
  time_fulfillment_due?: Maybe<Scalars['DateTime']>;
  /** When the Power Up was last fulfilled */
  time_last_fulfilled?: Maybe<Scalars['DateTime']>;
  /** The type of Power Up */
  type: UserPowerUpTypeEnumType;
};

export enum UserPowerUpTypeEnumType {
  Egress = 'egress',
  Ghostwriter = 'ghostwriter',
  NeonDatabasePreview = 'neonDatabasePreview',
  Private = 'private',
}

/** State of user-scoped Power Ups */
export type UserPowerUpsTypes = {
  __typename: 'UserPowerUpsTypes';
  egress: Array<EgressPowerUpType>;
  ghostwriter: GhostwriterPowerUpType;
  neonDatabasePreview: Array<NeonDatabasePreviewPowerUpType>;
  privateRepls: PrivateReplsPowerUpType;
};

export type UserPowerUpsTypesOutput =
  | UnauthorizedError
  | UserError
  | UserPowerUpsTypes;

export type UserPresenceStatus = {
  __typename: 'UserPresenceStatus';
  /** Whether the user should be considered online */
  isOnline: Scalars['Boolean'];
  /** Datetime for last time this user was seen on the site */
  lastSeen?: Maybe<Scalars['DateTime']>;
};

export enum UserPrivacyPreferenceShowPresenceOptions {
  Never = 'never',
  WhenOnline = 'when_online',
  WhereOnline = 'where_online',
}

export type UserReplCommentsOutput = {
  __typename: 'UserReplCommentsOutput';
  comments: Array<Maybe<ReplComment>>;
};

/** A role belonging to a user */
export type UserRole = {
  __typename: 'UserRole';
  id: Scalars['String'];
  key: UserRoles;
  name: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
};

export enum UserRoles {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  DaysOfCode = 'DAYS_OF_CODE',
  Detective = 'DETECTIVE',
  Developer = 'DEVELOPER',
  Explorer = 'EXPLORER',
  Featured = 'FEATURED',
  GithubClassroomUser = 'GITHUB_CLASSROOM_USER',
  IntentBusiness = 'INTENT_BUSINESS',
  IntentPersonal = 'INTENT_PERSONAL',
  IntentStudent = 'INTENT_STUDENT',
  IntentTeacher = 'INTENT_TEACHER',
  LanguageJammer = 'LANGUAGE_JAMMER',
  Moderator = 'MODERATOR',
  OnboardingExperienceHigh = 'ONBOARDING_EXPERIENCE_HIGH',
  OnboardingExperienceLow = 'ONBOARDING_EXPERIENCE_LOW',
  OnboardingExperienceMedium = 'ONBOARDING_EXPERIENCE_MEDIUM',
  OnboardingExperienceNone = 'ONBOARDING_EXPERIENCE_NONE',
  Patron = 'PATRON',
  PrivacyLimitedAccess = 'PRIVACY_LIMITED_ACCESS',
  Pythonista = 'PYTHONISTA',
  ReplitIdentityTesting = 'REPLIT_IDENTITY_TESTING',
  ReplitRep = 'REPLIT_REP',
  ReplitRepEdu = 'REPLIT_REP_EDU',
  ReplitStaff = 'REPLIT_STAFF',
  SelfLearner = 'SELF_LEARNER',
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  TeacherRejected = 'TEACHER_REJECTED',
  TeacherUnverified = 'TEACHER_UNVERIFIED',
  TemplateDeveloper = 'TEMPLATE_DEVELOPER',
  Tester = 'TESTER',
  VerifiedBountyHunter = 'VERIFIED_BOUNTY_HUNTER',
}

/** Grouped Search results for authenticated user */
export type UserSearchResults = {
  __typename: 'UserSearchResults';
  /** @deprecated No longer supported */
  languages: Array<Language>;
  /** @deprecated No longer supported */
  posts: Array<Post>;
  repls: Array<Repl>;
};

/** Grouped Search results for authenticated user */
export type UserSearchResultsLanguagesArgs = {
  count?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Grouped Search results for authenticated user */
export type UserSearchResultsPostsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Grouped Search results for authenticated user */
export type UserSearchResultsReplsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Social media profile links associated with a user profile */
export type UserSocial = {
  __typename: 'UserSocial';
  id: Scalars['Int'];
  type: User_SocialstypeEnumType;
  url: Scalars['String'];
};

export enum UserSocialEnum {
  Discord = 'discord',
  Facebook = 'facebook',
  Github = 'github',
  Linkedin = 'linkedin',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Website = 'website',
  Youtube = 'youtube',
}

/** An object for keeping user state */
export type UserState = {
  __typename: 'UserState';
  id: Scalars['Int'];
  interestedIn?: Maybe<Scalars['String']>;
  languagesInterestedIn: Array<Language>;
  skillLevel?: Maybe<Scalars['String']>;
};

export enum UserSubscriptionTypeEnum {
  Hacker = 'HACKER',
  HackerPro = 'HACKER_PRO',
}

export enum UserTrustEnum {
  Low = 'low',
}

export enum UserUpdateColumns {
  Email = 'EMAIL',
  Username = 'USERNAME',
}

export type WarnUserOutput = UserError | Warning;

/** A warning received by the user from Repl Talk moderators. */
export type Warning = {
  __typename: 'Warning';
  id: Scalars['Int'];
  /** The moderator who issued the warning. */
  moderator?: Maybe<User>;
  reason: Scalars['String'];
  timeCreated: Scalars['DateTime'];
  /** The user who received the warning. */
  user?: Maybe<User>;
};

/** Notification for when a user is warned. */
export type WarningNotification = {
  __typename: 'WarningNotification';
  context: Scalars['String'];
  creator?: Maybe<User>;
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
  timeCreated: Scalars['DateTime'];
  timeUpdated: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum Action {
  Reject = 'reject',
  Verify = 'verify',
}

export enum BountiesstatusEnumType {
  Canceled = 'canceled',
  Completed = 'completed',
  InProgress = 'in_progress',
  Open = 'open',
}

export enum Bounty_ApplicationsstatusEnumType {
  Accepted = 'accepted',
  AwaitingModeration = 'awaiting_moderation',
  NotReviewed = 'not_reviewed',
  Rejected = 'rejected',
}

export enum Bounty_EventseventTypeEnumType {
  ApplicationReviewed = 'application_reviewed',
  ApplicationSubmitted = 'application_submitted',
  BountyAbandoned = 'bounty_abandoned',
  BountyCanceled = 'bounty_canceled',
  BountyStateChange = 'bounty_state_change',
  BountyUpdated = 'bounty_updated',
  WorkReviewed = 'work_reviewed',
  WorkSubmitted = 'work_submitted',
}

export type CreateCyclesStripeCheckoutSession =
  | CreateCyclesStripeCheckoutSessionResult
  | UnauthorizedError
  | UserError;

export enum CustomerspaymentMethodEnumType {
  Bank = 'bank',
  Card = 'card',
  Check = 'check',
}

export enum Moderator_Action_RecordmodelEnumType {
  BannedBoardUsers = 'BannedBoardUsers',
  BoardReports = 'BoardReports',
  Boards = 'Boards',
  BountyApplications = 'BountyApplications',
  Comments = 'Comments',
  CustomThemes = 'CustomThemes',
  Notifications = 'Notifications',
  Posts = 'Posts',
  Repls = 'Repls',
  Warning = 'Warning',
}

export enum Moderator_Action_RecordtypeEnumType {
  Create = 'create',
  Delete = 'delete',
  Update = 'update',
}

export enum Multiplayer_InvitestypeEnumType {
  R = 'r',
  Rw = 'rw',
}

export enum NotificationsvariantEnumType {
  AnswerAccepted = 'answer_accepted',
  BountyApplicationReviewed = 'bounty_application_reviewed',
  BountyChatMessage = 'bounty_chat_message',
  BountyNewApplication = 'bounty_new_application',
  BountyNewSubmission = 'bounty_new_submission',
  BountySubmissionReviewed = 'bounty_submission_reviewed',
  EditRequestAccepted = 'edit_request_accepted',
  EditRequestCreated = 'edit_request_created',
  EgressApproachingLimit = 'egress_approaching_limit',
  EgressReachedLimit = 'egress_reached_limit',
  MentionedInComment = 'mentioned_in_comment',
  MentionedInPost = 'mentioned_in_post',
  MultiplayerInvited = 'multiplayer_invited',
  MultiplayerJoinedEmail = 'multiplayer_joined_email',
  MultiplayerJoinedLink = 'multiplayer_joined_link',
  MultiplayerOverlimit = 'multiplayer_overlimit',
  NewAchievementUnlocked = 'new_achievement_unlocked',
  NewAnnotationMention = 'new_annotation_mention',
  NewAnnotationMessage = 'new_annotation_message',
  NewFollower = 'new_follower',
  ReplCommentCreated = 'repl_comment_created',
  ReplCommentMention = 'repl_comment_mention',
  ReplCommentReplyCreated = 'repl_comment_reply_created',
  RepliedToComment = 'replied_to_comment',
  RepliedToPost = 'replied_to_post',
  TeamInvite = 'team_invite',
  TeamMemberJoined = 'team_member_joined',
  TeamMemberLimit = 'team_member_limit',
  TeamOrganizationInvite = 'team_organization_invite',
  TeamSubscription = 'team_subscription',
  TeamTemplatePublished = 'team_template_published',
  TeamTemplateReviewedStatus = 'team_template_reviewed_status',
  TeamTemplateSubmitted = 'team_template_submitted',
  ThreadUpdate = 'thread_update',
  TipReceived = 'tip_received',
  Warning = 'warning',
}

export enum Repl_PermissionstypeEnumType {
  R = 'r',
  Rw = 'rw',
}

export enum Repl_ReactionsreactionTypeEnumType {
  Eyes = 'eyes',
  Fire = 'fire',
  Heart = 'heart',
  OpenMouth = 'open_mouth',
  Rocket = 'rocket',
}

export enum Repl_View_SettingsdefaultViewEnumType {
  ReplFile = 'repl_file',
  ReplImage = 'repl_image',
}

export type SetFollowing =
  | FollowResult
  | NotFoundError
  | UnauthorizedError
  | UserError;

export type SetFollowingInput = {
  shouldFollow: Scalars['Boolean'];
  targetUserId: Scalars['Int'];
};

export type Stacks = {
  /** ID of stack selected for copying */
  id: Scalars['Int'];
  /** List IDs of templates which have been selected for copying */
  templateIds: Array<Scalars['Int']>;
};

export enum Team_Organization_MembersroleEnumType {
  Admin = 'admin',
  Owner = 'owner',
  Team = 'team',
}

export enum Team_Organization_SubscriptionsstripeStatusEnumType {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid',
}

export enum User_EventseventTypeEnumType {
  CreateReaction = 'create_reaction',
  PublishPost = 'publish_post',
  PublishTemplate = 'publish_template',
  UpdatePost = 'update_post',
  UpdateTemplate = 'update_template',
  UserComment = 'user_comment',
  UserFollowing = 'user_following',
}

export enum User_SocialstypeEnumType {
  Discord = 'discord',
  Facebook = 'facebook',
  Github = 'github',
  Linkedin = 'linkedin',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Website = 'website',
  Youtube = 'youtube',
}
