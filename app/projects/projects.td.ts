export type Range = "2000-2005" | "2006-2010" | "2011-2014";

export type stats = { range: Range, series: Array<number> }

export const statsGroup: stats[] = [
    {
        range: "2000-2005",
        series: [0, 85.7, 14.3]
    },
    {
        range: "2006-2010",
        series: [5, 37.5, 57.5]
    },
    {
        range: "2011-2014",
        series: [31.8, 32, 36.2]
    },
]

export interface RangeoptionsProps {
    active: boolean;
    range: Range;
    setNewRange: (arg0: Range) => void;
}
