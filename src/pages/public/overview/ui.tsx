import Flex from "components/basic/flex";
import Grid from "components/basic/grid";
import { Span } from "components/basic/text";
import { OverlayStyle } from "style/global.style";
import BackButton from "components/custom/back-button";
import OverviewStyles from "style/overview.style";
import { ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';
import CareerStaircase from 'components/custom/career-staircase';
import Icon from "components/basic/icon";
import { HStack, Image } from '@chakra-ui/react'

import constantImages from "constants/img.constant";
import constantData from "constants/data.constant";

interface ExperiencePageUIProps {
    menu: boolean
    follows: Number
}

const RADIAN = Math.PI / 180;

type PieDatum = {
    name: string;
    value: number;
};

const getRoundedPercentages = (data: PieDatum[]): number[] => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    if (total <= 0) return data.map(() => 0);

    const exact = data.map((item) => (item.value / total) * 100);
    const floored = exact.map((value) => Math.floor(value));
    let remainder = 100 - floored.reduce((sum, value) => sum + value, 0);

    const order = exact
        .map((value, index) => ({ index, fractional: value - Math.floor(value) }))
        .sort((a, b) => b.fractional - a.fractional);

    for (let i = 0; i < order.length && remainder > 0; i += 1) {
        floored[order[i].index] += 1;
        remainder -= 1;
    }

    return floored;
};

const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, index
}: any, roundedPercentages: number[]) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const roundedPercent = roundedPercentages[index] ?? 0;

    if (roundedPercent <= 0) {
        return null;
    }

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor='middle'
            dominantBaseline="central"
            fontFamily="Titillium Web"
            fontSize={14}
        >
            {`${roundedPercent}%`}
        </text>
    );
};

const UserInfo = ({ follows }: { follows: Number }) => (
    <Flex $style={{
        ...OverviewStyles.UserInfoCardStyle,
        queries: {
            1150: {
                maxW: "100%"
            }
        }
    }}>
        <Flex $style={{
            fDirection: "column",
            gap: "1.5rem",
            w: "100%",
        }}>
            <Flex $style={{
                fDirection: "column",
                gap: "1.5rem",
                queries: {
                    1150: {
                        fDirection: "row",
                        vAlign: "center",
                    }
                }
            }}>
                <Flex $style={{
                    ...OverviewStyles.AvatarWrapperStyle,
                    queries: {
                        1150: {
                            maxW: "10rem"
                        }
                    }
                }}>
                    <Image
                        src={constantImages.Avatar}
                        alt="Suyama Keiichiro avatar"
                        style={{
                            borderRadius: "100%",
                            maxWidth: "15rem",
                            width: "100%"
                        }}
                    />
                </Flex>
                <Flex $style={{
                    fDirection: "column"
                }}>
                    <Span $style={OverviewStyles.NameStyle}>
                        {constantData.OVERVIEW_DATA.PERSONAL_DATA.NAME}
                    </Span>
                    <Span>{constantData.OVERVIEW_DATA.PERSONAL_DATA.USERNAME + ' - ' + constantData.OVERVIEW_DATA.PERSONAL_DATA.PRONOUNCE}</Span>
                </Flex>
            </Flex>
            <Flex $style={OverviewStyles.InformationWrapperStyle}>
                {constantData.OVERVIEW_DATA.PERSONAL_DATA.INFORMATION.map((item: any, idx: number) => (
                    <Flex key={item.icon || idx} $style={OverviewStyles.InformationTagWrapperStyle}>
                        <Icon icon={item.icon} width="1.5rem" />
                        <Span>{item.value}</Span>
                    </Flex>
                ))}
                <a href={'./resume.pdf'} target="_blank" rel="noreferrer">
                    <Flex $style={OverviewStyles.InformationTagWrapperStyle}>
                        <Icon icon={'download'} width="1.5rem" />
                        <Span>Get my resume</Span>
                    </Flex>
                </a>
            </Flex>
        </Flex>
    </Flex>
);

const AggregateDataGrid = () => (
    <Grid $style={{
        columns: "4",
        gap: "1rem",
        w: "100%",
        $queries: {
            768: {
                columns: "2"
            },
            350: {
                columns: "1"
            }
        }
    }}>
        {constantData.OVERVIEW_DATA.AGGREGATE_DATA.map((item: any, idx: number) => (
            <Flex key={item.value || idx} $style={OverviewStyles.CardStyle}>
                <Icon icon={item.icon} width="3rem" />
                <Flex $style={{ fDirection: "column" }}>
                    <Span>{item.value}</Span>
                    <Span>{item.count}</Span>
                </Flex>
            </Flex>
        ))}
    </Grid>
);

const BarGraph = () => (
    <Flex $style={{
        ...OverviewStyles.BarChartWrapperStyle,
        queries: {
            768: {
                w: "100%"
            }
        }
    }}>
        <Span $style={{ size: "1rem", weight: "600" }}>Project Types</Span>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={constantData.OVERVIEW_DATA.BAR_DATA}>
                <Bar
                    radius={[100, 100, 100, 100]}
                    dataKey="value"
                    fill="#8884d8"
                >
                    {constantData.OVERVIEW_DATA.BAR_DATA.map((_, index: number) => (
                        <Cell key={`cell-${index}`} fill={constantData.OVERVIEW_DATA.COLORS[index % 20]} width={20} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
        <Flex $style={OverviewStyles.GraphCategoryStyle}>
            {constantData.OVERVIEW_DATA.COLORS.map((color: string, index: number) => {
                if (index < constantData.OVERVIEW_DATA.BAR_DATA.length) {
                    return (
                        <Flex key={`bar-${index}`} $style={OverviewStyles.GraphTagWrapperStyle}>
                            <Flex $style={OverviewStyles.DotStyle(color)}></Flex>
                            <Span $style={{ size: ".8rem" }}>
                                {constantData.OVERVIEW_DATA.BAR_DATA[index]?.name}
                            </Span>
                        </Flex>
                    )
                }
                return '';
            })}
        </Flex>
    </Flex>
);

const PieGraph = () => {
    const pieData = constantData.OVERVIEW_DATA.PIE_DATA as PieDatum[];
    const roundedPercentages = getRoundedPercentages(pieData);

    return (
        <Flex $style={{
            ...OverviewStyles.PieChartWrapperStyle,
            queries: {
                768: {
                    w: "100%",
                    h: "25rem"
                }
            }
        }}>
            <Span $style={{ size: "1rem", weight: "600" }}>Skill Distribution</Span>
            <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(props) => renderCustomizedLabel(props, roundedPercentages)}
                        innerRadius="35%"
                        outerRadius="80%"
                        dataKey="value"
                    >
                        {pieData.map((_, index: number) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={constantData.OVERVIEW_DATA.COLORS[index % constantData.OVERVIEW_DATA.COLORS.length]}
                                stroke="none"
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <Flex $style={OverviewStyles.GraphCategoryStyle}>
                {constantData.OVERVIEW_DATA.COLORS.map((color: string, index: number) => {
                    if (index < pieData.length) {
                        return (
                            <Flex key={`pie-${index}`} $style={OverviewStyles.GraphTagWrapperStyle}>
                                <Flex $style={OverviewStyles.DotStyle(color)}></Flex>
                                <Span $style={{ size: ".8rem" }}>
                                    {pieData[index]?.name}
                                </Span>
                            </Flex>
                        )
                    }
                    return '';
                })}
            </Flex>
        </Flex>
    );
};

export default function OverviewPageUI({ menu, follows }: ExperiencePageUIProps) {
    return (
        <Flex $style={OverviewStyles.OverviewContainerStyle}>
            <BackButton />
            <Flex $style={{
                ...OverviewStyles.OverviewWrapperStyle,
                queries: {
                    1150: {
                        fDirection: "column",
                        h: "100%"
                    }
                }
            }}>
                <UserInfo follows={follows} />
                <Flex $style={OverviewStyles.ContentContainerStyle}>
                    <AggregateDataGrid />
                    <Flex $style={{
                        ...OverviewStyles.GraphWrapperStyle,
                        queries: {
                            768: {
                                fDirection: "column",
                                h: "100%"
                            }
                        }
                    }}>
                        <BarGraph />
                        <PieGraph />
                    </Flex>
                    <CareerStaircase data={constantData.OVERVIEW_DATA.CAREER_STAIRCASE_DATA} />
                </Flex>
            </Flex>
            <HStack style={{
                ...OverlayStyle(menu),
                position: "fixed"
            }} />
        </Flex>
    )
}