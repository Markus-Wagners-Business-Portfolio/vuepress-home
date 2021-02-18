module.exports = [
  {
    title: "Git",
    icon: "git",
    collapsable: false,
    children: [
      "",
      "install",
      "intro",
      "create-repo",
      "status",
      "recall",
      "reset",
      "working-directory",
      "change",
      "remote",
      "branch",
      "tag",
      "ignore",
      "working",
      "custom",
    ],
  },
  {
    title: "GitHub",
    icon: "Github",
    collapsable: false,
    prefix: "github/",
    children: [
      "",
      "intro",
      "pr",
      "semantic",
      "speedup",
      "token",
      {
        title: "Github Actions",
        icon: "actions",
        collapsable: false,
        prefix: "actions/",
        children: [
          "",
          "intro",
          "config",
          {
            title: "常见 Actions",
            icon: "actions",
            children: ["checkout"],
          },
        ],
      },
      "deploy",
    ],
  },
];
