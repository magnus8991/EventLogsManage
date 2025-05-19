export const IDENTITIES = {
  NAME: "identity",
  LOGIN: "login",
  ADD: "create",
};
export const EVENTS = {
  NAME: "subjects",
  GET_EVENTS_BY_FILTER: "events-by-filter",
  ADD: "add",
};
export const MODULES = {
  IDENTITIES: {
    USER: `/${IDENTITIES.NAME}/${IDENTITIES.LOGIN}`,
    ADD: `/${IDENTITIES.NAME}/${IDENTITIES.ADD}`,
  },
  EVENTS: {
    GET_EVENTS_BY_FILTER: `/${EVENTS.NAME}/${EVENTS.GET_EVENTS_BY_FILTER}`,
    ADD: `/${EVENTS.NAME}/${EVENTS.ADD}`,
  },
};
