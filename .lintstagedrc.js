export default {
  "*.ts?(x)": (filenames) => [
    "tsc -p tsconfig.json --noEmit",
    `eslint ${filenames.join(" ")} --fix`,
  ],
//   "*.scss": ["stylelint --fix"],
//   "*": ["prettier --write --ignore-unknown"],
};
