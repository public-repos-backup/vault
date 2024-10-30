/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { findAll } from '@ember/test-helpers';

export const GENERAL = {
  breadcrumb: '[data-test-breadcrumbs] li',
  breadcrumbAtIdx: (idx: string) => `[data-test-breadcrumbs] li:nth-child(${idx + 1}) a`,
  breadcrumbs: '[data-test-breadcrumbs]',
  breadcrumbLink: (label: string) => `[data-test-breadcrumb="${label}"] a`,
  title: '[data-test-page-title]',
  headerContainer: 'header.page-header',
  icon: (name: string) => `[data-test-icon="${name}"]`,
  tab: (name: string) => `[data-test-tab="${name}"]`,
  hdsTab: (name: string) => `[data-test-tab="${name}"] button`, // hds tabs are li elements and QUnit needs a clickable element so add button to the selector
  secretTab: (name: string) => `[data-test-secret-list-tab="${name}"]`,
  flashMessage: '[data-test-flash-message]',
  latestFlashContent: '[data-test-flash-message]:last-of-type [data-test-flash-message-body]',
  inlineAlert: '[data-test-inline-alert]',

  filter: (name: string) => `[data-test-filter="${name}"]`,
  filterInput: '[data-test-filter-input]',
  inputSearch: (attr: string) => `[data-test-input-search="${attr}"]`,
  filterInputExplicit: '[data-test-filter-input-explicit]',
  filterInputExplicitSearch: '[data-test-filter-input-explicit-search]',
  confirmModalInput: '[data-test-confirmation-modal-input]',
  confirmButton: '[data-test-confirm-button]',
  confirmMessage: '[data-test-confirm-action-message]',
  confirmTrigger: '[data-test-confirm-action-trigger]',
  emptyStateTitle: '[data-test-empty-state-title]',
  emptyStateSubtitle: '[data-test-empty-state-subtitle]',
  emptyStateMessage: '[data-test-empty-state-message]',
  emptyStateActions: '[data-test-empty-state-actions]',
  menuTrigger: '[data-test-popup-menu-trigger]',
  listItem: '[data-test-list-item-link]',
  // FORMS
  checkboxByAttr: (attr: string) => `[data-test-checkbox="${attr}"]`,
  enableField: (attr: string) => `[data-test-enable-field="${attr}"] button`,
  fieldByAttr: (attr: string) => `[data-test-field="${attr}"]`,
  infoRowLabel: (label: string) => `[data-test-row-label="${label}"]`,
  infoRowValue: (label: string) => `[data-test-value-div="${label}"]`,
  inputByAttr: (attr: string) => `[data-test-input="${attr}"]`,
  selectByAttr: (attr: string) => `[data-test-select="${attr}"]`,
  toggleInput: (attr: string) => `[data-test-toggle-input="${attr}"]`,
  toggleGroup: (attr: string) => `[data-test-toggle-group="${attr}"]`,
  ttl: {
    toggle: (attr: string) => `[data-test-toggle-label="${attr}"]`,
    input: (attr: string) => `[data-test-ttl-value="${attr}"]`,
  },

  validation: (attr: string) => `[data-test-field-validation=${attr}]`,
  validationWarning: (attr: string) => `[data-test-validation-warning=${attr}]`,
  messageError: '[data-test-message-error]',
  notFound: '[data-test-not-found]',
  pageError: {
    error: '[data-test-page-error]',
    errorTitle: (httpStatus: number) => `[data-test-page-error-title="${httpStatus}"]`,
    errorMessage: '[data-test-page-error-message]',
    errorDetails: '[data-test-page-error-details]',
  },
  inlineError: '[data-test-inline-error-message]',
  kvObjectEditor: {
    deleteRow: (idx = 0) => `[data-test-kv-delete-row="${idx}"]`,
  },
  searchSelect: {
    trigger: (id: string) => `[data-test-component="search-select"]#${id} .ember-basic-dropdown-trigger`,
    options: '.ember-power-select-option',
    optionIndex: (text: string) =>
      findAll('.ember-power-select-options li').findIndex((e) => e.textContent?.trim() === text),
    option: (index = 0) => `.ember-power-select-option:nth-child(${index + 1})`,
    selectedOption: (index = 0) => `[data-test-selected-option="${index}"]`,
    noMatch: '.ember-power-select-option--no-matches-message',
    removeSelected: '[data-test-selected-list-button="delete"]',
    searchInput: '.ember-power-select-search-input',
  },
  overviewCard: {
    container: (title: string) => `[data-test-overview-card-container="${title}"]`,
    title: (title: string) => `[data-test-overview-card-title="${title}"]`,
    description: (title: string) => `[data-test-overview-card-subtitle="${title}"]`,
    content: (title: string) => `[data-test-overview-card-content="${title}"]`,
    actionText: (text: string) => `[data-test-action-text="${text}"]`,
    actionLink: (label: string) => `[data-test-overview-card="${label}"] a`,
  },
  pagination: {
    next: '.hds-pagination-nav__arrow--direction-next',
    prev: '.hds-pagination-nav__arrow--direction-prev',
  },
  kvSuggestion: {
    input: '[data-test-kv-suggestion-input]',
    select: '[data-test-kv-suggestion-select]',
  },
  navLink: (label: string) => `[data-test-sidebar-nav-link="${label}"]`,
  cancelButton: '[data-test-cancel]',
  saveButton: '[data-test-save]',
  backButton: '[data-test-back-button]',
  codemirror: `[data-test-component="code-mirror-modifier"]`,
  codemirrorTextarea: `[data-test-component="code-mirror-modifier"] textarea`,
};
