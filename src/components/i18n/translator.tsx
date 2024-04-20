import { useTranslation } from "react-i18next";
// Importamos o hook

export default function Translator({ path }: { path: string }) {
  const { t } = useTranslation();

  return t(path);
}
