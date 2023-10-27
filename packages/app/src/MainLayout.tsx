import * as styles from "./MainLayout.css";
import { Trips } from "./Trips";
import { useTranslation } from "react-i18next";

export function MainLayout() {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        {t("MainLayout.Trips")}
        <select
          value={i18n.resolvedLanguage}
          onChange={({ currentTarget }) =>
            i18n.changeLanguage(currentTarget.value)
          }
        >
          <option value="en">{t("LanguageSelector.English")}</option>
          <option value="it">{t("LanguageSelector.Italian")}</option>
        </select>
      </header>
      <main className={styles.main}>
        <Trips />
      </main>
    </div>
  );
}
