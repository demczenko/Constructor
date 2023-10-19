const normalizeTranslations = (translations) => {
  return translations.values.flat().map((t) => t.replaceAll("\n", "<br />"));
};

export default normalizeTranslations;
