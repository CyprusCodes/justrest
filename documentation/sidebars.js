/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: "category",
      label: "Overview",
      collapsed: false,
      items: ["intro", "what-is-xest-why", "installation", "routing", "CRUD"],
    },
    {
      type: "category",
      label: "Development Environment",
      collapsed: true,
      items: ["docker", "mysql", "node"],
    },
    {
      type: "category",
      label: "CLI",
      collapsed: true,
      items: [
        "bootstrap",
        "run",
        "refresh",
        "query-generator",
        "seed-generator",
      ],
    },
    {
      type: "category",
      label: "Database Model",
      collapsed: true,
      items: [
        "use-mysql",
        "database-schema-file",
        "seed-data-file",
        "managing-migrations",
        "query-interface",
      ],
    },

    {
      type: "category",
      label: "Security",
      collapsed: true,
      items: [
        "authentication",
        "authorization",
        "securing-api-endpoints",
        "account-system",
        "rate-limiting",
      ],
    },
    {
      type: "category",
      label: "Testing",
      collapsed: true,
      items: ["supertest"],
    },
  ],
  screens: [
    {
      type: "ref",
      id: "api/screens",
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        "api/screen",
        "api/template",
        "api/layout",
        "api/tags",
        "api/window",
        "api/resizable",
        "api/button",
        "api/criteria",
        "api/tab-and-tabcontainer",
        "api/wizard-and-wizard-panel",
        "api/accordion",
        "api/grids",
        "api/pivot-table",
        "api/context-menu",
        "api/messages",
        "api/info",
        "api/include",
        "api/dialog",
        "api/chart",
        "api/actions",
        "api/dependencies",
      ],
    },
  ],

  training: [
    {
      type: "category",
      label: "Basic tutorials",
      collapsed: false,
      items: [
        "training/awe-101",
        "training/awe-102",
        "training/awe-103",
        "training/awe-104",
        "training/awe-105",
        "training/awe-106",
      ],
    },
  ],
};
