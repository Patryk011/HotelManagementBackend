export interface KeycloakToken {
  sub: string;
  email?: string;
  preferred_username?: string;
  realm_access?: {
    roles?: string[];
  };
  resource_access?: {
    [resourceName: string]: {
      roles: string[];
    };
  };
}
