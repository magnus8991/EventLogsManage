export const IDENTITIES = {
  NAME: "identity",
  LOGIN: "login",
  ADD: "create",
};
export const SUBJECTS = {
  NAME: "subjects",
  GET_SUBJECTS_BY_IDENTIFICATION: "subjects-by-identification",
  ADD: "add",
};
export const MODULES = {
  IDENTITIES: {
    USER: `/${IDENTITIES.NAME}/${IDENTITIES.LOGIN}`,
    ADD: `/${IDENTITIES.NAME}/${IDENTITIES.ADD}`,
  },
  SUBJECTS: {
    GET_SUBJECTS_BY_IDENTIFICATION: `/${SUBJECTS.NAME}/${SUBJECTS.GET_SUBJECTS_BY_IDENTIFICATION}`,
    ADD: `/${SUBJECTS.NAME}/${SUBJECTS.ADD}`,
  },
};
