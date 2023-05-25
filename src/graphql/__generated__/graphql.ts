/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FlagValueType: { input: any; output: any; }
  JSON: { input: any; output: any; }
  SequelizeJSON: { input: any; output: any; }
  StringNumberBoolean: { input: any; output: any; }
};

export type AbandonBountyInput = {
  bountyId: Scalars['Int']['input'];
};

export type AbandonBountyOutput = Bounty | NotFoundError | UnauthorizedError | UserError;

export type AcceptInvoiceOutput = Invoice | NotFoundError | UnauthorizedError | UserError;

export type AccountStorageUtilization = {
  __typename?: 'AccountStorageUtilization';
  perRepl: Array<ReplStorageUtilization>;
  total: Scalars['String']['output'];
};

export type AccountStorageUtilizationOutput = AccountStorageUtilization | ServiceUnavailable | UnauthorizedError;

export type AddReplIdentityAllowedRepl = NotFoundError | Repl | UnauthorizedError;

export type AddReplIdentityAllowedReplInput = {
  replId: Scalars['String']['input'];
};

export type Admin = {
  __typename?: 'Admin';
  boardTrendingAlgorithmSettings: BoardTrendingAlgorithmSettings;
  user: User;
};

export type AdminCliAppEnvMutation = {
  __typename?: 'AdminCliAppEnvMutation';
  append?: Maybe<CluiOutput>;
  remove?: Maybe<CluiOutput>;
  set?: Maybe<CluiOutput>;
  unset?: Maybe<CluiOutput>;
};


export type AdminCliAppEnvMutationAppendArgs = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type AdminCliAppEnvMutationRemoveArgs = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type AdminCliAppEnvMutationSetArgs = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type AdminCliAppEnvMutationUnsetArgs = {
  key: Scalars['String']['input'];
};

export type AdminCliAppEnvQuery = {
  __typename?: 'AdminCliAppEnvQuery';
  list?: Maybe<CluiOutput>;
};

export type AdminCliBannersMutation = {
  __typename?: 'AdminCliBannersMutation';
  add?: Maybe<CluiOutput>;
  remove?: Maybe<CluiOutput>;
};


export type AdminCliBannersMutationAddArgs = {
  message: Scalars['String']['input'];
};

export type AdminCliBannersQuery = {
  __typename?: 'AdminCliBannersQuery';
  view?: Maybe<CluiOutput>;
};

export type AdminCliBillingOrgsMutation = {
  __typename?: 'AdminCliBillingOrgsMutation';
  addRemoveAdmin?: Maybe<CluiOutput>;
  provision?: Maybe<CluiOutput>;
  verifyTeacher?: Maybe<CluiOutput>;
};


export type AdminCliBillingOrgsMutationAddRemoveAdminArgs = {
  orgId: Scalars['Int']['input'];
  remove?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['Int']['input'];
};


export type AdminCliBillingOrgsMutationProvisionArgs = {
  customDeal?: InputMaybe<Scalars['Boolean']['input']>;
  interval?: InputMaybe<CluiTeamOrganizationBillingInterval>;
  name: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  plan: CluiTeamOrganizationPlanPrefix;
  seatCount?: InputMaybe<Scalars['Int']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
  timeExpired?: InputMaybe<Scalars['String']['input']>;
  trialEnd?: InputMaybe<Scalars['String']['input']>;
};


export type AdminCliBillingOrgsMutationVerifyTeacherArgs = {
  action: Action;
  userIds: Scalars['String']['input'];
};

export type AdminCliBillingOrgsQuery = {
  __typename?: 'AdminCliBillingOrgsQuery';
  view?: Maybe<CluiOutput>;
};


export type AdminCliBillingOrgsQueryViewArgs = {
  teamOrUserName: Scalars['String']['input'];
};

export type AdminCliCommuniyQuery = {
  __typename?: 'AdminCliCommuniyQuery';
  algorithm?: Maybe<CluiOutput>;
};

export type AdminCliExtensionMutation = {
  __typename?: 'AdminCliExtensionMutation';
  delete?: Maybe<CluiOutput>;
  update?: Maybe<CluiOutput>;
};


export type AdminCliExtensionMutationDeleteArgs = {
  extensionId: Scalars['String']['input'];
};


export type AdminCliExtensionMutationUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  extensionId: Scalars['String']['input'];
  isBlessed?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type AdminCliExtensionQuery = {
  __typename?: 'AdminCliExtensionQuery';
  view?: Maybe<CluiOutput>;
};


export type AdminCliExtensionQueryViewArgs = {
  creator?: InputMaybe<Scalars['String']['input']>;
};

export type AdminCliHostingDeploymentsMutation = {
  __typename?: 'AdminCliHostingDeploymentsMutation';
  delete?: Maybe<CluiOutput>;
};


export type AdminCliHostingDeploymentsMutationDeleteArgs = {
  replId: Scalars['String']['input'];
};

export type AdminCliReplMutation = {
  __typename?: 'AdminCliReplMutation';
  cleanse?: Maybe<CluiOutput>;
  delete?: Maybe<CluiOutput>;
  poison?: Maybe<CluiOutput>;
  takedown?: Maybe<CluiOutput>;
};


export type AdminCliReplMutationCleanseArgs = {
  repl: Scalars['String']['input'];
};


export type AdminCliReplMutationDeleteArgs = {
  repl: Scalars['String']['input'];
};


export type AdminCliReplMutationPoisonArgs = {
  disableForking?: InputMaybe<Scalars['Boolean']['input']>;
  repl: Scalars['String']['input'];
};


export type AdminCliReplMutationTakedownArgs = {
  repl: Scalars['String']['input'];
};

export type AdminCliRolesMutation = {
  __typename?: 'AdminCliRolesMutation';
  add?: Maybe<CluiOutput>;
  remove?: Maybe<CluiOutput>;
};


export type AdminCliRolesMutationAddArgs = {
  role: UserRoles;
  user: Scalars['String']['input'];
};


export type AdminCliRolesMutationRemoveArgs = {
  role: UserRoles;
  user: Scalars['String']['input'];
};

export type AdminCliRolesQuery = {
  __typename?: 'AdminCliRolesQuery';
  view?: Maybe<CluiOutput>;
};


export type AdminCliRolesQueryViewArgs = {
  user: Scalars['String']['input'];
};

export type AdminCliSiteMutation = {
  __typename?: 'AdminCliSiteMutation';
  setLastUpdateTime?: Maybe<CluiOutput>;
};


export type AdminCliSiteMutationSetLastUpdateTimeArgs = {
  date?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminCliSiteQuery = {
  __typename?: 'AdminCliSiteQuery';
  getLastUpdateTime?: Maybe<CluiOutput>;
  version?: Maybe<CluiOutput>;
};

export type AdminCliSubscriptionsMutation = {
  __typename?: 'AdminCliSubscriptionsMutation';
  override?: Maybe<CluiOutput>;
};


export type AdminCliSubscriptionsMutationOverrideArgs = {
  ignoreExpiration?: InputMaybe<OverrideBehaviorEnum>;
  ignoreQuantity?: InputMaybe<OverrideBehaviorEnum>;
  orgId?: InputMaybe<Scalars['Int']['input']>;
  overrideExpiration?: InputMaybe<Scalars['String']['input']>;
  overrideQuantity?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type AdminCliSubscriptionsQuery = {
  __typename?: 'AdminCliSubscriptionsQuery';
  view?: Maybe<CluiOutput>;
};


export type AdminCliSubscriptionsQueryViewArgs = {
  orgId?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type AdminCliSupportQuery = {
  __typename?: 'AdminCliSupportQuery';
  info?: Maybe<CluiOutput>;
  verifyEduUsers?: Maybe<CluiOutput>;
};


export type AdminCliSupportQueryInfoArgs = {
  isUserId?: InputMaybe<Scalars['Boolean']['input']>;
  userOrRepl: Scalars['String']['input'];
};

export type AdminCliTemplatesCategoriesMutation = {
  __typename?: 'AdminCliTemplatesCategoriesMutation';
  addOrUpdate?: Maybe<CluiOutput>;
  delete?: Maybe<CluiOutput>;
};


export type AdminCliTemplatesCategoriesMutationAddOrUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updateTemplateId?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminCliTemplatesCategoriesMutationDeleteArgs = {
  id: Scalars['Int']['input'];
};

export type AdminCliTemplatesCategoriesQuery = {
  __typename?: 'AdminCliTemplatesCategoriesQuery';
  assign?: Maybe<CluiOutput>;
  view?: Maybe<CluiOutput>;
};

export type AdminCliTemplatesMutation = {
  __typename?: 'AdminCliTemplatesMutation';
  categories2?: Maybe<AdminCliTemplatesCategoriesMutation>;
  unpublish?: Maybe<CluiOutput>;
};


export type AdminCliTemplatesMutationUnpublishArgs = {
  replId: Scalars['String']['input'];
};

export type AdminCliTemplatesQuery = {
  __typename?: 'AdminCliTemplatesQuery';
  beta?: Maybe<CluiOutput>;
  categories?: Maybe<CluiOutput>;
  categories2?: Maybe<AdminCliTemplatesCategoriesQuery>;
  languages?: Maybe<CluiOutput>;
  submissions?: Maybe<CluiOutput>;
};

export type AdminCliToursMutation = {
  __typename?: 'AdminCliToursMutation';
  updateTourSeen?: Maybe<CluiOutput>;
};


export type AdminCliToursMutationUpdateTourSeenArgs = {
  shouldBeMarkedAsSeen?: InputMaybe<Scalars['Boolean']['input']>;
  tourName: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type AdminCliUserCyclesCashOutMutation = {
  __typename?: 'AdminCliUserCyclesCashOutMutation';
  paid?: Maybe<CluiOutput>;
  pledge?: Maybe<CluiOutput>;
  refund?: Maybe<CluiOutput>;
};


export type AdminCliUserCyclesCashOutMutationPaidArgs = {
  user: Scalars['String']['input'];
};


export type AdminCliUserCyclesCashOutMutationPledgeArgs = {
  cycles: Scalars['Int']['input'];
  feePercent: CashOutFeePercentEnum;
  user: Scalars['String']['input'];
};


export type AdminCliUserCyclesCashOutMutationRefundArgs = {
  user: Scalars['String']['input'];
};

export type AdminCliUserCyclesMutation = {
  __typename?: 'AdminCliUserCyclesMutation';
  cashOut?: Maybe<AdminCliUserCyclesCashOutMutation>;
  grant?: Maybe<CluiOutput>;
  retire?: Maybe<CluiOutput>;
};


export type AdminCliUserCyclesMutationGrantArgs = {
  cycles: Scalars['Int']['input'];
  internalComment: Scalars['String']['input'];
  target: Scalars['String']['input'];
};


export type AdminCliUserCyclesMutationRetireArgs = {
  cycles: Scalars['Int']['input'];
  internalComment: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminCliUserCyclesQuery = {
  __typename?: 'AdminCliUserCyclesQuery';
  balance?: Maybe<CluiOutput>;
};


export type AdminCliUserCyclesQueryBalanceArgs = {
  username: Scalars['String']['input'];
};

export type AdminCliUserIapMutation = {
  __typename?: 'AdminCliUserIAPMutation';
  createIAPSubscription?: Maybe<CluiOutput>;
  expireIAPSubscriptions?: Maybe<CluiOutput>;
};


export type AdminCliUserIapMutationCreateIapSubscriptionArgs = {
  planId?: InputMaybe<Scalars['String']['input']>;
  providerName?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};


export type AdminCliUserIapMutationExpireIapSubscriptionsArgs = {
  user: Scalars['String']['input'];
};

export type AdminCliUserMutation = {
  __typename?: 'AdminCliUserMutation';
  ban?: Maybe<CluiOutput>;
  changeEmail?: Maybe<CluiOutput>;
  changeUsername?: Maybe<CluiOutput>;
  cluster?: Maybe<CluiOutput>;
  cycles?: Maybe<AdminCliUserCyclesMutation>;
  deprovision?: Maybe<CluiOutput>;
  egress?: Maybe<CluiOutput>;
  iap?: Maybe<AdminCliUserIapMutation>;
  impersonate?: Maybe<CluiOutput>;
  powerUps?: Maybe<AdminCliUserPowerUpsMutation>;
  provision?: Maybe<CluiOutput>;
  restore?: Maybe<CluiOutput>;
  trust?: Maybe<CluiOutput>;
  unban?: Maybe<CluiOutput>;
  verify?: Maybe<CluiOutput>;
};


export type AdminCliUserMutationBanArgs = {
  reason: Scalars['String']['input'];
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationChangeEmailArgs = {
  email: Scalars['String']['input'];
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationChangeUsernameArgs = {
  user: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type AdminCliUserMutationClusterArgs = {
  cluster?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationDeprovisionArgs = {
  username: Scalars['String']['input'];
};


export type AdminCliUserMutationEgressArgs = {
  method: EgressUsageMethod;
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationImpersonateArgs = {
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationProvisionArgs = {
  months: Scalars['Int']['input'];
  planPrefix: CluiIndividualPlanPrefix;
  username: Scalars['String']['input'];
};


export type AdminCliUserMutationRestoreArgs = {
  time?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationTrustArgs = {
  level?: InputMaybe<UserTrustEnum>;
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationUnbanArgs = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  time?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};


export type AdminCliUserMutationVerifyArgs = {
  username: Scalars['String']['input'];
};

export type AdminCliUserPowerUpsMutation = {
  __typename?: 'AdminCliUserPowerUpsMutation';
  createTrial?: Maybe<CluiOutput>;
  editTrial?: Maybe<CluiOutput>;
};


export type AdminCliUserPowerUpsMutationCreateTrialArgs = {
  expiry: Scalars['String']['input'];
  powerUp: PowerUpTrialTypeEnumType;
  user: Scalars['String']['input'];
};


export type AdminCliUserPowerUpsMutationEditTrialArgs = {
  expiry: Scalars['String']['input'];
  powerUp: PowerUpTrialTypeEnumType;
  user: Scalars['String']['input'];
};

export type AdminCliUserQuery = {
  __typename?: 'AdminCliUserQuery';
  cycles?: Maybe<AdminCliUserCyclesQuery>;
  view?: Maybe<CluiOutput>;
};


export type AdminCliUserQueryViewArgs = {
  user: Scalars['String']['input'];
};

export type AdminCluiMutation = {
  __typename?: 'AdminCluiMutation';
  appEnv?: Maybe<AdminCliAppEnvMutation>;
  banners?: Maybe<AdminCliBannersMutation>;
  curation?: Maybe<ManualCurationMutation>;
  curriculum?: Maybe<AdminCurriculumHubMutation>;
  extension?: Maybe<AdminCliExtensionMutation>;
  hostingDeployment?: Maybe<AdminCliHostingDeploymentsMutation>;
  org?: Maybe<AdminCliBillingOrgsMutation>;
  repl?: Maybe<AdminCliReplMutation>;
  roles?: Maybe<AdminCliRolesMutation>;
  site?: Maybe<AdminCliSiteMutation>;
  subscriptions?: Maybe<AdminCliSubscriptionsMutation>;
  team?: Maybe<AdminTeamMutation>;
  templates?: Maybe<AdminCliTemplatesMutation>;
  tours?: Maybe<AdminCliToursMutation>;
  user?: Maybe<AdminCliUserMutation>;
};

export type AdminCluiQuery = {
  __typename?: 'AdminCluiQuery';
  appEnv?: Maybe<AdminCliAppEnvQuery>;
  banners?: Maybe<AdminCliBannersQuery>;
  community?: Maybe<AdminCliCommuniyQuery>;
  curation?: Maybe<ManualCurationQuery>;
  curriculum?: Maybe<AdminCurriculumHubQuery>;
  extension?: Maybe<AdminCliExtensionQuery>;
  org?: Maybe<AdminCliBillingOrgsQuery>;
  roles?: Maybe<AdminCliRolesQuery>;
  site?: Maybe<AdminCliSiteQuery>;
  subscriptions?: Maybe<AdminCliSubscriptionsQuery>;
  support?: Maybe<AdminCliSupportQuery>;
  team?: Maybe<AdminTeamOrgQuery>;
  templates?: Maybe<AdminCliTemplatesQuery>;
  user?: Maybe<AdminCliUserQuery>;
};

export type AdminCurriculumHubMutation = {
  __typename?: 'AdminCurriculumHubMutation';
  changeCurriculumStatus?: Maybe<CluiOutput>;
  exportCurriculum?: Maybe<CluiOutput>;
};


export type AdminCurriculumHubMutationChangeCurriculumStatusArgs = {
  status: CurriculumVersionStatus;
  versionId: Scalars['Int']['input'];
};


export type AdminCurriculumHubMutationExportCurriculumArgs = {
  team: Scalars['String']['input'];
};

export type AdminCurriculumHubQuery = {
  __typename?: 'AdminCurriculumHubQuery';
  viewCurriculum?: Maybe<CluiOutput>;
};


export type AdminCurriculumHubQueryViewCurriculumArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type AdminRemoveReplIconOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type AdminRemoveUserImageOutput = NotFoundError | UnauthorizedError | User | UserError;

export type AdminTeamMutation = {
  __typename?: 'AdminTeamMutation';
  addRemoveTeamMember?: Maybe<CluiOutput>;
  moveTeamToOrg?: Maybe<CluiOutput>;
};


export type AdminTeamMutationAddRemoveTeamMemberArgs = {
  permissions?: InputMaybe<TeamPermission>;
  remove?: InputMaybe<Scalars['Boolean']['input']>;
  team: Scalars['String']['input'];
  user: Scalars['String']['input'];
};


export type AdminTeamMutationMoveTeamToOrgArgs = {
  orgId: Scalars['Int']['input'];
  team: Scalars['String']['input'];
};

export type AdminTeamOrgQuery = {
  __typename?: 'AdminTeamOrgQuery';
  viewTeamMembers?: Maybe<CluiOutput>;
};


export type AdminTeamOrgQueryViewTeamMembersArgs = {
  team: Scalars['String']['input'];
};

export type AllowedReplIdentityRepls = AllowedReplIdentityReplsOutput | UnauthorizedError;

export type AllowedReplIdentityReplsOutput = {
  __typename?: 'AllowedReplIdentityReplsOutput';
  repls: Array<Repl>;
};

export type AnnotationAnchor = {
  __typename?: 'AnnotationAnchor';
  currentUserIsAuthor: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  indexEnd?: Maybe<Scalars['Int']['output']>;
  indexStart?: Maybe<Scalars['Int']['output']>;
  isGeneral: Scalars['Boolean']['output'];
  isResolved: Scalars['Boolean']['output'];
  messageCount: Scalars['Int']['output'];
  messages: Array<AnnotationMessage>;
  otVersion?: Maybe<Scalars['Int']['output']>;
  participants: Array<User>;
  path?: Maybe<Scalars['String']['output']>;
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  unreadCount: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type AnnotationAnchorChangesInput = {
  indexEnd?: InputMaybe<Scalars['Int']['input']>;
  indexStart?: InputMaybe<Scalars['Int']['input']>;
  isResolved?: InputMaybe<Scalars['Boolean']['input']>;
  otVersion?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

export type AnnotationAnchorInput = {
  id: Scalars['String']['input'];
  indexEnd?: InputMaybe<Scalars['Int']['input']>;
  indexStart?: InputMaybe<Scalars['Int']['input']>;
  isGeneral?: InputMaybe<Scalars['Boolean']['input']>;
  isResolved?: InputMaybe<Scalars['Boolean']['input']>;
  otVersion?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  replId: Scalars['String']['input'];
};

export type AnnotationHighlightInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  precode?: InputMaybe<Scalars['String']['input']>;
};

export type AnnotationMessage = {
  __typename?: 'AnnotationMessage';
  anchor?: Maybe<AnnotationAnchor>;
  content: MessageContentType;
  currentUserIsAuthor: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  seen?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Superseded by content */
  text: Scalars['String']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type AnnotationMessageInput = {
  anchorId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  mentions?: InputMaybe<Array<Scalars['String']['input']>>;
  text: Scalars['String']['input'];
};

export type AnnotationMessageList = {
  __typename?: 'AnnotationMessageList';
  messages: Array<AnnotationMessage>;
};

export type AnnotationNotification = {
  __typename?: 'AnnotationNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type AnnotationQueryOutput = AnnotationAnchor | UserError;

export type AnonymousFlagInput = {
  default?: InputMaybe<Scalars['FlagValueType']['input']>;
  id: Scalars['String']['input'];
  type: UserFlagValueType;
  userKey?: InputMaybe<Scalars['String']['input']>;
};

export type AnonymousFlagOutput = Flag | UserError;

export type AnswerAcceptedNotification = {
  __typename?: 'AnswerAcceptedNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  post?: Maybe<Post>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type AppStoreCustomerOutput = AppStoreCustomerResult | UnauthorizedError | UserError;

export type AppStoreCustomerResult = {
  __typename?: 'AppStoreCustomerResult';
  appAccountToken: Scalars['String']['output'];
};

export type ArchiveTeamInput = {
  teamId: Scalars['Int']['input'];
};

export type ArchviveTeamInput = NotFoundError | Team | UnauthorizedError | UserError;

export type ArrangeStackInput = {
  order: Scalars['Int']['input'];
  stackId: Scalars['Int']['input'];
};

export type ArrangeStackItemInput = {
  order: Scalars['Int']['input'];
  previousStackId?: InputMaybe<Scalars['Int']['input']>;
  replId: Scalars['String']['input'];
  stackId: Scalars['Int']['input'];
};

export type ArrangeStackItemOutput = NotFoundError | Team | UnauthorizedError | User | UserError;

export type ArrangeStackOutput = NotFoundError | Team | UnauthorizedError | User | UserError;

export type AsanaSupportRequestClientSideInput = {
  browser?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AsanaSupportRequestInput = {
  attachments?: InputMaybe<Array<Scalars['Int']['input']>>;
  body: Scalars['String']['input'];
  clientInformation?: InputMaybe<AsanaSupportRequestClientSideInput>;
  projects?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type AsanaSupportRequestOutput = AsanaSupportRequestSuccess | TooManyRequestsError | UnauthorizedError | UserError;

export type AsanaSupportRequestSuccess = {
  __typename?: 'AsanaSupportRequestSuccess';
  asanaTaskGID: Scalars['String']['output'];
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  success: Scalars['Boolean']['output'];
  tagsAttached?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AvailableReplTitleInput = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type AvailableReplTitleOutput = AvailableReplTitleResult | UnauthorizedError;

export type AvailableReplTitleResult = {
  __typename?: 'AvailableReplTitleResult';
  isAvailable: Scalars['Boolean']['output'];
};

export type BanCommunityUserOutput = BannedBoardUser | UserError;

export type BannedBoardUser = {
  __typename?: 'BannedBoardUser';
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  reason: Scalars['String']['output'];
  timeCreated: Scalars['Date']['output'];
  timeExpired?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
};

export type Banner = {
  __typename?: 'Banner';
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type BasicBountyEvent = {
  __typename?: 'BasicBountyEvent';
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int']['output'];
  timeCreated: Scalars['Date']['output'];
};

export type BasicNotification = {
  __typename?: 'BasicNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type BillingInfo = {
  __typename?: 'BillingInfo';
  expiration?: Maybe<Scalars['DateTime']['output']>;
  planInfo?: Maybe<PlanInfo>;
};

export type Board = {
  __typename?: 'Board';
  bodyCta?: Maybe<Scalars['String']['output']>;
  buttonCta?: Maybe<Scalars['String']['output']>;
  canPost: Scalars['Boolean']['output'];
  color?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isAnswerable: Scalars['Boolean']['output'];
  isLocked: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  replRequired: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  template?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  titleCta?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type BoardReport = {
  __typename?: 'BoardReport';
  bounty?: Maybe<Bounty>;
  bountyApplication?: Maybe<BountyApplication>;
  comment?: Maybe<Comment>;
  creator?: Maybe<User>;
  customTheme?: Maybe<CustomTheme>;
  id: Scalars['Int']['output'];
  isEscalated?: Maybe<Scalars['Boolean']['output']>;
  post?: Maybe<Post>;
  reason?: Maybe<Scalars['String']['output']>;
  repl?: Maybe<Repl>;
  replComment?: Maybe<ReplComment>;
  reportedUser?: Maybe<User>;
  reportedUserId?: Maybe<Scalars['Int']['output']>;
  resolved: Scalars['Boolean']['output'];
  timeCreated: Scalars['Date']['output'];
  type: Scalars['String']['output'];
};

export type BoardReportConnection = {
  __typename?: 'BoardReportConnection';
  items: Array<BoardReport>;
  pageInfo: PageInfo;
};

export type BoardReports = BoardReportConnection | UnauthorizedError;

export type BoardReportsInputType = {
  after?: InputMaybe<Scalars['Int']['input']>;
  escalated?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<BoardReportsOrderType>;
  reporter?: InputMaybe<Scalars['Int']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  target?: InputMaybe<BoardReportsTargetType>;
};

export enum BoardReportsOrderType {
  Newest = 'newest',
  Oldest = 'oldest'
}

export enum BoardReportsTargetType {
  Bounty = 'bounty',
  BountyApplication = 'bountyApplication',
  Comment = 'comment',
  CustomTheme = 'customTheme',
  Post = 'post',
  Repl = 'repl',
  ReplComment = 'replComment',
  ReportedUser = 'reportedUser'
}

export type BoardTrendingAlgorithmSettings = {
  __typename?: 'BoardTrendingAlgorithmSettings';
  commentsExponent: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  postsCommentWeight: Scalars['Float']['output'];
  postsExponent: Scalars['Float']['output'];
};

export type BoostPowerUpType = {
  __typename?: 'BoostPowerUpType';
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  sku: BoostSkuEnum;
};

export type BoostRepl2Input = {
  expectedCyclesCost?: InputMaybe<Scalars['Int']['input']>;
  replId: Scalars['String']['input'];
  setting: BoostSettingEnum;
};

export type BoostRepl2Output = BoostRepl2Result | PaymentError | UnauthorizedError | UserError;

export type BoostRepl2Result = {
  __typename?: 'BoostRepl2Result';
  currentUser: CurrentUser;
  repl: Repl;
};

export enum BoostSkuEnum {
  Boost_2cpu_2ram = 'boost_2cpu_2ram',
  Boost_4cpu_4ram = 'boost_4cpu_4ram',
  Boost_8cpu_8ram = 'boost_8cpu_8ram',
  Boost_16cpu_16ram = 'boost_16cpu_16ram',
  Off = 'off'
}

export enum BoostSettingEnum {
  Boost_2cpu_2ram = 'boost_2cpu_2ram',
  Boost_4cpu_4ram = 'boost_4cpu_4ram',
  Boost_8cpu_8ram = 'boost_8cpu_8ram',
  Boost_16cpu_16ram = 'boost_16cpu_16ram',
  Off = 'off'
}

export type Bounty = {
  __typename?: 'Bounty';
  acceptedApplication?: Maybe<BountyApplication>;
  applicationCount: Scalars['Int']['output'];
  bountyHunterReview?: Maybe<BountyHunterReview>;
  canCurrentUserCancel: Scalars['Boolean']['output'];
  contactInfo?: Maybe<Scalars['String']['output']>;
  contactMethod?: Maybe<BountyContactMethod>;
  currentUserApplication?: Maybe<BountyApplication>;
  cycles: Scalars['Int']['output'];
  deadline: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  descriptionPreview: Scalars['String']['output'];
  events?: Maybe<BountyEventConnection>;
  fee: Scalars['Int']['output'];
  hasCurrentUserApplied: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isCurrentUserBountyPoster: Scalars['Boolean']['output'];
  isCurrentUserBountySolver: Scalars['Boolean']['output'];
  isUnlisted: Scalars['Boolean']['output'];
  latestSubmission?: Maybe<BountySubmission>;
  slug: Scalars['String']['output'];
  solver?: Maybe<User>;
  solverPayout: Scalars['Int']['output'];
  status: BountiesstatusEnumType;
  submissions: Array<BountySubmission>;
  timeCreated: Scalars['Date']['output'];
  title: Scalars['String']['output'];
  user?: Maybe<User>;
  walletId?: Maybe<Scalars['String']['output']>;
};


export type BountyEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type BountyApplication = {
  __typename?: 'BountyApplication';
  bounty?: Maybe<Bounty>;
  canCurrentUserRemoveApplication: Scalars['Boolean']['output'];
  canCurrentUserSendChatMessage: Scalars['Boolean']['output'];
  canCurrentUserViewChat: Scalars['Boolean']['output'];
  contactInfo?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isCurrentUserApplicant: Scalars['Boolean']['output'];
  status: Bounty_ApplicationsstatusEnumType;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  unreadChatMessageCount: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type BountyApplicationByIdInput = {
  id: Scalars['Int']['input'];
};

export type BountyApplicationByIdOutput = BountyApplication | NotFoundError | UnauthorizedError;

export type BountyApplicationConnection = {
  __typename?: 'BountyApplicationConnection';
  items: Array<BountyApplication>;
  pageInfo: PageInfo;
};

export type BountyApplicationReviewedEvent = {
  __typename?: 'BountyApplicationReviewedEvent';
  bounty?: Maybe<Bounty>;
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int']['output'];
  isAccepted: Scalars['Boolean']['output'];
  timeCreated: Scalars['Date']['output'];
  user?: Maybe<User>;
};

export type BountyApplicationReviewedNotification = {
  __typename?: 'BountyApplicationReviewedNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type BountyApplicationSearchInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  bountyId?: InputMaybe<Scalars['Int']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<BountyApplicationSearchOrder>;
  status?: InputMaybe<BountyApplicationSearchStatus>;
};

export enum BountyApplicationSearchOrder {
  ApplicationDateAscending = 'applicationDateAscending',
  ApplicationDateDescending = 'applicationDateDescending',
  CompletedBountiesDescending = 'completedBountiesDescending',
  Recommended = 'recommended'
}

export type BountyApplicationSearchOutput = BountyApplicationConnection | UserError;

export enum BountyApplicationSearchStatus {
  Accepted = 'accepted',
  All = 'all',
  AwaitingModeration = 'awaitingModeration',
  NotReviewed = 'notReviewed',
  Rejected = 'rejected',
  RejectedAndNotReviewed = 'rejectedAndNotReviewed'
}

export type BountyByIdInput = {
  id: Scalars['Int']['input'];
};

export type BountyByIdOutput = Bounty | NotFoundError | UnauthorizedError;

export type BountyByUrlInput = {
  slug: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type BountyByUrlOutput = Bounty | NotFoundError | UnauthorizedError;

export type BountyChatMessage = {
  __typename?: 'BountyChatMessage';
  bountyApplication?: Maybe<BountyApplication>;
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type BountyChatMessageConnection = {
  __typename?: 'BountyChatMessageConnection';
  items: Array<BountyChatMessage>;
  pageInfo: PageInfo;
};

export type BountyChatMessageNotification = {
  __typename?: 'BountyChatMessageNotification';
  bounty?: Maybe<Bounty>;
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  message?: Maybe<BountyChatMessage>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  unreadCount?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};

export type BountyChatSearchInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  bountyApplicationId: Scalars['Int']['input'];
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type BountyChatSearchOutput = BountyChatMessageConnection | NotFoundError | TooManyRequestsError | UnauthorizedError | UserError;

export enum BountyContactMethod {
  Discord = 'discord',
  Email = 'email'
}

export type BountyEvent = BasicBountyEvent | BountyApplicationReviewedEvent | BountyStateChangeEvent | BountyUpdatesEvent | BountyWorkReviewedEvent | BountyWorkSubmittedEvent;

export type BountyEventConnection = {
  __typename?: 'BountyEventConnection';
  items: Array<BountyEvent>;
  pageInfo: PageInfo;
};

export type BountyHunterEarnings = {
  __typename?: 'BountyHunterEarnings';
  approximateCyclesEarned: Scalars['Int']['output'];
};

export type BountyHunterReview = {
  __typename?: 'BountyHunterReview';
  bounty?: Maybe<Bounty>;
  communicationRating: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  qualityRating: Scalars['Int']['output'];
  reviewText?: Maybe<Scalars['String']['output']>;
  reviewedUser?: Maybe<User>;
  reviewingUser?: Maybe<User>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  timelinessRating: Scalars['Int']['output'];
};

export type BountyHunterReviewConnection = {
  __typename?: 'BountyHunterReviewConnection';
  items: Array<BountyHunterReview>;
  pageInfo: PageInfo;
};

export type BountyHunterReviewsOutput = BountyHunterReviewConnection | UnauthorizedError | UserError;

export type BountyHunterService = {
  __typename?: 'BountyHunterService';
  cycles: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  isAvailable: Scalars['Boolean']['output'];
  isUnlisted: Scalars['Boolean']['output'];
  timeToComplete: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type BountyHunterServiceByIdInput = {
  id: Scalars['Int']['input'];
};

export type BountyHunterServiceByIdOutput = BountyHunterService | NotFoundError | UnauthorizedError | UserError;

export type BountyHunterServiceConnection = {
  __typename?: 'BountyHunterServiceConnection';
  items: Array<BountyHunterService>;
  pageInfo: PageInfo;
};

export type BountyHunterServiceSearchInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type BountyHunterServiceSearchOutput = BountyHunterServiceConnection | TooManyRequestsError | UnauthorizedError | UserError;

export type BountyInfo = {
  __typename?: 'BountyInfo';
  hunterEarnings: BountyHunterEarnings;
  hunterReviews: BountyHunterReviewsOutput;
  posterSpending: BountyPosterSpending;
  stats: BountyUserStats;
};


export type BountyInfoHunterReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type BountyNewApplicationNotification = {
  __typename?: 'BountyNewApplicationNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type BountyNewSubmissionNotification = {
  __typename?: 'BountyNewSubmissionNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type BountyPosterSpending = {
  __typename?: 'BountyPosterSpending';
  approximateCyclesSpent: Scalars['Int']['output'];
};

export type BountySearchConnection = {
  __typename?: 'BountySearchConnection';
  items: Array<Bounty>;
  pageInfo: PageInfo;
};

export type BountySearchInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  cycles?: InputMaybe<BountySearchInputCyclesFilter>;
  hunterId?: InputMaybe<Scalars['Int']['input']>;
  listingState?: InputMaybe<BountySearchListingStateFilter>;
  order?: InputMaybe<BountySearchOrder>;
  posterId?: InputMaybe<Scalars['Int']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BountySearchStatusFilter>;
  statuses?: InputMaybe<Array<BountySearchStatus>>;
  timeCreated?: InputMaybe<BountySearchInputTimeCreatedFilter>;
};

export type BountySearchInputCyclesFilter = {
  gte: Scalars['Int']['input'];
};

export type BountySearchInputTimeCreatedFilter = {
  lte: Scalars['DateTime']['input'];
};

export enum BountySearchListingStateFilter {
  All = 'all',
  Listed = 'listed',
  Unlisted = 'unlisted'
}

export enum BountySearchOrder {
  ApplicationCountAscending = 'applicationCountAscending',
  CreationDateDescending = 'creationDateDescending',
  CyclesDescending = 'cyclesDescending',
  LastUpdatedDateDescending = 'lastUpdatedDateDescending',
  Recommended = 'recommended'
}

export type BountySearchOutput = BountySearchConnection | UnauthorizedError | UserError;

export enum BountySearchStatus {
  Canceled = 'canceled',
  Completed = 'completed',
  InProgress = 'inProgress',
  Open = 'open'
}

export enum BountySearchStatusFilter {
  All = 'all',
  Canceled = 'canceled',
  Completed = 'completed',
  InProgress = 'inProgress',
  Open = 'open'
}

export type BountyStateChangeEvent = {
  __typename?: 'BountyStateChangeEvent';
  bounty?: Maybe<Bounty>;
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int']['output'];
  newStatus: Scalars['String']['output'];
  oldStatus?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['Date']['output'];
};

export type BountySubmission = {
  __typename?: 'BountySubmission';
  bounty?: Maybe<Bounty>;
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  repls: Array<Repl>;
  review?: Maybe<BountySubmissionReview>;
  user?: Maybe<User>;
};

export type BountySubmissionReview = {
  __typename?: 'BountySubmissionReview';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isAccepted: Scalars['Boolean']['output'];
  submission?: Maybe<BountySubmission>;
};

export type BountySubmissionReviewedNotification = {
  __typename?: 'BountySubmissionReviewedNotification';
  bounty?: Maybe<Bounty>;
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type BountyUpdate = {
  __typename?: 'BountyUpdate';
  contactInfo?: Maybe<Scalars['String']['output']>;
  cycles: Scalars['Int']['output'];
  deadline: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type BountyUpdatesEvent = {
  __typename?: 'BountyUpdatesEvent';
  after: BountyUpdate;
  before: BountyUpdate;
  bounty?: Maybe<Bounty>;
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int']['output'];
  timeCreated: Scalars['Date']['output'];
};

export type BountyUserStats = {
  __typename?: 'BountyUserStats';
  averageHunterRating: Scalars['Float']['output'];
  completedBountiesCount: Scalars['Int']['output'];
  inProgressBountiesCount: Scalars['Int']['output'];
  numHunterReviews: Scalars['Int']['output'];
  postedBountiesCount: Scalars['Int']['output'];
};

export type BountyWorkReviewedEvent = {
  __typename?: 'BountyWorkReviewedEvent';
  bounty?: Maybe<Bounty>;
  content: Scalars['String']['output'];
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int']['output'];
  isAccepted: Scalars['Boolean']['output'];
  timeCreated: Scalars['Date']['output'];
};

export type BountyWorkSubmittedEvent = {
  __typename?: 'BountyWorkSubmittedEvent';
  bounty?: Maybe<Bounty>;
  /** @deprecated use event field directly instead of querying this type */
  bountySubmission?: Maybe<BountySubmission>;
  content: Scalars['String']['output'];
  eventType: Bounty_EventseventTypeEnumType;
  id: Scalars['Int']['output'];
  repls: Array<Repl>;
  timeCreated: Scalars['Date']['output'];
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
  ReportReplComment = 'reportReplComment'
}

export type BulkModerateInputArg = {
  action: BulkModerateAction;
  commentIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  postIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  reason: Scalars['String']['input'];
  replIds?: InputMaybe<Array<Scalars['String']['input']>>;
  userIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type BulkModerateOutput = BulkModerateResult | TooManyRequestsError | UnauthorizedError | UserError;

export type BulkModerateResult = {
  __typename?: 'BulkModerateResult';
  action: Scalars['String']['output'];
  message: Scalars['String']['output'];
  reason: Scalars['String']['output'];
};

export enum CluiIndividualPlanPrefix {
  Hacker = 'hacker',
  HackerPro = 'hacker_pro'
}

export enum CluiTeamOrganizationBillingInterval {
  Annual = 'annual',
  Monthly = 'monthly'
}

export enum CluiTeamOrganizationPlanPrefix {
  TeamsPro = 'teams_pro'
}

export type CsvFileInput = {
  content: Scalars['String']['input'];
  teamId: Scalars['Int']['input'];
};

export type CancelBountyAsStaffInput = {
  bountyId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};

export type CancelBountyAsStaffOutput = Bounty | NotFoundError | UnauthorizedError | UserError;

export type CancelBountyInput = {
  id: Scalars['Int']['input'];
};

export type CancelBountyOutput = Bounty | NotFoundError | UnauthorizedError | UserError;

export type CancelInvoiceOutput = Invoice | NotFoundError | UnauthorizedError | UserError;

export enum CashOutFeePercentEnum {
  Default = 'default',
  Fifteen = 'fifteen'
}

export enum CategoryEnumType {
  Adjustments = 'adjustments',
  Credits = 'credits',
  Earnings = 'earnings',
  Marketplace = 'marketplace',
  PowerUps = 'power_ups',
  Uncategorized = 'uncategorized'
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
  Uncategorized = 'uncategorized'
}

export type ChangeLanguagetoNixOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type ChangeSubscriptionInput = {
  newPlanPeriod: SelectableSubscriptionPeriodTypesEnum;
  newPlanPrefix: SelectableSubscriptionPrefixTypesEnum;
};

export type ChangeSubscriptionOutput = ChangeSubscriptionResult | PaymentError | UnauthorizedError | UserError;

export type ChangeSubscriptionResult = {
  __typename?: 'ChangeSubscriptionResult';
  currentUser: CurrentUser;
  hostedInvoiceUrl?: Maybe<Scalars['String']['output']>;
  paymentIntentStatus?: Maybe<UpdateSubscriptionResultPaymentIntentStatus>;
};

export type CheckDomain2 = DomainStatus2 | NotFoundError | ServiceUnavailable;

export enum CheckoutSessionStatus {
  CyclesProvisioningFailed = 'cycles_provisioning_failed',
  PaymentFailed = 'payment_failed',
  ProductProvisioningFailed = 'product_provisioning_failed',
  ProvisioningCycles = 'provisioning_cycles',
  ProvisioningProduct = 'provisioning_product',
  Started = 'started',
  Succeeded = 'succeeded'
}

export type CluiComponentOutput = {
  __typename?: 'CluiComponentOutput';
  component: Scalars['String']['output'];
};

export type CluiErrorOutput = {
  __typename?: 'CluiErrorOutput';
  error: Scalars['String']['output'];
  json?: Maybe<Scalars['JSON']['output']>;
};

export type CluiMarkdownOutput = {
  __typename?: 'CluiMarkdownOutput';
  markdown: Scalars['String']['output'];
};

export type CluiMutation = {
  __typename?: 'CluiMutation';
  account?: Maybe<UserCliAccountMutation>;
  admin?: Maybe<AdminCluiMutation>;
  extension?: Maybe<ExtensionMutation>;
  moderator?: Maybe<ModeratorCluiMutation>;
  team?: Maybe<TeamMutation>;
  trash?: Maybe<TrashMutation>;
};

export type CluiOutput = CluiComponentOutput | CluiErrorOutput | CluiMarkdownOutput | CluiSuccessOutput | CluiTableOutput;

export type CluiQuery = {
  __typename?: 'CluiQuery';
  account?: Maybe<UserCliAccountQuery>;
  admin?: Maybe<AdminCluiQuery>;
  extension?: Maybe<ExtensionQuery>;
  moderator?: Maybe<ModeratorCluiQuery>;
  staff?: Maybe<StaffCluiQuery>;
  team?: Maybe<TeamQuery>;
  trash?: Maybe<TrashQuery>;
};

export type CluiSuccessOutput = {
  __typename?: 'CluiSuccessOutput';
  json?: Maybe<Scalars['JSON']['output']>;
  message: Scalars['String']['output'];
};

export type CluiTableColumn = {
  __typename?: 'CluiTableColumn';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type CluiTableOutput = {
  __typename?: 'CluiTableOutput';
  columns: Array<CluiTableColumn>;
  rows: Array<Scalars['JSON']['output']>;
};

export type ClusterMetadata = {
  conmanURL: Scalars['String']['input'];
  gurl: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type CodexFeedback2 = {
  __typename?: 'CodexFeedback2';
  feedback: CodexFeedbackEnum;
  id: Scalars['String']['output'];
};

export enum CodexFeedback2CodexInferenceClassEnum {
  Chat = 'chat',
  Explanation = 'explanation',
  Generation = 'generation',
  Transformation = 'transformation'
}

export type CodexFeedback2Input = {
  feedback: CodexFeedbackEnum;
  inferenceClass: CodexFeedback2CodexInferenceClassEnum;
  inferenceId: Scalars['String']['input'];
};

export type CodexFeedback2Output = CodexFeedback2 | NotFoundError | UnauthorizedError;

export enum CodexFeedbackEnum {
  No = 'no',
  Yes = 'yes'
}

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String']['output'];
  canComment: Scalars['Boolean']['output'];
  canEdit: Scalars['Boolean']['output'];
  canReport: Scalars['Boolean']['output'];
  canSelectAsAnswer: Scalars['Boolean']['output'];
  canUnselectAsAnswer: Scalars['Boolean']['output'];
  canVote: Scalars['Boolean']['output'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  hasReported: Scalars['Boolean']['output'];
  hasVoted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isAnswer: Scalars['Boolean']['output'];
  isAuthor: Scalars['Boolean']['output'];
  parentComment?: Maybe<Comment>;
  post?: Maybe<Post>;
  preview: Scalars['String']['output'];
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  user?: Maybe<User>;
  voteCount: Scalars['Int']['output'];
};


export type CommentPreviewArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
  removeMarkdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  items: Array<Comment>;
  pageInfo: PageInfo;
};

export type CompleteUserCourseLessonInput = {
  userLessonId: Scalars['Int']['input'];
};

export type ConfirmInvoiceOutput = Invoice | NotFoundError | UnauthorizedError | UserError;

export type ConnectGoogleClassroomInput = {
  courseId: Scalars['String']['input'];
  courseName: Scalars['String']['input'];
  students: Array<InputMaybe<ConnectGoogleClassroomStudentInput>>;
  teamId: Scalars['Int']['input'];
};

export type ConnectGoogleClassroomOutput = GoogleClassroom | NotFoundError | UserError;

export type ConnectGoogleClassroomStudentInput = {
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type CopyStacksToTeamInput = {
  destinationTeamId: Scalars['Int']['input'];
  sourceTeamId: Scalars['Int']['input'];
  stacks: Array<Stacks>;
};

export type CopyStacksToTeamOutput = NotFoundError | Team | UnauthorizedError | User | UserError;

export type CopyTeamTemplateInput = {
  destinationStackId?: InputMaybe<Scalars['Int']['input']>;
  destinationTeamId: Scalars['Int']['input'];
  templateId: Scalars['Int']['input'];
};

export type CopyTeamTemplateOutput = NotFoundError | Team | UnauthorizedError | User | UserError;

export type Coupon = {
  __typename?: 'Coupon';
  amountOff?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  months?: Maybe<Scalars['Int']['output']>;
  percentOff?: Maybe<Scalars['Float']['output']>;
  repeating: Scalars['Boolean']['output'];
};

export type CouponQueryOutput = Coupon | UserError;

export type CourseLessonsRepls = {
  __typename?: 'CourseLessonsRepls';
  results: Array<LessonRepl>;
};

export type CourseLessonsReplsOutput = CourseLessonsRepls | NotFoundError;

export type CoverImage = {
  __typename?: 'CoverImage';
  offsetY: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type CreateAnnotationAnchorOutput = AnnotationAnchor | UserError;

export type CreateAnnotationMessageOutput = AnnotationAnchor | UserError;

export type CreateAsanaFeedbackTaskBodyInput = {
  currentUser: CreateAsanaFeedbackTaskUser;
  description: Scalars['String']['input'];
  loomUrl?: InputMaybe<Scalars['String']['input']>;
  pageUrl: Scalars['String']['input'];
  replitVersion?: InputMaybe<Scalars['String']['input']>;
  userAgent: Scalars['String']['input'];
};

export type CreateAsanaFeedbackTaskBodyInputReturnGid = {
  currentUser: CreateAsanaFeedbackTaskUserReturnGid;
  description: Scalars['String']['input'];
  loomUrl?: InputMaybe<Scalars['String']['input']>;
  pageUrl: Scalars['String']['input'];
  replitVersion?: InputMaybe<Scalars['String']['input']>;
  userAgent: Scalars['String']['input'];
};

export type CreateAsanaFeedbackTaskInput = {
  body: CreateAsanaFeedbackTaskBodyInput;
  membership: CreateAsanaFeedbackTaskMembership;
  project: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateAsanaFeedbackTaskInputReturnGid = {
  body: CreateAsanaFeedbackTaskBodyInputReturnGid;
  membership: CreateAsanaFeedbackTaskMembershipReturnGid;
  project: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateAsanaFeedbackTaskMembership = {
  project: Scalars['String']['input'];
  section: Scalars['String']['input'];
};

export type CreateAsanaFeedbackTaskMembershipReturnGid = {
  project: Scalars['String']['input'];
  section: Scalars['String']['input'];
};

export type CreateAsanaFeedbackTaskOutput = CreateAsanaFeedbackTaskSuccess | TooManyRequestsError | UnauthorizedError | UserError;

export type CreateAsanaFeedbackTaskOutputReturnGid = CreateAsanaFeedbackTaskSuccessReturnGid | TooManyRequestsError | UnauthorizedError | UserError;

export type CreateAsanaFeedbackTaskSuccess = {
  __typename?: 'CreateAsanaFeedbackTaskSuccess';
  isSuccess: Scalars['Boolean']['output'];
};

export type CreateAsanaFeedbackTaskSuccessReturnGid = {
  __typename?: 'CreateAsanaFeedbackTaskSuccessReturnGID';
  asanaGID: Scalars['String']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type CreateAsanaFeedbackTaskUser = {
  daysSinceSignup: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  isExplorer: Scalars['Boolean']['input'];
  isHacker: Scalars['Boolean']['input'];
  isTeacher: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type CreateAsanaFeedbackTaskUserReturnGid = {
  daysSinceSignup: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  isExplorer: Scalars['Boolean']['input'];
  isHacker: Scalars['Boolean']['input'];
  isTeacher: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type CreateAsanaSupportTaskBodyInput = {
  currentUser: CreateAsanaSupportTaskUser;
  loomUrl?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  pageUrl: Scalars['String']['input'];
  userAgent: Scalars['String']['input'];
};

export type CreateAsanaSupportTaskInput = {
  board: Scalars['String']['input'];
  body: CreateAsanaSupportTaskBodyInput;
  title: Scalars['String']['input'];
};

export type CreateAsanaSupportTaskOutput = CreateAsanaSupportTaskSuccess | TooManyRequestsError | UnauthorizedError | UserError;

export type CreateAsanaSupportTaskSuccess = {
  __typename?: 'CreateAsanaSupportTaskSuccess';
  isSuccess: Scalars['Boolean']['output'];
};

export type CreateAsanaSupportTaskUser = {
  daysSinceSignup: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  isExplorer: Scalars['Boolean']['input'];
  isHacker: Scalars['Boolean']['input'];
  isTeacher: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type CreateBountyApplicationInput = {
  bountyId: Scalars['Int']['input'];
  contactInfo: Scalars['String']['input'];
  content: Scalars['String']['input'];
  hcaptchaResponse?: InputMaybe<Scalars['String']['input']>;
  hcaptchaSiteKey?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBountyApplicationOutput = BountyApplication | NotFoundError | TooManyRequestsError | UnauthorizedError | UserError;

export type CreateBountyInput = {
  contactInfo: Scalars['String']['input'];
  contactMethod: BountyContactMethod;
  cycles: Scalars['Int']['input'];
  deadline: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  isUnlisted?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type CreateBountyOutput = Bounty | TooManyRequestsError | UnauthorizedError | UserError;

export type CreateBountySubmissionInput = {
  bountyId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  replIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateBountySubmissionOutput = BountySubmission | NotFoundError | UnauthorizedError | UserError;

export type CreateBountySubmissionReviewInput = {
  bountySubmissionId: Scalars['Int']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  isAccepted: Scalars['Boolean']['input'];
};

export type CreateBountySubmissionReviewOutput = BountySubmissionReview | NotFoundError | UnauthorizedError | UserError;

export type CreateCyclesStripeCheckoutSessionInput = {
  purchaseType: CyclesPurchaseType;
  quantity: Scalars['Int']['input'];
  redirectDestination?: InputMaybe<CyclesRedirectDestinationType>;
  redirectReplTitle?: InputMaybe<Scalars['String']['input']>;
  redirectTipSurface?: InputMaybe<CyclesCheckoutRedirectTipSurface>;
};

export type CreateCyclesStripeCheckoutSessionResult = {
  __typename?: 'CreateCyclesStripeCheckoutSessionResult';
  sessionUrl: Scalars['String']['output'];
};

export type CreateExtensionOutput = Extension | TooManyRequestsError | UnauthorizedError | UserError;

export type CreateGithubAccessTokenInput = {
  owner: Scalars['String']['input'];
  repository: Scalars['String']['input'];
};

export type CreateGithubAccessTokenOutput = CreateGithubAccessTokenResult | ServiceUnavailable | UnauthorizedError | UserError;

export type CreateGithubAccessTokenResult = {
  __typename?: 'CreateGithubAccessTokenResult';
  token: Scalars['String']['output'];
};

export type CreateGithubRepoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  ownerType: GithubRepoOwnerType;
};

export type CreateGithubRepoOutput = CreateGithubRepoResult | UnauthorizedError | UserError;

export type CreateGithubRepoResult = {
  __typename?: 'CreateGithubRepoResult';
  remoteUrl: Scalars['String']['output'];
};

export type CreateInvoiceOutput = Invoice | UnauthorizedError | UserError;

export type CreateLanguageConnectionMetadataOutput = GovalMetadata | UserError;

export type CreateNeonDatabaseInput = {
  replId: Scalars['String']['input'];
};

export type CreateNeonDatabaseOutput = CreateNeonDatabaseResult | UnauthorizedError | UserError;

export type CreateNeonDatabaseResult = {
  __typename?: 'CreateNeonDatabaseResult';
  connectionString: Scalars['String']['output'];
  databaseId: Scalars['Int']['output'];
  databaseName: Scalars['String']['output'];
  isFrozen: Scalars['Boolean']['output'];
  projectId: Scalars['String']['output'];
};

export type CreateNewTeamsEduOrganizationInput = {
  orgName: Scalars['String']['input'];
};

export type CreateNewTeamsEduOrganizationOutput = TeamOrganization | UnauthorizedError | UserError;

export type CreateReplAsTemplateInput = {
  allowSelfGrouping?: InputMaybe<Scalars['Boolean']['input']>;
  availableEndDate?: InputMaybe<Scalars['String']['input']>;
  availableStartDate?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isGroupProject?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['String']['input']>;
  replReleaseId?: InputMaybe<Scalars['String']['input']>;
  restrictAfterSubmit?: InputMaybe<Scalars['Boolean']['input']>;
  selfGroupSize?: InputMaybe<Scalars['Int']['input']>;
  stackId?: InputMaybe<Scalars['Int']['input']>;
  teamId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateReplAsTemplateOutput = ReplTemplate | UserError;

export type CreateReplCommentInput = {
  body: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type CreateReplCommentOutput = ReplComment | UnauthorizedError | UserError;

export type CreateReplCommentReplyInput = {
  body: Scalars['String']['input'];
  replCommentId: Scalars['Int']['input'];
};

export type CreateReplCommentReplyOutput = ReplComment | UnauthorizedError | UserError;

export type CreateReplDeployemntInput = {
  description: Scalars['String']['input'];
  iconUrl: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type CreateReplDeployemntOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type CreateReplInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  forkToPersonal?: InputMaybe<Scalars['Boolean']['input']>;
  gitRemoteUrl?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['String']['input']>;
  replReleaseId?: InputMaybe<Scalars['String']['input']>;
  stackId?: InputMaybe<Scalars['Int']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReplOptionGroup = {
  __typename?: 'CreateReplOptionGroup';
  name: Scalars['String']['output'];
  options: Array<CreateReplOptions>;
};

export type CreateReplOptions = Language | Repl;

export type CreateReplOutput = Repl | UserError;

export type CreateReplPost2Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  replId: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReplPost2Output = NotFoundError | Post | UnauthorizedError | UserError;

export type CreateReplReleaseInput = {
  description: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type CreateReplReleaseOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type CreateReplRunOutput = NotFoundError | Repl | UserError;

export type CreateReplSubmissionGroupInput = {
  teamId: Scalars['Int']['input'];
  templateId: Scalars['Int']['input'];
};

export type CreateReplSubmissionGroupOutput = NotFoundError | ReplSubmission | ServiceUnavailable | UnauthorizedError | UserError;

export type CreateReplSubmissionOutput = Repl | UserError;

export type CreateReplTemplateInput = {
  dueDate?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  replId: Scalars['String']['input'];
};

export type CreateReplTemplateModelSolutionForkInput = {
  solutionId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};

export type CreateReplTemplateModelSolutionForkOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type CreateReplTemplateModelSolutionInput = {
  teamId: Scalars['Int']['input'];
  templateId: Scalars['Int']['input'];
  visibleAfterDueDate?: InputMaybe<Scalars['Boolean']['input']>;
  visibleAfterPassingTests?: InputMaybe<Scalars['Boolean']['input']>;
  visibleAfterSubmitting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateReplTemplateModelSolutionOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type CreateReplTemplateOutput = ReplTemplate | UserError;

export type CreateReplUnitTestInput = {
  code: Scalars['String']['input'];
  failureMessage?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type CreateReplUnitTestMetaInput = {
  imports?: InputMaybe<Scalars['String']['input']>;
  initialization?: InputMaybe<Scalars['String']['input']>;
  replId: Scalars['String']['input'];
  setup?: InputMaybe<Scalars['String']['input']>;
  tearDown?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReplitOneTimeCheckoutSessionInput = {
  cyclesAutoRefillConfiguration?: InputMaybe<UpdateCyclesAutoRefillConfigurationInput>;
  cyclesQuantity: Scalars['Int']['input'];
  postPurchasePowerUp?: InputMaybe<PostPurchasePowerUp>;
};

export type CreateReplitOneTimeCheckoutSessionOutput = CreateReplitOneTimeCheckoutSessionResult | PaymentError | UnauthorizedError | UserError;

export type CreateReplitOneTimeCheckoutSessionResult = {
  __typename?: 'CreateReplitOneTimeCheckoutSessionResult';
  checkoutSession: ReplitCheckoutSession;
  clientSecret: Scalars['String']['output'];
  currentUser: CurrentUser;
};

export type CreateReplitPlanCheckoutSessionInput = {
  planPeriod: SelectableSubscriptionPeriodTypesEnum;
  planPrefix: SelectableSubscriptionPrefixTypesEnum;
};

export type CreateReplitPlanCheckoutSessionOutput = CreateReplitPlanCheckoutSessionResult | UnauthorizedError | UserError;

export type CreateReplitPlanCheckoutSessionResult = {
  __typename?: 'CreateReplitPlanCheckoutSessionResult';
  checkoutSession: ReplitCheckoutSession;
  clientSecret: Scalars['String']['output'];
  currentUser: CurrentUser;
};

export type CreateSetupIntentOutput = CreateSetupIntentResult | UnauthorizedError | UserError;

export type CreateSetupIntentResult = {
  __typename?: 'CreateSetupIntentResult';
  clientSecret: Scalars['String']['output'];
};

export type CreateStackInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateStackOutput = Team | UnauthorizedError | User | UserError;

export type CreateTeacherVerificationResponseInput = {
  howManyLearners: Scalars['String']['input'];
  orgNames: Scalars['String']['input'];
  referringEmailOrName?: InputMaybe<Scalars['String']['input']>;
  useCase: Scalars['String']['input'];
  website: Scalars['String']['input'];
};

export type CreateTeacherVerificationResponseOutput = TeacherVerification | UnauthorizedError | UserError;

export type CreateTeamInviteInput = {
  teamId: Scalars['Int']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type CreateTeamInviteLinkOutput = Team | UserError;

export type CreateTeamInviteOutput = Team | UserError;

export type CreateTeamOrgInviteInput = {
  orgId: Scalars['Int']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type CreateTeamOrgInviteLinkOutput = NotFoundError | TeamOrganization | UnauthorizedError | UserError;

export type CreateTeamOrgInviteOutput = NotFoundError | TeamOrganization | UnauthorizedError | UserError;

export type CreateTeamV2Input = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['Int']['input']>;
  privacyInvite?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};

export type CreateTeamV2Output = Team | UnauthorizedError | UserError;

export type CreateTemplateTestInput = {
  input: Scalars['String']['input'];
  name: Scalars['String']['input'];
  output: Scalars['String']['input'];
  templateId: Scalars['Int']['input'];
  type: ReplTemplateTestType;
};

export type CreateThemeInput = {
  colorScheme: CustomThemeColorScheme;
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type CreateUserCourseInput = {
  courseSlug: Scalars['String']['input'];
};

export type CreateUserCourseLessonInput = {
  lessonSlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  replId?: InputMaybe<Scalars['String']['input']>;
  userCourseId: Scalars['Int']['input'];
};

export type CreateUserCourseLessonOutput = NotFoundError | UnauthorizedError | UserCourseLessonResult | UserError;

export type CreateUserCourseOutput = NotFoundError | UnauthorizedError | UserCourseResult | UserError;

export type CurrentUser = {
  __typename?: 'CurrentUser';
  activeThemeVersion?: Maybe<ThemeVersion>;
  allFlags: Array<Flag>;
  /** @deprecated No longer supported. Use currentUser.allFlags instead */
  allGates: Array<UserGate>;
  auth?: Maybe<UserAuth>;
  authoredThemes: CurrentUserAuthoredThemesOutput;
  bannedFromBoardsReason?: Maybe<Scalars['String']['output']>;
  billingInfo?: Maybe<BillingInfo>;
  bio?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer needed to gate access to applying - anyone can apply */
  canBeBountySolver: Scalars['Boolean']['output'];
  canBoost: Scalars['Boolean']['output'];
  canCreateNewFreeTeam: Scalars['Boolean']['output'];
  canUpdate: Scalars['Boolean']['output'];
  cannySSOToken: Scalars['String']['output'];
  capabilities?: Maybe<SubscriptionCapabilities>;
  clui: Scalars['JSON']['output'];
  course: UserCourseOutput;
  courses: Array<UserCourse>;
  coverImage?: Maybe<CoverImage>;
  createReplOptions: Array<CreateReplOptionGroup>;
  customer?: Maybe<Customer>;
  cycles: Cycles;
  cyclesAutoRefillConfiguration?: Maybe<UserCyclesAutoRefillConfigurationOutput>;
  daysSinceSignup: Scalars['Int']['output'];
  displayName: Scalars['String']['output'];
  editorPreferences: EditorPreferences;
  egress: CurrentUserEgressOutput;
  email: Scalars['String']['output'];
  emailNotifications: Scalars['Boolean']['output'];
  favoriteCreateReplOptions: Array<CreateReplOptions>;
  firstName?: Maybe<Scalars['String']['output']>;
  flag: Flag;
  followCount: Scalars['Int']['output'];
  followerCount: Scalars['Int']['output'];
  followers: UserConnection;
  follows: UserConnection;
  freeTeams: Array<Team>;
  fullName: Scalars['String']['output'];
  gate: Scalars['Boolean']['output'];
  gateVariation?: Maybe<Scalars['String']['output']>;
  gitHubInfo?: Maybe<GitHubInfo>;
  googleClassroomTeams: Array<Team>;
  /** @deprecated This experiment is done */
  hasAppsOnboarding: Scalars['Boolean']['output'];
  /** @deprecated Support for contextual AI features alone is a legacy feature. Use currentUser.powerUpsByType.ghostwriter.active instead */
  hasContextualAIFeatures: Scalars['Boolean']['output'];
  hasGoogleClassroomScope: Scalars['Boolean']['output'];
  /** @deprecated This experiment is done */
  hasOnboarding: Scalars['Boolean']['output'];
  hasPrivacyRole: Scalars['Boolean']['output'];
  hasPrivacyUpdate: Scalars['Boolean']['output'];
  hasProfileImage: Scalars['Boolean']['output'];
  hasRepl: Scalars['Boolean']['output'];
  hasRole: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  installedThemes: CurrentUserInstalledThemesOutput;
  isBannedFromBoards: Scalars['Boolean']['output'];
  isFirewallMode: Scalars['Boolean']['output'];
  /** @deprecated Use `subscriptionIsType` or `userSubscriptionType` instead */
  isHacker: Scalars['Boolean']['output'];
  isImpersonated: Scalars['Boolean']['output'];
  isLoggedIn: Scalars['Boolean']['output'];
  isSubscribed: Scalars['Boolean']['output'];
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  keybindings: Keybindings;
  languages: Array<Language>;
  lastName?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  notificationCount: Scalars['Int']['output'];
  paginatedReplSearch: ReplConnection;
  paymentMethod?: Maybe<UserPaymentMethod>;
  /** @deprecated Use userPowerUpsByType instead */
  powerUpCosts: UserPowerUpCost;
  /** @deprecated 2022 Repricing is over */
  pricesUpdate: CurrentUserPricesUpdateOptionOutput;
  publishableReplSearch: Array<Repl>;
  recentReplsCount: Scalars['Int']['output'];
  replContinent: ReplContinent;
  replFolder?: Maybe<ReplFolder>;
  replFolderByPath?: Maybe<ReplFolder>;
  replLesson?: Maybe<UserCourseLessonOutput>;
  replPowerUps: Array<ReplPowerUpDescriptionType>;
  replPowerUpsByMethodOfPayment: CurrentUserReplPowerUpsByMethodOfPaymentOutput;
  replSearch: Array<Repl>;
  repositories?: Maybe<RepositoriesOutput>;
  roles: Array<UserRole>;
  search: UserSearchResults;
  showPresence: Scalars['Boolean']['output'];
  showVerifyTeacherBanner: Scalars['Boolean']['output'];
  sidebarClosed: Scalars['Boolean']['output'];
  signupMethod?: Maybe<Scalars['String']['output']>;
  socialSignup: Scalars['Boolean']['output'];
  socials: Array<UserSocial>;
  state?: Maybe<UserState>;
  storageInfo: StorageInfo;
  subscriptionIsType: Scalars['Boolean']['output'];
  teamOrganizations: Array<TeamOrganization>;
  teams: Array<Team>;
  teamsCount: Scalars['Int']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  tourSeen: Scalars['Boolean']['output'];
  toursSeen: Array<TourSeen>;
  url: Scalars['String']['output'];
  /** @deprecated Use userPowerUpsByType instead */
  userPowerUps: Array<UserPowerUpDescriptionType>;
  userPowerUpsByType: UserPowerUpsTypesOutput;
  userSubscriptionType?: Maybe<UserSubscriptionTypeEnum>;
  username: Scalars['String']['output'];
  usernameRepl?: Maybe<Repl>;
  warnings?: Maybe<Array<Maybe<Warning>>>;
};


export type CurrentUserAuthArgs = {
  provider: UserAuthProviders;
};


export type CurrentUserAuthoredThemesArgs = {
  input: CurrentUserAuthoredThemesInput;
};


export type CurrentUserCanUpdateArgs = {
  column: UserUpdateColumns;
};


export type CurrentUserCourseArgs = {
  slug: Scalars['String']['input'];
};


export type CurrentUserFlagArgs = {
  controlName: Scalars['String']['input'];
  type?: InputMaybe<UserFlagValueType>;
};


export type CurrentUserFollowersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type CurrentUserFollowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type CurrentUserGateArgs = {
  feature: Scalars['String']['input'];
};


export type CurrentUserGateVariationArgs = {
  feature: Scalars['String']['input'];
};


export type CurrentUserHasRoleArgs = {
  role: UserRoles;
};


export type CurrentUserInstalledThemesArgs = {
  input: CurrentUserInstalledThemesInput;
};


export type CurrentUserKeybindingsArgs = {
  environment: KeybindingsEnvironmentEnum;
  platform: KeybindingsPlatformEnum;
};


export type CurrentUserLanguagesArgs = {
  includeInterestedIn?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type CurrentUserPaginatedReplSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  excludeMultiplayer?: InputMaybe<Scalars['Boolean']['input']>;
  excludePrivate?: InputMaybe<Scalars['Boolean']['input']>;
  search: Scalars['String']['input'];
};


export type CurrentUserPublishableReplSearchArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type CurrentUserRecentReplsCountArgs = {
  filter?: InputMaybe<RecentReplsFilter>;
};


export type CurrentUserReplFolderArgs = {
  id: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type CurrentUserReplFolderByPathArgs = {
  path: Scalars['String']['input'];
};


export type CurrentUserReplLessonArgs = {
  replId: Scalars['String']['input'];
};


export type CurrentUserReplPowerUpsByMethodOfPaymentArgs = {
  methodOfPayment?: InputMaybe<PowerUpMethodOfPayment>;
};


export type CurrentUserReplSearchArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  excludeMultiplayer?: InputMaybe<Scalars['Boolean']['input']>;
  excludePrivate?: InputMaybe<Scalars['Boolean']['input']>;
  search: Scalars['String']['input'];
};


export type CurrentUserRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count: Scalars['Int']['input'];
  privacy?: InputMaybe<RepositoryPrivacy>;
};


export type CurrentUserRolesArgs = {
  only?: InputMaybe<Array<UserRoles>>;
};


export type CurrentUserSubscriptionIsTypeArgs = {
  subscriptionType: UserSubscriptionTypeEnum;
};


export type CurrentUserTeamOrganizationsArgs = {
  subscriptionType?: InputMaybe<TeamOrganizationSubscriptionTypeEnum>;
};


export type CurrentUserTourSeenArgs = {
  name: Scalars['String']['input'];
};


export type CurrentUserToursSeenArgs = {
  tours: Array<Scalars['String']['input']>;
};

export type CurrentUserActiveCyclesSubscription = CyclesSubscription | NotFoundError;

export type CurrentUserAuthoredThemesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type CurrentUserAuthoredThemesOutput = CustomThemeConnection | UnauthorizedError | UserError;

export type CurrentUserEgressOutput = UnauthorizedError | UserEgressSummary | UserError;

export type CurrentUserInstalledThemesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type CurrentUserInstalledThemesOutput = InstalledThemeConnection | UnauthorizedError | UserError;

export enum CurrentUserPricesUpdateOption {
  General = 'general',
  LegacyCycles = 'legacy_cycles',
  LegacyHacker = 'legacy_hacker'
}

export type CurrentUserPricesUpdateOptionOutput = CurrentUserPricesUpdateOptionOutputObject | UnauthorizedError | UserError;

export type CurrentUserPricesUpdateOptionOutputObject = {
  __typename?: 'CurrentUserPricesUpdateOptionOutputObject';
  option?: Maybe<CurrentUserPricesUpdateOption>;
};

export type CurrentUserReplPowerUpsByMethodOfPaymentOutput = CurrentUserReplPowerUpsByMethodOfPaymentSuccess | UnauthorizedError;

export type CurrentUserReplPowerUpsByMethodOfPaymentSuccess = {
  __typename?: 'CurrentUserReplPowerUpsByMethodOfPaymentSuccess';
  powerUps: Array<RenderedPowerUpType>;
};

export type Curriculum = {
  __typename?: 'Curriculum';
  contents: CurriculumContentOutput;
  coverPhotoUrl?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  languages: Array<Maybe<Language>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type CurriculumContentsArgs = {
  versionNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type CurriculumBySlugOutput = Curriculum | NotFoundError | UnauthorizedError;

export type CurriculumContent = {
  __typename?: 'CurriculumContent';
  units: Array<Stack>;
  versionNumber: Scalars['Int']['output'];
};

export type CurriculumContentOutput = CurriculumContent | NotFoundError | UnauthorizedError | UserError;

export enum CurriculumVersionStatus {
  Draft = 'draft',
  InReview = 'in_review',
  Published = 'published'
}

export type CustomTheme = {
  __typename?: 'CustomTheme';
  author?: Maybe<User>;
  canCurrentUserInstallUpdate: Scalars['Boolean']['output'];
  colorScheme: CustomThemeColorScheme;
  currentUserInstalledThemeVersion?: Maybe<ThemeVersion>;
  currentUserTotalTips?: Maybe<Scalars['Int']['output']>;
  draftThemeVersion?: Maybe<ThemeVersion>;
  editPageUrl?: Maybe<Scalars['String']['output']>;
  hasUnpublishedChanges: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isCurrentUserThemeAuthor: Scalars['Boolean']['output'];
  isInstalledByCurrentUser: Scalars['Boolean']['output'];
  latestThemeVersion?: Maybe<ThemeVersion>;
  numInstalls: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  status: CustomThemeStatus;
  title: Scalars['String']['output'];
  topTippers: Array<TipperUser>;
  totalCyclesTips: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type CustomThemeByIdInput = {
  themeId: Scalars['Int']['input'];
};

export type CustomThemeByIdOutput = CustomTheme | NotFoundError;

export enum CustomThemeColorScheme {
  Dark = 'dark',
  Light = 'light'
}

export type CustomThemeConnection = {
  __typename?: 'CustomThemeConnection';
  items: Array<CustomTheme>;
  pageInfo: PageInfo;
};

export enum CustomThemeStatus {
  Deleted = 'deleted',
  Hidden = 'hidden',
  Public = 'public'
}

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['Int']['output'];
  paymentMethod?: Maybe<CustomerspaymentMethodEnumType>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['Date']['output'];
  timeDeleted?: Maybe<Scalars['Date']['output']>;
  timeUpdated?: Maybe<Scalars['Date']['output']>;
};

export type Cycles = {
  __typename?: 'Cycles';
  balance: CyclesBalanceOutput;
  forecast: CyclesForecastOutput;
  hasSubscription: Scalars['Boolean']['output'];
  subscription?: Maybe<CurrentUserActiveCyclesSubscription>;
  transactions?: Maybe<CyclesTransactionConnection>;
};


export type CyclesForecastArgs = {
  daysFromNow: Scalars['Int']['input'];
};


export type CyclesTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type CyclesAutoRefillConfiguration = {
  __typename?: 'CyclesAutoRefillConfiguration';
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  monthlyBudget?: Maybe<Scalars['Int']['output']>;
  refillAmount: Scalars['Int']['output'];
};

export type CyclesBalance = {
  __typename?: 'CyclesBalance';
  cycles: Scalars['Float']['output'];
  lastUpdated: Scalars['DateTime']['output'];
};

export type CyclesBalanceOutput = CyclesBalance | ServiceUnavailable | UnauthorizedError;

export enum CyclesCheckoutPurchasePowerUpType {
  Ghostwriter = 'ghostwriter'
}

export type CyclesCheckoutRedirectTipSurface = {
  desiredAmount: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  surfaceType: CyclesCheckoutTippableSurfaceType;
  username: Scalars['String']['input'];
};

export enum CyclesCheckoutTippableSurfaceType {
  Repl = 'repl',
  Theme = 'theme'
}

export type CyclesForecast = {
  __typename?: 'CyclesForecast';
  estimatedCyclesSpend: Scalars['Int']['output'];
  hasSufficientCycles: Scalars['Boolean']['output'];
};

export type CyclesForecastOutput = CyclesForecast | ServiceUnavailable | UnauthorizedError | UserError;

export enum CyclesPurchaseType {
  OneTime = 'oneTime',
  /** @deprecated Cycles subscriptions are deprecated. Please set up Auto-Refill instead: replit.com/cycles/set-up-auto-refill */
  RecurringChargeNow = 'recurringChargeNow'
}

export enum CyclesRedirectDestinationType {
  Account = 'account',
  Bounties = 'bounties',
  CyclesPage = 'cyclesPage',
  NewReplModal = 'newReplModal',
  Profile = 'profile',
  TipSurface = 'tipSurface',
  Workspace = 'workspace'
}

export type CyclesSubscription = {
  __typename?: 'CyclesSubscription';
  cycles: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  nextRefillDate?: Maybe<Scalars['DateTime']['output']>;
};

export type CyclesTransaction = {
  __typename?: 'CyclesTransaction';
  category?: Maybe<CategoryEnumType>;
  category_sub_type?: Maybe<CategorySubTypeEnumType>;
  cycles: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  principal_user_id: Scalars['Int']['output'];
  time_created?: Maybe<Scalars['DateTime']['output']>;
  type: CyclesTransactionTypeEnumType;
};

export type CyclesTransactionConnection = {
  __typename?: 'CyclesTransactionConnection';
  items: Array<CyclesTransaction>;
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
  Transferred = 'transferred'
}

export type DashboardItem = Repl | ReplFolder;

export type Database = {
  __typename?: 'Database';
  id: Scalars['ID']['output'];
  /** @deprecated Clients should no longer use a JWT to talk directly to kv.repl.it. Use sibling fields on Database instead. */
  jwt: Scalars['String']['output'];
  keysCount?: Maybe<Scalars['Int']['output']>;
  sizeMB?: Maybe<Scalars['Float']['output']>;
};

export type DeleteMultiplayerInviteLink = Repl | UserError;

export type DeleteNeonDatabaseInput = {
  databaseId: Scalars['Int']['input'];
  replId: Scalars['String']['input'];
};

export type DeleteNeonDatabaseOutput = DeleteNeonDatabaseResult | UnauthorizedError | UserError;

export type DeleteNeonDatabaseResult = {
  __typename?: 'DeleteNeonDatabaseResult';
  success: Scalars['Boolean']['output'];
};

export type DeleteReplDeploymentInput = {
  replId: Scalars['String']['input'];
};

export type DeleteReplDeploymentOutput = NotFoundError | Repl | UserError;

export type DeleteReplIdentityAllowedRepl = NotFoundError | Repl | UnauthorizedError;

export type DeleteReplIdentityAllowedReplInput = {
  replId: Scalars['String']['input'];
};

export type DeleteReplTemplateOutput = ReplTemplate | UserError;

export type DeleteStackOutput = NotFoundError | Team | UnauthorizedError | User | UserError;

export type DeleteTeamInput = {
  cancelationReason?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['Int']['input'];
};

export type DeleteTeamInviteInput = {
  inviteId?: InputMaybe<Scalars['Int']['input']>;
  teamId: Scalars['Int']['input'];
  usernameOrEmail?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteTeamInviteLinkOutput = Team | UserError;

export type DeleteTeamInviteOutput = Team | UserError;

export type DeleteTeamOrgInviteInput = {
  inviteId: Scalars['Int']['input'];
  orgId: Scalars['Int']['input'];
};

export type DeleteTeamOrgInviteLinkOutput = NotFoundError | TeamOrganization | UnauthorizedError;

export type DeleteTeamOrgInviteOutput = NotFoundError | TeamOrganization | UnauthorizedError | UserError;

export type DeleteTeamOrganizationInput = {
  orgId: Scalars['Int']['input'];
};

export type DeleteTeamOrganizationMemberInput = {
  memberId: Scalars['Int']['input'];
  orgId: Scalars['Int']['input'];
  retainTeamAccess?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeleteTeamOrganizationMemberOutput = NotFoundError | TeamOrganization | UnauthorizedError;

export type DeleteTeamOrganizationOutput = NotFoundError | TeamOrganization | UnauthorizedError;

export type DeleteThemeInput = {
  themeId: Scalars['Int']['input'];
};

export type DeleteThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type DeleteThreadMessageOutput = AnnotationAnchor | UserError;

export type DeletedProjectAndSubmissionOutput = Team | UserError;

export type DenyInvoiceOutput = Invoice | NotFoundError | UnauthorizedError | UserError;

export type DeployExtensionOutput = Extension | TooManyRequestsError | UserError;

export type DeployHostingBuild2Commands = {
  build?: InputMaybe<Scalars['String']['input']>;
  run: Scalars['String']['input'];
};

export type DeployHostingBuild2EnvVar = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type DeployHostingBuild2Input = {
  appType?: InputMaybe<DeployHostingBuildAppType>;
  commands: DeployHostingBuild2Commands;
  envVars?: InputMaybe<Array<DeployHostingBuild2EnvVar>>;
  provider?: InputMaybe<HostingBuildProvider>;
  replId: Scalars['String']['input'];
  subdomain?: InputMaybe<Scalars['String']['input']>;
  targetDeploymentId?: InputMaybe<Scalars['String']['input']>;
};

export type DeployHostingBuild2Output = DeployHostingBuild2Result | NotFoundError | UnauthorizedError | UserError;

export type DeployHostingBuild2Result = {
  __typename?: 'DeployHostingBuild2Result';
  build: HostingBuild;
  targetDeployment: HostingDeployment;
};

export enum DeployHostingBuildAppType {
  CloudRun = 'cloud_run',
  Server = 'server',
  Static = 'static',
  Worker = 'worker'
}

export type DisconnectGoogleClassroomInput = {
  teamId: Scalars['Int']['input'];
};

export type DisconnectGoogleClassroomOutput = NotFoundError | Team | UnauthorizedError | UserError;

export type DiscountInfo = {
  __typename?: 'DiscountInfo';
  amount?: Maybe<Scalars['Int']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  percent?: Maybe<Scalars['Int']['output']>;
};

export type Domain = {
  __typename?: 'Domain';
  domain: Scalars['String']['output'];
  hosting_deployment_id?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
};

export type DomainStatus2 = {
  __typename?: 'DomainStatus2';
  records?: Maybe<DomainStatusRecords>;
  retry: Scalars['Boolean']['output'];
  status?: Maybe<Scalars['String']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type DomainStatusRecords = {
  __typename?: 'DomainStatusRecords';
  A?: Maybe<Array<Scalars['String']['output']>>;
  CNAME?: Maybe<Array<Scalars['String']['output']>>;
  TXT?: Maybe<Array<Scalars['String']['output']>>;
};

export type EditBountyInput = {
  bountyId: Scalars['Int']['input'];
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  cycles?: InputMaybe<Scalars['Int']['input']>;
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditBountyOutput = Bounty | NotFoundError | UnauthorizedError | UserError;

export type EditRequest = {
  __typename?: 'EditRequest';
  id: Scalars['Int']['output'];
  repl?: Maybe<Repl>;
  requester?: Maybe<User>;
  status?: Maybe<EditRequestStatus>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
};

export type EditRequestAcceptedNotification = {
  __typename?: 'EditRequestAcceptedNotification';
  creator?: Maybe<User>;
  editRequest?: Maybe<EditRequest>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type EditRequestCreatedNotification = {
  __typename?: 'EditRequestCreatedNotification';
  creator?: Maybe<User>;
  editRequest?: Maybe<EditRequest>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export enum EditRequestStatus {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export type EditorPreferences = {
  __typename?: 'EditorPreferences';
  accessibleTerminal: Scalars['Boolean']['output'];
  chatEngine?: Maybe<Scalars['String']['output']>;
  codeIntelligence: Scalars['Boolean']['output'];
  codeSuggestion: Scalars['Boolean']['output'];
  completeCodeEngine?: Maybe<Scalars['String']['output']>;
  enableGpu: Scalars['Boolean']['output'];
  extraDelight: Scalars['Boolean']['output'];
  fontSize: Scalars['Int']['output'];
  indentIsSpaces: Scalars['Boolean']['output'];
  indentSize: Scalars['Int']['output'];
  isLayoutStacked: Scalars['Boolean']['output'];
  keyboardHandler?: Maybe<Scalars['String']['output']>;
  minimapDisplay: Scalars['String']['output'];
  multiselectModifierKey: Scalars['String']['output'];
  theme: Scalars['String']['output'];
  webviewAutoOpenOnPortOpened: Scalars['Boolean']['output'];
  wrapping: Scalars['Boolean']['output'];
};

export enum EgressAddOnSku {
  EgressGoval_10Gib = 'egress_goval_10_gib',
  EgressGoval_50Gib = 'egress_goval_50_gib',
  EgressGoval_100Gib = 'egress_goval_100_gib',
  EgressGoval_500Gib = 'egress_goval_500_gib',
  EgressGoval_1000Gib = 'egress_goval_1000_gib'
}

export type EgressLimitAddOnInput = {
  sku: EgressAddOnSku;
};

export type EgressLimitAddOnOutput = EgressLimitAddOnResult | PaymentError | UnauthorizedError | UserError;

export type EgressLimitAddOnResult = {
  __typename?: 'EgressLimitAddOnResult';
  currentUser: CurrentUser;
};

export type EgressLimitNotification = {
  __typename?: 'EgressLimitNotification';
  id: Scalars['Int']['output'];
  limitGib: Scalars['Float']['output'];
  percentage: Scalars['Float']['output'];
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  variant?: Maybe<NotificationsvariantEnumType>;
};

export type EgressPowerUpType = UserPowerUpDescriptionByType & {
  __typename?: 'EgressPowerUpType';
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  active: Scalars['Boolean']['output'];
  cost?: Maybe<UserPowerUpCostDetailType>;
  isTrial: Scalars['Boolean']['output'];
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  sku?: Maybe<EgressAddOnSku>;
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']['output']>;
  timeLastFulfilled?: Maybe<Scalars['Date']['output']>;
  timePurchased?: Maybe<Scalars['DateTime']['output']>;
  timeTrialExpiry?: Maybe<Scalars['DateTime']['output']>;
  willRenew: Scalars['Boolean']['output'];
};

export enum EgressUsageMethod {
  Reconcile = 'reconcile',
  Reset = 'reset'
}

export type EscalateBoardUserOutput = BoardReport | NotFoundError | UnauthorizedError | UserError;

export type ExplainCodeOutput = ExplainCodeResult | UnauthorizedError | UserError;

export type ExplainCodeResult = {
  __typename?: 'ExplainCodeResult';
  explanation: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type ExportProjectsOverviewInput = {
  teamName: Scalars['String']['input'];
  templateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type ExportProjectsOverviewOutput = CurrentUser | NotFoundError | UnauthorizedError;

export type ExportTeamSubmissionsOutput = ExportTeamSubmissionsResult | NotFoundError | UnauthorizedError | UserError;

export type ExportTeamSubmissionsResult = {
  __typename?: 'ExportTeamSubmissionsResult';
  folderPath: Scalars['String']['output'];
};

export type Extension = {
  __typename?: 'Extension';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  installCount: Scalars['String']['output'];
  installation?: Maybe<ExtensionInstallation>;
  isBlessed: Scalars['Boolean']['output'];
  manifest?: Maybe<ExtensionManifestResult>;
  name: Scalars['String']['output'];
  timeCreated: Scalars['Date']['output'];
  timeUpdated?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user: User;
};


export type ExtensionInstallationArgs = {
  replId?: InputMaybe<Scalars['String']['input']>;
};

export type ExtensionCoverImage = {
  __typename?: 'ExtensionCoverImage';
  label: Scalars['String']['output'];
  path: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ExtensionFileHandler = {
  __typename?: 'ExtensionFileHandler';
  glob: Scalars['String']['output'];
  handler: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ExtensionInstallation = {
  __typename?: 'ExtensionInstallation';
  extension?: Maybe<Extension>;
  id: Scalars['String']['output'];
  installer?: Maybe<User>;
  repl?: Maybe<Repl>;
  timeCreated: Scalars['Date']['output'];
  timeUpdated?: Maybe<Scalars['Date']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ExtensionInstallationByIdOutput = ExtensionInstallation | NotFoundError;

export type ExtensionInstallationList = {
  __typename?: 'ExtensionInstallationList';
  installations: Array<ExtensionInstallation>;
};

export type ExtensionInstallationsOutput = ExtensionInstallationList | NotFoundError | UnauthorizedError;

export type ExtensionManifest = {
  __typename?: 'ExtensionManifest';
  coverImages?: Maybe<Array<ExtensionCoverImage>>;
  description: Scalars['String']['output'];
  fileHandlers?: Maybe<Array<ExtensionFileHandler>>;
  icon?: Maybe<Scalars['String']['output']>;
  longDescription?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  scopes?: Maybe<Array<ExtensionScope>>;
  supportEmail?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  tools?: Maybe<Array<ExtensionTool>>;
  version: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type ExtensionManifestError = {
  __typename?: 'ExtensionManifestError';
  message: Scalars['String']['output'];
};

export type ExtensionManifestResult = ExtensionManifest | ExtensionManifestError;

export type ExtensionMutation = {
  __typename?: 'ExtensionMutation';
  create?: Maybe<CluiOutput>;
  delete?: Maybe<CluiOutput>;
  update?: Maybe<CluiOutput>;
};


export type ExtensionMutationCreateArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type ExtensionMutationDeleteArgs = {
  extensionId: Scalars['String']['input'];
};


export type ExtensionMutationUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  extensionId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ExtensionOutput = Extension | NotFoundError;

export type ExtensionQuery = {
  __typename?: 'ExtensionQuery';
  view?: Maybe<CluiOutput>;
};

export type ExtensionScope = {
  __typename?: 'ExtensionScope';
  name: Scalars['String']['output'];
  reason: Scalars['String']['output'];
};

export type ExtensionTool = {
  __typename?: 'ExtensionTool';
  handler: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FailHostingBuildInput = {
  buildId: Scalars['String']['input'];
  targetDeploymentId: Scalars['String']['input'];
};

export type FailHostingBuildOutput = FailHostingBuildResult | NotFoundError | UnauthorizedError | UserError;

export type FailHostingBuildResult = {
  __typename?: 'FailHostingBuildResult';
  activityLog: HostingActivityLog;
  build: HostingBuild;
  deployment: HostingDeployment;
};

export type Flag = {
  __typename?: 'Flag';
  id: Scalars['String']['output'];
  type: UserFlagValueType;
  value: Scalars['FlagValueType']['output'];
};

export type FollowResult = {
  __typename?: 'FollowResult';
  targetUser?: Maybe<User>;
  user?: Maybe<User>;
};

export type ForceSolverToAbandonBountyAsStaffInput = {
  bountyId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};

export type ForceSolverToAbandonBountyAsStaffOutput = Bounty | NotFoundError | UnauthorizedError | UserError;

export type FreePlan = {
  __typename?: 'FreePlan';
  displayName: Scalars['String']['output'];
  items: Array<SubscriptionPlanItem>;
};

export type FreezeNeonDatabaseInput = {
  neonProjectId: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type FreezeNeonDatabaseOutput = FreezeNeonDatabaseResult | UnauthorizedError | UserError;

export type FreezeNeonDatabaseResult = {
  __typename?: 'FreezeNeonDatabaseResult';
  success: Scalars['Boolean']['output'];
};

export type GenerateCodeInput = {
  language: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type GenerateCodeOutput = GenerateCodeResult | UnauthorizedError | UserError;

export type GenerateCodeResult = {
  __typename?: 'GenerateCodeResult';
  code: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
};

export type GetBannedBoardUserOutput = BannedBoardUser | NotFoundError | UnauthorizedError;

export type GetGoogleClassroomCoursesOutput = GoogleClassroomCourseOutput | NotFoundError | UnauthorizedError | UserError;

export type GetGoogleClassroomStudentsOutput = GoogleClassroomStudentOutput | UnauthorizedError | UserError;

export type GetNeonDatabasesInput = {
  replId: Scalars['String']['input'];
};

export type GetNeonDatabasesOutput = GetNeonDatabasesResult | UnauthorizedError | UserError;

export type GetNeonDatabasesResult = {
  __typename?: 'GetNeonDatabasesResult';
  databases: Array<NeonDatabase>;
};

export type GetRecommendedBountiesForUserInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type GetRecommendedBountiesForUserOutput = GetRecommendedBountiesForUserResult | TooManyRequestsError | UnauthorizedError | UserError;

export type GetRecommendedBountiesForUserResult = {
  __typename?: 'GetRecommendedBountiesForUserResult';
  results: Array<Bounty>;
};

export type GetReplitCheckoutSessionInput = {
  id: Scalars['String']['input'];
};

export type GetReplitCheckoutSessionOutput = NotFoundError | ReplitCheckoutSession | UnauthorizedError;

export type GetUserReplCommentsInput = {
  userId: Scalars['Int']['input'];
};

export type GetUserReplCommentsOutput = UnauthorizedError | UserReplCommentsOutput;

export type GhostwriterChatMeteredTrialStatus = {
  __typename?: 'GhostwriterChatMeteredTrialStatus';
  cap: Scalars['Int']['output'];
  hasAccessToMeteredTrial: Scalars['Boolean']['output'];
  messagesSentInPeriod: Scalars['Int']['output'];
};

export type GhostwriterPowerUpType = UserPowerUpDescriptionByType & {
  __typename?: 'GhostwriterPowerUpType';
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  active: Scalars['Boolean']['output'];
  cost?: Maybe<UserPowerUpCostDetailType>;
  isTrial: Scalars['Boolean']['output'];
  meteredTrial?: Maybe<GhostwriterChatMeteredTrialStatus>;
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']['output']>;
  timeLastFulfilled?: Maybe<Scalars['Date']['output']>;
  timeTrialExpiry?: Maybe<Scalars['DateTime']['output']>;
  willRenew: Scalars['Boolean']['output'];
};

export type GitHubInfo = {
  __typename?: 'GitHubInfo';
  accessToken?: Maybe<Scalars['String']['output']>;
  installations?: Maybe<Array<GitHubUserInstallations>>;
  userInfo?: Maybe<GitHubUserInfo>;
};

export type GitHubLanguage = {
  __typename?: 'GitHubLanguage';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GitHubUserInfo = {
  __typename?: 'GitHubUserInfo';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type GitHubUserInstallations = {
  __typename?: 'GitHubUserInstallations';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum GithubRepoOwnerType {
  Organization = 'organization',
  User = 'user'
}

export type GoogleClassroom = {
  __typename?: 'GoogleClassroom';
  courseId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  members: Array<Maybe<GoogleClassroomMember>>;
  name: Scalars['String']['output'];
};

export type GoogleClassroomCourseInfo = {
  __typename?: 'GoogleClassroomCourseInfo';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GoogleClassroomCourseOutput = {
  __typename?: 'GoogleClassroomCourseOutput';
  courses: Array<Maybe<GoogleClassroomCourseInfo>>;
};

export type GoogleClassroomMember = {
  __typename?: 'GoogleClassroomMember';
  externalId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  invite?: Maybe<TeamInvite>;
  user?: Maybe<User>;
};

export type GoogleClassroomStudentInfo = {
  __typename?: 'GoogleClassroomStudentInfo';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type GoogleClassroomStudentOutput = {
  __typename?: 'GoogleClassroomStudentOutput';
  students: Array<Maybe<GoogleClassroomStudentInfo>>;
};

export type GovalMetadata = {
  __typename?: 'GovalMetadata';
  conmanURL: Scalars['String']['output'];
  gurl: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type GraphQlGitHubApiFile = {
  path: Scalars['String']['input'];
  type: GraphQlGitHubApiFileType;
};

export enum GraphQlGitHubApiFileType {
  Dir = 'dir',
  File = 'file'
}

export type HireBountyHunterServiceInput = {
  bountyHunterServiceId: Scalars['Int']['input'];
  email: Scalars['String']['input'];
};

export type HireBountyHunterServiceOutput = HireBountyHunterServiceSuccess | NotFoundError | ServiceUnavailable | TooManyRequestsError | UnauthorizedError | UserError;

export type HireBountyHunterServiceSuccess = {
  __typename?: 'HireBountyHunterServiceSuccess';
  bountyHunterService: BountyHunterService;
  hireRequestId: Scalars['String']['output'];
};

export type HostingActivityLog = {
  __typename?: 'HostingActivityLog';
  build: HostingBuild;
  deployment: HostingDeployment;
  id: Scalars['Int']['output'];
  timeCreated: Scalars['Date']['output'];
  type: HostingActivityLogType;
  user: User;
};

export type HostingActivityLogConnection = {
  __typename?: 'HostingActivityLogConnection';
  items: Array<HostingActivityLog>;
  pageInfo: PageInfo;
};

export enum HostingActivityLogType {
  Deploy = 'deploy',
  Fail = 'fail',
  Rollback = 'rollback'
}

export type HostingBuild = {
  __typename?: 'HostingBuild';
  description: Scalars['String']['output'];
  envVars: Array<HostingBuild2EnvVar>;
  hasImageTag: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  provider: HostingBuildProvider;
  repl: Repl;
  status: HostingBuildStatus;
  timeCreated: Scalars['Date']['output'];
  timeUpdated?: Maybe<Scalars['Date']['output']>;
  user: User;
};

export type HostingBuild2EnvVar = {
  __typename?: 'HostingBuild2EnvVar';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type HostingBuildDeployActionHistoryInput = {
  buildId: Scalars['String']['input'];
};

export type HostingBuildDeployActionHistoryOutput = HostingBuildDeployActionHistoryResults | NotFoundError | UnauthorizedError;

export type HostingBuildDeployActionHistoryResults = {
  __typename?: 'HostingBuildDeployActionHistoryResults';
  results?: Maybe<Array<HostingBuildDeployActionUpdateEvent>>;
};

export type HostingBuildDeployActionUpdateEvent = HostingBuildDeployLogAction | HostingBuildDeployStatusAction;

export type HostingBuildDeployActionUpdatesInput = {
  buildId: Scalars['String']['input'];
};

export type HostingBuildDeployLogAction = {
  __typename?: 'HostingBuildDeployLogAction';
  log: Scalars['String']['output'];
};

export type HostingBuildDeployStatusAction = {
  __typename?: 'HostingBuildDeployStatusAction';
  message?: Maybe<Scalars['String']['output']>;
  status: HostingBuildStatus;
};

export enum HostingBuildProvider {
  CloudRun = 'cloud_run',
  Gce = 'gce',
  Goval = 'goval',
  Static = 'static'
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
  UpdatingTier = 'updating_tier'
}

export type HostingDeployment = {
  __typename?: 'HostingDeployment';
  activityLogs: HostingActivityLogConnection;
  currentBuild: HostingBuild;
  id: Scalars['String']['output'];
  inProgressBuild?: Maybe<HostingBuild>;
  repl: Repl;
  replitAppSubdomain?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['Date']['output'];
  timeUpdated?: Maybe<Scalars['Date']['output']>;
};


export type HostingDeploymentActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export enum HostingTierPowerUpSku {
  HostingTierE2Medium = 'hosting_tier_e2_medium',
  HostingTierE2Micro = 'hosting_tier_e2_micro',
  HostingTierE2Small = 'hosting_tier_e2_small',
  HostingTierE2Standard_2 = 'hosting_tier_e2_standard_2',
  HostingTierE2Standard_4 = 'hosting_tier_e2_standard_4',
  HostingTierN1Custom_1_4 = 'hosting_tier_n1_custom_1_4'
}

export type HostingTierPowerUpType = {
  __typename?: 'HostingTierPowerUpType';
  methodOfPayment: PowerUpMethodOfPayment;
  sku: HostingTierPowerUpSku;
};

export type IoTestResult = {
  __typename?: 'IOTestResult';
  id: Scalars['ID']['output'];
  output: Scalars['String']['output'];
  repl: IoTestResultReplType;
  status: IoTestResultStatus;
  test: IoTestResultTestType;
};

export type IoTestResultInput = {
  output: Scalars['String']['input'];
  status: IoTestResultStatus;
  testId: Scalars['Int']['input'];
};

export type IoTestResultReplType = NotFoundError | Repl;

export enum IoTestResultStatus {
  Failed = 'failed',
  Passed = 'passed'
}

export type IoTestResultTestType = NotFoundError | ReplTemplateTest;

export type ImageScan = {
  __typename?: 'ImageScan';
  creator: User;
  id: Scalars['Int']['output'];
  image_id: Scalars['Int']['output'];
  image_url: Scalars['String']['output'];
  resolved: Scalars['Boolean']['output'];
  score: Scalars['Float']['output'];
  time_image_uploaded?: Maybe<Scalars['DateTime']['output']>;
  time_scan_results_obtained?: Maybe<Scalars['DateTime']['output']>;
  upload_context: Scalars['String']['output'];
};

export type ImageScanConnection = {
  __typename?: 'ImageScanConnection';
  items: Array<ImageScan>;
  pageInfo: PageInfo;
};

export type ImageScanType = ImageScan | UnauthorizedError | UserError;

export type ImageScansOutput = ImageScanConnection | UnauthorizedError | UserError;

export type ImportCurriculumInput = {
  curriculumId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
  versionNumber: Scalars['Int']['input'];
};

export type ImportCurriculumOutput = NotFoundError | Team | UnauthorizedError;

export type ImportGithubRepoInput = {
  activeReplReleaseId?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  forkToPersonal?: InputMaybe<Scalars['Boolean']['input']>;
  githubRepoUrl: Scalars['String']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  originId: Scalars['String']['input'];
  teamId?: InputMaybe<Scalars['Int']['input']>;
};

export type ImportGithubRepoOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type InstallExtensionOutput = ExtensionInstallation | UnauthorizedError | UserError;

export type InstallThemeInput = {
  themeId: Scalars['Int']['input'];
};

export type InstallThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type InstalledTheme = {
  __typename?: 'InstalledTheme';
  customTheme: CustomTheme;
  id: Scalars['Int']['output'];
  themeVersion: ThemeVersion;
  user: User;
};

export type InstalledThemeConnection = {
  __typename?: 'InstalledThemeConnection';
  items: Array<InstalledTheme>;
  pageInfo: PageInfo;
};

export type InstantGitHubImportInput = {
  repository: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type InstantGitHubImportOutput = InstantGitHubImportResult | NotFoundError | UserError;

export type InstantGitHubImportResult = {
  __typename?: 'InstantGitHubImportResult';
  isPrivate: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  templateId: Scalars['String']['output'];
};

export enum Intent {
  IntentBusiness = 'INTENT_BUSINESS',
  IntentPersonal = 'INTENT_PERSONAL',
  IntentStudent = 'INTENT_STUDENT',
  IntentTeacher = 'INTENT_TEACHER'
}

export type Invoice = {
  __typename?: 'Invoice';
  amount: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  issuer?: Maybe<User>;
  recipient?: Maybe<User>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  status: InvoiceStatus;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type InvoiceOutput = Invoice | NotFoundError | UnauthorizedError;

export enum InvoiceStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export type JoinReplSubmissionGroupInput = {
  submissionId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};

export type JoinReplSubmissionGroupOutput = NotFoundError | ReplSubmission | UnauthorizedError | UserError;

export type JoinTeamAsOrgAdminOutput = NotFoundError | Team | UnauthorizedError | UserError;

export type Keybindings = {
  __typename?: 'Keybindings';
  keybindings?: Maybe<Scalars['JSON']['output']>;
};

export enum KeybindingsEnvironmentEnum {
  DesktopApp = 'desktop_app',
  DesktopWeb = 'desktop_web',
  MobileApp = 'mobile_app',
  MobileWeb = 'mobile_web'
}

export enum KeybindingsPlatformEnum {
  Linux = 'linux',
  Mac = 'mac',
  Windows = 'windows'
}

export type Language = {
  __typename?: 'Language';
  aliases?: Maybe<Array<LanguageAlias>>;
  betaTemplateRepl?: Maybe<Repl>;
  canUseShellRunner: Scalars['Boolean']['output'];
  category: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  engine?: Maybe<Scalars['String']['output']>;
  examples?: Maybe<Array<LanguageExample>>;
  hasDAP: Scalars['Boolean']['output'];
  hasGit: Scalars['Boolean']['output'];
  hasLibSearch: Scalars['Boolean']['output'];
  hasReplboxUrlBar: Scalars['Boolean']['output'];
  hasReplboxWebview: Scalars['Boolean']['output'];
  hasUPM: Scalars['Boolean']['output'];
  header?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** @deprecated We're migrating languages on the fly, never deprecating them */
  isDeprecated: Scalars['Boolean']['output'];
  isNew?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  mainFile: Scalars['String']['output'];
  nixTemplateRepl?: Maybe<Repl>;
  recentReplsCreatedCount: Scalars['Int']['output'];
  supportsGit: Scalars['Boolean']['output'];
  /** @deprecated all languages support multi files now */
  supportsMultiFiles: Scalars['Boolean']['output'];
  supportsPackager3: Scalars['Boolean']['output'];
  tagName: Scalars['String']['output'];
  tagline: Scalars['String']['output'];
  templateRepl?: Maybe<Repl>;
  usesInterpreter: Scalars['Boolean']['output'];
  /** @deprecated all languages use terminal2 now */
  usesTerminal2: Scalars['Boolean']['output'];
};

export type LanguageAlias = {
  __typename?: 'LanguageAlias';
  category: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  tagline: Scalars['String']['output'];
};

export type LanguageExample = {
  __typename?: 'LanguageExample';
  code: Scalars['String']['output'];
  mainFile: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LatestBountyChatMessageInput = {
  bountyApplicationId: Scalars['Int']['input'];
};

export type LeaderboardTopTippersResult = {
  __typename?: 'LeaderboardTopTippersResult';
  leaderboard: Array<TipperUser>;
};

export type LeaveTeamOutput = Team | UserError;

export type LessonRepl = {
  __typename?: 'LessonRepl';
  lessonSlug: Scalars['String']['output'];
  repl: Repl;
};

export type LinkReplDomain2 = NotFoundError | Repl | ServiceUnavailable | UnauthorizedError;

export type LinkStack = {
  __typename?: 'LinkStack';
  id: Scalars['Int']['output'];
  templates: Array<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ManualCurationMutation = {
  __typename?: 'ManualCurationMutation';
  add?: Maybe<CluiOutput>;
  refresh?: Maybe<CluiOutput>;
  remove?: Maybe<CluiOutput>;
};


export type ManualCurationMutationAddArgs = {
  url: Scalars['String']['input'];
};


export type ManualCurationMutationRemoveArgs = {
  url: Scalars['String']['input'];
};

export type ManualCurationQuery = {
  __typename?: 'ManualCurationQuery';
  list?: Maybe<CluiOutput>;
};

export type MarkBountyChatReadInput = {
  bountyApplicationId: Scalars['Int']['input'];
};

export type MarkBountyChatReadOutput = BountyChatMessage | NotFoundError | UnauthorizedError;

export type MarkMessagesAsSeenOutput = AnnotationMessageList | UserError;

export type MentionedInCommentNotification = {
  __typename?: 'MentionedInCommentNotification';
  comment?: Maybe<Comment>;
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type MentionedInPostNotification = {
  __typename?: 'MentionedInPostNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  post?: Maybe<Post>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type MessageContentType = PreviewMessageContentType | StatusMessageContentType | TextMessageContentType;

export type Metadata = {
  __typename?: 'Metadata';
  relation?: Maybe<MetadataRelationEnumType>;
  system?: Maybe<MetadataSystemEnumType>;
};

export enum MetadataRelationEnumType {
  Bounties = 'bounties',
  ExternalTransactions = 'external_transactions',
  ReplOrder = 'repl_order',
  Tips = 'tips',
  UserOrder = 'user_order'
}

export enum MetadataSystemEnumType {
  WebPostgres = 'web_postgres'
}

export type MigrateTeamToStacksOutput = NotFoundError | Team | UserError;

export enum ModerateBountyApplicationAction {
  Approve = 'approve',
  Delete = 'delete'
}

export type ModerateBountyApplicationInput = {
  action: ModerateBountyApplicationAction;
  bountyApplicationId: Scalars['Int']['input'];
  notifyApplicant?: InputMaybe<Scalars['Boolean']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type ModerateBountyApplicationOutput = BountyApplication | NotFoundError | UnauthorizedError | UserError;

export enum ModeratorAuditActionType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type ModeratorAuditLog = {
  __typename?: 'ModeratorAuditLog';
  bannedUser?: Maybe<User>;
  boardReport?: Maybe<BoardReport>;
  bountyApplication?: Maybe<BountyApplication>;
  comment?: Maybe<ReplComment>;
  customTheme?: Maybe<CustomTheme>;
  id: Scalars['Int']['output'];
  model: Moderator_Action_RecordmodelEnumType;
  moderator?: Maybe<User>;
  notification?: Maybe<BasicNotification>;
  post?: Maybe<Post>;
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  type: Moderator_Action_RecordtypeEnumType;
  updateBody?: Maybe<Scalars['String']['output']>;
  warnedUser?: Maybe<User>;
};

export type ModeratorAuditLogConnection = {
  __typename?: 'ModeratorAuditLogConnection';
  items: Array<ModeratorAuditLog>;
  pageInfo: PageInfo;
};

export type ModeratorAuditLogInputType = {
  after?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<ModeratorAuditLogModel>;
  moderator?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ModeratorAuditLogOrder>;
  replId?: InputMaybe<Scalars['String']['input']>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
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
  Warning = 'warning'
}

export enum ModeratorAuditLogOrder {
  Newest = 'newest',
  Oldest = 'oldest'
}

export type ModeratorAuditLogOutput = ModeratorAuditLogConnection | UnauthorizedError;

export enum ModeratorAuditLogType {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export enum ModeratorAuditModels {
  BannedBoardUsers = 'BannedBoardUsers',
  BoardReports = 'BoardReports',
  Comments = 'Comments',
  Posts = 'Posts',
  Warning = 'Warning'
}

export enum ModeratorAuditSorting {
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export type ModeratorCliAuditQuery = {
  __typename?: 'ModeratorCliAuditQuery';
  viewAudit?: Maybe<CluiOutput>;
  viewItem?: Maybe<CluiOutput>;
};


export type ModeratorCliAuditQueryViewAuditArgs = {
  actionType?: InputMaybe<ModeratorAuditActionType>;
  creator?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<ModeratorAuditModels>;
  order?: InputMaybe<ModeratorAuditSorting>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type ModeratorCliAuditQueryViewItemArgs = {
  id: Scalars['Int']['input'];
};

export type ModeratorCliPostQuery = {
  __typename?: 'ModeratorCliPostQuery';
  showVotes?: Maybe<CluiOutput>;
};


export type ModeratorCliPostQueryShowVotesArgs = {
  commentId?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
};

export type ModeratorCliUserMutation = {
  __typename?: 'ModeratorCliUserMutation';
  ban?: Maybe<CluiOutput>;
  removeWarn?: Maybe<CluiOutput>;
  warn?: Maybe<CluiOutput>;
};


export type ModeratorCliUserMutationBanArgs = {
  reason?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};


export type ModeratorCliUserMutationRemoveWarnArgs = {
  user: Scalars['String']['input'];
  warnId: Scalars['Int']['input'];
};


export type ModeratorCliUserMutationWarnArgs = {
  reason: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type ModeratorCliUserQuery = {
  __typename?: 'ModeratorCliUserQuery';
  viewWarns?: Maybe<CluiOutput>;
};


export type ModeratorCliUserQueryViewWarnsArgs = {
  user: Scalars['String']['input'];
};

export type ModeratorCluiMutation = {
  __typename?: 'ModeratorCluiMutation';
  removeTag?: Maybe<CluiOutput>;
  unpublish?: Maybe<CluiOutput>;
  user?: Maybe<ModeratorCliUserMutation>;
};


export type ModeratorCluiMutationRemoveTagArgs = {
  banTag: Scalars['Boolean']['input'];
  reason: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};


export type ModeratorCluiMutationUnpublishArgs = {
  reason: Scalars['String']['input'];
  replUrl: Scalars['String']['input'];
};

export type ModeratorCluiQuery = {
  __typename?: 'ModeratorCluiQuery';
  audit?: Maybe<ModeratorCliAuditQuery>;
  post?: Maybe<ModeratorCliPostQuery>;
  user?: Maybe<ModeratorCliUserQuery>;
  viewBans?: Maybe<CluiOutput>;
};

export type ModeratorNotificationInput = {
  text: Scalars['String']['input'];
  url: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ModeratorNotificationOutput = AnnotationNotification | AnswerAcceptedNotification | BasicNotification | BountyApplicationReviewedNotification | BountyChatMessageNotification | BountyNewApplicationNotification | BountyNewSubmissionNotification | BountySubmissionReviewedNotification | EditRequestAcceptedNotification | EditRequestCreatedNotification | EgressLimitNotification | MentionedInCommentNotification | MentionedInPostNotification | MultiplayerInvitedNotification | MultiplayerJoinedEmailNotification | MultiplayerJoinedLinkNotification | MultiplayerOverlimitNotification | NewFollowerNotification | NotFoundError | ReplCommentCreatedNotification | ReplCommentMentionNotification | ReplCommentReplyCreatedNotification | RepliedToCommentNotification | RepliedToPostNotification | TeamInviteNotification | TeamOrganizationInviteNotification | TeamTemplateReviewedStatusNotification | TeamTemplateSubmittedNotification | ThreadNotification | TipReceivedNotification | UnauthorizedError | WarningNotification;

export type ModeratorUnpublishInput = {
  reason: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type ModeratorUnpublishOutput = NotFoundError | Repl | UnauthorizedError;

export type MonthlyEgressSummary = {
  __typename?: 'MonthlyEgressSummary';
  isEnforced: Scalars['Boolean']['output'];
  isThrottled: Scalars['Boolean']['output'];
  limit: Scalars['String']['output'];
  perRepl: Array<ReplEgressSummary>;
  resets: Scalars['String']['output'];
  showUpgrade: Scalars['Boolean']['output'];
  start: Scalars['DateTime']['output'];
  usage: Scalars['String']['output'];
};

export type MultiplayerInvite = {
  __typename?: 'MultiplayerInvite';
  email: Scalars['String']['output'];
  repl?: Maybe<Repl>;
  replId: Scalars['String']['output'];
  type: Multiplayer_InvitestypeEnumType;
};

export type MultiplayerInviteOutput = MultiplayerInvite | ReplPermission | UserError;

export type MultiplayerInvitedNotification = {
  __typename?: 'MultiplayerInvitedNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type MultiplayerJoinedEmailNotification = {
  __typename?: 'MultiplayerJoinedEmailNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type MultiplayerJoinedLinkNotification = {
  __typename?: 'MultiplayerJoinedLinkNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type MultiplayerOverlimitNotification = {
  __typename?: 'MultiplayerOverlimitNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type NeonDatabase = {
  __typename?: 'NeonDatabase';
  connectionString: Scalars['String']['output'];
  databaseId: Scalars['Int']['output'];
  databaseName: Scalars['String']['output'];
  isFrozen: Scalars['Boolean']['output'];
  projectId: Scalars['String']['output'];
};

export type NeonDatabasePreviewPowerUpType = UserPowerUpDescriptionByType & {
  __typename?: 'NeonDatabasePreviewPowerUpType';
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  active: Scalars['Boolean']['output'];
  connectedRepls: Array<Repl>;
  cost?: Maybe<UserPowerUpCostDetailType>;
  isTrial: Scalars['Boolean']['output'];
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  neonDatabaseName: Scalars['String']['output'];
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']['output']>;
  timeLastFulfilled?: Maybe<Scalars['Date']['output']>;
  timeTrialExpiry?: Maybe<Scalars['DateTime']['output']>;
  willRenew: Scalars['Boolean']['output'];
};

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type NotFoundError = {
  __typename?: 'NotFoundError';
  message: Scalars['String']['output'];
};

export type Notification = AnnotationNotification | AnswerAcceptedNotification | BasicNotification | BountyApplicationReviewedNotification | BountyChatMessageNotification | BountyNewApplicationNotification | BountyNewSubmissionNotification | BountySubmissionReviewedNotification | EditRequestAcceptedNotification | EditRequestCreatedNotification | EgressLimitNotification | MentionedInCommentNotification | MentionedInPostNotification | MultiplayerInvitedNotification | MultiplayerJoinedEmailNotification | MultiplayerJoinedLinkNotification | MultiplayerOverlimitNotification | NewFollowerNotification | ReplCommentCreatedNotification | ReplCommentMentionNotification | ReplCommentReplyCreatedNotification | RepliedToCommentNotification | RepliedToPostNotification | TeamInviteNotification | TeamOrganizationInviteNotification | TeamTemplateReviewedStatusNotification | TeamTemplateSubmittedNotification | ThreadNotification | TipReceivedNotification | WarningNotification;

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  items: Array<Notification>;
  pageInfo: PageInfo;
};

export enum NotificationContext {
  Annotation = 'annotation',
  Board = 'board',
  Classroom = 'classroom',
  Multiplayer = 'multiplayer',
  Team = 'team'
}

export enum OfficialReplitThemeKey {
  ReplitDark = 'replitDark',
  ReplitLight = 'replitLight',
  ReplitSpooky = 'replitSpooky'
}

export enum OnboardingExperience {
  OnboardingExperienceHigh = 'ONBOARDING_EXPERIENCE_HIGH',
  OnboardingExperienceLow = 'ONBOARDING_EXPERIENCE_LOW',
  OnboardingExperienceMedium = 'ONBOARDING_EXPERIENCE_MEDIUM',
  OnboardingExperienceNone = 'ONBOARDING_EXPERIENCE_NONE'
}

export enum OverrideBehaviorEnum {
  Disabled = 'disabled',
  Enabled = 'enabled'
}

export type OwnAnonReplInput = {
  replId: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  nextCursor?: Maybe<Scalars['String']['output']>;
  previousCursor?: Maybe<Scalars['String']['output']>;
};

export type PaymentError = {
  __typename?: 'PaymentError';
  message: Scalars['String']['output'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  expirationMonth: Scalars['Int']['output'];
  expirationYear: Scalars['Int']['output'];
  externalId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isSaved: Scalars['Boolean']['output'];
  last4: Scalars['Int']['output'];
};

export enum PaymentProviderEnum {
  Apple = 'apple',
  Google = 'google',
  Stripe = 'stripe'
}

export type PinReplToProfileOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type PlanDetails = {
  __typename?: 'PlanDetails';
  costInUsdCents: Scalars['Int']['output'];
  googleSubscriptionId?: Maybe<Scalars['String']['output']>;
  planId: Scalars['String']['output'];
};

export type PlanInfo = {
  __typename?: 'PlanInfo';
  amount?: Maybe<Scalars['Int']['output']>;
  cancelAt?: Maybe<Scalars['DateTime']['output']>;
  coupon?: Maybe<DiscountInfo>;
  description: Scalars['String']['output'];
  interval?: Maybe<Scalars['String']['output']>;
  nextPaymentDue?: Maybe<Scalars['DateTime']['output']>;
  provider: PaymentProviderEnum;
};

export type PlayStoreCustomerOutput = PlayStoreCustomerResult | UnauthorizedError | UserError;

export type PlayStoreCustomerResult = {
  __typename?: 'PlayStoreCustomerResult';
  appAccountToken: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  answer?: Maybe<Comment>;
  answeredBy?: Maybe<User>;
  board?: Maybe<Board>;
  body: Scalars['String']['output'];
  canChangeBoard: Scalars['Boolean']['output'];
  canComment: Scalars['Boolean']['output'];
  canEdit: Scalars['Boolean']['output'];
  canHide: Scalars['Boolean']['output'];
  canLock: Scalars['Boolean']['output'];
  canPin: Scalars['Boolean']['output'];
  canReport: Scalars['Boolean']['output'];
  canSetType: Scalars['Boolean']['output'];
  canVote: Scalars['Boolean']['output'];
  commentCount: Scalars['Int']['output'];
  comments?: Maybe<CommentConnection>;
  hasReported: Scalars['Boolean']['output'];
  hasVoted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isAnnouncement: Scalars['Boolean']['output'];
  isAnswerable: Scalars['Boolean']['output'];
  isAnswered: Scalars['Boolean']['output'];
  isAuthor: Scalars['Boolean']['output'];
  isHidden: Scalars['Boolean']['output'];
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  preview: Scalars['String']['output'];
  recentComments?: Maybe<Array<Comment>>;
  recentReplComments?: Maybe<Array<ReplComment>>;
  repl?: Maybe<Repl>;
  replComment?: Maybe<ReplComment>;
  showHosted?: Maybe<Scalars['Boolean']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  user?: Maybe<User>;
  voteCount: Scalars['Int']['output'];
  votes?: Maybe<PostVoteConnection>;
};


export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};


export type PostPreviewArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
  removeMarkdown?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PostRecentCommentsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type PostVotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  items: Array<Post>;
  pageInfo: PageInfo;
};

export type PostPurchasePowerUp = {
  replPowerUp: PostPurchaseReplPowerUp;
};

export type PostPurchaseReplPowerUp = {
  replId: Scalars['String']['input'];
  sku: PostPurchaseReplPowerUpSkuEnumType;
  type: PostPurchaseReplPowerUpOrderTypeEnumType;
};

export enum PostPurchaseReplPowerUpOrderTypeEnumType {
  Boost = 'boost',
  HostingTier = 'hosting_tier'
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
  HostingTierN1Custom_1_4 = 'hosting_tier_n1_custom_1_4'
}

export type PostVote = {
  __typename?: 'PostVote';
  id: Scalars['Int']['output'];
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

export type PostVoteConnection = {
  __typename?: 'PostVoteConnection';
  items: Array<PostVote>;
  pageInfo: PageInfo;
};

export enum PowerUpCallToActionEnumType {
  Activate = 'ACTIVATE',
  Activated = 'ACTIVATED',
  /** @deprecated No longer handled by the client */
  ActivateAlreadyTrialed = 'ACTIVATE_ALREADY_TRIALED',
  TrialExpired = 'TRIAL_EXPIRED',
  TrialOngoing = 'TRIAL_ONGOING'
}

export type PowerUpCostDetail2Type = {
  __typename?: 'PowerUpCostDetail2Type';
  cyclesCostNow: Scalars['Int']['output'];
  cyclesCostRecurring: Scalars['Int']['output'];
  explanation: PowerUpCostExplanationEnumType;
  methodOfPayment: PowerUpCostMethodOfPaymentEnum;
};

export type PowerUpCostDetailType = {
  __typename?: 'PowerUpCostDetailType';
  cycles: Scalars['Int']['output'];
  explanation: PowerUpCostExplanationEnumType;
};

export enum PowerUpCostExplanationEnumType {
  ActivateExistingOrder = 'ACTIVATE_EXISTING_ORDER',
  AutoRefill = 'AUTO_REFILL',
  IncludedInExistingOrder = 'INCLUDED_IN_EXISTING_ORDER',
  IncludedInSubscription = 'INCLUDED_IN_SUBSCRIPTION',
  NeedsCycles = 'NEEDS_CYCLES',
  NeedsSubscription = 'NEEDS_SUBSCRIPTION',
  NotSupportedForTeams = 'NOT_SUPPORTED_FOR_TEAMS',
  SpendCycles = 'SPEND_CYCLES'
}

export enum PowerUpCostMethodOfPaymentEnum {
  Cycles = 'CYCLES',
  Invalid = 'INVALID',
  Subscription = 'SUBSCRIPTION'
}

export type PowerUpCostsOutput = NotFoundError | PowerUpCostsType | UnauthorizedError;

export type PowerUpCostsType = {
  __typename?: 'PowerUpCostsType';
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
  Subscription = 'SUBSCRIPTION'
}

export enum PowerUpTrialTypeEnumType {
  Ghostwriter = 'ghostwriter',
  Private = 'private'
}

export type PreviewInvoice = NotFoundError | PreviewInvoiceOutput | UnauthorizedError | UserError;

export type PreviewInvoiceInput = {
  orgId: Scalars['Int']['input'];
  product: PreviewInvoiceLineItemInput;
};

export type PreviewInvoiceLineItem = {
  __typename?: 'PreviewInvoiceLineItem';
  amount: Scalars['Float']['output'];
  description?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type PreviewInvoiceLineItemGroup = {
  __typename?: 'PreviewInvoiceLineItemGroup';
  items: Array<PreviewInvoiceLineItem>;
  periodEnd: Scalars['DateTime']['output'];
  periodStart: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type PreviewInvoiceLineItemInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type PreviewInvoiceOutput = {
  __typename?: 'PreviewInvoiceOutput';
  balance: Scalars['Float']['output'];
  chargeDate?: Maybe<Scalars['DateTime']['output']>;
  currentItems: Array<PreviewInvoiceLineItemGroup>;
  total: Scalars['Float']['output'];
  upcomingItems: Array<PreviewInvoiceLineItemGroup>;
};

export type PreviewMessageContentType = {
  __typename?: 'PreviewMessageContentType';
  preview?: Maybe<Scalars['String']['output']>;
};

export type PreviewProrationInput = {
  newPlanPeriod: SelectableSubscriptionPeriodTypesEnum;
  newPlanPrefix: SelectableSubscriptionPrefixTypesEnum;
};

export type PreviewProrationOutput = PaymentError | PreviewProrationResult | UnauthorizedError | UserError;

export type PreviewProrationResult = {
  __typename?: 'PreviewProrationResult';
  isTrialToPaid: Scalars['Boolean']['output'];
  prorationTotalInCents: Scalars['Int']['output'];
};

export type PrivateReplsPowerUpType = UserPowerUpDescriptionByType & {
  __typename?: 'PrivateReplsPowerUpType';
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  active: Scalars['Boolean']['output'];
  cost?: Maybe<UserPowerUpCostDetailType>;
  isTrial: Scalars['Boolean']['output'];
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']['output']>;
  timeLastFulfilled?: Maybe<Scalars['Date']['output']>;
  timeTrialExpiry?: Maybe<Scalars['DateTime']['output']>;
  willRenew: Scalars['Boolean']['output'];
};

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  planPrefix: Scalars['String']['output'];
  planVariant: Scalars['String']['output'];
  planVersion: Scalars['String']['output'];
};

export enum Protocols {
  Https = 'HTTPS',
  Wss = 'WSS'
}

export type ProviderPlanDetails = {
  __typename?: 'ProviderPlanDetails';
  monthlyPlanDetails: PlanDetails;
  yearlyPlanDetails: PlanDetails;
};

export type PublishThemeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  themeId: Scalars['Int']['input'];
};

export type PublishThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export enum PublishedReplKind {
  App = 'App',
  RegularRepl = 'RegularRepl',
  Template = 'Template'
}

export enum PushNotificationTokenType {
  Expo = 'expo',
  Web = 'web'
}

export enum RecentReplsFilter {
  Multiplayer = 'multiplayer',
  Own = 'own'
}

export type RegisterPushDeviceSessionInput = {
  deviceId: Scalars['String']['input'];
  token: Scalars['String']['input'];
  tokenType: PushNotificationTokenType;
};

export type RegisterPushDeviceSessionOutput = RegisterPushDeviceSessionResult | UnauthorizedError | UserError;

export type RegisterPushDeviceSessionResult = {
  __typename?: 'RegisterPushDeviceSessionResult';
  deviceId?: Maybe<Scalars['String']['output']>;
};

export type RelatedReplsGroup = {
  __typename?: 'RelatedReplsGroup';
  name: Scalars['String']['output'];
  repls: Array<Repl>;
};

export type RemoveBountyApplicationAsApplicantInput = {
  bountyApplicationId: Scalars['Int']['input'];
};

export type RemoveBountyApplicationAsApplicantOutput = BountyApplication | NotFoundError | UnauthorizedError | UserError;

export type RemoveBountyApplicationAsModeratorInput = {
  bountyApplicationId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};

export type RemoveBountyApplicationAsModeratorOutput = BountyApplication | NotFoundError | UnauthorizedError | UserError;

export type RemoveBountyHunterReviewAsStaffInput = {
  bountyHunterReviewId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};

export type RemoveBountyHunterReviewAsStaffOutput = BountyHunterReview | NotFoundError | UnauthorizedError | UserError;

export type RemoveReplConnectionsEvent = {
  __typename?: 'RemoveReplConnectionsEvent';
  epoch: Scalars['DateTime']['output'];
  replId: Scalars['String']['output'];
};

export type RemoveTeamMemberInput = {
  memberId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};

export type RemoveTeamMemberOutput = Team | UserError;

export type RemoveWarnOutput = UserError | Warning;

export type RenderedPowerUpType = {
  __typename?: 'RenderedPowerUpType';
  methodOfPayment: PowerUpMethodOfPayment;
  powerUpType: ReplPowerUpTypeEnumType;
  repl: Repl;
  sku: ReplPowerUpSkuEnumType;
};

export type Repl = {
  __typename?: 'Repl';
  analyticsPageViews: ReplAnalyticsPageViewsOutput;
  analyticsTimeSeries: ReplAnalyticsTimeSeriesOutput;
  analyticsTopList: ReplAnalyticsTopListOutput;
  analyticsUrl?: Maybe<Scalars['String']['output']>;
  annotationAnchors: Array<AnnotationAnchor>;
  apexProxy: Scalars['String']['output'];
  attachments: Array<ReplAttachment>;
  betaTemplateRepl?: Maybe<Repl>;
  bytesUsed: ReplBytesUsedOutput;
  checkDomain2?: Maybe<CheckDomain2>;
  commentCount: Scalars['Int']['output'];
  commentSettings?: Maybe<ReplCommentSetting>;
  comments: ReplCommentConnection;
  config: ReplConfig;
  currentUserDidLike: Scalars['Boolean']['output'];
  currentUserPermissions: ReplUpdatePermissions;
  currentUserTotalTips?: Maybe<Scalars['Int']['output']>;
  database?: Maybe<Database>;
  deployment?: Maybe<ReplDeployment>;
  deprecatedLanguageConfig: Language;
  derivedApps?: Maybe<ReplConnection>;
  description?: Maybe<Scalars['String']['output']>;
  domains?: Maybe<Array<Maybe<Domain>>>;
  examples: Array<Repl>;
  folderId?: Maybe<Scalars['String']['output']>;
  gateOnOwner: Scalars['Boolean']['output'];
  /** @deprecated Use repl.powerUps.boost.sku instead */
  guaranteedProvisioningSku: Sku;
  hasGpu: Scalars['Boolean']['output'];
  hostedUrl: Scalars['String']['output'];
  hostingDeployment?: Maybe<ReplHostingDeployment>;
  hostingDeploymentLogs: ReplLogsOutput;
  hostingDeploymentPermissions: ReplHostingDeploymentPermissions;
  iconUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  inviteUrl?: Maybe<Scalars['String']['output']>;
  ioTestResults?: Maybe<Array<IoTestResult>>;
  ioTests: Array<ReplTemplateTest>;
  isAlwaysOn: Scalars['Boolean']['output'];
  isBoosted: Scalars['Boolean']['output'];
  isModelSolution: Scalars['Boolean']['output'];
  isModelSolutionFork: Scalars['Boolean']['output'];
  isOwner: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  isProject: Scalars['Boolean']['output'];
  isProjectFork: Scalars['Boolean']['output'];
  isRenamed?: Maybe<Scalars['Boolean']['output']>;
  isStarred: Scalars['Boolean']['output'];
  isTutorial: Scalars['Boolean']['output'];
  lang: Language;
  language: Scalars['String']['output'];
  /** @deprecated User legacyLanguageConfig.examples */
  languageExamples?: Maybe<Array<LanguageExample>>;
  lastPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  layoutState?: Maybe<Scalars['JSON']['output']>;
  lesson?: Maybe<UserCourseLesson>;
  likeCount: Scalars['Int']['output'];
  multiplayerInvites: Array<MultiplayerInvite>;
  multiplayers: Array<User>;
  nextPagePathname: Scalars['String']['output'];
  nixedLanguage?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Repl>;
  owner?: Maybe<ReplOwner>;
  /** @deprecated Use multiplayers field */
  permissions: Array<ReplPermission>;
  pinnedToProfile: Scalars['Boolean']['output'];
  posts: PostConnection;
  powerUpCosts: PowerUpCostsOutput;
  powerUps: ReplPowerUpTypesOutput;
  publicForkCount: Scalars['Int']['output'];
  publicForks: ReplConnection;
  /** @deprecated Use releasesForkCount instead */
  publicReleasesForkCount: Scalars['Int']['output'];
  publishedAs?: Maybe<PublishedReplKind>;
  recentComments: Array<ReplComment>;
  recentForks: Array<Repl>;
  relatedRepls: Array<RelatedReplsGroup>;
  releases: ReplReleaseConnection;
  releasesForkCount: Scalars['Int']['output'];
  replViewSettings?: Maybe<ReplViewSettings>;
  rootOriginReplUrl?: Maybe<Scalars['String']['output']>;
  runCount: Scalars['Int']['output'];
  /** @deprecated Repl size is no longer available in the GraphQL API */
  size: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  source?: Maybe<ReplSource>;
  /** @deprecated This field is part of an experimental feature and will change in the future.It should not be depended upon. */
  storageCapacity: StorageCapacityOutputType;
  submission?: Maybe<ReplSubmission>;
  tags: Array<Tag>;
  template?: Maybe<ReplTemplate>;
  templateCategories: Array<Maybe<TemplateCategory>>;
  /** @deprecated Deprecated in favour of repl.templateCategories field */
  templateCategory?: Maybe<Scalars['String']['output']>;
  templateInfo: ReplTemplateInfo;
  templateLabel: Scalars['String']['output'];
  templateReview?: Maybe<TemplateReview>;
  /** @deprecated Terminal hosting no longer supported */
  terminalUrl: Scalars['String']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  topTippers: Array<TipperUser>;
  totalCyclesTips: Scalars['Int']['output'];
  unitTestResults?: Maybe<Array<ReplUnitTestResultsOutput>>;
  unitTests?: Maybe<ReplUnitTestsWithMeta>;
  url: Scalars['String']['output'];
  user?: Maybe<User>;
  wasPosted: Scalars['Boolean']['output'];
  wasPublished: Scalars['Boolean']['output'];
  workspaceCta: ReplWorkspaceCta;
};


export type ReplAnalyticsPageViewsArgs = {
  input?: InputMaybe<ReplAnalyticsPageViewsInput>;
};


export type ReplAnalyticsTimeSeriesArgs = {
  input?: InputMaybe<ReplAnalyticsTimeSeriesInput>;
};


export type ReplAnalyticsTopListArgs = {
  input?: InputMaybe<ReplAnalyticsTopInput>;
};


export type ReplAttachmentsArgs = {
  fileName?: InputMaybe<Scalars['String']['input']>;
};


export type ReplCheckDomain2Args = {
  domain: Scalars['String']['input'];
};


export type ReplCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type ReplDeprecatedLanguageConfigArgs = {
  asText?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ReplDerivedAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type ReplDescriptionArgs = {
  plainText?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ReplGateOnOwnerArgs = {
  feature: Scalars['String']['input'];
};


export type ReplHostedUrlArgs = {
  dev?: InputMaybe<Scalars['Boolean']['input']>;
  dotty?: InputMaybe<Scalars['Boolean']['input']>;
  protocol?: InputMaybe<Protocols>;
};


export type ReplHostingDeploymentLogsArgs = {
  deploymentId: Scalars['String']['input'];
};


export type ReplIsOwnerArgs = {
  canWrite?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ReplLanguageExamplesArgs = {
  asText?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ReplPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type ReplPublicForksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type ReplRecentForksArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type ReplRelatedReplsArgs = {
  limitPerGroup?: InputMaybe<Scalars['Int']['input']>;
};


export type ReplReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type ReplTemplateLabelArgs = {
  disableFallbackToTitle?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ReplUrlArgs = {
  lite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReplAnalyticsPageViews = {
  __typename?: 'ReplAnalyticsPageViews';
  results: Array<ReplAnalyticsPageViewsData>;
  uniques: Scalars['Int']['output'];
};

export type ReplAnalyticsPageViewsData = {
  __typename?: 'ReplAnalyticsPageViewsData';
  failure: Scalars['Int']['output'];
  success: Scalars['Int']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type ReplAnalyticsPageViewsInput = {
  deployment?: InputMaybe<Scalars['Boolean']['input']>;
  hours: Scalars['Int']['input'];
  start: Scalars['DateTime']['input'];
};

export type ReplAnalyticsPageViewsOutput = NotFoundError | ReplAnalyticsPageViews | UserError;

export type ReplAnalyticsTimeSeries = {
  __typename?: 'ReplAnalyticsTimeSeries';
  results: Array<ReplAnalyticsTimeSeriesData>;
};

export type ReplAnalyticsTimeSeriesData = {
  __typename?: 'ReplAnalyticsTimeSeriesData';
  count: Scalars['Int']['output'];
  timestamp: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type ReplAnalyticsTimeSeriesInput = {
  deployment?: InputMaybe<Scalars['Boolean']['input']>;
  hours: Scalars['Int']['input'];
  metric: Scalars['String']['input'];
  start: Scalars['DateTime']['input'];
};

export type ReplAnalyticsTimeSeriesOutput = NotFoundError | ReplAnalyticsTimeSeries | UserError;

export type ReplAnalyticsTopInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  deployment?: InputMaybe<Scalars['Boolean']['input']>;
  hours: Scalars['Int']['input'];
  metric: Scalars['String']['input'];
  start: Scalars['DateTime']['input'];
};

export type ReplAnalyticsTopList = {
  __typename?: 'ReplAnalyticsTopList';
  results: Array<ReplAnalyticsTopResult>;
};

export type ReplAnalyticsTopListOutput = NotFoundError | ReplAnalyticsTopList | UserError;

export type ReplAnalyticsTopResult = {
  __typename?: 'ReplAnalyticsTopResult';
  count: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type ReplAttachment = {
  __typename?: 'ReplAttachment';
  contents: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  mimeType: Scalars['String']['output'];
  timeCreated: Scalars['Date']['output'];
  timeUpdated?: Maybe<Scalars['Date']['output']>;
};

export type ReplBootStatus = {
  __typename?: 'ReplBootStatus';
  repl: Repl;
  status: ReplBootStatusValue;
  timestamp: Scalars['DateTime']['output'];
};

export type ReplBootStatusConnection = {
  __typename?: 'ReplBootStatusConnection';
  items: Array<ReplBootStatus>;
  pageInfo: PageInfo;
};

export type ReplBootStatusEvent = {
  __typename?: 'ReplBootStatusEvent';
  status: ReplBootStatusValue;
  timestamp: Scalars['DateTime']['output'];
};

export type ReplBootStatusHistoryConnection = {
  __typename?: 'ReplBootStatusHistoryConnection';
  items: Array<ReplBootStatusEvent>;
  pageInfo: PageInfo;
};

export type ReplBootStatusHistoryInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  replId: Scalars['String']['input'];
};

export type ReplBootStatusHistoryOutput = ReplBootStatusHistoryConnection | UnauthorizedError | UserError;

export type ReplBootStatusInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReplBootStatusSort>;
};

export type ReplBootStatusOutput = ReplBootStatusConnection | UnauthorizedError | UserError;

export enum ReplBootStatusSort {
  LatestActivity = 'latestActivity',
  StatusDescending = 'statusDescending'
}

export type ReplBootStatusStopRepl = ReplBootStatusStopReplSuccess | UnauthorizedError | UserError;

export type ReplBootStatusStopReplSuccess = {
  __typename?: 'ReplBootStatusStopReplSuccess';
  message: Scalars['String']['output'];
};

export type ReplBootStatusUpdateEvent = {
  __typename?: 'ReplBootStatusUpdateEvent';
  repl: Repl;
  status: ReplBootStatusValue;
  timestamp: Scalars['DateTime']['output'];
};

export type ReplBootStatusUpdatesInput = {
  replIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum ReplBootStatusValue {
  AlwaysOn = 'alwaysOn',
  Asleep = 'asleep',
  Awake = 'awake',
  Limited = 'limited'
}

export type ReplBytesUsed = {
  __typename?: 'ReplBytesUsed';
  value: Scalars['String']['output'];
};

export type ReplBytesUsedOutput = NotFoundError | ReplBytesUsed | ServiceUnavailable | UnauthorizedError;

export enum ReplChangeAlwaysOnPermission {
  Allowed = 'Allowed',
  Disallowed = 'Disallowed',
  /** @deprecated We no longer use permissions as a proxy for subscription status */
  SubscriptionRequired = 'SubscriptionRequired'
}

export enum ReplChangePrivacyPermission {
  Allowed = 'Allowed',
  Disallowed = 'Disallowed',
  /** @deprecated We no longer use permissions as a proxy for subscription status */
  SubscriptionRequired = 'SubscriptionRequired'
}

export type ReplComment = {
  __typename?: 'ReplComment';
  body: Scalars['String']['output'];
  canComment: Scalars['Boolean']['output'];
  /** @deprecated Use currentUserPermissions.edit */
  canEdit: Scalars['Boolean']['output'];
  currentUserPermissions?: Maybe<ReplCommentPermissions>;
  id: Scalars['Int']['output'];
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  parentComment?: Maybe<ReplComment>;
  post?: Maybe<Post>;
  repl?: Maybe<Repl>;
  replies: Array<ReplComment>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};


export type ReplCommentBodyArgs = {
  removeMarkdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReplCommentConnection = {
  __typename?: 'ReplCommentConnection';
  items: Array<ReplComment>;
  pageInfo: PageInfo;
};

export type ReplCommentCreatedNotification = {
  __typename?: 'ReplCommentCreatedNotification';
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  replComment?: Maybe<ReplComment>;
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ReplCommentMentionNotification = {
  __typename?: 'ReplCommentMentionNotification';
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  replComment?: Maybe<ReplComment>;
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ReplCommentOutput = ReplComment | UserError;

export type ReplCommentPermissions = {
  __typename?: 'ReplCommentPermissions';
  banAuthor: Scalars['Boolean']['output'];
  canHideComment: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  edit: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  report: Scalars['Boolean']['output'];
};

export type ReplCommentReplyCreatedNotification = {
  __typename?: 'ReplCommentReplyCreatedNotification';
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  replComment?: Maybe<ReplComment>;
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ReplCommentSetting = {
  __typename?: 'ReplCommentSetting';
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
};

export type ReplConfig = {
  __typename?: 'ReplConfig';
  /** @deprecated Superseded by repl.isAlwaysOn */
  alwaysOn?: Maybe<Scalars['Boolean']['output']>;
  doClone?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Superseded by repl.domains */
  domain?: Maybe<Scalars['String']['output']>;
  gitRemoteUrl?: Maybe<Scalars['String']['output']>;
  isServer?: Maybe<Scalars['Boolean']['output']>;
  isVnc?: Maybe<Scalars['Boolean']['output']>;
};

export type ReplConnection = {
  __typename?: 'ReplConnection';
  items: Array<Repl>;
  pageInfo: PageInfo;
};

export type ReplConnections = {
  __typename?: 'ReplConnections';
  epoch: Scalars['DateTime']['output'];
  repl: Repl;
  users: Array<User>;
};

export type ReplContinent = {
  __typename?: 'ReplContinent';
  id: ReplContinentId;
  name: Scalars['String']['output'];
};

export enum ReplContinentId {
  Asia = 'ASIA',
  Na = 'NA'
}

export type ReplContinents = ReplContinentsOutput | UnauthorizedError;

export type ReplContinentsOutput = {
  __typename?: 'ReplContinentsOutput';
  continents: Array<ReplContinent>;
};

export type ReplDeployment = {
  __typename?: 'ReplDeployment';
  activeRelease?: Maybe<ReplRelease>;
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
};

export type ReplEgressSummary = {
  __typename?: 'ReplEgressSummary';
  percentage: Scalars['Float']['output'];
  repl: Repl;
  usage: Scalars['String']['output'];
};

export type ReplFileChange = {
  __typename?: 'ReplFileChange';
  changeType: ReplFileChangeType;
  fileName: Scalars['String']['output'];
};

export enum ReplFileChangeType {
  DeletedFile = 'DeletedFile',
  ModfiedFile = 'ModfiedFile',
  NewFile = 'NewFile'
}

export type ReplFolder = {
  __typename?: 'ReplFolder';
  canCreateSubFolders: Scalars['Boolean']['output'];
  canEdit: Scalars['Boolean']['output'];
  folderType?: Maybe<ReplFolderTypes>;
  folders: Array<ReplFolder>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<ReplFolder>;
  parentId?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  pathnames: Array<Scalars['String']['output']>;
  repls: ReplConnection;
  replsCount?: Maybe<Scalars['Int']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};


export type ReplFolderFoldersArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type ReplFolderReplsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  starred?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ReplFolderTypes {
  AllTeams = 'ALL_TEAMS',
  AlwaysOn = 'ALWAYS_ON',
  Boosts = 'BOOSTS',
  Default = 'DEFAULT',
  Multiplayer = 'MULTIPLAYER',
  Team = 'TEAM',
  Virtual = 'VIRTUAL'
}

export type ReplHostingDeployment = HostingDeployment | NotFoundError | UnauthorizedError | UserError;

export type ReplHostingDeploymentPermissions = {
  __typename?: 'ReplHostingDeploymentPermissions';
  canDeploy: Scalars['Boolean']['output'];
};

export type ReplLog = {
  __typename?: 'ReplLog';
  line: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type ReplLogs = {
  __typename?: 'ReplLogs';
  result: Array<ReplLog>;
};

export type ReplLogsOutput = ReplLogs;

export type ReplOutput = Repl | UserError;

export type ReplOwner = Team | User;

export type ReplPermission = {
  __typename?: 'ReplPermission';
  id: Scalars['Int']['output'];
  repl?: Maybe<Repl>;
  replId: Scalars['String']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  type: Repl_PermissionstypeEnumType;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export enum ReplPostsOrder {
  Hot = 'Hot',
  New = 'New',
  Top = 'Top'
}

export type ReplPostsQueryOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  boardSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ReplPostsOrder>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ReplPowerUpDescriptionType = {
  __typename?: 'ReplPowerUpDescriptionType';
  active: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  repl: Repl;
  sku: ReplPowerUpSkuEnumType;
  time_fulfillment_due?: Maybe<Scalars['DateTime']['output']>;
  time_last_fulfilled?: Maybe<Scalars['DateTime']['output']>;
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
  Unknown = 'unknown'
}

export enum ReplPowerUpTypeEnumType {
  AlwaysOn = 'alwaysOn',
  Boost = 'boost',
  Gpu = 'gpu',
  HostingTier = 'hosting_tier'
}

export type ReplPowerUpTypes = {
  __typename?: 'ReplPowerUpTypes';
  boost: BoostPowerUpType;
  hostingTier?: Maybe<HostingTierPowerUpType>;
};

export type ReplPowerUpTypesOutput = NotFoundError | ReplPowerUpTypes | UnauthorizedError | UserError;

export type ReplQueryOutput = Repl | ReplRedirect | SubscriptionExpiredError;

export type ReplReaction = {
  __typename?: 'ReplReaction';
  id: Scalars['Int']['output'];
  reactionType: Repl_ReactionsreactionTypeEnumType;
  repl?: Maybe<Repl>;
  userId: Scalars['Int']['output'];
};

export type ReplRedirect = {
  __typename?: 'ReplRedirect';
  repl?: Maybe<Repl>;
  replUrl: Scalars['String']['output'];
};

export type ReplRelease = {
  __typename?: 'ReplRelease';
  description: Scalars['String']['output'];
  hostedUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  pending: Scalars['Boolean']['output'];
  pendingChanges: Array<ReplFileChange>;
  repl?: Maybe<Repl>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type ReplReleaseConnection = {
  __typename?: 'ReplReleaseConnection';
  items: Array<ReplRelease>;
  pageInfo: PageInfo;
};

export type ReplSource = {
  __typename?: 'ReplSource';
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
  TwoGigs = 'TwoGigs'
}

export type ReplStorageUtilization = {
  __typename?: 'ReplStorageUtilization';
  percentage: Scalars['Float']['output'];
  repl: Repl;
  usage: Scalars['String']['output'];
};

export type ReplSubmission = {
  __typename?: 'ReplSubmission';
  author?: Maybe<User>;
  id: Scalars['Int']['output'];
  isGroupSubmission: Scalars['Boolean']['output'];
  repl?: Maybe<Repl>;
  submissionGroup?: Maybe<ReplSubmissionGroup>;
  timeLastReviewed?: Maybe<Scalars['Date']['output']>;
  timeSubmitted?: Maybe<Scalars['Date']['output']>;
};

export type ReplSubmissionGroup = {
  __typename?: 'ReplSubmissionGroup';
  submission?: Maybe<ReplSubmission>;
  users: Array<Maybe<User>>;
};

export type ReplTemplate = {
  __typename?: 'ReplTemplate';
  allowSelfGrouping: Scalars['Boolean']['output'];
  author: User;
  availableEndDate?: Maybe<Scalars['Date']['output']>;
  availableStartDate?: Maybe<Scalars['Date']['output']>;
  dueDate?: Maybe<Scalars['Date']['output']>;
  hoverImageUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isGroupProject: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  modelSolution?: Maybe<ReplTemplateModelSolution>;
  order?: Maybe<Scalars['Int']['output']>;
  repl: Repl;
  restrictAfterSubmit: Scalars['Boolean']['output'];
  selfGroupSize?: Maybe<Scalars['Int']['output']>;
  submissionGroups: Array<ReplSubmissionGroup>;
  submissionInfo?: Maybe<ReplTemplateSubmissionInfo>;
  submissions: Array<ReplSubmission>;
  team?: Maybe<Team>;
  tests: Array<ReplTemplateTest>;
  url: Scalars['String']['output'];
  userSubmissionGroup?: Maybe<ReplSubmissionGroup>;
};

export type ReplTemplateInfo = {
  __typename?: 'ReplTemplateInfo';
  iconUrl: Scalars['String']['output'];
  label: Scalars['String']['output'];
  replId?: Maybe<Scalars['String']['output']>;
};

export type ReplTemplateModelSolution = {
  __typename?: 'ReplTemplateModelSolution';
  canStudentFork: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  repl: Repl;
  studentFork?: Maybe<Repl>;
  visibleAfterDueDate: Scalars['Boolean']['output'];
  visibleAfterPassingTests: Scalars['Boolean']['output'];
  visibleAfterSubmitting: Scalars['Boolean']['output'];
};

export type ReplTemplateOutput = NotFoundError | ReplTemplate | UnauthorizedError;

export type ReplTemplateSubmissionInfo = {
  __typename?: 'ReplTemplateSubmissionInfo';
  startedCount: Scalars['Int']['output'];
  submittedCount: Scalars['Int']['output'];
};

export type ReplTemplateTest = {
  __typename?: 'ReplTemplateTest';
  id: Scalars['Int']['output'];
  input: Scalars['String']['output'];
  name: Scalars['String']['output'];
  output: Scalars['String']['output'];
  template: ReplTemplate;
  timeCreated: Scalars['Date']['output'];
  type: ReplTemplateTestType;
};

export enum ReplTemplateTestType {
  Compatibility = 'compatibility',
  Exact = 'exact',
  Match = 'match',
  Regex = 'regex'
}

export type ReplUnitTest = {
  __typename?: 'ReplUnitTest';
  code?: Maybe<Scalars['String']['output']>;
  failureMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastRun?: Maybe<ReplUnitTestLastRunOutput>;
  name: Scalars['String']['output'];
  repl: Repl;
};


export type ReplUnitTestLastRunArgs = {
  replId: Scalars['String']['input'];
};

export type ReplUnitTestLastRun = {
  __typename?: 'ReplUnitTestLastRun';
  status?: Maybe<ReplUnitTestLastRunStatus>;
};

export type ReplUnitTestLastRunOutput = ReplUnitTestLastRun | UserError;

export enum ReplUnitTestLastRunStatus {
  Failed = 'FAILED',
  None = 'NONE',
  Passed = 'PASSED'
}

export type ReplUnitTestMeta = {
  __typename?: 'ReplUnitTestMeta';
  id: Scalars['Int']['output'];
  imports?: Maybe<Scalars['String']['output']>;
  initialization?: Maybe<Scalars['String']['output']>;
  setup?: Maybe<Scalars['String']['output']>;
  tearDown?: Maybe<Scalars['String']['output']>;
};

export type ReplUnitTestMetaOutput = ReplUnitTestMeta | UserError;

export type ReplUnitTestOutput = ReplUnitTest | UserError;

export type ReplUnitTestResultsOutput = {
  __typename?: 'ReplUnitTestResultsOutput';
  id: Scalars['Int']['output'];
  status?: Maybe<ReplUnitTestLastRunStatus>;
};

export type ReplUnitTestsWithMeta = {
  __typename?: 'ReplUnitTestsWithMeta';
  meta?: Maybe<ReplUnitTestMeta>;
  tests: Array<ReplUnitTest>;
};

export type ReplUpdatePermissions = {
  __typename?: 'ReplUpdatePermissions';
  changeAlwaysOn: ReplChangeAlwaysOnPermission;
  changeCommentSettings: Scalars['Boolean']['output'];
  changeConfig: Scalars['Boolean']['output'];
  changeDescription: Scalars['Boolean']['output'];
  changeIconUrl: Scalars['Boolean']['output'];
  changeImageUrl: Scalars['Boolean']['output'];
  changeLanguage: Scalars['Boolean']['output'];
  changePrivacy: ReplChangePrivacyPermission;
  changeTemplateLabel: Scalars['Boolean']['output'];
  changeTitle: Scalars['Boolean']['output'];
  containerAttach: Scalars['Boolean']['output'];
  containerWrite: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  editMultiplayers: Scalars['Boolean']['output'];
  fork: Scalars['Boolean']['output'];
  inviteGuests: Scalars['Boolean']['output'];
  leaveMultiplayer: Scalars['Boolean']['output'];
  linkDomain: Scalars['Boolean']['output'];
  move: Scalars['Boolean']['output'];
  pin: Scalars['Boolean']['output'];
  publish: Scalars['Boolean']['output'];
  star: Scalars['Boolean']['output'];
  viewHistory: Scalars['Boolean']['output'];
  writeTests: Scalars['Boolean']['output'];
};

export type ReplViewSettings = {
  __typename?: 'ReplViewSettings';
  defaultView: Repl_View_SettingsdefaultViewEnumType;
  id: Scalars['Int']['output'];
  repl: Repl;
  replFile?: Maybe<Scalars['String']['output']>;
  replImage?: Maybe<Scalars['String']['output']>;
};

export enum ReplViewSettingsDefaultView {
  ReplFile = 'repl_file',
  ReplImage = 'repl_image'
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
  UpdateModelSolution = 'UpdateModelSolution'
}

export type RepliedToCommentNotification = {
  __typename?: 'RepliedToCommentNotification';
  comment?: Maybe<Comment>;
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type RepliedToPostNotification = {
  __typename?: 'RepliedToPostNotification';
  comment?: Maybe<Comment>;
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ReplitAppSubdomainAvailabilityOutput = ReplitAppSubdomainAvailabilityResult | UserError;

export type ReplitAppSubdomainAvailabilityResult = {
  __typename?: 'ReplitAppSubdomainAvailabilityResult';
  available: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type ReplitCheckoutSession = {
  __typename?: 'ReplitCheckoutSession';
  id: Scalars['String']['output'];
  status: CheckoutSessionStatus;
};

export type ReportBountyApplicationOutput = BoardReport | NotFoundError | UnauthorizedError | UserError;

export type ReportBountyOutput = BoardReport | NotFoundError | UnauthorizedError | UserError;

export type ReportCustomThemeOutput = BoardReport | NotFoundError | UnauthorizedError | UserError;

export type ReportReplCommentOutput = BoardReport | UnauthorizedError | UserError;

export type RepositoriesOutput = RepositoryConnection | UserAuthProviderError;

export type Repository = {
  __typename?: 'Repository';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  gitUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isPrivate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nameWithOwner: Scalars['String']['output'];
  ownerName: Scalars['String']['output'];
  primaryLanguage?: Maybe<GitHubLanguage>;
  provider: Scalars['String']['output'];
  repls?: Maybe<Array<Repl>>;
  starCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type RepositoryConnection = {
  __typename?: 'RepositoryConnection';
  count?: Maybe<Scalars['Int']['output']>;
  items: Array<Repository>;
};

export enum RepositoryPrivacy {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ResetPrivacyStudentPasswordOutput = ResetPrivacyStudentPasswordSuccess | UserError;

export type ResetPrivacyStudentPasswordSuccess = {
  __typename?: 'ResetPrivacyStudentPasswordSuccess';
  success: Scalars['Boolean']['output'];
};

export type RestartUserCourseLessonInput = {
  locale?: InputMaybe<Scalars['String']['input']>;
  userLessonId: Scalars['Int']['input'];
};

export type RestartUserCourseLessonOutput = NotFoundError | UnauthorizedError | UserCourseLessonResult | UserError;

export type RevertReplReleaseInput = {
  releaseId: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type RevertReplReleaseOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type ReviewBountyApplicationInput = {
  bountyApplicationId: Scalars['Int']['input'];
  status: ReviewBountyApplicationStatus;
};

export type ReviewBountyApplicationOutput = BountyApplication | NotFoundError | UnauthorizedError | UserError;

export enum ReviewBountyApplicationStatus {
  Accepted = 'accepted',
  NotReviewed = 'notReviewed',
  Rejected = 'rejected'
}

export type ReviewBountyHunter = BountyHunterReview | NotFoundError | UnauthorizedError | UserError;

export type ReviewBountyHunterInput = {
  bountyId: Scalars['Int']['input'];
  communicationRating: Scalars['Int']['input'];
  qualityRating: Scalars['Int']['input'];
  reviewText?: InputMaybe<Scalars['String']['input']>;
  timelinessRating: Scalars['Int']['input'];
  userToReviewId: Scalars['Int']['input'];
};

export type ReviewReplOutput = Repl | UserError;

export type ReviewTemplateInput = {
  landingPageSlug?: InputMaybe<Scalars['String']['input']>;
  replId: Scalars['String']['input'];
  shouldPromote: Scalars['Boolean']['input'];
};

export type ReviewTemplateOutput = TemplateReview | UnauthorizedError | UserError;

export type RootMutationType = {
  __typename?: 'RootMutationType';
  abandonBounty: AbandonBountyOutput;
  acceptInvoice: AcceptInvoiceOutput;
  addMultiplayerUser: ReplPermission;
  addReplIdentityAllowedRepl: AddReplIdentityAllowedRepl;
  adminRemoveReplIcon: AdminRemoveReplIconOutput;
  adminRemoveUserImage: AdminRemoveUserImageOutput;
  archiveTeam: ArchviveTeamInput;
  arrangeStack: ArrangeStackOutput;
  arrangeStackItem?: Maybe<ArrangeStackItemOutput>;
  asanaSupportRequest: AsanaSupportRequestOutput;
  banCommunityUser: BanCommunityUserOutput;
  boostRepl2: BoostRepl2Output;
  bulkModerate?: Maybe<BulkModerateOutput>;
  cancelBounty: CancelBountyOutput;
  cancelBountyAsStaff: CancelBountyAsStaffOutput;
  cancelInvoice: CancelInvoiceOutput;
  changeLanguageToNix: ChangeLanguagetoNixOutput;
  changeSubscription: ChangeSubscriptionOutput;
  clui?: Maybe<CluiMutation>;
  completeUserCourseLesson?: Maybe<UpdateUserCourseLessonOutput>;
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
  createCyclesStripeCheckoutSession?: Maybe<CreateCyclesStripeCheckoutSession>;
  createExtension: CreateExtensionOutput;
  createGithubAccessToken: CreateGithubAccessTokenOutput;
  createGithubRepo: CreateGithubRepoOutput;
  createInvoice: CreateInvoiceOutput;
  createLanguageConnectionMetadata: CreateLanguageConnectionMetadataOutput;
  createMultiplayerInvite2: MultiplayerInviteOutput;
  createNeonDatabase: CreateNeonDatabaseOutput;
  createNewTeamsEduOrganization: CreateNewTeamsEduOrganizationOutput;
  createRepl: CreateReplOutput;
  createReplAsTemplate: CreateReplAsTemplateOutput;
  createReplComment: CreateReplCommentOutput;
  createReplCommentReply: CreateReplCommentReplyOutput;
  createReplDeployment: CreateReplDeployemntOutput;
  createReplFolder: ReplFolder;
  createReplPost2: CreateReplPost2Output;
  createReplRelease: CreateReplReleaseOutput;
  createReplRun: CreateReplRunOutput;
  createReplSubmission: CreateReplSubmissionOutput;
  createReplSubmissionGroup: CreateReplSubmissionGroupOutput;
  createReplTemplate: CreateReplTemplateOutput;
  createReplTemplateModelSolution: CreateReplTemplateModelSolutionOutput;
  createReplTemplateModelSolutionFork: CreateReplTemplateModelSolutionForkOutput;
  createReplUnitTest: ReplUnitTestOutput;
  createReplUnitTestMeta: ReplUnitTestMetaOutput;
  createReplitOneTimeCheckoutSession: CreateReplitOneTimeCheckoutSessionOutput;
  createReplitPlanCheckoutSession: CreateReplitPlanCheckoutSessionOutput;
  createSetupIntent: CreateSetupIntentOutput;
  createStack?: Maybe<CreateStackOutput>;
  createTeacherVerificationResponse: CreateTeacherVerificationResponseOutput;
  createTeamInvite: CreateTeamInviteOutput;
  createTeamInviteLink: CreateTeamInviteLinkOutput;
  createTeamInvitesFromCSV: TeamOutput;
  createTeamOrgInviteLink: CreateTeamOrgInviteLinkOutput;
  createTeamOrganizationInvite: CreateTeamOrgInviteOutput;
  createTeamV2: CreateTeamV2Output;
  createTemplateShareLink: Team;
  createTemplateTest: TemplateTestOutput;
  createTheme: CreateThemeOutput;
  createUserCourse?: Maybe<CreateUserCourseOutput>;
  createUserCourseLesson?: Maybe<CreateUserCourseLessonOutput>;
  deleteAccount: Scalars['Boolean']['output'];
  deleteMultiplayerInvite: MultiplayerInviteOutput;
  deleteMultiplayerInviteLink: DeleteMultiplayerInviteLink;
  deleteNeonDatabase: DeleteNeonDatabaseOutput;
  deleteProjectAndSubmissions: DeletedProjectAndSubmissionOutput;
  deleteRepl: Repl;
  deleteReplComment: ReplCommentOutput;
  deleteReplDeployment: DeleteReplDeploymentOutput;
  deleteReplFolder: ReplFolder;
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
  deleteTemplateShareLink?: Maybe<Team>;
  deleteTemplateTest: DeleteReplTemplateOutput;
  deleteTheme: DeleteThemeOutput;
  deleteThreadMessage?: Maybe<DeleteThreadMessageOutput>;
  denyInvoice: DenyInvoiceOutput;
  deployExtension: DeployExtensionOutput;
  deployHostingBuild2?: Maybe<DeployHostingBuild2Output>;
  disconnectAuthProvider: CurrentUser;
  disconnectGoogleClassroom: DisconnectGoogleClassroomOutput;
  editBounty: EditBountyOutput;
  egressLimitAddOn: EgressLimitAddOnOutput;
  escalateBoardReport: EscalateBoardUserOutput;
  exportProjectsOverview: ExportProjectsOverviewOutput;
  exportTeamSubmissions: ExportTeamSubmissionsOutput;
  failHostingBuild?: Maybe<FailHostingBuildOutput>;
  forceSolverToAbandonBountyAsStaff: ForceSolverToAbandonBountyAsStaffOutput;
  freezeNeonDatabase: FreezeNeonDatabaseOutput;
  getOrCreateAppStoreCustomer: AppStoreCustomerOutput;
  getOrCreatePlayStoreCustomer: PlayStoreCustomerOutput;
  giveCodexFeedback2: CodexFeedback2Output;
  hireBountyHunterService: HireBountyHunterServiceOutput;
  importCurriculum: ImportCurriculumOutput;
  importGithubRepo: ImportGithubRepoOutput;
  installExtension: InstallExtensionOutput;
  installTheme: InstallThemeOutput;
  joinReplSubmissionGroup?: Maybe<JoinReplSubmissionGroupOutput>;
  joinTeamAsOrgAdmin: JoinTeamAsOrgAdminOutput;
  leaveTeam: LeaveTeamOutput;
  linkReplDomain2: LinkReplDomain2;
  markAllNotificationsAsSeen: CurrentUser;
  markBountyChatRead: MarkBountyChatReadOutput;
  markMessagesAsSeen?: Maybe<MarkMessagesAsSeenOutput>;
  markNotificationsAsSeen: Scalars['Int']['output'];
  markTourAsSeen: TourSeen;
  migrateTeamToStacks?: Maybe<MigrateTeamToStacksOutput>;
  moderateBountyApplication: ModerateBountyApplicationOutput;
  moderatorNotification: ModeratorNotificationOutput;
  moderatorUnpublish: ModeratorUnpublishOutput;
  moveItemsToFolder: Array<DashboardItem>;
  ownAnonRepl: ReplOutput;
  pinReplToProfile2: PinReplToProfileOutput;
  publishTheme: PublishThemeOutput;
  refreshMultiplayerInviteLink: Repl;
  registerPushDeviceSession: RegisterPushDeviceSessionOutput;
  removeBountyApplicationAsApplicant: RemoveBountyApplicationAsApplicantOutput;
  removeBountyApplicationAsModerator: RemoveBountyApplicationAsModeratorOutput;
  removeBountyHunterReviewAsStaff: RemoveBountyHunterReviewAsStaffOutput;
  removeMultiplayerUser: ReplPermission;
  removeSharedRepl: Repl;
  removeTeamMember: RemoveTeamMemberOutput;
  removeWarn: RemoveWarnOutput;
  replBootStatusStopRepl: ReplBootStatusStopRepl;
  reportBounty: ReportBountyOutput;
  reportBountyApplication: ReportBountyApplicationOutput;
  reportCustomTheme: ReportCustomThemeOutput;
  reportReplComment: ReportReplCommentOutput;
  resetPrivacyStudentPassword: ResetPrivacyStudentPasswordOutput;
  resolveBoardReport: BoardReport;
  resolveImageScan: ImageScanType;
  restartUserCourseLesson?: Maybe<RestartUserCourseLessonOutput>;
  revertReplRelease: RevertReplReleaseOutput;
  reviewBountyApplication: ReviewBountyApplicationOutput;
  reviewBountyHunter: ReviewBountyHunter;
  reviewRepl: ReviewReplOutput;
  reviewTemplate: ReviewTemplateOutput;
  saveIOTestResults?: Maybe<SaveIoTestResultOutput>;
  selectReplContinent: SelectReplContinent;
  sendBountyChat: SendBountyChatOutput;
  sendDeploymentLifecycleCommand: SendDeploymentLifecycleCommandOutput;
  sendPushToStaff: SendPushToStaff;
  sendTip: SendTipOutput;
  setActiveTheme?: Maybe<SetActiveThemeOutput>;
  setAlwaysOn: SetAlwaysOnOutput;
  setBetaTemplateRepl?: Maybe<SetBetaTemplateOutput>;
  setBlocking2: SetBlocking2;
  setBountyUnlisted: SetBountyUnlistedOutput;
  setFollowing?: Maybe<SetFollowing>;
  setGpu: SetGpuOutput;
  setHostingTier: SetHostingTierOutput;
  setLanguageTemplateRepl: SetLanguageTemplateOutput;
  setOnboardingExperience: SetOnboardingExperienceOutput;
  setOnboardingIntent: SetOnboardingIntentOutput;
  setReplCommentSettings: ReplOutput;
  setReplExamples: SetReplExamplesOutput;
  setReplLayoutState: SetReplLayoutStateOutput;
  setReplTags: SetReplTagsOutput;
  setReplViewSettings: SetReplViewSettingsOutput;
  setStorageCapacity: SetStorageCapacityOutput;
  setTemplateCategoryRepl?: Maybe<SetTemplateCategoryReplOutput>;
  setTemplateReplCategory: SetTemplateCategoryOutput;
  setUserCoverImage: SetUserCoverImageOutput;
  setUserKeybindings: SetUserKeybindingsOutput;
  setUserSocials: SetUserSocialsOutput;
  setUserStorageQuota: SetUserStorageQuotaOutput;
  submitRepl: SubmitReplOutput;
  testSubscription?: Maybe<Scalars['Boolean']['output']>;
  toggleHiddenComment: ToggleHiddenCommentOutput;
  toggleHiddenPost: ToggleHiddenPostOutput;
  toggleReplLike: ToggleReplLikeOutput;
  toursSeen: ToursSeenMuationResult;
  unarchiveTeam: UnarchiveTeamOutput;
  unbanCommunityUser: UnbanCommunityUserOutput;
  unfreezeNeonDatabase: UnfreezeNeonDatabaseOutput;
  uninstallExtension: UninstallExtensionOutput;
  uninstallTheme: UninstallThemeOutput;
  unpinReplFromProfile2: UnpinReplFromProfileOutput;
  unpublishReplFromCommunity: UnpublishReplFromCommunityOutput;
  unpublishTheme: UnpublishThemeOutput;
  unpublishThemeAsModerator: UnpublishThemeAsModeratorOutput;
  unregisterPushDeviceSession: UnregisterPushDeviceSessionOutput;
  unresolveBoardReport: BoardReport;
  unsetTemplateCategoryRepl?: Maybe<UnsetTemplateCategoryReplOutput>;
  unsubmitRepl: UnsubmitReplOutput;
  updateAnnotationAnchor?: Maybe<UpdateAnnotationAnchorOutput>;
  updateBoardTrendingAlgorithmSettings: BoardTrendingAlgorithmSettings;
  updateCurrentUser?: Maybe<CurrentUser>;
  updateCyclesAutoRefillConfiguration: UpdateCyclesAutoRefillConfigurationOutput;
  updateEditorPreferences: CurrentUser;
  updateEmail?: Maybe<UpdateUserOutput>;
  updateGhostwriterPowerUp: UpdateGhostwriterPowerUpOutput;
  updatePassword?: Maybe<UpdateUserOutput>;
  updatePost: UpdatePostPayload;
  updatePrivatePowerUp: UpdatePrivatePowerUpOutput;
  updatePrivatePowerUp2: UpdatePrivatePowerUp2Output;
  updateRepl: UpdateReplPayload;
  updateReplComment: ReplCommentOutput;
  updateReplFolder: ReplFolder;
  updateReplTemplate: UpdateReplTemplateOutputType;
  updateReplTemplateModelSolution: UpdateReplTemplateModelSolutionOutput;
  updateReplTimeUpdated: UpdateReplTimeUpdatedOutput;
  updateReplUnitTest: ReplUnitTestOutput;
  updateReplUnitTestLastRun?: Maybe<UpdateReplUnitTestLastRunOutput>;
  updateReplUnitTestMeta: ReplUnitTestMetaOutput;
  updateRole?: Maybe<UpdateUserOutput>;
  updateStack: UpdateStackOutput;
  updateSubscription: UpdateSubscription;
  updateTeam: TeamOutput;
  updateTeamInviteLinkEduSignup: UpdateTeamInviteLinkEduSignupOutput;
  updateTeamMember: UpdateTeamMemberOutput;
  updateTeamOrganization: UpdateTeamOrganizationOutput;
  updateTeamOrganizationMember: UpdateTeamOrganizationMemberOutput;
  updateTeamUserPermissions: UpdateTeamUserPermissionsOutput;
  updateTemplateShareLink: TeamTemplateShareLink;
  updateTemplateTest: TemplateTestOutput;
  updateTheme: UpdateThemeOutput;
  updateThreadPreview?: Maybe<Scalars['Boolean']['output']>;
  updateUserPrivacyPreferences: UpdateUserPrivacyPreferencesOutput;
  updateUserSitePresence: UpdateUserSitePresenceOutput;
  upgradeTheme: UpgradeThemeOutput;
  uploadReplAttachment?: Maybe<UploadReplAttachmentOutput>;
  useTemplateShareLink: Scalars['Int']['output'];
  warnUser: WarnUserOutput;
};


export type RootMutationTypeAbandonBountyArgs = {
  input: AbandonBountyInput;
};


export type RootMutationTypeAcceptInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type RootMutationTypeAddMultiplayerUserArgs = {
  replId: Scalars['String']['input'];
  type: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type RootMutationTypeAddReplIdentityAllowedReplArgs = {
  input: AddReplIdentityAllowedReplInput;
};


export type RootMutationTypeAdminRemoveReplIconArgs = {
  reason: Scalars['String']['input'];
  replUrl: Scalars['String']['input'];
};


export type RootMutationTypeAdminRemoveUserImageArgs = {
  deleteCoverImage?: InputMaybe<Scalars['Boolean']['input']>;
  deleteProfilePicture?: InputMaybe<Scalars['Boolean']['input']>;
  reason: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type RootMutationTypeArchiveTeamArgs = {
  input: ArchiveTeamInput;
};


export type RootMutationTypeArrangeStackArgs = {
  input: ArrangeStackInput;
};


export type RootMutationTypeArrangeStackItemArgs = {
  input: ArrangeStackItemInput;
};


export type RootMutationTypeAsanaSupportRequestArgs = {
  input: AsanaSupportRequestInput;
};


export type RootMutationTypeBanCommunityUserArgs = {
  reason: Scalars['String']['input'];
  timeExpired?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};


export type RootMutationTypeBoostRepl2Args = {
  input: BoostRepl2Input;
};


export type RootMutationTypeBulkModerateArgs = {
  input: BulkModerateInputArg;
};


export type RootMutationTypeCancelBountyArgs = {
  input: CancelBountyInput;
};


export type RootMutationTypeCancelBountyAsStaffArgs = {
  input: CancelBountyAsStaffInput;
};


export type RootMutationTypeCancelInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type RootMutationTypeChangeLanguageToNixArgs = {
  id: Scalars['String']['input'];
  lang: Scalars['String']['input'];
};


export type RootMutationTypeChangeSubscriptionArgs = {
  input: ChangeSubscriptionInput;
};


export type RootMutationTypeCompleteUserCourseLessonArgs = {
  input: CompleteUserCourseLessonInput;
};


export type RootMutationTypeConfirmInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type RootMutationTypeConnectGoogleClassroomArgs = {
  input: ConnectGoogleClassroomInput;
};


export type RootMutationTypeCopyStacksToTeamArgs = {
  input: CopyStacksToTeamInput;
};


export type RootMutationTypeCopyTeamTemplateArgs = {
  input: CopyTeamTemplateInput;
};


export type RootMutationTypeCreateAnnotationAnchorArgs = {
  annotationAnchor: AnnotationAnchorInput;
  annotationMessage?: InputMaybe<AnnotationMessageInput>;
  highlight?: InputMaybe<AnnotationHighlightInput>;
};


export type RootMutationTypeCreateAnnotationMessageArgs = {
  anchorId: Scalars['String']['input'];
  annotationMessage: AnnotationMessageInput;
  highlight?: InputMaybe<AnnotationHighlightInput>;
  replId: Scalars['String']['input'];
};


export type RootMutationTypeCreateAsanaFeedbackTaskArgs = {
  input: CreateAsanaFeedbackTaskInput;
};


export type RootMutationTypeCreateAsanaFeedbackTaskReturnGidArgs = {
  input: CreateAsanaFeedbackTaskInputReturnGid;
};


export type RootMutationTypeCreateAsanaSupportTaskArgs = {
  input: CreateAsanaSupportTaskInput;
};


export type RootMutationTypeCreateBoardReportArgs = {
  commentId?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  reason: Scalars['String']['input'];
  replId?: InputMaybe<Scalars['String']['input']>;
  reportedUserId?: InputMaybe<Scalars['Int']['input']>;
};


export type RootMutationTypeCreateBountyArgs = {
  input: CreateBountyInput;
};


export type RootMutationTypeCreateBountyApplicationArgs = {
  input: CreateBountyApplicationInput;
};


export type RootMutationTypeCreateBountySubmissionArgs = {
  input: CreateBountySubmissionInput;
};


export type RootMutationTypeCreateBountySubmissionReviewArgs = {
  input: CreateBountySubmissionReviewInput;
};


export type RootMutationTypeCreateCyclesStripeCheckoutSessionArgs = {
  input: CreateCyclesStripeCheckoutSessionInput;
};


export type RootMutationTypeCreateExtensionArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeCreateGithubAccessTokenArgs = {
  input: CreateGithubAccessTokenInput;
};


export type RootMutationTypeCreateGithubRepoArgs = {
  input: CreateGithubRepoInput;
};


export type RootMutationTypeCreateInvoiceArgs = {
  amount: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type RootMutationTypeCreateLanguageConnectionMetadataArgs = {
  language: Scalars['String']['input'];
  overrideClusterMetadata?: InputMaybe<ClusterMetadata>;
};


export type RootMutationTypeCreateMultiplayerInvite2Args = {
  email: Scalars['String']['input'];
  replId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type RootMutationTypeCreateNeonDatabaseArgs = {
  input: CreateNeonDatabaseInput;
};


export type RootMutationTypeCreateNewTeamsEduOrganizationArgs = {
  input: CreateNewTeamsEduOrganizationInput;
};


export type RootMutationTypeCreateReplArgs = {
  input: CreateReplInput;
  isTitleAutoGenerated?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RootMutationTypeCreateReplAsTemplateArgs = {
  input: CreateReplAsTemplateInput;
};


export type RootMutationTypeCreateReplCommentArgs = {
  input: CreateReplCommentInput;
};


export type RootMutationTypeCreateReplCommentReplyArgs = {
  input: CreateReplCommentReplyInput;
};


export type RootMutationTypeCreateReplDeploymentArgs = {
  input: CreateReplDeployemntInput;
};


export type RootMutationTypeCreateReplFolderArgs = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type RootMutationTypeCreateReplPost2Args = {
  input: CreateReplPost2Input;
};


export type RootMutationTypeCreateReplReleaseArgs = {
  input: CreateReplReleaseInput;
};


export type RootMutationTypeCreateReplRunArgs = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeCreateReplSubmissionArgs = {
  templateId: Scalars['Int']['input'];
};


export type RootMutationTypeCreateReplSubmissionGroupArgs = {
  input: CreateReplSubmissionGroupInput;
};


export type RootMutationTypeCreateReplTemplateArgs = {
  input: CreateReplTemplateInput;
};


export type RootMutationTypeCreateReplTemplateModelSolutionArgs = {
  input: CreateReplTemplateModelSolutionInput;
};


export type RootMutationTypeCreateReplTemplateModelSolutionForkArgs = {
  input: CreateReplTemplateModelSolutionForkInput;
};


export type RootMutationTypeCreateReplUnitTestArgs = {
  input: CreateReplUnitTestInput;
};


export type RootMutationTypeCreateReplUnitTestMetaArgs = {
  input: CreateReplUnitTestMetaInput;
};


export type RootMutationTypeCreateReplitOneTimeCheckoutSessionArgs = {
  input: CreateReplitOneTimeCheckoutSessionInput;
};


export type RootMutationTypeCreateReplitPlanCheckoutSessionArgs = {
  input: CreateReplitPlanCheckoutSessionInput;
};


export type RootMutationTypeCreateStackArgs = {
  input: CreateStackInput;
};


export type RootMutationTypeCreateTeacherVerificationResponseArgs = {
  input: CreateTeacherVerificationResponseInput;
};


export type RootMutationTypeCreateTeamInviteArgs = {
  input: CreateTeamInviteInput;
};


export type RootMutationTypeCreateTeamInviteLinkArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeCreateTeamInvitesFromCsvArgs = {
  input: CsvFileInput;
};


export type RootMutationTypeCreateTeamOrgInviteLinkArgs = {
  orgId: Scalars['Int']['input'];
};


export type RootMutationTypeCreateTeamOrganizationInviteArgs = {
  input: CreateTeamOrgInviteInput;
};


export type RootMutationTypeCreateTeamV2Args = {
  input: CreateTeamV2Input;
};


export type RootMutationTypeCreateTemplateShareLinkArgs = {
  teamId: Scalars['Int']['input'];
  templateIds: Array<Scalars['Int']['input']>;
};


export type RootMutationTypeCreateTemplateTestArgs = {
  input: CreateTemplateTestInput;
};


export type RootMutationTypeCreateThemeArgs = {
  input: CreateThemeInput;
};


export type RootMutationTypeCreateUserCourseArgs = {
  input: CreateUserCourseInput;
};


export type RootMutationTypeCreateUserCourseLessonArgs = {
  input: CreateUserCourseLessonInput;
};


export type RootMutationTypeDeleteMultiplayerInviteArgs = {
  email: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};


export type RootMutationTypeDeleteMultiplayerInviteLinkArgs = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeDeleteNeonDatabaseArgs = {
  input: DeleteNeonDatabaseInput;
};


export type RootMutationTypeDeleteProjectAndSubmissionsArgs = {
  id: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteReplArgs = {
  id: Scalars['String']['input'];
};


export type RootMutationTypeDeleteReplCommentArgs = {
  id: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteReplDeploymentArgs = {
  input: DeleteReplDeploymentInput;
};


export type RootMutationTypeDeleteReplFolderArgs = {
  folderId: Scalars['String']['input'];
};


export type RootMutationTypeDeleteReplIdentityAllowedReplArgs = {
  input: DeleteReplIdentityAllowedReplInput;
};


export type RootMutationTypeDeleteReplUnitTestArgs = {
  testId: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteStackArgs = {
  stackId: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteTeamArgs = {
  input: DeleteTeamInput;
};


export type RootMutationTypeDeleteTeamInviteArgs = {
  input: DeleteTeamInviteInput;
};


export type RootMutationTypeDeleteTeamInviteLinkArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteTeamOrgInviteLinkArgs = {
  orgId: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteTeamOrganizationArgs = {
  input: DeleteTeamOrganizationInput;
};


export type RootMutationTypeDeleteTeamOrganizationInviteArgs = {
  input: DeleteTeamOrgInviteInput;
};


export type RootMutationTypeDeleteTeamOrganizationMemberArgs = {
  input: DeleteTeamOrganizationMemberInput;
};


export type RootMutationTypeDeleteTemplateShareLinkArgs = {
  linkId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteTemplateTestArgs = {
  testId: Scalars['Int']['input'];
};


export type RootMutationTypeDeleteThemeArgs = {
  input: DeleteThemeInput;
};


export type RootMutationTypeDeleteThreadMessageArgs = {
  messageId: Scalars['String']['input'];
};


export type RootMutationTypeDenyInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type RootMutationTypeDeployExtensionArgs = {
  extensionId: Scalars['String']['input'];
  outputDirectory: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};


export type RootMutationTypeDeployHostingBuild2Args = {
  input: DeployHostingBuild2Input;
};


export type RootMutationTypeDisconnectAuthProviderArgs = {
  provider: UserAuthProviders;
};


export type RootMutationTypeDisconnectGoogleClassroomArgs = {
  input: DisconnectGoogleClassroomInput;
};


export type RootMutationTypeEditBountyArgs = {
  input: EditBountyInput;
};


export type RootMutationTypeEgressLimitAddOnArgs = {
  input: EgressLimitAddOnInput;
};


export type RootMutationTypeEscalateBoardReportArgs = {
  id: Scalars['Int']['input'];
};


export type RootMutationTypeExportProjectsOverviewArgs = {
  input: ExportProjectsOverviewInput;
};


export type RootMutationTypeExportTeamSubmissionsArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeFailHostingBuildArgs = {
  input: FailHostingBuildInput;
};


export type RootMutationTypeForceSolverToAbandonBountyAsStaffArgs = {
  input: ForceSolverToAbandonBountyAsStaffInput;
};


export type RootMutationTypeFreezeNeonDatabaseArgs = {
  input: FreezeNeonDatabaseInput;
};


export type RootMutationTypeGiveCodexFeedback2Args = {
  input: CodexFeedback2Input;
};


export type RootMutationTypeHireBountyHunterServiceArgs = {
  input: HireBountyHunterServiceInput;
};


export type RootMutationTypeImportCurriculumArgs = {
  input: ImportCurriculumInput;
};


export type RootMutationTypeImportGithubRepoArgs = {
  input: ImportGithubRepoInput;
};


export type RootMutationTypeInstallExtensionArgs = {
  extensionId: Scalars['String']['input'];
  replId?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeInstallThemeArgs = {
  input: InstallThemeInput;
};


export type RootMutationTypeJoinReplSubmissionGroupArgs = {
  input: JoinReplSubmissionGroupInput;
};


export type RootMutationTypeJoinTeamAsOrgAdminArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeLeaveTeamArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeLinkReplDomain2Args = {
  deploymentId?: InputMaybe<Scalars['String']['input']>;
  domain: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};


export type RootMutationTypeMarkBountyChatReadArgs = {
  input: MarkBountyChatReadInput;
};


export type RootMutationTypeMarkMessagesAsSeenArgs = {
  messageIds?: InputMaybe<Array<Scalars['String']['input']>>;
  replId: Scalars['String']['input'];
  threadId?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeMarkNotificationsAsSeenArgs = {
  context?: InputMaybe<NotificationContext>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeMarkTourAsSeenArgs = {
  name: Scalars['String']['input'];
};


export type RootMutationTypeMigrateTeamToStacksArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeModerateBountyApplicationArgs = {
  input: ModerateBountyApplicationInput;
};


export type RootMutationTypeModeratorNotificationArgs = {
  input: ModeratorNotificationInput;
};


export type RootMutationTypeModeratorUnpublishArgs = {
  input: ModeratorUnpublishInput;
};


export type RootMutationTypeMoveItemsToFolderArgs = {
  destFolderId: Scalars['String']['input'];
  folderIds: Array<InputMaybe<Scalars['String']['input']>>;
  replIds: Array<InputMaybe<Scalars['String']['input']>>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type RootMutationTypeOwnAnonReplArgs = {
  input: OwnAnonReplInput;
};


export type RootMutationTypePinReplToProfile2Args = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypePublishThemeArgs = {
  input: PublishThemeInput;
};


export type RootMutationTypeRefreshMultiplayerInviteLinkArgs = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeRegisterPushDeviceSessionArgs = {
  input: RegisterPushDeviceSessionInput;
};


export type RootMutationTypeRemoveBountyApplicationAsApplicantArgs = {
  input: RemoveBountyApplicationAsApplicantInput;
};


export type RootMutationTypeRemoveBountyApplicationAsModeratorArgs = {
  input: RemoveBountyApplicationAsModeratorInput;
};


export type RootMutationTypeRemoveBountyHunterReviewAsStaffArgs = {
  input: RemoveBountyHunterReviewAsStaffInput;
};


export type RootMutationTypeRemoveMultiplayerUserArgs = {
  replId: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type RootMutationTypeRemoveSharedReplArgs = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeRemoveTeamMemberArgs = {
  input: RemoveTeamMemberInput;
};


export type RootMutationTypeRemoveWarnArgs = {
  username: Scalars['String']['input'];
  warnId: Scalars['Int']['input'];
};


export type RootMutationTypeReplBootStatusStopReplArgs = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeReportBountyArgs = {
  bountyId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};


export type RootMutationTypeReportBountyApplicationArgs = {
  bountyApplicationId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};


export type RootMutationTypeReportCustomThemeArgs = {
  customThemeId: Scalars['Int']['input'];
  customThemeVersionId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};


export type RootMutationTypeReportReplCommentArgs = {
  reason: Scalars['String']['input'];
  replCommentId: Scalars['Int']['input'];
};


export type RootMutationTypeResetPrivacyStudentPasswordArgs = {
  password: Scalars['String']['input'];
  teamId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type RootMutationTypeResolveBoardReportArgs = {
  id: Scalars['Int']['input'];
};


export type RootMutationTypeResolveImageScanArgs = {
  imageScanClassificationId: Scalars['Int']['input'];
};


export type RootMutationTypeRestartUserCourseLessonArgs = {
  input: RestartUserCourseLessonInput;
};


export type RootMutationTypeRevertReplReleaseArgs = {
  input: RevertReplReleaseInput;
};


export type RootMutationTypeReviewBountyApplicationArgs = {
  input: ReviewBountyApplicationInput;
};


export type RootMutationTypeReviewBountyHunterArgs = {
  input: ReviewBountyHunterInput;
};


export type RootMutationTypeReviewReplArgs = {
  replId: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};


export type RootMutationTypeReviewTemplateArgs = {
  input: ReviewTemplateInput;
};


export type RootMutationTypeSaveIoTestResultsArgs = {
  replId: Scalars['String']['input'];
  results: Array<IoTestResultInput>;
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeSelectReplContinentArgs = {
  input: SelectReplContinentInput;
};


export type RootMutationTypeSendBountyChatArgs = {
  input: SendBountyChatInput;
};


export type RootMutationTypeSendDeploymentLifecycleCommandArgs = {
  input: SendDeploymentLifecycleCommandInput;
};


export type RootMutationTypeSendPushToStaffArgs = {
  input: SendPushToStaffInput;
};


export type RootMutationTypeSendTipArgs = {
  input: SendTipInput;
};


export type RootMutationTypeSetActiveThemeArgs = {
  input: SetActiveThemeInput;
};


export type RootMutationTypeSetAlwaysOnArgs = {
  enabled: Scalars['Boolean']['input'];
  replId: Scalars['ID']['input'];
};


export type RootMutationTypeSetBetaTemplateReplArgs = {
  input: SetBetaTemplateInput;
};


export type RootMutationTypeSetBlocking2Args = {
  input: SetBlocking2Input;
};


export type RootMutationTypeSetBountyUnlistedArgs = {
  bountyId: Scalars['Int']['input'];
  isUnlisted: Scalars['Boolean']['input'];
};


export type RootMutationTypeSetFollowingArgs = {
  input: SetFollowingInput;
};


export type RootMutationTypeSetGpuArgs = {
  enabled: Scalars['Boolean']['input'];
  replId: Scalars['ID']['input'];
};


export type RootMutationTypeSetHostingTierArgs = {
  input: SetHostingTierInput;
};


export type RootMutationTypeSetLanguageTemplateReplArgs = {
  input: SetLanguageTemplateInput;
};


export type RootMutationTypeSetOnboardingExperienceArgs = {
  role: OnboardingExperience;
};


export type RootMutationTypeSetOnboardingIntentArgs = {
  role: Intent;
};


export type RootMutationTypeSetReplCommentSettingsArgs = {
  input: SetReplCommentSettingsInput;
};


export type RootMutationTypeSetReplExamplesArgs = {
  input: SetReplExamplesInput;
};


export type RootMutationTypeSetReplLayoutStateArgs = {
  input: SetReplLayoutStateInput;
};


export type RootMutationTypeSetReplTagsArgs = {
  input: SetReplTagsInput;
};


export type RootMutationTypeSetReplViewSettingsArgs = {
  input: SetReplViewSettingsInput;
};


export type RootMutationTypeSetStorageCapacityArgs = {
  input: SetStorageCapacityInput;
};


export type RootMutationTypeSetTemplateCategoryReplArgs = {
  input: SetTemplateCategoryReplInput;
};


export type RootMutationTypeSetTemplateReplCategoryArgs = {
  input: SetTemplateReplCategoryInput;
};


export type RootMutationTypeSetUserCoverImageArgs = {
  input: SetUserCoverImageInput;
};


export type RootMutationTypeSetUserKeybindingsArgs = {
  input: SetUserKeybindingsInput;
};


export type RootMutationTypeSetUserSocialsArgs = {
  input: SetUserSocialsInput;
};


export type RootMutationTypeSubmitReplArgs = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeToggleHiddenCommentArgs = {
  commentId: Scalars['Int']['input'];
  isHidden: Scalars['Boolean']['input'];
};


export type RootMutationTypeToggleHiddenPostArgs = {
  isHidden: Scalars['Boolean']['input'];
  postId: Scalars['Int']['input'];
};


export type RootMutationTypeToggleReplLikeArgs = {
  input: ToggleReplLikeInput;
};


export type RootMutationTypeToursSeenArgs = {
  name: Scalars['String']['input'];
};


export type RootMutationTypeUnarchiveTeamArgs = {
  input: UnarchiveTeamInput;
};


export type RootMutationTypeUnbanCommunityUserArgs = {
  input: UnbanCommunityUserInput;
};


export type RootMutationTypeUnfreezeNeonDatabaseArgs = {
  input: UnfreezeNeonDatabaseInput;
};


export type RootMutationTypeUninstallExtensionArgs = {
  installationId: Scalars['String']['input'];
};


export type RootMutationTypeUninstallThemeArgs = {
  input: UninstallThemeInput;
};


export type RootMutationTypeUnpinReplFromProfile2Args = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeUnpublishReplFromCommunityArgs = {
  input: UnpublishReplFromCommunityInput;
};


export type RootMutationTypeUnpublishThemeArgs = {
  input: UnpublishThemeInput;
};


export type RootMutationTypeUnpublishThemeAsModeratorArgs = {
  input: UnpublishThemeAsModeratorInput;
};


export type RootMutationTypeUnregisterPushDeviceSessionArgs = {
  input: UnregisterPushDeviceSessionInput;
};


export type RootMutationTypeUnresolveBoardReportArgs = {
  id: Scalars['Int']['input'];
};


export type RootMutationTypeUnsetTemplateCategoryReplArgs = {
  input: UnsetTemplateCategoryReplInput;
};


export type RootMutationTypeUnsubmitReplArgs = {
  replId: Scalars['String']['input'];
};


export type RootMutationTypeUpdateAnnotationAnchorArgs = {
  changes: AnnotationAnchorChangesInput;
  id: Scalars['String']['input'];
};


export type RootMutationTypeUpdateBoardTrendingAlgorithmSettingsArgs = {
  input: UpdateBoardTrendingAlgorithmSettingsInput;
};


export type RootMutationTypeUpdateCurrentUserArgs = {
  input: UpdateCurrentUserInput;
};


export type RootMutationTypeUpdateCyclesAutoRefillConfigurationArgs = {
  input: UpdateCyclesAutoRefillConfigurationInput;
};


export type RootMutationTypeUpdateEditorPreferencesArgs = {
  input: UpdateEditorPreferencesInput;
};


export type RootMutationTypeUpdateEmailArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type RootMutationTypeUpdateGhostwriterPowerUpArgs = {
  input: UpdateGhostwriterPowerUpInput;
};


export type RootMutationTypeUpdatePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type RootMutationTypeUpdatePostArgs = {
  input: UpdatePostInput;
};


export type RootMutationTypeUpdatePrivatePowerUpArgs = {
  active: Scalars['Boolean']['input'];
};


export type RootMutationTypeUpdatePrivatePowerUp2Args = {
  active: Scalars['Boolean']['input'];
};


export type RootMutationTypeUpdateReplArgs = {
  input: UpdateReplInput;
};


export type RootMutationTypeUpdateReplCommentArgs = {
  input: UpdateReplCommentInput;
};


export type RootMutationTypeUpdateReplFolderArgs = {
  folderId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type RootMutationTypeUpdateReplTemplateArgs = {
  input: UpdateReplTemplateInput;
};


export type RootMutationTypeUpdateReplTemplateModelSolutionArgs = {
  input: UpdateReplTemplateModelSolutionInput;
};


export type RootMutationTypeUpdateReplTimeUpdatedArgs = {
  id: Scalars['String']['input'];
};


export type RootMutationTypeUpdateReplUnitTestArgs = {
  input: UpdateReplUnitTestInput;
};


export type RootMutationTypeUpdateReplUnitTestLastRunArgs = {
  input: UpdateReplUnitTestLastRunInput;
};


export type RootMutationTypeUpdateReplUnitTestMetaArgs = {
  input: UpdateReplUnitTestMetaInput;
};


export type RootMutationTypeUpdateRoleArgs = {
  flag: Scalars['Boolean']['input'];
  role: UserRoles;
};


export type RootMutationTypeUpdateStackArgs = {
  input: UpdateStackInput;
};


export type RootMutationTypeUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


export type RootMutationTypeUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type RootMutationTypeUpdateTeamInviteLinkEduSignupArgs = {
  enabled: Scalars['Boolean']['input'];
  teamId: Scalars['Int']['input'];
};


export type RootMutationTypeUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};


export type RootMutationTypeUpdateTeamOrganizationArgs = {
  input: UpdateTeamOrganizationInput;
};


export type RootMutationTypeUpdateTeamOrganizationMemberArgs = {
  input: UpdateTeamOrganizationMemberInput;
};


export type RootMutationTypeUpdateTeamUserPermissionsArgs = {
  input: UpdateTeamUserPermissionsInput;
};


export type RootMutationTypeUpdateTemplateShareLinkArgs = {
  linkId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
  templateIds: Array<Scalars['Int']['input']>;
};


export type RootMutationTypeUpdateTemplateTestArgs = {
  input: UpdateTemplateTestInput;
};


export type RootMutationTypeUpdateThemeArgs = {
  input: UpdateThemeInput;
};


export type RootMutationTypeUpdateThreadPreviewArgs = {
  message?: InputMaybe<Scalars['String']['input']>;
  messageId: Scalars['String']['input'];
  threadId: Scalars['String']['input'];
};


export type RootMutationTypeUpdateUserPrivacyPreferencesArgs = {
  input: UpdateUserPrivacyPreferencesInput;
};


export type RootMutationTypeUpgradeThemeArgs = {
  input: UpgradeThemeInput;
};


export type RootMutationTypeUploadReplAttachmentArgs = {
  input: UploadReplAttachmentInput;
};


export type RootMutationTypeUseTemplateShareLinkArgs = {
  code: Scalars['String']['input'];
  content: Array<Scalars['Int']['input']>;
  teamId: Scalars['Int']['input'];
  withDates: Scalars['Boolean']['input'];
};


export type RootMutationTypeWarnUserArgs = {
  reason: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  admin?: Maybe<Admin>;
  allowedReplIdentityRepls: AllowedReplIdentityRepls;
  annotationAnchor: AnnotationQueryOutput;
  anonymousFlag: AnonymousFlagOutput;
  appEnvValue?: Maybe<Scalars['String']['output']>;
  availableReplTitle: AvailableReplTitleOutput;
  betaTemplateRepls: Array<Repl>;
  board?: Maybe<Board>;
  boardReports: BoardReports;
  boards: Array<Board>;
  bountyApplicationById: BountyApplicationByIdOutput;
  bountyApplicationSearch: BountyApplicationSearchOutput;
  bountyById: BountyByIdOutput;
  bountyByUrl: BountyByUrlOutput;
  bountyChatSearch: BountyChatSearchOutput;
  bountyHunterServiceById: BountyHunterServiceByIdOutput;
  bountyHunterServiceSearch: BountyHunterServiceSearchOutput;
  bountySearch: BountySearchOutput;
  clui?: Maybe<CluiQuery>;
  comment?: Maybe<Comment>;
  country?: Maybe<Scalars['String']['output']>;
  coupon: CouponQueryOutput;
  courseLessonsRepls?: Maybe<CourseLessonsReplsOutput>;
  currentUser?: Maybe<CurrentUser>;
  curricula: Array<Curriculum>;
  curriculumBySlug: CurriculumBySlugOutput;
  customThemeById: CustomThemeByIdOutput;
  explainCode: ExplainCodeOutput;
  extension?: Maybe<ExtensionOutput>;
  extensionInstallationById: ExtensionInstallationByIdOutput;
  extensionInstallations: ExtensionInstallationsOutput;
  extensionList: Array<Extension>;
  generateCode: GenerateCodeOutput;
  getBannedBoardUser?: Maybe<GetBannedBoardUserOutput>;
  getGoogleClassroomCourses?: Maybe<GetGoogleClassroomCoursesOutput>;
  getGoogleClassroomStudents?: Maybe<GetGoogleClassroomStudentsOutput>;
  getNeonDatabases: GetNeonDatabasesOutput;
  getRecommendedBountiesForUser: GetRecommendedBountiesForUserOutput;
  getReplitCheckoutSession: GetReplitCheckoutSessionOutput;
  getTeamConnections: Array<ReplConnections>;
  getUserEventsFeed?: Maybe<UserEventConnection>;
  getUserReplComments?: Maybe<GetUserReplCommentsOutput>;
  hostingBuildDeployActionHistory: HostingBuildDeployActionHistoryOutput;
  imageScans?: Maybe<ImageScansOutput>;
  instantGitHubImport: InstantGitHubImportOutput;
  invoiceById: InvoiceOutput;
  language?: Maybe<Language>;
  /** @deprecated Use templateRepl2 to search for templates instead */
  languageTemplateRepls: Array<Repl>;
  languages: Array<Language>;
  moderatorAuditLog: ModeratorAuditLogOutput;
  notifications: NotificationConnection;
  pinnedPosts: Array<Post>;
  post?: Maybe<Post>;
  previewInvoice?: Maybe<PreviewInvoice>;
  previewProration: PreviewProrationOutput;
  recentRepls: Array<Repl>;
  repl: ReplQueryOutput;
  replBootStatus: ReplBootStatusOutput;
  replBootStatusHistory: ReplBootStatusHistoryOutput;
  replComment: ReplCommentOutput;
  replContinents: ReplContinents;
  replFolderByPath?: Maybe<ReplFolder>;
  replPosts: PostConnection;
  replTemplateById?: Maybe<ReplTemplateOutput>;
  replTitle: Scalars['String']['output'];
  replitAppSubdomainAvailability: ReplitAppSubdomainAvailabilityOutput;
  search: SearchQueryOutput;
  searchSpamComments: Array<ReplComment>;
  siteBanner?: Maybe<Banner>;
  studentsSubmissions?: Maybe<StudentsSubmissionsOutput>;
  subscriptionPlans: SubscriptionPlansOutput;
  supportAssetUpload: SupportAssetUrls;
  tag?: Maybe<Tag>;
  tagGroups: TagGroups;
  tags: Array<Tag>;
  team?: Maybe<Team>;
  teamByUsername: TeamOutput;
  teamOrganization: TeamOrganizationOutput;
  teamTemplateShareLink: TeamTemplateShareLink;
  templateCategories?: Maybe<TemplateCategoriesOutput>;
  templateCategoryBySlug: TemplateCategoryBySlugOutput;
  templateLandingPages: Array<TemplateReview>;
  templateReplBySlug: TemplateReplBySlugOutput;
  /** @deprecated Use templateRepls2 */
  templateRepls: Array<TemplateReplObject>;
  templateRepls2: TemplateRepls2Output;
  /** @deprecated Use CurrentUser.editorPreferences.theme */
  theme: Scalars['String']['output'];
  themesSearch: ThemesSearchOutput;
  threadsByFile?: Maybe<ThreadsByFileOutput>;
  tipaltiIframeUrl: TipaltiIframeUrl;
  topGlobalTippers: TopGlobalTippersOutput;
  totalBountiesCyclesValue: Scalars['Int']['output'];
  toursSeen: ToursSeenQueryResult;
  transformCode: TransformCodeOutput;
  trendingReplPosts: Array<Post>;
  tutorialRepls?: Maybe<TutorialReplsOutput>;
  unverifiedEduUsers: Array<TeacherVerification>;
  user?: Maybe<User>;
  userByUsername?: Maybe<User>;
  usernameSearch: Array<User>;
  usersByIds: Array<User>;
};


export type RootQueryTypeAnnotationAnchorArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeAnonymousFlagArgs = {
  input: AnonymousFlagInput;
};


export type RootQueryTypeAppEnvValueArgs = {
  key: Scalars['String']['input'];
};


export type RootQueryTypeAvailableReplTitleArgs = {
  input: AvailableReplTitleInput;
};


export type RootQueryTypeBoardArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypeBoardReportsArgs = {
  input: BoardReportsInputType;
};


export type RootQueryTypeBoardsArgs = {
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RootQueryTypeBountyApplicationByIdArgs = {
  input: BountyApplicationByIdInput;
};


export type RootQueryTypeBountyApplicationSearchArgs = {
  input: BountyApplicationSearchInput;
};


export type RootQueryTypeBountyByIdArgs = {
  input: BountyByIdInput;
};


export type RootQueryTypeBountyByUrlArgs = {
  input: BountyByUrlInput;
};


export type RootQueryTypeBountyChatSearchArgs = {
  input: BountyChatSearchInput;
};


export type RootQueryTypeBountyHunterServiceByIdArgs = {
  input: BountyHunterServiceByIdInput;
};


export type RootQueryTypeBountyHunterServiceSearchArgs = {
  input: BountyHunterServiceSearchInput;
};


export type RootQueryTypeBountySearchArgs = {
  input: BountySearchInput;
};


export type RootQueryTypeCommentArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypeCouponArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeCourseLessonsReplsArgs = {
  courseSlug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeCurriculumBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type RootQueryTypeCustomThemeByIdArgs = {
  input: CustomThemeByIdInput;
};


export type RootQueryTypeExplainCodeArgs = {
  code: Scalars['String']['input'];
  language: Scalars['String']['input'];
  replId?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeExtensionArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeExtensionInstallationByIdArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeExtensionInstallationsArgs = {
  replId: Scalars['String']['input'];
};


export type RootQueryTypeExtensionListArgs = {
  includeNonBlessed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type RootQueryTypeGenerateCodeArgs = {
  input: GenerateCodeInput;
};


export type RootQueryTypeGetBannedBoardUserArgs = {
  userId: Scalars['Int']['input'];
};


export type RootQueryTypeGetGoogleClassroomStudentsArgs = {
  courseId: Scalars['String']['input'];
};


export type RootQueryTypeGetNeonDatabasesArgs = {
  input: GetNeonDatabasesInput;
};


export type RootQueryTypeGetRecommendedBountiesForUserArgs = {
  input: GetRecommendedBountiesForUserInput;
};


export type RootQueryTypeGetReplitCheckoutSessionArgs = {
  input: GetReplitCheckoutSessionInput;
};


export type RootQueryTypeGetTeamConnectionsArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootQueryTypeGetUserEventsFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type RootQueryTypeGetUserReplCommentsArgs = {
  input: GetUserReplCommentsInput;
};


export type RootQueryTypeHostingBuildDeployActionHistoryArgs = {
  input: HostingBuildDeployActionHistoryInput;
};


export type RootQueryTypeImageScansArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  threshold: Scalars['Float']['input'];
};


export type RootQueryTypeInstantGitHubImportArgs = {
  input: InstantGitHubImportInput;
};


export type RootQueryTypeInvoiceByIdArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeLanguageArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeLanguagesArgs = {
  getAll?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeModeratorAuditLogArgs = {
  input: ModeratorAuditLogInputType;
};


export type RootQueryTypeNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RootQueryTypePostArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypePreviewInvoiceArgs = {
  input: PreviewInvoiceInput;
};


export type RootQueryTypePreviewProrationArgs = {
  input: PreviewProrationInput;
};


export type RootQueryTypeRecentReplsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<RecentReplsFilter>;
};


export type RootQueryTypeReplArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeReplBootStatusArgs = {
  input?: InputMaybe<ReplBootStatusInput>;
};


export type RootQueryTypeReplBootStatusHistoryArgs = {
  input: ReplBootStatusHistoryInput;
};


export type RootQueryTypeReplCommentArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypeReplFolderByPathArgs = {
  path: Scalars['String']['input'];
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeReplPostsArgs = {
  options?: InputMaybe<ReplPostsQueryOptions>;
};


export type RootQueryTypeReplTemplateByIdArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypeReplTitleArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryTypeReplitAppSubdomainAvailabilityArgs = {
  deploymentId?: InputMaybe<Scalars['String']['input']>;
  subdomain: Scalars['String']['input'];
};


export type RootQueryTypeSearchArgs = {
  options: SearchQueryOptions;
};


export type RootQueryTypeSearchSpamCommentsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  dateMax?: InputMaybe<Scalars['DateTime']['input']>;
  dateMin?: InputMaybe<Scalars['DateTime']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  isRegex?: InputMaybe<Scalars['Boolean']['input']>;
  pattern: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type RootQueryTypeStudentsSubmissionsArgs = {
  input: StudentsSubmissionsInput;
};


export type RootQueryTypeSupportAssetUploadArgs = {
  filename: Scalars['String']['input'];
};


export type RootQueryTypeTagArgs = {
  id: Scalars['String']['input'];
};


export type RootQueryTypeTagsArgs = {
  tags: Array<Scalars['String']['input']>;
};


export type RootQueryTypeTeamArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypeTeamByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type RootQueryTypeTeamOrganizationArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypeTeamTemplateShareLinkArgs = {
  code: Scalars['String']['input'];
};


export type RootQueryTypeTemplateCategoriesArgs = {
  input?: InputMaybe<TemplateCategoriesInput>;
};


export type RootQueryTypeTemplateCategoryBySlugArgs = {
  input: TemplateCategoryBySlugInput;
};


export type RootQueryTypeTemplateReplBySlugArgs = {
  input: TemplateReplBySlugInput;
};


export type RootQueryTypeTemplateReplsArgs = {
  includeLanguages?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RootQueryTypeTemplateRepls2Args = {
  options: TemplateRepls2QueryOptions;
};


export type RootQueryTypeThemesSearchArgs = {
  input: ThemesSearchInput;
};


export type RootQueryTypeThreadsByFileArgs = {
  path: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};


export type RootQueryTypeTopGlobalTippersArgs = {
  limit: Scalars['Int']['input'];
};


export type RootQueryTypeTotalBountiesCyclesValueArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type RootQueryTypeToursSeenArgs = {
  name: Scalars['String']['input'];
};


export type RootQueryTypeTransformCodeArgs = {
  input: TransformCodeInput;
};


export type RootQueryTypeTrendingReplPostsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  minVoteCount?: InputMaybe<Scalars['Int']['input']>;
};


export type RootQueryTypeTutorialReplsArgs = {
  input: TutorialReplsInput;
};


export type RootQueryTypeUserArgs = {
  id: Scalars['Int']['input'];
};


export type RootQueryTypeUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type RootQueryTypeUsernameSearchArgs = {
  includeCurrentUser?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type RootQueryTypeUsersByIdsArgs = {
  ids: Array<Scalars['Int']['input']>;
};

export type RootSubscriptionType = {
  __typename?: 'RootSubscriptionType';
  annotationUpdatesByRepl?: Maybe<AnnotationAnchor>;
  currentUserCanWrite: Scalars['Boolean']['output'];
  hostingBuildDeployActionUpdates: HostingBuildDeployActionUpdateEvent;
  latestBountyChatMessage?: Maybe<BountyChatMessage>;
  notificationCount: Scalars['Int']['output'];
  replBootStatusUpdates: ReplBootStatusUpdateEvent;
  replConnection?: Maybe<Scalars['Boolean']['output']>;
  teamReplConnections: TeamConnectionEvent;
  testSubscription?: Maybe<SubscriptionTestObject>;
  threadPreview?: Maybe<ThreadPreview>;
};


export type RootSubscriptionTypeAnnotationUpdatesByReplArgs = {
  replId: Scalars['String']['input'];
};


export type RootSubscriptionTypeCurrentUserCanWriteArgs = {
  replId: Scalars['String']['input'];
};


export type RootSubscriptionTypeHostingBuildDeployActionUpdatesArgs = {
  input: HostingBuildDeployActionUpdatesInput;
};


export type RootSubscriptionTypeLatestBountyChatMessageArgs = {
  input: LatestBountyChatMessageInput;
};


export type RootSubscriptionTypeReplBootStatusUpdatesArgs = {
  input?: InputMaybe<ReplBootStatusUpdatesInput>;
};


export type RootSubscriptionTypeReplConnectionArgs = {
  replId: Scalars['String']['input'];
};


export type RootSubscriptionTypeTeamReplConnectionsArgs = {
  teamId: Scalars['Int']['input'];
};


export type RootSubscriptionTypeThreadPreviewArgs = {
  threadId: Scalars['String']['input'];
};

export enum Sku {
  Boosted_1 = 'boosted_1',
  Boosted_2 = 'boosted_2',
  Boosted_3 = 'boosted_3',
  Boosted_4 = 'boosted_4',
  Standard = 'standard'
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
  Users = 'Users'
}

export type SearchQueryDateFilter = {
  gte: Scalars['DateTime']['input'];
};

export type SearchQueryDocsSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  section?: InputMaybe<Scalars['String']['input']>;
};

export enum SearchQueryFileSort {
  RecentlyModified = 'RecentlyModified',
  Relevant = 'Relevant'
}

export type SearchQueryFilesSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
  fileExtension?: InputMaybe<Scalars['String']['input']>;
  myCode?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  sort?: InputMaybe<SearchQueryFileSort>;
};

export type SearchQueryHitInfo = {
  __typename?: 'SearchQueryHitInfo';
  totalHits: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type SearchQueryOptions = {
  categories: Array<SearchQueryCategory>;
  categorySettings?: InputMaybe<SearchCategorySettings>;
  onlyCalculateHits?: InputMaybe<Scalars['Boolean']['input']>;
  query: Scalars['String']['input'];
};

export type SearchQueryOutput = SearchQueryResults | UnauthorizedError | UserError;

export type SearchQueryPageFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export enum SearchQueryPostSort {
  MostComments = 'MostComments',
  MostVotes = 'MostVotes',
  RecentlyCreated = 'RecentlyCreated',
  Relevant = 'Relevant',
  Trending = 'Trending'
}

export type SearchQueryPostsSearchSettings = {
  dateCreated?: InputMaybe<SearchQueryDateFilter>;
  exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
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
  Trending = 'Trending'
}

export type SearchQueryReplsSearchSettings = {
  dateCreated?: InputMaybe<SearchQueryDateFilter>;
  dateModified?: InputMaybe<SearchQueryDateFilter>;
  exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  sort?: InputMaybe<SearchQueryReplSort>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SearchQueryResults = {
  __typename?: 'SearchQueryResults';
  docResults: SearchQueryResultsDocs;
  fileResults: SearchQueryResultsFiles;
  postResults: SearchQueryResultsPosts;
  replResults: SearchQueryResultsRepls;
  tagResults: SearchQueryResultsTags;
  templateResults: SearchQueryResultsTemplates;
  userResults: SearchQueryResultsUsers;
};

export type SearchQueryResultsDocs = {
  __typename?: 'SearchQueryResultsDocs';
  hitInfo: SearchQueryHitInfo;
  results: SearchResultIndexedDocConnection;
};

export type SearchQueryResultsFiles = {
  __typename?: 'SearchQueryResultsFiles';
  hitInfo: SearchQueryHitInfo;
  results: SearchResultIndexedFileConnection;
};

export type SearchQueryResultsPosts = {
  __typename?: 'SearchQueryResultsPosts';
  hitInfo: SearchQueryHitInfo;
  results: PostConnection;
};

export type SearchQueryResultsRepls = {
  __typename?: 'SearchQueryResultsRepls';
  hitInfo: SearchQueryHitInfo;
  results: ReplConnection;
};

export type SearchQueryResultsTags = {
  __typename?: 'SearchQueryResultsTags';
  hitInfo: SearchQueryHitInfo;
  results: SearchResultTagConnection;
};

export type SearchQueryResultsTemplates = {
  __typename?: 'SearchQueryResultsTemplates';
  hitInfo: SearchQueryHitInfo;
  results: ReplConnection;
};

export type SearchQueryResultsUsers = {
  __typename?: 'SearchQueryResultsUsers';
  hitInfo: SearchQueryHitInfo;
  results: UserConnection;
};

export type SearchQueryTagsSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<SearchQueryPageFilter>;
};

export enum SearchQueryTemplateStatus {
  All = 'All',
  Community = 'Community',
  Official = 'Official'
}

export type SearchQueryTemplatesSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<SearchQueryPageFilter>;
  status?: InputMaybe<SearchQueryTemplateStatus>;
};

export type SearchQueryUsersSearchSettings = {
  exactMatch?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<SearchQueryPageFilter>;
};

export type SearchResultIndexedDoc = {
  __typename?: 'SearchResultIndexedDoc';
  contentMatches: Array<SearchResultIndexedFileMatches>;
  contents: Scalars['String']['output'];
  path: Scalars['String']['output'];
  section: Scalars['String']['output'];
};

export type SearchResultIndexedDocConnection = {
  __typename?: 'SearchResultIndexedDocConnection';
  items: Array<SearchResultIndexedDoc>;
  pageInfo: PageInfo;
};

export type SearchResultIndexedFile = {
  __typename?: 'SearchResultIndexedFile';
  fileContentMatches: Array<SearchResultIndexedFileMatches>;
  fileContents: Scalars['String']['output'];
  filePath: Scalars['String']['output'];
  repl: Repl;
};

export type SearchResultIndexedFileConnection = {
  __typename?: 'SearchResultIndexedFileConnection';
  items: Array<SearchResultIndexedFile>;
  pageInfo: PageInfo;
};

export type SearchResultIndexedFileMatches = {
  __typename?: 'SearchResultIndexedFileMatches';
  length: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
};

export type SearchResultTag = {
  __typename?: 'SearchResultTag';
  numReplsTotal: Scalars['Int']['output'];
  tag: Tag;
  timeLastUsed: Scalars['DateTime']['output'];
};

export type SearchResultTagConnection = {
  __typename?: 'SearchResultTagConnection';
  items: Array<SearchResultTag>;
  pageInfo: PageInfo;
};

export type SelectReplContinent = CurrentUser | NotFoundError | ServiceUnavailable | TooManyRequestsError | UnauthorizedError | UserError;

export type SelectReplContinentInput = {
  continent: ReplContinentId;
};

export enum SelectableSubscriptionPeriodTypesEnum {
  Monthly = 'monthly',
  Yearly = 'yearly'
}

export enum SelectableSubscriptionPrefixTypesEnum {
  Hacker = 'hacker',
  HackerPro = 'hacker_pro'
}

export type SendBountyChatInput = {
  bountyApplicationId: Scalars['Int']['input'];
  message: Scalars['String']['input'];
};

export type SendBountyChatOutput = BountyChatMessage | NotFoundError | ServiceUnavailable | TooManyRequestsError | UnauthorizedError | UserError;

export type SendDeploymentLifecycleCommandInput = {
  buildId?: InputMaybe<Scalars['String']['input']>;
  command: SendDeploymentLifecycleCommandType;
  replId: Scalars['String']['input'];
};

export type SendDeploymentLifecycleCommandOutput = NotFoundError | SendDeploymentLifecycleCommandResult | UnauthorizedError | UserError;

export type SendDeploymentLifecycleCommandResult = {
  __typename?: 'SendDeploymentLifecycleCommandResult';
  currentUser: CurrentUser;
  repl: Repl;
};

export enum SendDeploymentLifecycleCommandType {
  Destroy = 'destroy',
  Resume = 'resume',
  Suspend = 'suspend'
}

export type SendPushToStaff = SendPushToStaffResult | UnauthorizedError;

export type SendPushToStaffInput = {
  messageBody: Scalars['String']['input'];
  messageTitle: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SendPushToStaffResult = {
  __typename?: 'SendPushToStaffResult';
  success: Scalars['Boolean']['output'];
};

export type SendTipInput = {
  amount: Scalars['Int']['input'];
  replId?: InputMaybe<Scalars['String']['input']>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SendTipOutput = NotFoundError | SendTipResult | UnauthorizedError | UserError;

export type SendTipResult = {
  __typename?: 'SendTipResult';
  currentUser: CurrentUser;
  repl?: Maybe<Repl>;
  theme?: Maybe<CustomTheme>;
};

export type ServiceUnavailable = {
  __typename?: 'ServiceUnavailable';
  message: Scalars['String']['output'];
};

export type SetActiveThemeInput = {
  officialThemeKey?: InputMaybe<OfficialReplitThemeKey>;
  themeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetActiveThemeOutput = CustomTheme | NotFoundError | UserError;

export type SetAlwaysOnOutput = Repl | UserError;

export type SetBetaTemplateInput = {
  betaReplUrlOrId?: InputMaybe<Scalars['String']['input']>;
  replUrlOrId?: InputMaybe<Scalars['String']['input']>;
};

export type SetBetaTemplateOutput = Repl | UnauthorizedError | UserError;

export type SetBlocking2 = NotFoundError | SetBlocking2Result | UnauthorizedError;

export type SetBlocking2Input = {
  shouldBlock: Scalars['Boolean']['input'];
  targetUserId: Scalars['Int']['input'];
};

export type SetBlocking2Result = {
  __typename?: 'SetBlocking2Result';
  currentUser: CurrentUser;
  isBlocked: Scalars['Boolean']['output'];
  targetUser: User;
};

export type SetBountyUnlistedOutput = Bounty | UnauthorizedError | UserError;

export type SetGpuOutput = Repl | UnauthorizedError | UserError;

export type SetHostingTierInput = {
  replId: Scalars['String']['input'];
  sku: HostingTierPowerUpSku;
};

export type SetHostingTierOutput = PaymentError | SetHostingTierResult | UnauthorizedError | UserError;

export type SetHostingTierResult = {
  __typename?: 'SetHostingTierResult';
  currentUser: CurrentUser;
  repl: Repl;
};

export type SetLanguageTemplateInput = {
  betaReplId?: InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  replId?: InputMaybe<Scalars['String']['input']>;
};

export type SetLanguageTemplateOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type SetOnboardingExperienceOutput = CurrentUser | UnauthorizedError | UserError;

export type SetOnboardingIntentOutput = CurrentUser | UnauthorizedError | UserError;

export type SetReplCommentSettingsInput = {
  enabled: Scalars['Boolean']['input'];
  replId: Scalars['String']['input'];
};

export type SetReplExamplesInput = {
  exampleReplIds: Array<Scalars['String']['input']>;
  replId: Scalars['String']['input'];
};

export type SetReplExamplesOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type SetReplLayoutStateInput = {
  replId: Scalars['String']['input'];
  state: Scalars['JSON']['input'];
};

export type SetReplLayoutStateOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type SetReplTagsInput = {
  replId: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type SetReplTagsOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type SetReplViewSettingsInput = {
  defaultView?: InputMaybe<ReplViewSettingsDefaultView>;
  replFile?: InputMaybe<Scalars['String']['input']>;
  replId: Scalars['String']['input'];
  replImage?: InputMaybe<Scalars['String']['input']>;
};

export type SetReplViewSettingsOutput = NotFoundError | ReplViewSettings | UnauthorizedError | UserError;

export type SetStorageCapacityInput = {
  replId: Scalars['ID']['input'];
  storageCapacity: ReplStorageCapacity;
};

export type SetStorageCapacityOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type SetTemplateCategoryOutput = NotFoundError | Repl;

export type SetTemplateCategoryReplInput = {
  replId: Scalars['String']['input'];
  templateCategoryId: Scalars['Int']['input'];
};

export type SetTemplateCategoryReplOutput = NotFoundError | TemplateCategoryReplResult | UnauthorizedError | UserError;

export type SetTemplateReplCategoryInput = {
  category: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type SetUserCoverImageInput = {
  imageId?: InputMaybe<Scalars['Int']['input']>;
  offsetY?: InputMaybe<Scalars['Int']['input']>;
  remove?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetUserCoverImageOutput = CurrentUser | UnauthorizedError | UserError;

export type SetUserKeybindingsInput = {
  environment: KeybindingsEnvironmentEnum;
  keybindings: Scalars['JSON']['input'];
  platform: KeybindingsPlatformEnum;
};

export type SetUserKeybindingsOutput = Keybindings | NotFoundError | UnauthorizedError | UserError;

export type SetUserSocialInput = {
  type: UserSocialEnum;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SetUserSocialsInput = {
  socials: Array<SetUserSocialInput>;
};

export type SetUserSocialsOutput = CurrentUser | UnauthorizedError | UserError;

export type SetUserStorageQuotaOutput = ServiceUnavailable | SetUserStorageQuotaSuccess | UnauthorizedError;

export type SetUserStorageQuotaSuccess = {
  __typename?: 'SetUserStorageQuotaSuccess';
  quota: Scalars['String']['output'];
};

export type Stack = {
  __typename?: 'Stack';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  replTemplates: Array<ReplTemplate>;
  repls: Array<Repl>;
  replsCount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type StaffBountiesQuery = {
  __typename?: 'StaffBountiesQuery';
  applicationReviewQueue?: Maybe<CluiOutput>;
  emailReminderExport?: Maybe<CluiOutput>;
};

export type StaffCluiQuery = {
  __typename?: 'StaffCluiQuery';
  bounties?: Maybe<StaffBountiesQuery>;
};

export type StatusMessageContentType = {
  __typename?: 'StatusMessageContentType';
  status: Scalars['String']['output'];
};

export type StorageCapacity = {
  __typename?: 'StorageCapacity';
  value: ReplStorageCapacity;
};

export type StorageCapacityOutputType = StorageCapacity | UnauthorizedError;

export type StorageInfo = {
  __typename?: 'StorageInfo';
  accountStorageUtilization: AccountStorageUtilizationOutput;
  storageQuota: StorageQuotaOutput;
  /** @deprecated If errors are thrown in this resolver the upstream UI may not be able to handle them. Use storageQuotaStatus2 instead. */
  storageQuotaStatus: StorageQuotaEnum;
  storageQuotaStatus2: StorageQuotaStatusOutput;
};

export type StorageQuota = {
  __typename?: 'StorageQuota';
  quota: Scalars['String']['output'];
};

export enum StorageQuotaEnum {
  ApproachingQuota = 'ApproachingQuota',
  ExceedingQuota = 'ExceedingQuota',
  UnderQuota = 'UnderQuota'
}

export type StorageQuotaOutput = ServiceUnavailable | StorageQuota;

export type StorageQuotaStatus = {
  __typename?: 'StorageQuotaStatus';
  status: StorageQuotaEnum;
};

export type StorageQuotaStatusOutput = ServiceUnavailable | StorageQuotaStatus;

export type StripePlanDetails = {
  __typename?: 'StripePlanDetails';
  costInUsdCents: Scalars['Int']['output'];
};

export type StripeProviderPlanDetails = {
  __typename?: 'StripeProviderPlanDetails';
  monthlyPlanDetails: StripePlanDetails;
  yearlyPlanDetails: StripePlanDetails;
};

export type StudentSubmissions = {
  __typename?: 'StudentSubmissions';
  templateSubmissions: Array<TemplateSubmission>;
  userId: Scalars['Int']['output'];
};

export type StudentsSubmissionsInput = {
  studentIds: Array<Scalars['Int']['input']>;
  teamId: Scalars['Int']['input'];
  templateIds: Array<Scalars['Int']['input']>;
};

export type StudentsSubmissionsOutput = StudentsSubmissionsResults | UnauthorizedError | UserError;

export type StudentsSubmissionsResults = {
  __typename?: 'StudentsSubmissionsResults';
  results: Array<StudentSubmissions>;
};

export type SubmissionGroupInput = {
  submissionId?: InputMaybe<Scalars['Int']['input']>;
  userIds: Array<InputMaybe<Scalars['Int']['input']>>;
};

export type SubmitReplOutput = Repl | UserError;

export type Subscription = {
  __typename?: 'Subscription';
  id: Scalars['Int']['output'];
  isGift: Scalars['Boolean']['output'];
  isTrial: Scalars['Boolean']['output'];
  product: Product;
  quantity: Scalars['Int']['output'];
  status?: Maybe<Scalars['String']['output']>;
  timeActivated: Scalars['Date']['output'];
  timeCreated: Scalars['Date']['output'];
  timeDeleted?: Maybe<Scalars['Date']['output']>;
  timeExpired: Scalars['Date']['output'];
  timeUpdated: Scalars['Date']['output'];
};

export type SubscriptionCapabilities = {
  __typename?: 'SubscriptionCapabilities';
  associatedUserIds: Array<Maybe<Scalars['Int']['output']>>;
  availableSeats: Scalars['Int']['output'];
  canAddEducationTeam: Scalars['Boolean']['output'];
  canBoost: Scalars['Boolean']['output'];
  canCreateEduTrial: Scalars['Boolean']['output'];
  canCreateNewTeam: Scalars['Boolean']['output'];
  canCreatePrivateRepl: Scalars['Boolean']['output'];
  canViewOwnPrivateRepl: Scalars['Boolean']['output'];
  hasValidSubscription: Scalars['Boolean']['output'];
  isBusinessPlan: Scalars['Boolean']['output'];
  isEducationPlan: Scalars['Boolean']['output'];
  isExpiring: Scalars['Boolean']['output'];
  isFlatPlan: Scalars['Boolean']['output'];
  isPerSeatPlan: Scalars['Boolean']['output'];
  isTrial: Scalars['Boolean']['output'];
  memberCount: Scalars['Int']['output'];
};


export type SubscriptionCapabilitiesIsExpiringArgs = {
  daysFromNow: Scalars['Int']['input'];
};

export type SubscriptionExpiredError = {
  __typename?: 'SubscriptionExpiredError';
  isOwner: Scalars['Boolean']['output'];
  replId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  apple: ProviderPlanDetails;
  displayName: Scalars['String']['output'];
  google: ProviderPlanDetails;
  items: Array<SubscriptionPlanItem>;
  stripe: StripeProviderPlanDetails;
};

export type SubscriptionPlanItem = {
  __typename?: 'SubscriptionPlanItem';
  code: SubscriptionPlanItemEnumType;
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  learnMoreLink?: Maybe<Scalars['String']['output']>;
  pillText?: Maybe<Scalars['String']['output']>;
  showOnMobile: Scalars['Boolean']['output'];
};

export enum SubscriptionPlanItemEnumType {
  AccountStorage = 'accountStorage',
  AlwaysOnRepl = 'alwaysOnRepl',
  BoostedRepl = 'boostedRepl',
  DataTransfer = 'dataTransfer',
  Ghostwriter = 'ghostwriter',
  PrivateRepls = 'privateRepls',
  SshCapability = 'sshCapability',
  WorkspaceSpeed = 'workspaceSpeed'
}

export type SubscriptionPlansOutput = {
  __typename?: 'SubscriptionPlansOutput';
  free: FreePlan;
  hacker: SubscriptionPlan;
  pro: SubscriptionPlan;
};

export type SubscriptionTestObject = {
  __typename?: 'SubscriptionTestObject';
  timestamp?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type SupportAssetUrls = {
  __typename?: 'SupportAssetUrls';
  contentType: Scalars['String']['output'];
  downloadUrl: Scalars['String']['output'];
  uploadUrl: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String']['output'];
  isOfficial: Scalars['Boolean']['output'];
};

export type TagGroups = {
  __typename?: 'TagGroups';
  community: Array<Tag>;
  official: Array<Tag>;
};


export type TagGroupsCommunityArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type TagGroupsOfficialArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type TeacherVerification = {
  __typename?: 'TeacherVerification';
  email: Scalars['String']['output'];
  formResponses: Scalars['SequelizeJSON']['output'];
  userId: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type Team = {
  __typename?: 'Team';
  archived?: Maybe<Scalars['Boolean']['output']>;
  capabilities?: Maybe<SubscriptionCapabilities>;
  collections: Array<TeamCollection>;
  curriculumImports: Array<Curriculum>;
  defaultReplStack: Stack;
  defaultTemplateStack: Stack;
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  followerCount: Scalars['Int']['output'];
  gate: Scalars['Boolean']['output'];
  googleClassroom?: Maybe<GoogleClassroom>;
  guests: Array<TeamGuest>;
  hasBillingPerms: Scalars['Boolean']['output'];
  hasEduSignupInvites: Scalars['Boolean']['output'];
  hasPrivacyInvites: Scalars['Boolean']['output'];
  hasTemplates: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  inviteLink?: Maybe<TeamInviteLink>;
  isAdmin: Scalars['Boolean']['output'];
  isFollowedByCurrentUser: Scalars['Boolean']['output'];
  isMember: Scalars['Boolean']['output'];
  isOwner: Scalars['Boolean']['output'];
  memberCount: Scalars['Int']['output'];
  members: Array<TeamMembership>;
  needsMigrationToStacks: Scalars['Boolean']['output'];
  openInvites: Array<Maybe<TeamInvite>>;
  organization?: Maybe<TeamOrganization>;
  recentRepls: Array<Repl>;
  stacks: Array<Stack>;
  subscriptionIsType: Scalars['Boolean']['output'];
  templateShareLinks: Array<TeamTemplateShareLink>;
  templateShares: Array<TeamTemplateShare>;
  templates: Array<ReplTemplate>;
  url: Scalars['String']['output'];
  userPermissions?: Maybe<TeamUserPermissions>;
  username: Scalars['String']['output'];
};


export type TeamCollectionsArgs = {
  batchSize?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamGateArgs = {
  feature: Scalars['String']['input'];
  subscriptionType?: InputMaybe<TeamSubscriptionTypeEnum>;
};


export type TeamMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  permissions?: InputMaybe<Scalars['String']['input']>;
};


export type TeamRecentReplsArgs = {
  count: Scalars['Int']['input'];
};


export type TeamSubscriptionIsTypeArgs = {
  subscriptionType?: InputMaybe<TeamSubscriptionTypeEnum>;
};


export type TeamTemplatesArgs = {
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamCollection = {
  __typename?: 'TeamCollection';
  hasGroupProject: Scalars['Boolean']['output'];
  templates: Array<Maybe<ReplTemplate>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TeamConnectionEvent = RemoveReplConnectionsEvent | UpdateReplConnectionsEvent;

export type TeamGuest = {
  __typename?: 'TeamGuest';
  id: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type TeamInvite = {
  __typename?: 'TeamInvite';
  accepted: Scalars['Boolean']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  team: Team;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  usernameOrEmail?: Maybe<Scalars['String']['output']>;
};

export type TeamInviteLink = {
  __typename?: 'TeamInviteLink';
  code: Scalars['String']['output'];
  eduSignup: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
};

export type TeamInviteNotification = {
  __typename?: 'TeamInviteNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  invite?: Maybe<TeamInvite>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export enum TeamMemberRoleEnumType {
  Admin = 'ADMIN',
  Owner = 'OWNER'
}

export type TeamMembership = {
  __typename?: 'TeamMembership';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  permissions: TeamPermission;
  user?: Maybe<User>;
};

export type TeamMutation = {
  __typename?: 'TeamMutation';
  forkReplToProject?: Maybe<CluiOutput>;
  restoreProject?: Maybe<CluiOutput>;
  restoreRepl?: Maybe<CluiOutput>;
  transferRepl?: Maybe<CluiOutput>;
  updateInvite?: Maybe<CluiOutput>;
};


export type TeamMutationForkReplToProjectArgs = {
  isGroupProject?: InputMaybe<Scalars['Boolean']['input']>;
  replUrl: Scalars['String']['input'];
  team: Scalars['String']['input'];
};


export type TeamMutationRestoreProjectArgs = {
  project: Scalars['String']['input'];
  submissions?: InputMaybe<Scalars['Boolean']['input']>;
  team: Scalars['String']['input'];
};


export type TeamMutationRestoreReplArgs = {
  team: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type TeamMutationTransferReplArgs = {
  repl: Scalars['String']['input'];
  team: Scalars['String']['input'];
};


export type TeamMutationUpdateInviteArgs = {
  inviteLink: Scalars['String']['input'];
  isPrivacyLink?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamOrganization = {
  __typename?: 'TeamOrganization';
  archivedTeams: Array<Team>;
  archivedTeamsCount?: Maybe<Scalars['Int']['output']>;
  canBeDeleted: Scalars['Boolean']['output'];
  capabilities?: Maybe<SubscriptionCapabilities>;
  customer?: Maybe<Customer>;
  id: Scalars['Int']['output'];
  inviteLink?: Maybe<TeamOrganizationInviteLink>;
  isAdmin: Scalars['Boolean']['output'];
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  isVerified: Scalars['Boolean']['output'];
  members: Array<TeamOrganizationMembership>;
  name: Scalars['String']['output'];
  pendingInvites: Array<TeamOrganizationInvite>;
  quantity?: Maybe<Scalars['Int']['output']>;
  showVerificationBadge: Scalars['Boolean']['output'];
  subscription?: Maybe<TeamOrganizationSubscription>;
  teams: Array<Team>;
  teamsCount?: Maybe<Scalars['Int']['output']>;
  unsubscribedTeams: Array<Team>;
  unsubscribedTeamsCount?: Maybe<Scalars['Int']['output']>;
  userPermissions?: Maybe<TeamOrganizationUserPermissions>;
};

export type TeamOrganizationInvite = {
  __typename?: 'TeamOrganizationInvite';
  accepted: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  organization: TeamOrganization;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  usernameOrEmail?: Maybe<Scalars['String']['output']>;
};

export type TeamOrganizationInviteLink = {
  __typename?: 'TeamOrganizationInviteLink';
  code: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type TeamOrganizationInviteNotification = {
  __typename?: 'TeamOrganizationInviteNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  invite?: Maybe<TeamOrganizationInvite>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TeamOrganizationMembership = {
  __typename?: 'TeamOrganizationMembership';
  id: Scalars['Int']['output'];
  role?: Maybe<Team_Organization_MembersroleEnumType>;
  user?: Maybe<User>;
};

export type TeamOrganizationOutput = NotFoundError | TeamOrganization | UnauthorizedError | UserError;

export type TeamOrganizationSubscription = {
  __typename?: 'TeamOrganizationSubscription';
  canAddEducationTeam: Scalars['Boolean']['output'];
  canCreateNewTeam: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isBusinessPlan: Scalars['Boolean']['output'];
  isEducationPlan: Scalars['Boolean']['output'];
  isExpiring: Scalars['Boolean']['output'];
  isFlatPlan: Scalars['Boolean']['output'];
  isPerSeatPlan: Scalars['Boolean']['output'];
  isTrial: Scalars['Boolean']['output'];
  months?: Maybe<Scalars['Int']['output']>;
  origin: Scalars['String']['output'];
  planId: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  quickbooksInvoiceId?: Maybe<Scalars['String']['output']>;
  stripeStatus?: Maybe<Team_Organization_SubscriptionsstripeStatusEnumType>;
  teamOrganization?: Maybe<TeamOrganization>;
  timeCreated: Scalars['Date']['output'];
  timeDeleted?: Maybe<Scalars['Date']['output']>;
  timeExpired?: Maybe<Scalars['Date']['output']>;
  timeUpdated?: Maybe<Scalars['Date']['output']>;
};


export type TeamOrganizationSubscriptionIsExpiringArgs = {
  daysFromNow: Scalars['Int']['input'];
};

export enum TeamOrganizationSubscriptionTypeEnum {
  Education = 'EDUCATION',
  Pro = 'PRO'
}

export type TeamOrganizationUserPermissions = {
  __typename?: 'TeamOrganizationUserPermissions';
  canAddOrgAdmins: Scalars['Boolean']['output'];
  canAddOrgOwners: Scalars['Boolean']['output'];
  canCancelPlan: Scalars['Boolean']['output'];
  canCreateTeamsInOrg: Scalars['Boolean']['output'];
  canDeleteOrg: Scalars['Boolean']['output'];
  canEditBilling: Scalars['Boolean']['output'];
  canLeaveOrg: Scalars['Boolean']['output'];
  canRemoveOrgAdmins: Scalars['Boolean']['output'];
  canRemoveOrgOwners: Scalars['Boolean']['output'];
  canViewContentsOfAllTeams: Scalars['Boolean']['output'];
  canViewOrgSettings: Scalars['Boolean']['output'];
  canViewTitlesOfAllTeams: Scalars['Boolean']['output'];
};

export type TeamOutput = Team | UserError;

export enum TeamPermission {
  Admin = 'admin',
  BillingAdmin = 'billing_admin',
  Member = 'member',
  Owner = 'owner'
}

export type TeamQuery = {
  __typename?: 'TeamQuery';
  view?: Maybe<CluiOutput>;
};


export type TeamQueryViewArgs = {
  team: Scalars['String']['input'];
};

export enum TeamSubscriptionTypeEnum {
  Education = 'EDUCATION',
  Pro = 'PRO'
}

export type TeamTemplateReviewedStatusNotification = {
  __typename?: 'TeamTemplateReviewedStatusNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  repl?: Maybe<Repl>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TeamTemplateShare = {
  __typename?: 'TeamTemplateShare';
  from: Team;
  id: Scalars['Int']['output'];
  templates: Array<ReplTemplate>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  to: Team;
};

export type TeamTemplateShareLink = {
  __typename?: 'TeamTemplateShareLink';
  code: Scalars['String']['output'];
  defaultStack?: Maybe<LinkStack>;
  id: Scalars['Int']['output'];
  stacks: Array<LinkStack>;
  templates: Array<ReplTemplate>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
};

export type TeamTemplateSubmittedNotification = {
  __typename?: 'TeamTemplateSubmittedNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  repl?: Maybe<Repl>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TeamUserPermissions = {
  __typename?: 'TeamUserPermissions';
  canAddGuests: Scalars['Boolean']['output'];
  canAddTeamAdmins: Scalars['Boolean']['output'];
  canAddTeamMembers: Scalars['Boolean']['output'];
  canAddTeamOwners: Scalars['Boolean']['output'];
  canArchiveTeam: Scalars['Boolean']['output'];
  canCreateTeamRepls: Scalars['Boolean']['output'];
  canDeleteTeam: Scalars['Boolean']['output'];
  canDeleteTeamRepls: Scalars['Boolean']['output'];
  canEditTeamRepls: Scalars['Boolean']['output'];
  canLeaveTeam: Scalars['Boolean']['output'];
  canRemoveGuests: Scalars['Boolean']['output'];
  canRemoveTeamAdmins: Scalars['Boolean']['output'];
  canRemoveTeamMembers: Scalars['Boolean']['output'];
  canRenameTeam: Scalars['Boolean']['output'];
  canSubmitProjects: Scalars['Boolean']['output'];
};

export type TemplateCategoriesInput = {
  ids: Array<Scalars['Int']['input']>;
};

export type TemplateCategoriesOutput = TemplateCategoriesResults | UserError;

export type TemplateCategoriesResults = {
  __typename?: 'TemplateCategoriesResults';
  results: Array<TemplateCategory>;
};

export type TemplateCategory = {
  __typename?: 'TemplateCategory';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  timeCreated: Scalars['Date']['output'];
  title: Scalars['String']['output'];
};

export type TemplateCategoryBySlugInput = {
  slug: Scalars['String']['input'];
};

export type TemplateCategoryBySlugOutput = NotFoundError | TemplateCategory | UserError;

export type TemplateCategoryReplResult = {
  __typename?: 'TemplateCategoryReplResult';
  templateCategoryRepl: TemplateCategoryRepls;
};

export type TemplateCategoryRepls = {
  __typename?: 'TemplateCategoryRepls';
  id: Scalars['Int']['output'];
  replId: Scalars['String']['output'];
  templateCategoryId: Scalars['Int']['output'];
  timeCreated: Scalars['Date']['output'];
};

export type TemplateReplBySlugInput = {
  slug: Scalars['String']['input'];
};

export type TemplateReplBySlugOutput = NotFoundError | Repl | UserError;

export type TemplateReplObject = Repl | ReplTemplate;

export type TemplateReplSearchConnection = {
  __typename?: 'TemplateReplSearchConnection';
  category?: Maybe<Scalars['Int']['output']>;
  items: Array<Repl>;
  orderBy: TemplateRepls2OrderBy;
  pageInfo: PageInfo;
  promotionStatus: TemplateRepls2PromotionStatus;
  searchQuery: Scalars['String']['output'];
  total: Scalars['Int']['output'];
};

export enum TemplateRepls2OrderBy {
  Forks = 'forks',
  Recent = 'recent',
  SearchRelevancy = 'searchRelevancy'
}

export type TemplateRepls2Output = TemplateReplSearchConnection | UserError;

export enum TemplateRepls2PromotionStatus {
  All = 'all',
  NotPromoted = 'notPromoted',
  Promoted = 'promoted'
}

export type TemplateRepls2QueryOptions = {
  after?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['Int']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TemplateRepls2OrderBy>;
  promotionStatus?: InputMaybe<TemplateRepls2PromotionStatus>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateReview = {
  __typename?: 'TemplateReview';
  deployment?: Maybe<ReplDeployment>;
  id: Scalars['Int']['output'];
  landingPageSlug?: Maybe<Scalars['String']['output']>;
  promoted: Scalars['Boolean']['output'];
  release?: Maybe<ReplRelease>;
  repl?: Maybe<Repl>;
  reviewedBy?: Maybe<User>;
  timeCreated: Scalars['Date']['output'];
  timeDeleted?: Maybe<Scalars['Date']['output']>;
  timeUpdated?: Maybe<Scalars['Date']['output']>;
};

export type TemplateSubmission = {
  __typename?: 'TemplateSubmission';
  submission: ReplSubmission;
  templateId: Scalars['Int']['output'];
};

export type TemplateTestOutput = ReplTemplateTest | UserError;

export type TextMessageContentType = {
  __typename?: 'TextMessageContentType';
  text: Scalars['String']['output'];
};

export type ThemeEditorSyntaxHighlighting = {
  __typename?: 'ThemeEditorSyntaxHighlighting';
  tags: Array<ThemeEditorTag>;
  values: Scalars['JSON']['output'];
};

export type ThemeEditorTag = {
  __typename?: 'ThemeEditorTag';
  modifiers?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
};

export type ThemeValues = {
  __typename?: 'ThemeValues';
  editor: ThemeValuesEditor;
  global: ThemeValuesGlobal;
};

export type ThemeValuesEditor = {
  __typename?: 'ThemeValuesEditor';
  syntaxHighlighting: Array<ThemeEditorSyntaxHighlighting>;
};

export type ThemeValuesGlobal = {
  __typename?: 'ThemeValuesGlobal';
  accentNegativeDefault: Scalars['String']['output'];
  accentNegativeDimmer: Scalars['String']['output'];
  accentNegativeDimmest: Scalars['String']['output'];
  accentNegativeStronger: Scalars['String']['output'];
  accentNegativeStrongest: Scalars['String']['output'];
  accentPositiveDefault: Scalars['String']['output'];
  accentPositiveDimmer: Scalars['String']['output'];
  accentPositiveDimmest: Scalars['String']['output'];
  accentPositiveStronger: Scalars['String']['output'];
  accentPositiveStrongest: Scalars['String']['output'];
  accentPrimaryDefault: Scalars['String']['output'];
  accentPrimaryDimmer: Scalars['String']['output'];
  accentPrimaryDimmest: Scalars['String']['output'];
  accentPrimaryStronger: Scalars['String']['output'];
  accentPrimaryStrongest: Scalars['String']['output'];
  backgroundDefault: Scalars['String']['output'];
  backgroundHigher: Scalars['String']['output'];
  backgroundHighest: Scalars['String']['output'];
  backgroundOverlay: Scalars['String']['output'];
  backgroundRoot: Scalars['String']['output'];
  black: Scalars['String']['output'];
  blueDefault: Scalars['String']['output'];
  blueDimmer: Scalars['String']['output'];
  blueDimmest: Scalars['String']['output'];
  blueStronger: Scalars['String']['output'];
  blueStrongest: Scalars['String']['output'];
  blurpleDefault: Scalars['String']['output'];
  blurpleDimmer: Scalars['String']['output'];
  blurpleDimmest: Scalars['String']['output'];
  blurpleStronger: Scalars['String']['output'];
  blurpleStrongest: Scalars['String']['output'];
  brownDefault: Scalars['String']['output'];
  brownDimmer: Scalars['String']['output'];
  brownDimmest: Scalars['String']['output'];
  brownStronger: Scalars['String']['output'];
  brownStrongest: Scalars['String']['output'];
  foregroundDefault: Scalars['String']['output'];
  foregroundDimmer: Scalars['String']['output'];
  foregroundDimmest: Scalars['String']['output'];
  greenDefault: Scalars['String']['output'];
  greenDimmer: Scalars['String']['output'];
  greenDimmest: Scalars['String']['output'];
  greenStronger: Scalars['String']['output'];
  greenStrongest: Scalars['String']['output'];
  greyDefault: Scalars['String']['output'];
  greyDimmer: Scalars['String']['output'];
  greyDimmest: Scalars['String']['output'];
  greyStronger: Scalars['String']['output'];
  greyStrongest: Scalars['String']['output'];
  limeDefault: Scalars['String']['output'];
  limeDimmer: Scalars['String']['output'];
  limeDimmest: Scalars['String']['output'];
  limeStronger: Scalars['String']['output'];
  limeStrongest: Scalars['String']['output'];
  magentaDefault: Scalars['String']['output'];
  magentaDimmer: Scalars['String']['output'];
  magentaDimmest: Scalars['String']['output'];
  magentaStronger: Scalars['String']['output'];
  magentaStrongest: Scalars['String']['output'];
  orangeDefault: Scalars['String']['output'];
  orangeDimmer: Scalars['String']['output'];
  orangeDimmest: Scalars['String']['output'];
  orangeStronger: Scalars['String']['output'];
  orangeStrongest: Scalars['String']['output'];
  outlineDefault: Scalars['String']['output'];
  outlineDimmer: Scalars['String']['output'];
  outlineDimmest: Scalars['String']['output'];
  outlineStronger: Scalars['String']['output'];
  outlineStrongest: Scalars['String']['output'];
  pinkDefault: Scalars['String']['output'];
  pinkDimmer: Scalars['String']['output'];
  pinkDimmest: Scalars['String']['output'];
  pinkStronger: Scalars['String']['output'];
  pinkStrongest: Scalars['String']['output'];
  purpleDefault: Scalars['String']['output'];
  purpleDimmer: Scalars['String']['output'];
  purpleDimmest: Scalars['String']['output'];
  purpleStronger: Scalars['String']['output'];
  purpleStrongest: Scalars['String']['output'];
  redDefault: Scalars['String']['output'];
  redDimmer: Scalars['String']['output'];
  redDimmest: Scalars['String']['output'];
  redStronger: Scalars['String']['output'];
  redStrongest: Scalars['String']['output'];
  tealDefault: Scalars['String']['output'];
  tealDimmer: Scalars['String']['output'];
  tealDimmest: Scalars['String']['output'];
  tealStronger: Scalars['String']['output'];
  tealStrongest: Scalars['String']['output'];
  white: Scalars['String']['output'];
  yellowDefault: Scalars['String']['output'];
  yellowDimmer: Scalars['String']['output'];
  yellowDimmest: Scalars['String']['output'];
  yellowStronger: Scalars['String']['output'];
  yellowStrongest: Scalars['String']['output'];
};

export type ThemeVersion = {
  __typename?: 'ThemeVersion';
  customTheme: CustomTheme;
  description: Scalars['String']['output'];
  hue?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  lightness: Scalars['Float']['output'];
  saturation: Scalars['Float']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  values: ThemeValues;
};

export type ThemesSearchInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['Int']['input']>;
  colorScheme?: InputMaybe<CustomThemeColorScheme>;
  colorValue?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type ThemesSearchOutput = CustomThemeConnection | UnauthorizedError | UserError;

export type ThreadNotification = {
  __typename?: 'ThreadNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  participants: Array<User>;
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  thread?: Maybe<AnnotationAnchor>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ThreadPreview = {
  __typename?: 'ThreadPreview';
  message?: Maybe<Scalars['String']['output']>;
  messageId: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type ThreadsByFileOutput = NotFoundError | ThreadsByFileResult | UnauthorizedError;

export type ThreadsByFileResult = {
  __typename?: 'ThreadsByFileResult';
  threads: Array<AnnotationAnchor>;
};

export type Tip = {
  __typename?: 'Tip';
  amount: Scalars['Int']['output'];
  fee: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  recipient: User;
  repl?: Maybe<Repl>;
  sender: User;
  timeCreated: Scalars['Date']['output'];
};

export type TipReceivedNotification = {
  __typename?: 'TipReceivedNotification';
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  tip?: Maybe<Tip>;
  url: Scalars['String']['output'];
};

export type TipaltiIframeUrl = TipaltiIframeUrlResult | UnauthorizedError | UserError;

export type TipaltiIframeUrlResult = {
  __typename?: 'TipaltiIframeUrlResult';
  iframeUrl: Scalars['String']['output'];
};

export type TipperUser = {
  __typename?: 'TipperUser';
  totalCyclesTipped: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type ToggleHiddenCommentOutput = NotFoundError | ReplComment | UnauthorizedError | UserError;

export type ToggleHiddenPostOutput = NotFoundError | Post | UserError;

export type ToggleReplLikeInput = {
  replId: Scalars['String']['input'];
};

export type ToggleReplLikeOutput = NotFoundError | Repl | UserError;

export type TooManyRequestsError = {
  __typename?: 'TooManyRequestsError';
  message: Scalars['String']['output'];
};

export type TopGlobalTippersOutput = LeaderboardTopTippersResult | UserError;

export type TourSeen = {
  __typename?: 'TourSeen';
  id: Scalars['String']['output'];
  seen: Scalars['Boolean']['output'];
};

export type ToursSeenMuationResult = {
  __typename?: 'ToursSeenMuationResult';
  name: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ToursSeenQueryResult = {
  __typename?: 'ToursSeenQueryResult';
  seen: Scalars['Boolean']['output'];
};

export type TransformCodeInput = {
  input: Scalars['String']['input'];
  language: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type TransformCodeOutput = ServiceUnavailable | TransformCodeResult | UnauthorizedError | UserError;

export type TransformCodeResult = {
  __typename?: 'TransformCodeResult';
  code: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
};

export type TrashMutation = {
  __typename?: 'TrashMutation';
  restoreFolder?: Maybe<CluiOutput>;
  restoreRepl?: Maybe<CluiOutput>;
};


export type TrashMutationRestoreFolderArgs = {
  andRepls?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};


export type TrashMutationRestoreReplArgs = {
  title: Scalars['String']['input'];
};

export type TrashQuery = {
  __typename?: 'TrashQuery';
  viewFolders?: Maybe<CluiOutput>;
  viewRepls?: Maybe<CluiOutput>;
};

export enum TutorialReplsCategory {
  All = 'all',
  Codealong = 'codealong',
  Highlighted = 'highlighted',
  Remix = 'remix'
}

export type TutorialReplsInput = {
  category: TutorialReplsCategory;
};

export type TutorialReplsOutput = TutorialReplsResults | UnauthorizedError;

export type TutorialReplsResults = {
  __typename?: 'TutorialReplsResults';
  results: Array<Repl>;
};

export type UnarchiveTeamInput = {
  teamId: Scalars['Int']['input'];
};

export type UnarchiveTeamOutput = NotFoundError | Team | UnauthorizedError | UserError;

export type UnauthorizedError = {
  __typename?: 'UnauthorizedError';
  message: Scalars['String']['output'];
};

export type UnbanCommunityUserInput = {
  username: Scalars['String']['input'];
};

export type UnbanCommunityUserOutput = User | UserError;

export type UnfreezeNeonDatabaseInput = {
  neonProjectId: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type UnfreezeNeonDatabaseOutput = UnauthorizedError | UnfreezeNeonDatabaseResult | UserError;

export type UnfreezeNeonDatabaseResult = {
  __typename?: 'UnfreezeNeonDatabaseResult';
  success: Scalars['Boolean']['output'];
};

export type UninstallExtensionOutput = ExtensionInstallation | NotFoundError | UserError;

export type UninstallThemeInput = {
  themeId: Scalars['Int']['input'];
};

export type UninstallThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type UnpinReplFromProfileOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type UnpublishReplFromCommunityInput = {
  replId: Scalars['String']['input'];
};

export type UnpublishReplFromCommunityOutput = NotFoundError | Repl | UnauthorizedError;

export type UnpublishThemeAsModeratorInput = {
  reason: Scalars['String']['input'];
  themeId: Scalars['Int']['input'];
};

export type UnpublishThemeAsModeratorOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type UnpublishThemeInput = {
  themeId: Scalars['Int']['input'];
};

export type UnpublishThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type UnregisterPushDeviceSessionInput = {
  deviceId: Scalars['String']['input'];
};

export type UnregisterPushDeviceSessionOutput = NotFoundError | UnregisterPushDeviceSessionResult | UserError;

export type UnregisterPushDeviceSessionResult = {
  __typename?: 'UnregisterPushDeviceSessionResult';
  success: Scalars['Boolean']['output'];
};

export type UnsetTemplateCategoryReplInput = {
  replId: Scalars['String']['input'];
  templateCategoryId: Scalars['Int']['input'];
};

export type UnsetTemplateCategoryReplOutput = NotFoundError | TemplateCategoryReplResult | UnauthorizedError | UserError;

export type UnsubmitReplOutput = Repl | UserError;

export type UpdateAnnotationAnchorOutput = AnnotationAnchor | UserError;

export type UpdateBoardTrendingAlgorithmSettingsInput = {
  commentsExponent: Scalars['Float']['input'];
  postsCommentWeight: Scalars['Float']['input'];
  postsExponent: Scalars['Float']['input'];
};

export type UpdateCurrentUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  emailNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  profileImageId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCyclesAutoRefillConfigurationInput = {
  enabled: Scalars['Boolean']['input'];
  monthlyBudget?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCyclesAutoRefillConfigurationOutput = CurrentUser | UnauthorizedError | UserError;

export type UpdateEditorPreferencesInput = {
  accessibleTerminal?: InputMaybe<Scalars['Boolean']['input']>;
  chatEngine?: InputMaybe<Scalars['String']['input']>;
  codeIntelligence?: InputMaybe<Scalars['Boolean']['input']>;
  codeSuggestion?: InputMaybe<Scalars['Boolean']['input']>;
  completeCodeEngine?: InputMaybe<Scalars['String']['input']>;
  extraDelight?: InputMaybe<Scalars['Boolean']['input']>;
  fontSize?: InputMaybe<Scalars['Int']['input']>;
  indentIsSpaces?: InputMaybe<Scalars['Boolean']['input']>;
  indentSize?: InputMaybe<Scalars['Int']['input']>;
  isLayoutStacked?: InputMaybe<Scalars['Boolean']['input']>;
  keyboardHandler?: InputMaybe<Scalars['String']['input']>;
  minimapDisplay?: InputMaybe<Scalars['String']['input']>;
  multiselectModifierKey?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  webviewAutoOpenOnPortOpened?: InputMaybe<Scalars['Boolean']['input']>;
  wrapping?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGhostwriterPowerUpInput = {
  active: Scalars['Boolean']['input'];
};

export type UpdateGhostwriterPowerUpOutput = CurrentUser | NotFoundError | UnauthorizedError | UserError;

export type UpdatePostInput = {
  boardId?: InputMaybe<Scalars['Int']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  isPinned?: InputMaybe<Scalars['Boolean']['input']>;
  postType?: InputMaybe<Scalars['String']['input']>;
  replId?: InputMaybe<Scalars['String']['input']>;
  showHosted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  post: Post;
};

export type UpdatePrivatePowerUp2Output = CurrentUser | NotFoundError | UnauthorizedError | UserError;

export type UpdatePrivatePowerUpOutput = NotFoundError | UnauthorizedError | UserError | UserPowerUpDescriptionType;

export type UpdateReplCommentInput = {
  body: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type UpdateReplConnectionsEvent = {
  __typename?: 'UpdateReplConnectionsEvent';
  epoch: Scalars['DateTime']['output'];
  repl: Repl;
  users: Array<User>;
};

export type UpdateReplInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  doClone?: InputMaybe<Scalars['Boolean']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  isServer?: InputMaybe<Scalars['Boolean']['input']>;
  isStarred?: InputMaybe<Scalars['Boolean']['input']>;
  isVnc?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  removeDomain?: InputMaybe<Scalars['String']['input']>;
  templateLabel?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReplPayload = {
  __typename?: 'UpdateReplPayload';
  repl: Repl;
};

export type UpdateReplTemplateInput = {
  allowSelfGrouping?: InputMaybe<Scalars['Boolean']['input']>;
  availableEndDate?: InputMaybe<Scalars['String']['input']>;
  availableStartDate?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  selfGroupSize?: InputMaybe<Scalars['Int']['input']>;
  submissionGroups?: InputMaybe<Array<InputMaybe<SubmissionGroupInput>>>;
};

export type UpdateReplTemplateModelSolutionInput = {
  solutionId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
  visibleAfterDueDate?: InputMaybe<Scalars['Boolean']['input']>;
  visibleAfterPassingTests?: InputMaybe<Scalars['Boolean']['input']>;
  visibleAfterSubmitting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateReplTemplateModelSolutionOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type UpdateReplTemplateOutputType = ReplTemplate | UserError;

export type UpdateReplTimeUpdatedOutput = NotFoundError | Repl | UserError;

export type UpdateReplUnitTestInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  failureMessage?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  testId: Scalars['Int']['input'];
};

export type UpdateReplUnitTestLastRunInput = {
  replId: Scalars['String']['input'];
  results: Array<UpdateReplUnitTestLastRunInputResults>;
};

export type UpdateReplUnitTestLastRunInputResults = {
  didPass: Scalars['Boolean']['input'];
  testId: Scalars['Int']['input'];
};

export type UpdateReplUnitTestLastRunOutput = UpdateReplUnitTestLastRunUpdatedTests | UserError;

export type UpdateReplUnitTestLastRunUpdatedTests = {
  __typename?: 'UpdateReplUnitTestLastRunUpdatedTests';
  updatedTests: Array<ReplUnitTestOutput>;
};

export type UpdateReplUnitTestMetaInput = {
  imports?: InputMaybe<Scalars['String']['input']>;
  initialization?: InputMaybe<Scalars['String']['input']>;
  replId: Scalars['String']['input'];
  setup?: InputMaybe<Scalars['String']['input']>;
  tearDown?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStackInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  stackId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStackOutput = NotFoundError | Team | UnauthorizedError | User | UserError;

export type UpdateSubscription = NotFoundError | UnauthorizedError | UpdateSubscriptionOutput | UserError;

export type UpdateSubscriptionInput = {
  orgId: Scalars['Int']['input'];
  product: UpdateSubscriptionLineItemInput;
};

export type UpdateSubscriptionLineItemInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSubscriptionOutput = {
  __typename?: 'UpdateSubscriptionOutput';
  subscriptions: Array<Subscription>;
};

export enum UpdateSubscriptionResultPaymentIntentStatus {
  RequiresAction = 'requires_action',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded'
}

export type UpdateTeamInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  profileImage?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamInviteLinkEduSignupOutput = Team | UserError;

export type UpdateTeamMemberInput = {
  nickname?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type UpdateTeamMemberOutput = Team | UnauthorizedError | UserError;

export type UpdateTeamOrganizationInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateTeamOrganizationMemberInput = {
  memberId: Scalars['Int']['input'];
  orgId: Scalars['Int']['input'];
  role: TeamMemberRoleEnumType;
};

export type UpdateTeamOrganizationMemberOutput = NotFoundError | TeamOrganization | UnauthorizedError;

export type UpdateTeamOrganizationOutput = NotFoundError | TeamOrganization | UnauthorizedError;

export type UpdateTeamUserPermissionsInput = {
  id: Scalars['Int']['input'];
  permissions: TeamPermission;
  user: Scalars['Int']['input'];
};

export type UpdateTeamUserPermissionsOutput = Team | UserError;

export type UpdateTemplateTestInput = {
  input?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  testId: Scalars['Int']['input'];
  type?: InputMaybe<ReplTemplateTestType>;
};

export type UpdateThemeInput = {
  description: Scalars['String']['input'];
  themeId: Scalars['Int']['input'];
  values: UpdateThemeInputThemeValues;
};

export type UpdateThemeInputEditorSyntaxHighlighting = {
  tags: Array<InputMaybe<UpdateThemeInputEditorTag>>;
  values: Scalars['JSON']['input'];
};

export type UpdateThemeInputEditorTag = {
  modifiers?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
};

export type UpdateThemeInputThemeValues = {
  editor: UpdateThemeInputThemeValuesEditor;
  global: UpdateThemeInputThemeValuesGlobal;
};

export type UpdateThemeInputThemeValuesEditor = {
  syntaxHighlighting: Array<UpdateThemeInputEditorSyntaxHighlighting>;
};

export type UpdateThemeInputThemeValuesGlobal = {
  accentNegativeDefault: Scalars['String']['input'];
  accentNegativeDimmer: Scalars['String']['input'];
  accentNegativeDimmest: Scalars['String']['input'];
  accentNegativeStronger: Scalars['String']['input'];
  accentNegativeStrongest: Scalars['String']['input'];
  accentPositiveDefault: Scalars['String']['input'];
  accentPositiveDimmer: Scalars['String']['input'];
  accentPositiveDimmest: Scalars['String']['input'];
  accentPositiveStronger: Scalars['String']['input'];
  accentPositiveStrongest: Scalars['String']['input'];
  accentPrimaryDefault: Scalars['String']['input'];
  accentPrimaryDimmer: Scalars['String']['input'];
  accentPrimaryDimmest: Scalars['String']['input'];
  accentPrimaryStronger: Scalars['String']['input'];
  accentPrimaryStrongest: Scalars['String']['input'];
  backgroundDefault: Scalars['String']['input'];
  backgroundHigher: Scalars['String']['input'];
  backgroundHighest: Scalars['String']['input'];
  backgroundOverlay: Scalars['String']['input'];
  backgroundRoot: Scalars['String']['input'];
  black: Scalars['String']['input'];
  blueDefault: Scalars['String']['input'];
  blueDimmer: Scalars['String']['input'];
  blueDimmest: Scalars['String']['input'];
  blueStronger: Scalars['String']['input'];
  blueStrongest: Scalars['String']['input'];
  blurpleDefault: Scalars['String']['input'];
  blurpleDimmer: Scalars['String']['input'];
  blurpleDimmest: Scalars['String']['input'];
  blurpleStronger: Scalars['String']['input'];
  blurpleStrongest: Scalars['String']['input'];
  brownDefault: Scalars['String']['input'];
  brownDimmer: Scalars['String']['input'];
  brownDimmest: Scalars['String']['input'];
  brownStronger: Scalars['String']['input'];
  brownStrongest: Scalars['String']['input'];
  foregroundDefault: Scalars['String']['input'];
  foregroundDimmer: Scalars['String']['input'];
  foregroundDimmest: Scalars['String']['input'];
  greenDefault: Scalars['String']['input'];
  greenDimmer: Scalars['String']['input'];
  greenDimmest: Scalars['String']['input'];
  greenStronger: Scalars['String']['input'];
  greenStrongest: Scalars['String']['input'];
  greyDefault: Scalars['String']['input'];
  greyDimmer: Scalars['String']['input'];
  greyDimmest: Scalars['String']['input'];
  greyStronger: Scalars['String']['input'];
  greyStrongest: Scalars['String']['input'];
  limeDefault: Scalars['String']['input'];
  limeDimmer: Scalars['String']['input'];
  limeDimmest: Scalars['String']['input'];
  limeStronger: Scalars['String']['input'];
  limeStrongest: Scalars['String']['input'];
  magentaDefault: Scalars['String']['input'];
  magentaDimmer: Scalars['String']['input'];
  magentaDimmest: Scalars['String']['input'];
  magentaStronger: Scalars['String']['input'];
  magentaStrongest: Scalars['String']['input'];
  orangeDefault: Scalars['String']['input'];
  orangeDimmer: Scalars['String']['input'];
  orangeDimmest: Scalars['String']['input'];
  orangeStronger: Scalars['String']['input'];
  orangeStrongest: Scalars['String']['input'];
  outlineDefault: Scalars['String']['input'];
  outlineDimmer: Scalars['String']['input'];
  outlineDimmest: Scalars['String']['input'];
  outlineStronger: Scalars['String']['input'];
  outlineStrongest: Scalars['String']['input'];
  pinkDefault: Scalars['String']['input'];
  pinkDimmer: Scalars['String']['input'];
  pinkDimmest: Scalars['String']['input'];
  pinkStronger: Scalars['String']['input'];
  pinkStrongest: Scalars['String']['input'];
  purpleDefault: Scalars['String']['input'];
  purpleDimmer: Scalars['String']['input'];
  purpleDimmest: Scalars['String']['input'];
  purpleStronger: Scalars['String']['input'];
  purpleStrongest: Scalars['String']['input'];
  redDefault: Scalars['String']['input'];
  redDimmer: Scalars['String']['input'];
  redDimmest: Scalars['String']['input'];
  redStronger: Scalars['String']['input'];
  redStrongest: Scalars['String']['input'];
  tealDefault: Scalars['String']['input'];
  tealDimmer: Scalars['String']['input'];
  tealDimmest: Scalars['String']['input'];
  tealStronger: Scalars['String']['input'];
  tealStrongest: Scalars['String']['input'];
  white: Scalars['String']['input'];
  yellowDefault: Scalars['String']['input'];
  yellowDimmer: Scalars['String']['input'];
  yellowDimmest: Scalars['String']['input'];
  yellowStronger: Scalars['String']['input'];
  yellowStrongest: Scalars['String']['input'];
};

export type UpdateThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type UpdateUserCourseLessonOutput = NotFoundError | UnauthorizedError | UpdatedUserCourseLesson | UserError;

export type UpdateUserOutput = CurrentUser | UserError;

export type UpdateUserPrivacyPreferencesInput = {
  show_presence?: InputMaybe<UserPrivacyPreferenceShowPresenceOptions>;
};

export type UpdateUserPrivacyPreferencesOutput = CurrentUser | UnauthorizedError | UserError;

export type UpdateUserSitePresenceOutput = CurrentUser | ServiceUnavailable | UnauthorizedError;

export type UpdatedUserCourseLesson = {
  __typename?: 'UpdatedUserCourseLesson';
  userCourseLesson: UserCourseLesson;
};

export enum UpgradePathEnumType {
  Cycles = 'CYCLES',
  Hacker = 'HACKER',
  HackerPro = 'HACKER_PRO'
}

export type UpgradeThemeInput = {
  themeId: Scalars['Int']['input'];
};

export type UpgradeThemeOutput = CustomTheme | NotFoundError | UnauthorizedError | UserError;

export type UploadReplAttachmentInput = {
  contents: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  lastModified: Scalars['String']['input'];
  replId: Scalars['String']['input'];
};

export type UploadReplAttachmentOutput = NotFoundError | Repl | UnauthorizedError | UserError;

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  bountyInfo: BountyInfo;
  bountyStats: BountyUserStats;
  coverImage?: Maybe<CoverImage>;
  displayName: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  followCount: Scalars['Int']['output'];
  followerCount: Scalars['Int']['output'];
  followers: UserConnection;
  follows: UserConnection;
  fullName: Scalars['String']['output'];
  gate: Scalars['Boolean']['output'];
  hasPrivacyRole: Scalars['Boolean']['output'];
  hasRole: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  isBannedFromBoards: Scalars['Boolean']['output'];
  isBlockedByCurrentUser: Scalars['Boolean']['output'];
  isBlockingCurrentUser: Scalars['Boolean']['output'];
  isFollowedByCurrentUser: Scalars['Boolean']['output'];
  isFollowingCurrentUser: Scalars['Boolean']['output'];
  /** @deprecated Use `subscriptionIsType` or `userSubscriptionType` instead. */
  isHacker: Scalars['Boolean']['output'];
  isLoggedIn: Scalars['Boolean']['output'];
  isSubscribed: Scalars['Boolean']['output'];
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  languages: Array<Language>;
  lastName?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  pinnedRepls: Array<Repl>;
  posts?: Maybe<PostConnection>;
  presenceStatus: UserPresenceStatus;
  profileRepls: ReplConnection;
  publicRepls: ReplConnection;
  redirectToTeamDashboard: Scalars['Boolean']['output'];
  roles: Array<UserRole>;
  socials: Array<UserSocial>;
  subscriptionIsType: Scalars['Boolean']['output'];
  teamPermissions?: Maybe<TeamPermission>;
  timeCreated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userSubscriptionType?: Maybe<UserSubscriptionTypeEnum>;
  username: Scalars['String']['output'];
  warnings?: Maybe<Array<Maybe<Warning>>>;
};


export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type UserFollowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
};


export type UserGateArgs = {
  feature: Scalars['String']['input'];
};


export type UserHasRoleArgs = {
  role: UserRoles;
};


export type UserLanguagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  unlisted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserProfileReplsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type UserPublicReplsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  pinnedReplsFirst?: InputMaybe<Scalars['Boolean']['input']>;
  showUnnamed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserRolesArgs = {
  only?: InputMaybe<Array<UserRoles>>;
};


export type UserSubscriptionIsTypeArgs = {
  subscriptionType: UserSubscriptionTypeEnum;
};


export type UserTeamPermissionsArgs = {
  teamId: Scalars['Int']['input'];
};

export type UserAuth = {
  __typename?: 'UserAuth';
  accessToken?: Maybe<Scalars['String']['output']>;
  provider: UserAuthProviders;
};

export type UserAuthProviderError = {
  __typename?: 'UserAuthProviderError';
  message: Scalars['String']['output'];
  provider: UserAuthProviders;
};

export enum UserAuthProviders {
  Apple = 'APPLE',
  Facebook = 'FACEBOOK',
  Github = 'GITHUB',
  Google = 'GOOGLE'
}

export type UserCliAccountMutation = {
  __typename?: 'UserCliAccountMutation';
  changeUsername?: Maybe<CluiOutput>;
};


export type UserCliAccountMutationChangeUsernameArgs = {
  username: Scalars['String']['input'];
};

export type UserCliAccountQuery = {
  __typename?: 'UserCliAccountQuery';
  viewWarns?: Maybe<CluiOutput>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  items: Array<User>;
  pageInfo: PageInfo;
};

export type UserCourse = {
  __typename?: 'UserCourse';
  courseSlug: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lessons?: Maybe<Array<UserCourseLesson>>;
  timeCreated: Scalars['Date']['output'];
};

export type UserCourseLesson = {
  __typename?: 'UserCourseLesson';
  course: UserCourse;
  id: Scalars['Int']['output'];
  lessonSlug: Scalars['String']['output'];
  repl?: Maybe<Repl>;
  timeCompleted?: Maybe<Scalars['Date']['output']>;
  timeCreated: Scalars['Date']['output'];
};

export type UserCourseLessonOutput = NotFoundError | UnauthorizedError | UserCourseLesson | UserError;

export type UserCourseLessonResult = {
  __typename?: 'UserCourseLessonResult';
  userCourseLesson: UserCourseLesson;
};

export type UserCourseOutput = NotFoundError | UnauthorizedError | UserCourse | UserError;

export type UserCourseResult = {
  __typename?: 'UserCourseResult';
  userCourse: UserCourse;
};

export type UserCyclesAutoRefillConfigurationOutput = CyclesAutoRefillConfiguration | UnauthorizedError;

export type UserEgressSummary = {
  __typename?: 'UserEgressSummary';
  monthly: MonthlyEgressSummary;
};

export type UserError = {
  __typename?: 'UserError';
  message: Scalars['String']['output'];
};

export type UserEvent = {
  __typename?: 'UserEvent';
  comment?: Maybe<ReplComment>;
  eventType: User_EventseventTypeEnumType;
  following?: Maybe<User>;
  id: Scalars['Int']['output'];
  post?: Maybe<Post>;
  reaction?: Maybe<ReplReaction>;
  repl?: Maybe<Repl>;
  timeUpdated: Scalars['Date']['output'];
  user: User;
};

export type UserEventConnection = {
  __typename?: 'UserEventConnection';
  items: Array<UserEvent>;
  pageInfo: PageInfo;
};

export enum UserFlagValueType {
  Boolean = 'boolean',
  Json = 'json',
  Number = 'number',
  String = 'string'
}

export type UserGate = {
  __typename?: 'UserGate';
  controlName: Scalars['String']['output'];
  type: UserGateValueType;
  value: Scalars['StringNumberBoolean']['output'];
};

export enum UserGateValueType {
  Boolean = 'boolean',
  Json = 'json',
  Number = 'number',
  String = 'string'
}

export type UserPaymentMethod = PaymentMethod | UnauthorizedError;

export type UserPowerUpCost = UnauthorizedError | UserError | UserPowerUpCostsType;

export type UserPowerUpCostDetailType = {
  __typename?: 'UserPowerUpCostDetailType';
  cycles: Scalars['Int']['output'];
  explanation: PowerUpCostExplanationEnumType;
};

export type UserPowerUpCostsType = {
  __typename?: 'UserPowerUpCostsType';
  ghostwriter: UserPowerUpCostDetailType;
  private: UserPowerUpCostDetailType;
};

export type UserPowerUpDescriptionByType = {
  CTA?: Maybe<PowerUpCallToActionEnumType>;
  active: Scalars['Boolean']['output'];
  cost?: Maybe<UserPowerUpCostDetailType>;
  isTrial: Scalars['Boolean']['output'];
  methodOfPayment?: Maybe<PowerUpMethodOfPayment>;
  suggestedUpgradePath?: Maybe<UpgradePathEnumType>;
  timeFulfillmentDue?: Maybe<Scalars['Date']['output']>;
  timeLastFulfilled?: Maybe<Scalars['Date']['output']>;
  timeTrialExpiry?: Maybe<Scalars['DateTime']['output']>;
  willRenew: Scalars['Boolean']['output'];
};

export type UserPowerUpDescriptionType = {
  __typename?: 'UserPowerUpDescriptionType';
  active: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  time_fulfillment_due?: Maybe<Scalars['DateTime']['output']>;
  time_last_fulfilled?: Maybe<Scalars['DateTime']['output']>;
  type: UserPowerUpTypeEnumType;
};

export enum UserPowerUpTypeEnumType {
  Egress = 'egress',
  Ghostwriter = 'ghostwriter',
  NeonDatabasePreview = 'neonDatabasePreview',
  Private = 'private'
}

export type UserPowerUpsTypes = {
  __typename?: 'UserPowerUpsTypes';
  egress: Array<EgressPowerUpType>;
  ghostwriter: GhostwriterPowerUpType;
  neonDatabasePreview: Array<NeonDatabasePreviewPowerUpType>;
  privateRepls: PrivateReplsPowerUpType;
};

export type UserPowerUpsTypesOutput = UnauthorizedError | UserError | UserPowerUpsTypes;

export type UserPresenceStatus = {
  __typename?: 'UserPresenceStatus';
  isOnline: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
};

export enum UserPrivacyPreferenceShowPresenceOptions {
  Never = 'never',
  WhenOnline = 'when_online',
  WhereOnline = 'where_online'
}

export type UserReplCommentsOutput = {
  __typename?: 'UserReplCommentsOutput';
  comments: Array<Maybe<ReplComment>>;
};

export type UserRole = {
  __typename?: 'UserRole';
  id: Scalars['String']['output'];
  key: UserRoles;
  name: Scalars['String']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
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
  VerifiedBountyHunter = 'VERIFIED_BOUNTY_HUNTER'
}

export type UserSearchResults = {
  __typename?: 'UserSearchResults';
  /** @deprecated Field no longer supported */
  languages: Array<Language>;
  /** @deprecated Field no longer supported */
  posts: Array<Post>;
  repls: Array<Repl>;
};


export type UserSearchResultsLanguagesArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type UserSearchResultsPostsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type UserSearchResultsReplsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type UserSocial = {
  __typename?: 'UserSocial';
  id: Scalars['Int']['output'];
  type: User_SocialstypeEnumType;
  url: Scalars['String']['output'];
};

export enum UserSocialEnum {
  Discord = 'discord',
  Facebook = 'facebook',
  Github = 'github',
  Linkedin = 'linkedin',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Website = 'website',
  Youtube = 'youtube'
}

export type UserState = {
  __typename?: 'UserState';
  id: Scalars['Int']['output'];
  interestedIn?: Maybe<Scalars['String']['output']>;
  languagesInterestedIn: Array<Language>;
  skillLevel?: Maybe<Scalars['String']['output']>;
};

export enum UserSubscriptionTypeEnum {
  Hacker = 'HACKER',
  HackerPro = 'HACKER_PRO'
}

export enum UserTrustEnum {
  Low = 'low'
}

export enum UserUpdateColumns {
  Email = 'EMAIL',
  Username = 'USERNAME'
}

export type WarnUserOutput = UserError | Warning;

export type Warning = {
  __typename?: 'Warning';
  id: Scalars['Int']['output'];
  moderator?: Maybe<User>;
  reason: Scalars['String']['output'];
  timeCreated: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type WarningNotification = {
  __typename?: 'WarningNotification';
  context: Scalars['String']['output'];
  creator?: Maybe<User>;
  id: Scalars['Int']['output'];
  seen: Scalars['Boolean']['output'];
  text?: Maybe<Scalars['String']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  timeUpdated: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export enum Action {
  Reject = 'reject',
  Verify = 'verify'
}

export enum BountiesstatusEnumType {
  Canceled = 'canceled',
  Completed = 'completed',
  InProgress = 'in_progress',
  Open = 'open'
}

export enum Bounty_ApplicationsstatusEnumType {
  Accepted = 'accepted',
  AwaitingModeration = 'awaiting_moderation',
  NotReviewed = 'not_reviewed',
  Rejected = 'rejected'
}

export enum Bounty_EventseventTypeEnumType {
  ApplicationReviewed = 'application_reviewed',
  ApplicationSubmitted = 'application_submitted',
  BountyAbandoned = 'bounty_abandoned',
  BountyCanceled = 'bounty_canceled',
  BountyStateChange = 'bounty_state_change',
  BountyUpdated = 'bounty_updated',
  WorkReviewed = 'work_reviewed',
  WorkSubmitted = 'work_submitted'
}

export type CreateCyclesStripeCheckoutSession = CreateCyclesStripeCheckoutSessionResult | UnauthorizedError | UserError;

export enum CustomerspaymentMethodEnumType {
  Bank = 'bank',
  Card = 'card',
  Check = 'check'
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
  Warning = 'Warning'
}

export enum Moderator_Action_RecordtypeEnumType {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export enum Multiplayer_InvitestypeEnumType {
  R = 'r',
  Rw = 'rw'
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
  Warning = 'warning'
}

export enum Repl_PermissionstypeEnumType {
  R = 'r',
  Rw = 'rw'
}

export enum Repl_ReactionsreactionTypeEnumType {
  Eyes = 'eyes',
  Fire = 'fire',
  Heart = 'heart',
  OpenMouth = 'open_mouth',
  Rocket = 'rocket'
}

export enum Repl_View_SettingsdefaultViewEnumType {
  ReplFile = 'repl_file',
  ReplImage = 'repl_image'
}

export type SetFollowing = FollowResult | NotFoundError | UnauthorizedError | UserError;

export type SetFollowingInput = {
  shouldFollow: Scalars['Boolean']['input'];
  targetUserId: Scalars['Int']['input'];
};

export type Stacks = {
  id: Scalars['Int']['input'];
  templateIds: Array<Scalars['Int']['input']>;
};

export enum Team_Organization_MembersroleEnumType {
  Admin = 'admin',
  Owner = 'owner',
  Team = 'team'
}

export enum Team_Organization_SubscriptionsstripeStatusEnumType {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

export enum User_EventseventTypeEnumType {
  CreateReaction = 'create_reaction',
  PublishPost = 'publish_post',
  PublishTemplate = 'publish_template',
  UpdatePost = 'update_post',
  UpdateTemplate = 'update_template',
  UserComment = 'user_comment',
  UserFollowing = 'user_following'
}

export enum User_SocialstypeEnumType {
  Discord = 'discord',
  Facebook = 'facebook',
  Github = 'github',
  Linkedin = 'linkedin',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Website = 'website',
  Youtube = 'youtube'
}
