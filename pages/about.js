import Seo from "@/components/elements/seo"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import HeroBg from "@/components/layout/HeroBg"
import MobileDetect from "mobile-detect"
import { wrapper } from "reduxStore"
import { getGlobalData } from "utils/api"
import Layout from "@/components/layout/layout"
import AboutUsContainer from "@/components/containers/about-us-container"
import HomePath from "@/components/buttons/HomePath"

const AboutPage = ({ global, pageContext, deviceType }) => {
  const { t } = useTranslation()
  return (
    <Layout global={global} pageContext={pageContext} showFAQ={true}>
      {/* Add meta tags for SEO*/}
      <Seo
        metadata={{
          ...global.attributes.metadata,
          metaTitle: t("about_nafsi"),
          metaDescription: t("about_nafsi"),
        }}
      />
      <HeroBg>
        <div className="hero-content">
          <h6 className="hero-title">{t("about_nafsi")}</h6>
          <HomePath title={t("about_us")} />
        </div>
      </HeroBg>
      <AboutUsContainer />
      <style jsx>{`
        .hero-title {
          @apply text-[#2E3333] text-center text-4xl font-bold uppercase mb-4;
        }

        .hero-subtitle {
          @apply text-gray-64 text-base inline-block text-center;
        }

        .hero-content {
          @apply text-center pb-16;
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { locale, locales, defaultLocale, req } = context

    let userAgent
    let deviceType
    if (req) {
      userAgent = req.headers["user-agent"]
    } else {
      userAgent = navigator.userAgent
    }
    const md = new MobileDetect(userAgent)
    if (md.tablet()) {
      deviceType = "tablet"
    } else if (md.mobile()) {
      deviceType = "mobile"
    } else {
      deviceType = "desktop"
    }

    const globalLocale = await getGlobalData(locale)
    const pageContext = {
      locale,
      locales,
      defaultLocale,
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        global: globalLocale.data,
        pageContext: {
          ...pageContext,
        },
        deviceType,
      },
    }
  }
)

export default AboutPage
