import * as React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { H1, H3 } from 'src/fonts/Fonts'
import GoldStone from 'src/home/roadmap/GoldStone'
import { NameSpaces, useTranslation } from 'src/i18n'
import valueOFGold from 'src/icons/value-of-gold-no-axis.png'
import { Cell, GridRow, Spans } from 'src/layout/GridRow'
import { useScreenSize } from 'src/layout/ScreenSize'
import CoinHalfFull from 'src/shared/CoinHalfFull'
import HollowCoin from 'src/shared/HollowOval'
import { hashNav } from 'src/shared/menu-items'
import { colors, fonts, standardStyles } from 'src/styles'
import { Status } from './milestones'

export interface MileStone {
  date?: string
  text: string
  title: string
  status: Status
}

interface Props {
  milestones: MileStone[]
}

export default React.memo(function TimeLine({ milestones }: Props) {
  const { t } = useTranslation(NameSpaces.home)
  const { isMobile } = useScreenSize()

  const upcoming = React.useMemo(
    () => milestones.filter((milestone) => milestone.status !== Status.complete).reverse(),
    []
  )

  const past = React.useMemo(() => {
    const happend = milestones.filter((milestone) => milestone.status === Status.complete)
    if (isMobile) {
      return happend.slice().reverse()
    }
    return happend
  }, [isMobile, milestones])

  return (
    <>
      <GridRow
        allStyle={styles.container}
        desktopStyle={standardStyles.sectionMarginTop}
        tabletStyle={standardStyles.sectionMarginTopTablet}
        mobileStyle={standardStyles.sectionMarginTopMobile}
        nativeID={hashNav.home.timeline}
      >
        <Cell span={Spans.half} tabletSpan={Spans.three4th}>
          <Image source={valueOFGold} style={styles.rising} resizeMode="contain" />
          <H3 style={styles.subTitle}>{t('timeline.subtitle')}</H3>
          <H1 ariaLevel="2" style={styles.mainTitle}>
            {t('timeline.title')}
          </H1>
          <Text style={fonts.p}>{t('timeline.intro')}</Text>
        </Cell>
      </GridRow>
      <GridRow allStyle={styles.container}>
        <Cell span={Spans.half}>
          {isMobile && <Legend />}
          <Text style={subTitleStyle}>{t('timeline.pastTitle')}</Text>
          {past.map(({ title, date, status, text }, index) => {
            return (
              <GoldStone
                status={status}
                key={title}
                index={index}
                date={date}
                title={title}
                text={text}
                isLast={index === past.length - 1}
              />
            )
          })}
        </Cell>
        <Cell span={Spans.half}>
          {!isMobile && <Legend />}
          <Text style={subTitleStyle}>{t('timeline.upcomingTitle')}</Text>
          {upcoming.map(({ title, status, text }, index) => (
            <GoldStone
              status={status}
              key={title}
              index={index}
              title={title}
              text={text}
              isLast={index === upcoming.length - 1}
            />
          ))}
        </Cell>
      </GridRow>
    </>
  )
})

const Legend = React.memo(() => {
  const { t } = useTranslation(NameSpaces.home)
  const { isMobile } = useScreenSize()

  return (
    <>
      <Text style={subTitleStyle}>{t('timeline.legendTitle')}</Text>
      <View style={styles.legendArea}>
        <View style={isMobile ? [styles.legend, styles.legendAugMobile] : styles.legend}>
          <CoinHalfFull size={18} color={colors.gold} />
          <Text style={[fonts.legal, styles.legendText]}>{t('timeline.legend.half')}</Text>
        </View>
        <View style={isMobile ? [styles.legend, styles.legendAugMobile] : styles.legend}>
          <HollowCoin size={18} color={colors.gold} />
          <Text style={[fonts.legal, styles.legendText]}>{t('timeline.legend.empty')}</Text>
        </View>
      </View>
    </>
  )
})

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  fillSpace: { justifyContent: 'space-between' },
  subTitle: {
    marginTop: 15,
  },
  mainTitle: {
    marginBottom: 30,
  },
  upcoming: {
    marginBottom: 30,
    marginRight: 40,
    maxWidth: 400,
  },
  rising: {
    width: 75,
    height: 55,
  },
  legend: {
    marginLeft: 5,
    marginRight: 15,
    flexDirection: 'row',
  },
  legendAugMobile: {
    marginLeft: 2,
  },
  legendText: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  legendArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

const subTitleStyle = [fonts.h6, standardStyles.elementalMargin]
